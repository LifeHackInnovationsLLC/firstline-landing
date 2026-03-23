import { GreenBullet } from "@/components/icons/green-bullet";
import { PurpleBullet } from "@/components/icons/purple-bullet";
import { AgenciesSteps } from "@/components/sections/agencies/AgenciesSteps";
import { BuiltForGroups } from "@/components/sections/agencies/BuiltForGroups";
import { ClientPayments } from "@/components/sections/agencies/ClientPayments";
import { PotentialEarnings } from "@/components/sections/agencies/PotentialEarnings";
import { WhyAgencies } from "@/components/sections/agencies/WhyAgencies";
import { HeroKicker } from "@/components/sections/shared/Hero/hero-kicker";
import { PageHero } from "@/components/sections/shared/PageHero";
import { TwoCardFeature } from "@/components/sections/shared/TwoCardFeature";
import { cdn, images } from "@/lib/cdn";
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
    "Firstline enables agencies, creators, and organizations to launch their own payment sales teams and earn recurring monthly income on merchant volume and product sales.",
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
          src: cdn(images.agencies.hero, { width: 3840, quality: "100" }),
          mobileSrc: cdn(images.agencies.heroMobile, {
            width: 1608,
            quality: "100",
          }),
          alt: "Agencies hero background",
          width: 4320,
          height: 2109,
          mobileWidth: 1608,
          mobileHeight: 2572,
        }}
      />
      <ClientPayments />
      <BuiltForGroups />
      <TwoCardFeature
        title={earningsContent.title}
        cards={earningsContent.cards}
      />
      <AgenciesSteps />
      <WhyAgencies />
      <PotentialEarnings />
    </>
  );
}
