import * as React from "react";

import { cn } from "@/lib/utils";

function FeatureCard({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="feature-card"
      className={cn(
        "px-6 py-20 rounded-3xl bg-black relative overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function FeatureCardContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="feature-card-content"
      className={cn("max-w-lg", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function FeatureCardTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="feature-card-title"
      className={cn(
        "font-display font-semibold tracking-tight text-white text-4xl lg:text-[52px] lg:leading-[52px]",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

function FeatureCardDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="feature-card-description"
      className={cn("mt-6 text-base text-white/72", className)}
      {...props}
    >
      {children}
    </p>
  );
}

function FeatureCardList({
  className,
  children,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="feature-card-list"
      className={cn("mt-10 flex flex-col gap-[14px]", className)}
      {...props}
    >
      {children}
    </ul>
  );
}

function FeatureCardListItem({
  className,
  children,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="feature-card-list-item"
      className={cn(
        "flex flex-row items-center gap-[14px] text-sm text-white",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
}

export {
  FeatureCard,
  FeatureCardContent,
  FeatureCardTitle,
  FeatureCardDescription,
  FeatureCardList,
  FeatureCardListItem,
};
