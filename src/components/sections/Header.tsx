"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Mail, FileText } from "lucide-react";
import { navItems } from "@/data/portfolio";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] isolate transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_#E5E4E0]"
          : "bg-background/85 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-5 md:px-8 py-3 flex items-center justify-between gap-4">

        {/* ── Logo ─────────────────────────────────────────── */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          {/* Monogram badge */}
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0A0A0A] text-white text-xs font-bold tracking-wider font-display select-none">
            MIJ
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[13px] font-display font-bold text-[#0A0A0A] tracking-tight">
              Iqbal Jaffar
            </span>
            <span className="text-[10px] font-mono text-[#9B9A96] tracking-wide uppercase">
              Software Engineer
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ──────────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 text-[13px] font-medium text-[#6B6B6B] hover:text-[#0A0A0A] rounded-full hover:bg-[#F0EFEB] transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ── Desktop CTAs ─────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/cv/CV_Iqbal_Jaffar.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-medium text-[#6B6B6B] hover:text-[#0A0A0A] rounded-full border border-[#E5E4E0] hover:border-[#CCCBC7] hover:bg-[#F0EFEB] transition-all duration-200"
          >
            <FileText className="size-3.5" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-semibold bg-[#0A0A0A] text-white rounded-full hover:bg-[#2A2A2A] transition-all duration-200 shadow-sm"
          >
            <Mail className="size-3.5" />
            Hire Me
          </a>
        </div>

        {/* ── Mobile hamburger ─────────────────────────────── */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="lg:hidden inline-flex items-center justify-center size-9 rounded-full border border-[#E5E4E0] bg-white text-[#0A0A0A] hover:bg-[#F0EFEB] transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* ── Mobile menu ──────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            id="mobile-navigation"
            className="lg:hidden overflow-hidden border-t border-[#E5E4E0] bg-white"
          >
            <nav className="container mx-auto max-w-7xl px-5 py-4 flex flex-col gap-0.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 px-3 text-[14px] font-medium text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-[#F0EFEB] rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-3 mt-1 border-t border-[#F0EFEB]">
                <a
                  href="/cv/CV_Iqbal_Jaffar.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 px-4 text-[12px] font-medium text-[#6B6B6B] border border-[#E5E4E0] rounded-full hover:bg-[#F0EFEB] transition-colors"
                >
                  <FileText className="size-3.5" /> Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 px-4 text-[12px] font-semibold bg-[#0A0A0A] text-white rounded-full hover:bg-[#2A2A2A] transition-colors"
                >
                  <Mail className="size-3.5" /> Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
