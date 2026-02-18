import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import { TestimonialsList } from "./testimonials-list";

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-40 pb-25 bg-gray">
      <div className="container">
        <div className="flex flex-col gap-10">
          <div className="relative flex flex-col gap-5 items-center">
            <Image
              src="/sections/testimonials/testimonial-heart.png"
              alt=""
              width={500}
              height={400}
              className="absolute -top-32 left-1/2 -translate-x-1/2 pointer-events-none"
            />
            <Heading as="h2" className="text-center text-balance text-black relative z-10">
              What Our Users Have to Say
            </Heading>
            <p className="text-center max-w-xl mx-auto text-text-secondary relative z-10">
              Join thousands of sellers, agents, and affiliates who trust
              Firstline to manage their commissions and grow their networks.
            </p>
          </div>
          <TestimonialsList />
        </div>
      </div>
    </section>
  );
}
