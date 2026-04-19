import { Section } from "@/components/layout/section";
import {
  AnimatedMedia,
  type AnimatedMediaProps,
} from "@/components/ui/animated-media";
import { Heading } from "@/components/ui/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

type BentoItem = {
  title: string;
  description: string;
  media: AnimatedMediaProps;
};

const content: { title: string; items: BentoItem[] } = {
  title: "What you get\nas a Firstline Seller?",
  items: [
    {
      title: "Transparent Commissions",
      description:
        "Every product you sell earns you instant and transparent commission. With offerings like payment processing, you can earn ongoing commissions based on monthly volume. Not just a one-time payout, your income grows as the businesses you bring in keep growing.",
      media: {
        kind: "lottie",
        src: "/animations/agents/bento-1.lottie",
        loop: false,
      },
    },
    {
      title: "Real Time Commission Tracking",
      description:
        "Track everything in one place, from the individual products you've sold, to your merchant volume and commissions. See exactly what you're earning and where it's coming from at any time.",
      media: {
        kind: "lottie",
        src: "/animations/agents/bento-2.lottie",
        loop: false,
      },
    },
    {
      title: "Team and Override Management",
      description:
        "Join a team as an agent or build your own team. Agents earn competitive commissions while team leaders earn override commissions across their entire network.",
      media: {
        kind: "lottie",
        src: "/animations/agents/bento-3.lottie",
        loop: false,
      },
    },
    {
      title: "Merchant and Portfolio Management",
      description:
        "Manage your full book of business from a single dashboard. Track activity, performance, and growth without spreadsheets or manual processes.",
      media: {
        kind: "lottie",
        src: "/animations/agents/bento-4.lottie",
        loop: false,
      },
    },
    {
      title: "Affiliate and Referral Tools",
      description:
        "Monetize your network beyond direct sales. Share referral links, bring in merchants or agents, and earn rewards automatically.",
      media: {
        kind: "lottie",
        src: "/animations/agents/bento-5.lottie",
        loop: false,
      },
    },
    {
      title: "Mobile First Access",
      description:
        "Everything operates online. No office, no hardware inventory, and no gatekeepers. If you have a phone, you have a business.",
      media: {
        kind: "lottie",
        src: "/animations/agents/bento-6.lottie",
        loop: false,
      },
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
                <AnimatedMedia {...item.media} />
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
