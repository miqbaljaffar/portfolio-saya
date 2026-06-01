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
          // z-[100] memastikan modal ini berada di atas navbar (header)
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex justify-center items-center z-[100] p-4 sm:p-8"
          onClick={onClose}
        >
          {/* PERBAIKAN: Pindahkan tombol ke luar container gambar, 
              jangkar di pojok kanan atas layar agar selalu terlihat */}
          <div className="absolute top-4 right-4 md:top-6 md:right-8 flex items-center gap-3 z-50">
            <a
              href={selectedCert}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat tombol diklik
              className="p-2.5 bg-white/10 hover:bg-white/25 text-white rounded-full backdrop-blur-sm transition-all hover:scale-110"
              aria-label="Lihat Ukuran Penuh"
              title="Buka dan Zoom Ukuran Asli"
            >
              <ExternalLink size={22} />
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-2.5 bg-red-500/80 hover:bg-red-500 text-white rounded-full backdrop-blur-sm transition-all hover:scale-110"
              aria-label="Tutup"
              title="Tutup"
            >
              <X size={22} />
            </button>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            // Sedikit mengurangi tinggi (80vh) agar gambar tidak terlalu mentok ke atas/bawah
            className="relative max-w-4xl w-full h-[80vh] md:h-[85vh] flex flex-col justify-center items-center mt-12 md:mt-0"
            onClick={(e) => e.stopPropagation()}
          >
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

            <p className="absolute -bottom-8 text-white/50 text-sm hidden sm:flex items-center gap-1">
              Klik tombol <ExternalLink size={14} /> di pojok kanan atas untuk memperbesar (zoom) ukuran asli
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}