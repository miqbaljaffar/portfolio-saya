import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import CustomCursor from "@/components/CustomCursor";

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
    "SpaceX Style Portfolio",
    "Industrial Design Portfolio",
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
    icon: [
      { url: "/file.svg", type: "image/svg+xml" },
    ],
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
  name: "Mohammad Iqbal Jaffar",
  url: siteUrl,
  image: `${siteUrl}/img/profile.jpg`,
  jobTitle: "Software Engineer",
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
  inLanguage: "en-US",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t='light'}var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(t)}catch(e){document.documentElement.classList.add('light')}})();`,
          }}
        />
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
        className={`${dmSans.variable} ${inter.variable} ${dmMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <CustomCursor />
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
