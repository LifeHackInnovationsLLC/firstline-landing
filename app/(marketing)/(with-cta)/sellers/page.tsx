import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import SplitPayments from "@/components/sections/SplitPayments";
import EverythingToScale from "@/components/sections/EverythingToScale";
import Link from "next/link";
import GrowYourCommunity from "@/components/sections/GrowYourCommunity/index";
import CommerceWithoutLimits from "@/components/sections/CommerceWithoutLimits";

const content = {
  title: "Your products, our mission",
  description:
    "Turn our base of agents and affiliates into a dedicated sales team. Split payments instantly, pay commissions in real-time, and scale globally with Firstline.",
  ctas: [
    {
      label: "Start Selling",
      href: "/sellers/get-started",
      variant: "primary" as const,
    },
    {
      label: "Learn More",
      href: "/sellers/get-started",
      variant: "dark" as const,
    },
  ],
};

export default function SellersPage() {
  return (
    <>
      <SellersPageHero />
      <SplitPayments />
      <EverythingToScale />
      <GrowYourCommunity />
      <CommerceWithoutLimits />
    </>
  );
}

function SellersPageHero() {
  return (
    <Section id="sellers">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col gap-11 max-w-2xl mx-auto items-center text-center pt-40">
            <div className="flex flex-col gap-4 items-center">
              <Heading as="h1">{content.title}</Heading>
              <p>{content.description}</p>
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
