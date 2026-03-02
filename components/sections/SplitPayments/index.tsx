import { Section } from "@/components/layout/section";
import {
  FeatureCard,
  FeatureCardContent,
  FeatureCardTitle,
  FeatureCardDescription,
  FeatureCardList,
  FeatureCardListItem,
} from "@/components/ui/feature-card";
import { cdn, images } from "@/lib/cdn";
import {
  InstantPayoutIcon,
  SplitPaymentIcon,
  RiskBasedIcon,
  HighValueIcon,
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

export default function SplitPayments() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <FeatureCard className="flex flex-row justify-between">
          <img
            src={cdn(images.sellers.ellipseSplitPayments)}
            alt="Split payments"
            className="absolute pointer-events-none -top-40 -left-40"
            width={1000}
            height={1000}
          />
          <img
            src={cdn(images.sellers.greenEllipseSplitPayments)}
            alt="Split payments"
            className="absolute pointer-events-none -bottom-20 -right-20"
            width={1000}
            height={1000}
          />
          <FeatureCardContent className="relative z-10">
            <FeatureCardTitle>Split payments at sale</FeatureCardTitle>
            <FeatureCardDescription>
              Pay commissions to 1 or 5 people instantly when you collect. Based
              on your risk tolerance, get your money in your account
              immediately, even for high-value transactions.
            </FeatureCardDescription>
            <FeatureCardList>
              {items.map((item) => (
                <FeatureCardListItem key={item.label}>
                  {item.icon}
                  {item.label}
                </FeatureCardListItem>
              ))}
            </FeatureCardList>
          </FeatureCardContent>
          <div className="max-w-xl relative z-10">
            <img src={cdn(images.sellers.graphicSplitPayments)} alt="Split payments" />
          </div>
        </FeatureCard>
      </div>
    </Section>
  );
}
