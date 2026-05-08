"use client";

import { useEffect, useRef } from "react";
import { cdn, images } from "@/lib/cdn";

const BORDER_GRADIENT =
  "linear-gradient(134.72deg, #4A4A80 0.28%, rgba(99, 99, 177, 0) 128.61%), linear-gradient(162.92deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)";

const AVATAR_SRCS = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80",
];

const AVATARS = [
  {
    size: 78,
    src: AVATAR_SRCS[0],
    pos: { top: "10%", left: "18%" },
    fx: "60px",
    fy: "45px",
    delay: "0.05s",
  },
  {
    size: 66,
    src: AVATAR_SRCS[1],
    pos: { top: "8%", right: "14%" },
    fx: "-60px",
    fy: "45px",
    delay: "0.1s",
  },
  {
    size: 78,
    src: AVATAR_SRCS[2],
    pos: { top: "42%", left: "2%" },
    fx: "80px",
    fy: "0px",
    delay: "0.15s",
    hideOnSm: true,
  },
  {
    size: 80,
    src: AVATAR_SRCS[3],
    pos: { top: "57%", left: "20%" },
    fx: "55px",
    fy: "-45px",
    delay: "0.2s",
  },
  {
    size: 78,
    src: AVATAR_SRCS[4],
    pos: { top: "55%", right: "15%" },
    fx: "-55px",
    fy: "-45px",
    delay: "0.25s",
  },
  {
    size: 68,
    src: AVATAR_SRCS[5],
    pos: { top: "37%", right: "2%" },
    fx: "-80px",
    fy: "0px",
    delay: "0.3s",
    hideOnSm: true,
  },
  {
    size: 66,
    src: AVATAR_SRCS[6],
    pos: { bottom: "-12%", left: "4%" },
    fx: "40px",
    fy: "-60px",
    delay: "0.35s",
  },
  {
    size: 66,
    src: AVATAR_SRCS[7],
    pos: { bottom: "-12%", right: "4%" },
    fx: "-40px",
    fy: "-60px",
    delay: "0.4s",
  },
];

export function Card5Media() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes avatar-spread {
          from {
            opacity: 0;
            transform: translate(var(--fx), var(--fy)) scale(0.85);
          }
          to {
            opacity: 1;
            transform: translate(0px, 0px) scale(1);
          }
        }
        .in-view .avatar {
          animation: avatar-spread 0.55s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both;
        }
        @media (max-width: 640px) {
          .avatar.hide-sm { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .in-view .avatar {
            animation: avatar-fade 0.3s ease var(--delay) both;
          }
          @keyframes avatar-fade {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
        }
      `}</style>

      {AVATARS.map(({ size, src, pos, fx, fy, delay, hideOnSm }) => (
        <div
          key={delay}
          className={`avatar absolute rounded-full${hideOnSm ? " hide-sm" : ""}`}
          style={{
            ...(pos as React.CSSProperties),
            width: size,
            height: size,
            padding: 3,
            background: BORDER_GRADIENT,
            opacity: 0,
            ["--fx" as string]: fx,
            ["--fy" as string]: fy,
            ["--delay" as string]: delay,
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full rounded-full object-cover block"
          />
        </div>
      ))}

      {/* Background texture overlay — above avatars */}
      <img
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={cdn(images.benefitBento.card5Bg)}
        alt=""
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, transparent 0%, rgba(10, 10, 20, 0.55) 70%, rgba(10, 10, 20, 0.92) 100%)",
        }}
      />
    </div>
  );
}
