import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { WhySwitchList } from "./why-switch-list";

export default function WhySwitch() {
  return (
    <Section id="why-switch" className="bg-gray">
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none flex flex-col gap-8 lg:gap-15">
          <Heading as="h2" className="text-left text-balance text-black">
            Why people switch to Firstline?
          </Heading>
          <WhySwitchList />
        </div>
      </div>
    </Section>
  );
}
