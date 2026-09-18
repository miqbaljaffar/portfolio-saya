"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { staggerContainer, fadeUp } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  subtitle?: string;
  withGate?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  subtitle,
  withGate = true,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer(0.05, 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={`max-w-3xl mx-auto mb-12 md:mb-16 space-y-5 ${align === "left" ? "text-left mx-0" : "text-center"}`}
    >
      {subtitle && (
        <motion.p
          variants={fadeUp(0)}
          className="text-[11px] md:text-xs font-mono uppercase tracking-[0.2em] text-accent"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div variants={fadeUp(0.05)} className={withGate ? "torii-divider" : "hidden"}>
        <span className="gate">⛩</span>
      </motion.div>
      {eyebrow && (
        <motion.p
          variants={fadeUp(0.1)}
          className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-[0.25em]"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp(0.15)}
        className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp(0.2)}
          className={`text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed ${align === "left" ? "mx-0" : "mx-auto"}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
