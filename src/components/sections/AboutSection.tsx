"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SectionHeading } from "@/components/section-heading";
import { Sparkles, Code2, Bot, Cpu, Globe2 } from "lucide-react";
import { GiSumoJacket } from "react-icons/gi";

const stats = [
  { label: "Backend", value: 90, color: "text-primary" },
  { label: "Frontend", value: 82, color: "text-accent" },
  { label: "Machine Learning", value: 85, color: "text-[#D4A04A]" },
];

function ProgressRing({ value, label, color }: { value: number; label: string; color: string }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative size-20">
        <svg viewBox="0 0 90 90" className="size-20 -rotate-90">
          <circle cx="45" cy="45" r={radius} className="fill-none stroke-muted" strokeWidth="6" />
          <motion.circle
            cx="45"
            cy="45"
            r={radius}
            className={`fill-none ${color} stroke-current`}
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-sm text-foreground">{value}%</span>
        </div>
      </div>
      <span className="text-xs font-medium text-foreground/70 font-display tracking-wide">{label}</span>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          subtitle="01 · Profile"
          eyebrow="Tentang Saya"
          title="Engineer dengan ketelitian tinggi"
          description="Menyukai hal teknis, pemecahan masalah kompleks, dan mengubah ide menjadi produk yang benar-benar berfungsi."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer(0.08, 0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          <motion.div
            variants={fadeUp(0.1)}
            className="md:col-span-2 lg:col-span-2 bg-card border border-border rounded-[1rem] p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary shrink-0" />
              <p className="text-xs font-mono uppercase tracking-widest text-primary">Profile &amp; Story</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-5">
              Saya fokus pada <span className="text-accent">solusi yang tepat</span>, bukan sekadar banyak fitur.
            </h3>
            <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">
              Sebagai Full-Stack &amp; AI/ML Engineer, saya menghubungkan ketelitian software engineering dengan
              kebutuhan manusia nyata. Setiap proyek saya tangani dengan pendekatan data-driven: merencanakan
              requirements dengan jelas, menulis kode yang maintainable, dan mengukur dampak setiap fitur yang
              dibangun. Saya senang mempelajari domain baru — dari healthcare, otomotif, hingga sistem pemerintah.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.2)}
            className="bg-card border border-border rounded-[1rem] p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-4 h-4 text-[#D4A04A] shrink-0" />
              <p className="text-xs font-mono uppercase tracking-widest text-[#D4A04A]">Engineering Stats</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {stats.map((s) => (
                <ProgressRing key={s.label} value={s.value} label={s.label} color={s.color} />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp(0.3)}
            className="bg-card border border-border rounded-[1rem] p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-5">
              <GiSumoJacket className="w-4 h-4 text-accent shrink-0" />
              <p className="text-xs font-mono uppercase tracking-widest text-accent">My Edge</p>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Bot className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/80 leading-snug">Integrasi AI/ML langsung ke aplikasi produksi dengan MLOps sederhana</span>
              </li>
              <li className="flex items-start gap-3">
                <Code2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/80 leading-snug">Backend API, caching, dan database untuk sistem skala menengah</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/80 leading-snug">Kemampuan bahasa Jepang level dasar (JFT-Basic A2) &amp; sertifikasi SSW</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
