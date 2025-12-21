"use client";

import * as React from "react";
import { useRef, useEffect, useState } from "react";
// Menggunakan img tag biasa untuk preview environment agar tidak error
// import Image from "next/image"; 
import { motion, AnimatePresence } from "framer-motion";

// Import komponen UI dengan relative path untuk menghindari error alias (@/)
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import {
  ArrowRight,
  Code,
  Database,
  BrainCircuit,
  Github,
  Linkedin,
  Mail,
  FileText,
  X,
  ExternalLink,
  ChevronDown,
  Terminal,
  Cpu,
  Layers,
  ArrowUp
} from "lucide-react";
import { ThemeSwitcher } from "../components/theme-switcher";

// --- HELPERS UNTUK MEMUAT GSAP DARI CDN ---
const useGSAPLoader = () => {
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gsap) {
      setGsapLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    script.async = true;
    script.onload = () => {
      const stScript = document.createElement("script");
      stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
      stScript.async = true;
      stScript.onload = () => {
        if ((window as any).gsap && (window as any).ScrollTrigger) {
           (window as any).gsap.registerPlugin((window as any).ScrollTrigger);
        }
        setGsapLoaded(true);
      };
      document.body.appendChild(stScript);
    };
    document.body.appendChild(script);
  }, []);

  return gsapLoaded;
};


// --- TIPE DATA ---
type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  imageUrl: string;
};

type Certification = {
  title: string;
  issuer: string;
  description: string;
  imageUrl: string;
};

// Mengubah Activity menjadi Experience untuk Timeline
type Experience = {
  title: string;
  role: string;
  company: string;
  description: string;
  date: string;
  type: "work" | "education" | "organization";
};

// --- DATA ---
const featuredProjects: Project[] = [
  {
    title: "Automated Nutrition Fact Recognition",
    description: "Model CNN cerdas yang mengekstrak fakta nutrisi dari gambar dengan bantuan OpenCV dan PaddleOCR untuk analisis kadar gula.",
    tech: ["Python", "TensorFlow", "OpenCV", "PaddleOCR"],
    link: "https://github.com/GlucoScan-Bangkit/GlucoScanProject",
    imageUrl: "/projects/gluco.jpg",
  },
  {
    title: "Ztyle - Modern E-Commerce",
    description: "Platform e-commerce stylish dengan fitur katalog, checkout, manajemen pesanan, dan CMS berita fashion dalam satu paket modern.",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "Zustand"],
    link: "https://ztyle-store.vercel.app",
    imageUrl: "/projects/ztyle.JPG",
  },
  {
    title: "Aurora Haven Hotel",
    description: "Aplikasi booking hotel lengkap dengan pencarian, filter, pembayaran online, dan dashboard admin untuk manajemen penuh.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    link: "https://miqbalj.pweb-utb.cloud",
    imageUrl: "/projects/hotel.JPG",
  },
  {
    title: "Analisis Sentimen M-Pajak",
    description: "Analisis sentimen ulasan M-Pajak dengan NLP dan Machine Learning untuk menemukan insight serta rekomendasi perbaikan.",
    tech: ["Python", "NLP", "Scikit-learn", "Pandas"],
    link: "https://github.com/miqbaljaffar/Sentiment_Analisis_Aplikasi_M_Pajak",
    imageUrl: "/projects/mpajak.JPG",
  },
  {
    title: "Prediksi Student Dropout",
    description: "Analisis faktor dropout mahasiswa dan prediksi dengan machine learning, lengkap dengan dashboard visual interaktif.",
    tech: ["Python", "Streamlit", "Random Forest", "Data Viz"],
    link: "https://github.com/miqbaljaffar/Student-Dropout",
    imageUrl: "/projects/dropout.jpg",
  },
];

