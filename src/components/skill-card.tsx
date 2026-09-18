"use client";

import { motion } from "framer-motion";
import { staggerItem } from "../lib/animations";

export function SkillCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative group bg-card dark:bg-card border-border p-6 md:p-8 rounded-[1.1rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300 overflow-hidden cursor-default crafted-border"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-vermillion/4 dark:from-primary/5 dark:to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.1rem]" />
      <div className="absolute -right-4 -top-4 text-card-foreground/[0.04] dark:text-card-foreground/[0.06] text-[8rem] font-black select-none pointer-events-none leading-none font-display">
        工
      </div>
      <motion.div
        className="flex justify-center mb-6 text-primary"
        whileHover={{ scale: 1.15, rotate: 6 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {icon}
      </motion.div>
      <h3 className="font-display text-xl font-extrabold mb-3 text-foreground relative z-10">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm relative z-10">{children}</p>
    </motion.div>
  );
}
