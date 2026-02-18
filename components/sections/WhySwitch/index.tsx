import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/layout/section";
import { WhySwitchList } from "./why-switch-list";

export default function WhySwitch() {
  return (
    <Section id="why-switch" className="bg-gray">
      <div className="container">
        <div className="[--why-switch-content-width:28rem] lg:[--why-switch-content-width:100%] max-w-(--why-switch-content-width) mx-auto lg:mx-0 flex flex-col gap-8 lg:gap-15">
          <Heading as="h2" className="text-left text-balance text-black">
            Why people switch to Firstline?
          </Heading>
          <WhySwitchList />
        </div>
      </div>
    </Section>
  );
}
