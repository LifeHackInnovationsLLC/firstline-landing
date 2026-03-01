import { Section } from "@/components/layout/section";

const content = {
  stats: [
    { value: "$0", label: "Upfront Cost" },
    { value: "80%+", label: "Commission Rate" },
    { value: "5 Min", label: "To submit a lead" },
  ],
};

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

export function AffiliatesStats() {
  return (
    <Section id="affiliates-stats" className="pt-5 bg-gray">
      <div className="container">
        <div className="w-full grid grid-cols-1 items-center lg:grid-cols-3 gap-6 lg:gap-0 py-16">
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-row justify-center items-center gap-4"
            >
              <StatDivider />
              <div className="flex flex-col gap-1">
                <span className="text-black text-2xl lg:text-3xl font-semibold">
                  {stat.value}
                </span>
                <span className="text-black/50 text-base lg:text-xl font-semibold">
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
