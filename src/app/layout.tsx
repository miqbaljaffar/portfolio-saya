import type { Metadata } from "next";
import { Inter } from "next/font/google"; // PERBAIKAN: Mengganti font Geist dengan Inter dari Google
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Menggunakan font Inter yang merupakan standar dan bekerja dengan baik
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Menggunakan variabel standar untuk font sans-serif
});

export const metadata: Metadata = {
  title: "Mohammad Iqbal Jaffar | Machine Learning Engineer",
  description: "Portfolio Mohammad Iqbal Jaffar, seorang Machine Learning Engineer yang bersemangat dalam membangun aplikasi cerdas dan berbasis data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* PERBAIKAN: Menerapkan variabel font dari Inter */}
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
