"use client";

import dynamic from "next/dynamic";

export const TechMarqueeClient = dynamic(
  () => import("@/components/tech-marquee").then((mod) => mod.TechMarquee),
  { ssr: false }
);
