import { Heading } from "@/components/ui/heading";
import { AudiencesList } from "./audiences-list";

export default function Audiences() {
  return (
    <section id="audiences" className="py-25 bg-gray">
      <div className="container">
        <Heading as="h2" className="text-left text-balance text-black">
          Find your role, Start earning
        </Heading>
      </div>
      <div className="pl-5 md:pl-16 lg:pl-[max(100px,calc(50vw-620px))]">
        <AudiencesList />
      </div>
    </section>
  );
}
