# ---------------------------------------------------------------------------
# firstline-landing — static export served by nginx
# ---------------------------------------------------------------------------
# SERVING MODEL (read this before changing paths):
#
# This repo is deployed as THREE concurrent static instances, each served
# under its own outer-nginx sub-path (branches main / staging / develop):
#   location /firstline-landing-production/ { proxy_pass http://CONTAINER:8080/; }
#   location /firstline-landing-staging/    { proxy_pass http://CONTAINER:8080/; }
#   location /firstline-landing-develop/    { proxy_pass http://CONTAINER:8080/; }
# The trailing slash on proxy_pass STRIPS the sub-path prefix, so the
# CONTAINER receives requests at the ROOT (example: production instance):
#   browser GET https://developers.firstline.digital/firstline-landing-production/        -> container GET /
#   browser GET https://developers.firstline.digital/firstline-landing-production/team/   -> container GET /team/
#   browser GET .../firstline-landing-production/_next/static/x.js                        -> container GET /_next/static/x.js
#
# Next.js is built with `output: 'export'` + a per-branch
# `basePath: $NEXT_PUBLIC_BASE_PATH` (NOT hardcoded — see next.config.ts).
# The prefix value is supplied by the in-repo `deploy.env` file, which this
# Dockerfile sources just before `pnpm build` (the deploy engine passes NO
# docker build args and .git is dockerignored, so the value MUST live in an
# in-repo file consumed at build time). The human sets deploy.env per branch:
#   main    -> NEXT_PUBLIC_BASE_PATH=/firstline-landing-production
#   staging -> NEXT_PUBLIC_BASE_PATH=/firstline-landing-staging
#   develop -> NEXT_PUBLIC_BASE_PATH=/firstline-landing-develop
#
# With output:'export', basePath does NOT physically nest the files under
# out/<basePath>/ — every file lands at the `out/` ROOT
# (out/index.html, out/_next/..., out/team/index.html, out/robots.txt, ...).
# basePath ONLY prefixes the URL strings written inside the emitted HTML/JS
# (so the browser requests carry the sub-path prefix and hit the correct
# outer nginx location). There is NO server in a static export, so the prior
# standalone-SSR basePath redirect loop is structurally impossible.
#
# Therefore: container web root == the `out/` ROOT. We COPY out/ -> /usr/share/nginx/html.
# A request the container sees as `/` must serve out/index.html; `/team/` must
# serve out/team/index.html; `/_next/...` must serve the matching file.
# ---------------------------------------------------------------------------

# ---- Stage 1: build the static export -------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app

# Enable the pinned pnpm via corepack (package.json: packageManager pnpm@10.15.1)
RUN corepack enable

# Install deps first (better layer caching)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Build (produces /app/out — a fully static site).
# `COPY . .` brings in the in-repo `deploy.env` (the deploy engine passes no
# build args). Source it so NEXT_PUBLIC_BASE_PATH / NEXT_PUBLIC_DEPLOY_BRANCH
# are exported, and stamp a UTC build time, so Next inlines every
# NEXT_PUBLIC_* into the static export at build time. `set -a` auto-exports
# everything sourced from deploy.env; the build inherits all three vars.
COPY . .
RUN set -a && . ./deploy.env && export NEXT_PUBLIC_BUILD_TIME="$(date -u +%Y-%m-%dT%H:%M:%SZ)" && pnpm build

# ---- Stage 2: serve with nginx --------------------------------------------
FROM nginx:alpine

# Container web root = the out/ ROOT (files are at root; URLs inside carry
# the per-branch $NEXT_PUBLIC_BASE_PATH prefix — see header comment).
COPY --from=builder /app/out /usr/share/nginx/html

# nginx config:
#  - listen 8080 (non-privileged; matches EXPOSE and the outer proxy_pass port)
#  - trailingSlash:true emitted directory-style pages (out/team/index.html),
#    so `try_files $uri $uri/ =404` resolves /team/ -> /team/index.html and
#    /_next/static/x.js -> the exact file. `/` -> index (root index.html).
#  - 404 -> the prebuilt out/404.html (Next's static not-found page).
RUN printf '%s\n' \
  'server {' \
  '    listen 8080;' \
  '    server_name _;' \
  '    root /usr/share/nginx/html;' \
  '    index index.html;' \
  '    location / {' \
  '        try_files $uri $uri/ =404;' \
  '    }' \
  '    error_page 404 /404.html;' \
  '    location = /404.html { internal; }' \
  '}' > /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
