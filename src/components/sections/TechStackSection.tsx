"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { SkillCard } from "@/components/skill-card";
import { techStackData, type TechCategory } from "@/data/portfolio";

const categories: { key: TechCategory; label: string }[] = [
  { key: "Languages", label: "LANGUAGES" },
  { key: "AI/ML", label: "AI/ML" },
  { key: "Dev Tools", label: "DEV TOOLS" },
];

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<TechCategory>("Languages");
  const items = techStackData[activeTab] || [];

  return (
    <section id="skills" className="relative py-24 md:py-32 px-5 md:px-10 bg-spacex-black">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          number="02"
          eyebrow="ARSENAL"
          title="PERALATAN YANG SAYA KUASAI"
          description="Alat teknologi pilihan yang saya gunakan setiap hari untuk membangun, melakukan testing, dan men-deploy sistem yang handal."
        />

        <div className="mb-10 md:mb-12 flex flex-wrap justify-center gap-2 md:gap-3" role="tablist" aria-label="Kategori tech stack">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(cat.key)}
                className={`px-4 md:px-5 py-2 text-xs md:text-sm font-mono uppercase tracking-spacex-sm rounded-none transition-all duration-300 border ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-spacex-muted hover:text-white border-spacex-graphite hover:border-spacex-silver"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div key={activeTab} className="space-y-6 md:space-y-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <h3 className="font-display font-black uppercase text-xl md:text-2xl text-white">{activeTab.toUpperCase()}</h3>
            <span className="text-[10px] font-mono uppercase text-spacex-muted tracking-spacex-md">
              {items.length} SKILLS
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {items.map((tech, i) => (
              <SkillCard key={tech.name} item={tech} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
