import { GreenBullet } from "@/components/icons/green-bullet";
import { PlayArrow } from "@/components/icons/play-arrow";
import { PurpleBullet } from "@/components/icons/purple-bullet";
import { AffiliatesBento } from "@/components/sections/affiliates/AffiliatesBento";
import { AffiliatesComparison } from "@/components/sections/affiliates/AffiliatesComparison";
import { AffiliatesSteps } from "@/components/sections/affiliates/AffiliatesSteps";
import { AffiliatesTeams } from "@/components/sections/affiliates/AffiliatesTeams";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Stats } from "@/components/sections/shared/Stats";
import { TwoCardFeature } from "@/components/sections/shared/TwoCardFeature";
import { cdn, images } from "@/lib/cdn";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Affiliates — Earn Recurring Commissions",
  description:
    "Earn recurring monthly income as a Firstline affiliate. Promote payment processing solutions, track your commissions in real-time, and get paid automatically.",
  path: "/affiliates",
  keywords: [
    "affiliate program",
    "recurring affiliate commissions",
    "affiliate payout platform",
    "payment processing affiliate",
  ],
});

const heroContent = {
  title: "Finally, commissions you can trust",
  description:
    "No more promo codes and promises. No more complex contracts hiding your true earnings. Firstline gives you real-time visibility and instant settlement of every commission you earn.",
  ctas: [
    {
      label: "Start Earning Today",
      href: "/affiliates/get-started",
      variant: "primary" as const,
    },
    {
      label: "Watch Training",
      href: "/affiliates/training",
      variant: "dark" as const,
      icon: <PlayArrow className="size-2 ml-2 mt-1" />,
    },
  ],
};

const stats = [
  { value: "$0", label: "Upfront Cost" },
  { value: "80%+", label: "Commission Rate" },
  { value: "5 Min", label: "To submit a lead" },
];

const builtForYouContent = {
  title: "Built for how you work",
  cards: [
    {
      icon: images.shared.whatYourTeamGetsIcon,
      bg: images.affiliates.doorToDoorBg,
      title: "Door-to-Door Sales",
      subtitle: "Solar, home services, and more",
      description:
        "Bring a Bluetooth hardware terminal to every door. When you close a deal, collect the payment right there - and watch your commission hit your balance before you leave the driveway.",
      items: [
        "Portable Bluetooth card readers",
        "Commission credited at point of sale",
        "No waiting for back-office processing",
        "Track all your daily closes in real-time",
      ],
      bullet: <GreenBullet />,
    },
    {
      icon: images.shared.whatYouGetAsTeamOwnerIcon,
      bg: images.affiliates.digitalAffiliatesBg,
      title: "Digital Affiliates",
      subtitle: "Content creators, influencers, marketers",
      description:
        "Know you can drive traffic to a product? Work with vendors who've set up their products with Firstline Payments — you get paid on your terms, directly at sale, with full visibility.",
      items: [
        "Real-time conversion tracking",
        "See exactly what you're owed",
        "No more wondering about promo code attribution",
        "Instant commission on every sale you drive",
      ],
      bullet: <PurpleBullet />,
    },
  ],
};

export default function AffiliatesPage() {
  return (
    <>
      <PageHero
        id="affiliates"
        {...heroContent}
        maxWidth="max-w-200"
        align="bottom"
        className="relative overflow-hidden min-h-175 -mt-(--navbar-height) pt-(--navbar-height)"
        bgImage={{
          src: cdn(images.affiliates.hero, { width: 3840, quality: "100" }),
          alt: "Affiliates hero — earn recurring commissions with Firstline",
          width: 4320,
          height: 2109,
        }}
      />
      <Stats id="affiliates-stats" stats={stats} />
      <AffiliatesBento />
      <AffiliatesSteps />
      <AffiliatesComparison />
      <TwoCardFeature
        id="affiliates-built-for-you"
        title={builtForYouContent.title}
        cards={builtForYouContent.cards}
      />
      <AffiliatesTeams />
    </>
  );
}
