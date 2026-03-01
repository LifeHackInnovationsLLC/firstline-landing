import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import GreenDecorationImage from "@/public/sections/sellers/commerce-without-limits-decoration-green.webp";
import PurpleDecorationImage from "@/public/sections/sellers/commerce-without-limits-decoration-purple.webp";
import Image from "next/image";
import {
  GlobalSalesIcon,
  MobileFirstIcon,
  CrossSellIcon,
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

export default function CommerceWithoutLimits() {
  return (
    <Section className="relative overflow-hidden py-25">
      <div className="container relative overflow-hidden">
        <div className="flex flex-col items-center w-full gap-15 max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col gap-6 items-center">
            <Heading as="h2" className="text-center">
              Commerce without limits
            </Heading>
            <p className="text-balance text-white/60 text-center">
              Convert anyone with a phone into a dedicated salesperson with
              trackable conversions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {items.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  {item.icon}
                  <span className="text-lg text-body font-medium">
                    {item.title}
                  </span>
                </div>
                <span className="text-white/60">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
