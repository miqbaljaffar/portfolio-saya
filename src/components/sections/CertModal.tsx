"use client";

import { useEffect } from "react";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Certification } from "@/data/portfolio";

interface CertModalProps {
  item: Certification | null;
  onClose: () => void;
}

export function CertModal({ item, onClose }: CertModalProps) {
  const reduceMotion = useReducedMotion();

  // Lock scroll when open; restore on close / unmount
  useEffect(() => {
    if (!item) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [item]);

  // Keyboard: close on Escape
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-[999] p-4 sm:p-8"
          style={{ background: "rgba(0,0,0,0.65)" }}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate modal"
            className="fixed top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full border shadow-md transition-colors z-[1]"
            style={{
              background: "var(--cw-white)",
              color: "var(--cw-black)",
              borderColor: "var(--cw-grey-100)",
            }}
          >
            <X className="size-4" />
          </button>

          <motion.div
            initial={reduceMotion ? false : { scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col gap-3"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header card */}
            <div
              className="flex items-start justify-between gap-4 p-4 rounded-xl"
              style={{
                background: "var(--cw-white)",
                border: "1px solid var(--cw-grey-100)",
                boxShadow: "var(--cw-shadow-md)",
              }}
            >
              <div className="min-w-0">
                <h2
                  className="font-display font-bold text-lg leading-tight"
                  style={{ color: "var(--cw-black)" }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-[13px] mt-0.5 font-medium"
                  style={{ color: "var(--cw-grey-400)" }}
                >
                  {item.issuer} &middot; {item.year}
                </p>
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View original certificate"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 text-[12px] font-medium rounded-full transition-opacity duration-200 hover:opacity-80"
                  style={{ background: "var(--cw-black)", color: "var(--cw-white)" }}
                >
                  <ExternalLink className="size-3.5" />
                  View Original
                </a>
              )}
            </div>

            {/* Image */}
            <div
              className="relative w-full flex-1 rounded-2xl overflow-hidden min-h-[50vh]"
              style={{
                background: "var(--cw-white)",
                border: "1px solid var(--cw-grey-100)",
                boxShadow: "var(--cw-shadow-lg)",
              }}
            >
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
