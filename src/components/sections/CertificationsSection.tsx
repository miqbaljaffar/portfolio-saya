"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { certifications } from "@/data/portfolio";
import { staggerItem } from "@/lib/animations";
import { CertModal } from "@/components/sections/CertModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award } from "lucide-react";

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden bg-asanoha">
      <div className="absolute inset-0 bg-washi-texture pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Sertifikasi" subTitle="05 · Credentials · 資格" />
        <AnimatedSection>
          <motion.div variants={staggerItem} className="w-full max-w-6xl mx-auto">

            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {certifications.map((cert, index) => (
                  <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4 pb-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="h-full cursor-pointer"
                      onClick={() => setSelectedCert(cert.imageUrl)}
                    >
                      <div className="rounded-[1.1rem] overflow-hidden border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300 h-full flex flex-col group bg-card relative crafted-border">
                        <div className="relative h-44 w-full overflow-hidden bg-muted">
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                          <Image
                            src={cert.imageUrl}
                            alt={cert.title}
                            fill
                            quality={60}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 z-20">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-kincha/20 text-foreground text-[10px] font-bold border border-kincha/30 backdrop-blur-sm font-mono tracking-wider">
                              <Award size={10} className="text-vermillion dark:text-accent" />
                              認定 · Certified
                            </span>
                          </div>
                          <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 bg-card/95 text-foreground text-[10px] font-semibold px-2.5 py-1 rounded-md border-border backdrop-blur-sm font-display shadow">
                            クリックで拡大 · Click to enlarge
                          </div>
                        </div>
                        <div className="p-5 flex-grow flex flex-col relative">
                          <div className="absolute -top-3 left-5 hanko-stamp !text-[9px] !py-0.5 !px-1.5 !rounded-[3px]">
                            証
                          </div>
                          <h3 className="font-display font-bold text-base mb-1 text-foreground group-hover:text-primary transition-colors leading-tight pt-1">{cert.title}</h3>
                          <p className="text-[10px] font-semibold text-kincha dark:text-kincha mb-2 uppercase tracking-[0.18em] font-mono">{cert.issuer}</p>
                          <p className="text-sm text-muted-foreground mt-auto leading-relaxed">{cert.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="hidden md:block">
                <CarouselPrevious className="left-[-52px] bg-card dark:bg-card border-border shadow-lg text-muted-foreground hover:text-foreground hover:bg-muted" />
                <CarouselNext className="right-[-52px] bg-card dark:bg-card border-border shadow-lg text-muted-foreground hover:text-foreground hover:bg-muted" />
              </div>
            </Carousel>

          </motion.div>
        </AnimatedSection>
      </div>

      <CertModal selectedCert={selectedCert ?? ""} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
