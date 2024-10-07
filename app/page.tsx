"use client";

import TopNav from "@/components/TopNav";
import { useHighlight } from "@/hooks/useHighlight";
import HeroSection from "@/views/HeroSection";

export default function Home() {
  useHighlight();
  return (
    <main className="home-page">
      <TopNav />
      <HeroSection />
    </main>
  );
}
