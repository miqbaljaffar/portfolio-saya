"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, fadeIn } from "../lib/animations";

export function SectionHeading({ title, subTitle, withGate = true }: { title: string; subTitle?: string; withGate?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="text-center mb-14 md:mb-16"
    >
      {subTitle && (
        <motion.p
          variants={fadeIn}
          custom={0}
          className="text-[11px] md:text-xs font-mono uppercase tracking-[0.25em] text-vermillion dark:text-accent mb-3 opacity-90"
        >
          {subTitle}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        custom={0.1}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-foreground tracking-tight"
      >
        {title}
      </motion.h2>
      {withGate && (
        <motion.div
          variants={fadeIn}
          custom={0.2}
        >
          <div className="torii-divider">
            <span className="gate">⛩</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
