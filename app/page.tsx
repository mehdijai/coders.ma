"use client";

import TopNav from "@/components/TopNav";
import HeroSection from "@/views/HeroSection";
import FeaturesSection from "@/views/FeaturesSection";
import PartnersSection from "@/views/PartnersSection";
import CourseSection from "@/views/CourseSection";
import InstructorsSection from "@/views/InstructorsSection";

export default function Home() {
  return (
    <main className="home-page">
      <TopNav />
      <HeroSection />
      <FeaturesSection />
      <CourseSection />
      <InstructorsSection />
      <PartnersSection />
    </main>
  );
}
