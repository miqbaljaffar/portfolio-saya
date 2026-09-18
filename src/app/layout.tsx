import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: true,
});

const siteUrl = "https://mohammadiqbaljaffar.dev";
const siteTitle = "Mohammad Iqbal Jaffar | Full-Stack & AI/ML Engineer";
const siteDescription =
  "Portfolio Mohammad Iqbal Jaffar — Full-Stack Web Developer & AI/ML Engineer dengan spesialisasi backend, machine learning, dan integrasi IoT. Berpengalaman membangun produk deteksi hoax, analisis medis, otomatisasi bisnis, dan otomotif.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Mohammad Iqbal Jaffar",
  },
  description: siteDescription,
  keywords: [
    "Mohammad Iqbal Jaffar",
    "Full-Stack Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Web Developer Indonesia",
    "Backend Developer",
    "Next.js Portfolio",
    "Portfolio Developer",
    "SSW Automotive",
    "Iwasaki Keiei",
    "Japanese Speaking Engineer",
  ],
  authors: [{ name: "Mohammad Iqbal Jaffar", url: siteUrl }],
  creator: "Mohammad Iqbal Jaffar",
  publisher: "Mohammad Iqbal Jaffar",
  applicationName: "Mohammad Iqbal Jaffar Portfolio",
  category: "technology",
  classification: "Developer Portfolio",
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Mohammad Iqbal Jaffar",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/img/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammad Iqbal Jaffar — Full-Stack & AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@iqbaljaffar",
    images: ["/img/profile.jpg"],
  },
  icons: {
    icon: [
      { url: "/file.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F2EA" },
    { media: "(prefers-color-scheme: dark)", color: "#151823" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammad Iqbal Jaffar",
  url: siteUrl,
  image: `${siteUrl}/img/profile.jpg`,
  jobTitle: "Full-Stack & AI/ML Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  sameAs: [
    "https://linkedin.com/in/mohammadiqbaljaffar",
    "https://github.com/iqbaljaffar",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "Machine Learning",
    "Artificial Intelligence",
    "Next.js",
    "TypeScript",
    "Python",
    "TensorFlow",
    "IoT",
    "Software Engineering",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bekasi",
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Universitas Indonesia",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: "Mohammad Iqbal Jaffar Portfolio",
  description: siteDescription,
  inLanguage: "id-ID",
  author: {
    "@type": "Person",
    name: "Mohammad Iqbal Jaffar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground text-sm font-medium"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
