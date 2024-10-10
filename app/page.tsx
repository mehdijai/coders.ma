"use client";

import TopNav from "@/components/TopNav";
import HeroSection from "@/views/HeroSection";
import FeaturesSection from "@/views/FeaturesSection";
import PartnersSection from "@/views/PartnersSection";
import InstructorsSection from "@/views/InstructorsSection";
import ContactSection from "@/views/ContactSection";
import LessonsSection from "@/views/LessonsSections";
import ToTopButton from "@/components/ToTopButton";
import { useDynamicFavicon } from "@/hooks/useDynamicFavIcon";

export default function Home() {
  useDynamicFavicon();

  return (
    <main className="home-page">
      <ToTopButton />
      <TopNav />
      <HeroSection />
      <FeaturesSection />
      <PartnersSection />
      <LessonsSection />
      <InstructorsSection />
      <ContactSection />
    </main>
  );
}
