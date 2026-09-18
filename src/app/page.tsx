import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollTopButton } from "@/components/ScrollTopButton";
import { TechStackSection } from "@/components/sections/TechStackSection";

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground antialiased min-h-screen selection:bg-vermillion/20 dark:selection:bg-accent/25 selection:text-inherit">
      <Header />
      <main className="relative z-10 pt-20">
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
