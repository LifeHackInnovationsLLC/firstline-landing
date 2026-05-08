import { Heading } from "@/components/ui/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { Card1Media } from "./step-cards/card1";
import { Card2Media } from "./step-cards/card2";
import { Card3Media } from "./step-cards/card3";

type StepItem = {
  title: string;
  description: string;
  Media: React.ComponentType;
};

const content: StepItem[] = [
  {
    title: "Create your account",
    description:
      "Sign up in under 2 minutes. Complete free training to understand the product.",
    Media: Card1Media,
  },
  {
    title: "Discover your path",
    description:
      "Selling payment processing, find affiliate marketing partners, or lead a team.",
    Media: Card2Media,
  },
  {
    title: "Earn commissions",
    description:
      "Every merchant signup earns you recurring commissions. Lifetime.",
    Media: Card3Media,
  },
];

export function Steps() {
  return (
    <div className="flex flex-col [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
      <Reveal>
        <Heading as="h2" className="text-center">
          Get started in 3 simple steps
        </Heading>
      </Reveal>

      <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-15 [--step-card-height:22rem] lg:[--step-card-height:26.5rem]">
        {content.map((step) => (
          <StaggerItem key={step.title}>
            <StepCard className="relative">
              <step.Media />
              <StepContent className="absolute inset-0 z-50">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </StepCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}

type StepCardProps = React.HTMLAttributes<HTMLDivElement>;

function StepCard({ className, children, ...props }: StepCardProps) {
  return (
    <div
      className={cn(
        "relative bg-card-dark w-full rounded-4xl h-(--step-card-height) overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type StepContentProps = React.HTMLAttributes<HTMLDivElement>;

function StepContent({ className, children, ...props }: StepContentProps) {
  return (
    <div
      className={cn(
        "relative z-10 p-6 flex flex-col gap-1 justify-end h-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type StepTitleProps = React.HTMLAttributes<HTMLParagraphElement>;

function StepTitle({ className, children, ...props }: StepTitleProps) {
  return (
    <p className={cn("text-lg font-semibold text-white", className)} {...props}>
      {children}
    </p>
  );
}

type StepDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

function StepDescription({
  className,
  children,
  ...props
}: StepDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-white/65 text-balance", className)}
      {...props}
    >
      {children}
    </p>
  );
}
