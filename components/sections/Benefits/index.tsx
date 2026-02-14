import { Heading } from "@/components/ui/heading";
import { Bento } from "./bento";

export default function Benefits() {
  return (
    <section id="benefits" className="py-25 bg-gray">
      <div className="container">
        <Heading as="h2" className="text-center text-balance text-black">
          The benefits <br /> that set us apart
        </Heading>
        <Bento />
      </div>
    </section>
  );
}
