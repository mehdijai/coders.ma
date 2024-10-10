import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import { metadataBase } from "@/lib/seo-generator";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-mono",
  fallback: ["monospace"],
});

export const metadata = metadataBase;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "coders.ma",
    alternateName: "coders.ma",
    url: "https://coders.ma",
    description:
      "Une formation ultime, pratique et concentré, dédié à former les étudiants de développer des solutions informatique qui résoudre des problèmes",
    abstract:
      "Une formation ultime, pratique et concentré, dédié à former les étudiants de développer des solutions informatique qui résoudre des problèmes",
    keywords:
      "coding, dev, web, frontend, backend, fullstack, formation, training, web development, stage, internship, IT work, oujda, IT",
    author: {
      "@type": "Person",
      name: "Mehdi Jai",
      url: "https://mj-dev.pages.dev",
    },
    creator: {
      "@type": "Organization",
      name: "Mehdi Jai x Sogesoft FR",
    },
    publisher: {
      "@type": "Person",
      name: "Mehdi Jai",
    },
    inLanguage: "fr-MA",
    image: {
      "@type": "ImageObject",
      url: "https://coders.ma/cdrs-og.png",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://coders.ma",
    },
    sameAs: ["https://twitter.com/jai_mehdi"],
    about: {
      "@type": "Thing",
      name: "Education",
      description:
        "Une formation ultime, pratique et concentré, dédié à former les étudiants de développer des solutions informatique qui résoudre des problèmes",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "mehdi.jai@proton.me",
    },
  };
  return (
    <html lang="fr">
      <body className={cn(robotoMono.variable)}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
