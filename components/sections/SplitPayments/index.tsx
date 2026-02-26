import { Section } from "@/components/layout/section";
import {
  FeatureCard,
  FeatureCardContent,
  FeatureCardTitle,
  FeatureCardDescription,
  FeatureCardList,
  FeatureCardListItem,
} from "@/components/ui/feature-card";

function InstantPayoutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.76261 2.37747C8.50762 1.4396 7.65102 0.75 6.63356 0.75C5.41503 0.75 4.42722 1.73907 4.42722 2.95915C4.42722 4.17923 5.41503 5.1683 6.63356 5.1683C6.92056 5.1683 7.19477 5.11342 7.44628 5.01359M8.76261 2.37747C9.01412 2.27764 9.28833 2.22277 9.57533 2.22277C10.7939 2.22277 11.7817 3.21183 11.7817 4.43191C11.7817 5.65199 10.7939 6.64106 9.57533 6.64106C8.55787 6.64106 7.70126 5.95146 7.44628 5.01359M8.76261 2.37747C7.73063 2.7871 7.15681 3.94885 7.44628 5.01359M3.69178 14.0049H5.16267C5.16267 14.0049 6.92159 14.6849 8.10444 14.7413C10.7125 14.8656 12.7843 13.6507 14.4624 11.8029C14.8456 11.381 14.8391 10.7439 14.4833 10.2985C14.0246 9.7244 13.1624 9.67794 12.5872 10.135C11.9534 10.6386 11.1123 11.2051 10.3108 11.4275C9.2037 11.7349 8.10444 11.7957 8.10444 11.7957C13.988 11.4275 11.7817 6.64095 3.69178 9.95482M0.75 8.85021H3.69178V14.7413H0.75V8.85021Z" stroke="#9C8AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SplitPaymentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.625 14.75V11.25M1.625 11.25H5.125M1.625 11.25C2.83533 13.3423 5.15901 14.75 7.75 14.75C11.616 14.75 14.75 11.616 14.75 7.75M13.8854 0.75V4.25H10.3854M0.75 7.75C0.75 3.88401 3.88401 0.75 7.75 0.75C10.341 0.75 12.6647 2.15769 13.875 4.25" stroke="#51C9C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RiskBasedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.75 4.25014C6.60981 4.25014 5.81576 4.76725 5.81576 5.88401C5.81576 7.16343 6.80079 7.43784 7.75 7.75962C8.69921 8.0814 9.68424 8.35582 9.68424 9.63523C9.68424 10.752 8.89019 11.2691 7.75 11.2691M7.75 4.25014C8.57517 4.25014 9.17639 4.64011 9.48423 5.19269M7.75 4.25014V3.08257M7.75 11.2691C6.92484 11.2691 6.32361 10.8791 6.01578 10.3266M7.75 11.2691V12.4167M14.75 7.75C14.75 11.616 11.616 14.75 7.75 14.75C3.88401 14.75 0.75 11.616 0.75 7.75C0.75 3.88401 3.88401 0.75 7.75 0.75C11.616 0.75 14.75 3.88401 14.75 7.75Z" stroke="#9C8AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function HighValueIcon() {
  return (
    <svg className="shrink-0" width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.7516 2.74999V0.75M7.51356 4.15369L6.09947 2.62161M16 4.15365L17.4141 2.62157M0.75 15.75H6.63666C8.30088 15.75 9.70467 14.6234 9.91109 13.1221L10.1861 11.1221C10.4323 9.33159 8.89655 7.75006 6.91165 7.75006H6.79984L6.02508 7.2805C5.46767 6.94266 4.77936 6.83428 4.12943 6.98199C3.38871 7.15034 2.78197 7.63182 2.49841 8.27629L1.84997 9.75004H0.75M22.75 15.75H16.8633C15.1991 15.75 13.7953 14.6234 13.5889 13.1221L13.3139 11.1221C13.0677 9.33159 14.6035 7.75006 16.5883 7.75006H16.7002L17.4749 7.2805C18.0323 6.94266 18.7206 6.83428 19.3706 6.98199C20.1113 7.15034 20.718 7.63182 21.0016 8.27629L21.65 9.75004H22.75" stroke="#51C9C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const items = [
  { icon: <InstantPayoutIcon />, label: "Instant commission payouts at point of sale" },
  { icon: <SplitPaymentIcon />, label: "Split payments to multiple recipients automatically" },
  { icon: <RiskBasedIcon />, label: "Risk-based instant access to funds" },
  { icon: <HighValueIcon />, label: "High-value transaction support" },
];

export default function SplitPayments() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <FeatureCard>
          <FeatureCardContent>
            <FeatureCardTitle>Split payments at sale</FeatureCardTitle>
            <FeatureCardDescription>
              Pay commissions to 1 or 5 people instantly when you collect. Based on
              your risk tolerance, get your money in your account immediately, even
              for high-value transactions.
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
        </FeatureCard>
      </div>
    </Section>
  );
}
