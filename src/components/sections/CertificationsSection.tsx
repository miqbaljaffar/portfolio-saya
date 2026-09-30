"use client";

import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { CertModal } from "./CertModal";
import { Award, Maximize2 } from "lucide-react";
import { certificationsData } from "@/data/portfolio";
import type { Certification } from "@/data/portfolio";

/**
 * Single flip card.
 * — Front: thumbnail + CERTIFIED badge
 * — Back: title, issuer, year + "VIEW" button
 * CSS 3D flip on hover (rotateY), JS click opens CertModal.
 */
function FlipCard({
  cert,
  onOpen,
}: {
  cert: Certification;
  onOpen: (cert: Certification) => void;
}) {
  return (
    /*
     * Perspective wrapper — must NOT be the animated element itself
     * so the 3D space is preserved during GSAP entrance.
     */
    <div className="cert-flip-wrapper" style={{ perspective: "900px" }}>
      {/*
       * Inner — rotates on hover via CSS.
       * transform-style: preserve-3d keeps front/back in 3D space.
       */}
      <div
        className="cert-flip-inner relative w-full cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
          aspectRatio: "4 / 3",
        }}
        onClick={() => onOpen(cert)}
        role="button"
        tabIndex={0}
        aria-label={`Lihat sertifikat ${cert.title}`}
        onKeyDown={(e) => e.key === "Enter" && onOpen(cert)}
      >
        {/* ── FRONT ─────────────────────────────────────────── */}
        <div
          className="absolute inset-0 border border-spacex-graphite bg-spacex-void overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Thumbnail */}
          <div className="relative w-full h-full">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
              className="object-cover"
            />
            {/* Gradient scrim bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* CERTIFIED badge top-left */}
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none text-[9px] font-mono uppercase tracking-spacex-sm bg-black/70 text-spacex-silver border border-spacex-graphite/60">
            <Award className="size-2.5" /> CERTIFIED
          </div>

          {/* Year badge top-right */}
          <div className="absolute top-3 right-3 px-2 py-1 rounded-none text-[9px] font-mono uppercase tracking-spacex-sm bg-black/70 text-spacex-muted border border-spacex-graphite/60">
            {cert.year}
          </div>

          {/* Title bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-display font-bold text-xs sm:text-sm text-white leading-snug uppercase tracking-tight line-clamp-2">
              {cert.title}
            </h3>
          </div>

          {/* Hover hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="text-[9px] font-mono uppercase tracking-spacex-md text-white/60">
              HOVER TO REVEAL
            </span>
          </div>
        </div>

        {/* ── BACK ──────────────────────────────────────────── */}
        <div
          className="absolute inset-0 border border-spacex-graphite bg-spacex-dark flex flex-col justify-between p-5"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Corner decorations */}
          <div className="aero-corner tl" style={{ opacity: 0.3 }} />
          <div className="aero-corner tr" style={{ opacity: 0.3 }} />
          <div className="aero-corner bl" style={{ opacity: 0.3 }} />
          <div className="aero-corner br" style={{ opacity: 0.3 }} />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-spacex-flame/40 bg-spacex-flame/10 text-[9px] font-mono uppercase tracking-spacex-sm text-spacex-flame">
              <Award className="size-2.5" /> CERTIFIED · {cert.year}
            </div>

            <h3 className="font-display font-black text-sm sm:text-base text-white leading-snug uppercase tracking-tight">
              {cert.title}
            </h3>

            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-spacex-sm text-spacex-muted leading-relaxed">
              {cert.issuer}
            </p>
          </div>

          {/* View button */}
          <div className="pt-4 border-t border-spacex-graphite flex items-center justify-between">
            <span className="text-[9px] font-mono uppercase tracking-spacex-md text-spacex-muted">
              CLICK TO EXPAND
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-black text-[10px] font-mono uppercase tracking-spacex-sm hover:bg-spacex-silver transition-colors border border-white">
              <Maximize2 className="size-3" />
              VIEW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  const [selected, setSelected] = useState<Certification | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  // Entrance: each card folds in from rotateY(90deg) → 0 with stagger
  useGSAP(() => {
    const wrappers = gridRef.current?.querySelectorAll(".cert-flip-wrapper");
    if (!wrappers?.length) return;

    gsap.fromTo(
      wrappers,
      {
        opacity: 0,
        rotateY: 90,
        transformOrigin: "left center",
      },
      {
        opacity: 1,
        rotateY: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: {
          amount: 0.55,
          from: "start",
        },
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="certs"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 bg-spacex-black"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-5 md:px-10">
        <SectionHeading
          number="05"
          eyebrow="CERTIFICATIONS"
          title="CERTIFICATIONS & AWARDS"
          description="FORMAL PROOF OF EXPERTISE — FROM SOFTWARE DEVELOPMENT TO SPECIALIZED PROFESSIONAL CERTIFICATIONS."
        />

        {/* ── 3×2 Flip Card Grid ──────────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          /*
           * CSS hover target: .cert-flip-wrapper:hover .cert-flip-inner
           * handled via global CSS below — injected as a <style> tag
           * so it works without Tailwind arbitrary variants.
           */
        >
          {certificationsData.map((cert) => (
            <FlipCard
              key={cert.title}
              cert={cert}
              onOpen={setSelected}
            />
          ))}
        </div>

        {/* Cert count */}
        <p className="mt-6 sm:mt-8 text-center text-[10px] font-mono uppercase tracking-spacex-md text-spacex-muted">
          {certificationsData.length} CERTIFICATIONS DISPLAYED
        </p>
      </div>

      {/* Flip hover CSS — injected inline, scoped to this section */}
      <style>{`
        .cert-flip-wrapper:hover .cert-flip-inner,
        .cert-flip-wrapper:focus-within .cert-flip-inner {
          transform: rotateY(180deg);
        }
      `}</style>

      <CertModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
