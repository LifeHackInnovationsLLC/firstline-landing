import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Reveal,
  RevealScale,
  StaggerGroup,
  StaggerItem,
} from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";
import { PayoutsIcon, RewardsIcon, TrackIcon, UploadIcon } from "./icons";

const content = {
  title: "Upload your courses",
  description:
    "Sell products, upload your training courses, and reward completion. Bonuses are paid upon commission payment, ensuring aligned incentives.",
  cta: {
    label: "View Training",
    href: "/sellers/get-started",
  },
};

const items = [
  { icon: <UploadIcon />, label: "Upload unlimited training content" },
  { icon: <RewardsIcon />, label: "Set completion rewards and bonuses" },
  { icon: <TrackIcon />, label: "Track progress across your network" },
  { icon: <PayoutsIcon />, label: "Payouts tied to actual performance" },
];

export function UploadYourCourses() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[90px] items-center [--sellers-section-content-width:31.25rem] max-w-(--sellers-section-content-width) mx-auto lg:max-w-none">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Reveal>
              <h2 className="font-display font-semibold tracking-tight text-4xl lg:text-[52px] lg:leading-[52px] text-text-primary">
                {content.title}
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-sm lg:text-base text-text-body">
                {content.description}
              </p>
            </Reveal>
            <StaggerGroup
              as="ul"
              className="mt-8 flex flex-col gap-3.5 mx-auto lg:mx-0"
            >
              {items.map((item) => (
                <StaggerItem
                  as="li"
                  key={item.label}
                  from="left"
                  className="flex flex-row items-start gap-3.5 text-sm text-text-body leading-snug"
                >
                  <span className="shrink-0 size-5 flex items-center justify-center mt-0.5">
                    {item.icon}
                  </span>
                  <span className="flex-1 text-left">{item.label}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal delay={0.1} className="mt-10">
              <Button
                nativeButton={false}
                variant="primary"
                render={<Link href={content.cta.href} />}
              >
                {content.cta.label}
              </Button>
            </Reveal>
          </div>
          <RevealScale delay={0.1}>
            <Image
              src={cdn(images.sellers.uploadYourCourses)}
              alt="Upload your courses"
              width={800}
              height={600}
              className="w-full h-auto rounded-3xl"
              unoptimized
            />
          </RevealScale>
        </div>
      </div>
    </Section>
  );
}
