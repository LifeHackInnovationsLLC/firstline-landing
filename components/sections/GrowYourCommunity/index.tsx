import { Section } from "@/components/layout/section";
import Image from "next/image";
import growYourCommunityImage from "@/public/sections/sellers/grow-your-community-socials-image.webp";
import PurpleEllipseImage from "@/public/sections/sellers/grow-your-community-purple-decoration.webp";
import GreenEllipseImage from "@/public/sections/sellers/grow-your-community-green-decoration.webp";
import { Heading } from "@/components/ui/heading";

export default function GrowYourCommunity() {
  return (
    <Section id="grow-your-community" className="bg-gray">
      <div className="container">
        <div className="px-6 pt-9 pb-15 rounded-3xl bg-black relative overflow-hidden">
          <Image
            src={PurpleEllipseImage}
            alt="Grow your community"
            className="absolute pointer-events-none -bottom-40 -right-40"
          />
          <Image
            src={GreenEllipseImage}
            alt="Grow your community"
            className="absolute pointer-events-none -top-60 -left-60"
          />
          <div className="flex flex-col gap-10 max-w-4xl mx-auto ">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-7">
                <Image
                  src={growYourCommunityImage}
                  alt="Grow your community"
                  className="max-w-md mx-auto"
                />
                <div className="flex flex-col items-center gap-6">
                  <Heading as="h2">Grow your community</Heading>
                  <p className="text-balance text-white/60 text-center">
                    Build your community on Discord, Slack, or Telegram. Let
                    them chat on web. Let your followers or the followers of
                    your followers sell your product without boundaries.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-10">
                <p className="text-balance">
                  Multi-platform community management
                </p>
                <p className="text-balance">Unlimited sales network depth</p>
                <p className="text-balance">
                  Web chat for seamless communication
                </p>
                <p className="text-balance">
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
