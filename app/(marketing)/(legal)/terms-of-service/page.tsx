import type { ReactNode } from "react";

import { Section } from "@/components/layout/section";
import { HeroKicker } from "@/components/sections/shared/Hero/hero-kicker";
import { Heading } from "@/components/ui/heading";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description:
    "Read the Firstline Digital LLC Terms of Service. Understand your rights, responsibilities, and our platform's legal framework for commission management.",
  path: "/terms-of-service",
  noIndex: false,
});

interface PolicySection {
  title: string;
  content: ReactNode;
}

const sections: PolicySection[] = [
  {
    title: "Acceptance of Terms",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        By accessing or using the Firstline Digital LLC platform
        (&quot;Firstline,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;), you agree to be bound by these Terms of Service
        (&quot;Terms&quot;). If you do not agree, you may not access or use the
        platform.
      </p>
    ),
  },
  {
    title: "Description of Services",
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-white/60 text-sm leading-relaxed">
          Firstline Digital LLC provides a marketing and sales management
          software platform designed to help users:
        </p>
        <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
          <li>Build and manage sales teams</li>
          <li>Track sales activity and performance</li>
          <li>Configure and view commission structures</li>
          <li>View commission payouts and bonuses</li>
          <li>Access reporting and analytics tools</li>
        </ul>
        <p className="text-white text-sm font-semibold">
          Firstline Digital is strictly a software and marketing tool. It does
          not provide banking services, payment processing, money transmission,
          custodial services, or financial advisory services.
        </p>
      </div>
    ),
  },
  {
    title: "No Guarantee of Earnings",
    content: (
      <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
        <li>
          Firstline Digital does not guarantee income, profits, commissions, or
          financial success of any kind.
        </li>
        <li>
          There is no promise or representation that users will earn money.
        </li>
        <li>There is no purchase required to participate.</li>
        <li>
          Earnings, if any, depend entirely on individual effort, market
          conditions, third-party services, and other factors outside Firstline
          Digital&apos;s control.
        </li>
      </ul>
    ),
  },
  {
    title: "Third-Party Partners & Payment Processing",
    content: (
      <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
        <li>
          Firstline Digital integrates with third-party partners, including
          payment processors and financial service providers (such as Firstline
          Payments), to provide visibility into transaction flows.
        </li>
        <li>
          All payment processing, payouts, banking information, and financial
          transactions are handled exclusively by upstream partners.
        </li>
        <li>
          Firstline Digital does not store funds, hold deposits, or process
          payments.
        </li>
        <li>
          Any financial data is accessed only through iframes, hosted payment
          pages, or third-party integrations.
        </li>
        <li>
          Users acknowledge that all financial relationships are directly
          between the user and the third-party provider.
        </li>
      </ul>
    ),
  },
  {
    title: "No Responsibility for Financial Transactions",
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-white/60 text-sm">
          Firstline Digital LLC is not responsible or liable for:
        </p>
        <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
          <li>Payment failures, delays, reversals, or chargebacks</li>
          <li>Errors in commission payouts</li>
          <li>Banking or financial account issues</li>
          <li>Compliance obligations of third-party providers</li>
          <li>Disputes between users and payment processors</li>
        </ul>
        <p className="text-white text-sm font-semibold">
          All such matters must be resolved directly with the applicable
          third-party provider.
        </p>
      </div>
    ),
  },
  {
    title: "User Responsibilities",
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-white/60 text-sm">Users agree to:</p>
        <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
          <li>Provide accurate and lawful information</li>
          <li>Use the platform in compliance with applicable laws</li>
          <li>Not misuse, exploit, or reverse-engineer the platform</li>
          <li>Not make misleading income claims to others</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        All software, branding, content, and materials on the platform are the
        exclusive property of Firstline Digital LLC. No license is granted
        except for personal, lawful use of the platform.
      </p>
    ),
  },
  {
    title: "Disclaimer of Warranties",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        The platform is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;,
        without warranties of any kind, express or implied, including but not
        limited to fitness for a particular purpose or uninterrupted
        availability.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-white/60 text-sm">
          To the maximum extent permitted by law, Firstline Digital LLC shall
          not be liable for:
        </p>
        <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
          <li>Indirect, incidental, consequential, or punitive damages</li>
          <li>Loss of profits, revenue, or data</li>
          <li>Business interruption</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Indemnification",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        You agree to indemnify and hold harmless Firstline Digital LLC from any
        claims, damages, or expenses arising from your use of the platform or
        violation of these Terms.
      </p>
    ),
  },
  {
    title: "Modifications",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        We reserve the right to modify these Terms at any time. Continued use of
        the platform constitutes acceptance of updated Terms.
      </p>
    ),
  },
  {
    title: "Governing Law",
    content: (
      <p className="text-white/60 text-sm leading-relaxed">
        These Terms are governed by the laws of the State of Delaware, without
        regard to conflict-of-law principles.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <Section>
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-2xl">
          <div className="flex flex-col">
            <HeroKicker>Legal</HeroKicker>
            <Heading as="h1" className="mt-6">
              Terms of Service
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
