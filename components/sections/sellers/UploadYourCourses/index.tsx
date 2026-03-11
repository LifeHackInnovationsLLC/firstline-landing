import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { cdn, images } from "@/lib/cdn";
import Link from "next/link";
import {
  UploadIcon,
  RewardsIcon,
  TrackIcon,
  PayoutsIcon,
} from "./icons";

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

export default function UploadYourCourses() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[90px] items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-display font-semibold tracking-tight text-4xl lg:text-[52px] lg:leading-[52px] text-text-primary">
              {content.title}
            </h2>
            <p className="mt-6 text-sm lg:text-base text-text-body">
              {content.description}
            </p>
            <ul className="mt-8 flex flex-col gap-3.5">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-row items-center gap-3.5 text-sm text-text-body"
                >
                  {item.icon}
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button
                nativeButton={false}
                variant="primary"
                render={<Link href={content.cta.href} />}
              >
                {content.cta.label}
              </Button>
            </div>
          </div>
          <div>
            <img
              src={cdn(images.sellers.uploadYourCourses)}
              alt="Upload your courses"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
