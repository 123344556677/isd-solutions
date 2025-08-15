import React, { useEffect } from "react";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import StatsSection from "../components/stats-section";

export default function Home() {
  useEffect(() => {
    document.title = "ISD Solutions - IT Solutions & Corporate Services | Home";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading IT solutions provider delivering innovative technology services that drive business growth and digital transformation.');
    }
  }, []);

  return (
    <div className="pt-16">
      <div className="relative">
        <HeroSection />
        <StatsSection />
      </div>
      <ServicesSection />
    </div>
  );
}
