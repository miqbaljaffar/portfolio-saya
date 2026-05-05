"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { ArrowRight, Code, Database, BrainCircuit, Github, Linkedin, Mail, FileText, X, ExternalLink, ChevronDown, Terminal, Briefcase, ArrowUp, Menu } from "lucide-react";
import { ThemeSwitcher } from "../components/theme-switcher";

// Import Modular Components & Data
import { featuredProjects, experiences, certifications, navItems } from "../data/portfolio";
import { EASE_OUT_EXPO, fadeUp, staggerContainer, staggerItem } from "../lib/animations";
import { AnimatedSection } from "../components/animated-section";
import { SectionHeading } from "../components/section-heading";
import { TechMarquee } from "../components/tech-marquee";
import { SkillCard } from "../components/skill-card";

export default function PortfolioPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      const sections = navItems.map((item) => document.getElementById(item.toLowerCase()));
      let current = "";
      sections.forEach((section) => {
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 120) current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="bg-gray-50 dark:bg-[#0a0a0f] text-gray-800 dark:text-gray-200 antialiased min-h-screen selection:bg-blue-500 selection:text-white">
      {/* AMBIENT BACKGROUND ORBS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full bg-blue-500/[0.08] blur-[100px]" />
        <div className="absolute bottom-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-purple-500/[0.08] blur-[100px]" />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-indigo-400/[0.05] blur-[80px]" />
      </div>

      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/75 dark:bg-black/75 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-800/60"
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <a href="#" aria-label="Homepage" className="group flex items-center gap-0.5">
            <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
              <span className="text-blue-600 group-hover:-translate-y-1 inline-block transition-transform duration-200">M</span>
              I
              <span className="text-blue-600 group-hover:translate-y-1 inline-block transition-transform duration-200">J</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-blue-950/50 -z-10" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <a href="#contact" className="hidden md:inline-block">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 h-9 text-sm shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/30 hover:-translate-y-0.5">
                Hire Me
              </Button>
            </a>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-gray-200/60 dark:border-gray-800/60 bg-white/95 dark:bg-black/95 backdrop-blur-xl"
            >
              <nav className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileNavOpen(false)}
                    className="px-4 py-3.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-xl transition-colors active:scale-[0.98]"
                  >
                    {item}
                  </a>
                ))}
                <a href="#contact" onClick={() => setMobileNavOpen(false)} className="mt-2 px-4 py-3.5 text-sm font-bold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors active:scale-[0.98]">
                  Hire Me
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="relative z-10 pt-20">
        {/* HERO */}
        <section className="min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 relative">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.3 }}
              className="mb-8 relative inline-block"
            >
              <div className="absolute inset-[-8px] bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse" />
              <img src="/img/profile.jpg" alt="Mohammad Iqbal Jaffar" className="rounded-full relative z-10 border-4 border-white dark:border-gray-900 shadow-2xl object-cover w-[160px] h-[160px]" />
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.5 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white leading-none"
            >
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Iqbal</span>
            </motion.h1>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.65 }}
              className="text-lg sm:text-xl md:text-3xl text-gray-500 dark:text-gray-400 font-medium mb-6 tracking-wide"
            >
              Machine Learning Engineer
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.78 }}
              className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Mahasiswa Teknik Informatika UTB (Semester 7) yang berfokus pada Machine Learning,
              Data Science, dan pengembangan aplikasi web yang skalabel serta sistem backend yang handal.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#projects" className="w-full sm:w-auto">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 font-bold py-6 px-8 rounded-full text-base w-full hover:scale-105 transition-transform shadow-xl shadow-black/10">
                  Lihat Karya Saya <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/cv/CV-MOHAMMAD-IQBAL-JAFFAR.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="font-bold py-6 px-8 rounded-full text-base w-full border-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition-transform hover:scale-105">
                  Unduh CV <FileText className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 dark:text-gray-700">
            <ChevronDown size={28} />
          </motion.div>
        </section>

        <TechMarquee />

        {/* ABOUT */}
        <section id="about" className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4">
            <SectionHeading title="Tentang Saya" />
            <AnimatedSection className="mb-12">
              <motion.p variants={fadeUp} custom={0} className="text-base md:text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Sebagai lulusan Teknik Informatika dengan spesialisasi di Backend Development dan Machine Learning, saya berdedikasi untuk membangun sistem yang tangguh sekaligus memberinya <span className="font-semibold text-gray-900 dark:text-white">&quot;otak&quot;</span> lewat kapabilitas kecerdasan buatan.
              </motion.p>
            </AnimatedSection>
            <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              <SkillCard icon={<Code size={36} />} title="Interactive Frontend">
                Membangun antarmuka web yang fungsional dan interaktif menggunakan JavaScript, jQuery, dan integrasi view yang efisien.
              </SkillCard>
              <SkillCard icon={<Database size={36} />} title="Robust Backend">
                Merancang arsitektur server dan API yang handal menggunakan ekosistem PHP, Node.js, Express.js, serta manajemen database yang terstruktur.
              </SkillCard>
              <SkillCard icon={<BrainCircuit size={36} />} title="AI & ML Integration">
                Mengembangkan model Machine Learning, khususnya Computer Vision (CNN & OCR), dan menanamkan kapabilitas AI tersebut ke dalam sistem.
              </SkillCard>
            </AnimatedSection>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-16 md:py-24 bg-white dark:bg-gray-950/60">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent md:-translate-x-1/2" />
              {experiences.map((exp, index) => (
                <AnimatedSection key={index} className={`relative mb-10 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-start`}>
                  <div className="absolute left-[18px] md:left-1/2 top-6 w-3.5 h-3.5 rounded-full bg-blue-500 border-[3px] border-white dark:border-gray-950 shadow-md transform -translate-x-1/2 z-10" />
                  <div className="hidden md:block w-1/2" />
                  <motion.div variants={staggerItem} className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold mb-3">{exp.date}</span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3 flex items-center gap-1.5">
                        {exp.type === "education" ? <Terminal size={13} /> : <Briefcase size={13} />}
                        {exp.role} @ {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </motion.div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <SectionHeading title="Proyek Unggulan" />
            <AnimatedSection>
              <motion.div variants={staggerItem} className="w-full max-w-6xl mx-auto">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {featuredProjects.map((project, index) => (
                      <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4 pb-4">
                        <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="h-full">
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                            <Card className="h-full border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 overflow-hidden rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 transition-shadow duration-300">
                              <div className="relative w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                                <img src={project.imageUrl} alt={project.title} className="object-cover transition-transform duration-700 group-hover:scale-105 w-full h-full" />
                              </div>
                              <CardHeader className="pb-2">
                                <div className="flex justify-between items-start gap-2">
                                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{project.title}</CardTitle>
                                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0 mt-0.5" />
                                </div>
                                <CardDescription className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mt-1">{project.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="flex flex-wrap gap-1.5">
                                  {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700">{t}</span>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </a>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:block">
                    <CarouselPrevious className="left-[-52px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg" />
                    <CarouselNext className="right-[-52px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg" />
                  </div>
                </Carousel>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-16 md:py-24 bg-white dark:bg-gray-950/60">
          <div className="container mx-auto px-4">
            <SectionHeading title="Sertifikasi" />
            <AnimatedSection>
              <motion.div variants={staggerItem} className="w-full max-w-6xl mx-auto">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {certifications.map((cert, index) => (
                      <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4">
                        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="h-full p-1 cursor-pointer" onClick={() => setSelectedCert(cert.imageUrl)}>
                          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-shadow duration-300 h-full flex flex-col group">
                            <div className="relative h-44 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                              <img src={cert.imageUrl} alt={cert.title} className="object-cover object-top transition-transform duration-500 group-hover:scale-105 w-full h-full" />
                              <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
                                Klik untuk memperbesar
                              </div>
                            </div>
                            <div className="p-5 flex-grow flex flex-col">
                              <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">{cert.title}</h3>
                              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wide">{cert.issuer}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-auto leading-relaxed">{cert.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:block">
                    <CarouselPrevious className="left-[-44px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg" />
                    <CarouselNext className="right-[-44px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg" />
                  </div>
                </Carousel>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/60 to-transparent dark:from-gray-900/60 dark:to-transparent pointer-events-none" />
          <div className="container mx-auto text-center px-4 relative">
            <SectionHeading title="Let's Work Together" withBar={false} />
            <AnimatedSection>
              <motion.p variants={fadeUp} custom={0} className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                Tertarik berkolaborasi atau sekadar berdiskusi tentang AI? Hubungi saya kapan saja.
              </motion.p>
              <motion.div variants={staggerContainer} className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: <Mail size={20} />, label: "Email Me", href: "mailto:iqbaljaffar1108@gmail.com" },
                  { icon: <Github size={20} />, label: "Github", href: "https://github.com/miqbaljaffar" },
                  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-iqbal-jaffar-091939290" },
                ].map((social, idx) => (
                  <motion.a key={idx} variants={staggerItem} whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.97 }} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 rounded-full shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300 border border-gray-100 dark:border-gray-800 group">
                    <span className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{social.icon}</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400 dark:text-gray-600">&copy; {new Date().getFullYear()} Mohammad Iqbal Jaffar</p>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl shadow-blue-500/30 z-40 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* CERT MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[100] p-4" onClick={() => setSelectedCert(null)}>
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ type: "spring", damping: 22, stiffness: 300 }} className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-[4/3] w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img src={selectedCert} alt="Sertifikat" className="object-contain w-full h-full" />
              </div>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedCert(null)} className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2" aria-label="Tutup">
                <X size={28} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}