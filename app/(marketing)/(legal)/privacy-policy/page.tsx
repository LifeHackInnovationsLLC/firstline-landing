import type { ReactNode } from "react";

import { Section } from "@/components/layout/section";
import { HeroKicker } from "@/components/sections/shared/Hero/hero-kicker";
import { Heading } from "@/components/ui/heading";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Firstline Digital LLC collects, uses, and protects your data. We never store banking information directly — all financial data is handled by third-party partners.",
  path: "/privacy-policy",
  noIndex: false,
});

interface PolicySection {
  title: string;
  content: ReactNode;
}

const sections: PolicySection[] = [
  {
    title: "Overview",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        Turn our base of agents and affiliates into a dedicated sales team.
        Split payments instantly, pay commissions in real-time, and scale
        globally with Firstline.
      </p>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-white text-sm font-semibold mb-2">
            Information We May Collect:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
            <li>Name, email address, and account credentials</li>
            <li>Business or sales-related data entered into the platform</li>
            <li>Usage data (logins, activity, performance metrics)</li>
          </ul>
        </div>
        <div>
          <p className="text-white text-sm font-semibold mb-2">
            Information We Do NOT Collect:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
            <li>Bank account numbers</li>
            <li>Debit or credit card numbers</li>
            <li>Social Security numbers</li>
            <li>Government-issued identification</li>
            <li>Sensitive personal financial data</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Financial Information & Third Parties",
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-white/60 text-sm leading-relaxed">
          All banking and payout information is collected and processed
          exclusively by third-party partners through:
        </p>
        <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
          <li>Hosted payment pages</li>
          <li>Embedded iframe</li>
        </ul>
        <p className="text-white text-sm font-semibold">
          Firstline Digital never directly receives, stores, or controls this
          information.
        </p>
      </div>
    ),
  },
  {
    title: "How We Use Information",
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-white/60 text-sm">
          We use collected information to:
        </p>
        <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
          <li>Operate and improve the platform</li>
          <li>Provide reporting and analytics</li>
          <li>Support sales tracking and commission visibility</li>
          <li>Communicate platform updates</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Data Sharing",
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-white text-sm font-semibold">
          We do not sell personal data
        </p>
        <p className="text-white/60 text-sm">We may share limited data:</p>
        <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
          <li>With service providers necessary to operate the platform</li>
          <li>To comply with legal obligations</li>
          <li>To enforce our Terms of Service</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Data Security",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        We implement reasonable technical and organizational safeguards to
        protect platform data. However, no system is 100% secure, and we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    title: "Cookies & Analytics",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        We may use cookies and analytics tools to understand usage patterns and
        improve functionality. Users may disable cookies via browser settings.
      </p>
    ),
  },
  {
    title: "User Rights",
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-white/60 text-sm">
          Depending on your jurisdiction, you may have rights to:
        </p>
        <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
          <li>Access your data</li>
          <li>Request corrections</li>
          <li>Request deletion</li>
        </ul>
        <p className="text-white/60 text-sm">
          Requests can be submitted to:{" "}
          <a
            href="mailto:privacy@firstline.digital"
            className="text-white underline underline-offset-2"
          >
            privacy@firstline.digital
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Third-Party Links",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        Our platform may link to third-party services. We are not responsible
        for their privacy practices.
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        We may update this Privacy Policy from time to time. Continued use
        constitutes acceptance of any changes.
      </p>
    ),
  },
  {
    title: "Contact Information",
    content: (
      <div className="flex flex-col gap-1 text-sm">
        <p className="text-white font-semibold">Firstline Digital LLC</p>
        <p className="text-white/60">
          Email:{" "}
          <a
            href="mailto:privacy@firstline.digital"
            className="text-white underline underline-offset-2"
          >
            privacy@firstline.digital
          </a>
        </p>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-2xl">
          <div className="flex flex-col">
            <HeroKicker>Legal</HeroKicker>
            <Heading as="h1" className="mt-6">
              Privacy Policy
            </Heading>
            <p className="mt-4 text-white/50 text-sm">
              Last updated: January 2026
            </p>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <Heading as="h2" size="md">
                  {section.title}
                </Heading>
                {section.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
