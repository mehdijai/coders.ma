"use client";

import TopNav from "@/components/TopNav";
import HeroSection from "@/views/HeroSection";
import FeaturesSection from "@/views/FeaturesSection";
import PartnersSection from "@/views/PartnersSection";

export default function Home() {
  return (
    <main className="home-page">
      <TopNav />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
    </main>
  );
}
