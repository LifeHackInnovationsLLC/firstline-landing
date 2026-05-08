"use client";

import { motion, type Transition, useReducedMotion } from "motion/react";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

export function AgentsHeroBackdrop() {
  const shouldReduce = useReducedMotion();

  const initialEntry = shouldReduce
    ? { opacity: 1, scale: 1 }
    : { opacity: 0, scale: 1.04 };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <motion.div
        initial={initialEntry}
        animate={{ opacity: 1, scale: 1 }}
        transition={
          shouldReduce
            ? { duration: 0 }
            : { duration: 0.6, ease: EASE, delay: 0.05 }
        }
        className="absolute inset-0"
      >
        <motion.img
          src="/hero-section/agents/bg.png"
          alt=""
          sizes="100vw"
          animate={
            shouldReduce
              ? undefined
              : {
                  opacity: [1, 0.92, 1],
                  scale: [1, 1.006, 1],
                }
          }
          transition={
            shouldReduce
              ? undefined
              : {
                  duration: 4.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }
          }
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transformOrigin: "50% 30%" }}
        />
      </motion.div>
    </div>
  );
}
