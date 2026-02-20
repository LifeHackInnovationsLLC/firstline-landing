import Image from "next/image";
import sectionPurpleGradient from "@/public/sections/process/process-section-blur.png";
import { Section } from "@/components/layout/section";
import { DashboardPreview } from "./dashboard-preview";
import { Steps } from "./steps";
export default function Process() {
  return (
    <Section id="process" className="relative overflow-hidden isolate">
      <Image
        src={sectionPurpleGradient}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        sizes="100vw"
      />
      <div className="container flex flex-col gap-20 lg:gap-40 relative z-10">
        <DashboardPreview />
        <Steps />
      </div>
    </Section>
  );
}
