"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { Code, Cpu, Languages, Sparkles } from "lucide-react";
import { staggerItem } from "@/lib/animations";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-asanoha">
      <div className="absolute inset-0 bg-washi-texture pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Tentang Saya" subTitle="01 · Profile · 自己紹介" />

        <AnimatedSection className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1: Main Profile — Bento span full */}
            <motion.div
              variants={staggerItem}
              className="md:col-span-2 p-6 md:p-8 rounded-[1.25rem] bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group overflow-hidden relative crafted-border"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-vermillion/8 via-transparent to-transparent dark:from-accent/10 dark:via-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/8 via-transparent to-transparent dark:from-primary/10 dark:via-transparent rounded-tr-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

              <div>
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Cpu size={22} className="text-vermillion dark:text-accent" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] font-mono">Profile Overview · プロフィール</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-extrabold text-foreground mb-4 leading-snug">
                  Mengintegrasikan <span className="gradient-text-tokyo">Sistem Web Modern</span> dengan <span className="gradient-text-tokyo">Kecerdasan Buatan</span>
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  Sebagai lulusan Teknik Informatika dengan spesialisasi di <strong className="font-semibold text-foreground">Backend Development</strong> dan <strong className="font-semibold text-foreground">Full-Stack Web</strong>, saya memiliki ketertarikan mendalam dalam membangun infrastruktur aplikasi web yang kokoh sekaligus memberikan kapabilitas analitis cerdas menggunakan model <strong className="font-semibold text-foreground">Machine Learning</strong>.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Saya senang bereksperimen dengan pustaka pengolahan citra (<strong className="font-semibold text-foreground">OpenCV</strong>, <strong className="font-semibold text-foreground">PaddleOCR</strong>) dan mengintegrasikannya ke dalam arsitektur API secara efisien. Saya percaya aplikasi web masa depan bukan sekadar wadah penyimpanan data — melainkan entitas pintar yang mampu menyederhanakan keputusan pengguna, dengan presisi seperti seorang craftsman.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-border/80">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground font-mono tracking-[0.15em]">01 · FOCUS</span>
                  <span className="text-sm font-bold text-foreground mt-1 font-display">Fullstack Web</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground font-mono tracking-[0.15em]">02 · BRAIN</span>
                  <span className="text-sm font-bold text-foreground mt-1 font-display">Computer Vision</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground font-mono tracking-[0.15em]">03 · STYLE</span>
                  <span className="text-sm font-bold text-foreground mt-1 font-display">End-to-End</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Skill Stats Ring */}
            <motion.div
              variants={staggerItem}
              className="p-6 rounded-[1.25rem] bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden crafted-border"
            >
              <div className="absolute -right-8 -bottom-8 text-card-foreground/[0.04] dark:text-card-foreground/[0.06] text-[10rem] font-black select-none pointer-events-none leading-none font-display">
                技
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Code size={20} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] font-mono">Engineering Stats · スキル</span>
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-4">
                  Domain Expertise Focus
                </h3>

                <div className="flex items-center justify-around gap-2 my-2">
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="26" className="stroke-muted dark:stroke-muted/50 fill-none" strokeWidth="5" />
                        <circle cx="32" cy="32" r="26" className="stroke-primary fill-none transition-all duration-1000" strokeWidth="5" strokeDasharray={163.4} strokeDashoffset={163.4 * (1 - 0.90)} strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-[11px] font-mono font-bold text-foreground">90%</span>
                    </div>
                    <span className="text-[10px] font-semibold text-muted-foreground mt-2 font-display">Backend</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="26" className="stroke-muted dark:stroke-muted/50 fill-none" strokeWidth="5" />
                        <circle cx="32" cy="32" r="26" className="stroke-kincha fill-none transition-all duration-1000" strokeWidth="5" strokeDasharray={163.4} strokeDashoffset={163.4 * (1 - 0.82)} strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-[11px] font-mono font-bold text-foreground">82%</span>
                    </div>
                    <span className="text-[10px] font-semibold text-muted-foreground mt-2 font-display">Frontend</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="26" className="stroke-muted dark:stroke-muted/50 fill-none" strokeWidth="5" />
                        <circle cx="32" cy="32" r="26" className="stroke-vermillion dark:stroke-accent fill-none transition-all duration-1000" strokeWidth="5" strokeDasharray={163.4} strokeDashoffset={163.4 * (1 - 0.85)} strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-[11px] font-mono font-bold text-foreground">85%</span>
                    </div>
                    <span className="text-[10px] font-semibold text-muted-foreground mt-2 font-display">ML / AI</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-muted-foreground mt-4 leading-relaxed font-mono tracking-wide">
                [Calculated based on project scale &amp; integration logs]
              </div>
            </motion.div>

            {/* Card 3: Japan Fusion Card */}
            <motion.div
              variants={staggerItem}
              className="p-6 rounded-[1.25rem] bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden crafted-border"
            >
              <div className="absolute right-[-12px] bottom-[-28px] text-card-foreground/[0.05] dark:text-card-foreground/[0.08] text-[9rem] font-black select-none pointer-events-none tracking-tighter leading-none font-display">
                知能
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-vermillion dark:text-accent">
                  <Languages size={20} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] font-mono">Global Adaptability · 国際性</span>
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">
                  Japan &amp; ML Ready
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Kemampuan lintas batas dengan sertifikasi teknis dan bahasa berstandar internasional:
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-vermillion dark:bg-accent mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-foreground font-display">JFT-Basic A2 · Komunikasi Jepang</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-vermillion dark:bg-accent mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-foreground font-display">SSW · Perawatan Kendaraan Jepang</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-vermillion dark:bg-accent mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-foreground font-display">Bangkit ML · Distinction Graduate</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/60">
                <div className="text-[10px] font-mono text-muted-foreground tracking-wide">
                  Crafted with care · 丁寧に
                </div>
                <div className="flex items-center gap-1 text-kincha">
                  <Sparkles size={12} />
                  <Sparkles size={10} />
                </div>
              </div>
            </motion.div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
