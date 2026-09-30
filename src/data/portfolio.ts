import type { ComponentType } from "react";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiDocker,
  SiVercel,
  SiGit,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiArduino,
  SiStreamlit,
} from "react-icons/si";

/* ==========================================================
   TYPES
   ========================================================== */
export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: "AI & ML" | "Full-Stack Web" | "IoT & Hardware";
  link?: string;
  github?: string;
  image: string;
};

export type ExperienceItem = {
  title: string;
  organization: string;
  description: string;
  period: string;
  type: "work" | "edu" | "org";
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  image: string;
  link?: string;
};

export type TechItem = {
  name: string;
  level: string;
  icon: IconType | ComponentType<{ size?: number; className?: string }>;
};

export type TechCategory = "Languages" | "AI/ML" | "Dev Tools";

export type TechStackData = Record<TechCategory, TechItem[]>;

export type NavItem = { label: string; href: string };

/* ==========================================================
   DATA — NAVIGATION
   ========================================================== */
export const navItems: NavItem[] = [
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certs" },
  { label: "Contact", href: "#contact" },
];

/* ==========================================================
   DATA — PROJECTS
   ========================================================== */
export const projectsData: Project[] = [
  {
    title: "HoaxLens AI",
    description:
      "An autonomous fact-checking system built to expose misinformation. Verifies claim validity, detects bias and clickbait, and traces credible sources using Gemini AI with Google Search Grounding and Multimodal OCR.",
    tags: ["React", "Vite", "Tailwind", "Express", "TypeScript", "Gemini AI"],
    category: "AI & ML",
    link: "https://hoaxlens-ai.vercel.app",
    github: "https://github.com/GlucoScan-Bangkit/GlucoScanProject",
    image: "/projects/hoaxlens.JPG",
  },
  {
    title: "LexAI",
    description:
      "An AI system that transforms legal case narratives into structured Indonesian legal reasoning analysis — covering violation classification, article references, legal element breakdown, and tactical recommendations.",
    tags: ["React", "Vite", "Tailwind", "Express", "TypeScript", "Gemini AI"],
    category: "AI & ML",
    link: "https://lexlaw-three.vercel.app",
    image: "/projects/lexai.JPG",
  },
  {
    title: "MeowCare — Digital Vet Clinic",
    description:
      "A full-stack web application for veterinary clinic management, featuring a real-time queuing system, patient medical records (cats), and an interactive admin dashboard for clinic operations.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind", "Supabase"],
    category: "Full-Stack Web",
    link: "https://meow-care-one.vercel.app",
    image: "/projects/meow-care.JPG",
  },
  {
    title: "GlucoScan — Nutrition Fact Recognition",
    description:
      "A smart CNN model that extracts nutrition facts from food packaging images using OpenCV and PaddleOCR, with a focus on sugar content analysis for diabetes awareness.",
    tags: ["Python", "CNN", "TensorFlow", "OpenCV", "PaddleOCR"],
    category: "AI & ML",
    link: "https://github.com/GlucoScan-Bangkit/GlucoScanProject",
    image: "/projects/gluco.jpg",
  },
  {
    title: "Ztyle — Modern E-Commerce",
    description:
      "A stylish e-commerce platform featuring a product catalogue, checkout flow, order management, and a fashion news CMS — all packaged into one modern stack.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind"],
    category: "Full-Stack Web",
    link: "https://ztyle-store.vercel.app",
    image: "/projects/ztyle.JPG",
  },
  {
    title: "JLPT Arcade — Japanese Language",
    description:
      "A Japanese language learning platform for JLPT N5–N1 preparation. Includes an adaptive practice system, vocabulary and grammar modules, and official exam simulations.",
    tags: ["Next.js", "Tailwind", "Firebase", "Gemini AI"],
    category: "Full-Stack Web",
    link: "https://kanjivibe-app-1090346603455.asia-southeast2.run.app",
    image: "/projects/jlpt.JPG",
  },
  {
    title: "M-Pajak Sentiment Analysis",
    description:
      "Sentiment analysis of M-Pajak app reviews using NLP and machine learning, uncovering insights and UX improvement recommendations from user feedback.",
    tags: ["Python", "NLP", "Scikit-learn", "TensorFlow"],
    category: "AI & ML",
    github: "https://github.com/miqbaljaffar/Sentiment_Analisis_Aplikasi_M_Pajak",
    image: "/projects/mpajak.JPG",
  },
  {
    title: "Student Dropout Prediction",
    description:
      "Analysis of student dropout factors and prediction using machine learning, complete with an interactive visual dashboard for academic decision-making.",
    tags: ["Python", "Streamlit", "Random Forest", "Pandas"],
    category: "AI & ML",
    github: "https://github.com/miqbaljaffar/Student-Dropout",
    image: "/projects/dropout.jpg",
  },
  {
    title: "GTR — Smart Trash Bin",
    description:
      "An Arduino-based smart trash bin prototype that automatically sorts organic, inorganic, and metal waste using IR, LDR, and inductive sensors.",
    tags: ["C++", "Arduino", "IoT", "Hardware"],
    category: "IoT & Hardware",
    github: "https://github.com/miqbaljaffar/WasteTrash",
    image: "/projects/gtr.jpg",
  },
];

