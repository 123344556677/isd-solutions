import React, { useEffect } from "react";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import StatsSection from "../components/stats-section";
import ClientsSection from "../components/clients-section";
import { useScrollAnimation } from "../lib/scroll-animations";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>ISD Solutions - IT Solutions & Corporate Services | Home</title>
        <meta name="description" content="Transform your business with cutting-edge technology solutions. ISD Solutions delivers innovative IT services including Odoo, ERP, FBR Digital Invoicing, Web & Mobile Development that drive growth and efficiency." />
        <meta name="keywords" content="IT Solutions, Corporate Services, Odoo Consultant, ERP Systems, FBR Digital Invoicing, Web Development, Mobile Development, Digital Transformation, Pakistan, Lahore" />
        <link rel="canonical" href="https://isdsolutions.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ISD Solutions - IT Solutions & Corporate Services | Home" />
        <meta property="og:description" content="Transform your business with cutting-edge technology solutions. ISD Solutions delivers innovative IT services that drive growth and efficiency." />
        <meta property="og:url" content="https://isdsolutions.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="ISD Solutions - IT Solutions & Corporate Services | Home" />
        <meta name="twitter:description" content="Transform your business with cutting-edge technology solutions. ISD Solutions delivers innovative IT services that drive growth and efficiency." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ISD Solutions - IT Solutions & Corporate Services",
            "description": "Transform your business with cutting-edge technology solutions. ISD Solutions delivers innovative IT services including Odoo, ERP, FBR Digital Invoicing, Web & Mobile Development that drive growth and efficiency.",
            "url": "https://isdsolutions.com/",
            "mainEntity": {
              "@type": "Organization",
              "name": "ISD Solutions",
              "description": "Leading IT solutions provider delivering innovative technology services that drive business growth and digital transformation.",
              "url": "https://isdsolutions.com",
              "logo": "https://isdsolutions.com/assets/images/isd-logo-light.svg",
              "sameAs": [
                "https://facebook.com/isdsolutions",
                "https://twitter.com/isdsolutions",
                "https://linkedin.com/company/isdsolutions"
              ]
            }
          })}
        </script>
      </Helmet>
      
      <div className="pt-16">
        <div className="relative">
          <HeroSection />
          <section 
            ref={statsRef as any}
            className={`${fadeInUp} ${statsVisible ? fadeInUpVisible : ''}`}
            aria-label="Company Statistics and Achievements"
          >
            <StatsSection />
          </section>
        </div>
        <section 
          ref={servicesRef as any}
          className={`${fadeInUp} ${servicesVisible ? fadeInUpVisible : ''}`}
          aria-label="Our Services"
        >
          <ServicesSection />
        </section>
        <section 
          ref={clientsRef as any}
          className={`${fadeInUp} ${clientsVisible ? fadeInUpVisible : ''}`}
          aria-label="Our Clients and Testimonials"
        >
          <ClientsSection />
        </section>
      </div>
    </>
  );
}
