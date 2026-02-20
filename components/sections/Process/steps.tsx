import createAccountImage from "@/public/sections/process/step-1.webp";
import discoverPathImage from "@/public/sections/process/step-2.webp";
import earnCommissionsImage from "@/public/sections/process/step-3.webp";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";

const content = [
  {
    title: "Create your account",
    description:
      "Sign up in under 2 minutes. Complete free training to understand the product.",
    image: createAccountImage,
  },
  {
    title: "Discover your path",
    description:
      "Selling payment processing, find affiliate marketing partners, or lead a team.",
    image: discoverPathImage,
  },
  {
    title: "Earn commissions",
    description:
      "Every merchant signup earns you recurring commissions. Lifetime.",
    image: earnCommissionsImage,
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
            <StepImage src={step.image} alt={step.title} />
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

interface StepImageProps extends React.ComponentProps<typeof Image> {}

function StepImage({ className, alt, ...props }: StepImageProps) {
  return (
    <Image
      fill
      className={cn("object-cover", className)}
      alt={alt}
      sizes="(max-width: 1024px) 100vw, 33vw"
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
