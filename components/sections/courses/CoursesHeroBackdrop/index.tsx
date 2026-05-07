"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { cdn, images } from "@/lib/cdn";

export function CoursesHeroBackdrop() {
  const shouldReduce = useReducedMotion();

  const initial = shouldReduce ? { opacity: 1 } : { opacity: 0 };

  return (
    <motion.div
      aria-hidden
      initial={initial}
      animate={{ opacity: 1 }}
      transition={
        shouldReduce
          ? { duration: 0 }
          : { duration: 0.9, ease: "easeOut", delay: 0.05 }
      }
      className="pointer-events-none absolute inset-0"
    >
      <Image
        src={cdn(images.courses.heroMobile, { width: 1608, quality: "100" })}
        alt=""
        width={1608}
        height={2572}
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-top md:hidden"
      />
      <Image
        src={cdn(images.courses.hero, { width: 3840, quality: "100" })}
        alt=""
        width={4320}
        height={2109}
        priority
        sizes="100vw"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  );
}
