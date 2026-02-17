import { Heading } from "@/components/ui/heading";
import { WhySwitchList } from "./why-switch-list";

export default function WhySwitch() {
  return (
    <section id="why-switch" className="py-25 bg-gray pt-15">
      <div className="container flex flex-col gap-15">
        <Heading as="h2" className="text-left text-balance text-black">
          Why people switch to Firstline?
        </Heading>
        <WhySwitchList />
      </div>
    </section>
  );
}
