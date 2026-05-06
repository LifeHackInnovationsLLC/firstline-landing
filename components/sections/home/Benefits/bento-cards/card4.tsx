import Image from "next/image";
import { Globe } from "@/components/ui/globe";
import { cdn, images } from "@/lib/cdn";

const payouts = [
  { label: "New York", amount: "$2,400", className: "top-[18%] left-[14%]" },
  { label: "London", amount: "$1,180", className: "top-[10%] right-[18%]" },
  { label: "Tokyo", amount: "$3,060", className: "top-[42%] right-[8%]" },
];

export function Card4Media() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <Image
        src={cdn(images.sellers.ellipseSplitPayments)}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32"
        width={600}
        height={600}
        unoptimized
      />
      <Image
        src={cdn(images.sellers.greenEllipseSplitPayments)}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32"
        width={600}
        height={600}
        unoptimized
      />
      <div className="pointer-events-none aspect-square w-[180%] translate-y-[25%] sm:w-[160%] sm:translate-y-[30%] lg:w-[150%] lg:translate-y-[30%]">
        <Globe
          className="!relative !inset-auto !max-w-none"
          config={{
            width: 800,
            height: 800,
            devicePixelRatio: 2,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 4,
            baseColor: [0.2, 0.22, 0.24],
            markerColor: [1, 1, 1],
            glowColor: [0, 0, 0],
            markers: [
              { location: [40.7128, -74.006], size: 0.05 },
              { location: [51.5074, -0.1278], size: 0.05 },
              { location: [35.6762, 139.6503], size: 0.05 },
              { location: [1.3521, 103.8198], size: 0.04 },
              { location: [-23.5505, -46.6333], size: 0.05 },
              { location: [19.076, 72.8777], size: 0.04 },
              { location: [-26.2041, 28.0473], size: 0.04 },
            ],
          }}
        />
      </div>

      {payouts.map((p) => (
        <div
          key={p.label}
          className={`pointer-events-none absolute ${p.className} flex items-center gap-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-2.5 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.45)]`}
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400/60 animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-medium text-white/90 tabular-nums">
            {p.amount}
          </span>
          <span className="text-[11px] text-white/55">{p.label}</span>
        </div>
      ))}
    </div>
  );
}
