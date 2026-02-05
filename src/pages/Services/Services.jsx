import { useState } from 'react';
import LightRays from '../../components/animations/LightRays';
import './Services.css';

const Services = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const services = [
    {
      icon: '📊',
      title: 'Reporting & Analytics',
      description: 'Comprehensive data reporting solutions with automated insights and KPI tracking.',
      features: ['Custom Reports', 'Automated Dashboards', 'Data Visualization', 'Performance Metrics']
    },
    {
      icon: '📈',
      title: 'BI Dashboards',
      description: 'Interactive Business Intelligence dashboards built with Power BI and Tableau.',
      features: ['Power BI Development', 'Tableau Dashboards', 'Real-time Analytics', 'Custom Visualizations']
    },
    {
      icon: '🔍',
      title: 'Data Analysis',
      description: 'In-depth data analysis to uncover insights and drive business decisions.',
      features: ['Statistical Analysis', 'Predictive Modeling', 'Data Mining', 'Trend Analysis']
    },
    {
      icon: '👨‍🏫',
      title: 'One-to-One Classes',
      description: 'Personalized training sessions on data analytics, BI tools, and Python programming.',
      features: ['Power BI Training', 'Python for Data', 'SQL Mastery', 'Excel Advanced']
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Professional Services</h1>
            <p className="hero-description">
              Transform your data into actionable insights with expert analytics, 
              BI solutions, and personalized training tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <h2 className="section-heading">What I Offer</h2>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="service-footer">
                  <button 
                    className="btn-book"
                    onClick={() => setShowBookingModal(true)}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Schedule a free consultation call to discuss your project requirements</p>
            <button 
              className="btn-cta"
              onClick={() => setShowBookingModal(true)}
            >
              📞 Book a Free Call
            </button>
          </div>
        </div>
      </section>

      {showBookingModal && (
        <div className="booking-modal" onClick={() => setShowBookingModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowBookingModal(false)}>×</button>
            <h2>Book a Call</h2>
            <p>Choose your preferred method to schedule a consultation:</p>
            
            <div className="booking-options">
              <a 
                href="mailto:charanteja1039@gmail.com?subject=Service Inquiry" 
                className="booking-option"
              >
                <span className="booking-icon">📧</span>
                <span>charanteja1039@gmail.com</span>
              </a>
              
              <a 
                href="tel:+917032481233" 
                className="booking-option"
              >
                <span className="booking-icon">📞</span>
                <span>+91 7032481233</span>
              </a>
              
              <a 
                href="https://wa.me/917032481233" 
                target="_blank" 
                rel="noopener noreferrer"
                className="booking-option"
              >
                <span className="booking-icon">💬</span>
                <span>WhatsApp</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/charan-teja-995a0a31a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="booking-option"
              >
                <span className="booking-icon">💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
