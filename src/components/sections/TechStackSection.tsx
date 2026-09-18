"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { SkillCard } from "@/components/skill-card";
import { techStackData, type TechCategory } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/lib/animations";

const categories = [
  { label: "Languages" as TechCategory, color: "bg-primary text-primary-foreground" },
  { label: "AI/ML" as TechCategory, color: "bg-accent text-accent-foreground" },
  { label: "Dev Tools" as TechCategory, color: "bg-[#D4A04A] text-white" },
] as const;

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<TechCategory>("Languages");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          subtitle="02 · Arsenal"
          eyebrow="Tech Stack &amp; Tools"
          title="Peralatan yang saya kuasai"
          description="Alat teknologi pilihan yang saya gunakan setiap hari untuk membangun, melakukan testing, dan men-deploy sistem yang handal."
        />

        <div className="mb-10 md:mb-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => {
            const isActive = activeTab === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveTab(cat.label)}
                className={`relative px-4 md:px-5 py-2 text-xs md:text-sm font-medium tracking-wide rounded-[0.6rem] transition-all duration-300 border ${
                  isActive
                    ? `${cat.color} border-transparent shadow-sm`
                    : "bg-transparent text-foreground/60 hover:text-foreground border-border/50 hover:border-border"
                }`}
              >
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer(0.06, 0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-10 md:space-y-14"
        >
          {categories.map((cat) => {
            if (activeTab !== cat.label) return null;
            const items = techStackData[cat.label] || [];
            return (
              <motion.div
                key={cat.label}
                variants={fadeUp(0)}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">{cat.label}</h3>
                  <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest">
                    {items.length} skills
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                  <AnimatePresence mode="wait">
                    {items.map((tech, i) => (
                      <SkillCard key={tech.name} item={tech} index={i} />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
