"use client"; 

import * as React from "react";
import { motion } from "framer-motion";
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
  Mail 
} from "lucide-react";

// Definisikan tipe data untuk proyek agar mudah dikelola
type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

// Data Proyek Unggulan (Contoh, ganti dengan proyek Anda)
const featuredProjects: Project[] = [
  {
    title: "Web Ringkasan Berita AI",
    description: "Aplikasi web yang secara otomatis merangkum artikel berita dari berbagai sumber menggunakan model NLP yang telah di-finetune.",
    tech: ["Next.js", "Python", "FastAPI", "Hugging Face", "Vercel"],
    link: "#",
  },
  {
    title: "Sistem Rekomendasi E-commerce",
    description: "Membangun dan mengintegrasikan model collaborative filtering untuk memberikan rekomendasi produk yang dipersonalisasi.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "AWS"],
    link: "#",
  },
  {
    title: "Dashboard Analisis Sentimen",
    description: "Platform interaktif untuk melacak dan menganalisis sentimen publik terhadap suatu topik dari media sosial secara real-time.",
    tech: ["Vue.js", "Tailwind CSS", "Firebase", "Scrapy"],
    link: "#",
  },
];

// Komponen untuk kartu skill
const SkillCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 text-center">
    <div className="flex justify-center mb-4 text-royal-blue">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);


export default function PortfolioPage() {
  return (
    <div className="bg-black text-white antialiased">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">
            <span className="text-royal-blue">M</span>I<span className="text-royal-blue">J</span>
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-royal-blue transition-colors">Tentang Saya</a>
            <a href="#projects" className="hover:text-royal-blue transition-colors">Proyek</a>
            <a href="#contact" className="hover:text-royal-blue transition-colors">Kontak</a>
          </nav>
          <Button className="hidden md:flex bg-royal-blue text-white hover:bg-blue-500">
            Hubungi Saya
          </Button>
        </div>
      </header>

      <main className="pt-20">
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-screen flex items-center justify-center text-center px-4">
          <div className="container mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Mohammad Iqbal Jaffar
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-4xl text-royal-blue font-semibold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              AI-Powered Full-Stack Developer
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Saya adalah jembatan antara ide dan implementasi, membangun aplikasi web yang cerdas, fungsional, dan intuitif dari hulu ke hilir.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#projects">
                <Button
                  className="bg-royal-blue text-white hover:bg-blue-500 font-bold py-3 px-6 rounded-lg text-lg"
                  size="lg"
                >
                  Lihat Proyek Saya
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ===== TENTANG SAYA (ABOUT ME) SECTION ===== */}
        <section id="about" className="py-24 bg-gray-900/30">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">Tentang Saya</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Dengan fondasi kuat di Full-Stack Development dan semangat pada Machine Learning, saya tidak hanya membuat aplikasi, tapi juga memberinya "otak" untuk berpikir. Saya menikmati setiap tahap, mulai dari data mining hingga deployment fitur AI yang bermanfaat bagi pengguna.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <SkillCard icon={<Code size={32} />} title="Frontend Development">
                Menciptakan antarmuka yang responsif, dinamis, dan ramah pengguna dengan Next.js/React dan Tailwind CSS.
              </SkillCard>
              <SkillCard icon={<Database size={32} />} title="Backend & Deployment">
                Merancang API yang efisien, mengelola database, dan melakukan deployment aplikasi secara scalable menggunakan Docker dan Vercel.
              </SkillCard>
              <SkillCard icon={<BrainCircuit size={32} />} title="Machine Learning">
                Membangun, melatih, dan mengintegrasikan model Machine Learning untuk fitur cerdas seperti chatbot, sistem rekomendasi, dan analisis data.
              </SkillCard>
            </div>
          </div>
        </section>

        {/* ===== PROYEK UNGGULAN (PROJECTS) SECTION ===== */}
        <section id="projects" className="py-24">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-12">Proyek Unggulan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-700 text-left h-full flex flex-col hover:border-royal-blue transition-colors">
                    <CardHeader>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-xs bg-royal-blue/20 text-royal-blue px-2 py-1 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <div className="p-6 pt-0">
                       <a href={project.link} target="_blank" rel="noopener noreferrer">
                         <Button variant="link" className="text-royal-blue p-0">
                           Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
                         </Button>
                       </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* ===== KONTAK (CONTACT) SECTION ===== */}
        <section id="contact" className="py-24 bg-gray-900/30">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">Mari Terhubung</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar bertukar pikiran. Jangan ragu untuk menghubungi saya.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="iqbaljaffar1108@gmail.com" className="text-gray-400 hover:text-royal-blue transition-colors"><Mail size={32} /></a>
              <a href="https://github.com/miqbaljaffar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-royal-blue transition-colors"><Github size={32} /></a>
              <a href="https://www.linkedin.com/in/mohammad-iqbal-jaffar-091939290" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-royal-blue transition-colors"><Linkedin size={32} /></a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mohammad Iqbal Jaffar. Dibuat dengan Next.js dan cinta.</p>
        </div>
      </footer>
    </div>
  );
}