import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "../lib/scroll-animations";

const clients = [
  {
    id: 1,
    name: "Amazon Agri",
    company: "Amazon Agri",
    content: "At Amazon Agri, we've had the privilege of partnering with ISD Solutions on several projects, and the experience has been truly remarkable. Their innovative solutions and unwavering commitment to excellence have had a transformative impact on our business.",
    rating: 5,
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23f3f4f6'/%3E%3Ctext x='75' y='75' font-family='Arial' font-size='48' fill='%239ca3af' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E"
  },
  {
    id: 2,
    name: "Pakistan Holstein Pvt ltd",
    company: "Pakistan Holstein Pvt ltd",
    content: "Collaborating closely with ISD Solutions has been an outstanding journey. Their technical expertise and innovative perspectives have seamlessly merged with our vision, resulting in an app that surpasses our expectations.",
    rating: 5,
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23f3f4f6'/%3E%3Ctext x='75' y='75' font-family='Arial' font-size='48' fill='%239ca3af' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E"
  },
  {
    id: 3,
    name: "Enviro",
    company: "Enviro",
    content: "Collaborating with ISD Solutions has been a transformative experience for Enviro. Their ability to craft innovative solutions that align seamlessly with our objectives has propelled our projects to new heights.",
    rating: 5,
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23f3f4f6'/%3E%3Ctext x='75' y='75' font-family='Arial' font-size='48' fill='%239ca3af' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E"
  },
  {
    id: 4,
    name: "JW Vendor City",
    company: "JW Vendor City",
    content: "Working closely with ISD Solutions has been an exceptional journey. Their technical prowess and creative insights have seamlessly blended with our vision, resulting in an app that exceeds our expectations.",
    rating: 5,
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23f3f4f6'/%3E%3Ctext x='75' y='75' font-family='Arial' font-size='48' fill='%239ca3af' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E"
  },
  {
    id: 5,
    name: "JW Sez",
    company: "JW Sez",
    content: "ISD Solutions has been instrumental in transforming our business operations through their innovative ERP solutions. Their team's deep understanding of our industry needs and their ability to deliver customized solutions has exceeded our expectations.",
    rating: 5,
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23f3f4f6'/%3E%3Ctext x='75' y='75' font-family='Arial' font-size='48' fill='%239ca3af' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E"
  },
  {
    id: 6,
    name: "Qingdao Hound Pakistan (Pvt.) Ltd.",
    company: "Qingdao Hound Pakistan (Pvt.) Ltd.",
    content: "Partnering with ISD Solutions for our digital transformation has been a game-changer. Their expertise in modern technologies and their commitment to understanding our unique business challenges has resulted in solutions that truly drive value.",
    rating: 5,
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23f3f4f6'/%3E%3Ctext x='75' y='75' font-family='Arial' font-size='48' fill='%239ca3af' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E"
  },
  {
    id: 7,
    name: "Treet Corporation Limited",
    company: "Treet Corporation Limited",
    content: "ISD Solutions has consistently delivered exceptional results for our technology initiatives. Their comprehensive approach to project management and their technical expertise have made them a trusted partner in our digital journey.",
    rating: 5,
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23f3f4f6'/%3E%3Ctext x='75' y='75' font-family='Arial' font-size='48' fill='%239ca3af' text-anchor='middle' dy='.3em'%3E%3F%3C/text%3E%3C/svg%3E"
  }
];

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [carouselRef, carouselVisible] = useScrollAnimation(0.2, 400);
  const [logosRef, logosVisible] = useScrollAnimation(0.2, 600);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section className="py-20 pb-40 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef as any}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-red">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading companies across Pakistan and beyond. Here's what our valued clients have to say about working with us.
          </p>
        </div>

        {/* Client Testimonials Carousel */}
        <div 
          ref={carouselRef as any}
          className={`relative ${scaleIn} ${carouselVisible ? scaleInVisible : ''}`}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {clients.map((client) => (
                <div key={client.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-border max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center border-2 border-primary-red transform hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl font-bold text-primary-red">
                            {client.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(client.rating)].map((_, i) => (
                          <Star key={i} fill="currentColor" className="text-primary-red transform hover:scale-125 transition-transform duration-300" size={20} />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-muted-foreground mb-6 italic leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        "{client.content}"
                      </blockquote>
                      
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary-red transition-colors duration-300">{client.name}</h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{client.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card border-border hover:bg-primary-red hover:text-primary-foreground transform hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card border-border hover:bg-primary-red hover:text-primary-foreground transform hover:scale-110 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentIndex ? 'bg-primary-red' : 'bg-muted hover:bg-primary-red/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div 
          ref={logosRef as any}
          className={`mt-20 mb-12 ${fadeInUp} ${logosVisible ? fadeInUpVisible : ''}`}
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-10">
            Trusted by Industry Leaders
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {clients.map((client, index) => (
                <div 
                  key={client.id}
                  className="bg-card border border-border rounded-lg p-4 text-center mx-2 min-w-max flex-shrink-0 hover:border-primary-red transition-colors duration-300 transform hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-sm font-medium text-foreground leading-tight whitespace-nowrap">{client.company}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {clients.map((client, index) => (
                <div 
                  key={`duplicate-${client.id}`}
                  className="bg-card border border-border rounded-lg p-4 text-center mx-2 min-w-max flex-shrink-0 hover:border-primary-red transition-colors duration-300 transform hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-sm font-medium text-foreground leading-tight whitespace-nowrap">{client.company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 