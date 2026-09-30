"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { SectionHeading } from "@/components/section-heading";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { experienceData } from "@/data/portfolio";

export default function ExperienceSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const line  = sectionRef.current?.querySelector(".timeline-line") as HTMLElement | null;
    const items = sectionRef.current?.querySelectorAll(".timeline-item");
    const nodes = sectionRef.current?.querySelectorAll(".timeline-node");

    if (!items?.length) return;

    // Animate the vertical line drawing downward
    if (line) {
      gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
      gsap.to(line, {
        scaleY: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }

    // Stagger the flame icon nodes
    if (nodes?.length) {
      gsap.set(nodes, { opacity: 0, scale: 0.5 });
      gsap.to(nodes, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.18,
        delay: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }

    // Slide each card in from the right
    gsap.set(items, { opacity: 0, x: 30 });
    gsap.to(items, {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.13,
      delay: 0.2,
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 82%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-5 md:px-10 bg-spacex-dark"
    >
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          number="03"
          eyebrow="JOURNEY"
          title="PERJALANAN KARIER DAN PENDIDIKAN"
          description="Langkah demi langkah — dari kuliah sampai mengerjakan proyek nyata di industri."
        />

        <div ref={timelineRef} className="relative pl-4 sm:pl-5 md:pl-6">
          {/* Vertical timeline line */}
          <div className="timeline-line absolute left-0 top-0 bottom-0 w-px bg-spacex-graphite" />

          <ul className="space-y-6 sm:space-y-8 md:space-y-10">
            {experienceData.map((item, i) => {
              const Icon =
                item.type === "edu"
                  ? GraduationCap
                  : item.type === "org"
                  ? Users
                  : Briefcase;
              return (
                <li key={`${item.title}-${i}`} className="timeline-item relative">
                  {/* Icon node */}
                  <span className="timeline-node absolute -left-[22px] sm:-left-[26px] md:-left-[30px] top-1 flex items-center justify-center size-4 sm:size-5 md:size-6 rounded-sm border-2 border-spacex-dark bg-spacex-flame z-10">
                    <Icon className="size-2 sm:size-2.5 md:size-3 text-white" />
                  </span>

                  <article className="bg-spacex-void border border-spacex-graphite rounded-none p-4 sm:p-5 md:p-6 hover:border-spacex-silver transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <h3 className="font-display font-black uppercase text-base sm:text-lg md:text-xl text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-spacex-flame text-sm font-mono uppercase tracking-wide">
                          {item.organization}
                        </p>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono px-2.5 sm:px-3 py-1 rounded-none border border-spacex-graphite text-spacex-muted uppercase tracking-spacex-sm whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-spacex-muted leading-relaxed">
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
