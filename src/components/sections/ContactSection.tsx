"use client";

import { useRef, useState, type FormEvent } from "react";
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
} from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
    const form = new FormData(e.currentTarget);
    form.set("access_key", "0384d086-487f-4bae-a36d-e450ccbdcd3d");
    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 px-5 md:px-8 bg-white"
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

            {/* Open for work card */}
            <div className="cw-card p-6 flex flex-col gap-5">
              <div>
                <span className="eyebrow-pill mb-3 inline-flex">
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Open for collaborations
                </span>
                <h3 className="font-display font-bold text-[#0A0A0A] text-lg md:text-xl leading-tight mb-2">
                  Interested in working together?
                </h3>
                <p className="text-[13px] text-[#9B9A96] leading-relaxed">
                  Open to freelance, contract, or full-time opportunities — especially AI/ML, full-stack web, and IoT integration.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Email */}
                <a
                  href="mailto:iqbaljaffar1108@gmail.com"
                  className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-[#E5E4E0] hover:border-[#CCCBC7] hover:bg-[#F8F7F4] transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="size-8 rounded-lg bg-[#F0EFEB] border border-[#E5E4E0] flex items-center justify-center shrink-0">
                      <Mail className="size-3.5 text-[#6B6B6B]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-[#9B9A96] uppercase tracking-wider font-medium mb-0.5">Email</p>
                      <p className="text-[13px] font-medium text-[#0A0A0A] truncate">
                        iqbaljaffar1108@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-[#CCCBC7] shrink-0 group-hover:text-[#0A0A0A] transition-colors" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[#E5E4E0] bg-[#F8F7F4]">
                  <div className="size-8 rounded-lg bg-[#F0EFEB] border border-[#E5E4E0] flex items-center justify-center shrink-0">
                    <MapPin className="size-3.5 text-[#6B6B6B]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#9B9A96] uppercase tracking-wider font-medium mb-0.5">Location</p>
                    <p className="text-[13px] font-medium text-[#0A0A0A]">Bandung, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Form ──────────────────────────────────── */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="cw-card p-6 md:p-8 flex flex-col gap-5"
          >
            <h3 className="font-display font-bold text-[#0A0A0A] text-xl leading-tight">
              Send a message
            </h3>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[12px] font-medium text-[#6B6B6B]">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="h-11 rounded-xl bg-[#F8F7F4] border-[#E5E4E0] focus:border-[#0A0A0A] focus:ring-0 text-[#0A0A0A] placeholder:text-[#CCCBC7] text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[12px] font-medium text-[#6B6B6B]">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="h-11 rounded-xl bg-[#F8F7F4] border-[#E5E4E0] focus:border-[#0A0A0A] focus:ring-0 text-[#0A0A0A] placeholder:text-[#CCCBC7] text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[12px] font-medium text-[#6B6B6B]">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="resize-none min-h-[130px] rounded-xl bg-[#F8F7F4] border-[#E5E4E0] focus:border-[#0A0A0A] focus:ring-0 text-[#0A0A0A] placeholder:text-[#CCCBC7] text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-primary justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "idle"    && <><Send className="size-4" /> Send Message</>}
              {status === "loading" && <><Loader2 className="size-4 animate-spin" /> Sending...</>}
              {status === "success" && <><CheckCircle2 className="size-4" /> Message Sent!</>}
              {status === "error"   && "Failed to send — try again"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
