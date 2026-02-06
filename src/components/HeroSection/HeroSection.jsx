import { useState } from 'react';
import { Link } from 'react-router-dom';
import FloatingLines from '../animations/FloatingLinesThree';
import TextType from '../animations/TextType';
import Shuffle from '../animations/Shuffle';
import './HeroSection.css';
import './ContactModal.css';

const HeroSection = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const contactOptions = [
    {
      name: 'LinkedIn',
      icon: '💼',
      link: 'https://www.linkedin.com/in/dasu-charan-teja/',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: '📧',
      link: 'mailto:charanteja.dasu@gmail.com',
      color: '#ea4335'
    },
    {
      name: 'Phone',
      icon: '📱',
      link: 'tel:+919390401949',
      color: '#34a853'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      link: 'https://wa.me/919390401949',
      color: '#25d366'
    }
  ];

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
            <button 
              onClick={() => setShowContactModal(true)} 
              className="btn btn-primary"
            >
              Get In Touch
            </button>
            <Link to="/projects" className="btn btn-secondary">
              View Projects
            </Link>
          </div>

          {showContactModal && (
            <div className="contact-modal-overlay" onClick={() => setShowContactModal(false)}>
              <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="modal-close" 
                  onClick={() => setShowContactModal(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <h3 className="modal-title">Let's Connect</h3>
                <p className="modal-subtitle">Choose your preferred way to reach out</p>
                <div className="contact-options">
                  {contactOptions.map((option, index) => (
                    <a
                      key={index}
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-option"
                      style={{ '--option-color': option.color }}
                    >
                      <span className="contact-icon">{option.icon}</span>
                      <span className="contact-name">{option.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
