import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { FAQList } from "./faq-list";

export default function FAQ() {
  return (
    <section id="faq" className="py-25 bg-gray">
      <div className="container">
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-20">
          <div className="flex-1 flex flex-col gap-5 lg:self-start">
            <Heading as="h2" className="text-left text-balance text-black">
              Frequently Asked <br /> Questions
            </Heading>
            <p className="text-left max-w-md w-full text-text-secondary">
              Can't find the answer you're looking for? Don't worry, we're here
              to help
            </p>
            <Button
              className="w-fit mt-5"
              variant="primary"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Contact Us
            </Button>
          </div>
          <div className="flex-1">
            <FAQList />
          </div>
        </div>
      </div>
    </section>
  );
}
