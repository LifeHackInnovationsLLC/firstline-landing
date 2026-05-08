import { PlayArrow } from "@/components/icons/play-arrow";
import { Section } from "@/components/layout/section";
import {
  TrainingCard,
  TrainingCardAction,
  TrainingCardBadge,
  TrainingCardBody,
  TrainingCardContent,
  TrainingCardDescription,
  TrainingCardDuration,
  TrainingCardFooter,
  TrainingCardHeader,
  TrainingCardImage,
  TrainingCardSubtitle,
  TrainingCardTitle,
  TrainingCardXp,
} from "@/components/sections/courses/AdvancedTraining";
import { CoursesHeroBackdrop } from "@/components/sections/courses/CoursesHeroBackdrop";
import { HeroKicker } from "@/components/sections/shared/Hero/hero-kicker";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Heading } from "@/components/ui/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
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

const heroContent = {
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
      icon: <PlayArrow className="size-3 ml-2 mt-1" />,
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
      <PageHero
        id="courses"
        {...heroContent}
        kicker={<HeroKicker>Build your network</HeroKicker>}
        align="bottom"
        className="relative overflow-hidden min-h-175 -mt-(--navbar-height) pt-(--navbar-height)"
        decorations={<CoursesHeroBackdrop />}
      />
      <AdvancedTraining />
    </>
  );
}

function AdvancedTraining() {
  return (
    <Section id="advanced-training" className="bg-gray">
      <div className="container">
        <div className="flex flex-col gap-8 lg:gap-15 [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Reveal className="flex flex-col gap-4 items-center text-center">
            <Heading as="h2" align="center" className="text-black">
              Advanced Training
            </Heading>
            <p className="text-black/60 text-sm lg:text-base max-w-lg lg:max-w-none">
              Start with the fundamentals and progress to advanced techniques
            </p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <StaggerItem key={course.title} className="h-full">
                <TrainingCard className="h-full">
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
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
