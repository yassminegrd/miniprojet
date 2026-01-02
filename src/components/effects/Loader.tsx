import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

interface LoaderProps {
  onComplete?: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => onComplete?.(), 500);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`${styles.loader} ${isExiting ? styles.exiting : ''}`}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <span className={styles.logoText}>TG</span>
          <div className={styles.logoGlow} />
        </div>
        
        <div className={styles.progressContainer}>
          <div 
            className={styles.progressBar}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        
        <div className={styles.percentage}>
          {Math.min(Math.floor(progress), 100)}%
        </div>
        
        <div className={styles.loadingText}>
          Chargement en cours...
        </div>
      </div>

      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
