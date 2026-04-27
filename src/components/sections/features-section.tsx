import {
  Eye,
  Monitor,
  MousePointerClick,
  Move,
  ScrollText,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "Eye-based cursor navigation",
    description:
      "Translate gaze direction into practical cursor movement with a clean and intuitive interaction layer.",
    icon: Move,
  },
  {
    title: "Intent-driven scrolling",
    description:
      "Navigate vertically through content using eye-based control patterns designed for fluid screen movement.",
    icon: ScrollText,
  },
  {
    title: "Click through gaze logic",
    description:
      "Enable click-style interaction through intentional eye gestures and selection-focused control behavior.",
    icon: MousePointerClick,
  },
  {
    title: "Accessibility-first experience",
    description:
      "Built around real accessibility needs for users with paralysis and severe mobility limitations.",
    icon: Eye,
  },
  {
    title: "Desktop-first deployment",
    description:
      "Phase one is focused on a Windows desktop experience optimized for stability and practical usability.",
    icon: Monitor,
  },
  {
    title: "Future platform expansion",
    description:
      "The long-term roadmap includes Android and iOS support for broader hands-free control access.",
    icon: Smartphone,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="visimove-container">
        <Reveal y={24}>
          <SectionHeading
            eyebrow="Capabilities"
            title="Built for meaningful digital control"
            description="VisiMove is not just a concept interface. Its product direction is focused on real cursor behavior, scrolling, selection, and accessible interaction design."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 90} y={28}>
                <GlassPanel className="group relative h-full overflow-hidden px-5 py-5 transition-all duration-300 hover:-translate-y-1 sm:px-6 sm:py-6">
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(110,231,255,0.1),transparent_48%,rgba(139,92,246,0.08))]" />
                  </span>

                  <div className="relative z-10">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {feature.description}
                    </p>
                  </div>
                </GlassPanel>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
