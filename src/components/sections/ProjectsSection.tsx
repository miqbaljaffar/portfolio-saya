"use client";

import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Github } from "lucide-react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);
  const tabsRef    = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter(
          (p) => p.category === activeCategory
        );

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

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll(".project-card");
    if (!cards?.length) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: { amount: 0.4, from: "start" },
        clearProps: "transform,opacity",
      }
    );
  }, { scope: gridRef, dependencies: [activeCategory] });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 px-5 md:px-8 bg-white"
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
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-5 py-2 text-[13px] font-medium rounded-full border transition-all duration-200 ${
                  isActive
                    ? "bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-sm"
                    : "bg-transparent text-[#6B6B6B] border-[#E5E4E0] hover:border-[#CCCBC7] hover:text-[#0A0A0A] hover:bg-[#F0EFEB]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
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
                  className={`relative overflow-hidden bg-[#F0EFEB] ${
                    isFeatured ? "aspect-[21/9]" : "aspect-[16/9]"
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
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="tag-pill bg-white/90 backdrop-blur-sm border-white/60 text-[#0A0A0A]">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-white/90 text-[#0A0A0A] hover:bg-white shadow-sm transition-colors backdrop-blur-sm"
                      >
                        <Github className="size-3.5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live demo"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-[#0A0A0A] text-white hover:bg-[#2A2A2A] shadow-sm transition-colors"
                      >
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-[#0A0A0A] text-[15px] leading-snug">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="size-4 text-[#CCCBC7] shrink-0 group-hover:text-[#0A0A0A] transition-colors" />
                  </div>

                  <p className="text-[12px] md:text-[13px] text-[#9B9A96] leading-relaxed line-clamp-3 flex-1">
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
      </div>
    </section>
  );
}
