import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { cdn, images } from "@/lib/cdn";

const levels = [
  {
    level: 1,
    name: "Starter",
    xp: "1,500 XP",
    image: images.season1.level1,
  },
  {
    level: 2,
    name: "Bronze",
    xp: "3,000 XP",
    image: images.season1.level2,
  },
  {
    level: 3,
    name: "Silver",
    xp: "5,000 XP",
    image: images.season1.level3,
  },
  {
    level: 4,
    name: "Gold Starter",
    xp: "7,500 XP",
    image: images.season1.level4,
  },
  {
    level: 5,
    name: "Gold",
    xp: "10,000 XP",
    image: images.season1.level5,
  },
  {
    level: 6,
    name: "Platinum",
    xp: "15,000 XP",
    image: images.season1.level6,
  },
  {
    level: 7,
    name: "Elite",
    xp: "20,000 XP",
    image: images.season1.level7,
  },
  {
    level: 8,
    name: "Diamond",
    xp: "25,000 XP",
    image: images.season1.level8,
  },
];

const content = {
  title: "8 levels to climb",
  description:
    "Each level unlocks new rewards and recognition. Track your progress and see how far you've come.",
};

export default function Season1Levels() {
  return (
    <Section className="relative overflow-hidden">
      <div className="container relative z-10">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <div className="flex flex-col items-center gap-4">
            <Heading as="h2" align="center">
              {content.title}
            </Heading>
            <p className="text-white/72 text-sm lg:text-base max-w-lg text-center lg:max-w-none">
              {content.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-15">
            {levels.map((level) => (
              <div
                key={level.level}
                className="relative flex flex-col justify-end h-86 bg-card-dark overflow-hidden rounded-xl p-5"
              >
                <Image
                  src={cdn(level.image, { width: 800 })}
                  alt={level.name}
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                  unoptimized
                />
                <div className="relative z-10 flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-white/65 text-sm">
                      Level {level.level}
                    </span>
                    <span className="text-white font-semibold text-lg">
                      {level.name}
                    </span>
                  </div>
                  <span className="text-green font-semibold">{level.xp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
