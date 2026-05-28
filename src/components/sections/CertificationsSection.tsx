"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { certifications } from "@/data/portfolio";
import { X } from "lucide-react";
import { staggerItem } from "@/lib/animations";
import { CertModal } from "@/components/sections/CertModal";

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-16 md:py-24 bg-white dark:bg-gray-950/60">
      <div className="container mx-auto px-4">
        <SectionHeading title="Sertifikasi" />
        <AnimatedSection>
          <motion.div variants={staggerItem} className="w-full max-w-6xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="h-full p-1 cursor-pointer" onClick={() => setSelectedCert(cert.imageUrl)}>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-shadow duration-300 h-full flex flex-col group">
                    <div className="relative h-44 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                      <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        fill
                        quality={60}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
                        Klik untuk memperbesar
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">{cert.title}</h3>
                      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wide">{cert.issuer}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-auto leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      <CertModal selectedCert={selectedCert ?? ""} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
