import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";

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
    <Section id="affiliates-comparison" className="py-20 bg-gray">
      <div className="container">
        <Heading as="h2" className="text-black text-center text-balance">
          {content.title}
        </Heading>
        <div className="mt-15 rounded-3xl bg-card-dark p-10 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                {content.headers.map((header) => (
                  <th
                    key={header}
                    className="text-left text-white/60 text-sm font-semibold pb-5 first:pl-0 px-4"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={row.feature} className="border-b border-white/5 last:border-b-0">
                  <td className="py-4 text-white text-sm font-semibold first:pl-0 px-4">
                    {row.feature}
                  </td>
                  <td className="py-4 text-white/40 text-sm px-4">
                    {row.traditional}
                  </td>
                  <td className="py-4 text-white text-sm font-semibold px-4">
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
