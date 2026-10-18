import { Download, Monitor, Smartphone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

const platformCards = [
  {
    title: "Windows available",
    description:
      "Windows 10 or 11 (64-bit) and any webcam. A free, roughly 95 MB installer, with no admin rights needed.",
    icon: Monitor,
  },
  {
    title: "Android & iOS roadmap",
    description:
      "Mobile platform support is part of the future expansion plan for broader hands-free control access.",
    icon: Smartphone,
  },
];

export function DownloadSection() {
  return (
    <section id="download" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="visimove-container">
        <GlassPanel className="relative overflow-hidden px-5 py-9 sm:px-10 sm:py-14">
          <span className="pointer-events-none absolute inset-0">
            <span className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
            <span className="absolute bottom-0 right-[10%] h-44 w-44 rounded-full bg-violet-500/12 blur-3xl" />
            <span className="absolute left-[8%] top-[45%] h-36 w-36 rounded-full bg-blue-500/10 blur-3xl" />
          </span>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <Reveal y={24}>
              <SectionHeading
                eyebrow="Download"
                title="Take control with VisiMove"
                description="Install VisiMove, calibrate once in about 30 seconds, and start controlling your computer with your eyes."
                align="center"
              />
            </Reveal>

            <Reveal delay={100} y={24}>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <AnimatedButton
                  href="https://github.com/AliButt03/visimove-desktop/releases/latest/download/VisiMove-Setup.exe"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Download .exe
                </AnimatedButton>

                <AnimatedButton href="#about" variant="secondary" className="w-full sm:w-auto">
                  Learn more
                </AnimatedButton>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
              {platformCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <Reveal key={card.title} delay={index * 120} y={26}>
                    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] p-5 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_16px_40px_rgba(55,120,255,0.12)] sm:p-6">
                      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(110,231,255,0.08),transparent_50%,rgba(139,92,246,0.07))]" />
                      </span>

                      <span className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />

                      <div className="relative z-10">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                          <Icon className="h-5 w-5" />
                        </span>

                        <h3 className="mt-5 text-lg font-semibold text-white">
                          {card.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-white/65">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={220} y={18}>
              <div className="mt-8 flex justify-center">
                <div className="group relative inline-flex max-w-full items-start gap-2 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.05)_100%)] px-4 py-3 text-left text-xs leading-5 text-white/75 shadow-[0_10px_28px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:text-white sm:items-center sm:rounded-full sm:py-2 sm:text-center">
                  <span className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />
                  <Download className="relative z-10 mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300 sm:mt-0" />
                  <span className="relative z-10">
                    Windows may show a SmartScreen notice for new apps: choose More info, then Run anyway
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
