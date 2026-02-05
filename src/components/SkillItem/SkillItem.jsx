import { useState, useEffect, useRef } from 'react';
import './SkillItem.css';

const SkillItem = ({ skill, level = 80, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 2;
          if (progress >= level) {
            setCurrentLevel(level);
            clearInterval(interval);
          } else {
            setCurrentLevel(progress);
          }
        }, 20);

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div 
      ref={itemRef}
      className={`skill-item ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{currentLevel}%</span>
      </div>
      <div className="skill-progress-bar">
        <div 
          className="skill-progress-fill"
          style={{ width: `${currentLevel}%` }}
        />
      </div>
    </div>
  );
};

export default SkillItem;
