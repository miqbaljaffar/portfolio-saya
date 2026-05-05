"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, fadeIn } from "../lib/animations";

export function SectionHeading({ title, withBar = true }: { title: string; withBar?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="text-center mb-16"
    >
      <motion.h2
        variants={fadeUp}
        custom={0}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      {withBar && (
        <motion.div
          variants={fadeIn}
          custom={0.2}
          className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
        />
      )}
    </motion.div>
  );
}