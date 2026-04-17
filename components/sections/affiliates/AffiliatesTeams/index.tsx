import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";

function FeatureIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.76261 2.37747C8.50762 1.4396 7.65102 0.75 6.63356 0.75C5.41503 0.75 4.42722 1.73907 4.42722 2.95915C4.42722 4.17923 5.41503 5.1683 6.63356 5.1683C6.92056 5.1683 7.19477 5.11342 7.44628 5.01359M8.76261 2.37747C9.01412 2.27764 9.28833 2.22277 9.57533 2.22277C10.7939 2.22277 11.7817 3.21183 11.7817 4.43191C11.7817 5.65199 10.7939 6.64106 9.57533 6.64106C8.55787 6.64106 7.70126 5.95146 7.44628 5.01359M8.76261 2.37747C7.73063 2.7871 7.15681 3.94885 7.44628 5.01359M3.69178 14.0049H5.16267C5.16267 14.0049 6.92159 14.6849 8.10444 14.7413C10.7125 14.8656 12.7843 13.6507 14.4624 11.8029C14.8456 11.381 14.8391 10.7439 14.4833 10.2985C14.0246 9.7244 13.1624 9.67794 12.5872 10.135C11.9534 10.6386 11.1123 11.2051 10.3108 11.4275C9.2037 11.7349 8.10444 11.7957 8.10444 11.7957C13.988 11.4275 11.7817 6.64095 3.69178 9.95482M0.75 8.85021H3.69178V14.7413H0.75V8.85021Z"
        stroke="#9C8AFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    },
    {
      title: "Bonus Distribution",
      description:
        "Send one-time or recurring bonuses to top performers instantly",
    },
    {
      title: "Sales Analytics",
      description:
        "Track every sale, every commission, every team member in real-time",
    },
    {
      title: "Custom Offers",
      description:
        "Create unique commission structures for different products or campaigns",
    },
  ],
};

export function AffiliatesTeams() {
  return (
    <Section id="affiliates-teams" className="bg-gray">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl py-10 lg:py-20 px-4 lg:px-6 [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
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
          <StaggerGroup className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-20 mt-8 lg:mt-20">
            {content.features.map((feature) => (
              <StaggerItem key={feature.title} className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <FeatureIcon />
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
