import type { TechItem } from "@/data/portfolio";

interface SkillCardProps {
  item: TechItem;
  index: number;
}

/**
 * SkillCard — dark-mode-aware, richer hover micro-interaction.
 * Parent (TechStackSection) drives GSAP stagger via `.gsap-card`.
 */
export function SkillCard({ item }: SkillCardProps) {
  return (
    <div
      className="gsap-card group cw-card cursor-default select-none"
      style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease" }}
    >
      <div className="flex flex-col items-center gap-2.5 p-4 text-center">
        {/* Icon container — flips color on hover */}
        <div
          className="size-10 flex items-center justify-center rounded-xl transition-all duration-200"
          style={{
            background: "var(--cw-icon-bg)",
            border: "1px solid var(--cw-icon-border)",
            color: "var(--cw-icon-color)",
          }}
          aria-hidden="true"
        >
          {/* Override with group-hover via inline style on wrapper instead */}
          <span className="block group-hover:[&>svg]:scale-110 transition-transform duration-200">
            <item.icon size={18} />
          </span>
        </div>

        {/* Name */}
        <div className="space-y-0.5">
          <h4
            className="font-display font-bold text-[13px] leading-tight transition-colors duration-200"
            style={{ color: "var(--cw-black)" }}
          >
            {item.name}
          </h4>
          <p
            className="text-[10px] font-medium capitalize transition-colors duration-200"
            style={{ color: "var(--cw-grey-400)" }}
          >
            {item.level}
          </p>
        </div>
      </div>
    </div>
  );
}
