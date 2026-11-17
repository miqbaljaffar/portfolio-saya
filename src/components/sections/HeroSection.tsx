"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { ArrowRight, MapPin, Sparkles, Download } from "lucide-react";
import Image from "next/image";

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
      className={`hero-stat inline-flex flex-col items-start rounded-2xl px-4 py-3 min-w-[100px] ${className}`}
      style={{
        background: "var(--cw-stat-bg)",
        border: "1px solid var(--cw-stat-border)",
        boxShadow: "var(--cw-shadow-md)",
      }}
    >
      <span
        className="text-xl font-display font-extrabold leading-none tracking-tight"
        style={{ color: "var(--cw-black)" }}
      >
        {value}
      </span>
      <span
        className="text-[11px] mt-0.5 font-medium leading-tight"
        style={{ color: "var(--cw-grey-400)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const elements = sectionRef.current?.querySelectorAll(".hero-reveal");
    if (!elements?.length) return;

    gsap.fromTo(
      elements,
      { autoAlpha: 0, y: 18 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "opacity,visibility,transform",
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-70 blur-3xl pointer-events-none"
        style={{ background: "var(--brand-soft)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-24 w-[400px] h-[400px] rounded-full opacity-50 blur-3xl pointer-events-none"
        style={{ background: "var(--brand-soft)" }}
      />

      <div className="container mx-auto px-5 md:px-8 lg:px-12 pt-28 pb-20 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* ── Left content ──────────────────────────────── */}
          <div className="space-y-7 order-2 lg:order-1">

            {/* Eyebrow pill */}
            <div className="hero-eyebrow hero-reveal">
              <span className="eyebrow-pill">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-40" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
                </span>
                Available for opportunities
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-3">
              <h1
                className="hero-title hero-reveal font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
                style={{ color: "var(--cw-black)" }}
              >
                Building
                <br />
                <span className="relative inline-block">
                  <span className="text-brand">Production-Grade</span>
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 300 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 6 Q75 2 150 5 Q225 8 298 4"
                      stroke="var(--brand)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
                <br />
                Systems.
              </h1>

              <p
                className="hero-sub hero-reveal text-base md:text-lg leading-relaxed max-w-lg font-sans"
                style={{ color: "var(--cw-grey-400)" }}
              >
                Mohammad Iqbal Jaffar — Software Engineer crafting reliable
                backends, ML pipelines, and full-stack web applications that
                actually scale.
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-ctas hero-reveal flex flex-wrap items-center gap-3">
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
            <div className="hero-meta hero-reveal flex flex-wrap items-center gap-4 pt-2">
              <span
                className="flex items-center gap-1.5 text-[13px] font-medium"
                style={{ color: "var(--cw-grey-400)" }}
              >
                <MapPin className="size-3.5" style={{ color: "var(--cw-grey-200)" }} />
                Bandung, Indonesia
              </span>
              <span className="w-px h-4" style={{ background: "var(--cw-grey-100)" }} />
              <span
                className="flex items-center gap-1.5 text-[13px] font-medium"
                style={{ color: "var(--cw-grey-400)" }}
              >
                <Sparkles className="size-3.5" style={{ color: "var(--cw-grey-200)" }} />
                1+ Years Experience
              </span>
              <span className="w-px h-4" style={{ background: "var(--cw-grey-100)" }} />
              <span
                className="text-[13px] font-medium"
                style={{ color: "var(--cw-grey-400)" }}
              >
                Informatics · ITB
              </span>
            </div>
          </div>

          {/* ── Right: Image + floating stats ────────────── */}
          <div className="hero-reveal order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative">

              {/* Profile image */}
              <div
                className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] aspect-[3/4] rounded-3xl overflow-hidden"
                style={{
                  border: "1px solid var(--cw-grey-100)",
                  boxShadow: "var(--cw-shadow-hero)",
                }}
              >
                <Image
                  src="/img/profile.jpg"
                  alt="Mohammad Iqbal Jaffar"
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 360px"
                  priority
                  className="object-cover object-center"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{ background: "linear-gradient(to top, var(--cw-white) / 0.2, transparent)" }}
                />
              </div>

              {/* Floating stat: Projects — desktop only, repositioned */}
              <div className="hidden sm:block absolute -left-10 top-10 float-anim">
                <StatCard value="9+" label="Projects Built" />
              </div>

              {/* Floating stat: Certs */}
              <div className="hidden sm:block absolute -right-8 bottom-20 float-anim-slow">
                <StatCard value="6+" label="Certifications" />
              </div>

              {/* Floating badge: ML */}
              <div
                className="hero-stat absolute -left-6 bottom-8 rounded-2xl shadow-lg px-3.5 py-2.5"
                style={{
                  background: "var(--cw-black)",
                  color: "var(--cw-white)",
                  border: "1px solid var(--cw-grey-200)",
                }}
              >
                <span
                  className="text-[11px] font-semibold tracking-wide"
                  style={{ color: "var(--cw-white)" }}
                >
                  AI / ML
                </span>
                <p
                  className="text-[10px] mt-0.5"
                  style={{ color: "var(--cw-grey-400)" }}
                >
                  TensorFlow · PyTorch
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile stats row — only visible on small screens */}
        <div className="mt-10 flex sm:hidden items-center justify-center gap-4">
          <StatCard value="9+" label="Projects Built" />
          <StatCard value="6+" label="Certifications" />
          <StatCard value="1+" label="Yrs Experience" />
        </div>

        {/* Scroll cue */}
        <div
          className="mt-14 hidden md:flex items-center gap-3 text-[12px] font-medium"
          style={{ color: "var(--cw-grey-200)" }}
        >
          <div
            className="relative w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
            style={{ borderColor: "var(--cw-grey-200)" }}
          >
            <div
              className="w-1 h-1.5 rounded-full animate-bounce"
              style={{ background: "var(--cw-grey-400)" }}
            />
          </div>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
