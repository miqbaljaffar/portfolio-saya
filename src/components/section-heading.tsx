"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Optional highlight — word(s) rendered with a wavy underline */
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  /** Legacy prop — no longer used visually but kept for back-compat */
  number?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const eyebrowEl = el.querySelector(".sh-eyebrow");
    const titleEl   = el.querySelector(".sh-title");
    const descEl    = el.querySelector(".sh-desc");

    const targets = [eyebrowEl, titleEl, descEl].filter(Boolean);
    gsap.set(targets, { opacity: 0, y: 24 });
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.72,
      ease: "power4.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });
  }, { scope: ref });

  const alignClasses = align === "left"
    ? "text-left mx-0 items-start"
    : "text-center mx-auto items-center";

  return (
    <div
      ref={ref}
      className={`max-w-3xl mb-10 sm:mb-14 md:mb-18 space-y-3 flex flex-col ${alignClasses}`}
    >
      {eyebrow && (
        <div className="sh-eyebrow">
          <span className="eyebrow-pill">{eyebrow}</span>
        </div>
      )}

      <h2 className={`sh-title font-display font-extrabold text-[#0A0A0A] dark:text-[#F8F7F4] leading-[1.08] tracking-[-0.025em] text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]`}>
        {title}
      </h2>

      {description && (
        <p className={`sh-desc text-[#6B6B6B] dark:text-[#9B9A96] text-sm md:text-[15px] leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
