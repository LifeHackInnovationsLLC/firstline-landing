export function GreenBullet() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_160_1536)">
        <rect width="12" height="12" rx="6" fill="#131418" />
        <g filter="url(#filter0_f_160_1536)">
          <ellipse
            cx="5.875"
            cy="28"
            rx="15.375"
            ry="26"
            transform="rotate(-180 5.875 28)"
            fill="#368F8A"
          />
        </g>
        <g
          filter="url(#filter1_f_160_1536)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <circle cx="6" cy="14.75" r="4.5" fill="white" fillOpacity="0.24" />
        </g>
      </g>
      <rect
        x="0.25"
        y="0.25"
        width="11.5"
        height="11.5"
        rx="5.75"
        stroke="url(#paint0_linear_160_1536)"
        strokeWidth="0.5"
      />
      <defs>
        <filter
          id="filter0_f_160_1536"
          x="-43.075"
          y="-31.575"
          width="97.9"
          height="119.15"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="16.7875"
            result="effect1_foregroundBlur_160_1536"
          />
        </filter>
        <filter
          id="filter1_f_160_1536"
          x="-4.6"
          y="4.15"
          width="21.2"
          height="21.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3.05"
            result="effect1_foregroundBlur_160_1536"
          />
        </filter>
        <linearGradient
          id="paint0_linear_160_1536"
          x1="6"
          y1="0"
          x2="6"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id="clip0_160_1536">
          <rect width="12" height="12" rx="6" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
