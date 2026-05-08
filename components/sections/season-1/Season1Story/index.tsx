import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const paragraphs = [
  "There are a lot of people out there who are just naturally good at selling. Not in a pushy way, just... they know how to talk to people. They know how to connect, how to read a room, how to make things happen.",
  "And honestly, a lot of them are in the wrong place right now. Talent is being undervalued sitting behind a register, a delivery route, or a desk they were never meant to sit at.",
  "Things are shifting. AI is taking over a lot of roles, companies are tightening margins, and it feels like the people in the middle are getting squeezed the most. The ones who can actually produce, sometimes end up stuck.",
  "So that talent just sits there. Gets wasted in jobs that don't really make sense for them.",
  "That's really why Firstline exists.",
  "It's a platform built around selling. It connects people who are good at it with businesses that actually need it. Nothing complicated. You get access to products, you understand what you're making, and when you close something, you get paid...instantly.",
  "No chasing someone down. No confusion around commissions. No weird setups or backdooring.",
  "You don't need inventory, you don't need upfront money, and you don't need to know the \"right\" people. If you can sell, there's finally a place to just... do that.",
];

export default function Season1Story() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="[--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto flex flex-col gap-15 lg:max-w-[53.25rem]">
          <Reveal>
            <Heading as="h2" className="text-black">
              The Story
            </Heading>
          </Reveal>
          <StaggerGroup className="flex flex-col gap-6">
            {paragraphs.map((text) => (
              <StaggerItem
                as="p"
                key={text.slice(0, 40)}
                className="text-xl text-[#686868]"
              >
                {text}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
