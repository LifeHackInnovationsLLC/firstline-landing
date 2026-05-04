import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { AudiencesList } from "./audiences-list";

export default function Audiences() {
  return (
    <Section id="audiences" className="bg-gray overflow-hidden">
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Reveal>
            <Heading as="h2" className="text-left text-balance text-black">
              Find your role, Start earning
            </Heading>
          </Reveal>
          <AudiencesList />
        </div>
      </div>
    </Section>
  );
}
