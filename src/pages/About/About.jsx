import { useState, useEffect } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import BlurText from '../../components/animations/BlurText';
import ScrollReveal from '../../components/animations/ScrollReveal';
import GradientStats from '../../components/GradientStats/GradientStats';
import VelocityMarquee from '../../components/VelocityMarquee/VelocityMarquee';
import ContactCard from '../../components/ContactCard/ContactCard';
import PixelSnow from '../../components/animations/PixelSnow';
import Highlights from '../../components/Highlights/Highlights';
import './About.css';

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const aboutContent = [
    "I am a Data Analyst with hands-on experience in analytics, data visualization, and machine learning, gained through global internship programs and industry-driven projects. I specialize in transforming complex datasets into clear, actionable insights that support data-informed decision-making.",
    
    "I have worked in international internship programs conducted by St. Louis University via the Excelerate platform, where I collaborated with global teams, led analytics initiatives, and delivered high-impact dashboards using SQL, PostgreSQL, Power BI, Looker Studio, and Excel. I led a team that ranked top among 24 teams, recognized for analytical depth and presentation quality.",
    
    "In industry settings, I have contributed as a Data Analyst Intern at Nexthub Technologies, creating interactive dashboards, executive presentations, and AI-enabled educational content. My role was offered based on strong performance in a Machine Learning Hackathon, where I developed a stock forecasting model and secured 3rd place.",
    
    "Beyond analytics, I bring experience in technical training, content creation, and client-facing project delivery, including leading development teams, gathering requirements, and delivering production-ready digital solutions. I continuously expand my skill set across analytics, AI, and modern data tools to build solutions with measurable impact."
  ];

  return (
    <div className="about-page">
      <HeroSection />
      
      <div className={`delayed-content ${showContent ? 'visible' : ''}`}>
        <section className="about-section">
          <div className="pixel-snow-background">
            <PixelSnow 
              color="#d749f3"
              flakeSize={0.02}
              minFlakeSize={1.5}
              pixelResolution={120}
              speed={1.0}
              density={0.2}
              direction={170}
              brightness={1.2}
              depthFade={8}
              farPlane={15}
              gamma={0.4545}
              variant="square"
            />
          </div>
          
          <div className="container about-container">
            <div className="about-heading">
              <BlurText text="Know About Me" animateBy="words" className="about-heading-text gradient-heading" />
            </div>
            
            <div className="about-content-wrapper">
              {aboutContent.map((content, index) => (
                <div 
                  key={index} 
                  className="about-paragraph-container"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <p className="about-paragraph gradient-paragraph">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GradientStats />

        <VelocityMarquee />

        <Highlights />

        <section className="contact-section">
          <div className="container">
            <h2 className="contact-heading">Let's Build Something Together</h2>
            <p className="contact-subheading">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            
            <div className="contact-grid">
              <a href="mailto:charanteja1039@gmail.com" className="contact-method">
                <div className="contact-icon">📧</div>
                <h3>Email Me</h3>
                <p>charanteja1039@gmail.com</p>
              </a>
              
              <a href="tel:+917032481233" className="contact-method">
                <div className="contact-icon">📞</div>
                <h3>Call Me</h3>
                <p>+91 7032481233</p>
              </a>
              
              <a href="https://wa.me/917032481233" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">💬</div>
                <h3>WhatsApp</h3>
                <p>Message me directly</p>
              </a>
              
              <a href="https://www.linkedin.com/in/charan-teja-995a0a31a/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>Let's connect professionally</p>
              </a>
              
              <a href="https://github.com/cherry-10" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">💻</div>
                <h3>GitHub</h3>
                <p>Check out my code</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
