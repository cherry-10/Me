import { useRef, useState } from 'react';
import './VelocityMarquee.css';

const MarqueeRow = ({ text, speed = 20, direction = 'left' }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="marquee-row"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`marquee-content ${isPaused ? 'paused' : ''}`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
};

const VelocityMarquee = () => {
  const marqueeData = [
    { text: 'College Final Year Students • Small Scale Business Owners', speed: 25, direction: 'left' },
    { text: 'Data Analytics • Web Development • App Development', speed: 30, direction: 'right' },
    { text: 'International Team • Personal Team • Internship Company Team', speed: 28, direction: 'left' }
  ];

  return (
    <section className="velocity-marquee">
      <h2 className="marquee-heading">Types of Projects I Lead</h2>
      <div className="marquee-container">
        {marqueeData.map((item, index) => (
          <MarqueeRow 
            key={index}
            text={item.text}
            speed={item.speed}
            direction={item.direction}
          />
        ))}
      </div>
    </section>
  );
};

export default VelocityMarquee;
