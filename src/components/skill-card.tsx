import type { TechItem } from "@/data/portfolio";

interface SkillCardProps {
  item: TechItem;
  index: number;
}

/**
 * SkillCard — Creatiwise-style clean white card.
 * GSAP stagger animation driven by parent (TechStackSection).
 * The `gsap-card` class is the selector target.
 */
export function SkillCard({ item }: SkillCardProps) {
  return (
    <div className="gsap-card group cw-card cursor-default">
      <div className="flex flex-col items-center gap-2.5 p-4 text-center">
        {/* Icon container */}
        <div className="size-10 flex items-center justify-center rounded-xl bg-[#F0EFEB] border border-[#E5E4E0] text-[#6B6B6B] group-hover:bg-[#0A0A0A] group-hover:text-white group-hover:border-[#0A0A0A] transition-all duration-200">
          <item.icon size={18} />
        </div>

        {/* Name + level */}
        <div className="space-y-0.5">
          <h4 className="font-display font-bold text-[#0A0A0A] text-[13px] leading-tight">
            {item.name}
          </h4>
          <p className="text-[10px] text-[#9B9A96] font-medium capitalize">
            {item.level}
          </p>
        </div>
      </div>
    </div>
  );
}
