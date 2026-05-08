"use client";

import {
  motion,
  type Transition,
  useReducedMotion,
  type Variants,
} from "motion/react";
import type { ElementType, ReactNode } from "react";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];
const DURATION = 0.5;
const VIEWPORT = { once: true, margin: "0px 0px -10% 0px" } as const;

type MotionTag = "div" | "section" | "p" | "span" | "li" | "ul";
type StaggerDirection = "bottom" | "left" | "right";
const STAGGER_DISTANCE = 16;

interface RevealProps {
  as?: MotionTag;
  delay?: number;
  y?: number;
  className?: string;
  children?: ReactNode;
}

export function Reveal({
  as = "div",
  delay = 0,
  y = 16,
  className,
  children,
}: RevealProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTagComponent = motion[as];

  return (
    <MotionTagComponent
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </MotionTagComponent>
  );
}

interface FadeInProps {
  as?: MotionTag;
  delay?: number;
  className?: string;
  children?: ReactNode;
}

export function FadeIn({
  as = "div",
  delay = 0,
  className,
  children,
}: FadeInProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTagComponent = motion[as];

  return (
    <MotionTagComponent
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </MotionTagComponent>
  );
}

interface RevealScaleProps {
  as?: MotionTag;
  delay?: number;
  from?: number;
  className?: string;
  children?: ReactNode;
}

export function RevealScale({
  as = "div",
  delay = 0,
  from = 0.96,
  className,
  children,
}: RevealScaleProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTagComponent = motion[as];

  return (
    <MotionTagComponent
      className={className}
      initial={{ opacity: 0, scale: from }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </MotionTagComponent>
  );
}

const groupVariants = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

const itemVariantsByDirection: Record<StaggerDirection, Variants> = {
  bottom: {
    hidden: { opacity: 0, y: STAGGER_DISTANCE },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION, ease: EASE },
    },
  },
  left: {
    hidden: { opacity: 0, x: -STAGGER_DISTANCE },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION, ease: EASE },
    },
  },
  right: {
    hidden: { opacity: 0, x: STAGGER_DISTANCE },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION, ease: EASE },
    },
  },
};

interface StaggerGroupProps {
  as?: MotionTag;
  stagger?: number;
  delayChildren?: number;
  className?: string;
  children?: ReactNode;
}

export function StaggerGroup({
  as = "div",
  stagger = 0.08,
  delayChildren = 0,
  className,
  children,
}: StaggerGroupProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTagComponent = motion[as];

  return (
    <MotionTagComponent
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={groupVariants(stagger, delayChildren)}
    >
      {children}
    </MotionTagComponent>
  );
}

interface StaggerItemProps {
  as?: MotionTag;
  from?: StaggerDirection;
  className?: string;
  children?: ReactNode;
}

export function StaggerItem({
  as = "div",
  from = "bottom",
  className,
  children,
}: StaggerItemProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTagComponent = motion[as];

  return (
    <MotionTagComponent
      className={className}
      variants={itemVariantsByDirection[from]}
    >
      {children}
    </MotionTagComponent>
  );
}
