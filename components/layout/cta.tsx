import Link from "next/link";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import ctaBackground from "@/public/sections/cta/cta-bg.png";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="cta" className="py-40 relative">
      <Image
        src={ctaBackground}
        alt="CTA Background"
        fill
        className="object-contain mt-32"
      />
      <div className="container">
        <div className="flex flex-col gap-10 items-center justify-center w-full text-center">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <Heading as="h2">Ready to start earning?</Heading>
            <p className="text-white/72 text-sm text-balance">
              Join thousands of affiliates earning passive income. Sign up free
              and <br /> start building your network today.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
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
