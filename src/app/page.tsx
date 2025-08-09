"use client"; 

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { 
  ArrowRight, 
  Code, 
  Database, 
  BrainCircuit, 
  Github, 
  Linkedin, 
  Mail,
  FileText, // PERBAIKAN: Menambahkan ikon FileText
  X 
} from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

// Tipe data untuk Proyek
type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  imageUrl: string;
};

// Tipe data untuk Sertifikasi
type Certification = {
  title:string;
  issuer: string;
  description: string;
  imageUrl: string; 
};

// --- PENAMBAHAN: Tipe data untuk Kegiatan ---
type Activity = {
  title: string;
  role: string;
  description: string;
  imageUrl: string;
  year: string;
}

// --- DATA DARI PORTFOLIO ANDA ---

const featuredProjects: Project[] = [
  {
    title: "Automated Nutrition Fact Recognition",
    description: "Model klasifikasi berbasis CNN untuk identifikasi dan ekstraksi tabel fakta nutrisi dari gambar, terintegrasi dengan OpenCV dan PaddleOCR untuk mengekstrak kadar gula.",
    tech: ["Python", "CNN", "TensorFlow", "OpenCV", "PaddleOCR"],
    link: "https://github.com/GlucoScan-Bangkit/GlucoScanProject", 
    imageUrl: "/projects/gluco.jpg",
  },
  {
    title: "Ztyle - Modern E-Commerce Platform",
    description: "Platform e-commerce modern dengan fitur lengkap untuk pelanggan dan admin, mulai dari katalog, checkout, manajemen pesanan, hingga CMS berita fashion.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Zod", "Zustand", "Vercel Blob"],
    link: "https://ztyle-store.vercel.app",
    imageUrl: "/projects/ztyle.jpg",
  },
  {
    title: "Predictive Analytics for Car MSRP",
    description: "Melakukan analisis data eksplorasi (EDA) dan pemodelan prediktif menggunakan Regresi Linier dan KNN untuk memperkirakan harga mobil (MSRP).",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
    link: "https://github.com/miqbaljaffar/MLT/blob/main/MPA%20CAR%20(2).ipynb", 
    imageUrl: "/projects/ztyle.jpg",
  },
  {
    title: "Phone Recommendation System",
    description: "Mengembangkan sistem rekomendasi smartphone berbasis fitur menggunakan cosine similarity untuk memberikan saran yang akurat dan personal.",
    tech: ["Python", "Cosine Similarity", "Pandas", "Scikit-learn"],
    link: "https://github.com/miqbaljaffar/MLT/blob/main/SRR.ipynb",
    imageUrl: "/projects/hotel.jpg",
  },
];

// --- PENAMBAHAN: Data Kegiatan ---
const activities: Activity[] = [
  {
    title: "Pameran Mikrokontroler",
    role: "Peserta & Presenter Proyek",
    description: "Mempresentasikan sistem klasifikasi sampah otomatis berbasis sensor induktif dan LDR kepada pengunjung dan juri.",
    imageUrl: "/certs/bangkit.jpg", // Ganti dengan path gambar Anda
    year: "2024"
  },
  {
    title: "Hackathon Nasional: Solusi Digital",
    role: "Full-Stack Developer",
    description: "Berkolaborasi dalam tim untuk membangun prototipe aplikasi event management dalam waktu 24 jam, mengintegrasikan Firebase dan QR Code.",
    imageUrl: "/certs/bangkit.jpg", // Ganti dengan path gambar Anda
    year: "2024"
  },
  {
    title: "Pameran Website & Aplikasi Desktop",
    role: "Pengembang Aplikasi",
    description: "Mendemonstrasikan aplikasi desktop untuk manajemen perpustakaan yang dibangun dengan database lokal phpMyAdmin.",
    imageUrl: "/certs/bangkit.jpg", // Ganti dengan path gambar Anda
    year: "2023"
  }
];

