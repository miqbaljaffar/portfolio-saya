interface SectionHeadingProps {
  number: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-4xl mx-auto mb-14 md:mb-20 space-y-5 ${align === "left" ? "text-left mx-0" : "text-center"}`}
    >
      <div className={`animate-fade-in flex items-center gap-4 ${align === "left" ? "justify-start" : "justify-center"}`}>
        <span className="h-px w-12 md:w-16 bg-spacex-graphite" />
        <span className="eyebrow-label text-spacex-subtle">
          {number} / {eyebrow || "SECTION"}
        </span>
        <span className="h-px w-12 md:w-16 bg-spacex-graphite" />
      </div>

      <h2 className="animate-fade-up delay-100 text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-[1.1]">
        {title}
      </h2>

      {description && (
        <p
          className={`animate-fade-up delay-200 text-spacex-muted text-sm md:text-base max-w-2xl leading-relaxed font-sans ${align === "left" ? "mx-0" : "mx-auto"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
