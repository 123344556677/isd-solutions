import { useEffect, useRef, useState } from 'react';

// Hook for scroll-triggered animations
export const useScrollAnimation = (threshold = 0.1, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, delay]);

  return [ref, isVisible] as const;
};

// Animation classes for different effects
export const fadeInUp = 'opacity-0 translate-y-12 transition-all duration-1000 ease-out';
export const fadeInUpVisible = 'opacity-100 translate-y-0';

export const fadeIn = 'opacity-0 transition-all duration-1000 ease-out';
export const fadeInVisible = 'opacity-100';

export const scaleIn = 'opacity-0 scale-95 transition-all duration-1000 ease-out';
export const scaleInVisible = 'opacity-100 scale-100';

export const slideInLeft = 'opacity-0 -translate-x-12 transition-all duration-1000 ease-out';
export const slideInLeftVisible = 'opacity-100 translate-x-0';

export const slideInRight = 'opacity-0 translate-x-12 transition-all duration-1000 ease-out';
export const slideInRightVisible = 'opacity-100 translate-x-0';

export const bounceIn = 'opacity-0 scale-75 transition-all duration-1000 ease-out';
export const bounceInVisible = 'opacity-100 scale-100';

export const rotateIn = 'opacity-0 rotate-12 transition-all duration-1000 ease-out';
export const rotateInVisible = 'opacity-100 rotate-0';