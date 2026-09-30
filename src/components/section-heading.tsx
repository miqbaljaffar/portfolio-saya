"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

interface SectionHeadingProps {
  number: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const eyebrowEl   = el.querySelector(".sh-eyebrow");
    const titleEl     = el.querySelector(".sh-title");
    const descEl      = el.querySelector(".sh-desc");
    const lineEls     = el.querySelectorAll(".sh-line");

    const targets = [eyebrowEl, ...Array.from(lineEls), titleEl, descEl].filter(Boolean);

    gsap.set(targets, { opacity: 0, y: 22 });
    gsap.set(lineEls, { scaleX: 0, y: 0 });

    gsap.to(lineEls, {
      scaleX: 1,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });

    gsap.to([eyebrowEl, titleEl, descEl].filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "power4.out",
      stagger: 0.1,
      delay: 0.15,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });
  }, { scope: ref });

  return (
    <div
      ref={ref}
      className={`max-w-4xl mx-auto mb-10 sm:mb-14 md:mb-20 space-y-4 sm:space-y-5 ${
        align === "left" ? "text-left mx-0" : "text-center"
      }`}
    >
      <div
        className={`sh-eyebrow flex items-center gap-4 ${
          align === "left" ? "justify-start" : "justify-center"
        }`}
      >
        <span
          className="sh-line h-px w-12 md:w-16 bg-spacex-graphite origin-left"
          style={{ display: "inline-block" }}
        />
        <span className="eyebrow-label text-spacex-subtle">
          {number} / {eyebrow || "SECTION"}
        </span>
        <span
          className="sh-line h-px w-12 md:w-16 bg-spacex-graphite origin-right"
          style={{ display: "inline-block" }}
        />
      </div>

      <h2 className="sh-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-white leading-[1.1]">
        {title}
      </h2>

      {description && (
        <p
          className={`sh-desc text-spacex-muted text-sm md:text-base max-w-2xl leading-relaxed font-sans ${
            align === "left" ? "mx-0" : "mx-auto"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
