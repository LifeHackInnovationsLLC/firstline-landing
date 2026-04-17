import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";

const content = {
  title: "Four ways to level up",
  bottomText:
    "Plus earn XP for daily logins, completing your profile, verifying your phone, and going Pro.",
  items: [
    {
      title: "Complete Courses",
      description:
        "Learn the skills that earn. Every completed course gets you closer to the next level.",
      image: images.season1.bento1,
    },
    {
      title: "Generate Volume",
      description:
        "The more your merchants process, the more you earn. XP grows alongside your income.",
      image: images.season1.bento2,
    },
    {
      title: "Refer Members",
      description:
        "Bring friends into the network. Earn bonus XP when your referrals go Pro.",
      image: images.season1.bento3,
    },
    {
      title: "Board Merchants",
      description:
        "Your first merchant earns a massive bonus. Keep boarding for +250 XP each after.",
      image: images.season1.bento4,
    },
  ],
};

export default function Season1Bento() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Reveal>
            <Heading as="h2" align="center" className="text-black text-balance">
              {content.title}
            </Heading>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-15">
            {content.items.map((item) => (
              <StaggerItem
                key={item.title}
                className="relative flex flex-col justify-end h-[22.25rem] bg-card-dark overflow-hidden rounded-4xl p-6"
              >
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={cdn(item.image, { width: 800 })}
                  alt={item.title}
                  fill
                  unoptimized
                />
                <div className="relative z-10 flex flex-col gap-1">
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-sm">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal
            as="p"
            delay={0.1}
            className="text-center text-text-secondary w-full mt-8"
          >
            {content.bottomText}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
