import { useEffect, useRef, useState } from 'react';

// Hook for scroll-triggered animations
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after first trigger for performance
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
};

// Animation classes for different effects
export const fadeInUp = 'opacity-0 translate-y-8 transition-all duration-700 ease-out';
export const fadeInUpVisible = 'opacity-100 translate-y-0';

export const fadeIn = 'opacity-0 transition-opacity duration-700 ease-out';
export const fadeInVisible = 'opacity-100';

export const scaleIn = 'opacity-0 scale-95 transition-all duration-700 ease-out';
export const scaleInVisible = 'opacity-100 scale-100';

export const slideInLeft = 'opacity-0 -translate-x-8 transition-all duration-700 ease-out';
export const slideInLeftVisible = 'opacity-100 translate-x-0';

export const slideInRight = 'opacity-0 translate-x-8 transition-all duration-700 ease-out';
export const slideInRightVisible = 'opacity-100 translate-x-0';