const certifications: Certification[] = [
  {
    title: "Bangkit Academy Graduate with Distinction",
    issuer: "Google, GoTo, Traveloka",
    description: "Lulus dari program Bangkit 2024 dengan predikat Distinction pada learning path Machine Learning.",
    imageUrl: "/certs/bangkit.jpg", 
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    description: "Menguasai model supervised, neural networks, decision trees, dan recommender systems.",
    imageUrl: "/certs/bangkit.jpg", 
  },
  {
    title: "DeepLearning.AI TensorFlow Developer",
    issuer: "DeepLearning.AI",
    description: "Sertifikasi profesional dalam membangun dan melatih model neural networks menggunakan TensorFlow.",
    imageUrl: "/certs/bangkit.jpg",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations",
    issuer: "Oracle Academy & Kominfo",
    description: "Memiliki pemahaman fundamental mengenai layanan cloud Oracle, termasuk Core Infrastructure.",
    imageUrl: "/certs/bangkit.jpg", 
  },
  {
    title: "Natural Language Processing Specialization",
    issuer: "DeepLearning.AI",
    description: "Mendalami teknik NLP tingkat lanjut seperti word embeddings, RNNs, dan transformers.",
    imageUrl: "/certs/bangkit.jpg",
  },
  {
    title: "Junior Web Developer",
    issuer: "BNSP",
    description: "Sertifikasi kompetensi nasional yang memvalidasi kemampuan dalam pengembangan web.",
    imageUrl: "/certs/bangkit.jpg", 
  },
];

const SkillCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <motion.div 
    className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800/50 text-center h-full hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{children}</p>
  </motion.div>
);


