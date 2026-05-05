"use client";

import { motion } from "motion/react";

const CYCLE = 2.4;
const TRAVEL = 14;
const STAGGER = 0.18;

const dropTransition = (delay: number) => ({
  duration: CYCLE,
  delay,
  ease: "easeInOut" as const,
  repeat: Infinity,
  repeatDelay: 0.6,
  times: [0, 0.4, 0.7, 1],
});

export function Card3Media() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="330"
      height="136"
      fill="none"
      viewBox="0 0 330 136"
      overflow={"visible"}
    >
      <motion.g
        animate={{ y: [0, TRAVEL, TRAVEL, 0] }}
        transition={dropTransition(STAGGER * 3)}
        opacity=".73"
      >
        <path
          fill="#1E2628"
          d="M103.231 91.047H233.31c1.104 0 2.195.246 3.193.72l61.151 29c7.182 3.406 4.755 14.186-3.193 14.186H37.796c-8.054 0-10.383-11.003-3.02-14.266l65.436-29a7.451 7.451 0 0 1 3.019-.64Z"
        />
        <path
          stroke="url(#a)"
          strokeWidth="1.095"
          d="M103.231 91.047H233.31c1.104 0 2.195.246 3.193.72l61.151 29c7.182 3.406 4.755 14.186-3.193 14.186H37.796c-8.054 0-10.383-11.003-3.02-14.266l65.436-29a7.451 7.451 0 0 1 3.019-.64Z"
        />
        <path
          stroke="url(#b)"
          strokeWidth="1.095"
          d="M103.231 91.047H233.31c1.104 0 2.195.246 3.193.72l61.151 29c7.182 3.406 4.755 14.186-3.193 14.186H37.796c-8.054 0-10.383-11.003-3.02-14.266l65.436-29a7.451 7.451 0 0 1 3.019-.64Z"
        />
      </motion.g>
      <motion.g
        animate={{ y: [0, TRAVEL, TRAVEL, 0] }}
        transition={dropTransition(STAGGER * 2)}
        opacity=".87"
      >
        <path
          fill="#1E2628"
          d="M111.337 61.047h113.019c1.123 0 2.231.254 3.242.742l49.687 24c7.131 3.445 4.679 14.164-3.241 14.164H58.168c-8.026 0-10.381-10.944-3.066-14.246l53.169-24a7.457 7.457 0 0 1 3.066-.66Z"
        />
        <path
          stroke="url(#c)"
          strokeWidth="1.095"
          d="M111.337 61.047h113.019c1.123 0 2.231.254 3.242.742l49.687 24c7.131 3.445 4.679 14.164-3.241 14.164H58.168c-8.026 0-10.381-10.944-3.066-14.246l53.169-24a7.457 7.457 0 0 1 3.066-.66Z"
        />
        <path
          stroke="url(#d)"
          strokeWidth="1.095"
          d="M111.337 61.047h113.019c1.123 0 2.231.254 3.242.742l49.687 24c7.131 3.445 4.679 14.164-3.241 14.164H58.168c-8.026 0-10.381-10.944-3.066-14.246l53.169-24a7.457 7.457 0 0 1 3.066-.66Z"
        />
      </motion.g>
      <motion.g
        animate={{ y: [0, TRAVEL, TRAVEL, 0] }}
        transition={dropTransition(STAGGER)}
      >
        <path
          fill="#1E2628"
          d="M120.95 34.047h92.786c1.121 0 2.227.253 3.237.74l35.255 17c7.135 3.441 4.685 14.166-3.237 14.166H83.226c-8.029 0-10.382-10.95-3.063-14.248l37.725-17a7.45 7.45 0 0 1 3.062-.658Z"
        />
        <path
          stroke="url(#e)"
          strokeWidth="1.095"
          d="M120.95 34.047h92.786c1.121 0 2.227.253 3.237.74l35.255 17c7.135 3.441 4.685 14.166-3.237 14.166H83.226c-8.029 0-10.382-10.95-3.063-14.248l37.725-17a7.45 7.45 0 0 1 3.062-.658Z"
        />
        <path
          stroke="url(#f)"
          strokeWidth="1.095"
          d="M120.95 34.047h92.786c1.121 0 2.227.253 3.237.74l35.255 17c7.135 3.441 4.685 14.166-3.237 14.166H83.226c-8.029 0-10.382-10.95-3.063-14.248l37.725-17a7.45 7.45 0 0 1 3.062-.658Z"
        />
        <path stroke="url(#h)" d="M112 66h107" />
        <g filter="url(#i)" style={{ mixBlendMode: "plus-lighter" }}>
          <path stroke="url(#j)" d="M112 66h107" />
        </g>
      </motion.g>
      <motion.path
        animate={{ y: [0, TRAVEL, TRAVEL, 0] }}
        transition={dropTransition(0)}
        stroke="url(#g)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M165.5 2.5v41m0 0L181 27.986M165.5 43.5 150 27.986"
      />
      <defs>
        <linearGradient
          id="a"
          x1="0"
          x2="2.461"
          y1="90.5"
          y2="149.225"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity=".16" />
          <stop offset="1" stopColor="#fff" stopOpacity=".05" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="184.573"
          x2="188.178"
          y1="117.267"
          y2="141.862"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity=".25" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="21"
          x2="23.228"
          y1="60.5"
          y2="112.697"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity=".16" />
          <stop offset="1" stopColor="#fff" stopOpacity=".05" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="182.082"
          x2="185.343"
          y1="84.293"
          y2="106.138"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity=".25" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="46"
          x2="47.835"
          y1="33.5"
          y2="76.563"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity=".16" />
          <stop offset="1" stopColor="#fff" stopOpacity=".05" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="179.116"
          x2="181.802"
          y1="53.129"
          y2="71.153"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity=".25" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="165.5"
          x2="165.5"
          y1="2.5"
          y2="43.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBCFF" />
          <stop offset="1" stopColor="#6B6BFF" />
        </linearGradient>
        <linearGradient
          id="h"
          x1="112"
          x2="219"
          y1="66.5"
          y2="66.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6B6BFF" stopOpacity="0" />
          <stop offset=".5" stopColor="#6B6BFF" />
          <stop offset="1" stopColor="#6B6BFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="j"
          x1="112"
          x2="219"
          y1="66.5"
          y2="66.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6B6BFF" stopOpacity="0" />
          <stop offset=".5" stopColor="#6B6BFF" />
          <stop offset="1" stopColor="#6B6BFF" stopOpacity="0" />
        </linearGradient>
        <filter
          id="i"
          width="115"
          height="9"
          x="108"
          y="61.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_90_1437"
            stdDeviation="2"
          />
        </filter>
      </defs>
    </svg>
  );
}
