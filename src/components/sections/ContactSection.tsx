"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { staggerContainer, fadeUp } from "@/lib/animations";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    form.set("access_key", "0384d086-487f-4bae-a36d-e450ccbdcd3d");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
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
    <section id="contact" className="relative py-24 md:py-32 px-5 md:px-10 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          subtitle="06 · Contact"
          eyebrow="Get In Touch"
          title="Mari kolaborasi dan diskusi"
          description="Punya proyek menarik atau lowongan yang cocok? Saya senang berdiskusi — kirim pesan atau hubungi via platform di bawah."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer(0.07, 0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-6 md:gap-8"
        >
          <motion.div variants={fadeUp(0)} className="space-y-4 md:space-y-5">
            <div className="bg-card border border-border rounded-[1rem] p-5 md:p-6 shadow-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-[11px] md:text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                Open for collaborations
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
                Tertarik bekerja sama?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                Saya membuka kesempatan untuk freelance, kontrak, maupun pekerjaan penuh waktu. Khususnya proyek yang
                melibatkan AI/ML, full-stack web, dan integrasi IoT.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:m.iqbal.jaffar@gmail.com"
                  className="flex items-center justify-between group bg-muted/60 hover:bg-muted border border-border rounded-[0.8rem] p-4 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-md bg-primary/10 text-primary shrink-0">
                      <Mail className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-0.5">
                        Email
                      </p>
                      <p className="text-sm font-medium text-foreground truncate">m.iqbal.jaffar@gmail.com</p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground shrink-0 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="flex items-center gap-3 group bg-muted/60 border border-border rounded-[0.8rem] p-4">
                  <div className="p-2.5 rounded-md bg-accent/10 text-accent shrink-0">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-0.5">
                      Lokasi
                    </p>
                    <p className="text-sm font-medium text-foreground">Bekasi, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp(0.1)}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-[1rem] p-5 md:p-8 space-y-4 md:space-y-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">
                Kirim Pesan
              </h3>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Nama Lengkap
              </label>
              <Input id="name" name="name" required className="h-11 rounded-[0.6rem] bg-background border-border" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <Input id="email" name="email" type="email" required className="h-11 rounded-[0.6rem] bg-background border-border" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Pesan
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-none rounded-[0.6rem] bg-background border-border"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={status === "loading" || status === "success"}
              className="w-full h-11 rounded-[0.6rem] bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all"
            >
              {status === "idle" && (
                <>
                  <Send className="size-4" /> Kirim Pesan
                </>
              )}
              {status === "loading" && (
                <>
                  <Loader2 className="size-4 animate-spin" /> Mengirim...
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle2 className="size-4" /> Pesan terkirim!
                </>
              )}
              {status === "error" && "Gagal mengirim, coba lagi"}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
