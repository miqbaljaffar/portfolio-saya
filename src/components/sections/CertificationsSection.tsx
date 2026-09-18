"use client";

import { motion, useInView } from "framer-motion";
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
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<(typeof certificationsData)[number] | null>(null);

  return (
    <section id="certs" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          subtitle="05 · Credentials"
          eyebrow="Certifications"
          title="Sertifikasi dan penghargaan"
          description="Pembuktian formal keahlian — mulai dari pengembangan software sampai sertifikasi profesi khusus."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer(0.05, 0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative"
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificationsData.map((cert) => (
                <CarouselItem
                  key={cert.title}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    variants={fadeUp(0)}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelected(cert)}
                      className="group w-full text-left bg-card border border-border rounded-[1rem] overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="relative">
                        <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-wider bg-[#D4A04A]/15 text-[#B8852A] border border-[#D4A04A]/30">
                          <Award className="size-3" /> Certified
                        </div>
                        <div className="aspect-[16/10] overflow-hidden bg-muted">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>
                      <div className="p-5 md:p-6 space-y-2.5">
                        <h3 className="font-display font-bold text-base md:text-lg leading-snug text-foreground line-clamp-2">
                          {cert.title}
                        </h3>
                        <div className="flex items-center justify-between pt-1">
                          <p className="text-xs font-mono uppercase tracking-wider text-[#B8852A]">
                            {cert.issuer}
                          </p>
                          <p className="text-[11px] text-muted-foreground">{cert.year}</p>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-end gap-2 mt-6 md:mt-8">
              <CarouselPrevious className="relative static translate-y-0 size-9 rounded-full border-border text-muted-foreground hover:bg-muted hover:text-foreground" />
              <CarouselNext className="relative static translate-y-0 size-9 rounded-full border-border text-muted-foreground hover:bg-muted hover:text-foreground" />
            </div>
          </Carousel>
        </motion.div>
      </div>

      <CertModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
