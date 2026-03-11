import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/layout/section";
import { AudiencesList } from "./audiences-list";

export default function Audiences() {
  return (
    <Section id="audiences" className="bg-gray">
      <div className="container">
        <div className="[--audiences-content-width:28rem] lg:[--audiences-content-width:100%] max-w-(--audiences-content-width) mx-auto lg:mx-0">
          <Heading as="h2" className="text-left text-balance text-black">
            Find your role, Start earning
          </Heading>
          <AudiencesList />
        </div>
      </div>
    </Section>
  );
}
