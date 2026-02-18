import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Audiences from "@/components/sections/Audiences";
import WhySwitch from "@/components/sections/WhySwitch";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/layout/cta";
import Testimonials from "@/components/sections/Testimonials";
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
