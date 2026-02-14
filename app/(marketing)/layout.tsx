import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PatternBg } from "@/components/ui/pattern-bg";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh isolate flex grow flex-col relative bg-backgorund text-foreground">
      <PatternBg />
      <Header />
      <main className="pt-(--navbar-height) relative max-w-screen overflow-x-clip">
        {children}
      </main>
      <Footer />
    </div>
  );
}
