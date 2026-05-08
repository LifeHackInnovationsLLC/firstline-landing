import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Reveal, RevealScale } from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";

const content = {
  title: "Old affiliate model vs Firstline",
  headers: ["Feature", "Traditional", "Firstline"],
  rows: [
    {
      feature: "Commission Visibility",
      traditional: "Promo code tracking",
      firstline: "Full real-time dashboard",
    },
    {
      feature: "Payment Timing",
      traditional: "Net 30-90 days",
      firstline: "Instant at sale",
    },
    {
      feature: "Revenue Basis",
      traditional: "Unclear (gross vs net)",
      firstline: "Transparent split",
    },
    {
      feature: "Contract Terms",
      traditional: "Complex, changeable",
      firstline: "Clear, verifiable",
    },
    {
      feature: "Dispute Resolution",
      traditional: "Hope for the best",
      firstline: "Blockchain-verified",
    },
    {
      feature: "Downline Management",
      traditional: "Manual tracking",
      firstline: "Built-in tools",
    },
    {
      feature: "Payout Options",
      traditional: "Wire or check",
      firstline: "100+ methods",
    },
  ],
};

export function AffiliatesComparison() {
  return (
    <Section id="affiliates-comparison" className="bg-gray">
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Reveal>
            <Heading as="h2" align="center" className="text-black text-balance">
              {content.title}
            </Heading>
          </Reveal>
          <RevealScale className="relative mt-10 lg:mt-15 rounded-3xl border border-white/10 overflow-hidden">
            <Image
              src={cdn(images.shared.comparisonSectionBg, { width: 1400 })}
              alt=""
              aria-hidden="true"
              fill
              className="object-cover pointer-events-none"
              unoptimized
            />
            {/* Mobile: stacked cards */}
            <ul className="relative z-10 flex flex-col divide-y divide-white/5 md:hidden">
              {content.rows.map((row) => (
                <li key={row.feature} className="px-5 py-4">
                  <p className="text-white text-sm font-semibold">
                    {row.feature}
                  </p>
                  <dl className="mt-3 grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <dt className="text-[11px] uppercase tracking-wide text-white/40 font-medium">
                        Traditional
                      </dt>
                      <dd className="text-xs text-white/50">
                        {row.traditional}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-[11px] uppercase tracking-wide text-white/40 font-medium">
                        Firstline
                      </dt>
                      <dd className="text-xs text-white font-semibold">
                        {row.firstline}
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>

            {/* Tablet/Desktop: table */}
            <table className="relative z-10 w-full hidden md:table">
              <thead>
                <tr className="border-b border-white/10">
                  {content.headers.map((header) => (
                    <th
                      key={header}
                      className="text-left text-white text-xs lg:text-sm font-semibold pt-4 pb-3 lg:pt-8 lg:pb-5 px-4 lg:px-10 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-white/10"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-white/5 last:border-b-0"
                  >
                    <td className="py-3 lg:py-5 text-white text-xs lg:text-sm font-semibold px-4 lg:px-10 border-r border-white/10">
                      {row.feature}
                    </td>
                    <td className="py-3 lg:py-5 text-white/40 text-xs lg:text-sm px-4 lg:px-10 border-r border-white/10">
                      {row.traditional}
                    </td>
                    <td className="py-3 lg:py-5 text-white text-xs lg:text-sm font-semibold px-4 lg:px-10">
                      {row.firstline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </RevealScale>
        </div>
      </div>
    </Section>
  );
}
