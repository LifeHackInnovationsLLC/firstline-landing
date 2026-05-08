import { cdn, images } from "@/lib/cdn";

type Tile = { avatar: string; active?: boolean };

const TILES: Tile[] = [
  { avatar: "https://i.pravatar.cc/120?img=5" },
  { avatar: "https://i.pravatar.cc/120?img=8" },
  { avatar: "https://i.pravatar.cc/120?img=12", active: true },
  { avatar: "https://i.pravatar.cc/120?img=33", active: true },
  { avatar: "https://i.pravatar.cc/120?img=49", active: true },
  { avatar: "https://i.pravatar.cc/120?img=47" },
];

export function Card3Media() {
  return (
    <>
      <style>{`
        @keyframes card3-tile-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(6px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .card3-tile {
          --ease-out-strong: cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 0;
          transform: scale(0.95) translateY(6px);
          animation: card3-tile-in 420ms var(--ease-out-strong) forwards;
          transition:
            transform 220ms var(--ease-out-strong),
            box-shadow 220ms var(--ease-out-strong);
        }
        .card3-tile:nth-child(1) { animation-delay: 60ms; }
        .card3-tile:nth-child(2) { animation-delay: 110ms; }
        .card3-tile:nth-child(3) { animation-delay: 160ms; }
        .card3-tile:nth-child(4) { animation-delay: 210ms; }
        .card3-tile:nth-child(5) { animation-delay: 260ms; }
        .card3-tile:nth-child(6) { animation-delay: 310ms; }

        .card3-img {
          --ease-out-strong: cubic-bezier(0.23, 1, 0.32, 1);
          transition:
            opacity 260ms var(--ease-out-strong),
            filter 260ms var(--ease-out-strong);
        }

        @media (hover: hover) and (pointer: fine) {
          .card3-tile:hover {
            transform: scale(1.08);
            z-index: 10;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .card3-tile {
            animation: none;
            opacity: 1;
            transform: none;
            transition: opacity 200ms ease, box-shadow 200ms ease;
          }
          .card3-tile:hover {
            transform: none;
          }
          .card3-img {
            transition: opacity 200ms ease;
          }
        }
      `}</style>
      <img
        src={cdn(images.seasonBento.card3Bg)}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 flex items-start justify-center p-5 md:p-8"
        style={{
          maskImage:
            "radial-gradient(ellipse 110% 95% at 50% 0%, #000 65%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 110% 95% at 50% 0%, #000 65%, transparent 100%)",
        }}
      >
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {TILES.map((tile) => (
            <div
              key={tile.avatar}
              className={
                "card3-tile group relative aspect-square w-full max-w-24 overflow-hidden rounded-xl md:rounded-2xl bg-[#2B2C30] " +
                (tile.active
                  ? "ring-1 ring-white/25 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.45)]"
                  : "ring-1 ring-white/6 hover:ring-white/25 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.45)]")
              }
            >
              <img
                src={tile.avatar}
                alt=""
                className={
                  "card3-img h-full w-full object-cover group-hover:opacity-100 group-hover:grayscale-0 " +
                  (tile.active ? "" : "opacity-40 grayscale")
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
