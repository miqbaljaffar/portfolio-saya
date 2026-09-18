"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/portfolio";

const categories = [
  { label: "ALL" },
  { label: "AI & ML" },
  { label: "FULL-STACK WEB" },
  { label: "IOT & HARDWARE" },
] as const;

type CategoryLabel = (typeof categories)[number]["label"];

const categoryBadgeStyle =
  "rounded-none border border-spacex-graphite/50 bg-spacex-void text-spacex-silver uppercase tracking-spacex-xs";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryLabel>("ALL");

  const filtered =
    activeCategory === "ALL"
      ? projectsData
      : projectsData.filter(
          (p) =>
            p.category.toUpperCase().replace(/\s+/g, " ") ===
            activeCategory.replace(/\s+/g, " ")
        );

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-5 md:px-10 bg-spacex-void"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          number="04"
          eyebrow="PROJECTS"
          title="PROJECTS EVER BUILT"
          description="FROM MACHINE LEARNING PROTOTYPES TO PRODUCTION WEB APPS — HERE ARE SOME OF THE WORKS I'M MOST PROUD OF."
        />

        <div
          className="mb-8 sm:mb-10 md:mb-12 flex flex-wrap justify-center gap-2 md:gap-3"
          role="tablist"
          aria-label="Kategori proyek"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm font-mono tracking-spacex-sm uppercase rounded-none transition-colors duration-200 border ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-spacex-muted border-spacex-graphite hover:text-white hover:border-spacex-silver"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filtered.map((project, i) => (
            <a
              key={project.title}
              href={project.link || project.github || "#"}
              target="_blank"
              rel="noreferrer noopener"
              style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}
              className="animate-fade-up card-hover block border border-spacex-graphite rounded-none bg-spacex-void overflow-hidden transition-colors duration-200"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-spacex-dark border-b border-spacex-graphite">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <span
                    className={`text-[9px] sm:text-[10px] md:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 ${categoryBadgeStyle}`}
                  >
                    {project.category.toUpperCase()}
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-end justify-end p-3 sm:p-4 bg-black/40">
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 sm:p-2 rounded-none bg-white text-black hover:bg-spacex-silver transition-colors border border-white"
                        aria-label="Github repository"
                      >
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 sm:p-2 rounded-none bg-spacex-flame text-white hover:bg-spacex-flame/80 transition-colors border border-spacex-flame"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-sm sm:text-base md:text-lg text-white leading-tight uppercase tracking-tight">
                    {project.title.toUpperCase()}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-spacex-muted shrink-0 transition-colors duration-200 group-hover:text-white" />
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm text-spacex-muted leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] md:text-[11px] font-mono px-1.5 sm:px-2 py-0.5 rounded-none border border-spacex-graphite bg-transparent text-spacex-silver uppercase tracking-spacex-xs"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
