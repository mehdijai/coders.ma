import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import { metadataBase } from "@/lib/seo-generator";
import JsonLd from "@/components/seo/jsonld";
import TopNav from "@/components/TopNav";
import ToTopButton from "@/components/ToTopButton";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n/i18n-context";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-mono",
  fallback: ["monospace"],
});

export const metadata: Metadata = metadataBase;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(firaCode.variable)}>
        <ToTopButton />
        <I18nProvider>
          <TopNav />
          {children}
          <Footer />
        </I18nProvider>
        <JsonLd />
      </body>
    </html>
  );
}
