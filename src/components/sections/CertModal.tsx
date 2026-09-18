"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Certification } from "@/data/portfolio";

interface CertModalProps {
  item: Certification | null;
  onClose: () => void;
}

export function CertModal({ item, onClose }: CertModalProps) {
  useEffect(() => {
    if (item) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-[999] p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Tutup sertifikat"
            className="fixed top-4 right-4 sm:top-6 sm:right-6 p-2.5 bg-black hover:bg-spacex-dark text-white rounded-none border border-spacex-graphite hover:border-white transition-colors z-[1]"
          >
            <X className="size-5" />
          </motion.button>

          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative max-w-5xl w-full max-h-[88vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4 shrink-0 text-white border border-spacex-graphite bg-spacex-void p-4 rounded-none">
              <div className="min-w-0">
                <h2 className="font-display font-black text-lg md:text-xl leading-tight uppercase tracking-tight">{item.title}</h2>
                <p className="text-xs md:text-sm text-spacex-muted mt-1 font-mono uppercase tracking-spacex-sm">
                  {item.issuer} &middot; {item.year}
                </p>
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 p-2.5 bg-white text-black hover:bg-spacex-silver rounded-none border border-white transition-colors"
                  aria-label="Lihat ukuran penuh"
                >
                  <ExternalLink className="size-4" />
                </a>
              )}
            </div>

            <div className="relative w-full flex-1 rounded-none overflow-hidden bg-spacex-dark border border-spacex-graphite min-h-[50vh]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority={false}
                quality={85}
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
