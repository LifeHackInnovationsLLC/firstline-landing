import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { cdn, images } from "@/lib/cdn";

const content = {
  title: "Double XP Events",
  description:
    "Watch for Double XP Weekends and limited-time seasonal challenges. Stack your bonuses and rocket through the levels when events go live.",
  note: "Events announced in the dashboard and community feed.",
};

export default function Season1DoubleXP() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-card-dark border border-white/10 py-20 [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Image
            src={cdn(images.season1.xpBg, { width: 1400 })}
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="relative z-10 flex flex-col items-center text-center px-5">
            <Heading as="h2" align="center">
              {content.title}
            </Heading>
            <p className="text-white/65 text-sm lg:text-base max-w-xl mt-4">
              {content.description}
            </p>
            <p className="text-white font-semibold text-sm lg:text-base mt-6">
              {content.note}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
