"use client";

import { motion, type Transition, useReducedMotion } from "motion/react";
import Image from "next/image";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];
const DURATION = 0.9;

export function AgenciesHeroCards() {
  const shouldReduce = useReducedMotion();

  const initialLeft = shouldReduce
    ? { opacity: 1, x: 0 }
    : { opacity: 0, x: -120 };
  const initialRight = shouldReduce
    ? { opacity: 1, x: 0 }
    : { opacity: 0, x: 120 };

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-0 bottom-1/4 translate-y-1/2 -translate-x-[60%] w-[55%] sm:-translate-x-[58%] sm:w-[52%] md:-translate-x-[55%] md:w-[50%] lg:w-[45%]">
        <motion.div
          initial={initialLeft}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION, ease: EASE, delay: 0.2 }}
        >
          <Image
            src="/hero-section/agencies/card1.png"
            alt=""
            width={1699}
            height={1699}
            priority
            sizes="50vw"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
      <div className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-[60%] w-[55%] sm:translate-x-[58%] sm:w-[52%] md:translate-x-[55%] md:w-[50%] lg:w-[45%]">
        <motion.div
          initial={initialRight}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION, ease: EASE, delay: 0.3 }}
        >
          <Image
            src="/hero-section/agencies/card2.png"
            alt=""
            width={1699}
            height={1699}
            priority
            sizes="50vw"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
