import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import CommunityDownline from "@/components/sections/team/CommunityDownline";
import EverythingToSucceed from "@/components/sections/team/EverythingToSucceed";
import Link from "next/link";
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

const content = {
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
      <TeamPageHero />
      <CommunityDownline />
      <EverythingToSucceed />
    </>
  );
}

function TeamPageHero() {
  return (
    <Section id="team">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col gap-8 lg:gap-11 max-w-2xl mx-auto items-center text-center pt-10 lg:pt-20">
            <div className="flex flex-col gap-4 items-center">
              <Heading as="h1" align="center">{content.title}</Heading>
              <p className="text-white/72 text-sm lg:text-base max-w-lg">
                {content.description}
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              {content.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  nativeButton={false}
                  variant={cta.variant}
                  render={<Link href={cta.href} />}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
