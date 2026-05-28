"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { SkillCard } from "@/components/skill-card";
import { Code, Database, BrainCircuit } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Tentang Saya" />
        <AnimatedSection className="mb-12">
          <motion.p variants={fadeUp} custom={0} className="text-base md:text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sebagai lulusan Teknik Informatika dengan spesialisasi di Backend Development dan Full-Stack Web Development, saya berdedikasi untuk membangun sistem yang tangguh sekaligus memberinya <span className="font-semibold text-gray-900 dark:text-white">&quot;otak&quot;</span> lewat kapabilitas kecerdasan buatan.
          </motion.p>
        </AnimatedSection>
        <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8" variants={staggerContainer}>
          <SkillCard icon={<Code size={36} />} title="Interactive Frontend">
            Membangun antarmuka web yang fungsional dan interaktif menggunakan JavaScript, jQuery, dan integrasi view yang efisien.
          </SkillCard>
          <SkillCard icon={<Database size={36} />} title="Robust Backend">
            Merancang arsitektur server dan API yang handal menggunakan ekosistem PHP, Node.js, Express.js, serta manajemen database yang terstruktur.
          </SkillCard>
          <SkillCard icon={<BrainCircuit size={36} />} title="AI & ML Integration">
            Mengembangkan model Machine Learning, khususnya Computer Vision (CNN & OCR), dan menanamkan kapabilitas AI tersebut ke dalam sistem.
          </SkillCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
