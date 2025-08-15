import React, { useState } from "react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [headerRef, headerVisible] = useScrollAnimation();
  const [filterRef, filterVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();

  const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const slideInLeft = "opacity-0 -translate-x-8 transition-all duration-700";
  const slideInLeftVisible = "opacity-100 translate-x-0";

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "cloud", label: "Cloud Solutions" },
    { id: "ai", label: "AI & ML" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "A secure mobile banking application for iOS and Android with biometric authentication and real-time transaction monitoring.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Cloud Migration Solution",
      description: "Enterprise cloud migration solution that helped a Fortune 500 company reduce infrastructure costs by 40%.",
      category: "cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI-Powered Analytics",
      description: "Machine learning platform that provides predictive analytics and business intelligence insights.",
      category: "ai",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Real Estate Management System",
      description: "Comprehensive property management system with tenant portal, maintenance tracking, and financial reporting.",
      category: "web",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Cross-platform fitness tracking application with workout planning, progress monitoring, and social features.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  return (
    <div className="pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef as any}
            className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ''}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient-red">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our portfolio of successful projects that have transformed businesses and delivered exceptional results.
            </p>
          </div>
          
          {/* Project Categories Filter */}
          <div 
            ref={filterRef as any}
            className={`flex flex-wrap justify-center gap-4 mb-12 ${slideInLeft} ${filterVisible ? slideInLeftVisible : ''}`}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-red text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-primary-red hover:text-primary-foreground"
                }`}
                data-testid={`button-filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          <div 
            ref={projectsRef as any}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${fadeInUp} ${projectsVisible ? fadeInUpVisible : ''}`}
          >
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-card border-border card-hover group animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-project-${project.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    data-testid={`img-project-${project.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-red opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground" data-testid={`text-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        data-testid={`tag-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      data-testid={`button-live-${project.id}`}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
