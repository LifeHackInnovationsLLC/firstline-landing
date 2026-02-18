import { cn } from "@/lib/utils";
import Image from "next/image";

const audiences = [
  {
    audienceName: "Sellers",
    audienceDescription:
      "Launch a commission-based sales network in days - not months",
    audienceImage: "/sections/audiences/audiences-1.png",
  },
  {
    audienceName: "Agents",
    audienceDescription:
      "Launch a commission-based sales network in days - not months",
    audienceImage: "/sections/audiences/audiences-1.png",
  },
  {
    audienceName: "Agencies",
    audienceDescription:
      "Launch a commission-based sales network in days - not months",
    audienceImage: "/sections/audiences/audiences-1.png",
  },
  {
    audienceName: "Affiliates",
    audienceDescription:
      "Launch a commission-based sales network in days - not months",
    audienceImage: "/sections/audiences/audiences-1.png",
  },
];

export function AudiencesList() {
  return (
    <AudiencesGrid>
      {audiences.map((audience) => (
        <AudienceCard key={audience.audienceName}>
          <AudienceImage
            src={audience.audienceImage}
            alt={audience.audienceName}
          />
          <AudienceContent>
            <AudienceTitle>For {audience.audienceName}</AudienceTitle>
            <AudienceDescription>
              {audience.audienceDescription}
            </AudienceDescription>
          </AudienceContent>
        </AudienceCard>
      ))}
    </AudiencesGrid>
  );
}

interface AudiencesGridProps extends React.HTMLAttributes<HTMLDivElement> {}

function AudiencesGrid({ className, children, ...props }: AudiencesGridProps) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center lg:overflow-x-auto gap-4 mt-8 lg:mt-15 [--audience-card-width:100%] lg:[--audience-card-width:22rem] [--audience-card-height:20rem] lg:[--audience-card-height:24.4rem]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface AudienceCardProps extends React.HTMLAttributes<HTMLDivElement> {}

function AudienceCard({ className, children, ...props }: AudienceCardProps) {
  return (
    <div
      className={cn(
        "relative bg-card-dark w-(--audience-card-width) shrink-0 rounded-4xl h-(--audience-card-height) overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface AudienceImageProps extends React.ComponentProps<typeof Image> {}

function AudienceImage({ className, alt, ...props }: AudienceImageProps) {
  return (
    <Image
      fill
      className={cn("object-cover", className)}
      alt={alt}
      {...props}
    />
  );
}

interface AudienceContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function AudienceContent({
  className,
  children,
  ...props
}: AudienceContentProps) {
  return (
    <div
      className={cn(
        "relative z-10 p-4 flex flex-col gap-1 justify-end h-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface AudienceTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function AudienceTitle({ className, children, ...props }: AudienceTitleProps) {
  return (
    <p className={cn("text-lg font-semibold text-white", className)} {...props}>
      {children}
    </p>
  );
}

interface AudienceDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function AudienceDescription({
  className,
  children,
  ...props
}: AudienceDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-white/65 text-balance", className)}
      {...props}
    >
      {children}
    </p>
  );
}
