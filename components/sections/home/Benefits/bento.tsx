"use client";

import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { Card1Media } from "./bento-cards/card1";
import { Card2Media } from "./bento-cards/card2";
import { Card3Media } from "./bento-cards/card3";
import { Card4Media } from "./bento-cards/card4";
import { Card5Media } from "./bento-cards/card5";

type BentoItem = {
  id: string;
  text: { highlightText: string; regularText: string };
  Media: React.ComponentType;
};

const content: { bento: BentoItem[] } = {
  bento: [
    {
      id: "turn-anyone",
      text: {
        highlightText: "Turn anyone",
        regularText: "into a tracked incentivized salesperson",
      },
      Media: Card1Media,
    },
    {
      id: "card-2",
      text: { highlightText: "", regularText: "" },
      Media: Card2Media,
    },
    {
      id: "see-every-sale",
      text: {
        highlightText: "See every sale, split, and payout",
        regularText: "in real time",
      },
      Media: Card3Media,
    },
    {
      id: "scale-globally",
      text: {
        highlightText: "Scale globally",
        regularText: "without building ops, finance, or tooling",
      },
      Media: Card4Media,
    },
    {
      id: "pay-teams",
      text: {
        highlightText: "Pay teams, affiliates and partners",
        regularText: "without disputes or delays",
      },
      Media: Card5Media,
    },
  ],
};

export function Bento() {
  const firstThreeItems = content.bento.slice(0, 3);
  const lastItems = content.bento.slice(3);

  return (
    <StaggerGroup className="grid grid-cols-1 mt-15 gap-3 md:grid-cols-2 lg:grid-cols-6 [--bento-card-height:22.56rem]">
      {firstThreeItems.map((item) => (
        <StaggerItem key={item.id} className="md:col-span-2 h-full">
          <BentoCard>
            <div className="flex-1 flex items-center justify-center">
              <item.Media />
            </div>
            <BentoContent className="max-w-2xs">
              <BentoHighlight>{item.text.highlightText}</BentoHighlight>{" "}
              <BentoText>{item.text.regularText}</BentoText>
            </BentoContent>
          </BentoCard>
        </StaggerItem>
      ))}
      {lastItems.map((item) => (
        <StaggerItem
          key={item.id}
          className="md:col-span-2 lg:col-span-3 h-full"
        >
          <BentoCard>
            <div className="flex-1 flex items-center justify-center">
              <item.Media />
            </div>
            <BentoContent>
              <BentoHighlight>{item.text.highlightText}</BentoHighlight>{" "}
              <BentoText>{item.text.regularText}</BentoText>
            </BentoContent>
          </BentoCard>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

type BentoCardProps = React.HTMLAttributes<HTMLDivElement>;

function BentoCard({ className, children, ...props }: BentoCardProps) {
  return (
    <div
      className={cn(
        "p-6 w-full relative flex flex-col h-(--bento-card-height) bg-card-dark overflow-hidden rounded-4xl",
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
