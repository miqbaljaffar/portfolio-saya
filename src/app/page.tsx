"use client";

import * as React from "react";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  Briefcase,
  ArrowUp,
  Menu,
} from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────
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

type Experience = {
  title: string;
  role: string;
  company: string;
  description: string;
  date: string;
  type: "work" | "education" | "organization";
};

// ─────────────────────────────────────────
// DATA
// ─────────────────────────────────────────
const featuredProjects: Project[] = [
  {
    title: "Automated Nutrition Fact Recognition",
    description:
      "Model CNN cerdas yang mengekstrak fakta nutrisi dari gambar dengan bantuan OpenCV dan PaddleOCR untuk analisis kadar gula.",
    tech: ["Python", "CNN", "TensorFlow", "OpenCV", "PaddleOCR"],
    link: "https://github.com/GlucoScan-Bangkit/GlucoScanProject",
    imageUrl: "/projects/gluco.jpg",
  },
  {
    title: "Ztyle - Modern E-Commerce",
    description:
      "Platform e-commerce stylish dengan fitur katalog, checkout, manajemen pesanan, dan CMS berita fashion dalam satu paket modern.",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "Zustand"],
    link: "https://ztyle-store.vercel.app",
    imageUrl: "/projects/ztyle.JPG",
  },
  {
    title: "Aurora Haven Hotel",
    description:
      "Aplikasi booking hotel lengkap dengan pencarian, filter, pembayaran online, dan dashboard admin untuk manajemen penuh.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    link: "https://miqbalj.pweb-utb.cloud",
    imageUrl: "/projects/hotel.JPG",
  },
  {
    title: "Analisis Sentimen M-Pajak",
    description:
      "Analisis sentimen ulasan M-Pajak dengan NLP dan Machine Learning untuk menemukan insight serta rekomendasi perbaikan.",
    tech: ["Python", "NLP", "Scikit-learn", "TensorFlow"],
    link: "https://github.com/miqbaljaffar/Sentiment_Analisis_Aplikasi_M_Pajak",
    imageUrl: "/projects/mpajak.JPG",
  },
  {
    title: "Prediksi Student Dropout",
    description:
      "Analisis faktor dropout mahasiswa dan prediksi dengan machine learning, lengkap dengan dashboard visual interaktif.",
    tech: ["Python", "Streamlit", "Random Forest", "Pandas"],
    link: "https://github.com/miqbaljaffar/Student-Dropout",
    imageUrl: "/projects/dropout.jpg",
  },
];

const experiences: Experience[] = [
  {
    title: "Tax Iwaaki (Remote Internship)",
    role: "Programmer",
    company: "Tax Iwaaki",
    date: "Jun 2025 – Present",
    type: "work",
    description:
      "Mendigitalisasi alur kerja manual divisi Sales, Catering, dan Audit dengan backend real-time. Mengotomatisasi pelaporan keuangan kompleks menggunakan SQL logic untuk mengurangi human error.",
  },
  {
    title: "Bangkit Academy 2024 Batch 2",
    role: "Machine Learning Cohort",
    company: "Google, GoTo, Traveloka",
    date: "Sep 2024 – Dec 2024",
    type: "education",
    description:
      "Meraih 8 sertifikasi ML (DeepLearning.AI, Stanford, Dicoding). Mengembangkan 'GlucoScan' (Nutrition Label Analyzer) dengan akurasi 83% menggunakan CNN & OCR.",
  },
];

const techStack = [
  "Python", "SQL", "PHP", "JavaScript", "TypeScript",
  "TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "PaddleOCR",
  "MariaDB", "Firebase", "Roboflow", "Streamlit", "Tableau",
  "Docker", "Vercel", "Git",
];

