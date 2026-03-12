import Link from "next/link";
import { Section } from "@/components/layout/section";
import { TrainingCard } from "@/components/sections/courses/AdvancedTraining/training-card";
import { TrainingCardBadge } from "@/components/sections/courses/AdvancedTraining/training-card-badge";
import { TrainingCardBody } from "@/components/sections/courses/AdvancedTraining/training-card-body";
import { TrainingCardContent } from "@/components/sections/courses/AdvancedTraining/training-card-content";
import { TrainingCardDescription } from "@/components/sections/courses/AdvancedTraining/training-card-description";
import {
  TrainingCardAction,
  TrainingCardDuration,
  TrainingCardFooter,
} from "@/components/sections/courses/AdvancedTraining/training-card-footer";
import { TrainingCardHeader } from "@/components/sections/courses/AdvancedTraining/training-card-header";
import { TrainingCardImage } from "@/components/sections/courses/AdvancedTraining/training-card-image";
import { TrainingCardSubtitle } from "@/components/sections/courses/AdvancedTraining/training-card-subtitle";
import { TrainingCardTitle } from "@/components/sections/courses/AdvancedTraining/training-card-title";
import { TrainingCardXp } from "@/components/sections/courses/AdvancedTraining/training-card-xp";
import { HeroKicker } from "@/components/sections/shared/Hero/hero-kicker";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Courses — Learn to Earn with Firstline",
  description:
    "Master payment processing sales with Firstline's training courses. Learn proven strategies, close more deals, and maximize your recurring commissions.",
  path: "/courses",
  keywords: [
    "payment processing training",
    "sales training courses",
    "commission earning course",
    "merchant services training",
  ],
});

const content = {
  kicker: "Build your network",
  title: "Master Financial Sales",
  description:
    "Learn from industry professionals and start earning commissions with our comprehensive training programs.",
  ctas: [
    {
      label: "Start Learning",
      href: "/courses/catalog",
      variant: "primary" as const,
    },
    {
      label: "How it works",
      href: "/courses/preview",
      variant: "dark" as const,
      icon: (
        <svg
          className="size-3 ml-2 mt-1"
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

const courses = [
  {
    badge: "Training",
    title: "Foundation Training",
    xp: "+500 XP",
    subtitle: "Complete Mastery of the Firstline Product",
    description:
      "Complete all required training courses to master the fundamentals of financial product sales.",
    href: "/courses/foundation",
    duration: "4 - 6 hrs",
  },
  {
    badge: "Sales",
    title: "Team Management",
    xp: "+1000 XP",
    subtitle: "Leadership & Recruitment",
    description:
      "Learn valuable skills to lead your team to success and build a thriving sales organization.",
    href: "/courses/team-management",
    duration: "4 - 6 hrs",
  },
  {
    badge: "Leadership",
    title: "Advanced Sales Program",
    xp: "+750 XP",
    subtitle: "Professional Development",
    description:
      "Sales training curated by industry pros to maximize your commission potential.",
    href: "/courses/advanced-sales",
    duration: "4 - 6 hrs",
  },
];

export default function CoursesPage() {
  return (
    <>
      <CoursesPageHero />
      <AdvancedTraining />
    </>
  );
}

function AdvancedTraining() {
  return (
    <Section id="advanced-training" className="bg-gray">
      <div className="container">
        <div className="flex flex-col gap-8 lg:gap-15">
          <div className="flex flex-col gap-4 items-center text-center">
            <Heading as="h2" align="center" className="text-black">
              Advanced Training
            </Heading>
            <p className="text-black/60 text-sm lg:text-base max-w-lg">
              Start with the fundamentals and progress to advanced techniques
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <TrainingCard key={course.title}>
                <TrainingCardImage>
                  <TrainingCardBadge>{course.badge}</TrainingCardBadge>
                </TrainingCardImage>
                <TrainingCardContent>
                  <TrainingCardHeader>
                    <div className="flex items-baseline gap-2">
                      <TrainingCardTitle>{course.title}</TrainingCardTitle>
                      <TrainingCardXp>{course.xp}</TrainingCardXp>
                    </div>
                    <TrainingCardSubtitle>
                      {course.subtitle}
                    </TrainingCardSubtitle>
                  </TrainingCardHeader>
                  <TrainingCardBody>
                    <TrainingCardDescription>
                      {course.description}
                    </TrainingCardDescription>
                  </TrainingCardBody>
                  <TrainingCardFooter>
                    <TrainingCardAction href={course.href}>
                      Watch Training
                    </TrainingCardAction>
                    <TrainingCardDuration>
                      {course.duration}
                    </TrainingCardDuration>
                  </TrainingCardFooter>
                </TrainingCardContent>
              </TrainingCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function CoursesPageHero() {
  return (
    <Section id="courses">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col gap-8 lg:gap-11 max-w-2xl mx-auto items-center text-center pt-10 lg:pt-20">
            <div className="flex flex-col gap-4 items-center">
              <HeroKicker>{content.kicker}</HeroKicker>
              <Heading as="h1" align="center">
                {content.title}
              </Heading>
              <p className="text-white/72 text-sm lg:text-base max-w-lg">
                {content.description}
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
