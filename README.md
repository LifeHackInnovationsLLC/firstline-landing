# Firstline Landing Page

A modern, responsive marketing website built with Next.js, React 19, and Tailwind CSS v4.

## Tech Stack

- **Next.js 16** - App Router, file-based routing, server components
- **React 19** - UI library
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Utility-first styling via PostCSS plugin
- **Framer Motion** - Animations
- **React Hook Form + Zod** - Form handling and validation
- **Lucide React** - Icon library
- **Class Variance Authority (CVA)** - Component variant management
- **shadcn/ui** - Accessible UI primitives
- **Cloudinary** - Image CDN with automatic optimization

---

## Folder Structure

```
firstline-landing/
├── app/
│   ├── layout.tsx                         # Root layout (fonts, JSON-LD schemas)
│   ├── globals.css                        # Global styles
│   ├── robots.ts                          # Robots.txt generation
│   ├── sitemap.ts                         # Sitemap generation
│   ├── opengraph-image.tsx                # OG image generation
│   │
│   └── (marketing)/
│       ├── layout.tsx                     # Marketing layout (Header + Footer + PatternBg)
│       ├── page.tsx                       # Home — main landing page
│       │
│       ├── (with-cta)/                    # Pages that get a CTA section at the bottom
│       │   ├── layout.tsx
│       │   ├── agents/page.tsx            # /agents — sales agent recruitment
│       │   ├── affiliates/page.tsx        # /affiliates — affiliate program
│       │   ├── agencies/page.tsx          # /agencies — agency partnerships
│       │   ├── sellers/page.tsx           # /sellers — seller onboarding
│       │   ├── team/page.tsx              # /team — team building & commissions
│       │   ├── courses/page.tsx           # /courses — course catalog
│       │   └── season-1/page.tsx          # /season-1 — (WIP)
│       │
│       ├── (with-faq-cta)/                # Pages that get FAQ + CTA at the bottom
│       │   ├── layout.tsx
│       │   └── contact/page.tsx           # /contact — contact form
│       │
│       └── (legal)/
│           ├── privacy-policy/page.tsx    # /privacy-policy
│           └── terms-of-service/page.tsx  # /terms-of-service
│
├── components/
│   ├── sections/
│   │   ├── shared/                        # Sections reused across pages
│   │   │   ├── Hero/                      # Hero banner (used by most pages)
│   │   │   └── FAQ/                       # FAQ accordion
│   │   │
│   │   ├── home/                          # Home page sections
│   │   │   ├── Benefits/
│   │   │   ├── Audiences/
│   │   │   ├── WhySwitch/
│   │   │   ├── Process/
│   │   │   └── Testimonials/
│   │   │
│   │   ├── agents/                        # /agents page sections
│   │   │   ├── AgentsStats/
│   │   │   ├── AgentsBento/
│   │   │   ├── AgentsSteps/
│   │   │   ├── AgentsGlobal/
│   │   │   └── TheBottomLine/
│   │   │
│   │   ├── affiliates/                    # /affiliates page sections
│   │   │   ├── AffiliatesBento/
│   │   │   ├── AffiliatesBuiltForYou/
│   │   │   ├── AffiliatesComparison/
│   │   │   ├── AffiliatesStats/
│   │   │   ├── AffiliatesSteps/
│   │   │   └── AffiliatesTeams/
│   │   │
│   │   ├── agencies/                      # /agencies page sections
│   │   │   ├── ClientPayments/
│   │   │   ├── BuiltForGroups/
│   │   │   ├── AgenciesEarnings/
│   │   │   ├── AgenciesSteps/
│   │   │   ├── WhyAgencies/
│   │   │   └── PotentialEarnings/
│   │   │
│   │   ├── sellers/                       # /sellers page sections
│   │   │   ├── SplitPayments/
│   │   │   ├── EverythingToScale/
│   │   │   ├── GrowYourCommunity/
│   │   │   ├── CommerceWithoutLimits/
│   │   │   └── UploadYourCourses/
│   │   │
│   │   ├── team/                          # /team page sections
│   │   │   ├── CommunityDownline/
│   │   │   └── EverythingToSucceed/
│   │   │
│   │   └── contact/                       # /contact page sections
│   │       ├── contact-form.tsx
│   │       └── contact-info.tsx
│   │
│   ├── layout/                            # Structural layout components
│   │   ├── section.tsx                    # Section wrapper (spacing, id, bg)
│   │   ├── cta.tsx                        # Call-to-action section
│   │   ├── footer.tsx                     # Page footer
│   │   └── header/                        # Navigation bar + mobile menu
│   │       ├── index.tsx
│   │       ├── nav-links.tsx
│   │       └── mobile-menu.tsx
│   │
│   ├── ui/                                # Reusable UI primitives (shadcn/ui based)
│   │   ├── button/
│   │   ├── badge/
│   │   ├── heading/
│   │   ├── accordion/
│   │   ├── card/
│   │   ├── feature-card/
│   │   ├── highlight-card/
│   │   ├── testimonial/
│   │   ├── marquee/
│   │   ├── infinite-slider/
│   │   ├── pattern-background/
│   │   ├── input/
│   │   ├── textarea/
│   │   ├── input-group/
│   │   ├── combobox/
│   │   ├── select/
│   │   ├── label/
│   │   ├── separator/
│   │   └── ...
│   │
│   └── global/
│       └── logo.tsx
│
├── lib/
│   ├── utils.ts                           # cn() class merging utility
│   ├── cdn.ts                             # Cloudinary CDN helper + image registry
│   ├── seo/
│   │   ├── metadata.ts                    # Page metadata config + per-page generator
│   │   ├── constants.ts                   # SEO constants (site URL, name, etc.)
│   │   └── ...
│   ├── schemas.ts                         # JSON-LD structured data
│   ├── schemas/
│   │   └── contact.ts                     # Zod schema for contact form
│   └── actions/
│       └── contact.ts                     # Server action for contact form
│
└── public/
    └── fonts/                             # Self-hosted fonts (Britti Sans)
```

