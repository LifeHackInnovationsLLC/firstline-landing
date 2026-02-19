import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/layout/section";
import { TestimonialsList } from "./testimonials-list";

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-gray">
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="container">
          <div className="[--testimonials-content-width:28rem] lg:[--testimonials-content-width:100%] max-w-(--testimonials-content-width) mx-auto lg:mx-0">
            <div className="relative flex flex-col gap-4 lg:gap-5 items-center">
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
            </div>
          </div>
        </div>
        <TestimonialsList />
      </div>
    </Section>
  );
}
