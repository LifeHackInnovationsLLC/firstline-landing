import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { cdn, images } from "@/lib/cdn";

const content = {
  title: "What you get\nas a Firstline Seller?",
  items: [
    {
      title: "Recurring Monthly Commissions",
      description:
        "Every merchant you bring on generates ongoing monthly commissions based on their processing volume. These are not one-time payouts. Your income continues to grow as your merchants grow.",
      image: images.affiliates.bento1,
    },
    {
      title: "Real Time Commission Tracking",
      description:
        "View your merchants, processing volume, and commissions in one place. See exactly what you are earning and where it is coming from at any time.",
      image: images.affiliates.bento2,
    },
    {
      title: "Team and Override Management",
      description:
        "Join a team as an agent or build your own team. Agents earn competitive commissions while team leaders earn override commissions across their entire network.",
      image: images.affiliates.bento3,
    },
    {
      title: "Merchant and Portfolio Management",
      description:
        "Manage your full book of business from a single dashboard. Track activity, performance, and growth without spreadsheets or manual processes.",
      image: images.affiliates.bento4,
    },
    {
      title: "Affiliate and Referral Tools",
      description:
        "Monetize your network beyond direct sales. Share referral links, bring in merchants or agents, and earn rewards automatically.",
      image: images.affiliates.bento5,
    },
    {
      title: "Mobile First Access",
      description:
        "Everything operates online. No office, no hardware inventory, and no gatekeepers. If you have a phone, you have a business.",
      image: images.affiliates.bento6,
    },
  ],
};

export default function AgentsBento() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <Heading as="h2" align="center" className="text-black text-balance">
          {content.title}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 lg:mt-15">
          {content.items.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col justify-end h-[280px] md:h-[356px] p-5 bg-card-dark overflow-hidden rounded-4xl"
            >
              <img
                src={cdn(item.image)}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
