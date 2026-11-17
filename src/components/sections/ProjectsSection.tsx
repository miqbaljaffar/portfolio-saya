"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Github, SearchX } from "lucide-react";
import { projectsData } from "@/data/portfolio";

const categories = [
  { label: "All" },
  { label: "AI & ML" },
  { label: "Full-Stack Web" },
  { label: "IoT & Hardware" },
] as const;

type CategoryLabel = (typeof categories)[number]["label"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryLabel>("All");
  const [animKey, setAnimKey]               = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);
  const tabsRef    = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  // Trigger re-mount animation key on category change
  const handleCategoryChange = (cat: CategoryLabel) => {
    setActiveCategory(cat);
    setAnimKey((k) => k + 1);
  };

  // Initial entrance animation for tabs
  useGSAP(() => {
    gsap.set(tabsRef.current, { opacity: 0, y: 20 });
    gsap.to(tabsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power4.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
    });
  }, { scope: sectionRef });

  // Per-filter card entrance animation
  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll(".project-card");
    if (!cards?.length) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 28, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.35, from: "start" },
        clearProps: "transform,opacity",
      }
    );
  }, { scope: gridRef, dependencies: [animKey] });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 px-5 md:px-8"
      style={{ background: "var(--cw-section-a)" }}
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Projects I've built"
          description="From ML prototypes to production web apps — here are some of the works I'm most proud of."
        />

        {/* Category filter pills */}
        <div
          ref={tabsRef}
          className="mb-10 flex flex-wrap justify-center gap-2"
          aria-label="Project categories"
          role="toolbar"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => handleCategoryChange(cat.label)}
                className="px-5 py-2 text-[13px] font-medium rounded-full border transition-all duration-200"
                style={
                  isActive
                    ? {
                        background: "var(--cw-black)",
                        color: "var(--cw-white)",
                        borderColor: "var(--cw-black)",
                        boxShadow: "var(--cw-shadow-sm)",
                      }
                    : {
                        background: "transparent",
                        color: "var(--cw-grey-600)",
                        borderColor: "var(--cw-grey-100)",
                      }
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--cw-grey-200)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--cw-black)";
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--cw-grey-50)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--cw-grey-100)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--cw-grey-600)";
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div ref={gridRef} key={animKey}>
          {filtered.length === 0 ? (
            /* ── Empty state ── */
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <div className="empty-icon">
                <SearchX
                  className="size-12"
                  style={{ color: "var(--cw-grey-200)" }}
                />
              </div>
              <div className="space-y-1">
                <p
                  className="font-display font-bold text-lg"
                  style={{ color: "var(--cw-black)" }}
                >
                  No projects found
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--cw-grey-400)" }}
                >
                  No projects in the &ldquo;{activeCategory}&rdquo; category yet.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCategoryChange("All")}
                className="btn-outline text-sm mt-2"
              >
                View all projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project, index) => {
                const isFeatured = activeCategory === "All" && index === 0;
                return (
                  <article
                    key={`${activeCategory}-${project.title}`}
                    className={`project-card project-card-cw cw-card overflow-hidden flex flex-col group ${
                      isFeatured ? "lg:col-span-2" : ""
                    }`}
                  >
                    {/* Thumbnail */}
                    <div
                      className={`relative overflow-hidden ${
                        isFeatured ? "aspect-[21/9]" : "aspect-[16/9]"
                      }`}
                      style={{ background: "var(--cw-grey-50)" }}
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
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />

                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className="tag-pill backdrop-blur-sm"
                          style={{
                            background: "rgba(255,255,255,0.90)",
                            borderColor: "rgba(255,255,255,0.60)",
                            color: "#0A0A0A",
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />

                      {/* Action buttons on hover */}
                      <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`GitHub repository for ${project.title}`}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-full backdrop-blur-sm shadow-sm transition-colors"
                            style={{
                              background: "rgba(255,255,255,0.90)",
                              color: "#0A0A0A",
                            }}
                          >
                            <Github className="size-3.5" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Live demo for ${project.title}`}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-full shadow-sm transition-colors"
                            style={{ background: "#0A0A0A", color: "#FFFFFF" }}
                          >
                            <ArrowUpRight className="size-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3
                          className="font-display font-bold text-[15px] leading-snug"
                          style={{ color: "var(--cw-black)" }}
                        >
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          className="size-4 shrink-0 transition-colors duration-200 group-hover:text-foreground"
                          style={{ color: "var(--cw-grey-200)" }}
                        />
                      </div>

                      <p
                        className="text-[12px] md:text-[13px] leading-relaxed line-clamp-3 flex-1"
                        style={{ color: "var(--cw-grey-400)" }}
                      >
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.slice(0, isFeatured ? 6 : 4).map((tag) => (
                          <span key={tag} className="tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
