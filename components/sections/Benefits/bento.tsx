import bentoImage1 from "@/public/sections/benefits/bento-1.webp";
import bentoImage2 from "@/public/sections/benefits/bento-2.webp";
import bentoImage3 from "@/public/sections/benefits/bento-3.webp";
import bentoImage4 from "@/public/sections/benefits/bento-4.webp";
import bentoImage5 from "@/public/sections/benefits/bento-5.webp";
import { cn } from "@/lib/utils";
import Image from "next/image";

const content = {
  bento: [
    {
      text: {
        highlightText: "Turn anyone",
        regularText: "into a tracked incentivized salesperson",
      },
      image: bentoImage1,
      alt: "",
    },
    {
      text: {
        highlightText: "",
        regularText: "",
      },
      image: bentoImage2,
      alt: "Commission tracking dashboard",
    },
    {
      text: {
        highlightText: "See every sale, split, and payout",
        regularText: "in real time",
      },
      image: bentoImage3,
      alt: "",
    },
    {
      text: {
        highlightText: "Scale globally",
        regularText: "without building ops, finance, or tooling",
      },
      image: bentoImage4,
      alt: "",
    },
    {
      text: {
        highlightText: "Pay teams, affiliates and partners",
        regularText: "without disputes or delays",
      },
      image: bentoImage5,
      alt: "",
    },
  ],
};

function getBentoAlt(item: (typeof content.bento)[number]) {
  if (item.alt) return item.alt;
  return `${item.text.highlightText} ${item.text.regularText}`.trim();
}

export function Bento() {
  const firstThreeItems = content.bento.slice(0, 3);
  const lastItems = content.bento.slice(3);

  return (
    <BentoGrid>
      {firstThreeItems.map((item) => (
        <BentoCard key={getBentoAlt(item)} className="md:col-span-2">
          <BentoImage src={item.image} alt={getBentoAlt(item)} />
          <BentoContent className="max-w-2xs">
            <BentoHighlight>{item.text.highlightText}</BentoHighlight>{" "}
            <BentoText>{item.text.regularText}</BentoText>
          </BentoContent>
        </BentoCard>
      ))}
      {lastItems.map((item) => (
        <BentoCard
          key={getBentoAlt(item)}
          className="md:col-span-2 lg:col-span-3"
        >
          <BentoImage src={item.image} alt={getBentoAlt(item)} />
          <BentoContent>
            <BentoHighlight>{item.text.highlightText}</BentoHighlight>{" "}
            <BentoText>{item.text.regularText}</BentoText>
          </BentoContent>
        </BentoCard>
      ))}
    </BentoGrid>
  );
}

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {}

function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 mt-15 gap-3 md:grid-cols-2 lg:grid-cols-6 [--bento-card-height:22.56rem]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {}

function BentoCard({ className, children, ...props }: BentoCardProps) {
  return (
    <div
      className={cn(
        "col-span-1 p-6 w-full relative flex flex-col justify-end h-(--bento-card-height) bg-card-dark overflow-hidden rounded-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface BentoImageProps extends React.ComponentProps<typeof Image> {}

function BentoImage({ className, alt, ...props }: BentoImageProps) {
  return (
    <Image
      fill
      className={cn("object-cover", className)}
      alt={alt}
      {...props}
    />
  );
}

interface BentoContentProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function BentoContent({ className, children, ...props }: BentoContentProps) {
  return (
    <p
      className={cn("relative z-10 text-lg leading-tight", className)}
      {...props}
    >
      {children}
    </p>
  );
}

interface BentoHighlightProps extends React.HTMLAttributes<HTMLSpanElement> {}

function BentoHighlight({
  className,
  children,
  ...props
}: BentoHighlightProps) {
  return (
    <span className={cn("font-semibold text-white", className)} {...props}>
      {children}
    </span>
  );
}

interface BentoTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

function BentoText({ className, children, ...props }: BentoTextProps) {
  return (
    <span className={cn("text-white/65", className)} {...props}>
      {children}
    </span>
  );
}
