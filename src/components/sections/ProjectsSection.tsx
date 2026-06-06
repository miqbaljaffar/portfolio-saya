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
        <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-mono">
          <Sparkles size={10} /> AI & ML
        </span>
      );
    }
    if (category === "IoT & Hardware") {
      return (
        <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
          <Cpu size={10} /> IoT & HW
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono">
        <Layers size={10} /> Web App
      </span>
    );
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Proyek Unggulan" />

        {/* Sliding Pill Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {projectTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setExpandedIndex(null); // collapse descriptions when tab changes
                }}
                className={`relative px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-colors cursor-pointer select-none ${
                  isActive
                    ? "text-white dark:text-gray-900"
                    : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 bg-white/60 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/80"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectsTab"
                    className="absolute inset-0 bg-gray-900 dark:bg-white rounded-full z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Responsive Grid with AnimatePresence */}
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.title}
                    className="h-full"
                  >
                    <div className="h-full glow-border rounded-2xl">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block h-full group relative z-10"
                      >
                        <Card className="h-full border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300">
                          
                          {/* Image Container */}
                          <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                            <Image
                              src={project.imageUrl}
                              alt={project.title}
                              fill
                              quality={70}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            
                            {/* Floating Category Badge */}
                            <div className="absolute top-3 left-3 z-20">
                              {getCategoryBadge(category)}
                            </div>
                          </div>

                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start gap-2">
                              <CardTitle className="text-base font-extrabold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                                {project.title}
                              </CardTitle>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors shrink-0 mt-1" />
                            </div>
                            <CardDescription className={`text-gray-500 dark:text-gray-400 text-xs mt-1.5 leading-relaxed ${!isExpanded ? "line-clamp-2" : ""}`}>
                              {project.description}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="pt-2">
                            {/* Technology Tag Badges */}
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((t, i) => (
                                <span 
                                  key={i} 
                                  className="text-[10px] font-semibold bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-800/80"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>

                            {/* View More Description Link Button */}
                            <Button
                              variant="link"
                              size="sm"
                              className="mt-3 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 p-0 h-auto font-bold text-xs"
                              onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                setExpandedIndex(isExpanded ? null : index);
                              }}
                            >
                              {isExpanded ? "Tutup deskripsi" : "Lihat lengkap"}
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

