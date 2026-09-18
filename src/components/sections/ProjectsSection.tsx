"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/lib/animations";

const categories = [
  { label: "Semua", color: "bg-primary text-primary-foreground" },
  { label: "AI & ML", color: "bg-primary text-primary-foreground" },
  { label: "Full-Stack Web", color: "bg-accent text-accent-foreground" },
  { label: "IoT & Hardware", color: "bg-[#D4A04A] text-white" },
] as const;

type CategoryLabel = (typeof categories)[number]["label"];

const categoryBadgeColor: Record<string, string> = {
  "AI & ML": "bg-primary/10 text-primary border-primary/20",
  "Full-Stack Web": "bg-accent/10 text-accent border-accent/20",
  "IoT & Hardware": "bg-[#D4A04A]/15 text-[#B8852A] border-[#D4A04A]/30",
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryLabel>("Semua");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "Semua" ? projectsData : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32 px-5 md:px-10 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          subtitle="04 · Projects"
          eyebrow="Karya &amp; Portofolio"
          title="Proyek yang pernah saya bangun"
          description="Dari prototipe machine learning sampai aplikasi web production — berikut beberapa pekerjaan yang paling saya banggakan."
        />

        <div
          ref={sectionRef}
          className="mb-10 md:mb-12 flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`relative px-4 md:px-5 py-2 text-xs md:text-sm font-medium tracking-wide rounded-[0.6rem] transition-all duration-300 border ${
                  isActive
                    ? `${cat.color} border-transparent shadow-sm`
                    : "bg-transparent text-foreground/60 hover:text-foreground border-border/50 hover:border-border"
                }`}
              >
                <span className="relative z-10">{cat.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="active-tab-project"
                    className="absolute inset-0 rounded-[0.6rem] opacity-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          variants={staggerContainer(0.06, 0)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.a
                key={project.title}
                variants={fadeUp(0)}
                layout
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                href={project.link || project.github || "#"}
                target="_blank"
                rel="noreferrer noopener"
                className="group block bg-card border border-border rounded-[1rem] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] md:text-xs font-mono px-2.5 py-1 rounded-full border ${categoryBadgeColor[project.category]}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-white/90 text-black hover:bg-white transition-colors"
                          aria-label="Github repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 md:p-6 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-bold text-base md:text-lg text-foreground leading-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
