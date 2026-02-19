import Image from "next/image";
import Link from "next/link";
import dashboardPreview from "@/public/sections/process/dashboard-preview.png";
import dashboardPreviewMask from "@/public/sections/process/process-dashboard-mask.png";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
export function DashboardPreview() {
  return (
    <div className="relative overflow-hidden p-[6px] bg-[linear-gradient(162.92deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] backdrop-blur-[68.6px] rounded-[12px] w-full max-w-md mx-auto lg:max-w-none">
      {/* Mask rendered first so it's naturally below in stacking order */}
      <Image
        src={dashboardPreviewMask}
        alt=""
        aria-hidden="true"
        className="max-w-sm absolute top-0 left-0 pointer-events-none"
        sizes="24rem"
        quality={50}
      />

      <div className="bg-black/90 h-full flex flex-col lg:flex-row rounded-[6px] relative">
        <div className="max-w-2xl flex-1 px-5 flex flex-col gap-5 pt-16 pb-8">
          <Heading
            as="h3"
            size="md"
            className="text-left md:text-4xl text-balance text-white"
          >
            A dashboard that shows exactly what's happening
          </Heading>
          <p className="text-left text-balance text-white/72">
            See sales, commissions, payouts, and performance - across
            individuals, teams, and networks - in real time.
          </p>
          <Button
            variant="primary"
            className="w-fit capitalize mt-5 relative z-10 cursor-pointer"
            nativeButton={false}
            render={<Link href="/" />}
          >
            Start Earning Today
          </Button>
        </div>
        <Image
          src={dashboardPreview}
          alt="Firstline dashboard showing sales, commissions, and payouts"
          className="object-cover w-full h-full max-h-[357px] mt-4 flex-1 pl-5 lg:pl-0"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={65}
        />
      </div>
    </div>
  );
}
