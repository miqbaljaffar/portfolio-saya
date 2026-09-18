"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import {
  SiPython,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiMariadb,
  SiFirebase,
  SiRoboflow,
  SiStreamlit,
  SiDocker,
  SiVercel,
  SiGit,
} from "react-icons/si";
import { Database, ScanText, BarChart3, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "Languages & Databases",
    jpTitle: "言語 & データベース",
    items: [
      { name: "Python", icon: SiPython, hoverClass: "hover:text-[#3776AB] hover:border-[#3776AB]/30 hover:shadow-[#3776AB]/10", shadowColor: "rgba(55,118,171,0.15)" },
      { name: "JavaScript", icon: SiJavascript, hoverClass: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/30 hover:shadow-[#F7DF1E]/10", shadowColor: "rgba(247,223,30,0.1)" },
      { name: "TypeScript", icon: SiTypescript, hoverClass: "hover:text-[#3178C6] hover:border-[#3178C6]/30 hover:shadow-[#3178C6]/10", shadowColor: "rgba(49,120,198,0.15)" },
      { name: "PHP", icon: SiPhp, hoverClass: "hover:text-[#777BB4] hover:border-[#777BB4]/30 hover:shadow-[#777BB4]/10", shadowColor: "rgba(119,123,180,0.15)" },
      { name: "SQL", icon: Database, hoverClass: "hover:text-[#003B57] hover:border-[#003B57]/30 hover:shadow-[#003B57]/10", shadowColor: "rgba(0,59,87,0.15)" },
      { name: "MariaDB", icon: SiMariadb, hoverClass: "hover:text-[#003545] dark:hover:text-[#00c0f6] hover:border-[#003545]/30 hover:shadow-[#003545]/10", shadowColor: "rgba(0,192,246,0.15)" },
      { name: "Firebase", icon: SiFirebase, hoverClass: "hover:text-[#FFCA28] hover:border-[#FFCA28]/30 hover:shadow-[#FFCA28]/10", shadowColor: "rgba(255,202,40,0.15)" },
    ],
  },
  {
    title: "AI, Machine Learning & Analytics",
    jpTitle: "AI & 機械学習",
    items: [
      { name: "TensorFlow", icon: SiTensorflow, hoverClass: "hover:text-[#FF6F00] hover:border-[#FF6F00]/30 hover:shadow-[#FF6F00]/10", shadowColor: "rgba(255,111,0,0.15)" },
      { name: "Keras", icon: SiKeras, hoverClass: "hover:text-[#D00000] hover:border-[#D00000]/30 hover:shadow-[#D00000]/10", shadowColor: "rgba(208,0,0,0.15)" },
      { name: "Scikit-Learn", icon: SiScikitlearn, hoverClass: "hover:text-[#F89939] hover:border-[#F89939]/30 hover:shadow-[#F89939]/10", shadowColor: "rgba(248,153,57,0.15)" },
      { name: "OpenCV", icon: SiOpencv, hoverClass: "hover:text-[#5C3EE8] hover:border-[#5C3EE8]/30 hover:shadow-[#5C3EE8]/10", shadowColor: "rgba(92,62,232,0.15)" },
      { name: "PaddleOCR", icon: ScanText, hoverClass: "hover:text-[#10B981] hover:border-[#10B981]/30 hover:shadow-[#10B981]/10", shadowColor: "rgba(16,185,129,0.15)" },
      { name: "Roboflow", icon: SiRoboflow, hoverClass: "hover:text-[#6706FF] hover:border-[#6706FF]/30 hover:shadow-[#6706FF]/10", shadowColor: "rgba(103,6,255,0.15)" },
      { name: "Streamlit", icon: SiStreamlit, hoverClass: "hover:text-[#FF4B4B] hover:border-[#FF4B4B]/30 hover:shadow-[#FF4B4B]/10", shadowColor: "rgba(255,75,75,0.15)" },
      { name: "Tableau", icon: BarChart3, hoverClass: "hover:text-[#E97627] hover:border-[#E97627]/30 hover:shadow-[#E97627]/10", shadowColor: "rgba(233,118,39,0.15)" },
    ],
  },
  {
    title: "DevOps & Tools",
    jpTitle: "開発ツール",
    items: [
      { name: "Docker", icon: SiDocker, hoverClass: "hover:text-[#2496ED] hover:border-[#2496ED]/30 hover:shadow-[#2496ED]/10", shadowColor: "rgba(36,150,237,0.15)" },
      { name: "Git", icon: SiGit, hoverClass: "hover:text-[#F05032] hover:border-[#F05032]/30 hover:shadow-[#F05032]/10", shadowColor: "rgba(240,80,50,0.15)" },
      { name: "Vercel", icon: SiVercel, hoverClass: "hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 hover:shadow-black/10", shadowColor: "rgba(120,120,120,0.15)" },
    ],
  },
];

const categories = ["All", "Languages & DB", "AI & ML", "DevOps & Tools"];

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCategories = techCategories.filter((cat) => {
    if (activeTab === "All") return true;
    if (activeTab === "Languages & DB") return cat.title.includes("Languages");
    if (activeTab === "AI & ML") return cat.title.includes("AI");
    if (activeTab === "DevOps & Tools") return cat.title.includes("DevOps");
    return true;
  });

  return (
    <section id="tech-stack" className="py-20 md:py-24 relative border-y border-border overflow-hidden bg-asanoha">
      <div className="absolute inset-0 bg-washi-texture pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Tech Stack & Tools" subTitle="02 · Arsenal · 武器" />

        <AnimatedSection className="mb-10 -mt-2">
          <p className="text-sm md:text-base text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Teknologi, pustaka, dan alat bantu pengembangan yang saya gunakan untuk mendesain, membangun, serta menerapkan solusi web dan kecerdasan buatan end-to-end.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-2 text-xs md:text-sm font-display font-semibold rounded-[0.6rem] transition-all cursor-pointer select-none ${
                  isActive
                    ? "text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground dark:hover:text-foreground bg-card/60 dark:bg-card/30 border border-border/80 backdrop-blur-sm hover:border-border"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTechTab"
                    className="absolute inset-0 rounded-[0.6rem] bg-primary dark:bg-primary shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        <div className="space-y-12 max-w-5xl mx-auto min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              {filteredCategories.map((category, catIdx) => (
                <div key={catIdx} className="space-y-4">
                  <div className="flex items-baseline gap-3 px-1">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-primary dark:text-primary uppercase font-mono">
                      {category.title}
                    </h3>
                    <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
                      {category.jpTitle}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-border/80 via-border/40 to-transparent" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {category.items.map((item, itemIdx) => {
                      const Icon = item.icon;
                      const hoverClassString = item.hoverClass;

                      return (
                        <motion.div
                          key={itemIdx}
                          whileHover={{
                            y: -5,
                            scale: 1.03,
                          }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`group flex flex-col items-center justify-center p-4 min-h-[82px] rounded-[0.85rem] border-border bg-card dark:bg-card hover:bg-card hover:shadow-lg transition-all duration-300 cursor-default relative crafted-border ${hoverClassString}`}
                          role="img"
                          aria-label={item.name}
                        >
                          <div className="mb-2.5 transition-transform duration-300 group-hover:scale-110">
                            <Icon
                              className="w-8 h-8 md:w-9 md:h-9 text-muted-foreground/70 dark:text-muted-foreground/60 transition-colors duration-300 group-hover:text-inherit"
                              aria-hidden="true"
                            />
                          </div>
                          <span className="text-[11px] font-semibold text-muted-foreground dark:text-muted-foreground group-hover:text-foreground dark:group-hover:text-foreground transition-colors duration-300 font-display tracking-wide">
                            {item.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
