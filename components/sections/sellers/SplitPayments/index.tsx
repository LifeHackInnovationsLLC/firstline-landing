import Image from "next/image";
import { Section } from "@/components/layout/section";
import {
  FeatureCard,
  FeatureCardContent,
  FeatureCardDescription,
  FeatureCardTitle,
} from "@/components/ui/feature-card";
import {
  Reveal,
  RevealScale,
  StaggerGroup,
  StaggerItem,
} from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";
import {
  HighValueIcon,
  InstantPayoutIcon,
  RiskBasedIcon,
  SplitPaymentIcon,
} from "./icons";

const items = [
  {
    icon: <InstantPayoutIcon />,
    label: "Instant commission payouts at point of sale",
  },
  {
    icon: <SplitPaymentIcon />,
    label: "Split payments to multiple recipients automatically",
  },
  { icon: <RiskBasedIcon />, label: "Risk-based instant access to funds" },
  { icon: <HighValueIcon />, label: "High-value transaction support" },
];

export function SplitPayments() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <FeatureCard className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0 [--sellers-section-content-width:31.25rem] max-w-(--sellers-section-content-width) mx-auto lg:max-w-none">
          <Image
            src={cdn(images.sellers.ellipseSplitPayments)}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none -top-40 -left-40 hidden lg:block"
            width={1000}
            height={1000}
            unoptimized
          />
          <Image
            src={cdn(images.sellers.greenEllipseSplitPayments)}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none -bottom-20 -right-20"
            width={1000}
            height={1000}
            unoptimized
          />
          <FeatureCardContent className="relative z-10">
            <Reveal>
              <FeatureCardTitle>Split payments at sale</FeatureCardTitle>
            </Reveal>
            <Reveal delay={0.05}>
              <FeatureCardDescription>
                Pay commissions to 1 or 5 people instantly when you collect.
                Based on your risk tolerance, get your money in your account
                immediately, even for high-value transactions.
              </FeatureCardDescription>
            </Reveal>
            <StaggerGroup as="ul" className="mt-10 flex flex-col gap-[14px]">
              {items.map((item) => (
                <StaggerItem
                  as="li"
                  key={item.label}
                  from="left"
                  className="flex flex-row items-center gap-[14px] text-sm text-white"
                >
                  {item.icon}
                  {item.label}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </FeatureCardContent>
          <RevealScale
            delay={0.1}
            className="max-w-sm lg:max-w-xl relative z-10 mx-auto lg:mx-0"
          >
            <Image
              src={cdn(images.sellers.graphicSplitPayments)}
              alt="Split payments"
              width={600}
              height={300}
              unoptimized
            />
          </RevealScale>
        </FeatureCard>
      </div>
    </Section>
  );
}
