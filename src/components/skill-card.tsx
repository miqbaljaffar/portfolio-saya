import type { TechItem } from "@/data/portfolio";

interface SkillCardProps {
  item: TechItem;
  index: number;
}

export function SkillCard({ item, index }: SkillCardProps) {
  return (
    <div
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
      className="animate-fade-up group"
    >
      <div className="relative flex flex-col items-center gap-3 p-4 md:p-5 rounded-none bg-spacex-dark border border-spacex-graphite hover:border-white transition-colors duration-200 text-center">
        <div className="size-11 md:size-12 flex items-center justify-center rounded-none bg-spacex-void border border-spacex-graphite text-spacex-subtle group-hover:text-white group-hover:border-spacex-flame transition-colors duration-200">
          <item.icon size={20} />
        </div>
        <div className="space-y-0.5">
          <h4 className="font-display font-black uppercase text-sm md:text-[15px] text-white">
            {item.name}
          </h4>
          <p className="text-[10px] md:text-[11px] text-spacex-muted font-mono uppercase tracking-spacex-md">
            {item.level}
          </p>
        </div>
      </div>
    </div>
  );
}
