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
      className="fixed top-0 left-0 w-full z-50 bg-white/75 dark:bg-black/75 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-800/60"
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <a href="#" aria-label="Homepage" className="group flex items-center gap-0.5">
          <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
            <span className="text-blue-600 group-hover:-translate-y-1 inline-block transition-transform duration-200">M</span>
            I
            <span className="text-blue-600 group-hover:translate-y-1 inline-block transition-transform duration-200">J</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                }`}
              >
                {item}
                {isActive && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-blue-950/50 -z-10" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <a href="#contact" className="hidden md:inline-block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 h-9 text-sm shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/30 hover:-translate-y-0.5">
              Hire Me
            </Button>
          </a>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
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
            className="md:hidden overflow-hidden border-t border-gray-200/60 dark:border-gray-800/60 bg-white/95 dark:bg-black/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileNavOpen(false)}
                  className="px-4 py-3.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-xl transition-colors active:scale-[0.98]"
                >
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileNavOpen(false)} className="mt-2 px-4 py-3.5 text-sm font-bold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors active:scale-[0.98]">
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
