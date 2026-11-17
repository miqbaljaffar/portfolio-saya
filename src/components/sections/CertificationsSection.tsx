"use client";

import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { CertModal } from "./CertModal";
import { Award, Expand } from "lucide-react";
import { certificationsData } from "@/data/portfolio";
import type { Certification } from "@/data/portfolio";

function CertCard({
  cert,
  onOpen,
}: {
  cert: Certification;
  onOpen: (cert: Certification) => void;
}) {
  return (
    <div
      className="cert-card cw-card overflow-hidden cursor-pointer group"
      onClick={() => onOpen(cert)}
      role="button"
      tabIndex={0}
      aria-label={`View certificate: ${cert.title}`}
      onKeyDown={(e) => e.key === "Enter" && onOpen(cert)}
    >
      {/* Thumbnail */}
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ background: "var(--cw-grey-50)" }}
      >
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />

        {/* Expand icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-full p-2.5 shadow-md" style={{ background: "var(--cw-white)" }}>
            <Expand className="size-4" style={{ color: "var(--cw-black)" }} />
          </div>
        </div>

        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span
            className="tag-pill backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.90)",
              borderColor: "rgba(255,255,255,0.60)",
              color: "#0A0A0A",
            }}
          >
            {cert.year}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex items-start gap-3">
        <div
          className="shrink-0 flex items-center justify-center size-8 rounded-lg mt-0.5"
          style={{
            background: "var(--cw-icon-bg)",
            border: "1px solid var(--cw-icon-border)",
          }}
        >
          <Award className="size-4" style={{ color: "var(--cw-grey-600)" }} />
        </div>
        <div className="min-w-0">
          <h3
            className="font-display font-bold text-[13px] leading-snug line-clamp-2 mb-0.5"
            style={{ color: "var(--cw-black)" }}
          >
            {cert.title}
          </h3>
          <p className="text-[11px] font-medium" style={{ color: "var(--cw-grey-400)" }}>
            {cert.issuer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  const [selected, setSelected] = useState<Certification | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll(".cert-card");
    if (!cards?.length) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: { amount: 0.5, from: "start" },
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="certs"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 px-5 md:px-8"
      style={{ background: "var(--cw-section-b)" }}
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications &amp; Awards"
          description="Formal proof of expertise — from software development to specialized professional certifications."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certificationsData.map((cert) => (
            <CertCard key={cert.title} cert={cert} onOpen={setSelected} />
          ))}
        </div>

        <p
          className="mt-7 text-center text-[12px] font-medium"
          style={{ color: "var(--cw-grey-400)" }}
        >
          {certificationsData.length} certifications displayed
        </p>
      </div>

      <CertModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
