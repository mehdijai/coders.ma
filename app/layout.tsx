import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import { metadataBase } from "@/lib/seo-generator";
import JsonLd from "@/components/seo/jsonld";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
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
      <body className={cn(robotoMono.variable)}>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
