import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Choose logo based on theme
  const logoSrc = theme === 'light' 
    ? '/assets/images/isd-logo-light.svg' 
    : '/assets/images/isd-logo-dark.svg';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-2">
              <img 
                src={logoSrc}
                alt="ISD Solutions Logo" 
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary-red transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary-red transition-colors duration-300">
              About
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary-red transition-colors duration-300">
              Services
            </Link>
            <Link href="/projects" className="text-foreground hover:text-primary-red transition-colors duration-300">
              Projects
            </Link>
            <Link href="/testimonials" className="text-foreground hover:text-primary-red transition-colors duration-300">
              Testimonials
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary-red transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Right side - Theme Toggle and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/contact">
              <Button className="bg-primary-red hover:bg-primary-red/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary-red transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link 
                href="/" 
                className="block px-3 py-2 text-foreground hover:text-primary-red transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-foreground hover:text-primary-red transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-foreground hover:text-primary-red transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/projects" 
                className="block px-3 py-2 text-foreground hover:text-primary-red transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/testimonials" 
                className="block px-3 py-2 text-foreground hover:text-primary-red transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-foreground hover:text-primary-red transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary-red hover:bg-primary-red/90 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
