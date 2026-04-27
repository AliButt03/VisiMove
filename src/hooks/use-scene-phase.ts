"use client";

import { useEffect, useState } from "react";

export type SceneSection =
  | "hero"
  | "about"
  | "how-it-works"
  | "features"
  | "technology"
  | "download";

type ScenePhase = {
  section: SceneSection;
  sectionProgress: number;
  globalProgress: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getSectionRange(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const top = window.scrollY + rect.top;
  const height = rect.height;
  return { top, height };
}

export function useScenePhase(): ScenePhase {
  const [phase, setPhase] = useState<ScenePhase>({
    section: "hero",
    sectionProgress: 0,
    globalProgress: 0,
  });

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const ids: SceneSection[] = [
        "hero",
        "about",
        "how-it-works",
        "features",
        "technology",
        "download",
      ];

      const viewportCenter = window.scrollY + window.innerHeight * 0.5;
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const globalProgress =
        totalScrollable <= 0
          ? 0
          : clamp(window.scrollY / totalScrollable, 0, 1);

      let activeSection: SceneSection = "hero";
      let activeProgress = 0;

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { top, height } = getSectionRange(element);
        const start = top;
        const end = top + height;

        if (viewportCenter >= start && viewportCenter <= end) {
          activeSection = id;
          activeProgress =
            height <= 0
              ? 0
              : clamp((viewportCenter - start) / height, 0, 1);
          break;
        }

        if (viewportCenter > end) {
          activeSection = id;
          activeProgress = 1;
        }
      }

      setPhase({
        section: activeSection,
        sectionProgress: activeProgress,
        globalProgress,
      });

      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return phase;
}