import { Section } from "@/components/layout/section";

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  id?: string;
  stats: Stat[];
  className?: string;
}

function StatDivider({ className }: { className?: string }) {
  return (
    <svg
      width="2"
      height="79"
      viewBox="0 0 2 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.584351 0L0.584354 79"
        stroke="black"
        strokeOpacity="0.06"
        strokeWidth="1.16873"
      />
      <path
        d="M0.584351 0L0.584352 37"
        stroke="black"
        strokeOpacity="0.5"
        strokeWidth="1.16873"
      />
    </svg>
  );
}

export function Stats({ id, stats, className }: StatsProps) {
  return (
    <Section id={id} className={`pt-5 bg-gray ${className ?? ""}`}>
      <div className="container">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 items-center gap-0 py-8 lg:py-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-row justify-center items-center gap-2 lg:gap-4"
            >
              <StatDivider className="hidden sm:block" />
              <div className="flex flex-col gap-1 items-center lg:items-start">
                <span className="text-black text-lg lg:text-3xl font-semibold">
                  {stat.value}
                </span>
                <span className="text-black/50 text-xs lg:text-xl font-semibold">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
