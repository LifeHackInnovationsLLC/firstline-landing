"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

function Testimonials({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="testimonials" className={cn("", className)} {...props} />
  );
}

function TestimonialsGrid({
  className,
  children,
  height = 500,
  ...props
}: React.ComponentProps<"div"> & { height?: number }) {
  return (
    <div
      data-slot="testimonials-grid"
      className={cn("relative overflow-hidden", className)}
      style={{ height }}
      {...props}
    >
      <div className="flex gap-4 h-full">{children}</div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray to-transparent pointer-events-none" />
    </div>
  );
}

function TestimonialsColumn({
  className,
  children,
  speed = 30,
  reverse = false,
  repeat = 4,
  ...props
}: React.ComponentProps<"div"> & {
  speed?: number;
  reverse?: boolean;
  repeat?: number;
}) {
  return (
    <InfiniteSlider
      data-slot="testimonials-column"
      direction="vertical"
      gap={16}
      speed={speed}
      reverse={reverse}
      repeat={repeat}
      className={cn("flex-1", className)}
      {...props}
    >
      {children}
    </InfiniteSlider>
  );
}

function TestimonialCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="bg-testimonial-card-outer-bg border border-black/5 rounded-2xl p-2.5 max-w-100">
      <div
        data-slot="testimonial-card"
        className={cn(
          "flex flex-col bg-white/85 rounded-xl shadow-testimonial-card",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function TestimonialCardQuote({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="testimonial-card-quote"
      className={cn(
        "text-text-secondary text-sm leading-relaxed px-4 pt-4 pb-4",
        className,
      )}
      {...props}
    >
      "{children}"
    </p>
  );
}

function TestimonialCardAuthor({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="testimonial-card-author"
      className={cn(
        "flex items-center gap-3 px-4 py-4 border-t border-testimonial-card-border",
        className,
      )}
      {...props}
    />
  );
}

function TestimonialCardAuthorImage({
  className,
  ...props
}: React.ComponentProps<"img">) {
  return (
    <img
      data-slot="testimonial-card-author-image"
      className={cn("size-10 rounded-full", className)}
      {...props}
    />
  );
}

function TestimonialCardAuthorInfo({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="testimonial-card-author-info"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function TestimonialCardAuthorName({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="testimonial-card-author-name"
      className={cn("text-black font-medium text-sm", className)}
      {...props}
    />
  );
}

function TestimonialCardAuthorRole({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="testimonial-card-author-role"
      className={cn("text-text-secondary text-xs", className)}
      {...props}
    />
  );
}

export {
  Testimonials,
  TestimonialsGrid,
  TestimonialsColumn,
  TestimonialCard,
  TestimonialCardQuote,
  TestimonialCardAuthor,
  TestimonialCardAuthorImage,
  TestimonialCardAuthorInfo,
  TestimonialCardAuthorName,
  TestimonialCardAuthorRole,
};