// Menggabungkan Activities & Bangkit menjadi Timeline Experience yang lebih profesional
const experiences: Experience[] = [
  {
    title: "Bangkit Academy 2024 Batch 1",
    role: "Machine Learning Cohort (Distinction)",
    company: "Google, GoTo, Traveloka",
    date: "Feb 2024 - Jun 2024",
    type: "education", // Anggap ini pendidikan/magang
    description: "Menyelesaikan kurikulum intensif 900+ jam. Memimpin tim dalam Capstone Project 'GlucoScan' (Nutrition Analysis App).",
  },
  {
    title: "Pameran Mikrokontroler",
    role: "Peserta & Presenter",
    company: "Universitas Teknologi Bandung",
    date: "2024",
    type: "organization",
    description: "Mempresentasikan sistem klasifikasi sampah otomatis berbasis sensor induktif dan LDR kepada publik dan akademisi.",
  },
];

// Data Tech Stack untuk Marquee
const techStack = [
  "Python", "TensorFlow", "Pytorch", "Scikit-Learn", "OpenCV", 
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
  "Docker", "Git", "Figma", "Tailwind CSS"
];

const certifications: Certification[] = [
  {
    title: "Dev Certified for ML with TensorFlow",
    issuer: "dev.id with Dicoding",
    description: "Tersertifikasi dalam TensorFlow, neural network, dan image classification.",
    imageUrl: "/certs/dcml.jpg",
  },
  {
    title: "Machine Learning Operations (MLOps)",
    issuer: "Dicoding Indonesia",
    description: "Menguasai pengembangan dan operasional sistem ML end-to-end.",
    imageUrl: "/certs/mlops.JPG",
  },
  {
    title: "Machine Learning Terapan",
    issuer: "Dicoding Indonesia",
    description: "Menerapkan ML untuk predictive analytics dan sentiment analysis.",
    imageUrl: "/certs/mlt.JPG",
  },
];

// --- COMPONENT: TECH STACK MARQUEE ---
const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 py-6 mb-16 relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-black to-transparent z-10" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="mx-8 flex items-center gap-2 text-gray-400 font-bold text-xl hover:text-blue-500 transition-colors cursor-default">
            <span className="text-2xl">⚡</span> {tech}
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

// --- COMPONENT: SKILL CARD (With GSAP Hover) ---
const SkillCard = ({ icon, title, children, gsapReady }: { icon: React.ReactNode; title: string; children: React.ReactNode; gsapReady: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsapReady || !cardRef.current || typeof window === "undefined") return;
    const gsap = (window as any).gsap;

    const ctx = gsap.context(() => {
      const card = cardRef.current!;
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -10, scale: 1.02, duration: 0.3, ease: "power2.out", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" });
        const iconWrapper = card.querySelector(".icon-wrapper");
        if(iconWrapper) gsap.to(iconWrapper, { scale: 1.2, rotate: 10, duration: 0.4, ease: "back.out(1.7)" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out", boxShadow: "none" });
        const iconWrapper = card.querySelector(".icon-wrapper");
        if(iconWrapper) gsap.to(iconWrapper, { scale: 1, rotate: 0, duration: 0.4 });
      });
    }, cardRef);

    return () => ctx.revert(); 
  }, [gsapReady]);

  return (
    <div 
      ref={cardRef}
      className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="icon-wrapper flex justify-center mb-6 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white relative z-10">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm relative z-10">{children}</p>
    </div>
  );
};

// --- COMPONENT: SECTION HEADING ---
const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="text-center mb-16 section-header opacity-0 translate-y-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
        {title}
      </h2>
      {subtitle && <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />}
    </div>
  );
};

