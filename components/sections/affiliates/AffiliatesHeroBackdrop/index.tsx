"use client";

import { motion, type Transition, useReducedMotion } from "motion/react";

const SPHERE_EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

export function AffiliatesHeroBackdrop() {
  const shouldReduce = useReducedMotion();

  const initialLines = shouldReduce ? { opacity: 1 } : { opacity: 0 };
  const initialSphere = shouldReduce
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 60 };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <motion.img
        src="/hero-section/affiliates/sm-lines.png"
        alt=""
        width={706}
        height={713}
        sizes="70vw"
        initial={initialLines}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.05 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] max-w-[706px] h-auto lg:hidden"
      />
      <motion.img
        src="/hero-section/affiliates/bg-lines.png"
        alt=""
        width={1108}
        height={900}
        sizes="60vw"
        initial={initialLines}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.05 }}
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 lg:w-[55%] max-w-[1108px] h-auto"
      />
      <motion.img
        src="/hero-section/affiliates/sm-shere.png"
        alt=""
        width={804}
        height={948}
        sizes="95vw"
        initial={initialSphere}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: SPHERE_EASE, delay: 0.15 }}
        className="absolute top-[20%] sm:top-[30%] md:top-[40%] left-1/2 -translate-x-1/2 w-full h-auto lg:hidden"
      />
      <motion.img
        src="/hero-section/affiliates/sphere.png"
        alt=""
        width={2322}
        height={1000}
        sizes="110vw"
        initial={initialSphere}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: SPHERE_EASE, delay: 0.15 }}
        className="hidden lg:block absolute top-[20%] left-1/2 -translate-x-1/2 lg:w-[110%] max-w-none h-auto"
      />
    </div>
  );
}
