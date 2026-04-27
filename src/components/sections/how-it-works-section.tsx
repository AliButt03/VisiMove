import { BrainCircuit, MoveRight, ScanEye } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Track",
    description:
      "VisiMove begins by observing eye movement patterns and gaze direction through the tracking pipeline.",
    icon: ScanEye,
  },
  {
    number: "02",
    title: "Interpret",
    description:
      "The system maps user intent into meaningful interaction signals for navigation, selection, and on-screen behavior.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Control",
    description:
      "Scrolling, cursor movement, and click-style actions are translated into a practical hands-free screen experience.",
    icon: MoveRight,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="visimove-container">
        <Reveal y={24}>
          <SectionHeading
            eyebrow="How it works"
            title="From gaze to action"
            description="The first phase of VisiMove is built around a clear interaction flow: detect eye movement, interpret intent, and turn that into usable screen control."
            align="center"
          />
        </Reveal>

        <div className="relative mt-10 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} delay={index * 120} y={28}>
                <GlassPanel className="group relative h-full overflow-hidden px-5 py-6 transition-all duration-300 hover:-translate-y-1 sm:px-6 sm:py-7">
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,231,255,0.12),transparent_55%)]" />
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium tracking-[0.32em] text-cyan-300/80">
                        {step.number}
                      </span>

                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-white sm:mt-8">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/68">
                      {step.description}
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
