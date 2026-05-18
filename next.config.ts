import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: no Node server is produced, so the prior standalone-SSR
  // basePath redirect loop is structurally impossible. Output is a plain
  // static `out/` directory of HTML/JS/CSS.
  output: "export",

  // basePath prefixes BOTH emitted asset URLs (/_next/...) AND internal
  // <Link> hrefs at build time. Critically, with output:'export' this does
  // NOT physically nest files under out/<basePath>/ — the files still land
  // at the `out/` root (out/index.html, out/_next/..., out/team/index.html,
  // ...). Only the URL strings written inside the HTML/JS carry the prefix.
  // This matches the nginx prefix-strip serving model: container web root ==
  // out/ root, browser requests carry the prefix (so they hit the correct
  // nginx location), nginx strips it, the container serves from root.
  //
  // The prefix is NOT hardcoded: it is read from NEXT_PUBLIC_BASE_PATH so the
  // SAME repo can be built into 3 concurrent static instances served under
  // different nginx sub-paths (production/staging/develop). The value is
  // supplied per-branch via the in-repo `deploy.env` file, which the
  // Dockerfile sources before `pnpm build` (the deploy engine passes NO
  // docker build args and .git is dockerignored, so the value MUST come from
  // an in-repo file consumed at build time). Empty string => no prefix
  // (e.g. local `pnpm dev` / `pnpm build` with no env set).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",

  // Static export has no Image Optimization server; images must be served
  // as-is. Required for output:'export'.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/deoxevgc6/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },

  // Emit /team -> /team/index.html (directory-style) so nginx
  // `try_files $uri $uri/ ...` resolves clean URLs without an explicit
  // .html extension.
  trailingSlash: true,
};

export default nextConfig;
