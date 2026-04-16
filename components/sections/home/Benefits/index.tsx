import { Section } from "@/components/layout/section";
import { Stats } from "@/components/sections/shared/Hero/stats";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Bento } from "./bento";
export function Benefits() {
  return (
    <Section id="benefits" className="pt-5 bg-gray">
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Stats />
          <Reveal>
            <Heading as="h2" className="text-left text-balance text-black">
              The benefits <br className="hidden lg:block" /> that set us apart
            </Heading>
          </Reveal>
          <Bento />
          <Reveal delay={0.1}>
            <p className="text-center text-text-secondary w-full mt-8">
              No contracts. No inventory. No upfront cost.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
