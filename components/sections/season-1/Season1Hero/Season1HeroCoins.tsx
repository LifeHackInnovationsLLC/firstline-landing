"use client";

import { motion, type Transition, useReducedMotion } from "motion/react";
import Image from "next/image";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];
const DURATION = 0.9;

export function Season1HeroCoins() {
  const shouldReduce = useReducedMotion();

  const initialLeft = shouldReduce
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, x: -100, y: 100 };
  const initialRight = shouldReduce
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, x: 100, y: 100 };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <motion.div
        initial={initialLeft}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: DURATION, ease: EASE, delay: 0.2 }}
        className="absolute left-0 bottom-0 w-[45%] sm:w-[40%] md:w-[35%] lg:w-[30%]"
      >
        <Image
          src="/hero-section/season1/coin1.png"
          alt=""
          width={600}
          height={436}
          priority
          sizes="20vw"
          className="w-full h-auto"
        />
      </motion.div>
      <motion.div
        initial={initialRight}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: DURATION, ease: EASE, delay: 0.3 }}
        className="absolute right-0 bottom-0 w-[42%] sm:w-[37%] md:w-[33%] lg:w-[28%]"
      >
        <Image
          src="/hero-section/season1/coin2.png"
          alt=""
          width={423}
          height={552}
          priority
          sizes="20vw"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
