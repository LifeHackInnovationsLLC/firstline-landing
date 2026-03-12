import CTA from "@/components/layout/cta";
import Audiences from "@/components/sections/home/Audiences";
import Benefits from "@/components/sections/home/Benefits";
import Process from "@/components/sections/home/Process";
import Testimonials from "@/components/sections/home/Testimonials";
import WhySwitch from "@/components/sections/home/WhySwitch";
import FAQ from "@/components/sections/shared/FAQ";
import Hero from "@/components/sections/shared/Hero";

export default function Page() {
  return (
    <>
      <Hero />
      <Benefits />
      <Audiences />
      <WhySwitch />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
