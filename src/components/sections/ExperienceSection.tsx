import { SectionHeading } from "@/components/section-heading";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { experienceData } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="journey" className="relative py-24 md:py-32 px-5 md:px-10 bg-spacex-dark">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          number="03"
          eyebrow="JOURNEY"
          title="PERJALANAN KARIER DAN PENDIDIKAN"
          description="Langkah demi langkah — dari kuliah sampai mengerjakan proyek nyata di industri."
        />

        <div className="relative pl-5 md:pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-spacex-graphite" />
          <ul className="space-y-8 md:space-y-10">
            {experienceData.map((item, i) => {
              const Icon =
                item.type === "edu" ? GraduationCap : item.type === "org" ? Users : Briefcase;
              return (
                <li
                  key={`${item.title}-${i}`}
                  style={{ animationDelay: `${Math.min(i, 6) * 80}ms` }}
                  className="animate-fade-up relative"
                >
                  <span className="absolute -left-[26px] md:-left-[30px] top-1 flex items-center justify-center size-5 md:size-6 rounded-sm border-2 border-spacex-dark bg-spacex-flame z-10">
                    <Icon className="size-2.5 md:size-3 text-white" />
                  </span>

                  <article className="bg-spacex-void border border-spacex-graphite rounded-none p-5 md:p-6 hover:border-spacex-silver transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-black uppercase text-lg md:text-xl text-white">
                          {item.title}
                        </h3>
                        <p className="text-spacex-flame text-sm font-mono uppercase tracking-wide">{item.organization}</p>
                      </div>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-none border border-spacex-graphite text-spacex-muted uppercase tracking-spacex-sm whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-spacex-muted leading-relaxed">{item.description}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
