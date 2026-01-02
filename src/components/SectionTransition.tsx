import { useEffect, useRef, useState } from 'react';

interface SectionTransitionProps {
  variant?: 'wave' | 'diagonal' | 'curve' | 'zigzag' | 'gradient';
  flip?: boolean;
  className?: string;
}

const SectionTransition = ({ variant = 'wave', flip = false, className = '' }: SectionTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSvgPath = () => {
    switch (variant) {
      case 'wave':
        return (
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-20 md:h-32 ${flip ? 'rotate-180' : ''}`}
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
              fill="currentColor"
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </svg>
        );
      case 'diagonal':
        return (
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-16 md:h-24 ${flip ? 'rotate-180' : ''}`}
            preserveAspectRatio="none"
          >
            <polygon
              points="0,120 1440,0 1440,120"
              fill="currentColor"
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </svg>
        );
      case 'curve':
        return (
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-20 md:h-32 ${flip ? 'rotate-180' : ''}`}
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 Q720,0 1440,120 L1440,120 L0,120 Z"
              fill="currentColor"
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </svg>
        );
      case 'zigzag':
        return (
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-8 md:h-16 ${flip ? 'rotate-180' : ''}`}
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 L120,0 L240,30 L360,0 L480,30 L600,0 L720,30 L840,0 L960,30 L1080,0 L1200,30 L1320,0 L1440,30 L1440,60 L0,60 Z"
              fill="currentColor"
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </svg>
        );
      case 'gradient':
        return (
          <div
            className={`w-full h-32 md:h-48 bg-gradient-to-b transition-all duration-1000 ease-out ${
              flip ? 'from-transparent to-current' : 'from-current to-transparent'
            } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden text-background ${className}`}>
      {getSvgPath()}
    </div>
  );
};

export default SectionTransition;
