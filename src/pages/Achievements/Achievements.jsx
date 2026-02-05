import { useState, useEffect } from 'react';
import Galaxy from '../../components/animations/Galaxy';
import './Achievements.css';

const Achievements = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      title: "Data Analyst - LinkedIn Posts",
      description: "Shared insights and knowledge with the data community, building a strong professional presence and engaging with industry experts.",
      icon: "",
      stats: { posts: "40+", reach: "10K+" },
      year: "2025",
      color: "blue"
    },
    {
      title: "3rd Prize in Machine Learning Hackathon",
      description: "Developed an innovative ML solution for a real-world problem, competing against talented teams and delivering impactful results.",
      icon: "",
      stats: { teams: "20", recognition: "Top 3" },
      year: "March 2025",
      color: "purple"
    },
    {
      title: "Led International Internship Team",
      description: "Successfully managed a cross-functional team across multiple time zones, delivering projects on time with excellent collaboration.",
      icon: "",
      stats: { members: "5", countries: "3" },
      year: "June 2025 - July 2025",
      color: "teal"
    },
    {
      title: "Completed 17+ Projects",
      description: "Successfully delivered diverse data analytics and web development projects with innovative solutions and measurable business impact.",
      icon: "",
      stats: { projects: "17+", satisfaction: "100%" },
      year: "2023 - 2026",
      color: "pink"
    },
    {
      title: "5+ Client Projects Delivered",
      description: "Delivered high-quality client projects in data analytics, BI dashboards, and reporting with exceptional client satisfaction.",
      icon: "",
      stats: { clients: "5+", rating: "5" },
      year: "2025 - 2026",
      color: "blue"
    }
  ];

  return (
    <div className="achievements-page">
      <section className="achievements-hero">
        <Galaxy />
        
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">My Achievements</h1>
            <p className="hero-description">
              A showcase of milestones, recognition, and impactful contributions in data analytics and technology.
            </p>
          </div>
        </div>
      </section>

      <div className={`delayed-content ${showContent ? 'visible' : ''}`}>
        <section className="achievements-content">
          <div className="container">
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`achievement-card ${achievement.color}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="achievement-icon-wrapper">
                    <div className="achievement-icon">{achievement.icon}</div>
                  </div>
                  
                  <div className="achievement-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                    
                    <div className="achievement-stats">
                      {Object.entries(achievement.stats).map(([key, value]) => (
                        <div key={key} className="stat-box">
                          <span className="stat-value">{value}</span>
                          <span className="stat-label">{key}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="achievement-year">{achievement.year}</div>
                  </div>
                  
                  <div className="achievement-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Achievements;
