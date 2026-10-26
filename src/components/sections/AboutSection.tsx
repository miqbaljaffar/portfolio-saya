"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { SectionHeading } from "@/components/section-heading";
import { Bot, Code2, Globe2, TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  { value: "9+", label: "Projects Built", icon: Zap },
  { value: "1+", label: "Years Experience", icon: TrendingUp },
  { value: "6+", label: "Certifications", icon: Users },
];

const edges = [
  {
    icon: Bot,
    title: "AI/ML Integration",
    desc: "Deploying ML models to production with MLOps pipelines — TensorFlow, Keras, Scikit-Learn.",
  },
  {
    icon: Code2,
    title: "Backend Engineering",
    desc: "Scalable REST APIs, caching strategies, and database design for mid-scale systems.",
  },
  {
    icon: Globe2,
    title: "Multilingual Edge",
    desc: "Japanese A2 (JFT-Basic) & SSW automotive certification — bridges tech and global markets.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll(".about-anim");
    if (!cards?.length) return;
    gsap.set(cards, { opacity: 0, y: 32 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.75,
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
      className="relative py-20 sm:py-24 md:py-32 px-5 md:px-8 bg-[#F8F7F4]"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About me"
          title="Engineer with a focus on the right solution"
          description="Passionate about technical challenges, complex problem-solving, and turning ideas into products that scale."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* ── Profile card (spans 3 cols) ──────────── */}
          <article className="about-anim cw-card lg:col-span-3 p-7 md:p-9 flex flex-col gap-6">
            <div>
              <span className="eyebrow-pill mb-4 inline-flex">Profile &amp; story</span>
              <h3 className="font-display font-extrabold text-[#0A0A0A] text-xl md:text-2xl leading-tight tracking-tight mb-3">
                I focus on{" "}
                <span className="relative inline-block">
                  the right solution
                  <svg aria-hidden="true" className="absolute -bottom-0.5 left-0 w-full" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
                    <path d="M1 4 Q50 1 100 4 Q150 7 199 3" stroke="#356B59" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>
                {" "}— not just more features.
              </h3>
              <p className="text-[#6B6B6B] text-sm md:text-[15px] leading-relaxed">
                As a Software Engineer, I bridge the precision of engineering
                with real human needs. Every project I approach with a
                data-driven mindset: defining requirements clearly, writing
                maintainable code, and measuring the impact of every feature.
                I enjoy learning new domains — from healthcare and automotive
                to government systems.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#F0EFEB]">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <Icon className="size-3.5 text-[#9B9A96]" />
                    <span className="text-[10px] text-[#9B9A96] font-medium uppercase tracking-wider">
                      {label}
                    </span>
                  </div>
                  <span className="font-display font-extrabold text-2xl text-[#0A0A0A] leading-none tracking-tight">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </article>

          {/* ── Edge card (spans 2 cols) ──────────── */}
          <article className="about-anim cw-card lg:col-span-2 p-7 md:p-9 flex flex-col gap-5">
            <span className="eyebrow-pill inline-flex">My edge</span>

            <div className="flex flex-col gap-4 flex-1">
              {edges.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3.5">
                  <div className="shrink-0 flex items-center justify-center size-9 rounded-xl bg-[#F0EFEB] border border-[#E5E4E0]">
                    <Icon className="size-4 text-[#0A0A0A]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-[#0A0A0A] leading-tight mb-0.5">
                      {title}
                    </p>
                    <p className="text-[12px] text-[#9B9A96] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dark CTA strip */}
            <a
              href="#contact"
              className="mt-auto flex items-center justify-between gap-3 bg-[#0A0A0A] text-white rounded-xl px-4 py-3.5 hover:bg-[#1A1A1A] transition-colors group"
            >
              <span className="text-sm font-semibold">Let&apos;s work together</span>
              <span className="flex items-center justify-center size-7 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors text-white text-sm">
                →
              </span>
            </a>
          </article>

        </div>
      </div>
    </section>
  );
}
