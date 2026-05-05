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
      className="relative group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-shadow duration-300 overflow-hidden cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <motion.div
        className="flex justify-center mb-6 text-blue-600 dark:text-blue-400"
        whileHover={{ scale: 1.2, rotate: 8 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white relative z-10">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm relative z-10">{children}</p>
    </motion.div>
  );
}