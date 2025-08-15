import React, { useState } from "react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [headerRef, headerVisible] = useScrollAnimation();
  const [filterRef, filterVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();

  const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const slideInLeft = "opacity-0 -translate-x-8 transition-all duration-700";
  const slideInLeftVisible = "opacity-100 translate-x-0";
  const slideInRight = "opacity-0 translate-x-8 transition-all duration-700";
  const slideInRightVisible = "opacity-100 translate-x-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-700";
  const scaleInVisible = "opacity-100 scale-100";

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "odoo", label: "Odoo Solutions" },
    { id: "erp", label: "ERP Systems" },
    { id: "fbr", label: "FBR Solutions" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" }
  ];

  const projects = [
    {
      id: 1,
      title: "Amazon Agri ERP System",
      description: "Comprehensive Odoo ERP implementation for Amazon Agri, including CRM, HR management, inventory control, and financial management modules.",
      category: "odoo",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Odoo", "PostgreSQL", "Python", "JavaScript"]
    },
    {
      id: 2,
      title: "Pakistan Holstein Mobile App",
      description: "Cross-platform mobile application for Pakistan Holstein with real-time data synchronization, offline functionality, and user management.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"]
    },
    {
      id: 3,
      title: "Enviro ERP Next Implementation",
      description: "Complete ERP Next solution for Enviro with process automation, resource planning, and business intelligence integration.",
      category: "erp",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["ERP Next", "MariaDB", "Python", "Frappe"]
    },
    {
      id: 4,
      title: "JW Vendor City FBR Integration",
      description: "FBR-compliant digital invoicing system for JW Vendor City with automated tax calculations and audit trail management.",
      category: "fbr",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["FBR API", "React", "Node.js", "MongoDB"]
    },
    {
      id: 5,
      title: "Oracle EBS Upgrade Project",
      description: "Enterprise Oracle E-Business Suite upgrade with data migration, system testing, and comprehensive user training.",
      category: "erp",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Oracle EBS", "PL/SQL", "Oracle Forms", "Reports"]
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "Modern e-commerce platform with Odoo integration, payment processing, and comprehensive admin dashboard.",
      category: "web",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "Odoo", "Stripe"]
    },
    {
      id: 7,
      title: "Food Delivery Mobile App",
      description: "Feature-rich food delivery application with real-time tracking, payment integration, and restaurant management system.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"]
    },
    {
      id: 8,
      title: "Healthcare Management App",
      description: "Comprehensive healthcare management application for clinics with patient records, appointment scheduling, and billing.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"]
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
                className="bg-card border-border card-hover group animate-slide-up overflow-hidden transform hover:scale-105 transition-all duration-500"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: projectsVisible ? `slideInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
                data-testid={`card-project-${project.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-project-${project.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-red opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-primary-red text-white px-3 py-1 rounded-full text-sm font-medium transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.category.toUpperCase()}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-red transition-colors duration-300" data-testid={`text-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300" data-testid={`text-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full transform hover:scale-110 hover:bg-primary-red hover:text-white transition-all duration-300"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                        data-testid={`tag-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tech}
                      </span>
                    ))}
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
