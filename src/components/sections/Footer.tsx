"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Skills",   href: "#skills"   },
  { label: "About",    href: "#about"    },
  { label: "Journey",  href: "#journey"  },
  { label: "Projects", href: "#projects" },
  { label: "Certs",    href: "#certs"    },
  { label: "Contact",  href: "#contact"  },
];

const socials = [
  { label: "GitHub",   href: "https://github.com/miqbaljaffar",            icon: Github   },
  { label: "LinkedIn", href: "https://linkedin.com/in/mohammadiqbaljaffar", icon: Linkedin },
  { label: "Email",    href: "mailto:iqbaljaffar1108@gmail.com",            icon: Mail     },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const rows = footerRef.current?.querySelectorAll(".footer-row");
    if (!rows?.length) return;
    gsap.set(rows, { opacity: 0, y: 20 });
    gsap.to(rows, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: footerRef.current, start: "top 95%", once: true },
    });
  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="px-5 md:px-8 pt-14 pb-8"
      style={{ background: "var(--cw-footer-bg)", color: "var(--cw-white)" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Top row */}
        <div
          className="footer-row grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 pb-10 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {/* Brand */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div
                className="flex items-center justify-center w-9 h-9 rounded-xl text-sm font-bold font-display"
                style={{ background: "var(--cw-white)", color: "var(--cw-footer-bg)" }}
              >
                MIJ
              </div>
              <div>
                <p className="font-display font-bold text-sm leading-tight" style={{ color: "var(--cw-white)" }}>
                  Mohammad Iqbal Jaffar
                </p>
                <p className="text-[11px] font-medium" style={{ color: "var(--cw-grey-400)" }}>
                  Software Engineer
                </p>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Building reliable backends, ML pipelines, and full-stack web
              applications that scale.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="flex items-center justify-center size-8 rounded-full transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.50)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.30)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.50)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.10)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav
            className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-2 self-start pt-1"
            aria-label="Footer navigation"
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[13px] py-1 transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.50)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.50)")}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="footer-row flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6">
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            &copy; {new Date().getFullYear()} Mohammad Iqbal Jaffar. Built with Next.js.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-40" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
            </span>
            <span className="text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
              Open for opportunities
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
