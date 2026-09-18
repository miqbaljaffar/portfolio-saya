"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { navItems } from "@/data/portfolio";
import { EASE_OUT_EXPO } from "@/lib/animations";

export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileNavOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.toLowerCase()));
      let current = "";

      sections.forEach((section) => {
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 120) {
            current = section.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.05 }}
      className="fixed top-0 left-0 w-full z-50 bg-background/70 dark:bg-background/70 backdrop-blur-xl border-b border-border/70"
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <a href="#" aria-label="Homepage" className="group flex items-center gap-2">
          <span className="hanko-stamp !text-[13px] !tracking-widest !rounded-md !rotate-0 !p-1.5 !px-2.5">
            謹 · MIJ
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-black text-[13px] tracking-tight text-foreground">
              MOHAMMAD IQBAL J.
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground mt-0.5">
              FULL-STACK · AI/ML
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-display font-medium rounded-[0.55rem] transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-primary/8 dark:bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60 dark:hover:bg-muted/30"
                }`}
              >
                {item}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-[0.55rem] bg-primary/5 dark:bg-primary/8 -z-10 ring-1 ring-inset ring-primary/15"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <a href="#contact" className="hidden md:inline-block group">
            <Button className="relative overflow-hidden bg-vermillion dark:bg-accent hover:bg-vermillion/90 dark:hover:bg-accent/90 text-primary-foreground rounded-[0.6rem] px-5 h-9 text-sm shadow-lg shadow-vermillion/15 dark:shadow-accent/10 transition-all hover:-translate-y-0.5 hover:shadow-vermillion/25 font-display font-bold tracking-wide">
              <span className="relative z-10">
                連絡 · Hire Me
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </a>
          <button
            className="md:hidden p-2 rounded-[0.6rem] hover:bg-muted dark:hover:bg-muted/50 transition-colors text-foreground"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border/70 bg-background/95 dark:bg-background/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col p-4 gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileNavOpen(false)}
                  className="px-4 py-3.5 text-sm font-medium font-display text-foreground hover:text-vermillion dark:hover:text-accent hover:bg-muted/60 dark:hover:bg-muted/30 rounded-[0.7rem] transition-colors active:scale-[0.98]"
                >
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileNavOpen(false)} className="mt-2 px-4 py-3.5 text-sm font-bold text-center text-primary-foreground bg-vermillion dark:bg-accent hover:bg-vermillion/90 rounded-[0.7rem] transition-colors active:scale-[0.98] font-display">
                Hire Me · 連絡
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
