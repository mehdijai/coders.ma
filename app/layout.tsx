import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-mono",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "coders.ma",
  description: "La formation pratique pour les développeurs de demain.",
  keywords: [
    "coding",
    "dev",
    "web",
    "frontend",
    "backend",
    "fullstack",
    "formation",
    "oujda",
    "IT",
  ],
  authors: [
    { name: "Mehdi Jai", url: "https://mj-dev.pages.dev" },
    { name: "Sogesoft", url: "https://www.sogesoft.fr" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(robotoMono.variable)}>{children}</body>
    </html>
  );
}
