import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HeroKicker } from "@/components/sections/shared/Hero/hero-kicker";
import ClientPayments from "@/components/sections/agencies/ClientPayments";
import BuiltForGroups from "@/components/sections/agencies/BuiltForGroups";
import AgenciesEarnings from "@/components/sections/agencies/AgenciesEarnings";
import AgenciesSteps from "@/components/sections/agencies/AgenciesSteps";
import WhyAgencies from "@/components/sections/agencies/WhyAgencies";
import PotentialEarnings from "@/components/sections/agencies/PotentialEarnings";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Agencies — Turn Your Community Into a Revenue Engine",
  description:
    "Launch your own payment sales team with Firstline. Agencies, creators, and organizations earn recurring monthly income on merchant volume and product sales.",
  path: "/agencies",
  keywords: [
    "agency commission platform",
    "community revenue",
    "agency partner program",
    "merchant volume commissions",
  ],
});

const content = {
  kicker: "$12M+ paid out",
  title: "Turn your community into a revenue engine",
  description:
    "Firstline enables agencies, creators, and organizations to launch their own payment sales teams and earn recurring monthly income on merchant volume and product sales.",
  ctas: [
    {
      label: "Partner with us",
      href: "/agencies/get-started",
      variant: "primary" as const,
    },
    {
      label: "Contact Sales",
      href: "/contact",
      variant: "dark" as const,
    },
  ],
};

export default function AgenciesPage() {
  return (
    <>
      <AgenciesPageHero />
      <ClientPayments />
      <BuiltForGroups />
      <AgenciesEarnings />
      <AgenciesSteps />
      <WhyAgencies />
      <PotentialEarnings />
    </>
  );
}

function AgenciesPageHero() {
  return (
    <Section id="agencies">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col gap-8 lg:gap-11 max-w-2xl mx-auto items-center text-center pt-10 lg:pt-20">
            <div className="flex flex-col gap-4 items-center">
              <HeroKicker>{content.kicker}</HeroKicker>
              <Heading as="h1" align="center">{content.title}</Heading>
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
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
