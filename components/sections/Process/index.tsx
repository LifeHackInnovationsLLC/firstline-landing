import { cdn, images } from "@/lib/cdn";
import { Section } from "@/components/layout/section";

import { DashboardPreview } from "./dashboard-preview";
import { Steps } from "./steps";
export default function Process() {
  return (
    <Section id="process" className="relative overflow-hidden isolate">
      <img
        src={cdn(images.process.sectionBlur, { width: 1400 })}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
      <div className="container flex flex-col gap-20 lg:gap-40 relative z-10">
        <DashboardPreview />
        <Steps />
      </div>
    </Section>
  );
}
