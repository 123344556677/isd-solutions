import React from "react";
import { Link } from "wouter";
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-3xl font-bold text-gradient-red mb-4">
              ISD Solutions
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leading IT solutions provider delivering innovative technology services that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                data-testid="link-footer-linkedin"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                data-testid="link-footer-twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                data-testid="link-footer-facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                data-testid="link-footer-github"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Cloud Solutions",
                "Web Development",
                "Mobile Development",
                "Cybersecurity",
                "Data Analytics",
                "IT Consulting"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                    data-testid={`link-service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                  data-testid="link-footer-projects"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                  data-testid="link-footer-testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                  data-testid="link-footer-careers"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                  data-testid="link-footer-blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary-red mt-1" size={16} />
                <p className="text-muted-foreground">
                  123 Tech Street, Suite 400<br />
                  San Francisco, CA 94102
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary-red" size={16} />
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary-red" size={16} />
                <p className="text-muted-foreground">info@isdsolutions.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 ISD Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                data-testid="link-cookies"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
