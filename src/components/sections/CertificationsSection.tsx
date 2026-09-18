"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/section-heading";
import { CertModal } from "./CertModal";
import { Award } from "lucide-react";
import { certificationsData } from "@/data/portfolio";

export default function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<(typeof certificationsData)[number] | null>(null);

  return (
    <section id="certs" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-5 md:px-10 bg-spacex-black">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          number="05"
          eyebrow="CERTIFICATIONS"
          title="CERTIFICATIONS & AWARDS"
          description="FORMAL PROOF OF EXPERTISE — FROM SOFTWARE DEVELOPMENT TO SPECIALIZED PROFESSIONAL CERTIFICATIONS."
        />

        <div ref={ref} className="relative">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificationsData.map((cert, i) => (
                <CarouselItem
                  key={cert.title}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    style={{ animationDelay: `${Math.min(i, 6) * 60}ms` }}
                    className="animate-fade-up"
                  >
                    <button
                      type="button"
                      onClick={() => setSelected(cert)}
                      className="w-full text-left border border-spacex-graphite rounded-none bg-spacex-void overflow-hidden transition-colors duration-200 hover:border-spacex-silver"
                    >
                      <div className="relative">
                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-none text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-spacex-sm bg-spacex-dark text-spacex-silver border border-spacex-graphite/50">
                          <Award className="size-2.5 sm:size-3" /> CERTIFIED
                        </div>
                        <div className="aspect-[16/10] overflow-hidden bg-spacex-dark border-b border-spacex-graphite">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-2.5">
                        <h3 className="font-display font-bold text-sm sm:text-base md:text-lg leading-snug text-white line-clamp-2 uppercase tracking-tight">
                          {cert.title.toUpperCase()}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 pt-1">
                          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-spacex-sm text-spacex-silver truncate">
                            {cert.issuer.toUpperCase()}
                          </p>
                          <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-spacex-xs text-spacex-muted whitespace-nowrap">{cert.year}</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-end gap-2 mt-5 sm:mt-6 md:mt-8">
              <CarouselPrevious className="relative static translate-y-0 size-8 sm:size-9 rounded-none border border-spacex-graphite bg-spacex-dark text-spacex-muted hover:bg-spacex-steel hover:text-white hover:border-spacex-silver transition-colors" />
              <CarouselNext className="relative static translate-y-0 size-8 sm:size-9 rounded-none border border-spacex-graphite bg-spacex-dark text-spacex-muted hover:bg-spacex-steel hover:text-white hover:border-spacex-silver transition-colors" />
            </div>
          </Carousel>
        </div>
      </div>

      <CertModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
