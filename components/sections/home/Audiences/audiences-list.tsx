import Image from "next/image";
import { cdn, images } from "@/lib/cdn";
import { cn } from "@/lib/utils";

const audiences = [
  {
    audienceName: "Sellers",
    audienceDescription:
      "Launch a commission-based sales network in days - not months",
    audienceImage: images.audiences.audience1,
  },
  {
    audienceName: "Agents",
    audienceDescription:
      "Launch a commission-based sales network in days - not months",
    audienceImage: images.audiences.audience1,
  },
  {
    audienceName: "Agencies",
    audienceDescription:
      "Launch a commission-based sales network in days - not months",
    audienceImage: images.audiences.audience1,
  },
  {
    audienceName: "Affiliates",
    audienceDescription:
      "Launch a commission-based sales network in days - not months",
    audienceImage: images.audiences.audience1,
  },
];

export function AudiencesList() {
  return (
    <AudiencesGrid>
      {audiences.map((audience) => (
        <AudienceCard key={audience.audienceName}>
          <AudienceImage
            src={cdn(audience.audienceImage, { width: 800 })}
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

type AudiencesGridProps = React.HTMLAttributes<HTMLDivElement>;

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

type AudienceCardProps = React.HTMLAttributes<HTMLDivElement>;

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

interface AudienceImageProps {
  className?: string;
  alt: string;
  src: string;
}

function AudienceImage({ className, alt, src }: AudienceImageProps) {
  return (
    <Image
      className={cn("absolute inset-0 w-full h-full object-cover", className)}
      alt={alt}
      src={src}
      fill
      unoptimized
    />
  );
}

type AudienceContentProps = React.HTMLAttributes<HTMLDivElement>;

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

type AudienceTitleProps = React.HTMLAttributes<HTMLParagraphElement>;

function AudienceTitle({ className, children, ...props }: AudienceTitleProps) {
  return (
    <p className={cn("text-lg font-semibold text-white", className)} {...props}>
      {children}
    </p>
  );
}

type AudienceDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

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
