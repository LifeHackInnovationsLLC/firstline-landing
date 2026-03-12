import Image from "next/image";
import type * as React from "react";
import { cdn, images } from "@/lib/cdn";

import { cn } from "@/lib/utils";

type HighlightColor = "purple" | "green";

const decorationPaths: Record<HighlightColor, string> = {
  purple: images.decorations.patternPurpleCard,
  green: images.decorations.patternGreen,
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
        src={cdn(decorationPaths[color])}
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute top-0 right-0 select-none"
        aria-hidden="true"
        unoptimized
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
