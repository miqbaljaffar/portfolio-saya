"use client";

import { useEffect, useRef, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mounted && isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}