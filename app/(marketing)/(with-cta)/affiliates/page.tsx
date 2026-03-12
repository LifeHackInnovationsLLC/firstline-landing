import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { AffiliatesBento } from "@/components/sections/affiliates/AffiliatesBento";
import { AffiliatesBuiltForYou } from "@/components/sections/affiliates/AffiliatesBuiltForYou";
import { AffiliatesComparison } from "@/components/sections/affiliates/AffiliatesComparison";
import { AffiliatesStats } from "@/components/sections/affiliates/AffiliatesStats";
import { AffiliatesSteps } from "@/components/sections/affiliates/AffiliatesSteps";
import { AffiliatesTeams } from "@/components/sections/affiliates/AffiliatesTeams";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { cdn, images } from "@/lib/cdn";
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
  title: "Finally, commissions you can trust",
  description:
    "No more promo codes and promises. No more complex contracts hiding your true earnings. Firstline gives you real-time visibility and instant settlement of every commission you earn.",
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
    <Section id="affiliates" className="relative overflow-hidden">
      <Image
        src={cdn(images.affiliates.hero, { width: 1920 })}
        alt="Affiliates hero — earn recurring commissions with Firstline"
        width={4320}
        height={2109}
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container relative z-10">
        <div className="flex flex-col">
          <div className="flex flex-col gap-8 lg:gap-11 max-w-200 mx-auto items-center text-center pt-10 lg:pt-20">
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
