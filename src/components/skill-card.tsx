"use client";

import { motion } from "framer-motion";
import type { TechItem } from "@/data/portfolio";

interface SkillCardProps {
  item: TechItem;
  index: number;
}

export function SkillCard({ item, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="group relative flex flex-col items-center gap-3 p-4 md:p-5 rounded-[0.9rem] bg-card border border-border hover:shadow-md transition-all duration-300 text-center">
        <div className="size-11 md:size-12 flex items-center justify-center rounded-lg bg-muted text-foreground/80 group-hover:text-foreground transition-colors">
          {item.icon}
        </div>
        <div className="space-y-0.5">
          <h4 className="font-display font-semibold text-sm md:text-[15px] text-foreground">
            {item.name}
          </h4>
          <p className="text-[10px] md:text-[11px] text-muted-foreground font-mono uppercase tracking-wide">
            {item.level}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
