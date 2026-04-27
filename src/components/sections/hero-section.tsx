"use client";

import { useRef } from "react";
import { HeroScrollChoreography } from "@/components/motion/hero-scroll-choreography";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlassTag } from "@/components/ui/glass-tag";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const panelTopRef = useRef<HTMLDivElement | null>(null);
  const panelRightRef = useRef<HTMLDivElement | null>(null);
  const panelBottomRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-24"
    >
      <HeroScrollChoreography
        sectionRef={sectionRef}
        contentRef={contentRef}
        panelTopRef={panelTopRef}
        panelRightRef={panelRightRef}
        panelBottomRef={panelBottomRef}
      />

      <div className="visimove-container relative z-10">
        <div className="grid min-h-[calc(100svh-10rem)] items-center gap-10 sm:min-h-[78vh] lg:grid-cols-[1fr_1fr]">
          <div
            ref={contentRef}
            className="relative z-20 max-w-3xl text-center will-change-transform-opacity sm:text-left"
          >
            <Reveal delay={0}>
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-cyan-200/75 sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
                VisiMove
              </p>
            </Reveal>

            <Reveal delay={90} y={30}>
              <div className="overflow-hidden">
                <h1 className="hero-title mx-auto max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:mx-0 sm:text-6xl sm:leading-[0.92] lg:text-7xl xl:text-[6.1rem]">
                  <span className="hero-line block">Control the screen</span>
                  <span className="hero-line text-gradient block">with your eyes</span>
                </h1>
              </div>
            </Reveal>

            <Reveal delay={170} y={26}>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/72 sm:mx-0 sm:mt-6 sm:text-base">
                VisiMove is a cinematic, accessibility-focused interface built to
                turn eye movement into cursor control, scrolling, and click
                interaction for a more human digital experience.
              </p>
            </Reveal>

            <Reveal delay={250} y={22}>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
                <AnimatedButton href="#download" variant="primary" className="w-full sm:w-auto">
                  Download for Windows
                </AnimatedButton>

                <AnimatedButton href="#about" variant="secondary" className="w-full sm:w-auto">
                  Explore the Vision
                </AnimatedButton>
              </div>
            </Reveal>

            <Reveal delay={330} y={18}>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:justify-start">
                <GlassTag label="Accessibility-first" />
                <GlassTag label="ML-powered eye tracking" />
                <GlassTag label="Windows phase one" />
              </div>
            </Reveal>
          </div>

          <div className="relative hidden min-h-[620px] lg:block">
            <div className="absolute inset-0">
              <div className="absolute left-[10%] top-[8%] h-[80%] w-[80%] rounded-[42px] border border-white/8 bg-white/[0.015]" />
            </div>

            <div
              ref={panelTopRef}
              className="hero-float-slow absolute left-[14%] top-[9%] z-20 will-change-transform-opacity"
            >
              <div className="rounded-full border border-cyan-200/10 bg-white/[0.045] px-4 py-3 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/58">
                  Real-time gaze intent
                </p>
              </div>
            </div>

            <div
              ref={panelRightRef}
              className="hero-float-medium absolute left-[55%] top-[40%] z-20 will-change-transform-opacity"
            >
              <div className="rounded-[22px] border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                  Platform focus
                </p>
                <p className="mt-2 text-sm text-white/75">Windows desktop</p>
              </div>
            </div>

            <div
              ref={panelBottomRef}
              className="hero-float-fast absolute left-[25%] top-[65%] z-20 will-change-transform-opacity"
            >
              <div className="rounded-[22px] border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                  Interaction layer
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Scroll, select, click
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
