"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer } from "../lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className,
  variants = staggerContainer,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}