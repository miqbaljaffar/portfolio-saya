import dynamic from "next/dynamic";
import { Suspense } from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import { ScrollTopLazy } from "@/components/ScrollTopLazy";

/* ========= Sections below fold: lazy-loaded to reduce initial JS ========= */
const TechStackSection = dynamic(
  () => import("@/components/sections/TechStackSection"),
  { ssr: true, loading: SectionSkeleton }
);
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  { ssr: true, loading: SectionSkeleton }
);
const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection"),
  { ssr: true, loading: SectionSkeleton }
);
const ProjectsSection = dynamic(
  () => import("@/components/sections/ProjectsSection"),
  { ssr: true, loading: SectionSkeleton }
);
const CertificationsSection = dynamic(
  () => import("@/components/sections/CertificationsSection"),
  { ssr: true, loading: SectionSkeleton }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
  { ssr: true, loading: SectionSkeleton }
);
const Footer = dynamic(
  () => import("@/components/sections/Footer"),
  { ssr: true }
);

function SectionSkeleton() {
  return (
    <section aria-hidden="true" className="py-24 md:py-32 px-5 md:px-8 opacity-60" style={{ background: "var(--cw-section-b)" }}>
      <div className="container mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="h-5 w-24 mx-auto animate-pulse rounded-full" style={{ background: "var(--cw-grey-100)" }} />
          <div className="h-9 w-72 md:w-96 mx-auto animate-pulse rounded-xl" style={{ background: "var(--cw-grey-100)" }} />
          <div className="h-4 w-full animate-pulse rounded-lg" style={{ background: "var(--cw-grey-50)" }} />
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground antialiased min-h-screen">
      <Header />
      <main id="main-content" className="relative z-10 pt-20">
        {/* Above-the-fold — render synchronous */}
        <HeroSection />

        {/* Below-the-fold — Suspense + lazy load */}
        <Suspense fallback={<SectionSkeleton />}>
          <TechStackSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CertificationsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <ScrollTopLazy />
    </div>
  );
}