/* ==========================================================
   DATA — EXPERIENCE
   ========================================================== */
export const experienceData: ExperienceItem[] = [
  {
    title: "Programmer & Technical Mentor",
    organization: "Iwasaki Keiei (Remote)",
    description:
      "Developing and maintaining company application systems remotely, while serving as Technical Mentor guiding new internship participants.",
    period: "Aug 2026 — Present",
    type: "work",
  },
  {
    title: "Japanese Language Instructor (Sensei)",
    organization: "Universitas Teknologi Bandung",
    description:
      "Teaching Japanese language classes under a UTB cooperation program, located at SMA Bina Putra, Banjar, West Java.",
    period: "Jun 2026 — Jul 2026",
    type: "org",
  },
  {
    title: "Programmer Intern (Remote)",
    organization: "Iwasaki Keiei",
    description:
      "Digitized Sales, Catering, and Audit workflows with a real-time backend. Automated complex financial reporting using SQL logic to reduce human error.",
    period: "Jun 2025 — Apr 2026",
    type: "work",
  },
  {
    title: "Machine Learning Cohort · Distinction",
    organization: "Bangkit Academy 2024 Batch 2",
    description:
      "Earned 8 ML certifications (DeepLearning.AI, Stanford, Dicoding). Developed GlucoScan (Nutrition Label Analyzer) achieving 83% accuracy using CNN & OCR.",
    period: "Sep 2024 — Dec 2024",
    type: "edu",
  },
];

/* ==========================================================
   DATA — CERTIFICATIONS
   ========================================================== */
export const certificationsData: Certification[] = [
  {
    title: "SSW – Automotive Maintenance",
    issuer: "Specified Skilled Worker Program — Japan",
    year: "2026",
    image: "/certs/ssw.jpg",
  },
  {
    title: "JFT-Basic A2 — Japanese Language Test",
    issuer: "Japan Foundation",
    year: "2026",
    image: "/certs/cert_JFT.jpg",
  },
  {
    title: "Bangkit Academy Graduate — Distinction",
    issuer: "Google, GoTo, Traveloka",
    year: "2024",
    image: "/certs/bangkit.jpg",
  },
  {
    title: "Dev Certified for ML with TensorFlow",
    issuer: "dev.id · Dicoding",
    year: "2024",
    image: "/certs/dcml.jpg",
  },
  {
    title: "Machine Learning Operations (MLOps)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/certs/mlops.JPG",
  },
  {
    title: "Applied Machine Learning",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/certs/mlt.JPG",
  },
];

/* ==========================================================
   DATA — TECH STACK
   Catatan: Icon disimpan sebagai COMPONENT REFERENCE.
   SkillCard akan merender <item.icon size={...}/>.
   (Tidak ada JSX di file .ts ini)
   ========================================================== */
export const techStackData: TechStackData = {
  Languages: [
    { name: "Python", level: "Advanced", icon: SiPython },
    { name: "TypeScript", level: "Advanced", icon: SiTypescript },
    { name: "JavaScript", level: "Advanced", icon: SiJavascript },
    { name: "PHP", level: "Intermediate", icon: SiPhp },
    { name: "SQL / PostgreSQL", level: "Advanced", icon: SiPostgresql },
    { name: "MySQL / MariaDB", level: "Advanced", icon: SiMysql },
    { name: "MongoDB", level: "Intermediate", icon: SiMongodb },
    { name: "C++ (Arduino)", level: "Intermediate", icon: SiArduino },
  ],
  "AI/ML": [
    { name: "TensorFlow", level: "Advanced", icon: SiTensorflow },
    { name: "Keras", level: "Advanced", icon: SiKeras },
    { name: "Scikit-Learn", level: "Advanced", icon: SiScikitlearn },
    { name: "OpenCV", level: "Intermediate", icon: SiOpencv },
    { name: "PaddleOCR", level: "Intermediate", icon: SiTensorflow },
    { name: "Roboflow", level: "Intermediate", icon: SiTensorflow },
  ],
  "Dev Tools": [
    { name: "Node.js", level: "Advanced", icon: SiNodedotjs },
    { name: "Next.js", level: "Advanced", icon: SiNextdotjs },
    { name: "React", level: "Advanced", icon: SiReact },
    { name: "Tailwind CSS", level: "Advanced", icon: SiTailwindcss },
    { name: "Prisma", level: "Intermediate", icon: SiPrisma },
    { name: "Supabase", level: "Intermediate", icon: SiSupabase },
    { name: "Firebase", level: "Intermediate", icon: SiFirebase },
    { name: "Docker", level: "Intermediate", icon: SiDocker },
    { name: "Vercel", level: "Advanced", icon: SiVercel },
    { name: "Git", level: "Advanced", icon: SiGit },
    { name: "Redis", level: "Intermediate", icon: SiRedis },
    { name: "Streamlit", level: "Intermediate", icon: SiStreamlit },
  ],
};
