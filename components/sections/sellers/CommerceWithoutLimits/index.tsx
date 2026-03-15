import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
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
        <div className="flex flex-col items-center w-full gap-8 lg:gap-15 max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col gap-4 lg:gap-6 items-center">
            <Heading as="h2" className="text-center">
              Commerce without limits
            </Heading>
            <p className="text-balance text-white/60 text-center text-sm lg:text-base">
              Convert anyone with a phone into a dedicated salesperson with
              trackable conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {items.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  {item.icon}
                  <span className="text-lg text-body font-medium">
                    {item.title}
                  </span>
                </div>
                <span className="text-white/60 text-sm lg:text-base">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
