import Image from "next/image";
import { Globe } from "@/components/ui/globe";
import { cdn, images } from "@/lib/cdn";

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
      <div className="pointer-events-none aspect-square w-[110%] translate-y-[18%] sm:w-[90%] lg:w-[80%]">
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
            markerColor: [0.38, 0.88, 0.41],
            glowColor: [0.2, 0.45, 0.25],
            markers: [
              { location: [40.7128, -74.006], size: 0.08 },
              { location: [51.5074, -0.1278], size: 0.08 },
              { location: [48.8566, 2.3522], size: 0.06 },
              { location: [35.6762, 139.6503], size: 0.08 },
              { location: [1.3521, 103.8198], size: 0.06 },
              { location: [-33.8688, 151.2093], size: 0.06 },
              { location: [-23.5505, -46.6333], size: 0.08 },
              { location: [19.4326, -99.1332], size: 0.07 },
              { location: [25.2048, 55.2708], size: 0.05 },
              { location: [19.076, 72.8777], size: 0.07 },
              { location: [39.9042, 116.4074], size: 0.07 },
              { location: [-26.2041, 28.0473], size: 0.05 },
            ],
          }}
        />
      </div>
    </div>
  );
}
