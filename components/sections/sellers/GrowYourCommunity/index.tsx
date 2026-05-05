import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import {
  Reveal,
  RevealScale,
  StaggerGroup,
  StaggerItem,
} from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";

export function GrowYourCommunity() {
  return (
    <Section id="grow-your-community" className="bg-gray">
      <div className="container">
        <div className="px-4 lg:px-6 pt-9 pb-10 lg:pb-15 rounded-3xl bg-black relative overflow-hidden [--sellers-section-content-width:31.25rem] max-w-(--sellers-section-content-width) mx-auto lg:max-w-none">
          <Image
            src={cdn(images.sellers.growYourCommunityBg, { width: 1400 })}
            alt=""
            aria-hidden="true"
            fill
            className="absolute inset-0 object-cover pointer-events-none"
            unoptimized
          />
          <div className="relative z-10 flex flex-col gap-8 lg:gap-10 max-w-4xl mx-auto">
            <div className="flex flex-col gap-8 lg:gap-10">
              <div className="flex flex-col gap-7">
                <RevealScale className="max-w-xs lg:max-w-md mx-auto">
                  <Image
                    src={cdn(images.sellers.growYourCommunitySocials)}
                    alt="Grow your community"
                    width={400}
                    height={300}
                    unoptimized
                  />
                </RevealScale>
                <Reveal className="flex flex-col items-center gap-4 lg:gap-6">
                  <Heading as="h2" align="center">
                    Grow your community
                  </Heading>
                  <p className="text-balance text-white/60 text-center text-sm lg:text-base">
                    Build your community on Discord, Slack, or Telegram. Let
                    them chat on web. Let your followers or the followers of
                    your followers sell your product without boundaries.
                  </p>
                </Reveal>
              </div>
              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-center gap-4 lg:gap-10 text-left lg:text-center">
                {[
                  "Multi-platform community management",
                  "Unlimited sales network depth",
                  "Web chat for seamless communication",
                  "Sell your product to your community",
                ].map((label) => (
                  <StaggerItem
                    key={label}
                    as="p"
                    className="text-balance text-sm lg:text-base flex flex-row items-start lg:items-center lg:justify-center gap-2"
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 size-4 mt-0.5 sm:hidden text-[#51C9C2]"
                    >
                      <path
                        d="M3.5 8.5l3 3 6-6"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{label}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