export default function PortfolioPage() {
  const [selectedCert, setSelectedCert] = React.useState<string | null>(null);

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-white antialiased">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">
            <a href="#" aria-label="Homepage">
              <span className="text-blue-600 dark:text-blue-400">M</span>I<span className="text-blue-600 dark:text-blue-400">J</span>
            </a>
          </h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-blue-500 transition-colors">Tentang Saya</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Proyek</a>
            {/* PENAMBAHAN: Link navigasi baru */}
            <a href="#activities" className="hover:text-blue-500 transition-colors">Kegiatan</a>
            <a href="#certifications" className="hover:text-blue-500 transition-colors">Sertifikasi</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Kontak</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <a href="#contact" className="hidden md:inline-block">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Hubungi Saya
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* ... (Hero Section & About Me Section tidak berubah) ... */}
        <section className="min-h-screen flex items-center justify-center text-center px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src="/img/profile.jpg"
                alt="Foto Profil Mohammad Iqbal Jaffar"
                width={150}
                height={150}
                className="rounded-full mx-auto border-4 border-blue-500 shadow-lg"
                priority
              />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Mohammad Iqbal Jaffar
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-4xl text-blue-600 dark:text-blue-400 font-semibold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Machine Learning Engineer
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mahasiswa Teknik Informatika dengan hasrat mendalam pada Machine Learning dan Data Science. Berpengalaman membangun model cerdas untuk menyelesaikan masalah dunia nyata.
            </motion.p>
            {/* PERBAIKAN: Menambahkan tombol CV dan bungkus dalam flex container */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#projects">
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-bold py-3 px-6 rounded-lg text-lg w-full sm:w-auto"
                  size="lg"
                >
                  Lihat Proyek Saya
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/cv/CV-MOHAMMAD-IQBAL-JAFFAR.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="font-bold py-3 px-6 rounded-lg text-lg w-full sm:w-auto"
                  size="lg"
                >
                  Lihat CV
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/40">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">Tentang Saya</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              {/* PERBAIKAN: Menggunakan &quot; untuk tanda kutip */}
              Dengan fondasi kuat di Full-Stack Development dan semangat pada Machine Learning, saya tidak hanya membuat aplikasi, tapi juga memberinya &quot;otak&quot; untuk berpikir. Saya menikmati setiap tahap, mulai dari data mining hingga deployment fitur AI yang bermanfaat bagi pengguna.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <SkillCard icon={<Code size={32} />} title="Frontend Development">
                Menciptakan antarmuka yang responsif, dinamis, dan ramah pengguna dengan Next.js/React dan Tailwind CSS.
              </SkillCard>
              <SkillCard icon={<Database size={32} />} title="Backend & Deployment">
                Merancang API yang efisien, mengelola database (SQL & NoSQL), dan melakukan deployment aplikasi secara scalable menggunakan Docker dan Vercel.
              </SkillCard>
              <SkillCard icon={<BrainCircuit size={32} />} title="Machine Learning">
                Membangun, melatih, dan mengintegrasikan model ML untuk fitur cerdas seperti Computer Vision, NLP, dan sistem rekomendasi.
              </SkillCard>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-12">Proyek Unggulan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block h-full group"
                  >
                    <Card className="bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-800/50 text-left h-full flex flex-col group-hover:border-blue-500 transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden rounded-lg shadow-md">
                      <div className="relative w-full h-56">
                        <Image
                          src={project.imageUrl}
                          alt={`Gambar pratinjau untuk ${project.title}`}
                          fill={true}
                          style={{objectFit: 'cover'}}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-gray-900 dark:text-white">{project.title}</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400 pt-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-2 py-1 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <div className="p-6 pt-0 mt-auto">
                        <div className="text-blue-600 dark:text-blue-400 p-0 inline-flex items-center font-medium">
                          Lihat di GitHub
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PENAMBAHAN: SEKSI KEGIATAN (ACTIVITIES) --- */}
        <section id="activities" className="py-24 bg-gray-50 dark:bg-gray-900/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Pengalaman & Kegiatan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-800/50 text-left h-full flex flex-col p-0 overflow-hidden shadow-md group">
                    <div className="relative h-48 w-full">
                      <Image
                        src={activity.imageUrl}
                        alt={`Gambar untuk ${activity.title}`}
                        fill={true}
                        style={{objectFit: 'cover'}}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <CardHeader className="p-0">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-gray-900 dark:text-white text-lg">{activity.title}</CardTitle>
                          <span className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">{activity.year}</span>
                        </div>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{activity.role}</p>
                      </CardHeader>
                      <CardContent className="p-0 pt-4 flex-grow">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{activity.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Sertifikasi & Pencapaian</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card 
                    className="bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-800/50 text-left h-full flex flex-col p-0 overflow-hidden shadow-md group cursor-pointer hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => setSelectedCert(cert.imageUrl)}
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src={cert.imageUrl}
                        alt={`Sertifikat untuk ${cert.title}`}
                        fill={true}
                        style={{objectFit: 'cover', objectPosition: 'top'}}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <CardHeader className="p-0">
                        <CardTitle className="text-gray-900 dark:text-white text-lg">{cert.title}</CardTitle>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{cert.issuer}</p>
                      </CardHeader>
                      <CardContent className="p-0 pt-4 flex-grow">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/40">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">Mari Terhubung</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar bertukar pikiran. Jangan ragu untuk menghubungi saya.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:iqbaljaffar1108@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"><Mail size={32} /></a>
              <a href="https://github.com/miqbaljaffar" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"><Github size={32} /></a>
              <a href="https://www.linkedin.com/in/mohammad-iqbal-jaffar-091939290" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"><Linkedin size={32} /></a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto text-center text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mohammad Iqbal Jaffar. Dibuat dengan Next.js dan <span className="text-red-500">❤</span>.</p>
        </div>
      </footer>

      {/* ... (Modal Section tidak berubah) ... */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedCert} 
                alt="Tampilan penuh sertifikat" 
                width={900} 
                height={630} 
                className="max-w-screen-lg max-h-[90vh] object-contain rounded-lg"
              />
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-all"
                aria-label="Tutup"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
