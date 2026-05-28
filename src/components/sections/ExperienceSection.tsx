"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { experiences } from "@/data/portfolio";
import { Terminal, Briefcase } from "lucide-react";
import { fadeUp, staggerItem } from "@/lib/animations";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white dark:bg-gray-950/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent md:-translate-x-1/2" />
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} className={`relative mb-10 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-start`}>
              <div className="absolute left-[18px] md:left-1/2 top-6 w-3.5 h-3.5 rounded-full bg-blue-500 border-[3px] border-white dark:border-gray-950 shadow-md transform -translate-x-1/2 z-10" />
              <div className="hidden md:block w-1/2" />
              <motion.div variants={staggerItem} className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold mb-3">{exp.date}</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3 flex items-center gap-1.5">
                    {exp.type === "education" ? <Terminal size={13} /> : <Briefcase size={13} />}
                    {exp.role} @ {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
