"use client";
/**
 * Central GSAP setup — register all plugins here so they're only
 * registered once across the entire app.
 *
 * Must be "use client" because useGSAP is a React hook.
 * Import from this file instead of directly from "gsap" whenever
 * you need ScrollTrigger, useGSAP, or shared easing constants.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP as useGSAPCore } from "@gsap/react";

// Register plugins once (GSAP deduplicates repeated calls)
gsap.registerPlugin(ScrollTrigger, useGSAPCore);

type UseGSAPCallback = Parameters<typeof useGSAPCore>[0];
type UseGSAPDependencies = Parameters<typeof useGSAPCore>[1];

export function useGSAP(
  callback?: UseGSAPCallback,
  dependencies?: UseGSAPDependencies
) {
  if (typeof callback !== "function") {
    return useGSAPCore(callback, dependencies);
  }

  return useGSAPCore((context, contextSafe) => {
    const motionQuery = gsap.matchMedia();
    motionQuery.add(
      "(prefers-reduced-motion: no-preference)",
      () => callback(context, contextSafe)
    );

    return () => motionQuery.revert();
  }, dependencies);
}

// ─── Shared easing constants ─────────────────────────────────────
export const EASE_OUT_EXPO = "power4.out";
export const EASE_IN_OUT   = "power2.inOut";
export const EASE_OUT      = "power2.out";

// ─── Default ScrollTrigger config ────────────────────────────────
export const ST_DEFAULTS = {
  start: "top 85%",
  once: true,
} as const;

// ─── Re-export everything consumers need ─────────────────────────
export { gsap, ScrollTrigger };
