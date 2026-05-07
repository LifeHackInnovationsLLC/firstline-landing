"use client";

import { motion, type Transition, useReducedMotion } from "motion/react";
import Image from "next/image";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];
const DURATION = 0.9;

export function TeamHeroGlobe() {
  const shouldReduce = useReducedMotion();

  const initialGlobe = shouldReduce
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 80 };
  const initialGlow = shouldReduce ? { opacity: 1 } : { opacity: 0 };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <motion.div
        initial={initialGlobe}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, ease: EASE, delay: 0.2 }}
        className="absolute -inset-x-20 bottom-0 lg:inset-0"
      >
        <img
          src="/hero-section/team/globe.png"
          alt=""
          width={2880}
          height={1406}
          // priority
          sizes="100vw"
          className="w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover"
        />
      </motion.div>
      <motion.div
        initial={initialGlow}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
        className="absolute inset-x-0 bottom-0"
      >
        <Image
          src="/hero-section/team/bottom-glow.png"
          alt=""
          width={1440}
          height={703}
          priority
          sizes="100vw"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
