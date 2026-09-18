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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-5 md:px-10 py-3 md:py-3.5 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3">
          <div className="hanko-stamp text-xs tracking-widest">謹 · MIJ</div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-display font-bold text-foreground">Iqbal Jaffar</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Full-Stack &amp; AI/ML
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1 px-1.5 py-1 rounded-full bg-primary/5 border border-border/60 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 text-[13px] font-medium text-foreground/70 hover:text-foreground hover:bg-background/80 rounded-full transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="rounded-full text-xs h-9 px-3 text-muted-foreground hover:text-foreground">
            <a href="/cv/CV_Iqbal_Jaffar.pdf" target="_blank" rel="noreferrer">
              <FileText className="size-3.5" /> CV
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="relative h-9 px-4 text-sm font-medium rounded-full bg-accent hover:bg-accent/90 text-accent-foreground overflow-hidden group shadow-sm hover:shadow transition-all"
          >
            <a href="#contact">
              <span className="relative z-10 inline-flex items-center gap-1.5">
                <Mail className="size-3.5" /> Hire Me
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700" />
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center size-9 rounded-full border border-border bg-background"
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="container mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 px-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-3 border-t border-border mt-2">
                <Button asChild variant="outline" className="flex-1 h-9 rounded-[0.6rem] text-sm">
                  <a href="/cv/CV_Iqbal_Jaffar.pdf" target="_blank" rel="noreferrer">
                    <FileText className="size-3.5" /> CV
                  </a>
                </Button>
                <Button asChild className="flex-1 h-9 rounded-[0.6rem] text-sm bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    <Mail className="size-3.5" /> Hire Me
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
