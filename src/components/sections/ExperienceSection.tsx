"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { experienceData } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="relative py-24 md:py-32 px-5 md:px-10 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          subtitle="03 · Journey"
          eyebrow="Experience &amp; Education"
          title="Perjalanan karier dan pendidikan"
          description="Langkah demi langkah — dari kuliah sampai mengerjakan proyek nyata di industri."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer(0.08, 0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative pl-5 md:pl-6"
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
          <ul className="space-y-8 md:space-y-10">
            {experienceData.map((item, i) => {
              const Icon =
                item.type === "edu" ? GraduationCap : item.type === "org" ? Users : Briefcase;
              return (
                <motion.li key={`${item.title}-${i}`} variants={fadeUp(i * 0.08)} className="relative">
                  <span className="absolute -left-[26px] md:-left-[30px] top-1 flex items-center justify-center size-5 md:size-6 rounded-full border-2 border-card bg-accent z-10 ring-4 ring-background">
                    <Icon className="size-2.5 md:size-3 text-accent-foreground" />
                  </span>

                  <div className="bg-card border border-border rounded-[0.9rem] p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-lg md:text-xl text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-accent text-sm font-medium">{item.organization}</p>
                      </div>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
