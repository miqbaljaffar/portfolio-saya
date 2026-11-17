"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Mail, FileText } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { ThemeSwitcher } from "@/components/theme-switcher";

/** Returns the id of the section currently most visible in the viewport */
function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Map of section id → intersection ratio
    const ratioMap: Record<string, number> = {};
    ids.forEach((id) => (ratioMap[id] = 0));

    const pick = () => {
      let best = ids[0] ?? "";
      let bestRatio = -1;
      for (const id of ids) {
        if (ratioMap[id] > bestRatio) {
          bestRatio = ratioMap[id];
          best = id;
        }
      }
      setActive(best);
    };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          ratioMap[id] = entry.intersectionRatio;
          pick();
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const reduceMotion            = useReducedMotion();
  const activeSection           = useActiveSection(sectionIds);

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
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_0_var(--cw-grey-100)]"
          : "bg-background/85 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-5 md:px-8 py-3 flex items-center justify-between gap-4">

        {/* ── Logo ─────────────────────────────────────────── */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-foreground text-background text-xs font-bold tracking-wider font-display select-none transition-transform duration-200 group-hover:scale-105">
            MIJ
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[13px] font-display font-bold text-foreground tracking-tight">
              Iqbal Jaffar
            </span>
            <span className="text-[10px] font-mono text-muted-foreground tracking-wide uppercase">
              Software Engineer
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ──────────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-foreground bg-[var(--cw-grey-50)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-[var(--cw-grey-50)]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-[var(--cw-grey-50)] border border-[var(--cw-grey-100)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── Desktop CTAs ─────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme toggle */}
          <ThemeSwitcher />

          <a
            href="/cv/CV_Iqbal_Jaffar.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-medium text-muted-foreground hover:text-foreground rounded-full border border-[var(--cw-grey-100)] hover:border-[var(--cw-grey-200)] hover:bg-[var(--cw-grey-50)] transition-all duration-200"
          >
            <FileText className="size-3.5" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-semibold bg-foreground text-background rounded-full hover:opacity-80 transition-all duration-200 shadow-sm"
          >
            <Mail className="size-3.5" />
            Hire Me
          </a>
        </div>

        {/* ── Mobile: theme + hamburger ─────────────────────── */}
        <div className="lg:hidden flex items-center gap-1.5">
          <ThemeSwitcher />
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="inline-flex items-center justify-center size-9 rounded-full border border-[var(--cw-grey-100)] bg-background text-foreground hover:bg-[var(--cw-grey-50)] transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
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
            className="lg:hidden overflow-hidden border-t border-[var(--cw-grey-100)] bg-background"
          >
            <nav
              className="container mx-auto max-w-7xl px-5 py-4 flex flex-col gap-0.5"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setOpen(false)}
                    className={`py-2.5 px-3 text-[14px] font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-foreground bg-[var(--cw-grey-50)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-[var(--cw-grey-50)]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="size-1.5 rounded-full bg-brand shrink-0" />
                    )}
                  </a>
                );
              })}
              <div className="flex gap-2 pt-3 mt-1 border-t border-[var(--cw-grey-50)]">
                <a
                  href="/cv/CV_Iqbal_Jaffar.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 px-4 text-[12px] font-medium text-muted-foreground border border-[var(--cw-grey-100)] rounded-full hover:bg-[var(--cw-grey-50)] transition-colors"
                >
                  <FileText className="size-3.5" /> Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 px-4 text-[12px] font-semibold bg-foreground text-background rounded-full hover:opacity-80 transition-colors"
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
