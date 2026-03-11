import { useId } from "react";

export function CommissionSplittingIcon() {
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
      <title>Commission Splitting</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse cx="23.5" cy="112" rx="61.5" ry="104" transform="rotate(-180 23.5 112)" fill="#6363B1" />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path d="M28 15H33V20M20 15H15V20" stroke="#9C8AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 34V25.7C24.0057 25.1674 23.905 24.639 23.7037 24.1458C23.5025 23.6526 23.2047 23.2046 22.828 22.828L15 15M27 21L33 15" stroke="#9C8AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke={`url(#${id}-paint)`} />
      <defs>
        <filter id={`${id}-filter0`} x="-172.3" y="-126.3" width="391.6" height="476.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter id={`${id}-filter1`} x="-18.4" y="16.6" width="84.8" height="84.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient id={`${id}-paint`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
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

export function GlobalTeamsIcon() {
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
      <title>Global Teams</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse cx="23.5" cy="112" rx="61.5" ry="104" transform="rotate(-180 23.5 112)" fill="#368F8A" />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path d="M31.927 28.771C31.2915 28.135 30.5489 27.6159 29.7333 27.2374C30.8835 26.3056 31.6173 24.8837 31.6173 23.2892C31.6173 20.4759 29.2712 18.1679 26.4579 18.211C23.6878 18.2542 21.4559 20.5114 21.4559 23.2892C21.4559 24.8837 22.1923 26.3056 23.3399 27.2374C22.5241 27.6156 21.7815 28.1347 21.1462 28.771C19.7598 30.1599 18.9727 31.9931 18.9219 33.9482C18.9213 33.9753 18.926 34.0022 18.9359 34.0274C18.9458 34.0527 18.9607 34.0757 18.9796 34.0951C18.9985 34.1145 19.0212 34.1299 19.0461 34.1404C19.0711 34.1509 19.098 34.1564 19.1251 34.1564H20.5469C20.6561 34.1564 20.7475 34.07 20.7501 33.9608C20.7983 32.4882 21.395 31.1095 22.4436 30.0634C22.9802 29.5239 23.6185 29.0963 24.3215 28.8051C25.0245 28.514 25.7782 28.3652 26.5391 28.3673C28.0854 28.3673 29.5403 28.9691 30.6346 30.0634C31.6807 31.1095 32.2774 32.4882 32.3282 33.9608C32.3307 34.07 32.4221 34.1564 32.5313 34.1564H33.9532C33.9803 34.1564 34.0071 34.1509 34.0321 34.1404C34.0571 34.1299 34.0797 34.1145 34.0986 34.0951C34.1176 34.0757 34.1324 34.0527 34.1423 34.0274C34.1522 34.0022 34.157 33.9753 34.1563 33.9482C34.1055 31.9931 33.3184 30.1599 31.927 28.771ZM26.5391 26.5392C25.6708 26.5392 24.8532 26.2015 24.2413 25.587C23.9342 25.2823 23.6916 24.9189 23.528 24.5185C23.3644 24.118 23.2832 23.6887 23.2891 23.2562C23.2967 22.4234 23.6294 21.6185 24.2108 21.0218C24.8202 20.3972 25.6352 20.0493 26.5061 20.0392C27.3669 20.0316 28.2022 20.3667 28.8167 20.9685C29.4464 21.5855 29.7917 22.4107 29.7917 23.2892C29.7917 24.1575 29.454 24.9726 28.8395 25.587C28.5381 25.8899 28.1795 26.13 27.7847 26.2935C27.3898 26.4569 26.9665 26.5404 26.5391 26.5392ZM20.1788 23.9595C20.1559 23.7386 20.1432 23.5151 20.1432 23.2892C20.1432 22.8855 20.1813 22.4919 20.2524 22.1085C20.2702 22.0171 20.2219 21.9232 20.1381 21.8851C19.7928 21.7302 19.4755 21.5169 19.2012 21.2478C18.8781 20.9345 18.6238 20.5572 18.4547 20.1402C18.2855 19.7231 18.2051 19.2754 18.2186 18.8255C18.2415 18.0105 18.569 17.236 19.1403 16.6521C19.7674 16.0097 20.6104 15.6593 21.5067 15.6694C22.3167 15.6771 23.0987 15.9894 23.6903 16.5429C23.8909 16.7308 24.0635 16.939 24.2083 17.1624C24.259 17.2411 24.3581 17.2741 24.4444 17.2437C24.8913 17.0888 25.3635 16.9796 25.8485 16.9288C25.9907 16.9136 26.0719 16.7612 26.0085 16.6343C25.1833 15.0017 23.4973 13.8743 21.5473 13.8439C18.7315 13.8007 16.3854 16.1087 16.3854 18.9194C16.3854 20.514 17.1192 21.9358 18.2694 22.8677C17.462 23.2409 16.718 23.7564 16.0731 24.4013C14.6817 25.7901 13.8946 27.6233 13.8438 29.581C13.8431 29.6081 13.8479 29.635 13.8578 29.6603C13.8677 29.6855 13.8826 29.7085 13.9015 29.7279C13.9204 29.7473 13.943 29.7627 13.968 29.7732C13.993 29.7838 14.0198 29.7892 14.0469 29.7892H15.4714C15.5805 29.7892 15.6719 29.7028 15.6745 29.5937C15.7227 28.121 16.3194 26.7423 17.368 25.6962C18.1145 24.9497 19.0286 24.4317 20.0264 24.1804C20.1255 24.155 20.1915 24.061 20.1788 23.9595Z" fill="#51C9C2" />
      </g>
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke={`url(#${id}-paint)`} />
      <defs>
        <filter id={`${id}-filter0`} x="-172.3" y="-126.3" width="391.6" height="476.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter id={`${id}-filter1`} x="-18.4" y="16.6" width="84.8" height="84.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient id={`${id}-paint`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
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

export function FinanceToolsIcon() {
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
      <title>Finance Tools</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse cx="23.5" cy="112" rx="61.5" ry="104" transform="rotate(-180 23.5 112)" fill="#6363B1" />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path d="M25.4466 16.325C25.0823 14.9851 23.8586 14 22.4051 14C20.6643 14 19.2532 15.413 19.2532 17.1559C19.2532 18.8989 20.6643 20.3119 22.4051 20.3119C22.8151 20.3119 23.2068 20.2335 23.5661 20.0908M25.4466 16.325C25.8059 16.1823 26.1976 16.104 26.6076 16.104C28.3484 16.104 29.7595 17.5169 29.7595 19.2599C29.7595 21.0028 28.3484 22.4158 26.6076 22.4158C25.1541 22.4158 23.9304 21.4307 23.5661 20.0908M25.4466 16.325C23.9723 16.9101 23.1526 18.5698 23.5661 20.0908M18.2025 32.9356H20.3038C20.3038 32.9356 22.8166 33.907 24.5063 33.9875C28.2322 34.1652 31.1919 32.4296 33.5891 29.7899C34.1366 29.1871 34.1273 28.277 33.619 27.6408C32.9637 26.8206 31.7319 26.7542 30.9102 27.4072C30.0049 28.1266 28.8032 28.9358 27.6583 29.2536C26.0767 29.6926 24.5063 29.7796 24.5063 29.7796C32.9114 29.2536 29.7595 22.4156 18.2025 27.1497M14 25.5717H18.2025V33.9875H14V25.5717Z" stroke="#9C8AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke={`url(#${id}-paint)`} />
      <defs>
        <filter id={`${id}-filter0`} x="-172.3" y="-126.3" width="391.6" height="476.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter id={`${id}-filter1`} x="-18.4" y="16.6" width="84.8" height="84.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient id={`${id}-paint`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
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

export function BonusAndRewardsIcon() {
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
      <title>Bonus and Rewards</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse cx="23.5" cy="112" rx="61.5" ry="104" transform="rotate(-180 23.5 112)" fill="#368F8A" />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path d="M24 19.0002C22.3712 19.0002 21.2368 19.7389 21.2368 21.3343C21.2368 23.162 22.644 23.5541 24 24.0137C25.356 24.4734 26.7632 24.8655 26.7632 26.6932C26.7632 28.2886 25.6288 29.0273 24 29.0273M24 19.0002C25.1788 19.0002 26.0377 19.5573 26.4775 20.3467M24 19.0002V17.3322M24 29.0273C22.8212 29.0273 21.9623 28.4702 21.5225 27.6808M24 29.0273V30.6667M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z" stroke="#51C9C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke={`url(#${id}-paint)`} />
      <defs>
        <filter id={`${id}-filter0`} x="-172.3" y="-126.3" width="391.6" height="476.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter id={`${id}-filter1`} x="-18.4" y="16.6" width="84.8" height="84.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient id={`${id}-paint`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
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

export function TeamAnalyticsIcon() {
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
      <title>Team Analytics</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse cx="23.5" cy="112" rx="61.5" ry="104" transform="rotate(-180 23.5 112)" fill="#6363B1" />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path d="M15.75 14.375H14.375V32.25C14.375 32.6147 14.5199 32.9644 14.7777 33.2223C15.0356 33.4801 15.3853 33.625 15.75 33.625H33.625V32.25H15.75V14.375Z" fill="#9C8AFF" />
        <path d="M33.625 19.1875H28.8125V20.5625H31.2806L26.0625 25.7806L23.1131 22.8244C23.0492 22.7599 22.9732 22.7088 22.8894 22.6739C22.8056 22.639 22.7158 22.621 22.625 22.621C22.5342 22.621 22.4444 22.639 22.3606 22.6739C22.2768 22.7088 22.2008 22.7599 22.1369 22.8244L17.125 27.8431L18.0944 28.8125L22.625 24.2819L25.5744 27.2381C25.6383 27.3026 25.7143 27.3537 25.7981 27.3886C25.8819 27.4235 25.9717 27.4415 26.0625 27.4415C26.1533 27.4415 26.2431 27.4235 26.3269 27.3886C26.4107 27.3537 26.4867 27.3026 26.5506 27.2381L32.25 21.5319V24H33.625V19.1875Z" fill="#9C8AFF" />
      </g>
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke={`url(#${id}-paint)`} />
      <defs>
        <filter id={`${id}-filter0`} x="-172.3" y="-126.3" width="391.6" height="476.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter id={`${id}-filter1`} x="-18.4" y="16.6" width="84.8" height="84.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient id={`${id}-paint`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
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

export function TeamMessagingIcon() {
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
      <title>Team Messaging</title>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="48" height="48" rx="24" fill="#131418" />
        <g filter={`url(#${id}-filter0)`}>
          <ellipse cx="23.5" cy="112" rx="61.5" ry="104" transform="rotate(-180 23.5 112)" fill="#368F8A" />
        </g>
        <g filter={`url(#${id}-filter1)`} style={{ mixBlendMode: "plus-lighter" }}>
          <circle cx="24" cy="59" r="18" fill="white" fillOpacity="0.24" />
        </g>
        <path d="M20 21H29M20 25H29M20 29H25M35 24C35 29.523 30.523 34 25 34H15V24C15 18.477 19.477 14 25 14C30.523 14 35 18.477 35 24Z" stroke="#51C9C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke={`url(#${id}-paint)`} />
      <defs>
        <filter id={`${id}-filter0`} x="-172.3" y="-126.3" width="391.6" height="476.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="67.15" result="effect1_foregroundBlur" />
        </filter>
        <filter id={`${id}-filter1`} x="-18.4" y="16.6" width="84.8" height="84.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="12.2" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient id={`${id}-paint`} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
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
