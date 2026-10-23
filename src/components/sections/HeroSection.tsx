"use client";

import { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap";
import { ArrowRight, MapPin, Sparkles, Download } from "lucide-react";
import Image from "next/image";

// Small floating stat card
function StatCard({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`hero-stat inline-flex flex-col items-start bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-[#E5E4E0] px-4 py-3 min-w-[100px] ${className}`}
    >
      <span className="text-xl font-display font-extrabold text-[#0A0A0A] leading-none tracking-tight">
        {value}
      </span>
      <span className="text-[11px] text-[#9B9A96] mt-0.5 font-medium leading-tight">
        {label}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef     = useRef<HTMLElement>(null);
  const contentRef     = useRef<HTMLDivElement>(null);
  const imageRef       = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".hero-eyebrow",  { opacity: 0, y: 16, duration: 0.6 }, 0.15)
      .from(".hero-title",    { opacity: 0, y: 48, duration: 0.8 }, 0.28)
      .from(".hero-sub",      { opacity: 0, y: 24, duration: 0.7 }, 0.44)
      .from(".hero-ctas",     { opacity: 0, y: 24, duration: 0.6 }, 0.56)
      .from(".hero-meta",     { opacity: 0, y: 16, duration: 0.5 }, 0.66)
      .from(imageRef.current, { opacity: 0, x: 40, duration: 0.9 }, 0.25)
      .from(".hero-stat",     { opacity: 0, y: 20, scale: 0.92, stagger: 0.1, duration: 0.55 }, 0.55);

    // Subtle scroll parallax
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        if (contentRef.current) {
          gsap.set(contentRef.current, { y: self.progress * -40, opacity: 1 - self.progress * 0.6 });
        }
        if (imageRef.current) {
          gsap.set(imageRef.current, { y: self.progress * 60 });
        }
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F7F4]"
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      {/* Large decorative circle */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#F0EFEB] opacity-70 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-24 w-[400px] h-[400px] rounded-full bg-[#F0EFEB] opacity-50 pointer-events-none"
      />

      <div
        ref={contentRef}
        className="container mx-auto px-5 md:px-8 lg:px-12 pt-28 pb-20 max-w-7xl relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* ── Left content ──────────────────────────────── */}
          <div className="space-y-7 order-2 lg:order-1">

            {/* Eyebrow pill */}
            <div className="hero-eyebrow">
              <span className="eyebrow-pill">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Available for opportunities
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-3">
              <h1 className="hero-title font-display font-extrabold text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                Building
                <br />
                <span className="relative inline-block">
                  Production-Grade
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 300 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 6 Q75 2 150 5 Q225 8 298 4"
                      stroke="#CCCBC7"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
                <br />
                Systems.
              </h1>

              <p className="hero-sub text-base md:text-lg text-[#6B6B6B] leading-relaxed max-w-lg font-sans">
                Mohammad Iqbal Jaffar — Software Engineer crafting reliable
                backends, ML pipelines, and full-stack web applications that
                actually scale.
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary text-sm">
                View My Work
                <ArrowRight className="size-4" />
              </a>
              <a
                href="/cv/CV_Iqbal_Jaffar.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-sm"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </div>

            {/* Meta info */}
            <div className="hero-meta flex flex-wrap items-center gap-4 pt-2">
              <span className="flex items-center gap-1.5 text-[13px] text-[#9B9A96] font-medium">
                <MapPin className="size-3.5 text-[#CCCBC7]" />
                Bandung, Indonesia
              </span>
              <span className="w-px h-4 bg-[#E5E4E0]" />
              <span className="flex items-center gap-1.5 text-[13px] text-[#9B9A96] font-medium">
                <Sparkles className="size-3.5 text-[#CCCBC7]" />
                1+ Years Experience
              </span>
              <span className="w-px h-4 bg-[#E5E4E0]" />
              <span className="text-[13px] text-[#9B9A96] font-medium">
                Informatics · ITB
              </span>
            </div>
          </div>

          {/* ── Right: Image + floating stats ────────────── */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div ref={imageRef} className="relative">

              {/* Profile image */}
              <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] aspect-[3/4] rounded-3xl overflow-hidden border border-[#E5E4E0] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src="/img/profile.jpg"
                  alt="Mohammad Iqbal Jaffar"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 380px"
                  priority
                  className="object-cover object-center"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
              </div>

              {/* Floating stat: Projects */}
              <div className="absolute -left-8 top-10 float-anim">
                <StatCard value="9+" label="Projects Built" />
              </div>

              {/* Floating stat: Certs */}
              <div className="absolute -right-6 bottom-16 float-anim-slow">
                <StatCard value="6+" label="Certifications" />
              </div>

              {/* Floating badge: ML */}
              <div className="hero-stat absolute -left-4 bottom-8 bg-[#0A0A0A] text-white rounded-2xl shadow-lg px-3.5 py-2.5 border border-[#1A1A1A]">
                <span className="text-[11px] font-semibold tracking-wide">AI / ML</span>
                <p className="text-[10px] text-[#9B9A96] mt-0.5">TensorFlow · PyTorch</p>
              </div>
            </div>
          </div>

        </div>

        {/* ── Scroll cue ──────────────────────────────────── */}
        <div className="mt-16 hidden md:flex items-center gap-3 text-[12px] text-[#CCCBC7] font-medium">
          <div className="relative w-5 h-8 rounded-full border border-[#CCCBC7] flex items-start justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-[#9B9A96] rounded-full animate-bounce" />
          </div>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
