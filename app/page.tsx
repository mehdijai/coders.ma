"use client";

import HeroSection from "@/views/HeroSection";
import FeaturesSection from "@/views/FeaturesSection";
import PartnersSection from "@/views/PartnersSection";
import InstructorsSection from "@/views/InstructorsSection";
import ContactSection from "@/views/ContactSection";
import ProgramsSection from "@/views/LessonsSections";
import { useDynamicFavicon } from "@/hooks/useDynamicFavIcon";
import QuoteSection from "@/views/QuoteSection";
import ActiveProgramsSections from "@/views/ActiveProgramsSection";

export default function Home() {
  useDynamicFavicon();

  return (
    <main className="home-page">
      <HeroSection />
      <FeaturesSection />
      <PartnersSection />
      <ProgramsSection />
      <QuoteSection />
      <InstructorsSection />
      <ActiveProgramsSections />
      <ContactSection />
    </main>
  );
}
