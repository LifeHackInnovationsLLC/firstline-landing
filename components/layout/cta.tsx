import Link from "next/link";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { cdn, images } from "@/lib/cdn";
import { Section } from "./section";

export default function CTA() {
  return (
    <Section
      id="cta"
      className="relative lg:min-h-160 lg:flex lg:items-center lg:justify-center"
    >
      <div className="hidden lg:block absolute inset-x-0 top-0 bottom-0">
        <img
          src={cdn(images.cta.bgDesktop, { width: 1440 })}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="container">
        <div className="flex flex-col gap-0 lg:gap-10 items-center justify-center w-full text-center max-w-md mx-auto lg:max-w-none">
          <img
            src={cdn(images.cta.bgMobile, { width: 640 })}
            alt=""
            aria-hidden="true"
            className="lg:hidden w-full max-w-sm top-10"
            loading="lazy"
          />
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <Heading as="h2" className="text-center">
              Ready to start earning?
            </Heading>
            <p className="text-white/72 text-sm">
              Join thousands of affiliates earning passive income. Sign up free
              and <br /> start building your network today.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:mt-0">
            <Button
              className="w-fit"
              variant="primary"
              nativeButton={false}
              render={<Link href="/get-started" prefetch={false} />}
            >
              Create Free Account
            </Button>
            <span className="text-text-secondary text-sm">
              No credit card required • Start earning in minutes
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
