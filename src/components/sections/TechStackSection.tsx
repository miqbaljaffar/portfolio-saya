"use client";

import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { SectionHeading } from "@/components/section-heading";
import { SkillCard } from "@/components/skill-card";
import { techStackData, type TechCategory } from "@/data/portfolio";

const categories: { key: TechCategory; label: string }[] = [
  { key: "Languages", label: "Languages" },
  { key: "AI/ML",     label: "AI / ML" },
  { key: "Dev Tools", label: "Dev Tools" },
];

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<TechCategory>("Languages");
  const gridRef    = useRef<HTMLDivElement>(null);
  const tabsRef    = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const items = techStackData[activeTab] || [];

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

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll(".gsap-card");
    if (!cards?.length) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.04,
        clearProps: "transform",
      }
    );
  }, { scope: gridRef, dependencies: [activeTab] });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 px-5 md:px-8 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I work with"
          description="The technology stack I rely on daily to build, test, and deploy reliable systems."
        />

        {/* Tab pills */}
        <div
          ref={tabsRef}
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Tech stack categories"
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(cat.key)}
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

        {/* Skill grid */}
        <div ref={gridRef}>
          <div className="flex items-center gap-2 mb-5">
            <h3 className="font-display font-bold text-[#0A0A0A] text-lg">
              {activeTab}
            </h3>
            <span className="tag-pill">{items.length} skills</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {items.map((tech, i) => (
              <SkillCard key={tech.name} item={tech} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
