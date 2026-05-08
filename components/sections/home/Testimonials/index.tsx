import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { TestimonialsList } from "./testimonials-list";

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-gray">
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="container">
          <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
            <Reveal className="relative flex flex-col gap-4 lg:gap-5 items-center">
              <Heading
                as="h2"
                className="text-center text-balance text-black relative z-10"
              >
                What Our Users Have to Say
              </Heading>
              <p className="text-center max-w-xl mx-auto text-text-secondary relative z-10 text-sm lg:text-base">
                Join thousands of sellers, agents, and affiliates who trust
                Firstline to manage their commissions and grow their networks.
              </p>
            </Reveal>
          </div>
        </div>
        <TestimonialsList />
      </div>
    </Section>
  );
}
