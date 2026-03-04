import { Section } from "@/components/layout/section";
import { AffiliatesBento } from "@/components/sections/AffiliatesBento";
import { AffiliatesBuiltForYou } from "@/components/sections/AffiliatesBuiltForYou";
import { AffiliatesComparison } from "@/components/sections/AffiliatesComparison";
import { AffiliatesStats } from "@/components/sections/AffiliatesStats";
import { AffiliatesSteps } from "@/components/sections/AffiliatesSteps";
import { AffiliatesTeams } from "@/components/sections/AffiliatesTeams";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Affiliates — Earn Recurring Commissions",
  description:
    "Earn recurring monthly income as a Firstline affiliate. Promote payment processing solutions, track your commissions in real-time, and get paid automatically.",
  path: "/affiliates",
  keywords: [
    "affiliate program",
    "recurring affiliate commissions",
    "affiliate payout platform",
    "payment processing affiliate",
  ],
});

const content = {
  title: "The ultimate side hustle",
  description:
    "Turn payment processing volume into recurring monthly income. A revenue stream once limited to insiders, now open to you!",
  ctas: [
    {
      label: "Start Earning Today",
      href: "/affiliates/get-started",
      variant: "primary" as const,
    },
    {
      label: "Watch Training",
      href: "/affiliates/training",
      variant: "dark" as const,
      icon: (
        <svg
          className="size-2 ml-2 mt-1"
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 3.59955C8.16667 3.98445 8.16667 4.9467 7.5 5.3316L1.5 8.7957C0.833334 9.1806 -4.47338e-07 8.69948 -4.13689e-07 7.92968L-1.10848e-07 1.00147C-7.71986e-08 0.231674 0.833333 -0.249451 1.5 0.135449L7.5 3.59955Z"
            fill="white"
          />
        </svg>
      ),
    },
  ],
};

export default function AffiliatesPage() {
  return (
    <>
      <AffiliatesPageHero />
      <AffiliatesStats />
      <AffiliatesBento />
      <AffiliatesSteps />
      <AffiliatesComparison />
      <AffiliatesBuiltForYou />
      <AffiliatesTeams />
    </>
  );
}

function AffiliatesPageHero() {
  return (
    <Section id="affiliates">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col gap-8 lg:gap-11 max-w-2xl mx-auto items-center text-center pt-10 lg:pt-20">
            <div className="flex flex-col gap-4 items-center">
              <Heading as="h1" align="center">
                {content.title}
              </Heading>
              <p className="text-white/72 text-sm lg:text-base max-w-lg">
                {content.description}
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              {content.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  nativeButton={false}
                  variant={cta.variant}
                  render={<Link href={cta.href} />}
                >
                  {cta.label}
                  {"icon" in cta && cta.icon}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
