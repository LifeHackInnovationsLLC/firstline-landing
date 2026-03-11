import Hero from "@/components/sections/shared/Hero";
import Benefits from "@/components/sections/home/Benefits";
import Audiences from "@/components/sections/home/Audiences";
import WhySwitch from "@/components/sections/home/WhySwitch";
import Process from "@/components/sections/home/Process";
import FAQ from "@/components/sections/shared/FAQ";
import CTA from "@/components/layout/cta";
import Testimonials from "@/components/sections/home/Testimonials";

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
