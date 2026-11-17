"use client";

import { useRef, useState, useId, type FormEvent } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { SectionHeading } from "@/components/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  AlertCircle,
} from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/miqbaljaffar",
    icon: Github,
    username: "miqbaljaffar",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohammadiqbaljaffar",
    icon: Linkedin,
    username: "mohammadiqbaljaffar",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus]       = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg]   = useState("");
  const statusId                  = useId();

  const sectionRef = useRef<HTMLElement>(null);
  const asideRef   = useRef<HTMLDivElement>(null);
  const formRef    = useRef<HTMLFormElement>(null);

  useGSAP(() => {
    const aside = asideRef.current;
    const form  = formRef.current;
    if (!aside || !form) return;

    gsap.set([aside, form], { opacity: 0, y: 32 });
    gsap.to([aside, form], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.12,
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
    });

    const fields = form.querySelectorAll("input, textarea");
    gsap.set(fields, { opacity: 0, y: 12 });
    gsap.to(fields, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: "power3.out",
      stagger: 0.07,
      delay: 0.35,
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
    });
  }, { scope: sectionRef });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);
    formData.set("access_key", "0384d086-487f-4bae-a36d-e450ccbdcd3d");
    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setErrorMsg(json.message || "Submission failed. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 px-5 md:px-8"
      style={{ background: "var(--cw-section-a)" }}
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's collaborate &amp; discuss"
          description="Have an interesting project or suitable vacancy? I'm happy to discuss — send a message or reach out via the links below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-6">

          {/* ── Aside ──────────────────────────────────── */}
          <div ref={asideRef} className="flex flex-col gap-4">
            <div className="cw-card p-6 flex flex-col gap-5 h-full">

              {/* Status pill */}
              <div>
                <span className="eyebrow-pill mb-3 inline-flex">
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-40" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
                  </span>
                  Open for collaborations
                </span>
                <h3
                  className="font-display font-bold text-lg md:text-xl leading-tight mb-2"
                  style={{ color: "var(--cw-black)" }}
                >
                  Interested in working together?
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--cw-grey-400)" }}
                >
                  Open to freelance, contract, or full-time opportunities — especially AI/ML, full-stack web, and IoT integration.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Email */}
                <a
                  href="mailto:iqbaljaffar1108@gmail.com"
                  className="flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all duration-200 group"
                  style={{
                    borderColor: "var(--cw-grey-100)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--cw-grey-200)";
                    (e.currentTarget as HTMLAnchorElement).style.background  = "var(--cw-grey-50)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--cw-grey-100)";
                    (e.currentTarget as HTMLAnchorElement).style.background  = "transparent";
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="size-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--cw-icon-bg)",
                        border: "1px solid var(--cw-icon-border)",
                      }}
                    >
                      <Mail className="size-3.5" style={{ color: "var(--cw-grey-600)" }} />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-[10px] uppercase tracking-wider font-medium mb-0.5"
                        style={{ color: "var(--cw-grey-400)" }}
                      >
                        Email
                      </p>
                      <p
                        className="text-[13px] font-medium truncate"
                        style={{ color: "var(--cw-black)" }}
                      >
                        iqbaljaffar1108@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="size-4 shrink-0 transition-colors duration-200 group-hover:text-foreground"
                    style={{ color: "var(--cw-grey-200)" }}
                  />
                </a>

                {/* Location */}
                <div
                  className="flex items-center gap-3 p-3.5 rounded-xl border"
                  style={{
                    borderColor: "var(--cw-contact-row-border)",
                    background: "var(--cw-contact-row-bg)",
                  }}
                >
                  <div
                    className="size-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--cw-icon-bg)",
                      border: "1px solid var(--cw-icon-border)",
                    }}
                  >
                    <MapPin className="size-3.5" style={{ color: "var(--cw-grey-600)" }} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-wider font-medium mb-0.5"
                      style={{ color: "var(--cw-grey-400)" }}
                    >
                      Location
                    </p>
                    <p
                      className="text-[13px] font-medium"
                      style={{ color: "var(--cw-black)" }}
                    >
                      Bandung, Indonesia
                    </p>
                  </div>
                </div>

                {/* Social links */}
                {socialLinks.map(({ label, href, icon: Icon, username }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${label} profile: ${username}`}
                    className="flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all duration-200 group"
                    style={{
                      borderColor: "var(--cw-grey-100)",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--cw-grey-200)";
                      (e.currentTarget as HTMLAnchorElement).style.background  = "var(--cw-grey-50)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--cw-grey-100)";
                      (e.currentTarget as HTMLAnchorElement).style.background  = "transparent";
                    }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="size-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          background: "var(--cw-icon-bg)",
                          border: "1px solid var(--cw-icon-border)",
                        }}
                      >
                        <Icon className="size-3.5" style={{ color: "var(--cw-grey-600)" }} />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-[10px] uppercase tracking-wider font-medium mb-0.5"
                          style={{ color: "var(--cw-grey-400)" }}
                        >
                          {label}
                        </p>
                        <p
                          className="text-[13px] font-medium truncate"
                          style={{ color: "var(--cw-black)" }}
                        >
                          @{username}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="size-4 shrink-0 transition-colors duration-200 group-hover:text-foreground"
                      style={{ color: "var(--cw-grey-200)" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Form ──────────────────────────────────── */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="cw-card p-6 md:p-8 flex flex-col gap-5"
            aria-label="Contact form"
            noValidate
          >
            <h3
              className="font-display font-bold text-xl leading-tight"
              style={{ color: "var(--cw-black)" }}
            >
              Send a message
            </h3>

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="text-[12px] font-semibold"
                style={{ color: "var(--cw-grey-600)" }}
              >
                Full Name <span aria-hidden="true" style={{ color: "var(--destructive)" }}>*</span>
              </label>
              <Input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className="h-11 rounded-xl text-sm"
                style={{
                  background: "var(--cw-input-bg)",
                  borderColor: "var(--cw-input-border)",
                  color: "var(--cw-black)",
                }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="text-[12px] font-semibold"
                style={{ color: "var(--cw-grey-600)" }}
              >
                Email Address <span aria-hidden="true" style={{ color: "var(--destructive)" }}>*</span>
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="your@email.com"
                className="h-11 rounded-xl text-sm"
                style={{
                  background: "var(--cw-input-bg)",
                  borderColor: "var(--cw-input-border)",
                  color: "var(--cw-black)",
                }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="text-[12px] font-semibold"
                style={{ color: "var(--cw-grey-600)" }}
              >
                Message <span aria-hidden="true" style={{ color: "var(--destructive)" }}>*</span>
              </label>
              <Textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="resize-none min-h-[130px] rounded-xl text-sm"
                style={{
                  background: "var(--cw-input-bg)",
                  borderColor: "var(--cw-input-border)",
                  color: "var(--cw-black)",
                }}
              />
            </div>

            {/* Error banner */}
            {status === "error" && (
              <div
                role="alert"
                id={statusId}
                className="flex items-start gap-2.5 p-3.5 rounded-xl border"
                style={{
                  background: "rgba(220,38,38,0.08)",
                  borderColor: "rgba(220,38,38,0.25)",
                }}
              >
                <AlertCircle className="size-4 mt-0.5 shrink-0 text-destructive" />
                <p className="text-[13px] font-medium text-destructive leading-snug">
                  {errorMsg || "Something went wrong. Please try again."}
                </p>
              </div>
            )}

            {/* Success banner */}
            {status === "success" && (
              <div
                role="status"
                aria-live="polite"
                id={statusId}
                className="flex items-start gap-2.5 p-3.5 rounded-xl border"
                style={{
                  background: "rgba(53,107,89,0.08)",
                  borderColor: "rgba(53,107,89,0.25)",
                }}
              >
                <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-brand" />
                <p
                  className="text-[13px] font-medium leading-snug"
                  style={{ color: "var(--brand)" }}
                >
                  Message sent! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              aria-disabled={status === "loading" || status === "success"}
              aria-describedby={status === "error" || status === "success" ? statusId : undefined}
              className="btn-primary justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "idle"    && <><Send className="size-4" /> Send Message</>}
              {status === "loading" && <><Loader2 className="size-4 animate-spin" /> Sending...</>}
              {status === "success" && <><CheckCircle2 className="size-4" /> Sent Successfully!</>}
              {status === "error"   && <><Send className="size-4" /> Try Again</>}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
