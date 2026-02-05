import { useState, useEffect } from 'react';
import './TextType.css';

const TextType = ({ 
  text = "Hi, I'm Dasu Charan Teja",
  speed = 75,
  cursor = true,
  className = ""
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    if (cursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);

      return () => clearInterval(cursorInterval);
    }
  }, [cursor]);

  return (
    <h1 className={`text-type ${className}`}>
      {displayText}
      {cursor && <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>}
    </h1>
  );
};

export default TextType;
