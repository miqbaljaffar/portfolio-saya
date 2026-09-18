"use client";

import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
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
    <section id="contact" className="relative py-24 md:py-32 px-5 md:px-10 bg-spacex-void">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          number="06"
          eyebrow="CONTACT"
          title="LET'S COLLABORATE & DISCUSS"
          description="HAVE AN INTERESTING PROJECT OR SUITABLE VACANCY? I'M HAPPY TO DISCUSS — SEND A MESSAGE OR CONTACT VIA THE PLATFORMS BELOW."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-6 md:gap-8">
          <aside className="animate-fade-up space-y-4 md:space-y-5">
            <div className="border border-spacex-graphite rounded-none bg-spacex-void p-5 md:p-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-spacex-graphite bg-spacex-dark text-[11px] md:text-xs font-mono uppercase tracking-spacex-sm text-spacex-muted mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-spacex-flame opacity-75" />
                  <span className="relative inline-flex rounded-none h-2 w-2 bg-spacex-flame" />
                </span>
                OPEN FOR COLLABORATIONS
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2 uppercase tracking-tight">
                INTERESTED IN WORKING TOGETHER?
              </h3>
              <p className="text-sm md:text-base text-spacex-muted leading-relaxed mb-6">
                I'M OPEN TO FREELANCE, CONTRACT, OR FULL-TIME OPPORTUNITIES. ESPECIALLY PROJECTS INVOLVING AI/ML, FULL-STACK WEB, AND IOT INTEGRATION.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:m.iqbal.jaffar@gmail.com"
                  className="flex items-center justify-between group rounded-none bg-spacex-dark border border-spacex-graphite p-4 transition-colors hover:border-spacex-silver"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-none bg-spacex-steel text-spacex-silver shrink-0 border border-spacex-graphite">
                      <Mail className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono uppercase tracking-spacex-sm text-spacex-muted mb-0.5">
                        EMAIL
                      </p>
                      <p className="text-sm font-medium text-white truncate">m.iqbal.jaffar@gmail.com</p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-spacex-muted shrink-0 group-hover:text-white transition-colors" />
                </a>

                <div className="flex items-center gap-3 rounded-none bg-spacex-dark border border-spacex-graphite p-4">
                  <div className="p-2.5 rounded-none bg-spacex-steel text-spacex-silver shrink-0 border border-spacex-graphite">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-spacex-sm text-spacex-muted mb-0.5">
                      LOCATION
                    </p>
                    <p className="text-sm font-medium text-white">BEKASI, INDONESIA</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="animate-fade-up delay-100 border border-spacex-graphite rounded-none bg-spacex-void p-5 md:p-8 space-y-4 md:space-y-5"
          >
            <div className="mb-2">
              <h3 className="font-display font-bold text-xl md:text-2xl text-white uppercase tracking-tight">
                SEND A MESSAGE
              </h3>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-spacex-sm text-spacex-muted">
                FULL NAME
              </label>
              <Input
                id="name"
                name="name"
                required
                className="h-11 rounded-none bg-spacex-dark border-spacex-graphite focus:border-white focus:ring-0 text-white placeholder:text-spacex-muted"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-spacex-sm text-spacex-muted">
                EMAIL
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="h-11 rounded-none bg-spacex-dark border-spacex-graphite focus:border-white focus:ring-0 text-white placeholder:text-spacex-muted"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-spacex-sm text-spacex-muted">
                MESSAGE
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-none rounded-none bg-spacex-dark border-spacex-graphite focus:border-white focus:ring-0 text-white placeholder:text-spacex-muted"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={status === "loading" || status === "success"}
              className="w-full h-11 rounded-none bg-white hover:bg-spacex-silver text-black uppercase tracking-spacex-sm border border-white transition-colors"
            >
              {status === "idle" && (
                <>
                  <Send className="size-4" /> SEND MESSAGE
                </>
              )}
              {status === "loading" && (
                <>
                  <Loader2 className="size-4 animate-spin" /> SENDING...
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle2 className="size-4" /> MESSAGE SENT!
                </>
              )}
              {status === "error" && "FAILED TO SEND, TRY AGAIN"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
