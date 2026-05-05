import Image from "next/image";
import { Globe } from "@/components/ui/globe";

const coins = [
  {
    src: "/textures/coin1.png",
    className:
      "left-[6%] top-[28%] sm:left-[10%] sm:top-[32%] lg:left-[14%] lg:top-[38%] size-28 sm:size-36 lg:size-44",
    delay: "-20s",
  },
  {
    src: "/textures/coin2.png",
    className:
      "right-[4%] top-[42%] sm:right-[8%] sm:top-[46%] lg:right-[12%] lg:top-[52%] size-32 sm:size-40 lg:size-52",
    delay: "-25s",
  },
];

export function TeamHeroBackground() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div className="absolute left-1/2 top-1/2 aspect-square w-[140%] sm:w-[110%] lg:w-[85%] -translate-x-1/2 -translate-y-1/2 opacity-80">
        <Globe
          className="!relative !inset-auto !max-w-none"
          config={{
            width: 800,
            height: 800,
            devicePixelRatio: 2,
            phi: 0,
            theta: 0.25,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 5,
            baseColor: [0.18, 0.32, 0.3],
            markerColor: [0.32, 0.78, 0.72],
            glowColor: [0.05, 0.18, 0.16],
            markers: [
              { location: [40.7128, -74.006], size: 0.05 },
              { location: [51.5074, -0.1278], size: 0.05 },
              { location: [35.6762, 139.6503], size: 0.05 },
              { location: [1.3521, 103.8198], size: 0.04 },
              { location: [-23.5505, -46.6333], size: 0.05 },
              { location: [19.076, 72.8777], size: 0.04 },
              { location: [-26.2041, 28.0473], size: 0.04 },
              { location: [-33.8688, 151.2093], size: 0.04 },
            ],
          }}
        />
      </div>

      {coins.map((coin) => (
        <Image
          key={coin.src}
          src={coin.src}
          alt=""
          width={320}
          height={320}
          priority
          className={`absolute team-hero-coin ${coin.className}`}
          style={{ animationDelay: coin.delay }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </div>
  );
}
