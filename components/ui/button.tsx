"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // NOTE: transition is scoped to cheap, compositor-friendly properties
  // (opacity/color/transform) NOT `transition-all`. `transition-all` made the
  // button's :active/:focus state change transition every animatable property,
  // which on navigation-click forced a re-rasterization pass that interacted
  // with the page's large backdrop-filter layers and stalled the macOS
  // compositor (~5s whole-cursor freeze). Keep this scoped.
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm font-medium transition-[opacity,color,background-color,box-shadow,transform] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none select-none",
  {
    variants: {
      variant: {
        primary:
          "h-9 px-4 rounded-lg text-white bg-[linear-gradient(180deg,#654AF7_-41.25%,#412CB6_111.25%)] shadow-[0px_1px_0px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.4)]",
        green:
          "h-9 px-4 rounded-lg text-white bg-[linear-gradient(180deg,#368F8A_-41.25%,#0C6F6A_111.25%)] shadow-[0px_1px_0px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.4)]",
        ghost: "h-9 px-4 rounded-lg text-white hover:opacity-70",
        dark: "h-9 px-4 rounded-lg text-white bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_-41.25%,rgba(255,255,255,0.04)_111.25%)] shadow-[0px_1px_0px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.4)] backdrop-blur-sm",
        glass:
          "h-9 px-4 rounded-[14.0247px] text-white border-[1.17px] border-transparent [background:linear-gradient(162.92deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_100%)_padding-box,linear-gradient(180deg,rgba(101,74,247,0)_0%,rgba(101,74,247,1)_100%)_border-box] shadow-[0px_11.6873px_23.2577px_rgba(0,0,0,0.25)] backdrop-blur-[24px]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Button({
  className,
  variant,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
