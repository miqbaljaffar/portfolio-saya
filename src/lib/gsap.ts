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
import { useGSAP } from "@gsap/react";

// Register plugins once (GSAP deduplicates repeated calls)
gsap.registerPlugin(ScrollTrigger, useGSAP);

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
export { gsap, ScrollTrigger, useGSAP };
