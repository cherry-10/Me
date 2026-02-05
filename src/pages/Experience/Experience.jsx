import { useState, useEffect } from 'react';
import Hyperspeed from '../../components/animations/Hyperspeed';
import './Experience.css';

const Experience = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      category: 'Awards & Recognition',
      items: [
        {
          title: 'Machine Learning Hackathon – 3rd Prize',
          organization: 'Nexthub Technologies',
          period: 'March 2025',
          description: 'Secured 3rd Prize in a competitive Machine Learning Hackathon among 20 teams.',
          highlights: [
            'Designed and implemented a Stock Forecasting Machine Learning model',
            'Performed data preprocessing, feature engineering, model training, and evaluation',
            'Demonstrated strong problem-solving and analytical skills under time-bound conditions'
          ]
        }
      ]
    },
    {
      category: 'Global Internship Experience',
      items: [
        {
          title: 'Data Visualization Internship – Team Lead',
          organization: 'St. Louis University (via Excelerate)',
          period: 'June 2025 - July 2025',
          role: 'Data Analyst Associate Intern & Team Lead',
          description: 'Selected for a global-level internship conducted by St. Louis University through the Excelerate platform.',
          highlights: [
            'Led a 5-member analytics team from 3 countries, coordinating tasks and ensuring timely delivery',
            'Worked extensively with PostgreSQL, Looker Studio, and PowerPoint',
            'Created wireframes and learner analytics dashboards to analyze engagement and performance',
            'Achieved Top-Performing Team status among 24 teams based on analytical depth and visualization quality'
          ]
        },
        {
          title: 'Data Visualization Virtual Internship – Project Scribe',
          organization: 'St. Louis University (via Excelerate)',
          period: 'June 2025 - July 2025',
          role: 'Data Analyst Trainee & Project Scribe',
          description: 'Served as Project Scribe for an 8-member international team.',
          highlights: [
            'Managed weekly requirement gathering and documentation',
            'Acted as central communication point between team members',
            'Ensured production of high-quality, insight-driven dashboards',
            'Translated business requirements into visualization logic'
          ]
        }
      ]
    },
    {
      category: 'Industry Internship',
      items: [
        {
          title: 'Data Analyst Intern',
          organization: 'Nexthub Technologies',
          period: 'June 2025 – Present',
          description: 'Offered internship based on exceptional performance in Machine Learning Hackathon.',
          highlights: [
            'Created Power BI dashboards and executive-level presentations',
            'Supported data analysis workflows using SQL and Excel',
            'Contributed to AI-based educational content and training videos',
            'Derived actionable insights for internal and client use'
          ]
        }
      ]
    },
    {
      category: 'Content Creation & Thought Leadership',
      items: [
        {
          title: 'LinkedIn Content Creator',
          organization: 'LinkedIn',
          period: 'August 2025 – Present',
          description: 'Built a strong professional presence by publishing 60+ data and analytics-focused posts.',
          highlights: [
            'Topics: Data Analytics, Power BI, SQL, AI concepts, and career guidance',
            'Achieved consistent engagement through educational content',
            'Reached 10K+ professionals with insight-driven posts'
          ]
        }
      ]
    },
    {
      category: 'AI Education & Training',
      items: [
        {
          title: 'Technical Trainer – Generative AI',
          organization: 'Nexthub Technologies',
          period: 'October 2025',
          description: 'Conducted a Generative AI workshop at a degree college on behalf of Nexthub Technologies.',
          highlights: [
            'Trained 1st, 2nd, and 3rd-year undergraduate students on AI tools and use cases',
            'Designed and delivered a 7-day hands-on learning program',
            'Enabled students to apply AI tools independently with prompt-based workflows'
          ]
        }
      ]
    },
    {
      category: 'Leadership & Client-Facing Experience',
      items: [
        {
          title: 'Web Development Team Lead',
          organization: 'Axis Point (Partner Company of Nexthub Technologies)',
          period: 'October 2025 – December 2025',
          description: 'Led a web development team responsible for building client-facing applications.',
          highlights: [
            'Engaged directly with government clients to gather requirements',
            'Designed prototypes and user-flow diagrams',
            'Successfully delivered production-ready application meeting client expectations',
            'Converted business workflows into clear development plans'
          ]
        }
      ]
    },
    {
      category: 'Project Delivery & Advanced Skills',
      items: [
        {
          title: 'Web & App Development Lead',
          organization: 'Independent Team',
          period: 'December 2025',
          description: 'Formed and led a dedicated development team.',
          highlights: [
            'Delivered 3 professional websites and 1 mobile application',
            'Managed task allocation, progress tracking, and final delivery',
            'Completed all projects within strict timelines'
          ]
        },
        {
          title: 'Prompt Engineering & AI-Driven Development',
          organization: 'Self-Learning',
          period: 'January 2026',
          description: 'Gained hands-on experience in Prompt Engineering and modern AI tools.',
          highlights: [
            'Designed and developed complete website using AI-assisted workflows',
            'Improved development efficiency and creativity',
            'Applied AI tools to real-world development scenarios'
          ]
        }
      ]
    }
  ];

  return (
    <div className="experience-page">
      <section className="experience-hero">
        <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0 }}>
          <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [12, 80],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 526344,
                islandColor: 657930,
                background: 0,
                shoulderLines: 1250072,
                brokenLines: 1250072,
                leftCars: [14177983, 6770850, 12732332],
                rightCars: [242627, 941733, 3294549],
                sticks: 242627
              }
            }}
          />
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Professional Journey</h1>
            <p className="hero-description">
              A comprehensive showcase of achievements, leadership roles, and technical expertise across data analytics, AI, and software development.
            </p>
          </div>
        </div>
      </section>

      <div className={`experience-content ${showContent ? 'visible' : ''}`}>
        <div className="container">
          {experiences.map((section, sectionIndex) => (
            <section key={sectionIndex} className="experience-section">
              <h2 className="category-title">{section.category}</h2>
              <div className="experience-grid">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="experience-card"
                    style={{ animationDelay: `${itemIndex * 0.1}s` }}
                  >
                    <div className="card-header">
                      <h3 className="experience-title">{item.title}</h3>
                      <span className="experience-period">{item.period}</span>
                    </div>
                    
                    <div className="card-body">
                      <div className="organization">{item.organization}</div>
                      {item.role && <div className="role">{item.role}</div>}
                      <p className="description">{item.description}</p>
                      
                      <ul className="highlights">
                        {item.highlights.map((highlight, hIndex) => (
                          <li key={hIndex}>
                            <span className="highlight-bullet">▹</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
