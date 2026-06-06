"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { Code, Database, BrainCircuit, Cpu, Languages, Sparkles, RefreshCw, Layers } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export function AboutSection() {
  // AI Canvas Drawing Logic
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [inferenceResult, setInferenceResult] = useState<null | { label: string; confidence: number; speed: number }>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  // Setup initial dark canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#090d16";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  const getEventPos = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
    canvas: HTMLCanvasElement
  ) => {
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      // Handle page scroll scaling
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    // Prevent scrolling when drawing on touch screens
    if ("touches" in e) {
      e.preventDefault();
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "#22d3ee"; // cyan-400
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const pos = getEventPos(e, canvas);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    if ("touches" in e) {
      e.preventDefault();
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pos = getEventPos(e, canvas);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#090d16";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setInferenceResult(null);
    setLogs([]);
  };

  const runInference = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check if drawing exists by scanning pixels
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let hasStrokes = false;
    for (let i = 0; i < imgData.data.length; i += 4) {
      if (imgData.data[i] > 20 || imgData.data[i + 1] > 20 || imgData.data[i + 2] > 20) {
        hasStrokes = true;
        break;
      }
    }

    if (!hasStrokes) {
      alert("Silakan gambar coretan terlebih dahulu di atas kanvas hitam!");
      return;
    }

    setIsAnalyzing(true);
    setInferenceResult(null);
    setLogs(["[INFO] Initializing weights...", "[INFO] Forward pass convolution..."]);

    setTimeout(() => {
      setLogs(prev => [...prev, "[RUN] Conv2D (32 filters) -> Pool", "[RUN] Running OpenCV thresholding..."]);
    }, 450);

    setTimeout(() => {
      setLogs(prev => [...prev, "[RUN] Feature map extracted", "[RUN] Dense layer soft-max logic..."]);
    }, 950);

    setTimeout(() => {
      setIsAnalyzing(false);
      const guesses = [
        { label: "Bentuk Oval (CNN)", conf: 94.2 },
        { label: "Karakter Garis (OCR)", conf: 89.7 },
        { label: "Simpul Jaringan", conf: 96.5 },
        { label: "Sinyal Kompleks", conf: 91.3 },
      ];
      const result = guesses[Math.floor(Math.random() * guesses.length)];
      setInferenceResult({
        label: result.label,
        confidence: result.conf,
        speed: parseFloat((8 + Math.random() * 8).toFixed(1)),
      });
      setLogs(prev => [...prev, "[DONE] Klasifikasi sukses!"]);
    }, 1400);
  };

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-gray-50/50 dark:bg-[#07070b]/30">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Tentang Saya" />

        <AnimatedSection className="max-w-6xl mx-auto">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Ringkasan Profil Utama */}
            <motion.div
              variants={staggerItem}
              className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <div>
                <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
                  <Cpu size={26} className="animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">Profile Overview</span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Mengintegrasikan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-cyan-400 dark:to-blue-500">Sistem Web</span> dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500">Kecerdasan Buatan</span>
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Sebagai lulusan Teknik Informatika dengan spesialisasi di **Backend Development** dan **Full-Stack Web**, saya memiliki ketertarikan mendalam dalam membangun infrastruktur aplikasi web yang kokoh sekaligus memberikan kapabilitas analitis cerdas menggunakan model **Machine Learning**.
                </p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Saya senang bereksperimen dengan pustaka pengolahan citra (**OpenCV**, **PaddleOCR**) dan mengintegrasikannya ke dalam arsitektur API secara efisien. Saya percaya, aplikasi web masa depan bukan sekadar wadah penyimpanan data, melainkan entitas pintar yang mampu menyederhanakan keputusan pengguna.
                </p>
              </div>

              {/* Decorative dynamic traits */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800/80">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">01. FOCUS</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-200 mt-1">Fullstack Web</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">02. BRAIN</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-200 mt-1">Computer Vision</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">03. WORK STYLE</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-200 mt-1">End-to-End</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Interactive AI Inference Simulation Drawer */}
            <motion.div
              variants={staggerItem}
              className="md:col-span-1 md:row-span-2 p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-cyan-600 dark:text-cyan-400">
                  <div className="flex items-center gap-2">
                    <BrainCircuit size={22} />
                    <span className="text-xs font-bold uppercase tracking-widest font-mono">AI Sandbox</span>
                  </div>
                  <Sparkles size={16} className="animate-spin-slow" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  Interactive AI Model Simulator
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                  Coba coret sesuatu (bentuk/garis) menggunakan mouse/jari Anda di atas kanvas hitam di bawah ini, lalu klik Run Inference untuk simulasi klasifikasi model AI.
                </p>

                {/* Draw Canvas Container */}
                <div className="relative flex flex-col items-center">
                  <canvas
                    ref={canvasRef}
                    width={150}
                    height={150}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="border-2 border-gray-200 dark:border-gray-800 rounded-2xl bg-[#090d16] cursor-crosshair shadow-inner w-[150px] h-[150px]"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="flex gap-2 mt-3 w-full max-w-[150px]">
                    <button
                      onClick={clearCanvas}
                      disabled={isAnalyzing}
                      className="flex-1 text-center py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 disabled:opacity-50 text-[11px] font-bold rounded-lg text-gray-600 dark:text-gray-300 transition-colors flex items-center justify-center gap-1"
                    >
                      <RefreshCw size={10} /> Clear
                    </button>
                    <button
                      onClick={runInference}
                      disabled={isAnalyzing}
                      className="flex-1 text-center py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white disabled:opacity-50 text-[11px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1 shadow-md shadow-cyan-500/10"
                    >
                      <Layers size={10} /> Inference
                    </button>
                  </div>
                </div>
              </div>

              {/* Simulation Result Area */}
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800/80 min-h-[75px] flex flex-col justify-center">
                {isAnalyzing ? (
                  <div className="flex flex-col gap-1 text-[10px] font-mono text-cyan-500 dark:text-cyan-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                      {logs[logs.length - 1] || "Processing data..."}
                    </span>
                    <span className="text-gray-400 dark:text-gray-600">Model: CNN & OCR Simulation</span>
                  </div>
                ) : inferenceResult ? (
                  <div className="text-xs bg-gray-50 dark:bg-gray-950 p-2.5 rounded-xl border border-cyan-500/20">
                    <div className="flex justify-between items-center text-cyan-600 dark:text-cyan-400 font-bold mb-1 font-mono text-[10px]">
                      <span>RESULT DETECTED</span>
                      <span>{inferenceResult.confidence}% ACCURACY</span>
                    </div>
                    <div className="text-sm font-extrabold text-gray-800 dark:text-gray-100">
                      {inferenceResult.label}
                    </div>
                    <div className="text-[9px] text-gray-400 dark:text-gray-500 mt-0.5">
                      Latensi: {inferenceResult.speed} ms @ CPU Emulator
                    </div>
                  </div>
                ) : (
                  <div className="text-[10px] font-mono text-center text-gray-400 dark:text-gray-600 py-3">
                    [Menunggu input coretan kanvas...]
                  </div>
                )}
              </div>
            </motion.div>

            {/* Card 3: Skill Stats Ring */}
            <motion.div
              variants={staggerItem}
              className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400">
                  <Code size={22} />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">Engineering Stats</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                  Domain Expertise Focus
                </h3>

                {/* Progress Gauges Grid */}
                <div className="flex items-center justify-around gap-2 my-2">
                  {/* Gauge 1 */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="28" cy="28" r="23" className="stroke-gray-100 dark:stroke-gray-800 fill-none" strokeWidth="4.5" />
                        <circle cx="28" cy="28" r="23" className="stroke-blue-500 fill-none transition-all duration-1000" strokeWidth="4.5" strokeDasharray={144.5} strokeDashoffset={144.5 * (1 - 0.90)} strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-[10px] font-mono font-bold text-gray-700 dark:text-gray-300">90%</span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mt-2">Backend</span>
                  </div>

                  {/* Gauge 2 */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="28" cy="28" r="23" className="stroke-gray-100 dark:stroke-gray-800 fill-none" strokeWidth="4.5" />
                        <circle cx="28" cy="28" r="23" className="stroke-indigo-500 fill-none transition-all duration-1000" strokeWidth="4.5" strokeDasharray={144.5} strokeDashoffset={144.5 * (1 - 0.82)} strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-[10px] font-mono font-bold text-gray-700 dark:text-gray-300">82%</span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mt-2">Frontend</span>
                  </div>

                  {/* Gauge 3 */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="28" cy="28" r="23" className="stroke-gray-100 dark:stroke-gray-800 fill-none" strokeWidth="4.5" />
                        <circle cx="28" cy="28" r="23" className="stroke-purple-500 fill-none transition-all duration-1000" strokeWidth="4.5" strokeDasharray={144.5} strokeDashoffset={144.5 * (1 - 0.85)} strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-[10px] font-mono font-bold text-gray-700 dark:text-gray-300">85%</span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mt-2">ML / AI</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-4 leading-relaxed font-mono">
                [Calculated based on projects scale & system integration logs]
              </div>
            </motion.div>

            {/* Card 4: Japan Fusion Card */}
            <motion.div
              variants={staggerItem}
              className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Kanji Watermark Background */}
              <div className="absolute right-[-10px] bottom-[-20px] text-gray-100 dark:text-gray-800/20 text-8xl font-black select-none pointer-events-none tracking-tighter leading-none font-sans">
                知能
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-500">
                  <Languages size={22} />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">Japan & ML Ready</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  Global Adaptability
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  Kemampuan lintas batas dengan sertifikasi teknis dan bahasa berstandar internasional:
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">JFT-Basic A2 (Komunikasi Jepang)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">SSW – Perawatan Kendaraan Jepang</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Bangkit ML Cohort (Distinction Graduate)</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mt-4 pt-1">
                Kombinasi adaptabilitas global & spesialisasi AI.
              </div>
            </motion.div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

