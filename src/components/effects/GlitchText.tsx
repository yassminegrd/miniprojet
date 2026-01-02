import { useEffect, useState } from 'react';
import styles from './GlitchText.module.css';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`${styles.glitchContainer} ${isGlitching ? styles.glitching : ''} ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;
