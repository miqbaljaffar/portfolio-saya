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
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EFEB]">
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
          <div className="bg-white rounded-full p-2.5 shadow-md">
            <Expand className="size-4 text-[#0A0A0A]" />
          </div>
        </div>

        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span className="tag-pill bg-white/90 backdrop-blur-sm border-white/60 text-[#0A0A0A]">
            {cert.year}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex items-start gap-3">
        <div className="shrink-0 flex items-center justify-center size-8 rounded-lg bg-[#F0EFEB] border border-[#E5E4E0] mt-0.5">
          <Award className="size-4 text-[#6B6B6B]" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-bold text-[#0A0A0A] text-[13px] leading-snug line-clamp-2 mb-0.5">
            {cert.title}
          </h3>
          <p className="text-[11px] text-[#9B9A96] font-medium">
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
      className="relative py-20 sm:py-24 md:py-32 px-5 md:px-8 bg-[#F8F7F4]"
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

        <p className="mt-7 text-center text-[12px] text-[#9B9A96] font-medium">
          {certificationsData.length} certifications displayed
        </p>
      </div>

      <CertModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
