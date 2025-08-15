import React from "react";
import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();

  // Choose logo based on theme
  const logoSrc = theme === 'light' 
    ? '/assets/images/isd-logo-light.svg' 
    : '/assets/images/isd-logo-dark.svg';

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="flex items-center space-x-2">
                <img 
                  src={logoSrc}
                  alt="ISD Solutions Logo" 
                  className="h-36 w-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Leading IT solutions provider delivering innovative technology services that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  Odoo Consultant
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  ERP Next
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  FBR Digital Invoicing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  Mobile Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-red flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  1st Floor Potohar Plaza - Blue Area, Lahore
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-red flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  +92 300 807 8456
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-red flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  info@isdsolutions.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 ISD Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
