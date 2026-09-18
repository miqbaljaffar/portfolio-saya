"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import profilePic from "@/../public/img/profile.jpg";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, -40]);
  const y2 = useTransform(scrollY, [0, 400], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.1]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-aero-grid"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-6 md:left-10 lg:left-16 aero-corner tl" />
        <div className="absolute top-24 right-6 md:right-10 lg:right-16 aero-corner tr" />
        <div className="absolute bottom-10 left-6 md:left-10 lg:left-16 aero-corner bl" />
        <div className="absolute bottom-10 right-6 md:right-10 lg:right-16 aero-corner br" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      <motion.div
        style={{ y: y1, opacity }}
        className="container mx-auto px-4 sm:px-5 md:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 max-w-7xl relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,420px)] items-center gap-10 sm:gap-12 lg:gap-16">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="animate-slide-left flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="flex items-center gap-2 px-2.5 sm:px-3 py-1 border border-spacex-graphite text-[9px] sm:text-[10px] font-mono uppercase tracking-spacex-lg text-spacex-subtle">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spacex-flame opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-spacex-flame" />
                </span>
                SYSTEM ONLINE — AVAILABLE
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-spacex-lg text-spacex-muted">
                v2.0.26 / BUILD STABLE
              </span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="eyebrow-label animate-fade-up delay-50">
                FULL-STACK / AI-ML / ENGINEER
              </p>
              <h1 className="animate-fade-up delay-100 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase leading-[0.95] tracking-tight text-white">
                BUILDING
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-spacex-silver to-spacex-muted">
                  PRODUCTION-GRADE
                </span>
                <br />
                SYSTEMS.
              </h1>
              <div className="animate-fade-up delay-200 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span className="h-px w-12 sm:w-16 bg-spacex-flame flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg text-spacex-silver leading-relaxed max-w-xl font-sans">
                  Mohammad Iqbal Jaffar — Engineering reliable backends, deploying
                  ML models to production, and connecting hardware to the cloud.
                </p>
              </div>
            </div>

            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="h-11 sm:h-12 px-5 sm:px-7 text-[11px] sm:text-xs font-bold uppercase tracking-spacex-md bg-white hover:bg-spacex-silver text-black rounded-none border-2 border-white transition-all group justify-center"
              >
                <a href="#projects">
                  <FileText className="w-4 h-4" />
                  VIEW WORK
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 sm:h-12 px-5 sm:px-7 text-[11px] sm:text-xs font-bold uppercase tracking-spacex-md bg-transparent hover:bg-spacex-steel text-white rounded-none border-2 border-spacex-graphite hover:border-white transition-all justify-center"
              >
                <a href="/cv/CV_Iqbal_Jaffar.pdf" target="_blank" rel="noreferrer">
                  DOWNLOAD CV
                </a>
              </Button>
            </div>

            <div className="animate-fade-up delay-400 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 pt-5 sm:pt-6 border-t border-spacex-graphite/60 max-w-2xl">
              <div className="flex items-center gap-3 py-2 sm:py-3 sm:border-r border-spacex-graphite/60">
                <MapPin className="w-4 h-4 flex-shrink-0 text-spacex-muted" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono uppercase tracking-spacex-lg text-spacex-muted">
                    LOCATION
                  </span>
                  <span className="text-sm font-medium text-white">
                    Bandung, ID
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2 sm:py-3 sm:border-r border-spacex-graphite/60 sm:pl-4">
                <Briefcase className="w-4 h-4 flex-shrink-0 text-spacex-muted" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono uppercase tracking-spacex-lg text-spacex-muted">
                    EXPERIENCE
                  </span>
                  <span className="text-sm font-medium text-white">
                    3+ YEARS
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2 sm:py-3 sm:pl-4">
                <GraduationCap className="w-4 h-4 flex-shrink-0 text-spacex-muted" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono uppercase tracking-spacex-lg text-spacex-muted">
                    EDUCATION
                  </span>
                  <span className="text-sm font-medium text-white">
                    S1 CS / UI
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              style={{ y: y2 }}
              className="relative group"
            >
              <div className="absolute -inset-3 border border-spacex-graphite/40 pointer-events-none">
                <div className="aero-corner tl" />
                <div className="aero-corner tr" />
                <div className="aero-corner bl" />
                <div className="aero-corner br" />
              </div>
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-96 overflow-hidden border border-spacex-graphite bg-spacex-dark">
                <Image
                  src={profilePic}
                  alt="Mohammad Iqbal Jaffar"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 360px, 420px"
                  priority
                  className="object-cover object-center grayscale-[20%] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 border-t border-spacex-graphite/60 bg-black/80">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-spacex-lg text-spacex-muted">
                        OPERATIVE
                      </span>
                      <span className="text-xs sm:text-sm font-display font-bold uppercase tracking-spacex-xs text-white">
                        IQBAL J.
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-spacex-lg text-spacex-muted">
                        STATUS
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold text-spacex-flame">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] font-mono uppercase tracking-spacex-lg text-spacex-muted">
            SCROLL TO EXPLORE
          </span>
          <div className="relative w-px h-14 overflow-hidden bg-spacex-graphite">
            <motion.div
              className="absolute top-0 left-0 w-full h-4 bg-spacex-flame"
              animate={{ y: ["0%", "300%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
