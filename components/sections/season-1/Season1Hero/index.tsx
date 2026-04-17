import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { FadeIn } from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";

const content = {
  kicker: "Season 1: New Beginnings",
  title: "Earn rewards while you build",
  description: "The more you grow your portfolio, the more you earn.",
  ctas: [
    {
      label: "Start Learning",
      href: "/season-1/get-started",
      variant: "primary" as const,
    },
    {
      label: "How it works",
      href: "/season-1/how-it-works",
      variant: "dark" as const,
      icon: (
        <svg
          className="size-3 ml-2 mt-0.5"
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 3.59955C8.16667 3.98445 8.16667 4.9467 7.5 5.3316L1.5 8.7957C0.833334 9.1806 -4.47338e-07 8.69948 -4.13689e-07 7.92968L-1.10848e-07 1.00147C-7.71986e-08 0.231674 0.833333 -0.249451 1.5 0.135449L7.5 3.59955Z"
            fill="white"
          />
        </svg>
      ),
    },
  ],
};

function Season1Kicker() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
      <span className="size-2 rounded-full bg-green" />
      <span className="text-green font-sans text-sm font-medium">
        {content.kicker}
      </span>
    </div>
  );
}

export default function Season1Hero() {
  return (
    <Section
      id="season-1"
      className="relative overflow-hidden min-h-175 -mt-(--navbar-height) pt-(--navbar-height) flex flex-col"
    >
      <Image
        src={cdn(images.season1.heroMobile, { width: 1608, quality: "100" })}
        alt="Season 1 hero background"
        width={1608}
        height={2776}
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover lg:hidden"
      />
      <Image
        src={cdn(images.season1.hero, { width: 3840, quality: "100" })}
        alt="Season 1 hero background"
        width={4320}
        height={2109}
        priority
        sizes="100vw"
        className="absolute inset-0 hidden lg:block w-full h-full object-cover"
      />
      <div className="container relative z-10 flex flex-col flex-1 justify-end">
        <div className="flex flex-col">
          <div className="flex flex-col gap-8 lg:gap-11 [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto items-center text-center pb-10 lg:pb-20 lg:max-w-2xl">
            <div className="flex flex-col gap-6 items-center">
              <FadeIn>
                <Season1Kicker />
              </FadeIn>
              <FadeIn delay={0.05}>
                <Heading as="h1" align="center">
                  {content.title}
                </Heading>
              </FadeIn>
              <FadeIn
                as="p"
                delay={0.1}
                className="text-white/72 text-sm lg:text-base max-w-lg"
              >
                {content.description}
              </FadeIn>
            </div>
            <FadeIn delay={0.15} className="flex flex-row items-center gap-4">
              {content.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  nativeButton={false}
                  variant={cta.variant}
                  render={<Link href={cta.href} />}
                >
                  {cta.label}
                  {"icon" in cta && cta.icon}
                </Button>
              ))}
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
}
