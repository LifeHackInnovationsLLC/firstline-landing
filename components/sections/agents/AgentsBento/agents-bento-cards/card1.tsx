"use client";

import { motion } from "motion/react";

const BEAM_DURATION = 6;
const BEAM_COLOR = "#A78BFA";
const BEAM_GRADIENT_ID = "card1-beam-gradient";

function BeamPath({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={`url(#${BEAM_GRADIENT_ID})`}
      strokeWidth="1.5"
      strokeLinecap="round"
      pathLength={100}
      strokeDasharray="25 75"
      initial={{ strokeDashoffset: 100 }}
      animate={{ strokeDashoffset: [100, 0] }}
      transition={{
        delay,
        duration: BEAM_DURATION,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        filter: "drop-shadow(0 0 4px rgba(167, 139, 250, 0.55))",
      }}
    />
  );
}

function BeamGradient() {
  return (
    <linearGradient
      id={BEAM_GRADIENT_ID}
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="0"
      x2="180"
      y2="180"
    >
      <stop offset="0%" stopColor={BEAM_COLOR} stopOpacity="0" />
      <stop offset="40%" stopColor={BEAM_COLOR} stopOpacity="0.15" />
      <stop offset="80%" stopColor={BEAM_COLOR} stopOpacity="0.85" />
      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
    </linearGradient>
  );
}

const BEAM_RING_1 =
  "M46 0.5 H134 A45.5 45.5 0 0 1 179.5 46 V134 A45.5 45.5 0 0 1 134 179.5 H46 A45.5 45.5 0 0 1 0.5 134 V46 A45.5 45.5 0 0 1 46 0.5 Z";
const BEAM_RING_2 =
  "M46 8.5 H134 A37.5 37.5 0 0 1 171.5 46 V134 A37.5 37.5 0 0 1 134 171.5 H46 A37.5 37.5 0 0 1 8.5 134 V46 A37.5 37.5 0 0 1 46 8.5 Z";
const BEAM_RING_3 =
  "M46 16.5 H134 A29.5 29.5 0 0 1 163.5 46 V134 A29.5 29.5 0 0 1 134 163.5 H46 A29.5 29.5 0 0 1 16.5 134 V46 A29.5 29.5 0 0 1 46 16.5 Z";
const BEAM_RING_4 =
  "M46 24.5 H134 A21.5 21.5 0 0 1 155.5 46 V134 A21.5 21.5 0 0 1 134 155.5 H46 A21.5 21.5 0 0 1 24.5 134 V46 A21.5 21.5 0 0 1 46 24.5 Z";

