import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import {
  HighlightCard,
  HighlightCardDescription,
  HighlightCardIcon,
  HighlightCardTitle,
} from "@/components/ui/highlight-card";
import { cdn, images } from "@/lib/cdn";

const items = [
  {
    image: images.agents.recruitClosers,
    color: "purple" as const,
    title: "Recruit Closers",
    description:
      "Bring on skilled closers from anywhere in the world to work your leads.",
  },
  {
    image: images.agents.leadGenerators,
    color: "green" as const,
    title: "Lead Generators",
    description:
      "Build a team of finders who source opportunities while you strategize.",
  },
  {
    image: images.agents.customPayouts,
    color: "purple" as const,
    title: "Custom Payouts",
    description:
      "Set up commission structures, bonuses, and splits-all from one platform.",
  },
];

export function AgentsGlobal() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Heading as="h2" align="center" className="text-black">
            Ready to go global?
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 lg:mt-10">
            {items.map((item) => (
              <HighlightCard key={item.title} color={item.color}>
                <div className="flex flex-col gap-5">
                  <HighlightCardIcon>
                    <Image
                      src={cdn(item.image, { width: 96 })}
                      alt={item.title}
                      width={48}
                      height={48}
                      unoptimized
                    />
                  </HighlightCardIcon>
                  <div className="flex flex-col gap-2">
                    <HighlightCardTitle>{item.title}</HighlightCardTitle>
                    <HighlightCardDescription className="mt-0">
                      {item.description}
                    </HighlightCardDescription>
                  </div>
                </div>
              </HighlightCard>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-black p-6 lg:p-10 mt-4 flex flex-col items-center justify-center text-center min-h-62.5">
            <Image
              src={cdn(images.agents.readyToGlobalGreenBlur)}
              alt=""
              className="absolute pointer-events-none top-0 right-0"
              width={700}
              height={400}
              unoptimized
            />
            <Image
              src={cdn(images.agents.readyToGlobalPurpleBlur)}
              alt=""
              className="absolute pointer-events-none bottom-0 left-0"
              width={700}
              height={400}
              unoptimized
            />
            <h3 className="relative z-10 font-display font-semibold tracking-tight text-white text-2xl lg:text-4xl">
              Payment processing is needed everywhere
            </h3>
            <p className="relative z-10 mt-3 text-white/60 text-sm lg:text-base">
              With Firstline, you can sell from anywhere to anywhere.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
