import type * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import purpleDecoration from "@/public/decorations/pattern-decoration-purple-card.webp";
import greenDecoration from "@/public/decorations/pattern-decoration-green.webp";

type HighlightColor = "purple" | "green";

const decorationImages: Record<HighlightColor, typeof purpleDecoration> = {
  purple: purpleDecoration,
  green: greenDecoration,
};

function HighlightCard({
  className,
  children,
  color = "purple",
  ...props
}: React.ComponentProps<"div"> & { color?: HighlightColor }) {
  return (
    <div
      data-slot="highlight-card"
      className={cn(
        "relative overflow-hidden rounded-xl bg-black p-4",
        className,
      )}
      {...props}
    >
      <Image
        src={decorationImages[color]}
        alt=""
        className="pointer-events-none absolute top-0 right-0 select-none"
        aria-hidden
      />
      {children}
    </div>
  );
}

function HighlightCardIcon({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="highlight-card-icon"
      className={cn("shrink-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function HighlightCardTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="highlight-card-title"
      className={cn(
        "font-display font-semibold tracking-tight text-white text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

function HighlightCardDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="highlight-card-description"
      className={cn("mt-2 text-sm text-white/60", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export {
  HighlightCard,
  HighlightCardIcon,
  HighlightCardTitle,
  HighlightCardDescription,
};
