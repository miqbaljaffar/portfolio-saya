"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { SectionHeading } from "@/components/section-heading";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { experienceData } from "@/data/portfolio";

const typeConfig = {
  work: { icon: Briefcase, bg: "bg-[#0A0A0A]",    text: "text-white",       label: "Work"        },
  edu:  { icon: GraduationCap, bg: "bg-[#F0EFEB]", text: "text-[#0A0A0A]", label: "Education"   },
  org:  { icon: Users, bg: "bg-[#F0EFEB]",          text: "text-[#0A0A0A]", label: "Organization"},
};

export default function ExperienceSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const line  = sectionRef.current?.querySelector(".tl-line") as HTMLElement | null;
    const items = sectionRef.current?.querySelectorAll(".tl-item");

    if (line) {
      gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
      gsap.to(line, {
        scaleY: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: timelineRef.current, start: "top 82%", once: true },
      });
    }

    if (items?.length) {
      gsap.set(items, { opacity: 0, x: 24 });
      gsap.to(items, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
        scrollTrigger: { trigger: timelineRef.current, start: "top 82%", once: true },
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 px-5 md:px-8 bg-[#F8F7F4]"
    >
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Journey"
          title="Career &amp; Education Timeline"
          description="Step by step — from university through real-world industry projects."
        />

        <div ref={timelineRef} className="relative pl-6 md:pl-8">
          {/* Vertical timeline line */}
          <div className="tl-line absolute left-[11px] md:left-[13px] top-0 bottom-0 w-0.5 bg-[#E5E4E0] rounded-full" />

          <ul className="space-y-5 md:space-y-6">
            {experienceData.map((item, i) => {
              const cfg  = typeConfig[item.type];
              const Icon = cfg.icon;
              return (
                <li key={`${item.title}-${i}`} className="tl-item relative">
                  {/* Node dot */}
                  <span
                    className={`absolute -left-[21px] md:-left-[25px] top-4 flex items-center justify-center size-5 md:size-6 rounded-full border-2 border-white shadow-sm ${cfg.bg}`}
                  >
                    <Icon className={`size-2.5 md:size-3 ${cfg.text}`} />
                  </span>

                  <article className="cw-card p-5 md:p-6 hover:-translate-y-0.5 transition-transform duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-[#0A0A0A] text-base md:text-lg leading-tight mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-[13px] font-semibold text-[#6B6B6B]">
                          {item.organization}
                        </p>
                      </div>
                      <span className="shrink-0 tag-pill">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-[13px] md:text-sm text-[#9B9A96] leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
