"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/portfolio";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-black/95 border-b border-spacex-graphite"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-5 md:px-8 py-3.5 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center font-display font-black tracking-widest text-white text-sm border border-spacex-graphite px-2.5 py-1 hover:border-spacex-white transition-colors">
            MIJ
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-display font-bold uppercase tracking-spacex-sm text-white">
              Iqbal Jaffar
            </span>
            <span className="text-[10px] font-mono uppercase tracking-spacex-md text-spacex-muted">
              ENGINEER
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="btn-spacex px-3.5 py-2 text-[11px] font-medium uppercase tracking-spacex-md text-spacex-silver hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-9 px-3 text-[11px] font-medium uppercase tracking-spacex-md text-spacex-subtle hover:text-white hover:bg-spacex-steel rounded-none border border-transparent hover:border-spacex-graphite transition-all"
          >
            <a href="/cv/CV_Iqbal_Jaffar.pdf" target="_blank" rel="noreferrer">
              <FileText className="size-3.5" /> CV
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="h-9 px-5 text-[11px] font-semibold uppercase tracking-spacex-md bg-white hover:bg-spacex-silver text-black rounded-none transition-all border border-white"
          >
            <a href="#contact">
              <Mail className="size-3.5" /> HIRE ME
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex items-center justify-center size-9 border border-spacex-graphite bg-black text-white hover:border-white transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden border-t border-spacex-graphite bg-black"
          >
            <nav className="container mx-auto max-w-7xl px-5 py-5 flex flex-col gap-0.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-sm font-medium uppercase tracking-spacex-sm text-spacex-silver hover:text-white border-b border-spacex-steel transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-4 mt-2">
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 h-10 rounded-none text-xs uppercase tracking-spacex-sm border-spacex-graphite text-spacex-silver hover:bg-spacex-steel hover:text-white hover:border-spacex-silver transition-all"
                >
                  <a href="/cv/CV_Iqbal_Jaffar.pdf" target="_blank" rel="noreferrer">
                    <FileText className="size-3.5" /> CV
                  </a>
                </Button>
                <Button
                  asChild
                  className="flex-1 h-10 rounded-none text-xs font-semibold uppercase tracking-spacex-sm bg-white text-black hover:bg-spacex-silver transition-all border border-white"
                >
                  <a href="#contact" onClick={() => setOpen(false)}>
                    <Mail className="size-3.5" /> HIRE
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
