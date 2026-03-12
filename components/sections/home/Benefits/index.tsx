import { Section } from "@/components/layout/section";
import { Stats } from "@/components/sections/shared/Hero/stats";
import { Heading } from "@/components/ui/heading";
import { Bento } from "./bento";
export default function Benefits() {
  return (
    <Section id="benefits" className="pt-5 bg-gray">
      <div className="container">
        <div className="[--benefits-content-width:28rem] lg:[--benefits-content-width:100%] max-w-(--benefits-content-width) mx-auto lg:mx-0">
          <Stats />
          <Heading as="h2" className="text-left text-balance text-black">
            The benefits <br className="hidden lg:block" /> that set us apart
          </Heading>
          <Bento />
          <p className="text-center text-text-secondary w-full mt-8">
            No contracts. No inventory. No upfront cost.
          </p>
        </div>
      </div>
    </Section>
  );
}
