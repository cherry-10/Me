import { useState } from 'react';
import './CardSwap.css';

const CardSwap = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const handleNext = () => {
    setDirection('next');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setDirection('');
    }, 300);
  };

  const handlePrev = () => {
    setDirection('prev');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setDirection('');
    }, 300);
  };

  return (
    <div className="card-swap-container">
      <div className={`card-swap-wrapper ${direction}`}>
        <div className="card-swap-card">
          <div className="card-swap-icon">{cards[currentIndex].icon}</div>
          <h3 className="card-swap-title">{cards[currentIndex].title}</h3>
          <p className="card-swap-description">{cards[currentIndex].description}</p>
          
          {cards[currentIndex].stats && (
            <div className="card-swap-stats">
              {Object.entries(cards[currentIndex].stats).map(([key, value]) => (
                <div key={key} className="stat-item">
                  <span className="stat-value">{value}</span>
                  <span className="stat-label">{key}</span>
                </div>
              ))}
            </div>
          )}
          
          {cards[currentIndex].year && (
            <div className="card-swap-year">{cards[currentIndex].year}</div>
          )}
        </div>
      </div>

      <div className="card-swap-controls">
        <button 
          className="card-swap-btn" 
          onClick={handlePrev}
          aria-label="Previous achievement"
        >
          ←
        </button>
        <div className="card-swap-indicators">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 'next' : 'prev');
                setTimeout(() => {
                  setCurrentIndex(index);
                  setDirection('');
                }, 300);
              }}
            />
          ))}
        </div>
        <button 
          className="card-swap-btn" 
          onClick={handleNext}
          aria-label="Next achievement"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CardSwap;
