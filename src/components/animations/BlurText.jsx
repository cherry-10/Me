import { useEffect, useRef, useState } from 'react';
import './BlurText.css';

const BlurText = ({ 
  text,
  className = "",
  animateBy = "words"
}) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const renderText = () => {
    if (animateBy === "words") {
      const words = text.split(' ');
      return words.map((word, index) => (
        <span
          key={index}
          className={`blur-word ${inView ? 'visible' : ''}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {word}{' '}
        </span>
      ));
    }
    return text;
  };

  return (
    <p ref={elementRef} className={`blur-text ${className}`}>
      {renderText()}
    </p>
  );
};

export default BlurText;
