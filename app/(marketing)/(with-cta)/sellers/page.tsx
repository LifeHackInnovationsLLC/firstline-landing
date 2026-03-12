import Link from "next/link";
import { Section } from "@/components/layout/section";
import CommerceWithoutLimits from "@/components/sections/sellers/CommerceWithoutLimits";
import EverythingToScale from "@/components/sections/sellers/EverythingToScale";
import GrowYourCommunity from "@/components/sections/sellers/GrowYourCommunity/index";
import SplitPayments from "@/components/sections/sellers/SplitPayments";
import UploadYourCourses from "@/components/sections/sellers/UploadYourCourses";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Sellers — Your Products, Our Sales Network",
  description:
    "Turn Firstline's network of agents and affiliates into your dedicated sales team. Split payments instantly, pay commissions in real-time, and scale globally.",
  path: "/sellers",
  keywords: [
    "seller commission platform",
    "split payments",
    "sales team management",
    "product sales commissions",
  ],
});

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
      <UploadYourCourses />
    </>
  );
}

function SellersPageHero() {
  return (
    <Section id="sellers">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col gap-8 lg:gap-11 max-w-2xl mx-auto items-center text-center pt-10 lg:pt-20">
            <div className="flex flex-col gap-4 items-center">
              <Heading as="h1" align="center">
                {content.title}
              </Heading>
              <p className="text-sm lg:text-base">{content.description}</p>
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
