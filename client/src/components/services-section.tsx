import React from "react";
import { Card, CardContent } from "./ui/card";
import { Cloud, Code, Shield, Database, Smartphone, BarChart3 } from "lucide-react";

const services = [
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
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    icon: Shield,
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"]
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics.",
    icon: BarChart3,
    features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Process Optimization"]
  },
  {
    title: "Database Solutions",
    description: "Robust database design and optimization for your applications.",
    icon: Database,
    features: ["Database Design", "Performance Tuning", "Data Migration", "Backup & Recovery"]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-red">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-card border-border card-hover group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-4xl text-primary-red mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary-red rounded-full mr-3"></div>
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
