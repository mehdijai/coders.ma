"use client";

import HeroSection from "@/views/HeroSection";
import FeaturesSection from "@/views/FeaturesSection";
import PartnersSection from "@/views/PartnersSection";
import InstructorsSection from "@/views/InstructorsSection";
import ContactSection from "@/views/ContactSection";
import LessonsSection from "@/views/LessonsSections";
import { useDynamicFavicon } from "@/hooks/useDynamicFavIcon";

export default function Home() {
  useDynamicFavicon();

  return (
    <main className="home-page">
      <HeroSection />
      <FeaturesSection />
      <PartnersSection />
      <LessonsSection />
      <InstructorsSection />
      <ContactSection />
    </main>
  );
}
