import { Metadata } from "next";

export const metadataBase: Metadata = {
  title: "coders.ma",
  description:
    "Une formation ultime, pratique et concentré, dédié à former les étudiants de développer des solutions informatique qui résoudre des problèmes",
  applicationName: "coders.ma",
  authors: [{ name: "Mehdi Jai", url: "https://mj-dev.pages.dev" }],
  generator: null,
  keywords: [
    "coding",
    "dev",
    "web",
    "frontend",
    "backend",
    "fullstack",
    "formation",
    "training",
    "web development",
    "stage",
    "internship",
    "IT work",
    "oujda",
    "IT",
  ],
  creator: "Mehdi Jai x Sogesoft FR",
  publisher: "Mehdi Jai",
  robots: "index, follow",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    title: "coders.ma",
    description:
      "Une formation ultime, pratique et concentré, dédié à former les étudiants de développer des solutions informatique qui résoudre des problèmes",
    emails: ["mehdi.jai@proton.me"],
    siteName: "coders.ma",
    locale: "fr_MA",
    countryName: "Morocco",
    url: "coders.ma",
    images: "/cdrs-og.png",
  },
  abstract:
    "Une formation ultime, pratique et concentré, dédié à former les étudiants de développer des solutions informatique qui résoudre des problèmes",
  category: "education",
  twitter: {
    card: "summary_large_image",
    title: "coders.ma",
    creatorId: "@jai_mehdi",
    description:
      "Une formation ultime, pratique et concentré, dédié à former les étudiants de développer des solutions informatique qui résoudre des problèmes",
    images: "/cdrs-og.png",
  },
};
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "coders.ma",
  alternateName: "coders.ma",
  url: "https://coders-ma.pages.dev",
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
    url: "https://coders-ma.pages.dev/cdrs-og.png",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://coders-ma.pages.dev",
  },
  sameAs: ["https://twitter.com/jai_mehdi"],
  about: {
    "@type": "Thing",
    name: "Education",
    description:
      "Une formation ultime, pratique et concentré, dédié à former les étudiants de développer des solutions informatique qui résoudre des problèmes",
  },
};
