import { PlayArrow } from "@/components/icons/play-arrow";
import { AgentsBento } from "@/components/sections/agents/AgentsBento";
import { AgentsGlobal } from "@/components/sections/agents/AgentsGlobal";
import { AgentsHeroBackdrop } from "@/components/sections/agents/AgentsHeroBackdrop";
import { AgentsShareLeads } from "@/components/sections/agents/AgentsShareLeads";
import { AgentsSteps } from "@/components/sections/agents/AgentsSteps";
import { TheBottomLine } from "@/components/sections/agents/TheBottomLine";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Stats } from "@/components/sections/shared/Stats";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Agents — The Ultimate Side Hustle",
  description:
    "Turn payment processing volume into recurring monthly income with Firstline. Join as an agent, earn real-time commissions, and build a sustainable revenue stream.",
  path: "/agents",
  keywords: [
    "sales agent commission",
    "agent side hustle",
    "recurring commission income",
    "payment processing agent",
  ],
});

const heroContent = {
  title: "The ultimate side hustle",
  description:
    "Start selling a full library of products today. From standard offerings to industry-insider opportunities like payment processing, you're not stuck in one lane. What used to be locked behind connections is now open, and every deal you close can turn into ongoing income.",
  ctas: [
    {
      label: "Start Earning Today",
      href: "/agents/get-started",
      variant: "primary" as const,
    },
    {
      label: "Watch Training",
      href: "/agents/training",
      variant: "dark" as const,
      icon: <PlayArrow className="size-3 ml-2 mt-1" />,
    },
  ],
};

const stats = [
  { value: "$0", label: "Upfront Cost" },
  { value: "80%+", label: "Commission Rate" },
  { value: "5 Min", label: "To submit a lead" },
];

export default function AgentsPage() {
  return (
    <>
      <PageHero
        id="agents"
        {...heroContent}
        align="bottom"
        className="relative overflow-hidden min-h-175 -mt-(--navbar-height) pt-(--navbar-height)"
        decorations={<AgentsHeroBackdrop />}
      />
      <Stats stats={stats} />
      <AgentsBento />
      <AgentsSteps />
      <AgentsShareLeads />
      <AgentsGlobal />
      <TheBottomLine />
    </>
  );
}
