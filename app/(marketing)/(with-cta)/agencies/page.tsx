import { GreenBullet } from "@/components/icons/green-bullet";
import { PurpleBullet } from "@/components/icons/purple-bullet";
import { AgenciesHeroCards } from "@/components/sections/agencies/AgenciesHeroCards";
import { AgenciesSteps } from "@/components/sections/agencies/AgenciesSteps";
import { BuiltForGroups } from "@/components/sections/agencies/BuiltForGroups";
import { ClientPayments } from "@/components/sections/agencies/ClientPayments";
import { WhyAgencies } from "@/components/sections/agencies/WhyAgencies";
import FAQ from "@/components/sections/shared/FAQ";
import { HeroKicker } from "@/components/sections/shared/Hero/hero-kicker";
import { PageHero } from "@/components/sections/shared/PageHero";
import { TwoCardFeature } from "@/components/sections/shared/TwoCardFeature";
import { images } from "@/lib/cdn";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Agencies — Turn Your Community Into a Revenue Engine",
  description:
    "Launch your own payment sales team with Firstline. Agencies, creators, and organizations earn recurring monthly income on merchant volume and product sales.",
  path: "/agencies",
  keywords: [
    "agency commission platform",
    "community revenue",
    "agency partner program",
    "merchant volume commissions",
  ],
});

const heroContent = {
  title: "Turn your community into a revenue engine",
  description:
    "Firstline enables agencies, creators, and organizations to launch their own sales teams and earn recurring instant commissions on sales as well as monthly residuals on merchant volume.",
  ctas: [
    {
      label: "Partner with us",
      href: "/agencies/get-started",
      variant: "primary" as const,
    },
    {
      label: "Contact Sales",
      href: "/contact",
      variant: "dark" as const,
    },
  ],
};

const faqs = [
  {
    question: "What is Firstline?",
    answer:
      "Firstline is a sales platform that gives you access to a curated library of products and services you can actively sell, with instant commissions and built-in tools to manage your team and earnings.",
  },
  {
    question: "How do I make money on Firstline?",
    answer:
      "You earn commissions by selling products and services from the Firstline library. Commissions are paid instantly when a sale is completed, and you can also earn from the performance of your team.",
  },
  {
    question: "Do I need to find my own products to sell?",
    answer:
      "No. Firstline provides a pre-built library of vetted products and services. You choose what you want to sell based on what fits your network and customers best.",
  },
  {
    question: "Are commissions really paid instantly?",
    answer:
      "Yes. Firstline uses split payment technology to distribute commissions in real time at the point of sale. No waiting on payouts or billing cycles, and no more getting backdoored by your affiliates.",
  },
  {
    question: "Can I build and manage a sales team?",
    answer:
      "Yes. You can onboard agents, build a downline, and earn override commissions based on your team's performance, all managed directly within the platform.",
  },
];

const earningsContent = {
  title: "Your community earns. Your team earns. You earn alongside them.",
  cards: [
    {
      icon: images.shared.whatYourTeamGetsIcon,
      bg: images.affiliates.doorToDoorBg,
      title: "What your team gets",
      subtitle: "Agents on your team receive everything they need to succeed.",
      items: [
        "Access to sell payment processing",
        "Full suite of sales tools and educational materials",
        "Access to affiliate marketing tools and other product sale opportunities",
        "Real time commission and volume tracking",
        "Merchant and portfolio management tools",
        "XP program with incentivizing rewards",
        "Split payments for downline and upstream commissions",
        "Mobile first access from anywhere",
      ],
      bullet: <GreenBullet />,
      footerText:
        "Agents focus on relationships and outreach.\nFirstline handles the rest.",
      footerColor: "text-[#47D9D1]",
    },
    {
      icon: images.shared.whatYouGetAsTeamOwnerIcon,
      bg: images.affiliates.digitalAffiliatesBg,
      title: "What you get as a team owner",
      subtitle: "As a team owner, you earn on the success of your agents.",
      items: [
        "Override commissions on team volume",
        "Full visibility into team performance",
        "Scalable income without managing fulfillment",
        "A monetization layer for your existing audience",
        "Total control of how you run your community, from commission splits, to rewards",
      ],
      bullet: <PurpleBullet />,
      footerText: "The power to make your team succeed is in your hands.",
      footerColor: "text-[#8787EF]",
    },
  ],
};

export default function AgenciesPage() {
  return (
    <>
      <PageHero
        id="agencies"
        {...heroContent}
        kicker={<HeroKicker>$12M+ paid out</HeroKicker>}
        align="bottom"
        className="relative overflow-hidden min-h-175 -mt-(--navbar-height) pt-(--navbar-height)"
        bgImage={{
          src: "/hero-section/agencies/bg.png",
          alt: "Agencies hero background",
          width: 2880,
          height: 1406,
        }}
        decorations={<AgenciesHeroCards />}
      />
      <ClientPayments />
      <BuiltForGroups />
      <TwoCardFeature
        title={earningsContent.title}
        cards={earningsContent.cards}
      />
      <AgenciesSteps />
      <WhyAgencies />
      <FAQ faqs={faqs} />
    </>
  );
}