// --- MAIN PAGE ---
export default function PortfolioPage() {
  const [selectedCert, setSelectedCert] = React.useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  
  const gsapReady = useGSAPLoader();

  // Scroll to Top Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!gsapReady || !containerRef.current || typeof window === "undefined") return;
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    const ctx = gsap.context(() => {
      // 1. Navbar Animation
      if (navRef.current) {
        gsap.from(navRef.current, {
          y: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2
        });
      }

      // 2. Hero Animation
      const heroTl = gsap.timeline();
      heroTl
        .from(".hero-img", { scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 0.5)" })
        .from(".hero-text-1", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .from(".hero-text-2", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from(".hero-btn", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");

      // 3. Scroll Indicator
      gsap.to(".scroll-indicator", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut"
      });

      // 4. Section Headers
      if (ScrollTrigger) {
        gsap.utils.toArray(".section-header").forEach((header: any) => {
          gsap.fromTo(header, 
            { y: 50, opacity: 0 }, 
            {
              scrollTrigger: {
                trigger: header,
                start: "top 80%",
                toggleActions: "play none none reverse"
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out"
            }
          );
        });

        // 5. Staggered Elements
        const staggerSections = [".about-grid", ".experience-timeline"];
        staggerSections.forEach((section) => {
          const el = document.querySelector(section);
          if(el) {
            gsap.fromTo(section, 
              { y: 50, opacity: 0 },
              {
                scrollTrigger: {
                  trigger: section,
                  start: "top 85%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
              }
            );
          }
        });

        // 6. Carousels
        gsap.utils.toArray(".carousel-container").forEach((container: any) => {
          gsap.fromTo(container,
            { scale: 0.95, opacity: 0 },
            {
              scrollTrigger: {
                trigger: container,
                start: "top 80%",
              },
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power3.out"
            }
          );
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, [gsapReady]);

  return (
    <div ref={containerRef} className="bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200 antialiased min-h-screen selection:bg-blue-500 selection:text-white">
      
      {/* ===== BACKGROUND ELEMENTS ===== */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      {/* ===== HEADER ===== */}
      <header ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold tracking-tighter">
            <a href="#" aria-label="Homepage" className="flex items-center gap-1 group">
              <span className="text-blue-600 dark:text-blue-500 group-hover:-translate-y-1 transition-transform inline-block">M</span>I<span className="text-blue-600 dark:text-blue-500 group-hover:translate-y-1 transition-transform inline-block">J</span>
            </a>
          </h1>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {["About", "Experience", "Projects", "Certifications"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-blue-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <a href="#contact" className="hidden md:inline-block">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full px-6 shadow-lg shadow-blue-500/20">
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative">
          <div className="container mx-auto max-w-4xl">
            <div className="hero-img mb-8 relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <img
                src="/img/profile.jpg"
                alt="Mohammad Iqbal Jaffar"
                width={160}
                height={160}
                className="rounded-full relative z-10 border-4 border-white dark:border-gray-800 shadow-2xl object-cover w-[160px] h-[160px]"
              />
            </div>

            <h1 className="hero-text-1 text-5xl md:text-8xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Iqbal</span>
            </h1>
            <h2 className="hero-text-2 text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-6">
              Machine Learning Engineer
            </h2>
            <p className="hero-desc text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Mengubah data menjadi kecerdasan. Saya membangun solusi AI yang skalabel dan aplikasi web modern yang memecahkan masalah dunia nyata.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="hero-btn w-full sm:w-auto">
                <Button
                  className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-bold py-6 px-8 rounded-full text-lg w-full transition-all hover:scale-105"
                >
                  Lihat Karya Saya
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/cv/CV-MOHAMMAD-IQBAL-JAFFAR.pdf" target="_blank" rel="noopener noreferrer" className="hero-btn w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="font-bold py-6 px-8 rounded-full text-lg w-full border-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105"
                >
                  Unduh CV
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400">
             <ChevronDown size={32} />
          </div>
        </section>

        {/* ===== TECH STACK MARQUEE ===== */}
        <TechMarquee />

        {/* ===== ABOUT ME SECTION ===== */}
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-4">
            <SectionHeading title="Tentang Saya" subtitle="true" />
            
            <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16 section-header opacity-0 translate-y-10">
              Dengan fondasi kuat di Full-Stack Development dan semangat pada Machine Learning, saya tidak hanya membuat aplikasi, tapi juga memberinya &quot;otak&quot;.
            </p>

            <div className="about-grid grid md:grid-cols-3 gap-8 opacity-0">
              <SkillCard gsapReady={gsapReady} icon={<Code size={40} />} title="Frontend Wizardry">
                Menciptakan antarmuka yang responsif dan smooth dengan ekosistem React, Next.js, dan Tailwind CSS.
              </SkillCard>
              <SkillCard gsapReady={gsapReady} icon={<Database size={40} />} title="Robust Backend">
                Arsitektur API yang efisien, manajemen database SQL/NoSQL, dan deployment scalable dengan Docker.
              </SkillCard>
              <SkillCard gsapReady={gsapReady} icon={<BrainCircuit size={40} />} title="AI & ML Integration">
                Membangun model Deep Learning untuk Computer Vision dan NLP, serta mengintegrasikannya ke aplikasi web.
              </SkillCard>
            </div>
          </div>
        </section>

        {/* ===== EXPERIENCE TIMELINE (REPLACES ACTIVITIES) ===== */}
        <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeading title="Pengalaman & Aktivitas" subtitle="true" />
            
            <div className="experience-timeline max-w-3xl mx-auto relative opacity-0">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2 ml-4 md:ml-0" />

              {experiences.map((exp, index) => (
                <div key={index} className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-black transform -translate-x-1/2 md:-translate-x-1/2 ml-4 md:ml-0 z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                     <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold mb-3">
                          {exp.date}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3 flex items-center gap-2">
                           {exp.type === 'education' ? <Terminal size={14} /> : <Cpu size={14} />}
                           {exp.role} @ {exp.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeading title="Proyek Unggulan" subtitle="true" />
            
            <div className="carousel-container opacity-0">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full max-w-6xl mx-auto"
              >
                <CarouselContent>
                  {featuredProjects.map((project, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6 pb-6">
                      <div className="h-full">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                          <Card className="h-full border-0 shadow-lg bg-white dark:bg-gray-900 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:shadow-blue-900/10">
                            <div className="relative w-full h-64 overflow-hidden">
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                              <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="object-cover transition-transform duration-700 group-hover:scale-110 w-full h-full"
                              />
                            </div>
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</CardTitle>
                                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                              </div>
                              <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-2">
                                {project.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, i) => (
                                  <span key={i} className="text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="left-[-50px] bg-white dark:bg-gray-800 border-0 shadow-lg" />
                  <CarouselNext className="right-[-50px] bg-white dark:bg-gray-800 border-0 shadow-lg" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* ===== CERTIFICATIONS SECTION ===== */}
        <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeading title="Sertifikasi" subtitle="true" />
            
            <div className="carousel-container opacity-0">
              <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto">
                <CarouselContent>
                  {certifications.map((cert, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div 
                        className="h-full p-2 cursor-pointer"
                        onClick={() => setSelectedCert(cert.imageUrl)}
                      >
                        <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col group">
                          <div className="relative h-48 w-full overflow-hidden">
                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                            <img
                              src={cert.imageUrl}
                              alt={cert.title}
                              className="object-cover object-top transition-transform duration-500 group-hover:scale-105 w-full h-full"
                            />
                            <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs px-2 py-1 rounded">
                              Klik untuk memperbesar
                            </div>
                          </div>
                          <div className="p-6 flex-grow flex flex-col">
                            <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                            <p className="text-sm font-medium text-gray-500 mb-3">{cert.issuer}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-auto">{cert.description}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="left-[-40px]" />
                  <CarouselNext className="right-[-40px]" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        
        {/* ===== CONTACT SECTION ===== */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent -z-10" />
          <div className="container mx-auto text-center px-4">
            <div className="section-header opacity-0 translate-y-10">
              <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                Tertarik berkolaborasi atau sekadar berdiskusi tentang AI? Hubungi saya kapan saja.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                 {[
                   { icon: <Mail size={24} />, label: "Email Me", href: "mailto:iqbaljaffar1108@gmail.com" },
                   { icon: <Github size={24} />, label: "Github", href: "https://github.com/miqbaljaffar" },
                   { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-iqbal-jaffar-091939290" }
                 ].map((social, idx) => (
                   <a 
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                   >
                     <span className="text-gray-500 group-hover:text-blue-600 transition-colors">{social.icon}</span>
                     <span className="font-semibold text-gray-700 dark:text-gray-200">{social.label}</span>
                   </a>
                 ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Mohammad Iqbal Jaffar. 
            <span className="mx-2">|</span>
            Built with Next.js, Tailwind & GSAP.
          </p>
        </div>
      </footer>
      
      {/* ===== SCROLL TO TOP BUTTON ===== */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg z-40 hover:bg-blue-700 transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ===== MODAL (Framer Motion for ease of mount/unmount) ===== */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[100] p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full bg-white rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={selectedCert} 
                  alt="Sertifikat Full" 
                  className="object-contain w-full h-full"
                />
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-gray-300 transition-colors p-2"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}