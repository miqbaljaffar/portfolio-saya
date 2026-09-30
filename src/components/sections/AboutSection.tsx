"use client";

import { useEffect, useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { SectionHeading } from "@/components/section-heading";
import { Sparkles, Code2, Bot, Cpu, Globe2, Shield } from "lucide-react";

const stats = [
  { label: "BACKEND",  value: 90, color: "#FFFFFF" },
  { label: "FRONTEND", value: 82, color: "#E63946" },
  { label: "ML / AI",  value: 85, color: "#FFFFFF" },
];

function ProgressRing({
  value,
  label,
  color,
}: {
  value: number;
  label: string;
  color: string;
}) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (value / 100) * circumference;
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const el = ringRef.current;
    if (!el) return;

    // Start fully hidden (offset = full circumference)
    gsap.set(el, { strokeDashoffset: circumference });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        strokeDashoffset: targetOffset,
        duration: 1.6,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative size-20">
        <svg viewBox="0 0 90 90" className="size-20 -rotate-90">
          <circle
            cx="45" cy="45" r={radius}
            className="fill-none stroke-spacex-graphite"
            strokeWidth="6"
            strokeLinecap="butt"
          />
          <circle
            ref={ringRef}
            cx="45" cy="45" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="butt"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-black text-sm text-white">{value}%</span>
        </div>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-spacex-md text-spacex-muted">
        {label}
      </span>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll(".about-card");
    if (!cards?.length) return;

    gsap.set(cards, { opacity: 0, y: 36 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-5 md:px-10 bg-spacex-void"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          number="01"
          eyebrow="PROFILE"
          title="ENGINEER DENGAN KETELITIAN TINGGI"
          description="Menyukai hal teknis, pemecahan masalah kompleks, dan mengubah ide menjadi produk yang benar-benar berfungsi."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {/* Card 1 — Profile */}
          <article className="about-card sm:col-span-2 lg:col-span-2 bg-spacex-dark border border-spacex-graphite rounded-none p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4 text-spacex-flame shrink-0" />
              <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-spacex-md text-spacex-muted">
                PROFILE &amp; STORY
              </p>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-black uppercase leading-tight mb-4 sm:mb-5 text-white">
              SAYA FOKUS PADA{" "}
              <span className="text-spacex-flame">SOLUSI YANG TEPAT</span>,
              BUKAN SEKADAR BANYAK FITUR.
            </h3>
            <p className="text-spacex-muted text-sm sm:text-[15px] leading-relaxed">
              Sebagai Full-Stack &amp; AI/ML Engineer, saya menghubungkan
              ketelitian software engineering dengan kebutuhan manusia nyata.
              Setiap proyek saya tangani dengan pendekatan data-driven:
              merencanakan requirements dengan jelas, menulis kode yang
              maintainable, dan mengukur dampak setiap fitur yang dibangun.
              Saya senang mempelajari domain baru — dari healthcare, otomotif,
              hingga sistem pemerintah.
            </p>
          </article>

          {/* Card 2 — Stats */}
          <article className="about-card bg-spacex-dark border border-spacex-graphite rounded-none p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Cpu className="w-4 h-4 text-spacex-flame shrink-0" />
              <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-spacex-md text-spacex-muted">
                ENGINEERING STATS
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {stats.map((s) => (
                <ProgressRing key={s.label} value={s.value} label={s.label} color={s.color} />
              ))}
            </div>
          </article>

          {/* Card 3 — Edge */}
          <article className="about-card bg-spacex-dark border border-spacex-graphite rounded-none p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <Shield className="w-4 h-4 text-spacex-flame shrink-0" />
              <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-spacex-md text-spacex-muted">
                MY EDGE
              </p>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Bot className="w-4 h-4 text-spacex-silver mt-0.5 shrink-0" />
                <span className="text-spacex-subtle leading-snug">
                  Integrasi AI/ML langsung ke aplikasi produksi dengan MLOps sederhana
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Code2 className="w-4 h-4 text-spacex-silver mt-0.5 shrink-0" />
                <span className="text-spacex-subtle leading-snug">
                  Backend API, caching, dan database untuk sistem skala menengah
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="w-4 h-4 text-spacex-silver mt-0.5 shrink-0" />
                <span className="text-spacex-subtle leading-snug">
                  Kemampuan bahasa Jepang level dasar (JFT-Basic A2) &amp; sertifikasi SSW
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