const certifications: Certification[] = [
  {
    title: "Bangkit Academy Graduate (Distinction)",
    issuer: "Google, GoTo, Traveloka",
    description: "Lulus Bangkit 2024 dengan predikat Distinction di jalur Machine Learning.",
    imageUrl: "/certs/bangkit.jpg",
  },
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

const navItems = ["About", "Experience", "Projects", "Certifications"];

// ─────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────

// Typed bezier curve untuk Framer Motion
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

// ─────────────────────────────────────────
// REUSABLE: AnimatedSection
// ─────────────────────────────────────────
function AnimatedSection({
  children,
  className,
  variants = staggerContainer,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: typeof staggerContainer;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────
// COMPONENT: TechMarquee
// ─────────────────────────────────────────
function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className="relative w-full overflow-hidden border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 py-5 my-0">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-2 text-gray-400 dark:text-gray-600 font-semibold text-sm tracking-wide uppercase hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 cursor-default"
          >
            <span className="text-blue-500/60 text-xs">✦</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// COMPONENT: SectionHeading
// ─────────────────────────────────────────
function SectionHeading({ title, withBar = true }: { title: string; withBar?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="text-center mb-16"
    >
      <motion.h2
        variants={fadeUp}
        custom={0}
        className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      {withBar && (
        <motion.div
          variants={fadeIn}
          custom={0.2}
          className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
        />
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────
// COMPONENT: SkillCard
// ─────────────────────────────────────────
function SkillCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-shadow duration-300 overflow-hidden cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <motion.div
        className="flex justify-center mb-6 text-blue-600 dark:text-blue-400"
        whileHover={{ scale: 1.2, rotate: 8 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white relative z-10">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm relative z-10">{children}</p>
    </motion.div>
  );
}

// ─────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────
export default function PortfolioPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Close mobile nav on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll tracking: scroll-to-top + active section
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Determine active nav section
      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );
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

  // Hero parallax
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="bg-gray-50 dark:bg-[#0a0a0f] text-gray-800 dark:text-gray-200 antialiased min-h-screen selection:bg-blue-500 selection:text-white">

      {/* ─── AMBIENT BACKGROUND ORBS ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full bg-blue-500/[0.08] blur-[100px]" />
        <div className="absolute bottom-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-purple-500/[0.08] blur-[100px]" />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-indigo-400/[0.05] blur-[80px]" />
      </div>

      {/* ─── HEADER ─── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/75 dark:bg-black/75 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-800/60"
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <a href="#" aria-label="Homepage" className="group flex items-center gap-0.5">
            <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
              <span className="text-blue-600 group-hover:-translate-y-1 inline-block transition-transform duration-200">M</span>
              I
              <span className="text-blue-600 group-hover:translate-y-1 inline-block transition-transform duration-200">J</span>
            </span>
          </a>

          {/* Desktop Nav */}
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
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-blue-950/50 -z-10"
                    />
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
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
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
                    className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileNavOpen(false)}
                  className="mt-2 px-4 py-3 text-sm font-bold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                >
                  Hire Me
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ─── MAIN ─── */}
      <main className="relative z-10 pt-20">

        {/* ══════════ HERO ══════════ */}
        <section className="min-h-[92vh] flex flex-col items-center justify-center text-center px-4 relative">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="container mx-auto max-w-4xl"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.3 }}
              className="mb-8 relative inline-block"
            >
              <div className="absolute inset-[-8px] bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse" />
              <img
                src="/img/profile.jpg"
                alt="Mohammad Iqbal Jaffar"
                width={160}
                height={160}
                className="rounded-full relative z-10 border-4 border-white dark:border-gray-900 shadow-2xl object-cover w-[160px] h-[160px]"
              />
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.5 }}
              className="text-5xl md:text-8xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white leading-none"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Iqbal
              </span>
            </motion.h1>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.65 }}
              className="text-xl md:text-3xl text-gray-500 dark:text-gray-400 font-medium mb-6 tracking-wide"
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
                  Lihat Karya Saya
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a
                href="/cv/CV-MOHAMMAD-IQBAL-JAFFAR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="font-bold py-6 px-8 rounded-full text-base w-full border-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition-transform hover:scale-105"
                >
                  Unduh CV
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 dark:text-gray-700"
          >
            <ChevronDown size={28} />
          </motion.div>
        </section>

        {/* ══════════ TECH MARQUEE ══════════ */}
        <TechMarquee />

        {/* ══════════ ABOUT ══════════ */}
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-4">
            <SectionHeading title="Tentang Saya" />

            <AnimatedSection className="mb-12">
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-base md:text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              >
                Dengan fondasi kuat di Full-Stack Development dan semangat pada Machine Learning,
                saya tidak hanya membuat aplikasi — tapi juga memberinya{" "}
                <span className="font-semibold text-gray-900 dark:text-white">&quot;otak&quot;</span>.
              </motion.p>
            </AnimatedSection>

            <AnimatedSection className="grid md:grid-cols-3 gap-6 md:gap-8">
              <SkillCard icon={<Code size={36} />} title="Frontend Wizardry">
                Menciptakan antarmuka yang responsif dan smooth dengan ekosistem React, Next.js, dan Tailwind CSS.
              </SkillCard>
              <SkillCard icon={<Database size={36} />} title="Robust Backend">
                Arsitektur API yang efisien, manajemen database SQL/NoSQL, dan deployment scalable dengan Docker.
              </SkillCard>
              <SkillCard icon={<BrainCircuit size={36} />} title="AI & ML Integration">
                Membangun model Deep Learning untuk Computer Vision dan NLP, serta mengintegrasikannya ke aplikasi web.
              </SkillCard>
            </AnimatedSection>
          </div>
        </section>

        {/* ══════════ EXPERIENCE ══════════ */}
        <section id="experience" className="py-24 bg-white dark:bg-gray-950/60">
          <div className="container mx-auto px-4">
            <SectionHeading title="Pengalaman & Aktivitas" />

            <div className="max-w-3xl mx-auto relative">
              {/* Timeline vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent md:-translate-x-1/2" />

              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <AnimatedSection
                    key={index}
                    className={`relative mb-10 flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-start`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 top-5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-950 shadow-md transform -translate-x-1/2 z-10" />

                    {/* Spacer */}
                    <div className="hidden md:block w-1/2" />

                    {/* Card */}
                    <motion.div
                      variants={staggerItem}
                      className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold mb-3">
                          {exp.date}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3 flex items-center gap-1.5">
                          {exp.type === "education" ? <Terminal size={13} /> : <Briefcase size={13} />}
                          {exp.role} @ {exp.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════ PROJECTS ══════════ */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeading title="Proyek Unggulan" />

            <AnimatedSection>
              <motion.div variants={staggerItem} className="w-full max-w-6xl mx-auto">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {featuredProjects.map((project, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4 pb-4">
                        <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="h-full">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full group"
                          >
                            <Card className="h-full border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 overflow-hidden rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 transition-shadow duration-300">
                              <div className="relative w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                                <img
                                  src={project.imageUrl}
                                  alt={project.title}
                                  className="object-cover transition-transform duration-700 group-hover:scale-105 w-full h-full"
                                />
                              </div>
                              <CardHeader className="pb-2">
                                <div className="flex justify-between items-start gap-2">
                                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                    {project.title}
                                  </CardTitle>
                                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0 mt-0.5" />
                                </div>
                                <CardDescription className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mt-1">
                                  {project.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="flex flex-wrap gap-1.5">
                                  {project.tech.map((t, i) => (
                                    <span
                                      key={i}
                                      className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700"
                                    >
                                      {t}
                                    </span>
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
                    <CarouselPrevious className="left-[-52px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow" />
                    <CarouselNext className="right-[-52px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow" />
                  </div>
                </Carousel>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ══════════ CERTIFICATIONS ══════════ */}
        <section id="certifications" className="py-24 bg-white dark:bg-gray-950/60">
          <div className="container mx-auto px-4">
            <SectionHeading title="Sertifikasi" />

            <AnimatedSection>
              <motion.div variants={staggerItem} className="w-full max-w-6xl mx-auto">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {certifications.map((cert, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                        <motion.div
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="h-full p-1 cursor-pointer"
                          onClick={() => setSelectedCert(cert.imageUrl)}
                        >
                          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-shadow duration-300 h-full flex flex-col group">
                            <div className="relative h-44 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                              <img
                                src={cert.imageUrl}
                                alt={cert.title}
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 w-full h-full"
                              />
                              <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
                                Klik untuk memperbesar
                              </div>
                            </div>
                            <div className="p-5 flex-grow flex flex-col">
                              <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                                {cert.title}
                              </h3>
                              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wide">
                                {cert.issuer}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-auto leading-relaxed">
                                {cert.description}
                              </p>
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

        {/* ══════════ CONTACT ══════════ */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/60 to-transparent dark:from-gray-900/60 dark:to-transparent pointer-events-none" />
          <div className="container mx-auto text-center px-4 relative">
            <SectionHeading title="Let's Work Together" withBar={false} />

            <AnimatedSection>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
              >
                Tertarik berkolaborasi atau sekadar berdiskusi tentang AI? Hubungi saya kapan saja.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap justify-center gap-4"
              >
                {[
                  { icon: <Mail size={20} />, label: "Email Me", href: "mailto:iqbaljaffar1108@gmail.com" },
                  { icon: <Github size={20} />, label: "Github", href: "https://github.com/miqbaljaffar" },
                  {
                    icon: <Linkedin size={20} />,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/mohammad-iqbal-jaffar-091939290",
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    variants={staggerItem}
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 rounded-full shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300 border border-gray-100 dark:border-gray-800 group"
                  >
                    <span className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {social.icon}
                    </span>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Mohammad Iqbal Jaffar.{" "}
            <span className="mx-2 text-gray-300 dark:text-gray-700">|</span>
            Built with Next.js, Tailwind & Framer Motion.
          </p>
        </div>
      </footer>

      {/* ─── SCROLL TO TOP ─── */}
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
            className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl shadow-blue-500/30 z-40 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── CERT MODAL ─── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[100] p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 300 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img src={selectedCert} alt="Sertifikat" className="object-contain w-full h-full" />
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Tutup"
              >
                <X size={28} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}