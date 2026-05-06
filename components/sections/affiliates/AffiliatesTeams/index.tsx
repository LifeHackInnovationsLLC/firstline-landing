import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";

type IconProps = { className?: string };

const ICON_STROKE = "#9C8AFF";

function DownlineIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="3" r="2" stroke={ICON_STROKE} strokeWidth="1.5" />
      <circle cx="3" cy="13" r="2" stroke={ICON_STROKE} strokeWidth="1.5" />
      <circle cx="13" cy="13" r="2" stroke={ICON_STROKE} strokeWidth="1.5" />
      <path
        d="M8 5v3M8 8L3 11M8 8l5 3"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BonusIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.75"
        y="6.25"
        width="12.5"
        height="3"
        rx="0.75"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
      />
      <path
        d="M2.75 9.25v4.25a.75.75 0 0 0 .75.75h9a.75.75 0 0 0 .75-.75V9.25M8 6.25v8M5.5 6.25c-1.25 0-2-.75-2-1.75s.75-1.75 2-1.75c1 0 1.75.75 2.5 2.5.75-1.75 1.5-2.5 2.5-2.5 1.25 0 2 .75 2 1.75s-.75 1.75-2 1.75"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnalyticsIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 13.5h12M3.75 11V7.5M7.25 11V4.25M10.75 11V8.5M14.25 11V5.5"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OffersIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 1.75h4.75a1 1 0 0 1 1 1V7.5a1 1 0 0 1-.293.707l-6 6a1 1 0 0 1-1.414 0L1.793 9.457a1 1 0 0 1 0-1.414l6-6A1 1 0 0 1 8.5 1.75Z"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="5" r="1.1" stroke={ICON_STROKE} strokeWidth="1.5" />
    </svg>
  );
}

const content = {
  title: "For teams that scale",
  description:
    "Whether you're building a sales team or managing a network of affiliates, Firstline gives you the tools to track, reward, and grow your organization.",
  features: [
    {
      title: "Downline Management",
      description:
        "Create tiers, track referrals, and manage your entire network",
      Icon: DownlineIcon,
    },
    {
      title: "Bonus Distribution",
      description:
        "Send one-time or recurring bonuses to top performers instantly",
      Icon: BonusIcon,
    },
    {
      title: "Sales Analytics",
      description:
        "Track every sale, every commission, every team member in real-time",
      Icon: AnalyticsIcon,
    },
    {
      title: "Custom Offers",
      description:
        "Create unique commission structures for different products or campaigns",
      Icon: OffersIcon,
    },
  ],
};

export function AffiliatesTeams() {
  return (
    <Section id="affiliates-teams" className="bg-gray">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl py-5 lg:py-20 px-4 lg:px-6 [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Image
            src={cdn(images.affiliates.readyToScale)}
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <Reveal className="relative z-10 flex flex-col max-w-xl">
            <div className="flex flex-col gap-4 lg:gap-6">
              <Heading as="h2" className="text-white">
                {content.title}
              </Heading>
              <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                {content.description}
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-20 mt-8 lg:mt-20">
            {content.features.map((feature) => (
              <StaggerItem key={feature.title} className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <feature.Icon className="shrink-0" />
                  <span className="text-sm text-white font-semibold">
                    {feature.title}
                  </span>
                </div>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
