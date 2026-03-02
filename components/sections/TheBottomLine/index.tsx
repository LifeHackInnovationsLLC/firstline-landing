import { Section } from "@/components/layout/section";
import {
  FeatureCard,
  FeatureCardContent,
  FeatureCardTitle,
  FeatureCardDescription,
} from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TheBottomLine() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <FeatureCard className="flex flex-col lg:flex-row justify-between">
          <img
            src="/the-bottom-line-green-blur.webp"
            alt=""
            className="absolute pointer-events-none -top-40 -left-20"
            width={1000}
            height={1000}
          />
          <FeatureCardContent className="relative z-10 max-w-120">
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
          <div className="max-w-100 relative z-10 lg:pr-[100px]">
            <img
              src="/the-bottom-line-image.webp"
              alt="The bottom line"
            />
          </div>
        </FeatureCard>
      </div>
    </Section>
  );
}
