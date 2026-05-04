"use client";

import type { Transition } from "motion/react";
import { motion } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cdn, images } from "@/lib/cdn";

const COURSES = [
  { title: "Product Fundamentals", percent: 100 },
  { title: "Advanced Sales Techniques", percent: 100 },
  { title: "Closing Mastery", percent: 100 },
  { title: "Pipeline Management", percent: 100 },
  { title: "Negotiation Tactics", percent: 100 },
];

const VISIBLE = 3;
const CARD_HEIGHT = 88;
const STACK_OFFSET = 12;
const WIDTH_SHRINK = 28;
const WIDTH_RATIO = 0.86;
const MAX_WIDTH = 420;
const MIN_WIDTH = 240;

const TIMING = {
  SETTLE_MS: 150,
  FILL_MS: 1600,
  HOLD_MS: 350,
} as const;

export function Card1Media() {
  const [order, setOrder] = useState(() =>
    Array.from({ length: COURSES.length }, (_, i) => i),
  );
  const [phase, setPhase] = useState<"settling" | "filling" | "exiting">(
    "settling",
  );
  const [displayProgress, setDisplayProgress] = useState(0);
  const [ghost, setGhost] = useState<{ idx: number; progress: number } | null>(
    null,
  );
  const [appearCard, setAppearCard] = useState<{
    idx: number;
    phase: "start" | "end";
  } | null>(null);
  const [baseWidth, setBaseWidth] = useState(MIN_WIDTH);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const orderRef = useRef(order);
  const displayProgressRef = useRef(displayProgress);
  const ghostTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const update = () => {
      const w = el.clientWidth;
      const next = Math.max(
        MIN_WIDTH,
        Math.min(MAX_WIDTH, Math.round(w * WIDTH_RATIO)),
      );
      setBaseWidth(next);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    orderRef.current = order;
  }, [order]);

  useEffect(() => {
    displayProgressRef.current = displayProgress;
  }, [displayProgress]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset progress whenever the stack order changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional reset on order change
    setDisplayProgress(0);
  }, [order]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (phase === "settling") {
      timers.push(setTimeout(() => setPhase("filling"), TIMING.SETTLE_MS));
    } else if (phase === "filling") {
      timers.push(
        setTimeout(() => setPhase("exiting"), TIMING.FILL_MS + TIMING.HOLD_MS),
      );
    } else if (phase === "exiting") {
      const top = orderRef.current[0];

      setGhost({ idx: top, progress: displayProgressRef.current });
      setOrder(([first, ...rest]) => [...rest, first]);
      setAppearCard({ idx: top, phase: "start" });

      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAppearCard({ idx: top, phase: "end" })),
      );

      setPhase("settling");

      if (ghostTimerRef.current) clearTimeout(ghostTimerRef.current);
      ghostTimerRef.current = setTimeout(() => setGhost(null), 450);
    }

    return () => timers.forEach(clearTimeout);
  }, [phase]);

  useEffect(() => {
    if (appearCard?.phase !== "end") return;
    const t = setTimeout(() => setAppearCard(null), 350);
    return () => clearTimeout(t);
  }, [appearCard]);

  useEffect(() => {
    if (phase !== "filling") return;
    const target = COURSES[orderRef.current[0]].percent;
    const startTime = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const elapsed = Math.min(now - startTime, TIMING.FILL_MS);
      setDisplayProgress(Math.round((target * elapsed) / TIMING.FILL_MS));
      if (elapsed < TIMING.FILL_MS) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  const visibleOrder = order.slice(0, VISIBLE);
  const stackHeight = CARD_HEIGHT + (VISIBLE - 1) * STACK_OFFSET;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img
        src={cdn(images.seasonBento.card1Bg)}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: `calc(50% - ${stackHeight / 2 + 40}px)`,
          width: baseWidth,
          height: stackHeight,
        }}
      >
        {ghost && (
          <motion.div
            key={`ghost-${ghost.idx}`}
            className="absolute overflow-hidden rounded-xl border border-white/20 bg-linear-to-br from-neutral-800 to-neutral-950"
            initial={{
              top: 0,
              left: 0,
              width: baseWidth,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            animate={{
              top: -24,
              opacity: 0,
              scale: 1.04,
              filter: "blur(10px)",
            }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            style={{ height: CARD_HEIGHT, zIndex: VISIBLE + 1 }}
          >
            <CardContent
              title={COURSES[ghost.idx].title}
              percent={ghost.progress}
            />
          </motion.div>
        )}

        {visibleOrder.map((cardIdx, stackPos) => {
          const isTop = stackPos === 0;
          const isAppearStart =
            appearCard?.idx === cardIdx && appearCard.phase === "start";
          const isAppearEnd =
            appearCard?.idx === cardIdx && appearCard.phase === "end";
          const topOffset = stackPos * STACK_OFFSET;
          const widthShrink = stackPos * WIDTH_SHRINK;
          const cardWidth = baseWidth - widthShrink;

          const animateValues = isAppearStart
            ? {
                top: topOffset,
                left: widthShrink / 2,
                width: cardWidth,
                opacity: 0,
                scale: 0.85,
                filter: "blur(3px)",
              }
            : {
                top: topOffset,
                left: widthShrink / 2,
                width: cardWidth,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              };

          const transitionValues: Transition = isAppearStart
            ? { duration: 0 }
            : isAppearEnd
              ? { duration: 0.3, ease: "easeOut" as const }
              : { duration: 0.45, ease: "easeInOut" as const };

          return (
            <motion.div
              key={cardIdx}
              className={`absolute overflow-hidden rounded-xl border bg-linear-to-br from-neutral-800 to-neutral-950 ${
                isTop ? "border-white/20" : "border-white/10"
              }`}
              initial={false}
              animate={animateValues}
              transition={transitionValues}
              style={{ height: CARD_HEIGHT, zIndex: VISIBLE - stackPos }}
            >
              {isTop && (
                <CardContent
                  title={COURSES[cardIdx].title}
                  percent={displayProgress}
                />
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute top-0 h-16 w-full bg-[linear-gradient(to_bottom,var(--color-card-dark),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 h-20 w-full bg-[linear-gradient(to_top,var(--color-card-dark),transparent)]" />
    </div>
  );
}

function CardContent({ title, percent }: { title: string; percent: number }) {
  return (
    <div className="flex h-full flex-col justify-center gap-3 px-5 py-3">
      <div className="flex items-center justify-between text-[13px]">
        <span className="text-white font-medium">{title}</span>
        <span className="text-white/55">{percent}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full origin-left rounded-full bg-[#5EEAD4]"
          style={{ width: "100%", transform: `scaleX(${percent / 100})` }}
        />
      </div>
    </div>
  );
}
