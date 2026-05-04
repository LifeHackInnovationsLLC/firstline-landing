"use client";

import { DollarSign } from "lucide-react";
import type { Transition } from "motion/react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const CARDS = [
  { label: "New Payment", date: "13th Feb 2025", amount: "$2,000" },
  { label: "Commission Split", date: "12th Feb 2025", amount: "$3,200" },
  { label: "Payout Sent", date: "11th Feb 2025", amount: "$1,200" },
];

const CARD_HEIGHT = 72;
const STACK_OFFSET = 14;
const WIDTH_SHRINK = 22;
const MAX_BASE_WIDTH = 292;

const TIMING = {
  SETTLE_MS: 150,
  HOLD_MS: 2200,
} as const;

export function Card3Media() {
  const [order, setOrder] = useState([0, 1, 2]);
  const [phase, setPhase] = useState<"settling" | "holding" | "exiting">(
    "settling",
  );
  const [ghost, setGhost] = useState<{ idx: number } | null>(null);
  const [appearCard, setAppearCard] = useState<{
    idx: number;
    phase: "start" | "end";
  } | null>(null);
  const [baseWidth, setBaseWidth] = useState(MAX_BASE_WIDTH);
  const orderRef = useRef(order);
  const ghostTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const available = entry.contentRect.width - 32; // 16px padding each side
      setBaseWidth(Math.min(MAX_BASE_WIDTH, Math.max(200, available)));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    orderRef.current = order;
  }, [order]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    if (phase === "settling") {
      timers.push(setTimeout(() => setPhase("holding"), TIMING.SETTLE_MS));
    } else if (phase === "holding") {
      timers.push(setTimeout(() => setPhase("exiting"), TIMING.HOLD_MS));
    } else if (phase === "exiting") {
      const top = orderRef.current[0];
      setGhost({ idx: top });
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

  const stackHeight = CARD_HEIGHT + (CARDS.length - 1) * STACK_OFFSET;

  return (
    <div ref={containerRef} className="flex items-center justify-center w-full">
      <img
        src="/textures/benefit-bento/card3/background.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div
        className="relative"
        style={{ width: baseWidth, height: stackHeight }}
      >
        {ghost && (
          <motion.div
            key={`ghost-${ghost.idx}`}
            className="absolute rounded-2xl overflow-hidden"
            style={{
              height: CARD_HEIGHT,
              width: baseWidth,
              left: 0,
              top: 0,
              zIndex: CARDS.length + 1,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
            initial={{ top: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
            animate={{
              top: -24,
              opacity: 0,
              scale: 1.04,
              filter: "blur(8px)",
            }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <TopCardContent card={CARDS[ghost.idx]} />
          </motion.div>
        )}

        {order.map((cardIdx, stackPos) => {
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
                opacity: 0,
                scale: 0.88,
                filter: "blur(4px)",
                width: cardWidth,
                left: widthShrink / 2,
              }
            : {
                top: topOffset,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                width: cardWidth,
                left: widthShrink / 2,
              };

          const transitionValues: Transition = isAppearStart
            ? { duration: 0 }
            : isAppearEnd
              ? { duration: 0.3, ease: "easeOut" }
              : { duration: 0.45, ease: "easeInOut" };

          return (
            <motion.div
              key={cardIdx}
              className="absolute rounded-2xl overflow-hidden"
              initial={false}
              animate={animateValues}
              transition={transitionValues}
              style={{
                height: CARD_HEIGHT,
                zIndex: CARDS.length - stackPos,
                background: isTop
                  ? "rgba(255,255,255,0.07)"
                  : "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: isTop ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
              }}
            >
              {isTop ? (
                <TopCardContent card={CARDS[cardIdx]} />
              ) : (
                <BackCardContent card={CARDS[cardIdx]} />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function TopCardContent({ card }: { card: (typeof CARDS)[0] }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 bg-background/90 backdrop-blur-3xl h-full relative px-3 sm:px-4">
      <div
        className="flex-shrink-0 p-2 sm:p-3 rounded-md border flex items-center justify-center"
        style={{
          background: "linear-gradient(162.92deg, #131418 0%, #131418 100%)",
        }}
      >
        <span className="text-white font-semibold text-sm sm:text-base">
          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          <span className="text-white/60 text-xs sm:text-sm truncate">
            {card.label}
          </span>
          <span className="text-white/35 text-[10px] sm:text-xs flex-shrink-0">
            {card.date}
          </span>
        </div>
        <div className="text-white font-semibold text-lg sm:text-xl mt-0.5 leading-tight">
          {card.amount}
        </div>
      </div>
    </div>
  );
}

function BackCardContent({ card }: { card: (typeof CARDS)[0] }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 bg-background/90 backdrop-blur-3xl h-full relative px-3 sm:px-4">
      <div
        className="flex-shrink-0 p-2 sm:p-3 rounded-md border flex items-center justify-center"
        style={{
          background: "linear-gradient(162.92deg, #131418 0%, #131418 100%)",
        }}
      >
        <span className="text-white font-semibold text-sm sm:text-base">
          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          <span className="text-white/60 text-xs sm:text-sm truncate">
            {card.label}
          </span>
          <span className="text-white/35 text-[10px] sm:text-xs flex-shrink-0">
            {card.date}
          </span>
        </div>
        <div className="text-white font-semibold text-lg sm:text-xl mt-0.5 leading-tight">
          {card.amount}
        </div>
      </div>
    </div>
  );
}
