import {
  AnimatedMedia,
  type AnimatedMediaProps,
} from "@/components/ui/animated-media";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

type StepItem = {
  title: string;
  description: string;
  media: AnimatedMediaProps;
};

const content: StepItem[] = [
  {
    title: "Create your account",
    description:
      "Sign up in under 2 minutes. Complete free training to understand the product.",
    media: {
      kind: "video",
      webm: "/animations/steps/create-account.webm",
      mp4: "/animations/steps/create-account.mp4",
    },
  },
  {
    title: "Discover your path",
    description:
      "Selling payment processing, find affiliate marketing partners, or lead a team.",
    media: { kind: "lottie", src: "/animations/steps/discover-path.json" },
  },
  {
    title: "Earn commissions",
    description:
      "Every merchant signup earns you recurring commissions. Lifetime.",
    media: { kind: "lottie", src: "/animations/steps/earn-commissions.json" },
  },
];

export function Steps() {
  return (
    <div className="flex flex-col [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
      <Heading as="h2" className="text-center">
        Get started in 3 simple steps
      </Heading>

      <StepsGrid>
        {content.map((step) => (
          <StepCard key={step.title}>
            <AnimatedMedia {...step.media} />
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </StepCard>
        ))}
      </StepsGrid>
    </div>
  );
}

type StepsGridProps = React.HTMLAttributes<HTMLDivElement>;

function StepsGrid({ className, children, ...props }: StepsGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-15 [--step-card-height:22rem] lg:[--step-card-height:26.5rem]",
        className,
      )}
      {...props}
    >
      {children}
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
