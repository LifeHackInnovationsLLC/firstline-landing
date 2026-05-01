"use client";

import Image from "next/image";
import type * as React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

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
      <div className="flex gap-4 h-full justify-center">{children}</div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray to-transparent pointer-events-none" />
    </div>
  );
}

function TestimonialsMobileGrid({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="testimonials-mobile-grid"
      className={cn("relative overflow-hidden flex flex-col gap-4", className)}
      {...props}
    >
      {children}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray to-transparent pointer-events-none" />
    </div>
  );
}

function TestimonialsRow({
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
      data-slot="testimonials-row"
      direction="horizontal"
      gap={16}
      speed={speed}
      reverse={reverse}
      repeat={repeat}
      className={cn("", className)}
      {...props}
    >
      {children}
    </InfiniteSlider>
  );
}

function TestimonialsColumn({
  className,
  children,
  duration = 25,
  reverse = false,
  repeat = 2,
  ...props
}: React.ComponentProps<"div"> & {
  duration?: number;
  reverse?: boolean;
  repeat?: number;
}) {
  return (
    <div
      data-slot="testimonials-column"
      className={cn("overflow-hidden", className)}
      {...props}
    >
      <div
        className={reverse ? "animate-scroll-down" : "animate-scroll-up"}
        style={{
          ["--duration" as string]: `${duration}s`,
          willChange: "transform",
        }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col"
            style={{ gap: "16px", paddingBottom: "16px" }}
            aria-hidden={i > 0 ? true : undefined}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="bg-testimonial-card-outer-bg border border-black/5 rounded-2xl p-2.5 max-w-100 h-full">
      <div
        data-slot="testimonial-card"
        className={cn(
          "flex flex-col h-full bg-white/85 rounded-xl shadow-testimonial-card",
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
        "text-text-secondary text-sm leading-relaxed px-4 pt-4 pb-4 flex-1",
        className,
      )}
      {...props}
    >
      &quot;{children}&quot;
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
        "flex items-center gap-3 px-4 py-4 border-t border-testimonial-card-border mt-auto",
        className,
      )}
      {...props}
    />
  );
}

function TestimonialCardAuthorImage({
  className,
  src,
  alt = "",
  width = 40,
  height = 40,
  ...props
}: React.ComponentProps<typeof Image>) {
  return (
    <Image
      data-slot="testimonial-card-author-image"
      className={cn("size-10 rounded-full", className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized
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
  TestimonialsMobileGrid,
  TestimonialsColumn,
  TestimonialsRow,
  TestimonialCard,
  TestimonialCardQuote,
  TestimonialCardAuthor,
  TestimonialCardAuthorImage,
  TestimonialCardAuthorInfo,
  TestimonialCardAuthorName,
  TestimonialCardAuthorRole,
};
