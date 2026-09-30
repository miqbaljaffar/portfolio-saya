"use client";

/**
 * useGsapEntrance
 * ----------------
 * A reusable hook that animates a container and its children into view
 * using GSAP ScrollTrigger.
 *
 * Usage:
 *   const containerRef = useGsapEntrance();
 *   <div ref={containerRef}> ... </div>
 *
 * Or with a child selector:
 *   const containerRef = useGsapEntrance({ childSelector: ".card", stagger: 0.08 });
 */

import { useRef, useEffect } from "react";
import { gsap, EASE_OUT_EXPO, ST_DEFAULTS } from "@/lib/gsap";

export interface GsapEntranceOptions {
  /** CSS selector for child elements to stagger. If omitted, animates the container itself. */
  childSelector?: string;
  /** Stagger time between each child in seconds. Default: 0.08 */
  stagger?: number;
  /** y offset to animate from. Default: 32 */
  y?: number;
  /** Duration in seconds. Default: 0.75 */
  duration?: number;
  /** ScrollTrigger start value. Default: "top 85%" */
  start?: string;
  /** Delay before animation starts. Default: 0 */
  delay?: number;
  /** Extra vars to pass to gsap.from() */
  extra?: gsap.TweenVars;
}

export function useGsapEntrance<T extends HTMLElement = HTMLDivElement>(
  options: GsapEntranceOptions = {}
) {
  const {
    childSelector,
    stagger = 0.08,
    y = 32,
    duration = 0.75,
    start = ST_DEFAULTS.start,
    delay = 0,
    extra = {},
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = childSelector ? el.querySelectorAll(childSelector) : [el];
    if (!targets.length) return;

    // Set initial state immediately so there's no flash of visible content
    gsap.set(targets, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        ease: EASE_OUT_EXPO,
        delay,
        stagger: childSelector ? stagger : 0,
        scrollTrigger: {
          trigger: el,
          start,
          once: ST_DEFAULTS.once,
        },
        ...extra,
      });
    }, el);

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

/**
 * useGsapFadeIn
 * ---------------
 * Simpler variant — just fades in (no Y movement).
 */
export function useGsapFadeIn<T extends HTMLElement = HTMLDivElement>(
  options: Omit<GsapEntranceOptions, "y"> = {}
) {
  return useGsapEntrance<T>({ ...options, y: 0 });
}
