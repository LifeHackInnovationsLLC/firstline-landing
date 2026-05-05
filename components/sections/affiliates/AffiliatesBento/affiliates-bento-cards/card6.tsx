"use client";

const COINS = [
  { src: "/textures/coin1.png", begin: "0s" },
  { src: "/textures/coin2.png", begin: "-5s" },
  { src: "/textures/coin1.png", begin: "-10s" },
  { src: "/textures/coin2.png", begin: "-15s" },
  { src: "/textures/coin1.png", begin: "-20s" },
  { src: "/textures/coin2.png", begin: "-25s" },
];

export function Card6Media() {
  return (
    <div
      className=" border h-full w-full flex justify-center items-center"
      style={{
        maskImage:
          "radial-gradient(ellipse 120% 110% at 50% 0%, black 70%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 120% 110% at 50% 0%, black 70%, transparent 100%)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="212"
        height="212"
        fill="none"
        viewBox="0 0 212 212"
        overflow="visible"
      >
        <path
          stroke="#fff"
          d="M105.5 4.5c55.778 0 101 45.44 101 101.5 0 56.059-45.222 101.5-101 101.5S4.5 162.059 4.5 106c0-56.06 45.222-101.5 101-101.5Z"
          opacity=".18"
        />
        <path
          id="coinOrbitPath"
          stroke="#fff"
          d="M105.5 8.5c53.569 0 97 43.65 97 97.5s-43.431 97.5-97 97.5c-53.57 0-97-43.65-97-97.5s43.43-97.5 97-97.5Z"
          opacity=".16"
        />
        <circle cx="106" cy="106" r="105.5" stroke="#fff" opacity=".16" />

        {COINS.map((coin) => (
          <image
            key={`${coin.src}-${coin.begin}`}
            href={coin.src}
            width="64"
            height="64"
            x="-32"
            y="-32"
          >
            <animateMotion
              dur="30s"
              repeatCount="indefinite"
              begin={coin.begin}
              rotate="0"
            >
              <mpath href="#coinOrbitPath" />
            </animateMotion>
          </image>
        ))}
      </svg>
    </div>
  );
}
