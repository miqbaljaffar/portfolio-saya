"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { SectionHeading } from "@/components/section-heading";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { experienceData } from "@/data/portfolio";

const typeConfig = {
  work: { icon: Briefcase, darkBg: true,  label: "Work"         },
  edu:  { icon: GraduationCap, darkBg: false, label: "Education" },
  org:  { icon: Users, darkBg: false,     label: "Organization"  },
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
      className="relative py-20 sm:py-24 md:py-32 px-5 md:px-8"
      style={{ background: "var(--cw-section-a)" }}
    >
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Journey"
          title="Career &amp; Education Timeline"
          description="Step by step — from university through real-world industry projects."
        />

        <div ref={timelineRef} className="relative pl-6 md:pl-8">
          {/* Vertical timeline line */}
          <div
            className="tl-line absolute left-[11px] md:left-[13px] top-0 bottom-0 w-0.5 rounded-full"
            style={{ background: "var(--cw-timeline-line)" }}
          />

          <ul className="space-y-5 md:space-y-6">
            {experienceData.map((item, i) => {
              const cfg  = typeConfig[item.type];
              const Icon = cfg.icon;
              return (
                <li key={`${item.title}-${i}`} className="tl-item relative">
                  {/* Node dot */}
                  <span
                    className="absolute -left-[21px] md:-left-[25px] top-4 flex items-center justify-center size-5 md:size-6 rounded-full border-2 shadow-sm"
                    style={{
                      background: cfg.darkBg ? "var(--cw-black)" : "var(--cw-icon-bg)",
                      borderColor: "var(--background)",
                    }}
                  >
                    <Icon
                      className="size-2.5 md:size-3"
                      style={{ color: cfg.darkBg ? "var(--cw-white)" : "var(--cw-black)" }}
                    />
                  </span>

                  <article className="cw-card p-5 md:p-6 hover:-translate-y-0.5 transition-transform duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div className="min-w-0">
                        <h3
                          className="font-display font-bold text-base md:text-lg leading-tight mb-0.5"
                          style={{ color: "var(--cw-black)" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-[13px] font-semibold"
                          style={{ color: "var(--cw-grey-600)" }}
                        >
                          {item.organization}
                        </p>
                      </div>
                      <span className="shrink-0 tag-pill">{item.period}</span>
                    </div>
                    <p
                      className="text-[13px] md:text-sm leading-relaxed"
                      style={{ color: "var(--cw-grey-400)" }}
                    >
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
