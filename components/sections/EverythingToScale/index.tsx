import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import {
  HighlightCard,
  HighlightCardTitle,
  HighlightCardDescription,
} from "@/components/ui/highlight-card";

const items = [
  {
    color: "purple" as const,
    title: "Funnel Builder",
    description:
      "Build high-converting funnels with pixel tracking built right in. Track every click.",
  },
  {
    color: "green" as const,
    title: "Analytics Dashboard",
    description:
      "Real-time conversion tracking down to the second. Know exactly what's working.",
  },
  {
    color: "purple" as const,
    title: "Access to Lending",
    description:
      "Scale faster with access to capital. NEO banking features from Firstline & OZURA.",
  },
  {
    color: "green" as const,
    title: "Payment Processing",
    description:
      "Accept payments globally. Instant splits, instant payouts, zero friction.",
  },
  {
    color: "green" as const,
    title: "NEO Banking",
    description:
      "Modern banking features designed for sellers. Move money without limits.",
  },
  {
    color: "purple" as const,
    title: "Commission Tracking",
    description:
      "Track every sale, every commission, every payout in real-time.",
  },
];

export default function EverythingToScale() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4">
          <Heading as="h2" align="center" className="text-black">
            Everything you need to scale
          </Heading>
          <p className="text-text-secondary">
            From funnels to financing, we&apos;ve got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {items.map((item) => (
            <HighlightCard key={item.title} color={item.color}>
              <HighlightCardTitle className="mt-16">
                {item.title}
              </HighlightCardTitle>
              <HighlightCardDescription>
                {item.description}
              </HighlightCardDescription>
            </HighlightCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
