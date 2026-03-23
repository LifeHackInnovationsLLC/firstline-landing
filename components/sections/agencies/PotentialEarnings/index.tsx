import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { cdn, images } from "@/lib/cdn";

export function PotentialEarnings() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="flex flex-col items-center text-center [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Heading as="h2" align="center" className="text-black">
            Potential earnings
          </Heading>
          <div className="mt-8 lg:mt-15">
            <Image
              src={cdn(images.agencies.potentialEarnings)}
              alt="Potential earnings"
              width={800}
              height={600}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <p className="mt-4 lg:mt-5 text-text-secondary text-sm max-w-2xl">
            Commissions vary based on client processing volume. Higher volume =
            higher commissions.
          </p>
        </div>
      </div>
    </Section>
  );
}
