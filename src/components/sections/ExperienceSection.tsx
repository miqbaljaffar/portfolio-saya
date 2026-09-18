"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { experiences } from "@/data/portfolio";
import { Terminal, Briefcase, GraduationCap, Users } from "lucide-react";
import { staggerItem } from "@/lib/animations";

export function ExperienceSection() {
  const getIcon = (type: "work" | "education" | "organization") => {
    switch (type) {
      case "education": return <Terminal size={13} />;
      case "organization": return <Users size={13} />;
      default: return <Briefcase size={13} />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden bg-seigaiha">
      <div className="absolute inset-0 bg-washi-texture pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading title="Pengalaman" subTitle="03 · Journey · 経歴" />

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-vermillion/30 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <AnimatedSection key={index} className={`relative mb-10 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-start`}>
              <div className="absolute left-[18px] md:left-1/2 top-6 w-3.5 h-3.5 rounded-full bg-vermillion dark:bg-accent border-[3px] border-card shadow-md transform -translate-x-1/2 z-10 ring-4 ring-vermillion/10 dark:ring-accent/15" />
              <div className="hidden md:block w-1/2" />
              <motion.div variants={staggerItem} className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-card p-6 rounded-[1.1rem] border-border shadow-sm hover:shadow-md hover:shadow-primary/5 transition-shadow duration-300 relative overflow-hidden crafted-border">
                  <div className="absolute top-0 right-0 text-card-foreground/[0.04] dark:text-card-foreground/[0.06] text-[7rem] font-black select-none pointer-events-none leading-none -translate-y-4 translate-x-4 font-display">
                    {exp.type === "education" ? "学" : exp.type === "organization" ? "集" : "職"}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-kincha/15 dark:bg-kincha/10 text-foreground rounded-full text-[11px] font-bold mb-3 font-mono tracking-wider border border-kincha/25">
                    {exp.date}
                  </span>

                  <h3 className="font-display text-lg font-extrabold text-foreground mb-1 leading-snug">{exp.title}</h3>

                  <p className="text-vermillion dark:text-accent font-semibold text-sm mb-3 flex items-center gap-1.5 font-display">
                    {getIcon(exp.type)}
                    {exp.role} <span className="text-muted-foreground/50 mx-0.5">@</span> {exp.company}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{exp.description}</p>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
