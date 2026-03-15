import { CommerceWithoutLimits } from "@/components/sections/sellers/CommerceWithoutLimits";
import { EverythingToScale } from "@/components/sections/sellers/EverythingToScale";
import { GrowYourCommunity } from "@/components/sections/sellers/GrowYourCommunity/index";
import { SplitPayments } from "@/components/sections/sellers/SplitPayments";
import { UploadYourCourses } from "@/components/sections/sellers/UploadYourCourses";
import { PageHero } from "@/components/sections/shared/PageHero";
import { cdn, images } from "@/lib/cdn";
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

const heroContent = {
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
      <PageHero
        id="sellers"
        {...heroContent}
        descriptionClassName="text-sm lg:text-base"
        className="relative overflow-hidden min-h-175 -mt-(--navbar-height) pt-(--navbar-height)"
        bgImage={{
          src: cdn(images.sellers.hero, { width: 3840, quality: "100" }),
          alt: "Sellers hero background",
          width: 4320,
          height: 2109,
        }}
      />
      <SplitPayments />
      <EverythingToScale />
      <GrowYourCommunity />
      <CommerceWithoutLimits />
      <UploadYourCourses />
    </>
  );
}
