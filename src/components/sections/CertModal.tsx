"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

interface CertModalProps {
  selectedCert: string;
  onClose: () => void;
}

export function CertModal({ selectedCert, onClose }: CertModalProps) {
  return (
    <AnimatePresence>
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          // z-[999] agar benar-benar menutupi semua elemen, termasuk navbar
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex justify-center items-center z-[999] p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            // Menggunakan flex-col untuk memisahkan tombol dan gambar secara struktural
            className="relative max-w-5xl w-full h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* AREA TOMBOL (Toolbar) - Posisi relatif di atas gambar, tidak akan terpotong */}
            <div className="flex justify-end items-center gap-3 mb-4 shrink-0">
              <a
                href={selectedCert}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/25 text-white rounded-full backdrop-blur-sm transition-transform hover:scale-110"
                aria-label="Lihat Ukuran Penuh"
                title="Buka dan Zoom Ukuran Asli"
              >
                <ExternalLink size={20} />
              </a>
              <button
                onClick={onClose}
                className="p-2.5 bg-red-500/80 hover:bg-red-500 text-white rounded-full backdrop-blur-sm transition-transform hover:scale-110"
                aria-label="Tutup"
                title="Tutup"
              >
                <X size={20} />
              </button>
            </div>

            {/* AREA GAMBAR */}
            <div className="relative w-full h-full rounded-lg overflow-hidden flex justify-center items-center">
              <Image
                src={selectedCert}
                alt="Sertifikat Resolusi Tinggi"
                fill
                quality={100}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* TEXT PETUNJUK DI BAWAH */}
            <p className="text-center text-white/50 text-sm mt-4 hidden sm:block shrink-0">
              Klik tombol <ExternalLink className="inline mb-1" size={14} /> di atas untuk memperbesar (zoom) ukuran asli
            </p>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}