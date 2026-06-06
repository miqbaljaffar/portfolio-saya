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
    <section className="min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 relative overflow-hidden bg-dot-pattern">
      {/* Background Radial Orbs for Tech Feel */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-3xl pointer-events-none" />

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto max-w-4xl relative z-10">
        
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/30 dark:border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.05)]"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-cyan-400 animate-pulse" />
          Full-Stack & AI/ML Engineer
        </motion.div>

        {/* Profile Picture with Computer Vision Scanner */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.05 }}
          className="mb-8 relative inline-block group select-none cursor-crosshair"
        >
          {/* Outer Ring Ambient Glow */}
          <div className="absolute inset-[-12px] bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30 dark:opacity-15 group-hover:opacity-50 transition-opacity duration-500" />
          
          <div className="relative z-10 w-[165px] h-[165px] rounded-full overflow-hidden border-[4px] border-white dark:border-gray-900 shadow-2xl transition-all duration-300 group-hover:border-cyan-400 dark:group-hover:border-cyan-500">
            <Image
              src="/img/profile.jpg"
              alt="Mohammad Iqbal Jaffar"
              width={165}
              height={165}
              priority
              className="rounded-full object-cover w-[165px] h-[165px] transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Sliding Laser Scan Line */}
            <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20 animate-scan pointer-events-none" />
            
            {/* Mesh/Target Grid Overlay */}
            <div 
              className="absolute inset-0 bg-cyan-500/5 group-hover:opacity-100 opacity-0 transition-opacity duration-300 pointer-events-none" 
              style={{ 
                backgroundImage: 'radial-gradient(rgba(34,211,238,0.15) 1px, transparent 1px)', 
                backgroundSize: '12px 12px' 
              }} 
            />
          </div>

          {/* Bounding Box 1: Face Detection */}
          <div className="absolute top-[8%] left-[22%] w-[56%] h-[56%] border-2 border-dashed border-green-500/80 rounded-xl pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
            {/* Label Badge */}
            <span className="absolute -top-6 left-0 bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-md font-mono uppercase tracking-wider whitespace-nowrap">
              Face: Iqbal (99.8%)
            </span>
            {/* Brackets */}
            <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-green-400" />
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-green-400" />
            <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-green-400" />
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-green-400" />
          </div>

          {/* Bounding Box 2: Object Tag */}
          <div className="absolute inset-[-4px] border border-cyan-400/40 rounded-full pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-md font-mono uppercase tracking-wider whitespace-nowrap">
              Developer (1.00)
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white leading-none"
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500">Iqbal</span>
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-6 tracking-wide"
        >
          Bridging Systems with Intelligence
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Lulusan Teknik Informatika UTB yang berfokus pada Full-Stack Web Development dan pengembangan aplikasi berbasis kecerdasan buatan.
          Berpengalaman membangun solusi end-to-end, mulai dari frontend yang dinamis hingga backend yang handal serta integrasi model Machine Learning.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 font-bold py-6 px-8 rounded-full text-base w-full hover:scale-105 transition-transform shadow-xl shadow-black/10 dark:shadow-blue-500/5">
              Lihat Karya Saya <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
            </Button>
          </a>
          <a href="/cv/CV_Iqbal_Jaffar.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" className="font-bold py-6 px-8 rounded-full text-base w-full border-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition-transform hover:scale-105">
              Unduh CV <FileText className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}

