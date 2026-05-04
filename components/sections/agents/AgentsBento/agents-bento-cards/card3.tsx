"use client";

import { motion } from "motion/react";

const BEAM_DURATION = 4;
const BEAM_COLOR = "#A78BFA";
const BEAM_GRADIENT_ID = "card3-beam-gradient";

const BEAM_PATH_TOP =
  "M61.5 -91V90C61.5 96.6274 66.8726 102 73.5 102H242.5C249.127 102 254.5 96.6274 254.5 90V-91";
const BEAM_PATH_BOTTOM =
  "M0.5 334V153C0.5 146.373 5.87258 141 12.5 141H303.5C310.127 141 315.5 146.373 315.5 153V334";

function BeamPath({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={`url(#${BEAM_GRADIENT_ID})`}
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
        filter: "drop-shadow(0 0 6px rgba(167, 139, 250, 0.65))",
      }}
    />
  );
}

function BeamGradient() {
  return (
    <linearGradient
      id={BEAM_GRADIENT_ID}
      gradientUnits="objectBoundingBox"
      x1="0"
      y1="0"
      x2="1"
      y2="0"
    >
      <stop offset="0%" stopColor={BEAM_COLOR} stopOpacity="0" />
      <stop offset="55%" stopColor={BEAM_COLOR} stopOpacity="0.45" />
      <stop offset="92%" stopColor={BEAM_COLOR} stopOpacity="1" />
      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
    </linearGradient>
  );
}

export function Card3Media() {
  return (
    <svg
      width="316"
      height="334"
      viewBox="0 0 316 334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mask-[linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]"
    >
      <path d={BEAM_PATH_TOP} stroke="url(#paint0_linear_71_643)" />
      <path d={BEAM_PATH_BOTTOM} stroke="url(#paint1_linear_71_643)" />
      <BeamPath d={BEAM_PATH_TOP} delay={0} />
      <BeamPath d={BEAM_PATH_BOTTOM} delay={BEAM_DURATION / 2} />
      <g opacity="0.5">
        <rect
          x="110.084"
          y="72.5844"
          width="95.8313"
          height="95.8313"
          rx="47.9156"
          fill="url(#paint2_linear_71_643)"
        />
        <rect
          x="110.084"
          y="72.5844"
          width="95.8313"
          height="95.8313"
          rx="47.9156"
          stroke="url(#paint3_linear_71_643)"
          strokeWidth="1.16873"
        />
        <rect
          x="110.084"
          y="72.5844"
          width="95.8313"
          height="95.8313"
          rx="47.9156"
          stroke="url(#paint4_linear_71_643)"
          strokeWidth="1.16873"
        />
      </g>
      <rect
        x="118.084"
        y="80.5844"
        width="79.8313"
        height="79.8313"
        rx="39.9156"
        fill="url(#paint5_linear_71_643)"
      />
      <rect
        x="118.084"
        y="80.5844"
        width="79.8313"
        height="79.8313"
        rx="39.9156"
        stroke="url(#paint6_linear_71_643)"
        strokeWidth="1.16873"
      />
      <rect
        x="118.084"
        y="80.5844"
        width="79.8313"
        height="79.8313"
        rx="39.9156"
        stroke="url(#paint7_linear_71_643)"
        strokeWidth="1.16873"
      />
      <rect
        x="123.5"
        y="86"
        width="69"
        height="69"
        rx="34.5"
        fill="url(#paint8_linear_71_643)"
      />
      <rect
        x="124"
        y="86.5"
        width="68"
        height="68"
        rx="34"
        stroke="#14B6FF"
        strokeOpacity="0.09"
      />
      <path
        d="M146.804 113.778C146.804 110.587 149.374 108 152.544 108C155.713 108 158.283 110.587 158.283 113.778C158.283 116.969 155.713 119.556 152.544 119.556C149.374 119.556 146.804 116.969 146.804 113.778Z"
        fill="white"
      />
      <path
        d="M159.718 113.778C159.718 110.587 162.287 108 165.457 108C168.627 108 171.196 110.587 171.196 113.778C171.196 116.969 168.627 119.556 165.457 119.556C162.287 119.556 159.718 116.969 159.718 113.778Z"
        fill="white"
      />
      <path
        d="M152.544 121C157.523 121 162.071 125.127 162.584 132.454C162.612 132.854 162.474 133.247 162.202 133.54C161.931 133.834 161.551 134 161.153 134H143.935C143.537 134 143.157 133.834 142.885 133.54C142.614 133.247 142.476 132.854 142.504 132.454C143.017 125.127 147.564 121 152.544 121Z"
        fill="white"
      />
      <path
        d="M174.065 134H165.21C165.405 133.445 165.488 132.85 165.446 132.251C165.149 128.01 163.63 124.481 161.337 122.01C162.617 121.344 164.018 121 165.456 121C170.436 121 174.983 125.127 175.496 132.454C175.555 133.29 174.897 134 174.065 134Z"
        fill="white"
      />
      <defs>
        <BeamGradient />
        <linearGradient
          id="paint0_linear_71_643"
          x1="158"
          y1="102"
          x2="158"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_71_643"
          x1="158"
          y1="141"
          x2="158"
          y2="227"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_71_643"
          x1="109.5"
          y1="72"
          x2="145.105"
          y2="187.866"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.12" />
          <stop offset="1" stopColor="white" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_71_643"
          x1="109.5"
          y1="72"
          x2="145.105"
          y2="187.866"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.16" />
          <stop offset="1" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_71_643"
          x1="163.753"
          y1="129.698"
          x2="190.761"
          y2="154.826"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_71_643"
          x1="117.5"
          y1="80"
          x2="147.232"
          y2="176.754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.12" />
          <stop offset="1" stopColor="white" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_71_643"
          x1="117.5"
          y1="80"
          x2="147.232"
          y2="176.754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.16" />
          <stop offset="1" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_71_643"
          x1="162.804"
          y1="128.18"
          x2="185.357"
          y2="149.164"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_71_643"
          x1="127.712"
          y1="86"
          x2="188.288"
          y2="155"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4BAFF" />
          <stop offset="1" stopColor="#654AF7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
