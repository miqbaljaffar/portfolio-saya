"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, FileText } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import profilePic from "@/../public/img/profile.jpg";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -30]);
  const y2 = useTransform(scrollY, [0, 300], [0, 80]);
  const opacity = useTransform(scrollY, [0, 250], [1, 0.15]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-seigaiha">
      <div className="absolute inset-0 pointer-events-none" />
      <motion.div
        style={{ y: y1, opacity }}
        className="container mx-auto px-5 md:px-10 pt-32 pb-20 max-w-6xl relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] items-center gap-14 lg:gap-16">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/70 text-xs font-mono uppercase tracking-widest text-foreground/70">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                Available for opportunities
              </span>
            </div>

            <div className="space-y-5">
              <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
                Full-Stack &middot; AI/ML Engineer
              </p>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight text-foreground">
                Hi, saya <span className="text-accent font-black">Iqbal</span>.
                <br />
                Saya membangun web dan AI <br className="hidden md:block" />
                yang <span className="italic font-medium text-primary">berdampak</span>.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Mohammad Iqbal Jaffar &mdash; Full-Stack Web & AI/ML Engineer dengan spesialisasi
                backend, machine learning, dan integrasi IoT. Berpengalaman membangun produk
                untuk deteksi hoax, analisis medis, otomatisasi bisnis, dan otomotif.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <Button asChild size="lg" className="h-11 px-6 text-sm font-medium bg-accent hover:bg-accent/90 text-accent-foreground rounded-[0.6rem] shadow-sm hover:shadow-md transition-all duration-300">
                <a href="#projects">
                  <FileText className="w-4 h-4" />
                  Lihat Karya
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 px-6 text-sm font-medium rounded-[0.6rem] border-border hover:bg-muted/50 transition-all duration-300">
                <a href="/cv/CV_Iqbal_Jaffar.pdf" target="_blank" rel="noreferrer">
                  Download CV
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-border/50 max-w-lg">
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-primary/70" />
                <span>Bekasi, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <Briefcase className="w-3.5 h-3.5 flex-shrink-0 text-primary/70" />
                <span>3+ Tahun Pengalaman</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground col-span-2 sm:col-span-1">
                <GraduationCap className="w-3.5 h-3.5 flex-shrink-0 text-primary/70" />
                <span>S1 Informatika</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              style={{ y: y2 }}
              className="relative group"
            >
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-[1.8rem] overflow-hidden border border-border bg-card shadow-xl">
                <Image
                  src={profilePic}
                  alt="Mohammad Iqbal Jaffar"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
