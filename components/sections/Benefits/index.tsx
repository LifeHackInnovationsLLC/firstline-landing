import { Heading } from "@/components/ui/heading";
import { Bento } from "./bento";
import { Stats } from "../Hero/stats";
export default function Benefits() {
  return (
    <section id="benefits" className="py-25 pt-5 bg-gray">
      <div className="container">
        <Stats />
        <Heading as="h2" className="text-left text-balance text-black">
          The benefits <br /> that set us apart
        </Heading>
        <Bento />
        <p className="text-center text-text-secondary w-full mt-8">
          No contracts. No inventory. No upfront cost.
        </p>
      </div>
    </section>
  );
}
