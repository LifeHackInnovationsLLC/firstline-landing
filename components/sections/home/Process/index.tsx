import Image from "next/image";
import { Section } from "@/components/layout/section";
import { cdn, images } from "@/lib/cdn";

import { DashboardPreview } from "./dashboard-preview";
import { Steps } from "./steps";
export default function Process() {
  return (
    <Section id="process" className="relative overflow-hidden isolate">
      <Image
        src={cdn(images.process.sectionBlur, { width: 1400 })}
        alt=""
        aria-hidden="true"
        fill
        className="object-cover z-0 pointer-events-none"
        unoptimized
      />
      <div className="container flex flex-col gap-20 lg:gap-40 relative z-10">
        <DashboardPreview />
        <Steps />
      </div>
    </Section>
  );
}
