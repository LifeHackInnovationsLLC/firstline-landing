"use client";

import {
  AnimatedMedia,
  type AnimatedMediaProps,
} from "@/components/ui/animated-media";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";

type BentoMedia = AnimatedMediaProps | { kind: "globe" };

type BentoItem = {
  text: { highlightText: string; regularText: string };
  alt?: string;
  media: BentoMedia;
};

const content: { bento: BentoItem[] } = {
  bento: [
    {
      text: {
        highlightText: "Turn anyone",
        regularText: "into a tracked incentivized salesperson",
      },
      media: {
        kind: "video",
        webm: "/animations/bento/turn-anyone.webm",
        mp4: "/animations/bento/turn-anyone.mp4",
        loop: false,
      },
    },
    {
      text: { highlightText: "", regularText: "" },
      alt: "Commission tracking dashboard",
      media: {
        kind: "lottie",
        src: "/animations/bento/split-commissions.json",
        loop: false,
      },
    },
    {
      text: {
        highlightText: "See every sale, split, and payout",
        regularText: "in real time",
      },
      media: {
        kind: "video",
        webm: "/animations/bento/real-time-tracking.webm",
        mp4: "/animations/bento/real-time-tracking.mp4",
        loop: false,
      },
    },
    {
      text: {
        highlightText: "Scale globally",
        regularText: "without building ops, finance, or tooling",
      },
      alt: "Scale globally without building ops, finance, or tooling",
      media: { kind: "globe" },
    },
    {
      text: {
        highlightText: "Pay teams, affiliates and partners",
        regularText: "without disputes or delays",
      },
      media: {
        kind: "lottie",
        src: "/animations/bento/pay-teams.json",
        loop: false,
      },
    },
  ],
};

function getBentoKey(item: BentoItem) {
  if (item.alt) return item.alt;
  return `${item.text.highlightText} ${item.text.regularText}`.trim();
}

function BentoMediaRenderer({ media }: { media: BentoMedia }) {
  if (media.kind === "globe") {
    return <BrandGlobe />;
  }
  return <AnimatedMedia {...media} />;
}

function BrandGlobe() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none aspect-square w-[110%] translate-y-[18%] sm:w-[90%] lg:w-[80%]">
        <Globe
          className="!relative !inset-auto !max-w-none"
          config={{
            width: 800,
            height: 800,
            devicePixelRatio: 2,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 4,
            baseColor: [0.2, 0.22, 0.24],
            markerColor: [0.38, 0.88, 0.41],
            glowColor: [0.2, 0.45, 0.25],
            markers: [
              { location: [40.7128, -74.006], size: 0.08 },
              { location: [51.5074, -0.1278], size: 0.08 },
              { location: [48.8566, 2.3522], size: 0.06 },
              { location: [35.6762, 139.6503], size: 0.08 },
              { location: [1.3521, 103.8198], size: 0.06 },
              { location: [-33.8688, 151.2093], size: 0.06 },
              { location: [-23.5505, -46.6333], size: 0.08 },
              { location: [19.4326, -99.1332], size: 0.07 },
              { location: [25.2048, 55.2708], size: 0.05 },
              { location: [19.076, 72.8777], size: 0.07 },
              { location: [39.9042, 116.4074], size: 0.07 },
              { location: [-26.2041, 28.0473], size: 0.05 },
            ],
          }}
        />
      </div>
    </div>
  );
}

export function Bento() {
  const firstThreeItems = content.bento.slice(0, 3);
  const lastItems = content.bento.slice(3);

  return (
    <BentoGrid>
      {firstThreeItems.map((item) => (
        <BentoCard key={getBentoKey(item)} className="md:col-span-2">
          <BentoMediaRenderer media={item.media} />
          <BentoContent className="max-w-2xs">
            <BentoHighlight>{item.text.highlightText}</BentoHighlight>{" "}
            <BentoText>{item.text.regularText}</BentoText>
          </BentoContent>
        </BentoCard>
      ))}
      {lastItems.map((item) => (
        <BentoCard
          key={getBentoKey(item)}
          className="md:col-span-2 lg:col-span-3"
        >
          <BentoMediaRenderer media={item.media} />
          <BentoContent>
            <BentoHighlight>{item.text.highlightText}</BentoHighlight>{" "}
            <BentoText>{item.text.regularText}</BentoText>
          </BentoContent>
        </BentoCard>
      ))}
    </BentoGrid>
  );
}

type BentoGridProps = React.HTMLAttributes<HTMLDivElement>;

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

type BentoCardProps = React.HTMLAttributes<HTMLDivElement>;

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

type BentoContentProps = React.HTMLAttributes<HTMLParagraphElement>;

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

type BentoHighlightProps = React.HTMLAttributes<HTMLSpanElement>;

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

type BentoTextProps = React.HTMLAttributes<HTMLSpanElement>;

function BentoText({ className, children, ...props }: BentoTextProps) {
  return (
    <span className={cn("text-white/65", className)} {...props}>
      {children}
    </span>
  );
}
