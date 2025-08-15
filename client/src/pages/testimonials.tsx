import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useScrollAnimation } from "../lib/scroll-animations";

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const [logosRef, logosVisible] = useScrollAnimation();

  const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const slideInLeft = "opacity-0 -translate-x-8 transition-all duration-700";
  const slideInLeftVisible = "opacity-100 translate-x-0";

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "InnovateCorp",
      content: "TechVision transformed our entire IT infrastructure. Their cloud migration solution reduced our costs by 40% while improving performance significantly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "StartupHub",
      content: "The mobile app they developed for us exceeded all expectations. User engagement increased by 300% within the first month of launch.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "IT Director",
      company: "SecureFinance",
      content: "Their cybersecurity implementation gave us peace of mind. The security audit revealed vulnerabilities we didn't even know existed.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Operations Manager",
      company: "EcoRetail",
      content: "The e-commerce platform they built is incredibly user-friendly and has helped us increase online sales by 250%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Data Scientist",
      company: "DataDriven",
      content: "Their AI-powered analytics platform has revolutionized how we process and interpret our data. The insights are invaluable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 6,
      name: "Robert Kim",
      position: "VP of Technology",
      company: "GlobalTech",
      content: "TechVision's expertise in modern web technologies helped us build a scalable platform that can handle millions of users.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];

  const companyLogos = [
    "InnovateCorp", "StartupHub", "SecureFinance", 
    "EcoRetail", "DataDriven", "GlobalTech"
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef as any}
            className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ''}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-gradient-red">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>
          
          <div 
            ref={testimonialsRef as any}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${slideInLeft} ${testimonialsVisible ? slideInLeftVisible : ''}`}
          >
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id} 
                  className="bg-card border-border card-hover group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`card-testimonial-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="flex text-primary-red text-xl">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} fill="currentColor" size={20} />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed" data-testid={`text-content-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={`${testimonial.name} - ${testimonial.position}`}
                        className="w-12 h-12 rounded-full border-2 border-primary-red mr-4" 
                        data-testid={`img-avatar-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                      <div>
                        <h4 className="text-foreground font-semibold" data-testid={`text-name-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground text-sm" data-testid={`text-position-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
          
          {/* Client Logos */}
          <div 
            ref={logosRef as any}
            className={`mt-16 text-center ${fadeInUp} ${logosVisible ? fadeInUpVisible : ''}`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
              {companyLogos.map((company, index) => (
                <div 
                  key={company}
                  className="bg-muted h-12 rounded flex items-center justify-center text-muted-foreground font-bold text-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  data-testid={`logo-${company.toLowerCase()}`}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
