import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
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
        <Heading as="h2" align="center" className="text-black text-balance">
          {content.title}
        </Heading>
        <div className="relative mt-8 lg:mt-15 rounded-3xl border border-white/10 overflow-hidden">
          <Image
            src={cdn(images.shared.comparisonSectionBg, { width: 1400 })}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover pointer-events-none"
            unoptimized
          />
          <table className="relative z-10 w-full">
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
        </div>
      </div>
    </Section>
  );
}
