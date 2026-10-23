"use client";

import { useEffect } from "react";
import React from "react";
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
      return () => { document.body.style.overflow = prev; };
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[999] p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            className="fixed top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white hover:bg-[#F0EFEB] text-[#0A0A0A] rounded-full border border-[#E5E4E0] shadow-md transition-colors z-[1]"
          >
            <X className="size-4" />
          </motion.button>

          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col gap-3"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="cw-card flex items-start justify-between gap-4 p-4">
              <div className="min-w-0">
                <h2 className="font-display font-bold text-[#0A0A0A] text-lg leading-tight">
                  {item.title}
                </h2>
                <p className="text-[13px] text-[#9B9A96] mt-0.5 font-medium">
                  {item.issuer} &middot; {item.year}
                </p>
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0A0A0A] text-white text-[12px] font-medium rounded-full hover:bg-[#2A2A2A] transition-colors"
                  aria-label="View full size"
                >
                  <ExternalLink className="size-3.5" />
                  View
                </a>
              )}
            </div>

            {/* Image */}
            <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-white border border-[#E5E4E0] shadow-lg min-h-[50vh]">
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