---

## Page Routes

| Route | Layout Group | Description |
|-------|-------------|-------------|
| `/` | `(marketing)` | Main landing page — 8 composed sections |
| `/agents` | `(with-cta)` | Sales agent recruitment |
| `/affiliates` | `(with-cta)` | Affiliate program |
| `/agencies` | `(with-cta)` | Agency partnerships |
| `/sellers` | `(with-cta)` | Seller onboarding |
| `/team` | `(with-cta)` | Team building & commissions |
| `/courses` | `(with-cta)` | Course catalog |
| `/season-1` | `(with-cta)` | Season 1 (WIP) |
| `/contact` | `(with-faq-cta)` | Contact form |
| `/privacy-policy` | `(legal)` | Privacy policy |
| `/terms-of-service` | `(legal)` | Terms of service |

---

## Route Group Layouts

Next.js route groups (`(folder-name)`) apply shared layouts without affecting the URL:

- **`(marketing)`** — All pages. Adds Header, Footer, and PatternBg.
- **`(with-cta)`** — Audience pages. Adds a CTA section at the bottom.
- **`(with-faq-cta)`** — Contact page. Adds FAQ + CTA at the bottom.
- **`(legal)`** — Legal pages. Minimal layout, no CTA.

---

## Home Page Sections

The home page (`app/(marketing)/page.tsx`) composes sections in order:

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Main headline, hero image, and social proof stats |
| 2 | **Benefits** | Key feature highlights in a bento grid layout |
| 3 | **Audiences** | Who the product is built for |
| 4 | **WhySwitch** | Reasons to switch / migration value prop |
| 5 | **Process** | Step-by-step onboarding process with dashboard preview |
| 6 | **Testimonials** | Customer testimonials carousel |
| 7 | **FAQ** | Frequently asked questions accordion |
| 8 | **CTA** | Final call-to-action |

---

## Section Architecture

Sections are organized by page under `components/sections/`:

```
components/sections/
├── shared/     # Reusable across pages (Hero, FAQ)
├── home/       # Home page only
├── agents/     # /agents page only
├── affiliates/ # /affiliates page only
├── agencies/   # /agencies page only
├── sellers/    # /sellers page only
├── team/       # /team page only
└── contact/    # /contact page only
```

Each section folder contains:
- `index.tsx` — Section shell (heading, layout, spacing)
- Sub-component files — List renderers, data, cards, etc.

Content is defined as typed objects inside the component file, keeping copy, data, and structure colocated:

```tsx
// components/sections/home/FAQ/index.tsx

const content = {
  heading: "Frequently Asked Questions",
  items: [
    { question: "How does billing work?", answer: "..." },
  ] satisfies FAQItem[],
};
```

---

## Image Management

Images are served from **Cloudinary** — not stored locally in `public/`.

The `lib/cdn.ts` file provides:
- A `cdn()` helper that builds optimized Cloudinary URLs (auto format, auto quality)
- A centralized `images` registry mapping all image paths used across the site

```tsx
import { cdn, images } from "@/lib/cdn";

<Image src={cdn(images.hero.main)} alt="..." />
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended), npm, or bun

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Adding a New Page

1. Create a page file under the appropriate route group in `app/(marketing)/`:
   - Needs a CTA? → `(with-cta)/your-page/page.tsx`
   - Needs FAQ + CTA? → `(with-faq-cta)/your-page/page.tsx`
2. Create a section folder: `components/sections/your-page/YourSection/`
3. Add `index.tsx` as the section shell with a `content` object at the top
4. Import and compose sections in your page file
5. Register any new images in `lib/cdn.ts`
6. Add the route to `lib/seo/metadata.ts` for SEO metadata

## Adding a New Section to an Existing Page

1. Create a folder in `components/sections/<page-name>/YourSection/`
2. Add `index.tsx` with your `content` object and section markup
3. Extract sub-components into the same folder if the file grows large
4. Import and render in the page's `page.tsx`

---

## Key Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://motion.dev/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Class Variance Authority](https://cva.style/docs)
- [Lucide Icons](https://lucide.dev/icons)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
