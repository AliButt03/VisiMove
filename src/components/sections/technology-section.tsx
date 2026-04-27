import {
  Brain,
  Lock,
  MonitorCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

const trustItems = [
  {
    title: "AI-powered tracking pipeline",
    description:
      "The interaction model is designed around eye movement interpretation and practical gaze-driven response logic.",
    icon: Brain,
  },
  {
    title: "Desktop stability first",
    description:
      "Phase one prioritizes a reliable Windows experience before expanding toward broader platform support.",
    icon: MonitorCog,
  },
  {
    title: "Accessibility-led engineering",
    description:
      "The system direction is shaped by usability, clarity, and meaningful assistive interaction rather than gimmick-based motion.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable system design",
    description:
      "The frontend and product structure are being built in a way that supports future platform growth and feature expansion.",
    icon: Workflow,
  },
  {
    title: "Purposeful product vision",
    description:
      "Every interface and motion decision is aligned with the goal of turning eye intent into practical digital control.",
    icon: Sparkles,
  },
  {
    title: "Privacy-conscious direction",
    description:
      "The trust layer should communicate responsible handling of tracking-related interaction systems as the product evolves.",
    icon: Lock,
  },
];

export function TechnologySection() {
  return (
    <section id="technology" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="visimove-container">
        <Reveal y={24}>
          <SectionHeading
            eyebrow="Technology & trust"
            title="Built with precision, shaped for real use"
            description="VisiMove should feel advanced, but also trustworthy. This section communicates the engineering mindset, accessibility direction, and product maturity behind the experience."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-2">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 90} y={24}>
                <GlassPanel className="group relative h-full overflow-hidden px-5 py-5 transition-all duration-300 hover:-translate-y-1 sm:px-6 sm:py-6">
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(110,231,255,0.12),transparent_45%)]" />
                  </span>

                  <div className="relative z-10 flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-start">
                    <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-white/68">
                        {item.description}
                      </p>
                    </div>
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
