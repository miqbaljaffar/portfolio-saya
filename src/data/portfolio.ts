export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  imageUrl: string;
};

export type Certification = {
  title: string;
  issuer: string;
  description: string;
  imageUrl: string;
};

export type Experience = {
  title: string;
  role: string;
  company: string;
  description: string;
  date: string;
  type: "work" | "education" | "organization";
};

export const featuredProjects: Project[] = [
  {
    title: "MeowCare – Solusi Digital Klinik Hewan",
    description: "Aplikasi web full-stack untuk manajemen klinik hewan yang dilengkapi dengan sistem antrian real-time, rekam medis pasien (kucing), dan dasbor admin interaktif.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Supabase"],
    link: "https://meow-care-one.vercel.app", 
    imageUrl: "/projects/meow-care.JPG",
  },
  {
    title: "Automated Nutrition Fact Recognition",
    description: "Model CNN cerdas yang mengekstrak fakta nutrisi dari gambar dengan bantuan OpenCV dan PaddleOCR untuk analisis kadar gula.",
    tech: ["Python", "CNN", "TensorFlow", "OpenCV", "PaddleOCR"],
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
    title: "JLPT Arcade",
    description: "Platform belajar bahasa Jepang yang dirancang khusus untuk persiapan JLPT N5-N1. Dilengkapi dengan sistem latihan adaptif, modul kosakata, grammar, dan simulasi ujian resmi.",
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Ai Gemini", "Vite"],
    link: "https://kanjivibe-app-1090346603455.asia-southeast2.run.app/",
    imageUrl: "/projects/jlpt.JPG",
  },
  {
    title: "Analisis Sentimen M-Pajak",
    description: "Analisis sentimen ulasan M-Pajak dengan NLP dan Machine Learning untuk menemukan insight serta rekomendasi perbaikan.",
    tech: ["Python", "NLP", "Scikit-learn", "TensorFlow"],
    link: "https://github.com/miqbaljaffar/Sentiment_Analisis_Aplikasi_M_Pajak",
    imageUrl: "/projects/mpajak.JPG",
  },
  {
    title: "Prediksi Student Dropout",
    description: "Analisis faktor dropout mahasiswa dan prediksi dengan machine learning, lengkap dengan dashboard visual interaktif.",
    tech: ["Python", "Streamlit", "Random Forest", "Pandas"],
    link: "https://github.com/miqbaljaffar/Student-Dropout",
    imageUrl: "/projects/dropout.jpg",
  },
];

export const experiences: Experience[] = [
  {
    title: "Iwasaki Keiei (Remote Internship)",
    role: "Programmer",
    company: "Iwasaki Keiei",
    date: "Jun 2025 – Apr 2026",
    type: "work",
    description: "Mendigitalisasi alur kerja manual divisi Sales, Catering, dan Audit dengan backend real-time. Mengotomatisasi pelaporan keuangan kompleks menggunakan SQL logic untuk mengurangi human error.",
  },
  {
    title: "Bangkit Academy 2024 Batch 2",
    role: "Machine Learning Cohort",
    company: "Google, GoTo, Traveloka",
    date: "Sep 2024 – Dec 2024",
    type: "education",
    description: "Meraih 8 sertifikasi ML (DeepLearning.AI, Stanford, Dicoding). Mengembangkan 'GlucoScan' (Nutrition Label Analyzer) dengan akurasi 83% menggunakan CNN & OCR.",
  },
];

export const techStack = [
  "Python", "SQL", "PHP", "JavaScript", "TypeScript",
  "TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "PaddleOCR",
  "MariaDB", "Firebase", "Roboflow", "Streamlit", "Tableau",
  "Docker", "Vercel", "Git",
];

export const certifications: Certification[] = [
  {
    title: "SSW – Perawatan Kendaraan (Automotive Maintenance)",
    issuer: "Program Specified Skilled Worker Jepang",
    description: "Sertifikasi kemampuan teknis dalam inspeksi, perawatan, dan perbaikan kendaraan di bawah sistem SSW Jepang.",
    imageUrl: "/certs/ssw.jpg",
  },
  {
    title: "JFT-Basic (Tes Bahasa Jepang)",
    issuer: "Japan Foundation",
    description: "Sertifikasi kemampuan bahasa Jepang dasar untuk komunikasi sehari-hari (setara A2).",
    imageUrl: "/certs/cert_JFT.jpg",
  },
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

export const navItems = ["About", "Experience", "Projects", "Certifications"];