"use client";

import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
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

/**
 * Masonry-style grid layout:
 * — Desktop (lg): 3-column grid, first card spans 2 cols (featured)
 * — Tablet (sm): 2-column grid
 * — Mobile: single column
 *
 * GSAP stagger reveal on scroll-in + re-stagger on category switch.
 * Hover: card lifts -6px + red underline sweep (card-hover CSS class).
 */
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryLabel>("ALL");

  const sectionRef = useRef<HTMLElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);
  const tabsRef    = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "ALL"
      ? projectsData
      : projectsData.filter(
          (p) =>
            p.category.toUpperCase().replace(/\s+/g, " ") ===
            activeCategory.replace(/\s+/g, " ")
        );

  // Tabs entrance on scroll
  useGSAP(() => {
    gsap.set(tabsRef.current, { opacity: 0, y: 20 });
    gsap.to(tabsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  // Grid cards stagger — fires on mount AND on every category change
  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll(".project-card");
    if (!cards?.length) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, rotation: 0.4 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: {
          amount: 0.45,
          from: "start",
        },
        clearProps: "transform,opacity",
      }
    );
  }, { scope: gridRef, dependencies: [activeCategory] });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 bg-spacex-void"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-5 md:px-10">
        <SectionHeading
          number="04"
          eyebrow="PROJECTS"
          title="PROJECTS EVER BUILT"
          description="FROM MACHINE LEARNING PROTOTYPES TO PRODUCTION WEB APPS — HERE ARE SOME OF THE WORKS I'M MOST PROUD OF."
        />

        {/* Category filter tabs */}
        <div
          ref={tabsRef}
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

        {/* ── Masonry Grid ────────────────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {filtered.map((project, index) => {
            // First card in the full "ALL" view spans 2 cols on lg
            const isFeatured = activeCategory === "ALL" && index === 0;

            return (
              <article
                key={`${activeCategory}-${project.title}`}
                className={`project-card card-hover group flex flex-col border border-spacex-graphite bg-spacex-void overflow-hidden rounded-none transition-all duration-300 hover:-translate-y-1.5 ${
                  isFeatured ? "lg:col-span-2" : ""
                }`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative overflow-hidden bg-spacex-dark border-b border-spacex-graphite ${
                    isFeatured ? "aspect-[21/9]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 1024px) 100vw, 800px"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Dark scrim */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[9px] sm:text-[10px] font-mono px-2.5 py-1 ${categoryBadgeStyle}`}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Link icons — appear on hover */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-none bg-black/80 text-white hover:bg-white hover:text-black border border-white/20 hover:border-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live demo"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-none bg-spacex-flame text-white hover:bg-spacex-flame/80 border border-spacex-flame transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-4 sm:p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white leading-tight uppercase tracking-tight">
                      {project.title.toUpperCase()}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-spacex-muted shrink-0 group-hover:text-spacex-flame transition-colors duration-200" />
                  </div>

                  <p className="text-[11px] sm:text-xs text-spacex-muted leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                    {project.tags.slice(0, isFeatured ? 6 : 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-none border border-spacex-graphite bg-transparent text-spacex-silver uppercase tracking-spacex-xs"
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Project count */}
        <p className="mt-6 sm:mt-8 text-center text-[10px] font-mono uppercase tracking-spacex-md text-spacex-muted">
          {filtered.length} PROJECT{filtered.length !== 1 ? "S" : ""} DISPLAYED
          {activeCategory !== "ALL" && ` · ${activeCategory}`}
        </p>
      </div>
    </section>
  );
}
