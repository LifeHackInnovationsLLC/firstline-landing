import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { cdn, images } from "@/lib/cdn";

export function GrowYourCommunity() {
  return (
    <Section id="grow-your-community" className="bg-gray">
      <div className="container">
        <div className="px-4 lg:px-6 pt-9 pb-10 lg:pb-15 rounded-3xl bg-black relative overflow-hidden">
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
                <Image
                  src={cdn(images.sellers.growYourCommunitySocials)}
                  alt="Grow your community"
                  width={400}
                  height={300}
                  className="max-w-xs lg:max-w-md mx-auto"
                  unoptimized
                />
                <div className="flex flex-col items-center gap-4 lg:gap-6">
                  <Heading as="h2" align="center">
                    Grow your community
                  </Heading>
                  <p className="text-balance text-white/60 text-center text-sm lg:text-base">
                    Build your community on Discord, Slack, or Telegram. Let
                    them chat on web. Let your followers or the followers of
                    your followers sell your product without boundaries.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-center gap-4 lg:gap-10 text-center">
                <p className="text-balance text-sm lg:text-base">
                  Multi-platform community management
                </p>
                <p className="text-balance text-sm lg:text-base">
                  Unlimited sales network depth
                </p>
                <p className="text-balance text-sm lg:text-base">
                  Web chat for seamless communication
                </p>
                <p className="text-balance text-sm lg:text-base">
                  Sell your product to your community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
