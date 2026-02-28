import { useId } from "react";

export function FunnelBuilderIcon() {
  const id = useId();
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Funnel Builder</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse
            cx="23.5"
            cy="112"
            rx="61.5"
            ry="104"
            transform="rotate(-180 23.5 112)"
            fill="#6363B1"
          />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle
            cx="24"
            cy="59"
            r="18"
            fill="white"
            fillOpacity="0.24"
          />
        </g>
        <path
          d="M34 13H14V17.9412L21.5 25.3529V34L26.5 32.7647V25.3529L34 17.9412V13Z"
          stroke="#9C8AFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="23.5"
        stroke={`url(#${id}-paint)`}
      />
      <defs>
        <filter
          id={`${id}-filter0`}
          x="-172.3"
          y="-126.3"
          width="391.6"
          height="476.6"
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
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id={`${id}-filter1`}
          x="-18.4"
          y="16.6"
          width="84.8"
          height="84.8"
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
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient
          id={`${id}-paint`}
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect width="48" height="48" rx="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AnalyticsDashboardIcon() {
  const id = useId();
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Analytics Dashboard</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse
            cx="23.5"
            cy="112"
            rx="61.5"
            ry="104"
            transform="rotate(-180 23.5 112)"
            fill="#368F8A"
          />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path
          d="M34 24H21.5M21.5 24V14M21.5 24V34M34 18V30C34 31.4001 34 32.1002 33.7275 32.635C33.4878 33.1054 33.1054 33.4878 32.635 33.7275C32.1002 34 31.4001 34 30 34H18C16.5999 34 15.8998 34 15.365 33.7275C14.8946 33.4878 14.5122 33.1054 14.2725 32.635C14 32.1002 14 31.4001 14 30V18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14H30C31.4001 14 32.1002 14 32.635 14.2725C33.1054 14.5122 33.4878 14.8946 33.7275 15.365C34 15.8998 34 16.5999 34 18Z"
          stroke="#51C9C2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="23.5"
        stroke={`url(#${id}-paint)`}
      />
      <defs>
        <filter
          id={`${id}-filter0`}
          x="-172.3"
          y="-126.3"
          width="391.6"
          height="476.6"
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
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id={`${id}-filter1`}
          x="-18.4"
          y="16.6"
          width="84.8"
          height="84.8"
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
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient
          id={`${id}-paint`}
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect width="48" height="48" rx="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AccessToLendingIcon() {
  const id = useId();
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Access to Lending</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse
            cx="23.5"
            cy="112"
            rx="61.5"
            ry="104"
            transform="rotate(-180 23.5 112)"
            fill="#6363B1"
          />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path
          d="M25.4466 16.325C25.0823 14.9851 23.8586 14 22.4051 14C20.6643 14 19.2532 15.413 19.2532 17.1559C19.2532 18.8989 20.6643 20.3119 22.4051 20.3119C22.8151 20.3119 23.2068 20.2335 23.5661 20.0908M25.4466 16.325C25.8059 16.1823 26.1976 16.104 26.6076 16.104C28.3484 16.104 29.7595 17.5169 29.7595 19.2599C29.7595 21.0028 28.3484 22.4158 26.6076 22.4158C25.1541 22.4158 23.9304 21.4307 23.5661 20.0908M25.4466 16.325C23.9723 16.9101 23.1526 18.5698 23.5661 20.0908M18.2025 32.9356H20.3038C20.3038 32.9356 22.8166 33.907 24.5063 33.9875C28.2322 34.1652 31.1919 32.4296 33.5891 29.7899C34.1366 29.1871 34.1273 28.277 33.619 27.6408C32.9637 26.8206 31.7319 26.7542 30.9102 27.4072C30.0049 28.1266 28.8032 28.9358 27.6583 29.2536C26.0767 29.6926 24.5063 29.7796 24.5063 29.7796C32.9114 29.2536 29.7595 22.4156 18.2025 27.1497M14 25.5717H18.2025V33.9875H14V25.5717Z"
          stroke="#9C8AFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="23.5"
        stroke={`url(#${id}-paint)`}
      />
      <defs>
        <filter
          id={`${id}-filter0`}
          x="-172.3"
          y="-126.3"
          width="391.6"
          height="476.6"
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
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id={`${id}-filter1`}
          x="-18.4"
          y="16.6"
          width="84.8"
          height="84.8"
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
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient
          id={`${id}-paint`}
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect width="48" height="48" rx="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function PaymentProcessingIcon() {
  const id = useId();
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Payment Processing</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse
            cx="23.5"
            cy="112"
            rx="61.5"
            ry="104"
            transform="rotate(-180 23.5 112)"
            fill="#368F8A"
          />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path
          d="M24 19.0002C22.3712 19.0002 21.2368 19.7389 21.2368 21.3343C21.2368 23.162 22.644 23.5541 24 24.0137C25.356 24.4734 26.7632 24.8655 26.7632 26.6932C26.7632 28.2886 25.6288 29.0273 24 29.0273M24 19.0002C25.1788 19.0002 26.0377 19.5573 26.4775 20.3467M24 19.0002V17.3322M24 29.0273C22.8212 29.0273 21.9623 28.4702 21.5225 27.6808M24 29.0273V30.6667M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
          stroke="#51C9C2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="23.5"
        stroke={`url(#${id}-paint)`}
      />
      <defs>
        <filter
          id={`${id}-filter0`}
          x="-172.3"
          y="-126.3"
          width="391.6"
          height="476.6"
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
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id={`${id}-filter1`}
          x="-18.4"
          y="16.6"
          width="84.8"
          height="84.8"
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
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient
          id={`${id}-paint`}
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect width="48" height="48" rx="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function NeoBankingIcon() {
  const id = useId();
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>NEO Banking</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse
            cx="23.5"
            cy="112"
            rx="61.5"
            ry="104"
            transform="rotate(-180 23.5 112)"
            fill="#6363B1"
          />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path
          d="M31.7778 21.0571V29.7429M27.3333 29.7429V21.0571M16.2222 21.0571V29.7429M20.6667 29.7429V21.0571M14 18.8857L24 14L34 18.8857V21.0571H14V18.8857ZM14 33H34L32.8889 29.7429H15.1111L14 33Z"
          stroke="#9C8AFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="23.5"
        stroke={`url(#${id}-paint)`}
      />
      <defs>
        <filter
          id={`${id}-filter0`}
          x="-172.3"
          y="-126.3"
          width="391.6"
          height="476.6"
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
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id={`${id}-filter1`}
          x="-18.4"
          y="16.6"
          width="84.8"
          height="84.8"
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
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient
          id={`${id}-paint`}
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect width="48" height="48" rx="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CommissionTrackingIcon() {
  const id = useId();
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Commission Tracking</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse
            cx="23.5"
            cy="112"
            rx="61.5"
            ry="104"
            transform="rotate(-180 23.5 112)"
            fill="#368F8A"
          />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path
          d="M18.2857 34H29.7143M24 29.5556C28.4183 29.5556 32 26.0733 32 21.7778C32 17.4822 28.4183 14 24 14C19.5817 14 16 17.4822 16 21.7778C16 26.0733 19.5817 29.5556 24 29.5556ZM24 29.5556V34M27.4286 21.7778C27.4286 23.6187 25.8935 25.1111 24 25.1111C22.1065 25.1111 20.5714 23.6187 20.5714 21.7778C20.5714 19.9368 22.1065 18.4444 24 18.4444C25.8935 18.4444 27.4286 19.9368 27.4286 21.7778Z"
          stroke="#51C9C2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="23.5"
        stroke={`url(#${id}-paint)`}
      />
      <defs>
        <filter
          id={`${id}-filter0`}
          x="-172.3"
          y="-126.3"
          width="391.6"
          height="476.6"
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
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id={`${id}-filter1`}
          x="-18.4"
          y="16.6"
          width="84.8"
          height="84.8"
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
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient
          id={`${id}-paint`}
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect width="48" height="48" rx="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
