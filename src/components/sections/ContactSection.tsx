"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const contactItems = [
  { icon: <Mail size={20} />, label: "iqbaljaffar1108@gmail.com", href: "mailto:iqbaljaffar1108@gmail.com" },
  { icon: <Github size={20} />, label: "github.com/miqbaljaffar", href: "https://github.com/miqbaljaffar" },
  { icon: <Linkedin size={20} />, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/mohammad-iqbal-jaffar-091939290" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/60 to-transparent dark:from-gray-900/60 dark:to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative max-w-5xl">
        <SectionHeading title="Let's Work Together" withBar={false} />
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-start mt-8">
            <motion.div variants={fadeUp} className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mari Berdiskusi!</h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Tertarik untuk berkolaborasi dalam proyek AI, pengembangan web, atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya melalui formulir di samping atau melalui platform di bawah ini.
              </p>
              <motion.div variants={staggerContainer} className="flex flex-col gap-4">
                {contactItems.map((social, idx) => (
                  <motion.a
                    key={idx}
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-800 group"
                  >
                    <span className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">{social.icon}</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-xl shadow-blue-500/5 border border-gray-100 dark:border-gray-800">
              <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-5">
                <input type="hidden" name="access_key" value="0384d086-487f-4bae-a36d-e450ccbdcd3d" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nama Lengkap</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all" placeholder="Masukkan nama Anda" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all" placeholder="email@contoh.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
                  <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all resize-none" placeholder="Tulis pesan Anda di sini..."></textarea>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1 mt-2 text-base">
                  Kirim Pesan <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
