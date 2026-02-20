# Firstline Landing Page

A modern, responsive landing page built with Next.js, React 19, and Tailwind CSS v4.

## Tech Stack

- **Next.js 16** - App Router, file-based routing, server components
- **React 19** - UI library
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Utility-first styling via PostCSS plugin
- **Framer Motion** - Animations
- **Lucide React** - Icon library
- **Class Variance Authority (CVA)** - Component variant management
- **shadcn/ui** - Accessible UI primitives

---

## Folder Structure

```
firstline-landing/
├── app/
│   ├── layout.tsx                  # Root layout (fonts, JSON-LD schemas)
│   ├── (marketing)/
│   │   ├── layout.tsx              # Marketing layout (header + footer)
│   │   ├── page.tsx                # Main landing page — composes all sections
│   │   └── (legal)/
│   │       ├── privacy-policy/     # Privacy policy page
│   │       └── terms-of-service/   # Terms of service page
│   ├── robots.ts                   # Robots.txt generation
│   └── sitemap.ts                  # Sitemap generation
│
├── components/
│   ├── sections/                   # Page sections, grouped by domain
│   │   ├── Hero/
│   │   ├── Benefits/
│   │   ├── Audiences/
│   │   ├── WhySwitch/
│   │   ├── Process/
│   │   ├── Testimonials/
│   │   └── FAQ/
│   │
│   ├── layout/                     # Structural layout components
│   │   ├── section.tsx             # Section wrapper (spacing, id, bg)
│   │   ├── cta.tsx                 # Call-to-action section
│   │   ├── footer.tsx              # Page footer
│   │   └── header/                 # Navigation bar + mobile menu
│   │
│   ├── ui/                         # Reusable UI primitives
│   │   ├── button/
│   │   ├── badge/
│   │   ├── heading/
│   │   ├── accordion/
│   │   ├── testimonial/
│   │   ├── marquee/
│   │   └── ...
│   │
│   └── global/
│       └── logo.tsx
│
├── lib/
│   ├── utils.ts                    # cn() class merging utility
│   └── seo/
│       ├── metadata.ts             # Page metadata config
│       ├── schemas.ts              # JSON-LD structured data
│       └── constants.ts            # SEO constants (site URL, name, etc.)
│
└── public/
    ├── sections/                   # Section-specific images (grouped by section)
    │   ├── hero/
    │   ├── benefits/
    │   ├── audiences/
    │   ├── why-switch/
    │   ├── process/
    │   ├── testimonials/
    │   ├── cta/
    │   └── footer/
    └── fonts/                      # Self-hosted fonts
```

---

## Page Sections

The main page (`app/(marketing)/page.tsx`) is assembled by composing section components in order:

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

Each section lives in its own folder under `components/sections/` and is self-contained — its content, markup, and sub-components are all colocated.

---

## Content Configuration Pattern

All section content is defined as a typed object inside the component file. This keeps copy, data, and structure in one place and makes updates straightforward — no hunting across files.

```tsx
// components/sections/FAQ/index.tsx

type FAQItem = {
  question: string;
  answer: string;
};

const content = {
  heading: "Frequently Asked Questions",
  items: [
    {
      question: "How does billing work?",
      answer: "You're billed monthly, cancel any time.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, 14 days — no credit card required.",
    },
  ] satisfies FAQItem[],
};

export default function FAQ() {
  return (
    <Section id="faq">
      <Heading as="h2">{content.heading}</Heading>
      <Accordion>
        {content.items.map((item) => (
          <AccordionItem key={item.question} question={item.question}>
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
```

**Why this pattern:**
- All copy for a section is in one file — easy to review and update
- TypeScript enforces the shape of each content item
- When the project grows, content objects can be extracted to a CMS or API without changing the component structure

---

## Component Composition Pattern

Sections are built from small, focused sub-components that compose together. Each file does one thing. The `Testimonials` section illustrates this well:

```
components/sections/Testimonials/
├── index.tsx              # Section shell (heading, layout, calls TestimonialsList)
└── testimonials-list.tsx  # Data, TestimonialItem renderer, mobile/desktop variants
```

The `index.tsx` only handles section-level concerns (heading, spacing, background). The list rendering and data live in `testimonials-list.tsx`. The individual card markup comes from `components/ui/testimonial/`.

This same pattern applies across all sections — a section's `index.tsx` is a thin shell that composes smaller pieces. New engineers should follow this by default: if a section file is growing large, extract a sub-component into the same folder.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Adding a New Section

1. Create a folder in `components/sections/YourSection/`
2. Add `index.tsx` as the section shell — define your `content` object at the top
3. Add any sub-components in the same folder
4. Import and render in `app/(marketing)/page.tsx`
5. Add any section images under `public/sections/your-section/`

---

## Key Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://motion.dev/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Class Variance Authority](https://cva.style/docs)
- [Lucide Icons](https://lucide.dev/icons)
