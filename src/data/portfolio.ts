import type { ReactElement } from "react";
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
  SiTableau,
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
  icon: ReactElement;
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
      "Sistem pengecekan fakta otonom untuk membongkar misinformasi. Memverifikasi validitas, mendeteksi bias dan clickbait, serta melacak sumber kredibel menggunakan Gemini AI dengan Google Search Grounding dan Multimodal OCR.",
    tags: ["React", "Vite", "Tailwind", "Express", "TypeScript", "Gemini AI"],
    category: "AI & ML",
    link: "https://hoaxlens-ai.vercel.app",
    github: "https://github.com/GlucoScan-Bangkit/GlucoScanProject",
    image: "/projects/hoaxlens.JPG",
  },
  {
    title: "LexAI",
    description:
      "Sistem kecerdasan buatan yang mengubah narasi kasus hukum menjadi analisis penalaran hukum Indonesia terstruktur, mencakup klasifikasi pelanggaran, rujukan pasal, bedah unsur hukum, dan rekomendasi taktis.",
    tags: ["React", "Vite", "Tailwind", "Express", "TypeScript", "Gemini AI"],
    category: "AI & ML",
    link: "https://lexlaw-three.vercel.app",
    image: "/projects/lexai.JPG",
  },
  {
    title: "MeowCare — Klinik Hewan Digital",
    description:
      "Aplikasi web full-stack untuk manajemen klinik hewan, dilengkapi dengan sistem antrian real-time, rekam medis pasien (kucing), dan dasbor admin interaktif untuk operasional klinik.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind", "Supabase"],
    category: "Full-Stack Web",
    link: "https://meow-care-one.vercel.app",
    image: "/projects/meow-care.JPG",
  },
  {
    title: "GlucoScan — Nutrition Fact Recognition",
    description:
      "Model CNN cerdas yang mengekstrak fakta nutrisi dari gambar kemasan makanan menggunakan OpenCV dan PaddleOCR, dengan fokus pada analisis kadar gula untuk diabetes awareness.",
    tags: ["Python", "CNN", "TensorFlow", "OpenCV", "PaddleOCR"],
    category: "AI & ML",
    link: "https://github.com/GlucoScan-Bangkit/GlucoScanProject",
    image: "/projects/gluco.jpg",
  },
  {
    title: "Ztyle — Modern E-Commerce",
    description:
      "Platform e-commerce stylish dengan fitur katalog produk, checkout, manajemen pesanan, dan CMS berita fashion dalam satu paket modern.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind"],
    category: "Full-Stack Web",
    link: "https://ztyle-store.vercel.app",
    image: "/projects/ztyle.JPG",
  },
  {
    title: "JLPT Arcade — Bahasa Jepang",
    description:
      "Platform belajar bahasa Jepang untuk persiapan JLPT N5–N1. Dilengkapi sistem latihan adaptif, modul kosakata, grammar, dan simulasi ujian resmi.",
    tags: ["Next.js", "Tailwind", "Firebase", "Gemini AI"],
    category: "Full-Stack Web",
    link: "https://kanjivibe-app-1090346603455.asia-southeast2.run.app",
    image: "/projects/jlpt.JPG",
  },
  {
    title: "Analisis Sentimen M-Pajak",
    description:
      "Analisis sentimen ulasan aplikasi M-Pajak dengan NLP dan Machine Learning, untuk menemukan insight dan rekomendasi perbaikan UX.",
    tags: ["Python", "NLP", "Scikit-learn", "TensorFlow"],
    category: "AI & ML",
    github: "https://github.com/miqbaljaffar/Sentiment_Analisis_Aplikasi_M_Pajak",
    image: "/projects/mpajak.JPG",
  },
  {
    title: "Prediksi Student Dropout",
    description:
      "Analisis faktor dropout mahasiswa dan prediksi dengan machine learning, lengkap dengan dashboard visual interaktif.",
    tags: ["Python", "Streamlit", "Random Forest", "Pandas"],
    category: "AI & ML",
    github: "https://github.com/miqbaljaffar/Student-Dropout",
    image: "/projects/dropout.jpg",
  },
  {
    title: "GTR — Smart Trash Bin",
    description:
      "Purwarupa tong sampah pintar berbasis Arduino yang dapat memilah sampah organik, anorganik, dan logam secara otomatis dengan IR, LDR, dan sensor induktif.",
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
      "Mengembangkan & memelihara sistem aplikasi perusahaan secara remote, sekaligus menjadi Technical Mentor yang membimbing peserta internship baru.",
    period: "Agu 2026 — Sekarang",
    type: "work",
  },
  {
    title: "Pengajar Bahasa Jepang (Sensei)",
    organization: "Universitas Teknologi Bandung",
    description:
      "Mengajar kelas bahasa Jepang dalam program kerja sama UTB yang berlokasi di SMA Bina Putra, Banjar, Jawa Barat.",
    period: "Jun 2026 — Jul 2026",
    type: "org",
  },
  {
    title: "Programmer Intern (Remote)",
    organization: "Iwasaki Keiei",
    description:
      "Mendigitalisasi alur kerja Sales, Catering, dan Audit dengan backend real-time. Mengotomatisasi pelaporan keuangan kompleks menggunakan SQL logic untuk mengurangi human error.",
    period: "Jun 2025 — Apr 2026",
    type: "work",
  },
  {
    title: "Machine Learning Cohort · Distinction",
    organization: "Bangkit Academy 2024 Batch 2",
    description:
      "Meraih 8 sertifikasi ML (DeepLearning.AI, Stanford, Dicoding). Mengembangkan GlucoScan (Nutrition Label Analyzer) dengan akurasi 83% menggunakan CNN & OCR.",
    period: "Sep 2024 — Des 2024",
    type: "edu",
  },
];

