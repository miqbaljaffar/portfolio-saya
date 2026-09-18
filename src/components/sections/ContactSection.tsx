"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const contactItems = [
  { icon: <Mail size={18} />, label: "iqbaljaffar1108@gmail.com", href: "mailto:iqbaljaffar1108@gmail.com" },
  { icon: <Github size={18} />, label: "github.com/miqbaljaffar", href: "https://github.com/miqbaljaffar" },
  { icon: <Linkedin size={18} />, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/mohammad-iqbal-jaffar-091939290" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-seigaiha">
      <div className="absolute inset-0 bg-washi-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-muted/40 to-transparent dark:from-muted/20 dark:to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative max-w-5xl z-10">
        <SectionHeading title="Let's Work Together" subTitle="06 · Contact · お問い合わせ" withGate={false} />
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mt-8">
            <motion.div variants={fadeUp} className="text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
                Mari <span className="gradient-text-tokyo">Berdiskusi!</span>
              </h3>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Tertarik untuk berkolaborasi dalam proyek AI, pengembangan web, atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya melalui formulir di samping atau melalui platform di bawah ini.
              </p>

              <div className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full bg-vermillion/10 dark:bg-accent/10 border border-vermillion/20 dark:border-accent/25">
                <span className="w-2 h-2 rounded-full bg-vermillion dark:bg-accent animate-pulse" />
                <span className="font-mono text-[11px] font-bold tracking-widest text-vermillion dark:text-accent uppercase">
                  Available for work · 募集中
                </span>
              </div>

              <motion.div variants={staggerContainer} className="flex flex-col gap-3">
                {contactItems.map((social, idx) => (
                  <motion.a
                    key={idx}
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center md:justify-between gap-4 p-4 bg-card rounded-[0.85rem] shadow-sm hover:shadow-md hover:shadow-primary/5 transition-all duration-300 border-border relative overflow-hidden crafted-border"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="p-2.5 bg-primary/10 dark:bg-primary/15 text-primary dark:text-primary rounded-[0.55rem] group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                        {social.icon}
                      </span>
                      <span className="font-display font-semibold text-foreground text-sm text-left">
                        {social.label}
                      </span>
                    </div>
                    <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-vermillion dark:group-hover:text-accent transition-all duration-300 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-card rounded-[1.1rem] p-6 md:p-8 shadow-xl shadow-primary/5 border-border relative overflow-hidden crafted-border">
              <div className="absolute -right-6 -top-6 text-card-foreground/[0.04] dark:text-card-foreground/[0.06] text-[10rem] font-black select-none pointer-events-none leading-none font-display">
                手
              </div>

              <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-5 relative z-10">
                <input type="hidden" name="access_key" value="0384d086-487f-4bae-a36d-e450ccbdcd3d" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-vermillion dark:text-accent font-bold uppercase">
                    メッセージ · Message Form
                  </span>
                  <div className="hanko-stamp !text-[8px] !tracking-widest !py-0.5 !px-1.5 !rounded-[2px] !rotate-1">
                    送信
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-xs font-bold font-display tracking-wide text-foreground/80 mb-2 uppercase">
                    名前 · Nama Lengkap
                  </label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-[0.65rem] bg-muted/60 dark:bg-muted/30 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground transition-all placeholder:text-muted-foreground/60 font-sans text-sm" placeholder="Masukkan nama Anda" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold font-display tracking-wide text-foreground/80 mb-2 uppercase">
                    メール · Email
                  </label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-[0.65rem] bg-muted/60 dark:bg-muted/30 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground transition-all placeholder:text-muted-foreground/60 font-sans text-sm" placeholder="email@contoh.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold font-display tracking-wide text-foreground/80 mb-2 uppercase">
                    伝言 · Pesan
                  </label>
                  <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-[0.65rem] bg-muted/60 dark:bg-muted/30 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground transition-all resize-none placeholder:text-muted-foreground/60 font-sans text-sm leading-relaxed" placeholder="Tulis pesan Anda di sini..."></textarea>
                </div>

                <Button type="submit" className="group relative overflow-hidden w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold py-6 rounded-[0.75rem] shadow-lg shadow-primary/15 transition-all hover:-translate-y-1 mt-2 text-base">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Kirim Pesan · 送信
                    <Send className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-vermillion/0 via-vermillion/15 to-vermillion/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Button>
              </form>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
