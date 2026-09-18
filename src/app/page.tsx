import dynamic from "next/dynamic";
import { Suspense } from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";

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
const ScrollTopButton = dynamic(
  () => import("@/components/ScrollTopButton").then((mod) => mod.ScrollTopButton),
  { ssr: false, loading: () => null }
);

function SectionSkeleton() {
  return (
    <section aria-hidden="true" className="py-24 md:py-32 px-5 md:px-10 animate-fade-in bg-spacex-black">
      <div className="container mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="h-px w-32 mx-auto bg-spacex-graphite animate-pulse" />
          <div className="h-2 w-48 mx-auto bg-spacex-graphite animate-pulse" />
          <div className="h-10 w-72 md:w-96 mx-auto bg-spacex-steel animate-pulse rounded-none" />
          <div className="h-4 w-full bg-spacex-steel animate-pulse rounded-none" />
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="bg-black text-white antialiased min-h-screen">
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
      <ScrollTopButton />
    </div>
  );
}
