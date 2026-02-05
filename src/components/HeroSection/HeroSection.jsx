import FloatingLines from '../animations/FloatingLinesThree';
import TextType from '../animations/TextType';
import Shuffle from '../animations/Shuffle';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="floating-lines-wrapper">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <TextType 
            text="Hi, I'm Dasu Charan Teja"
            speed={75}
            cursor={true}
          />
          
          <Shuffle 
            text="Data Analyst | Business Analytics | BI Developer"
          />
          
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a 
              href="https://github.com/cherry-10/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
