import Link from "next/link";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import ctaBackground from "@/public/sections/cta/cta-bg.png";
import ctaBackgroundMobile from "@/public/sections/cta/cta-bg-mobile.png";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="cta" className="pt-10 lg:pt-20 pb-10 lg:pb-20 relative">
      <Image
        src={ctaBackground}
        alt="CTA Background"
        fill
        className="object-contain mt-32 hidden lg:block"
      />
      <div className="container">
        <div className="flex flex-col gap-0 lg:gap-10 items-center justify-center w-full text-center max-w-md mx-auto lg:max-w-none">
          <Image
            src={ctaBackgroundMobile}
            alt="CTA Background"
            className="lg:hidden w-full max-w-sm"
          />
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <Heading as="h2" className="text-center lg:text-left">Ready to start earning?</Heading>
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
              render={<Link href="/get-started" />}
            >
              Create Free Account
            </Button>
            <span className="text-text-secondary text-sm">
              No credit card required • Start earning in minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
