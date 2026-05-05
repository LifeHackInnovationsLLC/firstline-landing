"use client";

import { motion } from "motion/react";

const COIN_TRANSITION = {
  duration: 1.1,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function Card1Media() {
  return (
    <svg
      width="323"
      height="222"
      viewBox="0 0 323 222"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        stroke="white"
        strokeOpacity="0.14"
        strokeWidth="2"
        initial={{
          d: "M141 92L141 92",
          strokeDasharray: "500 0",
          strokeDashoffset: 0,
        }}
        animate={{
          d: "M49.1445 49.981L233.145 134.481",
          strokeDasharray: "6 6",
          strokeDashoffset: -12,
        }}
        transition={{
          d: { ...COIN_TRANSITION, delay: 0.2 },
          strokeDasharray: { duration: 0.9, delay: 1.4, ease: "easeOut" },
          strokeDashoffset: {
            duration: 1.2,
            delay: 2.3,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
      <motion.image
        href="/textures/coin1.png"
        x="13.357"
        y="14.194"
        width="71.575"
        height="71.575"
        initial={{ x: 92, y: 42, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ ...COIN_TRANSITION, delay: 0.2 }}
      />
      <motion.image
        href="/textures/coin2.png"
        x="167.635"
        y="68.971"
        width="131.019"
        height="131.019"
        initial={{ x: -92, y: -42, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ ...COIN_TRANSITION, delay: 0.2 }}
      />
      <defs>
        <clipPath
          id="bgblur_1_98_193_clip_path"
          transform="translate(22.3411 22.3421)"
        >
          <rect
            x="35.7881"
            width="71.5749"
            height="71.5749"
            rx="35.7874"
            transform="rotate(30 35.7881 0)"
          />
        </clipPath>
        <filter
          id="filter2_f_98_193"
          x="16.0642"
          y="-10.3885"
          width="65.5386"
          height="118.585"
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
            stdDeviation="10.4127"
            result="effect1_foregroundBlur_98_193"
          />
        </filter>
        <filter
          id="filter3_f_98_193"
          x="-0.123377"
          y="0.409582"
          width="98.4128"
          height="98.4125"
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
            stdDeviation="14.4528"
            result="effect1_foregroundBlur_98_193"
          />
        </filter>
        <clipPath
          id="bgblur_3_98_193_clip_path"
          transform="translate(-20.7298 -11.9796)"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.277 29.8111C53.3635 30.0302 55.2117 30.5558 56.8211 31.3881C58.7694 32.3778 60.2745 33.7044 61.3368 35.3676C62.3996 37.0188 62.9044 38.8874 62.8501 40.9729L56.3991 40.6933C56.2989 39.1079 55.6412 37.8484 54.4265 36.9147C53.5182 36.2098 52.3861 35.7459 51.0299 35.5242L50.5823 45.8171L52.2274 46.3057C53.6105 46.6915 54.9344 47.1893 56.1992 47.7993C57.4762 48.4099 58.6086 49.1592 59.5959 50.0468C60.5953 50.935 61.3706 51.9884 61.9211 53.207C62.4716 54.4257 62.7119 55.8362 62.6424 57.4382C62.5483 59.6065 61.9111 61.4917 60.7313 63.094C59.552 64.6841 57.8945 65.8983 55.7583 66.7349C54.0021 67.4172 51.9584 67.7718 49.628 67.802L49.4506 71.9101L46.4871 71.7812L46.665 67.6744C44.3998 67.4481 42.4069 66.93 40.6865 66.1172C38.6171 65.1343 37.0233 63.7612 35.9049 61.9989C34.7986 60.2371 34.2501 58.1254 34.2603 55.6638L40.8562 55.9503C40.8967 57.2434 41.2476 58.3328 41.9092 59.2183C42.5707 60.1038 43.4525 60.7817 44.5544 61.2519C45.281 61.5589 46.0681 61.7764 46.9152 61.909L47.3874 51.0247L45.3507 50.4059C42.337 49.4907 39.9788 48.1997 38.277 46.5328C36.588 44.8544 35.8011 42.6901 35.9161 40.0401C36.0107 37.8597 36.6838 35.9753 37.9354 34.3882C39.199 32.8019 40.8743 31.6014 42.9612 30.7868C44.5916 30.1412 46.3755 29.7825 48.3124 29.7097L48.4941 25.5239L51.458 25.652L51.277 29.8111ZM55.1952 54.6711C54.6688 54.0086 53.9143 53.4453 52.9328 52.9803C52.1675 52.604 51.2957 52.2536 50.3175 51.9282L49.8789 62.0256C50.7135 61.9603 51.4807 61.8071 52.1804 61.5648C53.308 61.1672 54.2026 60.5903 54.863 59.8344C55.5237 59.0666 55.8826 58.1523 55.9406 57.0929C55.9703 56.1289 55.7221 55.3214 55.1952 54.6711ZM48.0647 35.418C47.3138 35.4866 46.6314 35.6335 46.0181 35.8613C44.9999 36.2395 44.2099 36.7794 43.6485 37.4792C43.0872 38.1789 42.7803 38.9922 42.7281 39.9191C42.6946 40.69 42.8403 41.3661 43.165 41.9474C43.5018 42.5293 43.9689 43.0324 44.5659 43.4565C45.1635 43.8686 45.8301 44.2233 46.5654 44.5207C46.9257 44.6664 47.2883 44.8016 47.6523 44.9272L48.0647 35.418Z"
          />
        </clipPath>
        <filter
          id="filter5_f_98_193"
          x="22.2823"
          y="14.2681"
          width="53.6699"
          height="68.3578"
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
            stdDeviation="5.21287"
            result="effect1_foregroundBlur_98_193"
          />
        </filter>
        <clipPath
          id="bgblur_5_98_193_clip_path"
          transform="translate(-102.247 -2.08351)"
        >
          <rect
            x="208.654"
            y="42.981"
            width="131.019"
            height="131.019"
            rx="65.5094"
            transform="rotate(30 208.654 42.981)"
          />
        </clipPath>
        <filter
          id="filter7_f_98_193"
          x="172.55"
          y="23.9651"
          width="119.968"
          height="217.071"
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
            stdDeviation="19.0606"
            result="effect1_foregroundBlur_98_193"
          />
        </filter>
        <filter
          id="filter8_f_98_193"
          x="142.916"
          y="43.7305"
          width="180.146"
          height="180.146"
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
            stdDeviation="26.456"
            result="effect1_foregroundBlur_98_193"
          />
        </filter>
        <clipPath
          id="bgblur_7_98_193_clip_path"
          transform="translate(-181.088 -64.9082)"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M237.005 97.5511C240.824 97.9522 244.207 98.9142 247.153 100.438C250.72 102.25 253.476 104.678 255.421 107.722C257.366 110.745 258.289 114.166 258.189 117.983L246.381 117.471C246.198 114.569 244.994 112.263 242.771 110.554C241.108 109.264 239.035 108.416 236.552 108.01L235.734 126.851L238.744 127.744C241.276 128.45 243.7 129.362 246.016 130.479C248.353 131.596 250.425 132.968 252.232 134.592C254.062 136.218 255.481 138.147 256.489 140.378C257.497 142.608 257.937 145.19 257.81 148.123C257.638 152.092 256.472 155.544 254.312 158.477C252.153 161.387 249.118 163.608 245.208 165.14C241.994 166.388 238.254 167.038 233.989 167.093L233.663 174.614L228.237 174.378L228.563 166.86C224.416 166.446 220.768 165.497 217.619 164.009C213.831 162.21 210.913 159.697 208.866 156.471C206.841 153.246 205.838 149.381 205.856 144.875L217.929 145.398C218.003 147.765 218.646 149.759 219.857 151.38C221.068 153.002 222.682 154.243 224.699 155.104C226.029 155.666 227.47 156.067 229.021 156.309L229.885 136.384L226.157 135.25C220.64 133.575 216.325 131.212 213.209 128.161C210.117 125.088 208.676 121.126 208.887 116.275C209.06 112.284 210.293 108.835 212.584 105.93C214.897 103.026 217.963 100.828 221.784 99.337C224.768 98.1551 228.033 97.4992 231.578 97.3658L231.911 89.7017L237.335 89.9376L237.005 97.5511ZM244.177 143.057C243.214 141.845 241.833 140.813 240.037 139.962C238.636 139.273 237.039 138.632 235.249 138.036L234.448 156.519C235.975 156.4 237.379 156.12 238.659 155.676C240.723 154.948 242.359 153.893 243.568 152.509C244.778 151.104 245.437 149.431 245.543 147.491C245.597 145.726 245.142 144.248 244.177 143.057ZM231.125 107.813C229.75 107.939 228.502 108.209 227.379 108.626C225.515 109.319 224.069 110.305 223.041 111.586C222.014 112.867 221.452 114.356 221.356 116.053C221.295 117.465 221.562 118.702 222.157 119.767C222.773 120.832 223.628 121.752 224.721 122.529C225.815 123.283 227.035 123.933 228.381 124.478C229.041 124.744 229.704 124.991 230.37 125.221L231.125 107.813Z"
          />
        </clipPath>
        <filter
          id="filter10_f_98_193"
          x="183.93"
          y="69.0991"
          width="98.2432"
          height="125.13"
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
            stdDeviation="9.54224"
            result="effect1_foregroundBlur_98_193"
          />
        </filter>
        <linearGradient
          id="paint0_linear_98_193"
          x1="45.614"
          y1="20.8938"
          x2="54.9282"
          y2="73.2652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.12" />
          <stop offset="0.5" stopColor="white" stopOpacity="0.02" />
          <stop offset="1" stopColor="white" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_98_193"
          x1="45.9789"
          y1="20.2618"
          x2="52.9692"
          y2="71.8299"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.32" />
          <stop offset="0.5" stopColor="white" stopOpacity="0.02" />
          <stop offset="0.75" stopColor="white" stopOpacity="0.16" />
          <stop offset="1" stopColor="white" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_98_193"
          x1="45.9798"
          y1="20.262"
          x2="52.9702"
          y2="71.8302"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.32" />
          <stop offset="0.5" stopColor="white" stopOpacity="0.02" />
          <stop offset="0.75" stopColor="white" stopOpacity="0.16" />
          <stop offset="1" stopColor="white" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_98_193"
          x1="226.639"
          y1="81.2284"
          x2="243.689"
          y2="177.095"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.12" />
          <stop offset="0.5" stopColor="white" stopOpacity="0.02" />
          <stop offset="1" stopColor="white" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_98_193"
          x1="227.307"
          y1="80.0715"
          x2="240.103"
          y2="174.468"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.32" />
          <stop offset="0.5" stopColor="white" stopOpacity="0.02" />
          <stop offset="0.75" stopColor="white" stopOpacity="0.16" />
          <stop offset="1" stopColor="white" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_98_193"
          x1="227.309"
          y1="80.0708"
          x2="240.104"
          y2="174.467"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.32" />
          <stop offset="0.5" stopColor="white" stopOpacity="0.02" />
          <stop offset="0.75" stopColor="white" stopOpacity="0.16" />
          <stop offset="1" stopColor="white" stopOpacity="0.32" />
        </linearGradient>
        <clipPath id="clip0_98_193">
          <rect
            x="35.7881"
            width="71.5749"
            height="71.5749"
            rx="35.7874"
            transform="rotate(30 35.7881 0)"
            fill="white"
          />
        </clipPath>
        <clipPath id="clip2_98_193">
          <rect
            x="37.5645"
            y="6.62866"
            width="61.8698"
            height="61.8698"
            rx="30.9349"
            transform="rotate(30 37.5645 6.62866)"
            fill="white"
          />
        </clipPath>
        <clipPath id="clip4_98_193">
          <rect
            x="208.654"
            y="42.981"
            width="131.019"
            height="131.019"
            rx="65.5094"
            transform="rotate(30 208.654 42.981)"
            fill="white"
          />
        </clipPath>
        <clipPath id="clip6_98_193">
          <rect
            x="211.906"
            y="55.115"
            width="113.254"
            height="113.254"
            rx="56.6268"
            transform="rotate(30 211.906 55.115)"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
