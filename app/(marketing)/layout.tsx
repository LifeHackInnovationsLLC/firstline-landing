import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh isolate flex grow flex-col">
      <Header />
      <main className="pt-(--navbar-height) relative max-w-screen overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
