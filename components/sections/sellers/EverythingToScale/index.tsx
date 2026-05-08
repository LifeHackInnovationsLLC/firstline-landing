import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import {
  HighlightCard,
  HighlightCardDescription,
  HighlightCardIcon,
  HighlightCardTitle,
} from "@/components/ui/highlight-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import {
  AccessToLendingIcon,
  AnalyticsDashboardIcon,
  CommissionTrackingIcon,
  FunnelBuilderIcon,
  NeoBankingIcon,
  PaymentProcessingIcon,
} from "./icons";

const items = [
  {
    icon: <FunnelBuilderIcon />,
    color: "purple" as const,
    title: "Funnel Builder",
    description:
      "Build high-converting funnels with pixel tracking built right in. Track every click.",
  },
  {
    icon: <AnalyticsDashboardIcon />,
    color: "green" as const,
    title: "Analytics Dashboard",
    description:
      "Real-time conversion tracking down to the second. Know exactly what's working.",
  },
  {
    icon: <AccessToLendingIcon />,
    color: "purple" as const,
    title: "Access to Lending",
    description:
      "Scale faster with access to capital. NEO banking features from Firstline & OZURA.",
  },
  {
    icon: <PaymentProcessingIcon />,
    color: "green" as const,
    title: "Payment Processing",
    description:
      "Accept payments globally. Instant splits, instant payouts, zero friction.",
  },
  {
    icon: <NeoBankingIcon />,
    color: "purple" as const,
    title: "NEO Banking",
    description:
      "Modern banking features designed for sellers. Move money without limits.",
  },
  {
    icon: <CommissionTrackingIcon />,
    color: "green" as const,
    title: "Commission Tracking",
    description:
      "Track every sale, every commission, every payout in real-time.",
  },
];

export function EverythingToScale() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="[--sellers-section-content-width:31.25rem] max-w-(--sellers-section-content-width) mx-auto lg:max-w-none">
          <Reveal className="flex flex-col items-center text-center gap-4">
            <Heading as="h2" align="center" className="text-black">
              Everything you need to scale
            </Heading>
            <p className="text-text-secondary">
              From funnels to financing, we&apos;ve got you covered.
            </p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {items.map((item) => (
              <StaggerItem key={item.title}>
                <HighlightCard color={item.color}>
                  <div className="flex flex-col gap-5">
                    <HighlightCardIcon>{item.icon}</HighlightCardIcon>
                    <div className="flex flex-col gap-2">
                      <HighlightCardTitle>{item.title}</HighlightCardTitle>
                      <HighlightCardDescription className="mt-0">
                        {item.description}
                      </HighlightCardDescription>
                    </div>
                  </div>
                </HighlightCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
