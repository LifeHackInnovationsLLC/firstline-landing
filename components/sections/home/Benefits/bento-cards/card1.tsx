import { motion } from "framer-motion";

export function Card1Media() {
  return (
    <div className="">
      <motion.svg
        width="331"
        height="276"
        viewBox="0 0 331 276"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <g
          filter="url(#filter0_f_0_1)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d="M91.5068 185.596L-22.6108 -72.5041L-17.9018 -77.8262L241.221 92.3077L91.5068 185.596Z"
            fill="url(#paint0_linear_0_1)"
            fillOpacity="0.8"
          />
        </g>
        <g
          filter="url(#filter1_f_0_1)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d="M150.5 162.117L-37.5 -66.3831L-33 -71.8831L188 129.617L150.5 162.117Z"
            fill="url(#paint1_linear_0_1)"
            fillOpacity="0.12"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="-112.251"
            y="-167.466"
            width="443.112"
            height="442.702"
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
              stdDeviation="44.82"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <filter
            id="filter1_f_0_1"
            x="-64.3"
            y="-98.6831"
            width="279.1"
            height="287.6"
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
              stdDeviation="13.4"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1"
            x1="-13.9507"
            y1="-77.6735"
            x2="228.95"
            y2="190.907"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6363B1" />
            <stop offset="1" stopColor="#6363B1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="-29.046"
            y1="-71.8831"
            x2="224.046"
            y2="187.117"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
      <img
        src="/textures/benefit-bento/card1/box.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      <svg
        className="relative z-10"
        width="144"
        height="144"
        viewBox="0 0 144 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_21659)">
          <rect
            width="144"
            height="144"
            rx="28.8"
            fill="url(#paint0_linear_1_21659)"
          />
          <rect
            x="18"
            y="17.9999"
            width="108"
            height="108"
            rx="10.8"
            fill="#112020"
            stroke="#11201D"
            strokeWidth="7.2"
          />
          <path
            className=" mix-blend-overlay"
            d="M43.167 29.4854C51.3872 23.8997 61.3116 20.6348 71.999 20.6348C72.0237 20.6348 72.0485 20.6347 72.0732 20.6348V0H72.9385V20.6436C83.7102 20.8367 93.672 24.346 101.848 30.1934V0H102.713V30.8242C104.522 32.1758 106.237 33.6464 107.851 35.2197L135.43 7.6416L136.042 8.25293L108.466 35.8281C110.159 37.5345 111.733 39.3579 113.175 41.2871H144V42.1523H113.807C119.654 50.3279 123.163 60.2897 123.356 71.0615H144V71.9268H123.365C123.365 71.9511 123.365 71.9757 123.365 72L123.36 72.6641C123.228 83.0989 119.983 92.7829 114.513 100.833H144V101.698H113.91C112.501 103.683 110.955 105.562 109.285 107.324L136.653 134.692L136.042 135.304L108.685 107.947C106.833 109.837 104.837 111.585 102.713 113.172V144H101.848V113.804C93.6719 119.652 83.711 123.163 72.9385 123.356V144H72.0732V123.365C72.0485 123.365 72.0237 123.366 71.999 123.366L71.335 123.361C60.9002 123.229 51.2169 119.983 43.167 114.513V144H42.3018V113.91C39.9956 112.273 37.8306 110.451 35.8281 108.465L8.10645 136.188L7.49512 135.576L35.2197 107.851C33.3551 105.938 31.6372 103.882 30.0869 101.698H0V100.833H29.4873C23.9009 92.6124 20.6338 82.6883 20.6338 72C20.6338 71.9757 20.6338 71.9511 20.6338 71.9268H0V71.0615H20.6426C20.8356 60.2895 24.3458 50.328 30.1934 42.1523H0V41.2871H30.8242C32.4115 39.1626 34.1613 37.1671 36.0518 35.3145L8.10742 7.37012L8.71875 6.75781L36.6729 34.7119C38.4355 33.0414 40.3163 31.4943 42.3018 30.085V0H43.167V29.4854ZM43.167 113.462C51.3424 119.158 61.2797 122.501 71.999 122.501C72.0237 122.501 72.0485 122.5 72.0732 122.5V101.698H43.167V113.462ZM72.9385 122.491C83.7452 122.294 93.7207 118.7 101.848 112.735V101.698H72.9385V122.491ZM36.4385 107.854C38.2611 109.662 40.222 111.33 42.3018 112.845V101.992L36.4385 107.854ZM102.713 112.085C104.611 110.629 106.402 109.041 108.073 107.335L102.713 101.975V112.085ZM31.1553 101.698C32.5815 103.656 34.1442 105.508 35.8311 107.239L41.373 101.698H31.1553ZM108.674 106.713C110.168 105.134 111.561 103.459 112.844 101.698H103.659L108.674 106.713ZM43.4609 100.833H72.0732V72.2207L43.4609 100.833ZM72.9385 100.833H101.571L72.9385 72.2002V100.833ZM102.713 100.752L102.794 100.833H113.461C119.157 92.6573 122.5 82.7196 122.5 72C122.5 71.9757 122.5 71.9511 122.5 71.9268H102.713V100.752ZM21.499 72C21.4991 82.7198 24.8428 92.6572 30.5391 100.833H42.2383L42.3018 100.77V71.9268H21.499C21.499 71.9511 21.499 71.9757 21.499 72ZM43.167 99.9043L71.1445 71.9268H43.167V99.9043ZM101.848 99.8867V71.9268H73.8877L101.848 99.8867ZM31.2637 42.1523C25.2988 50.2793 21.7057 60.2548 21.5088 71.0615H42.3018V42.1523H31.2637ZM43.167 71.0615H71.7988L43.167 42.4287V71.0615ZM73.2334 71.0615H101.848V42.4463L73.2334 71.0615ZM102.713 71.0615H122.49C122.293 60.2548 118.7 50.2793 112.735 42.1523H102.713V71.0615ZM72.9385 70.1328L100.919 42.1523H72.9385V70.1328ZM72.0732 70.1123V42.1523H44.1133L72.0732 70.1123ZM36.6631 35.9258C34.957 37.5972 33.3704 39.3893 31.9141 41.2871H42.0244L36.6631 35.9258ZM71.999 21.5C61.2799 21.5001 51.3423 24.8415 43.167 30.5371V41.2061L43.248 41.2871H72.0732V21.5C72.0485 21.5 72.0237 21.5 71.999 21.5ZM103.008 41.2871H112.085C110.777 39.5826 109.364 37.9634 107.854 36.4404L103.008 41.2871ZM72.9385 41.2871H101.784L101.848 41.2236V31.2637C93.7208 25.299 83.7449 21.7059 72.9385 21.5088V41.2871ZM102.713 40.3584L107.238 35.832C105.809 34.4394 104.298 33.1307 102.713 31.9141V40.3584ZM42.3018 31.1543C40.5404 32.4372 38.8639 33.8294 37.2852 35.3242L42.3018 40.3408V31.1543Z"
            fill="white"
            fillOpacity="0.6"
          />
          <g
            filter="url(#filter0_f_1_21659)"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            <ellipse
              cx="16.2"
              cy="17.9999"
              rx="63"
              ry="57.6"
              fill="#333A5D"
              fillOpacity="0.33"
            />
          </g>
          <foreignObject x="32" y="38.8831" width="81" height="66">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_1_1_21659_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <path
            data-figma-bg-blur-radius="4"
            d="M58.2178 72.3831C68.9081 72.3831 78.8072 81.3175 79.9287 97.469C79.9812 98.2249 79.7217 98.9677 79.2148 99.5198C78.7083 100.071 78.0008 100.383 77.2617 100.383H39.1738C38.4348 100.383 37.7272 100.071 37.2207 99.5198C36.7139 98.9677 36.4544 98.2249 36.5068 97.469C37.6283 81.3175 47.5275 72.3831 58.2178 72.3831ZM86.7822 72.3831C97.4724 72.3832 107.372 81.3176 108.493 97.469C108.603 99.0518 107.369 100.383 105.826 100.383H86.9131C87.2163 99.2765 87.338 98.1157 87.2568 96.9465C86.6123 87.6641 83.39 79.8668 78.4805 74.2883C81.0807 73.0313 83.8976 72.3831 86.7822 72.3831ZM58.2178 43.3831C64.9462 43.3831 70.4139 48.9225 70.4141 55.7717C70.4141 62.6211 64.9463 68.1604 58.2178 68.1604C51.4893 68.1604 46.0215 62.621 46.0215 55.7717C46.0216 48.9225 51.4893 43.3831 58.2178 43.3831ZM86.7832 43.3831C93.5117 43.3831 98.9794 48.9225 98.9795 55.7717C98.9795 62.6211 93.5117 68.1604 86.7832 68.1604C80.0549 68.1602 74.5879 62.6209 74.5879 55.7717C74.588 48.9226 80.0549 43.3833 86.7832 43.3831Z"
            fill="url(#paint1_linear_1_21659)"
            stroke="url(#paint2_linear_1_21659)"
          />
        </g>
        <rect
          x="1.8"
          y="1.8"
          width="140.4"
          height="140.4"
          rx="27"
          stroke="url(#paint3_linear_1_21659)"
          strokeWidth="3.6"
        />
        <rect
          x="1.8"
          y="1.8"
          width="140.4"
          height="140.4"
          rx="27"
          stroke="url(#paint4_linear_1_21659)"
          strokeWidth="3.6"
        />
        <defs>
          <filter
            id="filter0_f_1_21659"
            x="-136.44"
            y="-129.24"
            width="305.28"
            height="294.48"
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
              stdDeviation="44.82"
              result="effect1_foregroundBlur_1_21659"
            />
          </filter>
          <clipPath
            id="bgblur_1_1_21659_clip_path"
            transform="translate(-32 -38.8831)"
          >
            <path d="M58.2178 72.3831C68.9081 72.3831 78.8072 81.3175 79.9287 97.469C79.9812 98.2249 79.7217 98.9677 79.2148 99.5198C78.7083 100.071 78.0008 100.383 77.2617 100.383H39.1738C38.4348 100.383 37.7272 100.071 37.2207 99.5198C36.7139 98.9677 36.4544 98.2249 36.5068 97.469C37.6283 81.3175 47.5275 72.3831 58.2178 72.3831ZM86.7822 72.3831C97.4724 72.3832 107.372 81.3176 108.493 97.469C108.603 99.0518 107.369 100.383 105.826 100.383H86.9131C87.2163 99.2765 87.338 98.1157 87.2568 96.9465C86.6123 87.6641 83.39 79.8668 78.4805 74.2883C81.0807 73.0313 83.8976 72.3831 86.7822 72.3831ZM58.2178 43.3831C64.9462 43.3831 70.4139 48.9225 70.4141 55.7717C70.4141 62.6211 64.9463 68.1604 58.2178 68.1604C51.4893 68.1604 46.0215 62.621 46.0215 55.7717C46.0216 48.9225 51.4893 43.3831 58.2178 43.3831ZM86.7832 43.3831C93.5117 43.3831 98.9794 48.9225 98.9795 55.7717C98.9795 62.6211 93.5117 68.1604 86.7832 68.1604C80.0549 68.1602 74.5879 62.6209 74.5879 55.7717C74.588 48.9226 80.0549 43.3833 86.7832 43.3831Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_1_21659"
            x1="0"
            y1="0"
            x2="52.8569"
            y2="172.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#172F2F" />
            <stop offset="1" stopColor="#111217" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_21659"
            x1="37.6457"
            y1="42.8831"
            x2="91.0407"
            y2="113.26"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.24" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_21659"
            x1="36.9468"
            y1="42.8831"
            x2="82.6498"
            y2="108.414"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.39" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_21659"
            x1="0"
            y1="0"
            x2="52.8569"
            y2="172.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.06" />
            <stop offset="1" stopColor="white" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_21659"
            x1="0.796521"
            y1="-5.70468e-06"
            x2="186.5"
            y2="183.883"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A4A80" />
            <stop offset="1" stopColor="#2AED78" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_1_21659">
            <rect width="144" height="144" rx="28.8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
