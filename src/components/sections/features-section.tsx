import {
  Eye,
  Monitor,
  MousePointerClick,
  Move,
  ZoomIn,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "Gaze-controlled cursor",
    description:
      "The cursor follows your eyes and glides between targets instead of jumping, and it holds still while you look at one spot.",
    icon: Move,
  },
  {
    title: "Two-step zoom click",
    description:
      "A first dwell magnifies the area, a second zooms further, a third clicks, so even small icons are reachable.",
    icon: ZoomIn,
  },
  {
    title: "Left, double and right click",
    description:
      "Pick the click type from big buttons in the zoom view. Optional blink clicking is available for those who prefer it.",
    icon: MousePointerClick,
  },
  {
    title: "Accessibility-first experience",
    description:
      "No hands needed after setup, an on-screen position guide, and adjustable dwell time to match each user.",
    icon: Eye,
  },
  {
    title: "Private by design",
    description:
      "Everything runs on your computer. Camera images are processed locally and never uploaded anywhere.",
    icon: Monitor,
  },
  {
    title: "Future platform expansion",
    description:
      "Android and iOS versions are on the roadmap, bringing the same hands-free control to phones and tablets.",
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
            description="Everything you need to point and click with your eyes, tested on real hardware with an ordinary laptop webcam."
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
