import React from "react";
import { Card, CardContent } from "./ui/card";
import { Users, Award, Clock, Star } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";

const stats = [
  {
    icon: Users,
    number: "150+",
    label: "Happy Clients",
    description: "Satisfied customers across various industries"
  },
  {
    icon: Award,
    number: "200+",
    label: "Projects Completed",
    description: "Successful project deliveries on time"
  },
  {
    icon: Clock,
    number: "5+",
    label: "Years Experience",
    description: "Deep expertise in technology solutions"
  },
  {
    icon: Star,
    number: "4.9",
    label: "Client Rating",
    description: "Consistent 5-star client satisfaction"
  }
];

export default function StatsSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [statsRef, statsVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef as any}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-red">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that speak for themselves. We've helped businesses achieve remarkable results.
          </p>
        </div>
        
        <div 
          ref={statsRef as any}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${scaleIn} ${statsVisible ? scaleInVisible : ''}`}
        >
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="bg-card/80 border-border card-hover group text-center transform hover:scale-105 transition-all duration-500"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: statsVisible ? `slideInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <CardContent className="p-8">
                <div className="text-4xl text-primary-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient-red mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-red transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
