import dynamic from "next/dynamic";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollTopButton } from "@/components/ScrollTopButton";

const TechMarquee = dynamic(() => import("@/components/tech-marquee").then((mod) => mod.TechMarquee), { ssr: false });

export default function PortfolioPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#0a0a0f] text-gray-800 dark:text-gray-200 antialiased min-h-screen selection:bg-blue-500 selection:text-white">
      <Header />
      <main className="relative z-10 pt-20">
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
