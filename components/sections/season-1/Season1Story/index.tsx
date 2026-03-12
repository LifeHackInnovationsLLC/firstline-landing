import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";

const paragraphs = [
  "There are millions of people out there with real talent. People who can sell. People who can connect. People who can walk into a room and make things happen.",
  "But nobody gave them a shot. No fancy degree. No corporate network. No six months of unpaid internships. Just raw ability — sitting there, going to waste behind a register, a delivery route, a desk they were never meant to sit at.",
  'The system wasn\'t built for them. It was built for people who already had the connections, the capital, the head start. Everyone else? Told to wait their turn. Told to be grateful. Told that "this is just how it works."',
  "We didn't accept that.",
  "Firstline was built for the overlooked. The hustlers. The ones who've been selling since they were kids — whether it was candy at school, ideas at work, or themselves in every job interview that led nowhere. We built a platform where that energy finally has a place to go.",
  "No inventory. No upfront costs. No gatekeepers. You learn the product, you talk to businesses, and you earn. Real commissions. Real residuals. A real business that belongs to you.",
  "Season 1 is where it starts.",
  "Every course you finish, every merchant you bring on, every person you invite into the network — it all counts. Your XP isn't just a number. It's proof that you showed up. That you bet on yourself when nobody else would.",
  "This is for the people who were always one opportunity away from changing everything. This is that opportunity.",
];

export default function Season1Story() {
  return (
    <Section className="bg-gray">
      <div className="container">
        <div className="max-w-[53.25rem] mx-auto flex flex-col gap-15">
          <Heading as="h2" className="text-black">
            The Story
          </Heading>
          <div className="flex flex-col gap-6">
            {paragraphs.map((text) => (
              <p key={text.slice(0, 40)} className="text-xl text-[#686868]">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
