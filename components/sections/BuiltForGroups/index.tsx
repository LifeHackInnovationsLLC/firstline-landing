import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import {
  HighlightCard,
  HighlightCardTitle,
} from "@/components/ui/highlight-card";

const items = [
  { color: "purple" as const, title: "Course creators and educators" },
  { color: "green" as const, title: "Online entrepreneurs and influencers" },
  { color: "purple" as const, title: "Discord, Telegram, and private communities" },
  { color: "purple" as const, title: "Marketing agencies and growth collectives" },
  { color: "green" as const, title: "Call centers and outbound sales teams" },
  { color: "purple" as const, title: "Affiliate networks and referral groups" },
];

export default function BuiltForGroups() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <Heading as="h2" align="center" className="text-black">
            Built for groups that already know how to scale
          </Heading>
          <p className="text-text-secondary max-w-2xl">
            Firstline is designed for organizations with reach, trust, or
            distribution. If you already know how to build teams, manage people,
            or grow communities, this fits naturally into what you are already
            doing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {items.map((item) => (
            <HighlightCard key={item.title} color={item.color}>
              <HighlightCardTitle className="mt-16 text-base">
                {item.title}
              </HighlightCardTitle>
            </HighlightCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
