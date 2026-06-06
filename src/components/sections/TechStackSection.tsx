"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { staggerContainer, staggerItem } from "@/lib/animations";
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
import { Database, ScanText, BarChart3 } from "lucide-react";

// Categorized tech stack items with their specific brand icons, colors, and hover effects
const techCategories = [
  {
    title: "Languages & Databases",
    items: [
      { name: "Python", icon: SiPython, hoverClass: "hover:text-[#3776AB] hover:border-[#3776AB]/30 hover:shadow-[#3776AB]/5" },
      { name: "JavaScript", icon: SiJavascript, hoverClass: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/30 hover:shadow-[#F7DF1E]/5" },
      { name: "TypeScript", icon: SiTypescript, hoverClass: "hover:text-[#3178C6] hover:border-[#3178C6]/30 hover:shadow-[#3178C6]/5" },
      { name: "PHP", icon: SiPhp, hoverClass: "hover:text-[#777BB4] hover:border-[#777BB4]/30 hover:shadow-[#777BB4]/5" },
      { name: "SQL", icon: Database, hoverClass: "hover:text-[#003B57] hover:border-[#003B57]/30 hover:shadow-[#003B57]/5" },
      { name: "MariaDB", icon: SiMariadb, hoverClass: "hover:text-[#003545] dark:hover:text-[#00c0f6] hover:border-[#003545]/30 hover:shadow-[#003545]/5" },
      { name: "Firebase", icon: SiFirebase, hoverClass: "hover:text-[#FFCA28] hover:border-[#FFCA28]/30 hover:shadow-[#FFCA28]/5" },
    ],
  },
  {
    title: "AI, Machine Learning & Analytics",
    items: [
      { name: "TensorFlow", icon: SiTensorflow, hoverClass: "hover:text-[#FF6F00] hover:border-[#FF6F00]/30 hover:shadow-[#FF6F00]/5" },
      { name: "Keras", icon: SiKeras, hoverClass: "hover:text-[#D00000] hover:border-[#D00000]/30 hover:shadow-[#D00000]/5" },
      { name: "Scikit-Learn", icon: SiScikitlearn, hoverClass: "hover:text-[#F89939] hover:border-[#F89939]/30 hover:shadow-[#F89939]/5" },
      { name: "OpenCV", icon: SiOpencv, hoverClass: "hover:text-[#5C3EE8] hover:border-[#5C3EE8]/30 hover:shadow-[#5C3EE8]/5" },
      { name: "PaddleOCR", icon: ScanText, hoverClass: "hover:text-[#10B981] hover:border-[#10B981]/30 hover:shadow-[#10B981]/5" },
      { name: "Roboflow", icon: SiRoboflow, hoverClass: "hover:text-[#6706FF] hover:border-[#6706FF]/30 hover:shadow-[#6706FF]/5" },
      { name: "Streamlit", icon: SiStreamlit, hoverClass: "hover:text-[#FF4B4B] hover:border-[#FF4B4B]/30 hover:shadow-[#FF4B4B]/5" },
      { name: "Tableau", icon: BarChart3, hoverClass: "hover:text-[#E97627] hover:border-[#E97627]/30 hover:shadow-[#E97627]/5" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", icon: SiDocker, hoverClass: "hover:text-[#2496ED] hover:border-[#2496ED]/30 hover:shadow-[#2496ED]/5" },
      { name: "Git", icon: SiGit, hoverClass: "hover:text-[#F05032] hover:border-[#F05032]/30 hover:shadow-[#F05032]/5" },
      { name: "Vercel", icon: SiVercel, hoverClass: "hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 hover:shadow-black/5" },
    ],
  },
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-16 md:py-20 relative bg-gray-50/50 dark:bg-[#08080c]/30 border-y border-gray-100 dark:border-gray-900/60">
      <div className="container mx-auto px-4">
        <SectionHeading title="Tech Stack & Tools" />
        
        <AnimatedSection className="mb-10 -mt-2">
          <p className="text-sm md:text-base text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Teknologi, pustaka, dan alat bantu pengembangan yang saya gunakan untuk mendesain, membangun, serta menerapkan solusi web dan kecerdasan buatan.
          </p>
        </AnimatedSection>

        <div className="space-y-10 max-w-5xl mx-auto">
          {techCategories.map((category, catIdx) => (
            <AnimatedSection key={catIdx} className="space-y-4" variants={staggerContainer}>
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase px-1">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {category.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={itemIdx}
                      variants={staggerItem}
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`group flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200/50 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:bg-white dark:hover:bg-gray-900 hover:shadow-md transition-all duration-300 cursor-default ${item.hoverClass}`}
                    >
                      <div className="mb-2.5 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-8 h-8 md:w-9 md:h-9 text-gray-400 dark:text-gray-600 transition-colors duration-300 group-hover:text-inherit" />
                      </div>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