/* ==========================================================
   DATA — CERTIFICATIONS
   ========================================================== */
export const certificationsData: Certification[] = [
  {
    title: "SSW – Perawatan Kendaraan (Automotive Maintenance)",
    issuer: "Program Specified Skilled Worker Jepang",
    year: "2026",
    image: "/certs/ssw.jpg",
  },
  {
    title: "JFT-Basic A2 — Tes Bahasa Jepang",
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
    title: "Machine Learning Terapan",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/certs/mlt.JPG",
  },
];

/* ==========================================================
   DATA — TECH STACK
   ========================================================== */
const ic = (icon: ReactElement, size = 20) => (
  <span style={{ width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
    {icon}
  </span>
);

export const techStackData: TechStackData = {
  Languages: [
    { name: "Python", level: "Advanced", icon: ic(<SiPython />) },
    { name: "TypeScript", level: "Advanced", icon: ic(<SiTypescript />) },
    { name: "JavaScript", level: "Advanced", icon: ic(<SiJavascript />) },
    { name: "PHP", level: "Intermediate", icon: ic(<SiPhp />) },
    { name: "SQL / PostgreSQL", level: "Advanced", icon: ic(<SiPostgresql />) },
    { name: "MySQL / MariaDB", level: "Advanced", icon: ic(<SiMysql />) },
    { name: "MongoDB", level: "Intermediate", icon: ic(<SiMongodb />) },
    { name: "C++ (Arduino)", level: "Intermediate", icon: ic(<SiArduino />) },
  ],
  "AI/ML": [
    { name: "TensorFlow", level: "Advanced", icon: ic(<SiTensorflow />) },
    { name: "Keras", level: "Advanced", icon: ic(<SiKeras />) },
    { name: "Scikit-Learn", level: "Advanced", icon: ic(<SiScikitlearn />) },
    { name: "OpenCV", level: "Intermediate", icon: ic(<SiOpencv />) },
    { name: "PaddleOCR", level: "Intermediate", icon: ic(<SiTensorflow />) },
    { name: "Roboflow", level: "Intermediate", icon: ic(<SiTensorflow />) },
  ],
  "Dev Tools": [
    { name: "Node.js", level: "Advanced", icon: ic(<SiNodedotjs />) },
    { name: "Next.js", level: "Advanced", icon: ic(<SiNextdotjs />) },
    { name: "React", level: "Advanced", icon: ic(<SiReact />) },
    { name: "Tailwind CSS", level: "Advanced", icon: ic(<SiTailwindcss />) },
    { name: "Prisma", level: "Intermediate", icon: ic(<SiPrisma />) },
    { name: "Supabase", level: "Intermediate", icon: ic(<SiSupabase />) },
    { name: "Firebase", level: "Intermediate", icon: ic(<SiFirebase />) },
    { name: "Docker", level: "Intermediate", icon: ic(<SiDocker />) },
    { name: "Vercel", level: "Advanced", icon: ic(<SiVercel />) },
    { name: "Git", level: "Advanced", icon: ic(<SiGit />) },
    { name: "Redis", level: "Intermediate", icon: ic(<SiRedis />) },
    { name: "Streamlit", level: "Intermediate", icon: ic(<SiStreamlit />) },
    { name: "Tableau", level: "Beginner", icon: ic(<SiTableau />) },
  ],
};
