import { MousePointer2, ScanEye, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

const aboutCards = [
  {
    title: "Eye-driven interaction",
    description:
      "Your eyes become the pointer. A webcam and a 30-second calibration are all VisiMove needs to follow where you look.",
    icon: ScanEye,
  },
  {
    title: "Intent into motion",
    description:
      "Rest your gaze on something to select it. A magnified view makes small targets like taskbar icons easy to hit.",
    icon: MousePointer2,
  },
  {
    title: "Accessible by design",
    description:
      "Designed for people with paralysis and limited mobility, so the whole flow works without touching a mouse or keyboard.",
    icon: Sparkles,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="visimove-container">
        <Reveal y={24}>
          <SectionHeading
            eyebrow="What is VisiMove"
            title="A more human way to control the screen"
            description="VisiMove is a final-year project that makes hands-free computer control affordable: no eye-tracking hardware, no subscription, no internet connection. Just your webcam and your eyes."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delay={index * 120} y={28}>
                <GlassPanel className="group relative h-full overflow-hidden px-5 py-5 transition-transform duration-300 hover:-translate-y-1 sm:px-6 sm:py-6">
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(110,231,255,0.08),transparent_45%,rgba(96,165,250,0.08))]" />
                  </span>

                  <div className="relative z-10">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {card.description}
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
