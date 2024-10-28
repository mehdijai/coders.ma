import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import { metadataBase } from "@/lib/seo-generator";
import JsonLd from "@/components/seo/jsonld";
import TopNav from "@/components/TopNav";
import ToTopButton from "@/components/ToTopButton";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n/i18n-context";
import Loader from "@/components/base/Loader";
import Script from "next/script";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-mono",
  fallback: ["monospace"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "700"],
  style: ["italic", "normal"],
  variable: "--font-sans",
  // fallback: ["sans-serif"],
});

export const metadata: Metadata = metadataBase;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(firaCode.variable, inter.variable)}>
        <ToTopButton />
        <Loader />
        <I18nProvider>
          <TopNav />
          {children}
          <Footer />
        </I18nProvider>
        <JsonLd />
        <Script
          strategy="beforeInteractive"
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d5056b32-3c52-48a4-8479-60ec320dd503"
        ></Script>
      </body>
    </html>
  );
}
