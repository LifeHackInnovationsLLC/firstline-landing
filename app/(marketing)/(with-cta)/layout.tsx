import CTA from "@/components/layout/cta";

export default function WithCTALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <CTA />
    </>
  );
}
