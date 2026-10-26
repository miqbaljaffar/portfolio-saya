import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

/**
 * DM Sans — clean, modern display font for headings (Creatiwise-like feel)
 * Variable font so we get all weights without multiple requests.
 */
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

const siteUrl = "https://mohammadiqbaljaffar.dev";
const siteTitle = "MOHAMMAD IQBAL JAFFAR | SOFTWARE ENGINEER";
const siteDescription =
  "Portfolio Mohammad Iqbal Jaffar — Software Engineer with expertise in backend development, machine learning integration, and full-stack web systems. Building production-grade systems for hoax detection, medical analysis, business automation, and automotive.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | MOHAMMAD IQBAL JAFFAR",
  },
  description: siteDescription,
  keywords: [
    "Mohammad Iqbal Jaffar",
    "Software Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "Machine Learning",
    "Next.js Portfolio",
    "Portfolio Developer",
    "SSW Automotive",
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
    locale: "en_US",
    url: siteUrl,
    siteName: "MOHAMMAD IQBAL JAFFAR",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/img/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammad Iqbal Jaffar — Software Engineer",
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
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Mohammad Iqbal Jaffar",
  url: siteUrl,
  image: `${siteUrl}/img/profile.jpg`,
  jobTitle: "Software Engineer",
  sameAs: [
    "https://linkedin.com/in/mohammadiqbaljaffar",
    "https://github.com/miqbaljaffar",
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
    addressLocality: "Bandung",
    addressRegion: "West Java",
    addressCountry: "ID",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Mohammad Iqbal Jaffar Portfolio",
  description: siteDescription,
  inLanguage: "en-US",
  author: {
    "@id": `${siteUrl}/#person`,
  },
};

const jsonLdProfilePage = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profile`,
  url: siteUrl,
  name: siteTitle,
  mainEntity: {
    "@id": `${siteUrl}/#person`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfilePage) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${inter.variable} ${dmMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:border focus:border-foreground bg-background text-foreground text-sm font-sans"
          >
            Skip to main content
          </a>
          {children}
        </Providers>
      </body>
    </html>
  );
}
