import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import {
  HighlightCard,
  HighlightCardDescription,
  HighlightCardIcon,
  HighlightCardTitle,
} from "@/components/ui/highlight-card";
import {
  BonusAndRewardsIcon,
  CommissionSplittingIcon,
  FinanceToolsIcon,
  GlobalTeamsIcon,
  TeamAnalyticsIcon,
  TeamMessagingIcon,
} from "./icons";

const items = [
  {
    icon: <CommissionSplittingIcon />,
    color: "purple" as const,
    title: "Commission Splitting",
    description:
      "Split commissions throughout your team. Everyone earns when the team wins.",
  },
  {
    icon: <GlobalTeamsIcon />,
    color: "green" as const,
    title: "Global Teams",
    description:
      "Someone in England can share a lead with the US. Teamwork knows no borders.",
  },
  {
    icon: <FinanceToolsIcon />,
    color: "purple" as const,
    title: "Finance Tools",
    description:
      "Manage payouts, track earnings, and handle team finances all in one place.",
  },
  {
    icon: <BonusAndRewardsIcon />,
    color: "green" as const,
    title: "Bonus and Rewards",
    description:
      "Give bonuses to top performers. Reward loyalty and hard work.",
  },
  {
    icon: <TeamAnalyticsIcon />,
    color: "purple" as const,
    title: "Team Analytics",
    description:
      "Track performance across your entire organization with detailed insights.",
  },
  {
    icon: <TeamMessagingIcon />,
    color: "green" as const,
    title: "Team Messaging",
    description:
      "Communicate with your team, share announcements, and coordinate efforts.",
  },
];

export default function EverythingToSucceed() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4">
          <Heading as="h2" align="center" className="text-black">
            Everything you need to succeed
          </Heading>
          <p className="text-text-secondary">
            From funnels to financing, we&apos;ve got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {items.map((item) => (
            <HighlightCard key={item.title} color={item.color}>
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
          ))}
        </div>
      </div>
    </Section>
  );
}
