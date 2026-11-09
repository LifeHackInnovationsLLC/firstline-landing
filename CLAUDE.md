# Firstline Landing — Marketing Site (editing map)

The public **marketing site**, live at **https://firstline.digital**.

**You edit files; they deploy themselves.** A landing edit triggers a rebuild, so it goes live
in **~30–60 seconds** (give it a minute — not instant like the dashboard). You don't run
`next build`, start a server, or deploy — that's automatic.

## Stack

- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS**, shadcn-style UI primitives.
- Pages are **file-based**: a folder with a `page.tsx` under `app/(marketing)/` is a route.

## Where is this UI? (search first, then use this map)

**Fastest way:** search for the visible text. `rg -n "the headline text" app components` lands you on the file.

| You want to change… | Edit here |
|---|---|
| The **homepage** (sections + order) | `app/(marketing)/page.tsx` |
| The **homepage hero / main headline** | `components/sections/shared/Hero` |
| A homepage **section** (Benefits, Audiences, WhySwitch, Process, Testimonials, FAQ) | `components/sections/home/**` |
| Another page's **hero / headline** (agents, sellers, affiliates, courses…) | that page's `app/(marketing)/**/page.tsx` → its `heroContent` object + `components/sections/shared/PageHero` |
| A specific marketing **page's content** | `app/(marketing)/<route>/page.tsx` (+ its section components in `components/sections/<route>/`) |
| **Header / nav / footer / CTA** | `components/layout/**` |
| **Colors / global styles / fonts** | `app/globals.css` (theme tokens) and `tailwind`/`app/layout.tsx` |
| Reusable **UI building blocks** (Button, Card…) | `components/ui/**` |
| **SEO** (title/description, sitemap, robots) | `app/layout.tsx`, `app/(marketing)/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` |

There are also helpful design skills in `.claude/skills/` (web-design-guidelines,
vercel-react-best-practices, seo-geo) — use them for higher-quality marketing edits.

## Editing rules (keep it safe)
- ✅ Small, focused content/style edits; match the existing component + Tailwind patterns.
- ⏱️ After a landing edit, wait ~30–60s and refresh `firstline.digital` (it's rebuilding).
- ❌ Don't edit `.env`, secrets, `next.config.ts`, or `package.json`.
- ❌ Don't run build/deploy/server commands or `git push` — all automatic / handled separately.
- 🙋 Unsure? Ask first — a quick question beats breaking the live site.
