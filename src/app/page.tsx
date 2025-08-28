"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import ResultsSection from "@/components/ResultsSection";
import MethodSection from "@/components/MethodSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import WorkoutPreviewSection from "@/components/WorkoutPreviewSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (!href) return;
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans m-0 p-0">
      <Header />
      <HeroSection />
      <MethodSection />
      <AboutSection />
      <ResultsSection />
      <WorkoutPreviewSection />
      <PricingSection />
      <FAQSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
