import dynamic from "next/dynamic";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import TechStackSection from "@/components/sections/TechStackSection";

const ScrollTopButton = dynamic(
  () => import("@/components/ScrollTopButton").then((mod) => mod.ScrollTopButton),
  { ssr: false, loading: () => null }
);

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground antialiased min-h-screen selection:bg-accent/18 dark:selection:bg-accent/25 selection:text-inherit">
      <Header />
      <main id="main-content" className="relative z-10 pt-20">
        <HeroSection />
        <TechStackSection />
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
