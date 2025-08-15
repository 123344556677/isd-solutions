import React from "react";
import { Play, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
      <div className="absolute inset-0 bg-gradient-red opacity-10"></div>
      
      {/* Hero content with technology background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground">IT Solutions</span>
            <span className="block text-gradient-red">& Corporate Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology solutions. We deliver innovative IT services that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link href="/contact">
              <Button className="btn-primary" data-testid="button-get-started">
                <Rocket className="mr-2" size={20} />
                Get Started
              </Button>
            </Link>
            <Button variant="outline" className="btn-secondary" data-testid="button-watch-demo">
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
