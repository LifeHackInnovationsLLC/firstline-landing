import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { RevealScale, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";

const content = {
  title: "Share leads, get paid anyway",
  description:
    "Found a merchant in Florida but live in New York? Share the lead with your team or the entire Firstline community\u2014your commission is protected.",
  features: [
    "Share with your team only",
    "Share with the Firstline community",
    "View closer\u2019s performance history",
    "Track lead status in real-time",
    "Split commissions automatically",
  ],
};

export function AgentsShareLeads() {
  return (
    <Section>
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <RevealScale className="relative overflow-hidden p-[6px] bg-[linear-gradient(162.92deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] backdrop-blur-[68.6px] rounded-[12px]">
            <div className="bg-black/90 rounded-[6px] relative overflow-hidden flex flex-col lg:flex-row">
              <Image
                src={cdn(images.season1.climbPurpleElipse)}
                alt=""
                aria-hidden="true"
                width={700}
                height={400}
                className="absolute pointer-events-none top-0 left-0"
                unoptimized
              />
              <Image
                src={cdn(images.season1.climbGreenElipse)}
                alt=""
                aria-hidden="true"
                width={700}
                height={400}
                className="absolute pointer-events-none bottom-0 right-0"
                unoptimized
              />
              <div className="relative z-10 flex-1 flex flex-col gap-5 px-5 pt-12 pb-8 lg:px-10 lg:pt-16 lg:pb-12">
                <Heading
                  as="h2"
                  size="md"
                  className="text-left md:text-4xl text-balance text-white"
                >
                  {content.title}
                </Heading>
                <p className="text-left text-balance text-white/72 text-sm lg:text-base">
                  {content.description}
                </p>
              </div>
              <div className="relative flex-1 min-h-[300px] lg:min-h-[400px]">
                <Image
                  src={cdn(images.agents.globe, { width: 800 })}
                  alt="Global lead sharing network"
                  fill
                  className="object-contain object-right-bottom"
                  unoptimized
                />
              </div>
            </div>
          </RevealScale>

          <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 lg:mt-10">
            {content.features.map((feature) => (
              <StaggerItem
                as="p"
                key={feature}
                className="text-white text-sm lg:text-base font-medium"
              >
                {feature}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
