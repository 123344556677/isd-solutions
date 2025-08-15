import type { Project, Testimonial, TeamMember } from '../types';

// Mock data for the portfolio website
export const mockProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with advanced analytics, inventory management, and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    clientName: "ShopFlow Inc.",
    completedDate: "2024-01-15",
    projectUrl: "https://shopflow-demo.com"
  },
  {
    id: "2",
    title: "FinTech Mobile App",
    description: "A secure financial technology mobile application with real-time transactions, budgeting tools, and investment tracking.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "mobile",
    technologies: ["React Native", "TypeScript", "Firebase", "Plaid API"],
    clientName: "WealthTrack",
    completedDate: "2024-02-20",
    projectUrl: "https://wealthtrack-app.com"
  },
  {
    id: "3",
    title: "Cloud Migration Platform",
    description: "Enterprise cloud migration solution with automated deployment, monitoring, and cost optimization features.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "cloud",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    clientName: "CloudFirst Corp",
    completedDate: "2023-12-10",
    projectUrl: "https://cloudfirst-platform.com"
  },
  {
    id: "4",
    title: "Corporate Website Redesign",
    description: "Complete redesign of a corporate website with improved user experience, SEO optimization, and content management system.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "Strapi CMS", "Vercel"],
    clientName: "GlobalTech Solutions",
    completedDate: "2024-03-05",
    projectUrl: "https://globaltech-new.com"
  },
  {
    id: "5",
    title: "Healthcare Management App",
    description: "Comprehensive healthcare management application with appointment scheduling, patient records, and telemedicine features.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "mobile",
    technologies: ["Flutter", "PostgreSQL", "WebRTC", "HL7 FHIR"],
    clientName: "MediCare Plus",
    completedDate: "2024-01-30",
    projectUrl: "https://medicare-plus-app.com"
  },
  {
    id: "6",
    title: "Analytics Dashboard",
    description: "Real-time business intelligence dashboard with interactive charts, data visualization, and automated reporting capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "web",
    technologies: ["D3.js", "Python", "Redis", "PostgreSQL"],
    clientName: "DataDriven Analytics",
    completedDate: "2024-02-28",
    projectUrl: "https://datadriven-dashboard.com"
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Robert Wilson",
    position: "CEO",
    company: "InnovateCorp",
    content: "TechVision transformed our entire digital infrastructure. Their cloud migration solution improved our efficiency by 40% and reduced operational costs significantly. Outstanding service and support!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "2",
    name: "Maria Garcia",
    position: "CTO",
    company: "StartupHub",
    content: "The mobile app development team exceeded our expectations. They delivered a user-friendly, feature-rich application that our customers love. Professional, timely, and innovative approach.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "3",
    name: "David Thompson",
    position: "IT Director",
    company: "SecureFinance",
    content: "Their cybersecurity audit and implementation saved our company from potential threats. The team is knowledgeable, thorough, and provides ongoing support. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "4",
    name: "Jennifer Lee",
    position: "Founder",
    company: "EcoRetail",
    content: "Working with TechVision on our e-commerce platform was a game-changer. They understood our business needs and delivered a solution that increased our sales by 60%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "5",
    name: "Alex Chen",
    position: "Operations Manager",
    company: "DataDriven",
    content: "The data analytics dashboard they created gives us incredible insights into our business. Real-time reporting and beautiful visualizations help us make better decisions daily.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "6",
    name: "Sarah Martinez",
    position: "VP Technology",
    company: "GlobalTech",
    content: "Their IT consulting services helped us modernize our legacy systems. The transition was smooth, and we're now operating with much better efficiency and reliability.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Smith",
    position: "CEO & Founder",
    description: "Leading the company's vision and strategic direction with over 15 years of experience in technology and business development.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    linkedin: "https://linkedin.com/in/johnsmith",
    twitter: "https://twitter.com/johnsmith"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
    description: "Driving technical innovation and overseeing all technology initiatives and development with expertise in cloud architecture.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    github: "https://github.com/sarahjohnson"
  },
  {
    id: "3",
    name: "Michael Chen",
    position: "Lead Developer",
    description: "Expert in full-stack development with specialization in React and Node.js applications, leading our development team.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    linkedin: "https://linkedin.com/in/michaelchen",
    github: "https://github.com/michaelchen"
  },
  {
    id: "4",
    name: "Emily Davis",
    position: "Project Manager",
    description: "Ensuring seamless project delivery with excellent communication and organizational skills, coordinating cross-functional teams.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    linkedin: "https://linkedin.com/in/emilydavis",
    twitter: "https://twitter.com/emilydavis"
  }
];
