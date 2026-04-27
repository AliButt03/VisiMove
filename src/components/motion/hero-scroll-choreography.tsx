"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type HeroScrollChoreographyProps = {
  sectionRef: RefObject<HTMLElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
  panelTopRef: RefObject<HTMLDivElement | null>;
  panelRightRef: RefObject<HTMLDivElement | null>;
  panelBottomRef: RefObject<HTMLDivElement | null>;
};

gsap.registerPlugin(ScrollTrigger);

export function HeroScrollChoreography({
  sectionRef,
  contentRef,
  panelTopRef,
  panelRightRef,
  panelBottomRef,
}: HeroScrollChoreographyProps) {
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const topPanel = panelTopRef.current;
    const rightPanel = panelRightRef.current;
    const bottomPanel = panelBottomRef.current;

    if (!section || !content || !topPanel || !rightPanel || !bottomPanel) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      timeline
        .to(
          content,
          {
            y: -48,
            opacity: 0.22,
            scale: 0.96,
          },
          0
        )
        .to(
          topPanel,
          {
            y: -28,
            opacity: 0.18,
          },
          0
        )
        .to(
          rightPanel,
          {
            y: -14,
            x: 10,
            opacity: 0.18,
          },
          0
        )
        .to(
          bottomPanel,
          {
            y: 26,
            opacity: 0.18,
          },
          0
        );
    }, section);

    return () => ctx.revert();
  }, [sectionRef, contentRef, panelTopRef, panelRightRef, panelBottomRef]);

  return null;
}