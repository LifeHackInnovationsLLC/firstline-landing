import CTA from "@/components/layout/cta";
import FAQ from "@/components/sections/shared/FAQ";

export default function WithFAQCTALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <FAQ />
      <CTA />
    </>
  );
}
