import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { cdn, images } from "@/lib/cdn";

export function DashboardPreview() {
  return (
    <Reveal className="relative overflow-hidden p-[6px] bg-[linear-gradient(162.92deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] rounded-[12px] w-full [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
      {/* Mask rendered first so it's naturally below in stacking order */}
      <Image
        src={cdn(images.process.dashboardMask, { width: 400 })}
        alt=""
        aria-hidden="true"
        width={400}
        height={300}
        className="max-w-sm absolute top-0 left-0 pointer-events-none"
        unoptimized
      />

      <div className="bg-black/90 h-full flex flex-col lg:flex-row rounded-[6px] relative">
        <div className="max-w-2xl flex-1 px-5 flex flex-col gap-5 pt-8 lg:pt-16 pb-8">
          <Heading
            as="h3"
            size="md"
            className="text-left md:text-4xl text-balance text-white"
          >
            A dashboard that shows exactly what&apos;s happening
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
          src={cdn(images.process.dashboardPreview, { width: 1440 })}
          alt="Firstline dashboard showing sales, commissions, and payouts"
          width={1440}
          height={800}
          className="object-cover w-full h-full max-h-[357px] mt-4 flex-1 pl-5 lg:pl-0"
          unoptimized
        />
      </div>
    </Reveal>
  );
}
