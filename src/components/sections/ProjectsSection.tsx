"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { featuredProjects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, Sparkles, Cpu, Layers } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const projectTabs = ["Semua", "AI & Machine Learning", "Full-Stack Web", "IoT & Hardware"];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getProjectCategory = (project: typeof featuredProjects[0]) => {
    const techString = project.tech.map((t: string) => t.toLowerCase()).join(" ");
    if (
      techString.includes("arduino") ||
      techString.includes("iot") ||
      techString.includes("hardware") ||
      techString.includes("c++")
    ) {
      return "IoT & Hardware";
    }
    if (
      techString.includes("python") ||
      techString.includes("cnn") ||
      techString.includes("tensorflow") ||
      techString.includes("keras") ||
      techString.includes("nlp") ||
      techString.includes("scikit-learn") ||
      techString.includes("gemini") ||
      techString.includes("ai")
    ) {
      return "AI & Machine Learning";
    }
    return "Full-Stack Web";
  };

  const filteredProjects = featuredProjects.filter((project) => {
    if (activeTab === "Semua") return true;
    return getProjectCategory(project) === activeTab;
  });

  const getCategoryBadge = (category: string) => {
    if (category === "AI & Machine Learning") {
      return (
        <span className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:text-primary border border-primary/20 font-mono tracking-wider backdrop-blur-sm">
          <Sparkles size={10} className="text-vermillion dark:text-accent" /> AI &amp; ML
        </span>
      );
    }
    if (category === "IoT & Hardware") {
      return (
        <span className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-kincha/15 text-foreground dark:text-foreground border border-kincha/30 font-mono tracking-wider backdrop-blur-sm">
          <Cpu size={10} className="text-kincha" /> IoT &amp; HW
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-vermillion/10 text-vermillion dark:text-accent border border-vermillion/20 dark:border-accent/25 font-mono tracking-wider backdrop-blur-sm">
        <Layers size={10} /> Web App
      </span>
    );
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-washi-texture overflow-hidden">
      <div className="absolute inset-0 bg-seigaiha opacity-60 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Proyek Unggulan" subTitle="04 · Works · 作品集" />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {projectTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setExpandedIndex(null);
                }}
                className={`relative px-4 py-2 text-xs md:text-sm font-display font-semibold rounded-[0.6rem] transition-all cursor-pointer select-none ${
                  isActive
                    ? "text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground dark:hover:text-foreground bg-card/60 dark:bg-card/30 border border-border/80 backdrop-blur-sm hover:border-border"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectsTab"
                    className="absolute inset-0 rounded-[0.6rem] bg-primary dark:bg-primary shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        <AnimatedSection className="max-w-6xl mx-auto min-h-[380px]">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const category = getProjectCategory(project);
                const isExpanded = expandedIndex === index;

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.92, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -8 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    key={project.title}
                    className="h-full"
                  >
                    <div className="h-full rounded-[1.1rem] crafted-border">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full group relative z-10"
                      >
                        <Card className="h-full border border-border dark:border-border shadow-sm bg-card dark:bg-card overflow-hidden rounded-[1.1rem] hover:shadow-xl hover:shadow-primary/5 transition-all duration-400">

                          <div className="relative w-full h-48 overflow-hidden bg-muted">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-400 z-10 pointer-events-none" />
                            <Image
                              src={project.imageUrl}
                              alt={project.title}
                              fill
                              quality={75}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-[5] pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />

                            <div className="absolute top-3 left-3 z-20">
                              {getCategoryBadge(category)}
                            </div>

                            <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                              <div className="hanko-stamp !text-[9px] !py-0.5 !px-1.5 !rounded-[3px]">
                                作品
                              </div>
                            </div>
                          </div>

                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start gap-2">
                              <CardTitle className="font-display text-base font-extrabold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                                {project.title}
                              </CardTitle>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-vermillion dark:group-hover:text-accent transition-colors shrink-0 mt-1" />
                            </div>
                            <CardDescription className={`text-muted-foreground text-xs mt-1.5 leading-relaxed ${!isExpanded ? "line-clamp-2" : ""}`}>
                              {project.description}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="pt-2">
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((t, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] font-semibold bg-muted dark:bg-muted/60 text-muted-foreground dark:text-muted-foreground px-2 py-0.5 rounded-md border border-border/60 dark:border-border/40 font-mono"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>

                            <Button
                              variant="link"
                              size="sm"
                              className="mt-3 text-vermillion dark:text-accent hover:text-primary dark:hover:text-primary p-0 h-auto font-bold text-xs min-h-[44px] min-w-[44px] px-2 font-display"
                              aria-label={isExpanded ? `Tutup deskripsi ${project.title}` : `Lihat deskripsi lengkap ${project.title}`}
                              onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                setExpandedIndex(isExpanded ? null : index);
                              }}
                            >
                              {isExpanded ? "Tutup deskripsi ↓" : "Lihat lengkap →"}
                            </Button>
                          </CardContent>
                        </Card>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
