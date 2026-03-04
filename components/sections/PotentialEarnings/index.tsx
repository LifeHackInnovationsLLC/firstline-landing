import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { cdn, images } from "@/lib/cdn";

export default function PotentialEarnings() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <Heading as="h2" align="center" className="text-black">
            Potential earnings
          </Heading>
          <div className="mt-8 lg:mt-15">
            <img
              src={cdn(images.agencies.potentialEarnings)}
              alt="Potential earnings"
              className="w-full h-auto"
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
