import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { type FAQItem, FAQList } from "./faq-list";

export default function FAQ({ faqs }: { faqs?: FAQItem[] }) {
  return (
    <Section id="faq" className="bg-gray">
      <div className="container">
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-20 [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <Reveal className="flex-1 flex flex-col items-center lg:items-start gap-5 lg:self-start">
            <Heading
              as="h2"
              className="text-center lg:text-left text-balance text-black"
            >
              Frequently Asked <br /> Questions
            </Heading>
            <p className="text-center lg:text-left max-w-md w-full text-text-secondary">
              Can&apos;t find the answer you&apos;re looking for? Don&apos;t
              worry, we&apos;re here to help
            </p>
            <Button
              className="w-fit mt-5"
              variant="primary"
              nativeButton={false}
              render={<Link href="/contact" prefetch={false} />}
            >
              Contact Us
            </Button>
          </Reveal>
          <Reveal className="flex-1" delay={0.1}>
            <FAQList faqs={faqs} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
