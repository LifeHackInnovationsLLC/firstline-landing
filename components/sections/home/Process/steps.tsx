import { cn } from "@/lib/utils";
import { cdn, images } from "@/lib/cdn";
import { Heading } from "@/components/ui/heading";

const content = [
  {
    title: "Create your account",
    description:
      "Sign up in under 2 minutes. Complete free training to understand the product.",
    image: images.process.step1,
  },
  {
    title: "Discover your path",
    description:
      "Selling payment processing, find affiliate marketing partners, or lead a team.",
    image: images.process.step2,
  },
  {
    title: "Earn commissions",
    description:
      "Every merchant signup earns you recurring commissions. Lifetime.",
    image: images.process.step3,
  },
];

export function Steps() {
  return (
    <div className="flex flex-col [--steps-content-width:28rem] lg:[--steps-content-width:100%] max-w-(--steps-content-width) mx-auto lg:mx-0">
      <Heading as="h2" className="text-center">
        Get started in 3 simple steps
      </Heading>

      <StepsGrid>
        {content.map((step) => (
          <StepCard key={step.title}>
            <StepImage src={cdn(step.image, { width: 800 })} alt={step.title} />
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

interface StepsGridProps extends React.HTMLAttributes<HTMLDivElement> {}

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

interface StepCardProps extends React.HTMLAttributes<HTMLDivElement> {}

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

interface StepImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

function StepImage({ className, alt, ...props }: StepImageProps) {
  return (
    <img
      className={cn("absolute inset-0 w-full h-full object-cover", className)}
      alt={alt}
      {...props}
    />
  );
}

interface StepContentProps extends React.HTMLAttributes<HTMLDivElement> {}

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

interface StepTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function StepTitle({ className, children, ...props }: StepTitleProps) {
  return (
    <p className={cn("text-lg font-semibold text-white", className)} {...props}>
      {children}
    </p>
  );
}

interface StepDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

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
