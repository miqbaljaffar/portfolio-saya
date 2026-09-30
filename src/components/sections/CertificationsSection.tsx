"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "@/components/section-heading";
import { CertModal } from "./CertModal";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { certificationsData } from "@/data/portfolio";

type EmblaApiType = NonNullable<UseEmblaCarouselType[1]>;

export default function CertificationsSection() {
  const [selected, setSelected] = useState<
    (typeof certificationsData)[number] | null
  >(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const autoplay = useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoplay.current]
  );

  const onSelect = useCallback((api: EmblaApiType) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    autoplay.current.reset();
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    autoplay.current.reset();
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="certs"
      className="relative py-20 sm:py-24 md:py-32 bg-spacex-black overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-5 md:px-10">
        <SectionHeading
          number="05"
          eyebrow="CERTIFICATIONS"
          title="CERTIFICATIONS & AWARDS"
          description="FORMAL PROOF OF EXPERTISE — FROM SOFTWARE DEVELOPMENT TO SPECIALIZED PROFESSIONAL CERTIFICATIONS."
        />
      </div>

      {/* Full-bleed carousel */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex gap-4 md:gap-5 pl-4 sm:pl-5 md:pl-10 lg:pl-[max(2.5rem,calc((100vw_-_72rem)_/_2_+_2.5rem))]">
          {certificationsData.map((cert, i) => (
            <div
              key={cert.title}
              style={{ animationDelay: `${Math.min(i, 6) * 60}ms` }}
              className="animate-fade-up flex-none w-[280px] sm:w-[320px] md:w-[360px]"
            >
              <button
                type="button"
                onClick={() => setSelected(cert)}
                className="w-full text-left border border-spacex-graphite rounded-none bg-spacex-void overflow-hidden transition-colors duration-200 hover:border-spacex-silver card-hover"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-none text-[9px] sm:text-[10px] font-mono uppercase tracking-spacex-sm bg-spacex-dark text-spacex-silver border border-spacex-graphite/50">
                    <Award className="size-2.5 sm:size-3" /> CERTIFIED
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-spacex-dark border-b border-spacex-graphite">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="360px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-2.5">
                  <h3 className="font-display font-bold text-sm sm:text-base leading-snug text-white line-clamp-2 uppercase tracking-tight">
                    {cert.title.toUpperCase()}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 pt-1">
                    <p className="text-[10px] sm:text-xs font-mono uppercase tracking-spacex-sm text-spacex-silver truncate">
                      {cert.issuer.toUpperCase()}
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-spacex-xs text-spacex-muted whitespace-nowrap">
                      {cert.year}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next controls */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-5 md:px-10">
        <div className="flex items-center justify-end gap-2 mt-5 sm:mt-6 md:mt-8">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Sertifikasi sebelumnya"
            className="size-8 sm:size-9 inline-flex items-center justify-center rounded-none border border-spacex-graphite bg-spacex-dark text-spacex-muted hover:bg-spacex-steel hover:text-white hover:border-spacex-silver transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Sertifikasi berikutnya"
            className="size-8 sm:size-9 inline-flex items-center justify-center rounded-none border border-spacex-graphite bg-spacex-dark text-spacex-muted hover:bg-spacex-steel hover:text-white hover:border-spacex-silver transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <CertModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
