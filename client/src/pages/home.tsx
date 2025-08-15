import React, { useEffect } from "react";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import StatsSection from "../components/stats-section";
import ClientsSection from "../components/clients-section";
import { useScrollAnimation } from "../lib/scroll-animations";

export default function Home() {
  const [statsRef, statsVisible] = useScrollAnimation(0.2, 200);
  const [servicesRef, servicesVisible] = useScrollAnimation(0.2, 400);
  const [clientsRef, clientsVisible] = useScrollAnimation(0.2, 600);

  useEffect(() => {
    document.title = "ISD Solutions - IT Solutions & Corporate Services | Home";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading IT solutions provider delivering innovative technology services that drive business growth and digital transformation.');
    }
  }, []);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";

  return (
    <div className="pt-16">
      <div className="relative">
        <HeroSection />
        <div 
          ref={statsRef as any}
          className={`${fadeInUp} ${statsVisible ? fadeInUpVisible : ''}`}
        >
          <StatsSection />
        </div>
      </div>
      <div 
        ref={servicesRef as any}
        className={`${fadeInUp} ${servicesVisible ? fadeInUpVisible : ''}`}
      >
        <ServicesSection />
      </div>
      <div 
        ref={clientsRef as any}
        className={`${fadeInUp} ${clientsVisible ? fadeInUpVisible : ''}`}
      >
        <ClientsSection />
      </div>
    </div>
  );
}
