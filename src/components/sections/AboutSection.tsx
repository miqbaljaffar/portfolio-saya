"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { Code, Cpu, Languages } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-gray-50/50 dark:bg-[#07070b]/30">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Tentang Saya" />

        <AnimatedSection className="max-w-6xl mx-auto">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Ringkasan Profil Utama */}
            <motion.div
              variants={staggerItem}
              className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <div>
                <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
                  <Cpu size={26} className="animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">Profile Overview</span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Mengintegrasikan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-cyan-400 dark:to-blue-500">Sistem Web</span> dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500">Kecerdasan Buatan</span>
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Sebagai lulusan Teknik Informatika dengan spesialisasi di <strong className="font-semibold text-gray-900 dark:text-white">Backend Development</strong> dan <strong className="font-semibold text-gray-900 dark:text-white">Full-Stack Web</strong>, saya memiliki ketertarikan mendalam dalam membangun infrastruktur aplikasi web yang kokoh sekaligus memberikan kapabilitas analitis cerdas menggunakan model <strong className="font-semibold text-gray-900 dark:text-white">Machine Learning</strong>.
                </p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Saya senang bereksperimen dengan pustaka pengolahan citra (<strong className="font-semibold text-gray-900 dark:text-white">OpenCV</strong>, <strong className="font-semibold text-gray-900 dark:text-white">PaddleOCR</strong>) dan mengintegrasikannya ke dalam arsitektur API secara efisien. Saya percaya, aplikasi web masa depan bukan sekadar wadah penyimpanan data, melainkan entitas pintar yang mampu menyederhanakan keputusan pengguna.
                </p>
              </div>

              {/* Decorative dynamic traits */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800/80">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">01. FOCUS</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-200 mt-1">Fullstack Web</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">02. BRAIN</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-200 mt-1">Computer Vision</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">03. WORK STYLE</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-200 mt-1">End-to-End</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Skill Stats Ring */}
            <motion.div
              variants={staggerItem}
              className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400">
                  <Code size={22} />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">Engineering Stats</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                  Domain Expertise Focus
                </h3>

                {/* Progress Gauges Grid */}
                <div className="flex items-center justify-around gap-2 my-2">
                  {/* Gauge 1 */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="28" cy="28" r="23" className="stroke-gray-100 dark:stroke-gray-800 fill-none" strokeWidth="4.5" />
                        <circle cx="28" cy="28" r="23" className="stroke-blue-500 fill-none transition-all duration-1000" strokeWidth="4.5" strokeDasharray={144.5} strokeDashoffset={144.5 * (1 - 0.90)} strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-[10px] font-mono font-bold text-gray-700 dark:text-gray-300">90%</span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mt-2">Backend</span>
                  </div>

                  {/* Gauge 2 */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="28" cy="28" r="23" className="stroke-gray-100 dark:stroke-gray-800 fill-none" strokeWidth="4.5" />
                        <circle cx="28" cy="28" r="23" className="stroke-indigo-500 fill-none transition-all duration-1000" strokeWidth="4.5" strokeDasharray={144.5} strokeDashoffset={144.5 * (1 - 0.82)} strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-[10px] font-mono font-bold text-gray-700 dark:text-gray-300">82%</span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mt-2">Frontend</span>
                  </div>

                  {/* Gauge 3 */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="28" cy="28" r="23" className="stroke-gray-100 dark:stroke-gray-800 fill-none" strokeWidth="4.5" />
                        <circle cx="28" cy="28" r="23" className="stroke-purple-500 fill-none transition-all duration-1000" strokeWidth="4.5" strokeDasharray={144.5} strokeDashoffset={144.5 * (1 - 0.85)} strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-[10px] font-mono font-bold text-gray-700 dark:text-gray-300">85%</span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mt-2">ML / AI</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-4 leading-relaxed font-mono">
                [Calculated based on projects scale & system integration logs]
              </div>
            </motion.div>

            {/* Card 4: Japan Fusion Card */}
            <motion.div
              variants={staggerItem}
              className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Kanji Watermark Background */}
              <div className="absolute right-[-10px] bottom-[-20px] text-gray-100 dark:text-gray-800/20 text-8xl font-black select-none pointer-events-none tracking-tighter leading-none font-sans">
                知能
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-500">
                  <Languages size={22} />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">Japan & ML Ready</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  Global Adaptability
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  Kemampuan lintas batas dengan sertifikasi teknis dan bahasa berstandar internasional:
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">JFT-Basic A2 (Komunikasi Jepang)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">SSW – Perawatan Kendaraan Jepang</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Bangkit ML Cohort (Distinction Graduate)</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mt-4 pt-1">
                Kombinasi adaptabilitas global & spesialisasi AI.
              </div>
            </motion.div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

