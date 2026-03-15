import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  FeatureCard,
  FeatureCardContent,
  FeatureCardDescription,
  FeatureCardTitle,
} from "@/components/ui/feature-card";
import { cdn, images } from "@/lib/cdn";

export function TheBottomLine() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <FeatureCard className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
          <Image
            src={cdn(images.agents.bottomLineBlur)}
            alt=""
            className="absolute pointer-events-none -top-40 -left-20 hidden lg:block"
            width={1000}
            height={1000}
            unoptimized
          />
          <FeatureCardContent className="relative z-10 lg:max-w-120">
            <FeatureCardTitle>The bottom line</FeatureCardTitle>
            <FeatureCardDescription>
              You earn from every transaction through a Firstline terminal. This
              isn&apos;t a one-time commission, it&apos;s a recurring monthly
              check on merchant volume, flowing straight into your pocket.
            </FeatureCardDescription>
            <div className="mt-10">
              <Button
                variant="green"
                nativeButton={false}
                render={<Link href="/agents/get-started" />}
              >
                Start Earning Today
              </Button>
            </div>
          </FeatureCardContent>
          <div className="max-w-sm lg:max-w-100 relative z-10 mx-auto lg:mx-0 lg:pr-[100px]">
            <Image
              src={cdn(images.agents.bottomLineImage)}
              alt="The bottom line"
              width={400}
              height={300}
              unoptimized
            />
          </div>
        </FeatureCard>
      </div>
    </Section>
  );
}
