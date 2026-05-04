"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Card = {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  glow: string;
  stroke: string;
};

const strokeFromRgb = (r: number, g: number, b: number) =>
  `linear-gradient(67.46deg, rgba(${r}, ${g}, ${b}, 0) 68.52%, rgb(${r}, ${g}, ${b}) 121.72%), linear-gradient(162.92deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.05) 100%)`;

const PaymentIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 6.5v11M9.5 9.25c0-1.1 1.12-2 2.5-2s2.5.9 2.5 2-1.12 2-2.5 2-2.5.9-2.5 2 1.12 2 2.5 2 2.5-.9 2.5-2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ReferralsIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19.5c0-3 2.46-5 5.5-5s5.5 2 5.5 5v.5h-11v-.5z" />
    <circle cx="16.5" cy="9.5" r="2.6" opacity="0.85" />
    <path
      d="M12.5 18.5c.3-2.3 2.1-4 4-4 2.04 0 3.7 1.5 4 3.5v.5h-8v0z"
      opacity="0.85"
    />
  </svg>
);

const RecurringIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M5 12a7 7 0 0111.5-5.4L18 8M19 12a7 7 0 01-11.5 5.4L6 16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 4v4h-4M6 20v-4h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CARDS: Card[] = [
  {
    id: "payment",
    icon: <PaymentIcon />,
    label: "New Payment",
    value: "$2,000",
    glow: "rgba(255,255,255,0.18)",
    stroke: strokeFromRgb(255, 255, 255),
  },
  {
    id: "referrals",
    icon: <ReferralsIcon />,
    label: "Active Referrals",
    value: "48",
    glow: "rgba(45,212,191,0.55)",
    stroke: strokeFromRgb(18, 216, 199),
  },
  {
    id: "recurring",
    icon: <RecurringIcon />,
    label: "Monthly Recurring",
    value: "$6,200",
    glow: "rgba(168,85,247,0.55)",
    stroke: strokeFromRgb(168, 85, 247),
  },
];

const SLOTS = [
  { top: "12%", x: 0 },
  { top: "40%", x: 16 },
  { top: "68%", x: 0 },
];

const ENTER = { top: "105%", x: 0, opacity: 0, scale: 0.92 };
const EXIT = { top: "-25%", x: 0, opacity: 0, scale: 0.92 };

type Slot = { key: number; cardIdx: number };

const STEP_MS = 2800;

export function HeroAnimation() {
  const counter = useRef(3);
  const [slots, setSlots] = useState<Slot[]>([
    { key: 0, cardIdx: 0 },
    { key: 1, cardIdx: 1 },
    { key: 2, cardIdx: 2 },
  ]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlots((prev) => {
        const exiting = prev[0];
        return [
          ...prev.slice(1),
          { key: counter.current++, cardIdx: exiting.cardIdx },
        ];
      });
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center lg:justify-center ">
      <div className="relative w-full max-w-105 h-full pr-3 sm:pr-8">
        <AnimatePresence initial={false}>
          {slots.map((slot, idx) => {
            const card = CARDS[slot.cardIdx];
            const target = SLOTS[idx];
            return (
              <motion.div
                key={slot.key}
                initial={ENTER}
                animate={{
                  top: target.top,
                  x: target.x,
                  opacity: 1,
                  scale: 1,
                }}
                exit={EXIT}
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 26,
                  opacity: { duration: 0.4, ease: "easeOut" },
                }}
                className="absolute left-0 right-0 h-16 sm:h-18"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-y-4 right-0 w-[55%] rounded-full blur-2xl opacity-90"
                  style={{
                    background: `radial-gradient(60% 70% at 80% 50%, ${card.glow} 0%, transparent 75%)`,
                  }}
                />
                <div
                  className="relative h-full rounded-[21px] p-px"
                  style={{ background: card.stroke }}
                >
                  <div
                    className="relative h-full flex items-center gap-3 px-2.5 rounded-[22px] bg-[#0E0E12]"
                    style={{
                      boxShadow: `
                        inset 0 1px 0 rgba(255,255,255,0.06),
                        0 18px 30px rgba(0,0,0,0.45)
                      `,
                    }}
                  >
                    <div
                      className="flex shrink-0 items-center justify-center size-11 sm:size-13 rounded-[14px] text-white"
                      style={{
                        background:
                          "linear-gradient(180deg, #1A1A20 0%, #0B0B0F 100%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.06)",
                      }}
                    >
                      {card.icon}
                    </div>
                    <span className="flex-1 text-sm sm:text-base text-white/85 pl-1">
                      {card.label}
                    </span>
                    <span className="text-sm sm:text-base text-white font-medium tabular-nums pr-2 sm:pr-3">
                      {card.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
