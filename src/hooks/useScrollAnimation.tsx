import { useEffect, useRef, useState, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface ScrollAnimationReturn {
  ref: RefObject<HTMLElement>;
  isVisible: boolean;
  progress: number;
}

export const useScrollAnimation = (
  options: ScrollAnimationOptions = {}
): ScrollAnimationReturn => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!triggerOnce) {
            setProgress(entry.intersectionRatio);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
          setProgress(0);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible, progress };
};

// Parallax scroll hook
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setOffset(scrollProgress * speed * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};

// Staggered animation helper
export const getStaggerDelay = (index: number, baseDelay: number = 0.1): string => {
  return `${baseDelay + index * 0.08}s`;
};

// Animation class generator
export const getAnimationClasses = (
  isVisible: boolean,
  variant: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur' = 'fadeUp'
): string => {
  const baseClasses = 'transition-all duration-700 ease-out';
  
  const variants = {
    fadeUp: {
      hidden: 'opacity-0 translate-y-12',
      visible: 'opacity-100 translate-y-0',
    },
    fadeDown: {
      hidden: 'opacity-0 -translate-y-12',
      visible: 'opacity-100 translate-y-0',
    },
    fadeLeft: {
      hidden: 'opacity-0 translate-x-12',
      visible: 'opacity-100 translate-x-0',
    },
    fadeRight: {
      hidden: 'opacity-0 -translate-x-12',
      visible: 'opacity-100 translate-x-0',
    },
    scale: {
      hidden: 'opacity-0 scale-90',
      visible: 'opacity-100 scale-100',
    },
    blur: {
      hidden: 'opacity-0 blur-sm',
      visible: 'opacity-100 blur-0',
    },
  };

  return `${baseClasses} ${isVisible ? variants[variant].visible : variants[variant].hidden}`;
};
