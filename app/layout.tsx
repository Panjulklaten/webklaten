import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site, whatsappNumber } from "@/lib/site-config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jasa Pembuatan Website Murah Mulai 200K | webklaten.biz.id",
    template: "%s | webklaten.biz.id",
  },
  description: site.description,
  keywords: [
    "jasa pembuatan website",
    "jasa buat website murah",
    "jasa website UMKM",
    "website murah mulai 200 ribu",
    "jasa website tanpa biaya bulanan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jasa Pembuatan Website Murah Mulai 200K",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Murah Mulai 200K",
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    priceRange: "Rp200.000+",
    areaServed: "ID",
    telephone: `+${whatsappNumber}`,
    founder: {
      "@type": "Person",
      name: site.contactPerson,
    },
    sameAs: [
      "https://asuransibatam.com",
      "https://asuransijogja.biz.id",
      "https://travelbengkulu.com",
      "https://rpmtravel.co.id",
      "https://insulasiatapklaten.biz.id",
    ],
  };

  return (
    <html lang="id">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
