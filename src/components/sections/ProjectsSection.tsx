"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projectsData } from "@/data/portfolio";

type EmblaApiType = NonNullable<UseEmblaCarouselType[1]>;

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
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const autoplay = useRef(
    Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoplay.current]
  );

  const filtered =
    activeCategory === "ALL"
      ? projectsData
      : projectsData.filter(
          (p) =>
            p.category.toUpperCase().replace(/\s+/g, " ") ===
            activeCategory.replace(/\s+/g, " ")
        );

  const onSelect = useCallback((api: EmblaApiType) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  /* Reinit carousel when category filter changes */
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({ loop: true, align: "start", dragFree: true }, [autoplay.current]);
    emblaApi.scrollTo(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const scrollPrev = useCallback(() => {
    autoplay.current.reset();
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    autoplay.current.reset();
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 md:py-32 bg-spacex-void overflow-hidden"
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
      </div>

      {/* Full-bleed carousel */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex gap-4 md:gap-5 pl-4 sm:pl-5 md:pl-10 lg:pl-[max(2.5rem,calc((100vw_-_72rem)_/_2_+_2.5rem))]">
          {filtered.map((project, i) => (
            <a
              key={`${activeCategory}-${project.title}`}
              href={project.link || project.github || "#"}
              target="_blank"
              rel="noreferrer noopener"
              style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}
              className="animate-fade-up card-hover flex-none w-[280px] sm:w-[320px] md:w-[360px] border border-spacex-graphite rounded-none bg-spacex-void overflow-hidden transition-colors duration-200"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-spacex-dark border-b border-spacex-graphite">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="360px"
                  className="object-cover"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <span className={`text-[9px] sm:text-[10px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 ${categoryBadgeStyle}`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-end justify-end p-3 sm:p-4 bg-black/40">
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <span
                        role="button"
                        aria-label="Github repository"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.github, "_blank", "noreferrer");
                        }}
                        className="p-1.5 sm:p-2 rounded-none bg-white text-black hover:bg-spacex-silver transition-colors border border-white cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </span>
                    )}
                    {project.link && (
                      <span
                        role="button"
                        aria-label="Live demo"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.link, "_blank", "noreferrer");
                        }}
                        className="p-1.5 sm:p-2 rounded-none bg-spacex-flame text-white hover:bg-spacex-flame/80 transition-colors border border-spacex-flame cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-sm sm:text-base text-white leading-tight uppercase tracking-tight">
                    {project.title.toUpperCase()}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-spacex-muted shrink-0" />
                </div>
                <p className="text-[11px] sm:text-xs text-spacex-muted leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-none border border-spacex-graphite bg-transparent text-spacex-silver uppercase tracking-spacex-xs"
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

      {/* Prev / Next controls */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-5 md:px-10">
        <div className="flex items-center justify-end gap-2 mt-5 sm:mt-6 md:mt-8">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Proyek sebelumnya"
            className="size-8 sm:size-9 inline-flex items-center justify-center rounded-none border border-spacex-graphite bg-spacex-dark text-spacex-muted hover:bg-spacex-steel hover:text-white hover:border-spacex-silver transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Proyek berikutnya"
            className="size-8 sm:size-9 inline-flex items-center justify-center rounded-none border border-spacex-graphite bg-spacex-dark text-spacex-muted hover:bg-spacex-steel hover:text-white hover:border-spacex-silver transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
