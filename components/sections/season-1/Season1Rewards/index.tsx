import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { cdn, images } from "@/lib/cdn";

const rewards = [
  {
    tier: 1,
    name: "Team Creation",
    description: "Create and manage your own team",
    xp: "3,000 XP",
    xpDescription: "Team Leadership Unlocked",
    image: images.season1.tier1,
  },
  {
    tier: 2,
    name: "Merch Pack",
    description: "Premium Firstline apparel and gear",
    xp: "1,500 XP",
    xpDescription: "Branded Merchandise Kit",
    image: images.season1.tier2,
  },
  {
    tier: 4,
    name: "Commission Boost",
    description: "+5% commission boost for 30 days",
    xp: "7,500 XP",
    xpDescription: "Stackable Bonus",
    image: images.season1.tier3,
  },
  {
    tier: 5,
    name: "VIP Training",
    description: "1-on-1 coaching session",
    xp: "10,000 XP",
    xpDescription: "Personalized Strategy Call",
    image: images.season1.tier4,
  },
  {
    tier: 6,
    name: "Gold Status",
    description: "Conference ticket + networking access",
    xp: "15,000 XP",
    xpDescription: "Gold Badge & VIP Events",
    image: images.season1.tier5,
  },
  {
    tier: 7,
    name: "Elite Partner",
    description: "VIP program + higher commission tiers",
    xp: "20,000 XP",
    xpDescription: "Exclusive Deal Flow",
    image: images.season1.tier6,
  },
];

const content = {
  title: "Unlock real rewards",
  description:
    "Every tier brings something new. From team tools to VIP experiences, your hard work pays off.",
  mystery: {
    title:
      "Diamond agents unlock the mystery tier \u2014 luxury rewards, exclusive experiences, and more.",
    description: "Think Rolex, Tesla, and things we can\u2019t mention yet.",
  },
};

export default function Season1Rewards() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <div className="flex flex-col items-center gap-4">
            <Heading as="h2" align="center" className="text-black">
              {content.title}
            </Heading>
            <p className="text-black/60 text-sm lg:text-base max-w-lg text-center lg:max-w-none">
              {content.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-15">
            {rewards.map((reward) => (
              <div
                key={reward.tier}
                className="flex flex-col gap-4 bg-card-dark rounded-xl border border-white/10 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-6"
              >
                <div className="flex items-center gap-4 lg:gap-5">
                  <div className="relative size-16 lg:size-20 shrink-0">
                    <Image
                      src={cdn(reward.image, { width: 160 })}
                      alt={reward.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white/65 text-xs lg:text-sm">
                      Tier {reward.tier}
                    </span>
                    <span className="text-white font-semibold text-base lg:text-xl">
                      {reward.name}
                    </span>
                    <span className="text-white/65 text-xs lg:text-sm">
                      {reward.description}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-0.5 pl-20 lg:pl-0 lg:items-end">
                  <span className="text-green font-semibold text-base lg:text-xl">
                    {reward.xp}
                  </span>
                  <span className="text-white/65 text-xs lg:text-sm">
                    {reward.xpDescription}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 bg-card-dark rounded-xl border border-white/10 px-5 py-6 lg:px-8 lg:py-8 text-center">
            <p className="text-white font-semibold text-sm lg:text-base">
              {content.mystery.title}
            </p>
            <p className="text-white/65 text-xs lg:text-sm mt-1">
              {content.mystery.description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
