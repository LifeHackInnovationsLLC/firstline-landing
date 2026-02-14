import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-display font-semibold tracking-tight bg-linear-to-b from-white to-white/70 bg-clip-text text-transparent",
  {
    variants: {
      size: {
        xs: "text-base md:text-lg",
        sm: "text-xl md:text-2xl",
        md: "text-2xl md:text-3xl",
        default: "text-4xl lg:text-[52px] lg:leading-[52px]",
        lg: "text-5xl md:text-6xl",
        xl: "text-6xl md:text-7xl",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      size: "default",
      align: "left",
    },
  },
);

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

function Heading({
  className,
  size,
  align,
  as: Tag = "h2",
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(headingVariants({ size, align, className }))}
      {...props}
    >
      {children}
    </Tag>
  );
}

export { Heading, headingVariants };
