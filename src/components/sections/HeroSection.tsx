"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/animations";

export function HeroSection() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -60]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 relative overflow-hidden bg-seigaiha bg-washi-texture grain-overlay">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none z-0" />

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto max-w-5xl relative z-10">

        {/* Top Row: Status Badge + Hanko Stamp */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4C8B5] dark:border-white/15 bg-white/60 dark:bg-white/5 text-primary text-xs font-semibold uppercase tracking-widest backdrop-blur-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-vermillion animate-pulse" />
            Available for work · 求人募集中
          </div>

          <div className="hanko-stamp text-[11px] tracking-widest">
            謹製 · IQBAL
          </div>
        </motion.div>

        {/* Profile Picture — Crafted Japanese Frame */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.05 }}
          className="mb-10 relative inline-block group select-none"
        >
          <div className="absolute inset-[-16px] rounded-[1.5rem] opacity-60 bg-gradient-to-br from-[#2D4A6F]/10 via-transparent to-[#C8402E]/10 dark:from-[#8FB3D4]/8 dark:to-[#E05A47]/8 pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 p-[3px] rounded-[1.25rem] bg-gradient-to-br from-[#2D4A6F] via-[#D4A04A] to-[#C8402E] dark:from-[#8FB3D4] dark:via-[#E8B860] dark:to-[#E05A47]">
            <div className="rounded-[1rem] overflow-hidden w-[170px] h-[170px] sm:w-[180px] sm:h-[180px] bg-white dark:bg-[#1E2230] p-1">
              <div className="rounded-[0.8rem] overflow-hidden w-full h-full relative">
                <Image
                  src="/img/profile.jpg"
                  alt="Mohammad Iqbal Jaffar"
                  width={180}
                  height={180}
                  priority
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-[0.8rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-3 -right-3 z-20">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C8402E] to-[#8B2A1F] dark:from-[#E05A47] dark:to-[#A63D30] flex items-center justify-center shadow-lg border-2 border-white dark:border-[#151823]">
              <span className="text-white text-[10px] font-black tracking-tighter font-display leading-none">
                情<br />熱
              </span>
            </div>
          </div>
        </motion.div>

        {/* Vertical Japanese Caption on side */}
        <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="flex flex-col items-center gap-3">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4C8B5] dark:via-white/20 to-transparent" />
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.25em] [writing-mode:vertical-rl]" style={{ writingMode: "vertical-rl" }}>
              技 と 心 の 融 和
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4C8B5] dark:via-white/20 to-transparent" />
          </div>
        </div>

        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="flex flex-col items-center gap-3">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4C8B5] dark:via-white/20 to-transparent" />
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.25em]" style={{ writingMode: "vertical-rl" }}>
              CODE · CRAFT · CULTURE
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4C8B5] dark:via-white/20 to-transparent" />
          </div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight text-foreground leading-[1.05]"
        >
          Hi, I&apos;m <span className="gradient-text-tokyo">Iqbal</span>
        </motion.h1>

        {/* Tagline — bilingual */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 }}
          className="mb-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display text-foreground/90 font-semibold tracking-wide">
            Code · Craft · Culture
          </h2>
          <p className="text-xs sm:text-sm mt-2 text-muted-foreground font-mono tracking-widest">
            技 と 心 の 融 和 — Fusion of Skill & Heart
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Lulusan Teknik Informatika UTB — <strong className="font-semibold text-foreground">Full-Stack Web Developer</strong> &amp; <strong className="font-semibold text-foreground">AI/ML Engineer</strong>.
          Menghubungkan sistem web modern dengan kecerdasan buatan, dengan presisi dan adaptabilitas global standar Jepang.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="w-full sm:w-auto group">
            <Button className="group bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground font-display font-bold py-6 px-8 rounded-[0.75rem] text-base w-full hover:scale-[1.03] transition-all shadow-lg shadow-primary/15 border border-primary/20 relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Lihat Karya Saya
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#C8402E]/0 via-[#C8402E]/15 to-[#C8402E]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </a>
          <a href="/cv/CV_Iqbal_Jaffar.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group">
            <Button variant="outline" className="font-display font-bold py-6 px-8 rounded-[0.75rem] text-base w-full border-2 hover:bg-muted transition-all hover:scale-[1.03] border-border bg-card/50 dark:bg-card/20 backdrop-blur-sm">
              Unduh CV
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-10 max-w-xl mx-auto text-[11px] font-mono text-muted-foreground tracking-wider"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-kincha" />
            Based in Indonesia
          </span>
          <span className="w-px h-3 bg-border hidden sm:block" />
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-vermillion" />
            Remote · Global
          </span>
          <span className="w-px h-3 bg-border hidden sm:block" />
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            日本語 · A2
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator — styled as scroll not chevron */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase opacity-60">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-current via-current to-transparent opacity-40" />
        <ChevronDown size={18} className="opacity-50" />
      </motion.div>
    </section>
  );
}
