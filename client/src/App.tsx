import React from "react";
import { Router, Route, Switch } from "wouter";
import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { useScrollRestoration } from "./lib/scroll-restoration";
import { Chatbot } from "./components/chatbot";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Testimonials from "./pages/testimonials";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsConditions from "./pages/terms-conditions";
import NotFound from "./pages/not-found";

function AppContent() {
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO Meta Tags */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#dc2626" />
        
        {/* Primary Meta Tags */}
        <title>ISD Solutions - Leading IT Solutions & Corporate Services Provider</title>
        <meta name="title" content="ISD Solutions - Leading IT Solutions & Corporate Services Provider" />
        <meta name="description" content="Transform your business with cutting-edge technology solutions. ISD Solutions delivers innovative IT services including Odoo, ERP, FBR Digital Invoicing, Web & Mobile Development that drive growth and efficiency." />
        <meta name="keywords" content="IT Solutions, Corporate Services, Odoo Consultant, ERP Systems, FBR Digital Invoicing, Web Development, Mobile Development, Digital Transformation, Pakistan, Lahore" />
        <meta name="author" content="ISD Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isdsolutions.com/" />
        <meta property="og:title" content="ISD Solutions - Leading IT Solutions & Corporate Services Provider" />
        <meta property="og:description" content="Transform your business with cutting-edge technology solutions. ISD Solutions delivers innovative IT services including Odoo, ERP, FBR Digital Invoicing, Web & Mobile Development that drive growth and efficiency." />
        <meta property="og:image" content="https://isdsolutions.com/assets/images/isd-logo-light.svg" />
        <meta property="og:site_name" content="ISD Solutions" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://isdsolutions.com/" />
        <meta property="twitter:title" content="ISD Solutions - Leading IT Solutions & Corporate Services Provider" />
        <meta property="twitter:description" content="Transform your business with cutting-edge technology solutions. ISD Solutions delivers innovative IT services including Odoo, ERP, FBR Digital Invoicing, Web & Mobile Development that drive growth and efficiency." />
        <meta property="twitter:image" content="https://isdsolutions.com/assets/images/isd-logo-light.svg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="ISD Solutions" />
        <meta name="apple-mobile-web-app-title" content="ISD Solutions" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://isdsolutions.com/" />
        
        {/* Favicon and Icons */}
        <link rel="icon" type="image/svg+xml" href="/assets/images/isd-logo-light.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/apple-icon.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ISD Solutions",
            "alternateName": "Integrated Synchronized Digitilized Solutions",
            "url": "https://isdsolutions.com",
            "logo": "https://isdsolutions.com/assets/images/isd-logo-light.svg",
            "description": "Leading IT solutions provider delivering innovative technology services that drive business growth and digital transformation.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1st Floor Potohar Plaza - Blue Area",
              "addressLocality": "Lahore",
              "addressCountry": "PK"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+92-300-807-8456",
              "contactType": "customer service",
              "email": "info@isdsolutions.com"
            },
            "sameAs": [
              "https://facebook.com/isdsolutions",
              "https://twitter.com/isdsolutions",
              "https://linkedin.com/company/isdsolutions"
            ],
            "serviceArea": {
              "@type": "Country",
              "name": "Pakistan"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IT Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Odoo Consultant"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ERP Next"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "FBR Digital Invoicing"
                  }
                }
              ]
            }
          })}
        </script>
      </head>
      
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <Toaster />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <AppContent />
      </TooltipProvider>
    </ThemeProvider>
  );
}
