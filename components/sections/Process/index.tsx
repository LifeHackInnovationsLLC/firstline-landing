import Image from "next/image";
import sectionPurpleGradient from "@/public/sections/process/process-section-blur.png";
import { DashboardPreview } from "./dashboard-preview";
import { Steps } from "./steps";
export default function Process() {
  return (
    <section id="process" className="py-40 relative overflow-hidden isolate">
      <Image
        src={sectionPurpleGradient}
        alt="Section Purple Gradient"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
      <div className="container flex flex-col gap-40 relative z-10">
        <DashboardPreview />
        <Steps />
      </div>
    </section>
  );
}
