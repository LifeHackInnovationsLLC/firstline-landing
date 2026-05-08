import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";
import { Card1Media } from "./agents-bento-cards/card1";
import { Card2Media } from "./agents-bento-cards/card2";
import { Card3Media } from "./agents-bento-cards/card3";
import { Card4Media } from "./agents-bento-cards/card4";
import { Card5Media } from "./agents-bento-cards/card5";
import { Card6Media } from "./agents-bento-cards/card6";

type BentoItem = {
  title: string;
  description: string;
  Media: React.ComponentType;
  background: string;
};

const content: { title: string; items: BentoItem[] } = {
  title: "What you get\nas a Firstline Seller?",
  items: [
    {
      title: "Transparent Commissions",
      description:
        "Instant, transparent commissions on every sale, growing with your merchants.",
      Media: Card1Media,
      background: cdn(images.agentBento.card1Bg),
    },
    {
      title: "Real Time Commission Tracking",
      description:
        "Track every sale, merchant, and commission in one place, anytime.",
      Media: Card2Media,
      background: cdn(images.agentBento.card2Bg),
    },
    {
      title: "Team and Override Management",
      description:
        "Join a team or build your own, earning commissions and overrides across your network.",
      Media: Card3Media,
      background: cdn(images.agentBento.card3Bg),
    },
    {
      title: "Merchant and Portfolio Management",
      description:
        "Manage your full book of business from one dashboard, no spreadsheets needed.",
      Media: Card4Media,
      background: cdn(images.agentBento.card4Bg),
    },
    {
      title: "Affiliate and Referral Tools",
      description:
        "Share links, bring in merchants or agents, and earn rewards automatically.",
      Media: Card5Media,
      background: cdn(images.agentBento.card5Bg),
    },
    {
      title: "Mobile First Access",
      description:
        "No office, no hardware, no gatekeepers, just your phone and a business.",
      Media: Card6Media,
      background: cdn(images.agentBento.card6Bg),
    },
  ],
};

export function AgentsBento() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Reveal>
            <Heading as="h2" align="center" className="text-black text-balance">
              {content.title}
            </Heading>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 lg:mt-15">
            {content.items.map((item) => (
              <StaggerItem
                key={item.title}
                className="relative flex flex-col justify-end h-[280px] md:h-[356px] p-5 bg-card-dark overflow-hidden rounded-4xl"
              >
                <img
                  src={item.background}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <item.Media />
                </div>
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
