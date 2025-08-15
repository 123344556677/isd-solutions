import React from "react";
import { Card, CardContent } from "./ui/card";
import { Cloud, Code, Database, Smartphone, Settings, FileText, Calculator, Building2 } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";

const services = [
  {
    title: "Odoo Consultant",
    description: "Odoo serves as a centralized platform for managing key business functions, including customer relationship management (CRM), human resources, and more.",
    icon: Building2,
    features: ["CRM Implementation", "HR Management", "Inventory Control", "Financial Management"]
  },
  {
    title: "ERP Next",
    description: "Comprehensive ERP solutions to streamline your business processes and improve operational efficiency.",
    icon: FileText,
    features: ["Process Automation", "Resource Planning", "Business Intelligence", "Integration Services"]
  },
  {
    title: "FBR Digital Invoicing",
    description: "Digital invoicing solutions compliant with Federal Board of Revenue requirements for seamless tax management.",
    icon: Calculator,
    features: ["FBR Compliance", "Digital Invoicing", "Tax Management", "Audit Trail"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
    icon: Cloud,
    features: ["AWS/Azure/GCP", "Server Migration", "Auto Scaling", "Cost Optimization"]
  },
  {
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    icon: Code,
    features: ["React/Next.js", "Node.js Backend", "Responsive Design", "SEO Optimization"]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Publishing"]
  },
  {
    title: "Application Bug Fixes",
    description: "From priority bug-fixing, technical investigations and change requests, we'll support and maintain your software.",
    icon: Settings,
    features: ["Bug Resolution", "Technical Support", "Change Requests", "Software Maintenance"]
  },
  {
    title: "Oracle EBS Upgrade",
    description: "Oracle E-Business Suite (EBS) upgrade is the process of transitioning an existing EBS installation to a newer version released by Oracle Corporation.",
    icon: Database,
    features: ["Version Migration", "Data Migration", "System Testing", "User Training"]
  }
];

export default function ServicesSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [servicesRef, servicesVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef as any}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-red">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>
        
        <div 
          ref={servicesRef as any}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${scaleIn} ${servicesVisible ? scaleInVisible : ''}`}
        >
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-card border-border card-hover group animate-slide-up overflow-hidden transform hover:scale-105 transition-all duration-500"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: servicesVisible ? `slideInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <CardContent className="p-8">
                <div className="text-4xl text-primary-red mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary-red transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={feature} className="text-muted-foreground flex items-center group-hover:text-foreground transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary-red rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
