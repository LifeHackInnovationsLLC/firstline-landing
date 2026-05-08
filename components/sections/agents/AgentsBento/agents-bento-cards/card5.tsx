"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "motion/react";
import { useId, useRef } from "react";

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
];

const BEAM_DURATION = 5;
const BEAM_COLOR = "#A78BFA";

function BeamGradient({
  id,
  color = BEAM_COLOR,
}: {
  id: string;
  color?: string;
}) {
  return (
    <linearGradient
      id={id}
      gradientUnits="objectBoundingBox"
      x1="0"
      y1="0"
      x2="1"
      y2="0"
    >
      <stop offset="0%" stopColor={color} stopOpacity="0" />
      <stop offset="55%" stopColor={color} stopOpacity="0.45" />
      <stop offset="92%" stopColor={color} stopOpacity="1" />
      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
    </linearGradient>
  );
}

function BeamCircle({
  cx,
  cy,
  r,
  gradientId,
  delay = 0,
}: {
  cx: number;
  cy: number;
  r: number;
  gradientId: string;
  delay?: number;
}) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.75"
      strokeLinecap="round"
      pathLength={100}
      strokeDasharray="22 78"
      initial={{ strokeDashoffset: 100 }}
      animate={{ strokeDashoffset: [100, 0] }}
      transition={{
        delay,
        duration: BEAM_DURATION,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        filter: "drop-shadow(0 0 6px rgba(167, 139, 250, 0.85))",
      }}
    />
  );
}

const ORBITS = [
  {
    radius: 116.5,
    duration: 22,
    startAngle: -90,
    reverse: false,
    avatar: AVATAR_URLS[0],
  },
  {
    radius: 91.5,
    duration: 16,
    startAngle: 40,
    reverse: false,
    avatar: AVATAR_URLS[1],
  },
  {
    radius: 64.5,
    duration: 12,
    startAngle: 160,
    reverse: false,
    avatar: AVATAR_URLS[2],
  },
];

const CENTER = 117;
const AVATAR_SIZE = 26;

function OrbitingAvatar({
  radius,
  duration,
  startAngle,
  reverse,
  avatar,
}: {
  radius: number;
  duration: number;
  startAngle: number;
  reverse: boolean;
  avatar: string;
}) {
  const orbitRef = useRef<SVGGElement | null>(null);
  const counterRef = useRef<SVGGElement | null>(null);

  useGSAP(() => {
    const direction = reverse ? -1 : 1;

    gsap.set(orbitRef.current, {
      rotation: startAngle,
      svgOrigin: `${CENTER} ${CENTER}`,
    });
    gsap.to(orbitRef.current, {
      rotation: `+=${360 * direction}`,
      duration,
      ease: "none",
      repeat: -1,
      svgOrigin: `${CENTER} ${CENTER}`,
    });

    gsap.set(counterRef.current, {
      rotation: -startAngle,
      transformOrigin: "50% 50%",
    });
    gsap.to(counterRef.current, {
      rotation: `-=${360 * direction}`,
      duration,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  }, []);

  const clipId = `avatar-clip-${radius}`;

  return (
    <g ref={orbitRef}>
      <g transform={`translate(${CENTER + radius} ${CENTER})`}>
        <g ref={counterRef}>
          <circle
            r={AVATAR_SIZE / 2 + 2}
            fill="#0E0E12"
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
          <clipPath id={clipId}>
            <circle r={AVATAR_SIZE / 2} />
          </clipPath>
          <image
            href={avatar}
            x={-AVATAR_SIZE / 2}
            y={-AVATAR_SIZE / 2}
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            clipPath={`url(#${clipId})`}
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </g>
    </g>
  );
}

export function Card5Media() {
  const beamOuterId = useId();
  const beamMiddleId = useId();
  const beamInnerId = useId();

  return (
    <svg
      width="234"
      height="234"
      viewBox="0 0 234 234"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <circle cx="117" cy="117" r="116.5" stroke="white" strokeOpacity="0.03" />
      <circle cx="117" cy="117" r="91.5" stroke="white" strokeOpacity="0.03" />
      <circle cx="117" cy="117" r="64.5" stroke="white" strokeOpacity="0.03" />
      <BeamCircle
        cx={117}
        cy={117}
        r={116.5}
        gradientId={beamOuterId}
        delay={0}
      />
      <BeamCircle
        cx={117}
        cy={117}
        r={91.5}
        gradientId={beamMiddleId}
        delay={0.6}
      />
      <BeamCircle
        cx={117}
        cy={117}
        r={64.5}
        gradientId={beamInnerId}
        delay={1.2}
      />
      {ORBITS.map((orbit) => (
        <OrbitingAvatar
          key={orbit.radius}
          radius={orbit.radius}
          duration={orbit.duration}
          startAngle={orbit.startAngle}
          reverse={orbit.reverse}
          avatar={orbit.avatar}
        />
      ))}
      <rect
        x="83"
        y="83"
        width="69"
        height="69"
        rx="34.5"
        fill="url(#paint0_linear_79_123)"
      />
      <rect
        x="83.5"
        y="83.5"
        width="68"
        height="68"
        rx="34"
        stroke="#14B6FF"
        strokeOpacity="0.09"
      />
      <path
        d="M115.333 109.333L116.335 108.344C119.461 105.218 124.53 105.219 127.656 108.344C130.781 111.47 130.781 116.539 127.656 119.665L126.667 120.667M109.333 115.333L108.344 116.335C105.218 119.461 105.219 124.53 108.345 127.656C111.47 130.781 116.539 130.781 119.665 127.656L120.667 126.667M115.333 120.667L120.667 115.333"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <BeamGradient id={beamOuterId} />
        <BeamGradient id={beamMiddleId} />
        <BeamGradient id={beamInnerId} />
        <linearGradient
          id="paint0_linear_79_123"
          x1="87.2119"
          y1="83"
          x2="147.788"
          y2="152"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4BAFF" />
          <stop offset="1" stopColor="#654AF7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
