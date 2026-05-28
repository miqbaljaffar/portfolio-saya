"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/animations";

export function HeroSection() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 relative">
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.05 }}
          className="mb-8 relative inline-block"
        >
          <div className="absolute inset-[-8px] bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse" />
          <Image
            src="/img/profile.jpg"
            alt="Mohammad Iqbal Jaffar"
            width={160}
            height={160}
            priority
            className="rounded-full relative z-10 border-4 border-white dark:border-gray-900 shadow-2xl object-cover w-[160px] h-[160px]"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white leading-none"
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Iqbal</span>
        </motion.h1>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 }}
          className="text-lg sm:text-xl md:text-3xl text-gray-500 dark:text-gray-400 font-medium mb-6 tracking-wide"
        >
          Full-Stack Web Development
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
          className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Lulusan Teknik Informatika UTB yang berfokus pada Full-Stack Web Development dan pengembangan aplikasi berbasis web.
          Berpengalaman membangun solusi end-to-end, mulai dari frontend, backend, hingga integrasi ke dalam aplikasi web yang siap digunakan.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 font-bold py-6 px-8 rounded-full text-base w-full hover:scale-105 transition-transform shadow-xl shadow-black/10">
              Lihat Karya Saya <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="/cv/CV_Iqbal_Jaffar.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" className="font-bold py-6 px-8 rounded-full text-base w-full border-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition-transform hover:scale-105">
              Unduh CV <FileText className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 dark:text-gray-700">
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
