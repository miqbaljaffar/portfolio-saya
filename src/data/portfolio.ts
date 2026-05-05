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
    title: "Kanji Master N4",
    description: "Aplikasi pembelajaran basic hiragana, katakana, dan kanji untuk tingkat N4 dengan fitur latihan, ujian, dan progress tracking.",
    tech: ["Next.js"],
    link: "https://kanji-game-mocha.vercel.app",
    imageUrl: "/projects/kanji.JPG",
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
    title: "Certification JFT A2 Basic",
    issuer: "Japan Foundation",
    description: "Sertifikasi kemampuan bahasa Jepang tingkat dasar (A2) dengan fokus pada komunikasi sehari-hari.",
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