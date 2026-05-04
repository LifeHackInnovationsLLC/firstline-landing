"use client";

import { useEffect, useRef } from "react";
import { cdn, images } from "@/lib/cdn";

const BORDER_GRADIENT =
  "linear-gradient(134.72deg, #4A4A80 0.28%, rgba(99, 99, 177, 0) 128.61%), linear-gradient(162.92deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)";

const PLACEHOLDER_SRC =
  "https://i.pinimg.com/1200x/e8/09/8a/e8098a3d487b4fd7b8d591d7d9db32bb.jpg";

const AVATARS = [
  {
    size: 78,
    src: PLACEHOLDER_SRC,
    pos: { top: "10%", left: "18%" },
    fx: "60px",
    fy: "45px",
    delay: "0.05s",
  },
  {
    size: 66,
    src: PLACEHOLDER_SRC,
    pos: { top: "8%", right: "14%" },
    fx: "-60px",
    fy: "45px",
    delay: "0.1s",
  },
  {
    size: 78,
    src: PLACEHOLDER_SRC,
    pos: { top: "42%", left: "2%" },
    fx: "80px",
    fy: "0px",
    delay: "0.15s",
    hideOnSm: true,
  },
  {
    size: 80,
    src: PLACEHOLDER_SRC,
    pos: { top: "57%", left: "20%" },
    fx: "55px",
    fy: "-45px",
    delay: "0.2s",
  },
  {
    size: 78,
    src: PLACEHOLDER_SRC,
    pos: { top: "55%", right: "15%" },
    fx: "-55px",
    fy: "-45px",
    delay: "0.25s",
  },
  {
    size: 68,
    src: PLACEHOLDER_SRC,
    pos: { top: "37%", right: "2%" },
    fx: "-80px",
    fy: "0px",
    delay: "0.3s",
    hideOnSm: true,
  },
  {
    size: 66,
    src: PLACEHOLDER_SRC,
    pos: { bottom: "-12%", left: "4%" },
    fx: "40px",
    fy: "-60px",
    delay: "0.35s",
  },
  {
    size: 66,
    src: PLACEHOLDER_SRC,
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
