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
    title: "MediaPipe face tracking",
    description:
      "478 face and iris landmarks per frame feed a gaze model trained on your own calibration, in real time on the CPU.",
    icon: Brain,
  },
  {
    title: "Smooth, steady cursor",
    description:
      "One Euro filtering and fixation hold remove eye jitter, so the cursor stays calm while you read or aim.",
    icon: MonitorCog,
  },
  {
    title: "Safety built in",
    description:
      "The cursor pauses when your face leaves the camera view or tracking becomes unreliable, and tracking starts paused.",
    icon: ShieldCheck,
  },
  {
    title: "Calibrated to you",
    description:
      "Calibration checks itself on hidden test points and only replaces your profile when the new one is better.",
    icon: Workflow,
  },
  {
    title: "Lightweight",
    description:
      "Runs smoothly on an ordinary laptop. No GPU, no eye-tracking hardware, no Python install.",
    icon: Sparkles,
  },
  {
    title: "Offline and private",
    description:
      "No account, no cloud, no internet connection needed. Calibration data stays in your Windows user folder.",
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
            description="Proven computer-vision building blocks, tuned through live testing for steady, safe and private hands-free control."
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
