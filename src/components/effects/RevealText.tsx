import { useEffect, useState, useRef } from 'react';
import styles from './RevealText.module.css';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const RevealText = ({ text, className = '', delay = 0 }: RevealTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <span ref={ref} className={`${styles.revealContainer} ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`${styles.char} ${isVisible ? styles.visible : ''}`}
          style={{ 
            transitionDelay: `${index * 30}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default RevealText;
