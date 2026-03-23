import { PageHero } from "@/components/sections/shared/PageHero";
import { CommunityDownline } from "@/components/sections/team/CommunityDownline";
import { EverythingToSucceed } from "@/components/sections/team/EverythingToSucceed";
import { cdn, images } from "@/lib/cdn";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Team — Build Your Empire, Earn Together",
  description:
    "Have a community on Discord, Telegram, or social media? Turn your influence into income. Grow & manage your team and collect commissions globally with Firstline.",
  path: "/team",
  keywords: [
    "team commissions",
    "community monetization",
    "team management platform",
    "earn with your team",
  ],
});

const heroContent = {
  title: "Build your empire, earn together",
  description:
    "Have a community on Discord, Telegram, or social media? Turn your influence into income. Grow & manage your team and collect commissions globally.",
  ctas: [
    {
      label: "Start a team",
      href: "/team/get-started",
      variant: "primary" as const,
    },
    {
      label: "Learn how it works",
      href: "/team/how-it-works",
      variant: "dark" as const,
    },
  ],
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        id="team"
        {...heroContent}
        align="bottom"
        className="relative overflow-hidden min-h-175 -mt-(--navbar-height) pt-(--navbar-height)"
        bgImage={{
          src: cdn(images.team.hero, { width: 3840, quality: "100" }),
          mobileSrc: cdn(images.team.heroMobile, {
            width: 1608,
            quality: "100",
          }),
          alt: "Team hero background",
          width: 4320,
          height: 2109,
          mobileWidth: 1608,
          mobileHeight: 2572,
        }}
      />
      <CommunityDownline />
      <EverythingToSucceed />
    </>
  );
}
