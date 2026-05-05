import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";
import {
  CrossSellIcon,
  GlobalSalesIcon,
  MobileFirstIcon,
  MultiLevelIcon,
} from "./icons";

const items = [
  {
    icon: <GlobalSalesIcon />,
    title: "Global Sales",
    description: "Sell anywhere, anytime",
  },
  {
    icon: <MobileFirstIcon />,
    title: "Mobile First",
    description: "Every phone is a POS",
  },
  {
    icon: <CrossSellIcon />,
    title: "Cross-Sell",
    description: "Share leads freely",
  },
  {
    icon: <MultiLevelIcon />,
    title: "Multi-Level",
    description: "Unlimited network depth",
  },
];

export function CommerceWithoutLimits() {
  return (
    <Section className="relative overflow-hidden">
      <Image
        src={cdn(images.sellers.commerceWithoutLimitsBg, { width: 1400 })}
        alt=""
        aria-hidden="true"
        fill
        className="absolute inset-0 object-cover pointer-events-none"
        unoptimized
      />
      <div className="container relative overflow-hidden">
        <div className="flex flex-col items-center w-full gap-8 lg:gap-15 [--sellers-section-content-width:31.25rem] max-w-(--sellers-section-content-width) mx-auto lg:max-w-4xl relative z-10">
          <Reveal className="flex flex-col gap-4 lg:gap-6 items-center">
            <Heading as="h2" className="text-center">
              Commerce without limits
            </Heading>
            <p className="text-balance text-white/60 text-center text-sm lg:text-base">
              Convert anyone with a phone into a dedicated salesperson with
              trackable conversions.
            </p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 lg:w-full mx-auto">
            {items.map((item) => (
              <StaggerItem key={item.title} className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="text-lg text-body font-medium">
                    {item.title}
                  </span>
                </div>
                <span className="text-white/60 text-sm lg:text-base">
                  {item.description}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