export function Card1Media() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="180"
        fill="none"
        viewBox="0 0 180 180"
      >
        <g className="Group 2087326085">
          <rect
            width="179"
            height="179"
            x=".5"
            y=".5"
            stroke="#fff"
            strokeOpacity=".08"
            className="beam-path"
            rx="45.5"
          />
          <rect
            width="163"
            height="163"
            x="8.5"
            y="8.5"
            stroke="#fff"
            strokeOpacity=".08"
            className="beam-path"
            rx="37.5"
          />
          <rect
            width="147"
            height="147"
            x="16.5"
            y="16.5"
            stroke="#fff"
            strokeOpacity=".08"
            className="beam-path"
            rx="29.5"
          />
          <rect
            width="131"
            height="131"
            x="24.5"
            y="24.5"
            stroke="#fff"
            strokeOpacity=".08"
            className="beam-path"
            rx="21.5"
          />
          <BeamPath d={BEAM_RING_1} delay={0} />
          <BeamPath d={BEAM_RING_2} delay={0.6} />
          <BeamPath d={BEAM_RING_3} delay={1.2} />
          <BeamPath d={BEAM_RING_4} delay={1.8} />
          <g className="Frame 1618869362">
            <g clipPath="url(#a)">
              <rect
                width="116"
                height="116"
                x="32"
                y="32"
                fill="url(#b)"
                rx="14"
              />
              <g className="Rectangle 34625170" filter="url(#c)" opacity=".24">
                <path
                  fill="url(#d)"
                  d="M128.864 13.454h32V195.14h-32z"
                  transform="rotate(39.767 128.864 13.454)"
                />
                <path
                  stroke="#14B6FF"
                  strokeOpacity=".09"
                  strokeWidth=".164"
                  d="m128.875 13.57 24.47 20.364L37.233 173.462l-24.47-20.365z"
                />
              </g>
              <g className="Group 1261154176">
                <path
                  fill="url(#e)"
                  d="M96.841 53.434c-.746-2.836-10.301-7.017-16.124 0-2.138 2.577-2.261 6.09-1.475 9.556-.603-1.145-2.138-3.614-3.452-4.33-1.642-.896-10.6 2.389-11.645 7.763-.836 4.3 4.628 7.366 7.465 8.361h34.189c1.294-1.244 4.031-4.001 4.628-5.076.747-1.344-1.194-5.823-5.972-10.152-3.822-3.464-6.37.248-7.166 2.538.1-1.941.15-6.39-.448-8.66Z"
                  className="Vector 4563"
                />

                <g
                  className="Vector 4564"
                  data-figma-bg-blur-radius=".986"
                  filter="url(#g)"
                >
                  <path
                    fill="url(#h)"
                    d="M97.289 62.094c.796-2.29 3.344-6.002 7.166-2.538 3.895 3.53 5.905 7.158 6.11 9.107-.593-.448-2.556-1.015-5.662.299-3.881 1.642-8.51 4.03-6.867 5.076.715.455 2.346.665 4.014.746h3.749a41.12 41.12 0 0 1-3.749 0H71.61c-2.837-.995-8.301-4.06-7.465-8.36.872-4.488 7.26-7.518 10.302-7.875-.648 4.217.358 13.22 9.555 15.489 0-.448.746-.15-.299-1.344-1.045-1.194-3.846-6.27-4.461-9.704-.786-3.466-.663-6.98 1.475-9.556 4.945-5.959 12.58-3.842 15.228-1.331-.398.145-1.433.884-2.388 2.675-1.195 2.24-5.674 14.184-2.688 19.26 1.941 1.045 2.24-.896 2.24-1.643 0-.746 3.094-8.211 4.18-10.301Z"
                  />
                  <path
                    stroke="#4F14FF"
                    strokeOpacity=".09"
                    strokeWidth=".164"
                    d="M89.19 49.675c2.775.095 5.273 1.197 6.606 2.404-.22.109-.534.328-.894.686-.434.433-.936 1.072-1.418 1.975-.601 1.128-2.022 4.68-2.919 8.586-.448 1.953-.767 3.998-.786 5.875-.018 1.875.262 3.591 1.02 4.879l.011.02.02.01c.494.266.896.348 1.22.298.328-.05.566-.234.734-.472.333-.47.407-1.163.407-1.54 0-.037.01-.102.033-.197.022-.094.055-.212.098-.35.086-.278.211-.638.364-1.056a92.25 92.25 0 0 1 1.182-3.013c.91-2.22 1.952-4.607 2.493-5.648h.001l.004-.011c.396-1.137 1.224-2.617 2.416-3.384.594-.382 1.276-.587 2.042-.486.768.1 1.629.508 2.576 1.366 1.943 1.76 3.414 3.544 4.424 5.13.952 1.493 1.491 2.804 1.636 3.75-.76-.441-2.689-.838-5.589.388-1.942.822-4.074 1.833-5.517 2.77-.72.467-1.278.922-1.552 1.334-.138.206-.21.413-.184.61.028.199.155.369.373.508.373.237.974.406 1.68.525.153.026.311.048.474.07H71.624c-1.411-.497-3.468-1.506-5.07-2.921-1.606-1.42-2.738-3.234-2.328-5.342.43-2.211 2.222-4.074 4.301-5.432 2.03-1.326 4.314-2.159 5.823-2.362-.306 2.124-.198 5.385 1.107 8.411 1.329 3.082 3.898 5.92 8.524 7.062l.103.024v-.104c0-.083.032-.129.076-.173l.038-.036.043-.04a.355.355 0 0 0 .078-.11c.043-.1.026-.217-.055-.373-.082-.156-.237-.366-.5-.666-.514-.588-1.472-2.148-2.38-3.995-.906-1.845-1.755-3.964-2.06-5.67l-.002-.004-.136-.648c-.624-3.24-.387-6.448 1.594-8.836 2.454-2.957 5.573-3.91 8.41-3.813Z"
                  />
                </g>

                <g
                  className="Vector 4555"
                  data-figma-bg-blur-radius=".986"
                  filter="url(#j)"
                >
                  <path
                    fill="url(#k)"
                    d="M54.59 87.325v38.669l49.866 4.031 20.006-5.226V86.28l-20.006 1.045H54.59Z"
                  />
                  <path
                    stroke="#4F14FF"
                    strokeOpacity=".09"
                    strokeWidth=".164"
                    d="m124.379 124.735-19.93 5.205-49.777-4.022v-38.51h49.788l19.919-1.042v38.369Z"
                  />
                </g>

                <g
                  className="Vector 4557"
                  data-figma-bg-blur-radius=".986"
                  filter="url(#m)"
                >
                  <path
                    fill="url(#n)"
                    d="m54.59 125.994 49.866 4.031v-42.7c-2.867 28.904-34.439 37.823-49.866 38.669Z"
                  />
                  <path
                    stroke="#4F14FF"
                    strokeOpacity=".09"
                    strokeWidth=".164"
                    d="m104.373 129.935-48.665-3.934c7.71-.588 18.852-3.072 28.566-8.749 9.862-5.763 18.26-14.817 20.099-28.514v41.197Z"
                  />
                </g>

                <g
                  className="Vector 4556"
                  data-figma-bg-blur-radius=".986"
                  filter="url(#p)"
                >
                  <path
                    fill="#5E41EF"
                    d="m124.462 86.28-20.006 1.045v42.7l20.006-5.226V86.28Z"
                  />
                  <path
                    stroke="#4F14FF"
                    strokeOpacity=".09"
                    strokeWidth=".164"
                    d="m124.38 124.735-19.842 5.183V87.402l19.842-1.036v38.369Z"
                  />
                </g>

                <g
                  className="Vector 4558"
                  data-figma-bg-blur-radius=".986"
                  filter="url(#r)"
                >
                  <path
                    fill="url(#s)"
                    d="M52.5 75.381V88.52h51.956l22.245-.448.299-10.9-22.544-4.627L52.5 75.38Z"
                  />
                  <path
                    stroke="#4F14FF"
                    strokeOpacity=".09"
                    strokeWidth=".164"
                    d="m126.916 77.239-.295 10.752-22.167.446H52.582V75.46l51.869-2.832 22.465 4.612Z"
                  />
                </g>
                <g className="Mask group">
                  <mask
                    id="u"
                    width="75"
                    height="17"
                    x="52"
                    y="72"
                    className="u"
                    maskUnits="userSpaceOnUse"
                    style={{
                      maskType: "alpha",
                    }}
                  >
                    <path
                      fill="url(#t)"
                      d="M52.5 75.381V88.52h51.956l22.245-.448.299-10.9-22.544-4.627L52.5 75.38Z"
                      className="Vector 4559"
                    />
                  </mask>
                  <g mask="url(#u)">
                    <path
                      fill="#fff"
                      fillOpacity=".36"
                      d="M104.307 74.933 52.5 76.576v-8.958h75.246v10.899l-23.439-3.584Z"
                      className="Vector 4560"
                    />
                  </g>
                </g>
                <path
                  fill="#fff"
                  fillOpacity=".41"
                  d="M71.61 74.336v53.033l14.034 1.137V73.59l-14.034.746Z"
                  className="Vector 4561"
                />
                <path
                  fill="#fff"
                  fillOpacity=".41"
                  d="M110.428 73.767v54.704l7.017-1.838v-51.42l-7.017-1.446Z"
                  className="Vector 4562"
                />
              </g>
            </g>
            <rect
              width="114.831"
              height="114.831"
              x="32.584"
              y="32.584"
              stroke="url(#v)"
              strokeWidth="1.169"
              rx="13.416"
            />
            <rect
              width="114.831"
              height="114.831"
              x="32.584"
              y="32.584"
              stroke="url(#w)"
              strokeWidth="1.169"
              rx="13.416"
            />
          </g>
        </g>
        <defs>
          <BeamGradient />
          <linearGradient
            id="b"
            x1="32"
            x2="74.579"
            y1="32"
            y2="170.562"
            className="b"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" stopOpacity=".12" />
            <stop offset="1" stopColor="#fff" stopOpacity=".04" />
          </linearGradient>
          <linearGradient
            id="d"
            x1="130.818"
            x2="192.864"
            y1="13.454"
            y2="25.902"
            className="d"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CEADFF" />
            <stop offset="1" stopColor="#7D32FF" />
          </linearGradient>
          <linearGradient
            id="e"
            x1="115.971"
            x2="60.994"
            y1="66.963"
            y2="63.655"
            className="e"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#692EF3" />
            <stop offset="1" stopColor="#8112FF" />
          </linearGradient>
          <linearGradient
            id="h"
            x1="66.897"
            x2="84.254"
            y1="49.586"
            y2="86.011"
            className="h"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7ADFF" />
            <stop offset="1" stopColor="#6932FF" />
          </linearGradient>
          <linearGradient
            id="k"
            x1="58.855"
            x2="91.552"
            y1="86.28"
            y2="145.769"
            className="k"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7ADFF" />
            <stop offset="1" stopColor="#6932FF" />
          </linearGradient>
          <linearGradient
            id="n"
            x1="62.652"
            x2="94.033"
            y1="113.602"
            y2="132.146"
            className="n"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C6ADFF" />
            <stop offset="1" stopColor="#5E32FF" />
          </linearGradient>
          <linearGradient
            id="s"
            x1="57.048"
            x2="62.191"
            y1="72.545"
            y2="99.864"
            className="s"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7ADFF" />
            <stop offset="1" stopColor="#6932FF" />
          </linearGradient>
          <linearGradient
            id="t"
            x1="57.048"
            x2="62.191"
            y1="72.545"
            y2="99.864"
            className="t"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ADE8FF" />
            <stop offset="1" stopColor="#32B9FF" />
          </linearGradient>
          <linearGradient
            id="v"
            x1="32"
            x2="74.579"
            y1="32"
            y2="170.562"
            className="v"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" stopOpacity=".16" />
            <stop offset="1" stopColor="#fff" stopOpacity=".05" />
          </linearGradient>
          <linearGradient
            id="w"
            x1="96.88"
            x2="129.178"
            y1="100.999"
            y2="131.049"
            className="w"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#fff" stopOpacity=".25" />
          </linearGradient>
          <clipPath id="f" className="f" transform="translate(-63.072 -48.6)">
            <path d="M97.289 62.094c.796-2.29 3.344-6.002 7.166-2.538 3.895 3.53 5.905 7.158 6.11 9.107-.593-.448-2.556-1.015-5.662.299-3.881 1.642-8.51 4.03-6.867 5.076.715.455 2.346.665 4.014.746h3.749a41.12 41.12 0 0 1-3.749 0H71.61c-2.837-.995-8.301-4.06-7.465-8.36.872-4.488 7.26-7.518 10.302-7.875-.648 4.217.358 13.22 9.555 15.489 0-.448.746-.15-.299-1.344-1.045-1.194-3.846-6.27-4.461-9.704-.786-3.466-.663-6.98 1.475-9.556 4.945-5.959 12.58-3.842 15.228-1.331-.398.145-1.433.884-2.388 2.675-1.195 2.24-5.674 14.184-2.688 19.26 1.941 1.045 2.24-.896 2.24-1.643 0-.746 3.094-8.211 4.18-10.301Z" />
          </clipPath>
          <clipPath id="i" className="i" transform="translate(-53.603 -85.294)">
            <path d="M54.59 87.325v38.669l49.866 4.031 20.006-5.226V86.28l-20.006 1.045H54.59Z" />
          </clipPath>
          <clipPath id="l" className="l" transform="translate(-53.603 -86.339)">
            <path d="m54.59 125.994 49.866 4.031v-42.7c-2.867 28.904-34.439 37.823-49.866 38.669Z" />
          </clipPath>
          <clipPath id="o" className="o" transform="translate(-103.47 -85.294)">
            <path d="m124.462 86.28-20.006 1.045v42.7l20.006-5.226V86.28Z" />
          </clipPath>
          <clipPath id="q" className="q" transform="translate(-51.514 -71.558)">
            <path d="M52.5 75.381V88.52h51.956l22.245-.448.299-10.9-22.544-4.627L52.5 75.38Z" />
          </clipPath>
          <clipPath id="a" className="a">
            <rect width="116" height="116" x="32" y="32" fill="#fff" rx="14" />
          </clipPath>
          <filter
            id="c"
            width="218.014"
            height="237.323"
            x="-25.953"
            y="-25.145"
            className="c"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_69_639"
              stdDeviation="19.3"
            />
          </filter>
          <filter
            id="g"
            width="48.479"
            height="27.214"
            x="63.072"
            y="48.599"
            className="g"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".082" />
            <feGaussianBlur stdDeviation=".041" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              radius=".082"
              result="effect2_dropShadow_69_639"
            />
            <feOffset dy=".164" />
            <feGaussianBlur stdDeviation=".082" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="effect1_dropShadow_69_639"
              result="effect2_dropShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              radius=".164"
              result="effect3_dropShadow_69_639"
            />
            <feOffset dy=".329" />
            <feGaussianBlur stdDeviation=".164" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="effect2_dropShadow_69_639"
              result="effect3_dropShadow_69_639"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_69_639"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".082" />
            <feGaussianBlur stdDeviation=".041" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
            <feBlend in2="shape" result="effect4_innerShadow_69_639" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".164" />
            <feGaussianBlur stdDeviation=".247" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
            <feBlend
              in2="effect4_innerShadow_69_639"
              result="effect5_innerShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".329" />
            <feGaussianBlur stdDeviation=".658" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
            <feBlend
              in2="effect5_innerShadow_69_639"
              result="effect6_innerShadow_69_639"
            />
          </filter>
          <filter
            id="j"
            width="71.845"
            height="45.717"
            x="53.603"
            y="85.294"
            className="j"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".082" />
            <feGaussianBlur stdDeviation=".041" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              radius=".082"
              result="effect2_dropShadow_69_639"
            />
            <feOffset dy=".164" />
            <feGaussianBlur stdDeviation=".082" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="effect1_dropShadow_69_639"
              result="effect2_dropShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              radius=".164"
              result="effect3_dropShadow_69_639"
            />
            <feOffset dy=".329" />
            <feGaussianBlur stdDeviation=".164" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="effect2_dropShadow_69_639"
              result="effect3_dropShadow_69_639"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_69_639"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".082" />
            <feGaussianBlur stdDeviation=".041" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
            <feBlend in2="shape" result="effect4_innerShadow_69_639" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".164" />
            <feGaussianBlur stdDeviation=".247" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
            <feBlend
              in2="effect4_innerShadow_69_639"
              result="effect5_innerShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".329" />
            <feGaussianBlur stdDeviation=".658" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
            <feBlend
              in2="effect5_innerShadow_69_639"
              result="effect6_innerShadow_69_639"
            />
          </filter>
          <filter
            id="m"
            width="51.839"
            height="44.672"
            x="53.603"
            y="86.339"
            className="m"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".082" />
            <feGaussianBlur stdDeviation=".041" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              radius=".082"
              result="effect2_dropShadow_69_639"
            />
            <feOffset dy=".164" />
            <feGaussianBlur stdDeviation=".082" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="effect1_dropShadow_69_639"
              result="effect2_dropShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              radius=".164"
              result="effect3_dropShadow_69_639"
            />
            <feOffset dy=".329" />
            <feGaussianBlur stdDeviation=".164" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="effect2_dropShadow_69_639"
              result="effect3_dropShadow_69_639"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_69_639"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".082" />
            <feGaussianBlur stdDeviation=".041" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
            <feBlend in2="shape" result="effect4_innerShadow_69_639" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".164" />
            <feGaussianBlur stdDeviation=".247" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
            <feBlend
              in2="effect4_innerShadow_69_639"
              result="effect5_innerShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".329" />
            <feGaussianBlur stdDeviation=".658" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
            <feBlend
              in2="effect5_innerShadow_69_639"
              result="effect6_innerShadow_69_639"
            />
          </filter>
          <filter
            id="p"
            width="21.979"
            height="45.717"
            x="103.47"
            y="85.294"
            className="p"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".082" />
            <feGaussianBlur stdDeviation=".041" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              radius=".082"
              result="effect2_dropShadow_69_639"
            />
            <feOffset dy=".164" />
            <feGaussianBlur stdDeviation=".082" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="effect1_dropShadow_69_639"
              result="effect2_dropShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              radius=".164"
              result="effect3_dropShadow_69_639"
            />
            <feOffset dy=".329" />
            <feGaussianBlur stdDeviation=".164" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="effect2_dropShadow_69_639"
              result="effect3_dropShadow_69_639"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_69_639"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".082" />
            <feGaussianBlur stdDeviation=".041" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
            <feBlend in2="shape" result="effect4_innerShadow_69_639" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".164" />
            <feGaussianBlur stdDeviation=".247" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
            <feBlend
              in2="effect4_innerShadow_69_639"
              result="effect5_innerShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".329" />
            <feGaussianBlur stdDeviation=".658" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
            <feBlend
              in2="effect5_innerShadow_69_639"
              result="effect6_innerShadow_69_639"
            />
          </filter>
          <filter
            id="r"
            width="76.473"
            height="18.649"
            x="51.514"
            y="71.558"
            className="r"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".082" />
            <feGaussianBlur stdDeviation=".041" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              radius=".082"
              result="effect2_dropShadow_69_639"
            />
            <feOffset dy=".164" />
            <feGaussianBlur stdDeviation=".082" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.04 0" />
            <feBlend
              in2="effect1_dropShadow_69_639"
              result="effect2_dropShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              radius=".164"
              result="effect3_dropShadow_69_639"
            />
            <feOffset dy="1.523" />
            <feGaussianBlur stdDeviation=".164" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.027451 0 0 0 0 0.00392157 0 0 0 0 0.0745098 0 0 0 0.08 0" />
            <feBlend
              in2="effect2_dropShadow_69_639"
              result="effect3_dropShadow_69_639"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect3_dropShadow_69_639"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".082" />
            <feGaussianBlur stdDeviation=".041" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
            <feBlend in2="shape" result="effect4_innerShadow_69_639" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".164" />
            <feGaussianBlur stdDeviation=".247" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
            <feBlend
              in2="effect4_innerShadow_69_639"
              result="effect5_innerShadow_69_639"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy=".329" />
            <feGaussianBlur stdDeviation=".658" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
            <feBlend
              in2="effect5_innerShadow_69_639"
              result="effect6_innerShadow_69_639"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
