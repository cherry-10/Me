import CertificationCard from '../../components/CertificationCard/CertificationCard';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'October 2025',
      description: 'Comprehensive understanding of AI concepts, machine learning basics, and practical applications in business contexts.'
    },
    {
      title: 'Business Analytics: Excel Macros & VBA',
      issuer: 'Simplilearn',
      date: 'Completed',
      description: 'Advanced Excel automation techniques, VBA programming, and macro development for business analytics and workflow optimization.'
    },
    {
      title: 'Business Analysis & Process Management',
      issuer: 'Coursera',
      date: 'Completed',
      description: 'Business analysis methodologies, process improvement techniques, and stakeholder management strategies.'
    },
    {
      title: 'TCS iON Career Edge – Young Professional',
      issuer: 'TCS iON',
      date: 'Completed',
      description: 'Professional development program covering communication skills, workplace readiness, and career advancement strategies.'
    },
    {
      title: 'Data Visualization using Microsoft PowerPoint',
      issuer: 'Coursera',
      date: 'Completed',
      description: 'Creating impactful data visualizations and presentations to communicate insights effectively to stakeholders.'
    },
    {
      title: 'PostgreSQL: Become an SQL Developer',
      issuer: 'Simplilearn',
      date: 'Completed',
      description: 'Advanced SQL querying, database design, optimization techniques, and PostgreSQL-specific features for data management.'
    },
    {
      title: 'Amazon Managed Grafana Getting Started',
      issuer: 'AWS Training & Certification',
      date: 'Completed',
      description: 'Introduction to Amazon Managed Grafana for creating dashboards and visualizing operational metrics in AWS environments.'
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Simplilearn',
      date: 'Completed',
      description: 'Foundational concepts in data science including data analysis, statistical methods, and machine learning fundamentals.'
    },
    {
      title: 'Introduction to Microsoft Excel',
      issuer: 'Coursera Project Network',
      date: 'Completed',
      description: 'Essential Excel skills including formulas, functions, data organization, and basic analysis techniques.'
    },
    {
      title: 'Introduction to Generative AI Studio',
      issuer: 'Google Cloud via Simplilearn',
      date: 'Completed',
      description: 'Hands-on experience with Google Cloud Generative AI Studio, exploring AI model training and deployment.'
    },
    {
      title: 'Data Science Types and Machine Learning Models',
      issuer: 'Mind Luster',
      date: 'Completed',
      description: 'Comprehensive overview of different data science approaches and various machine learning model types and applications.'
    },
    {
      title: 'Mastering Excel Techniques Masterclass',
      issuer: 'RIT University via Excelerate',
      date: 'Completed',
      description: 'Advanced Excel techniques including complex formulas, data analysis tools, pivot tables, and professional spreadsheet management.'
    },
    {
      title: 'How To Visualize Your Data Using Microsoft PowerPoint',
      issuer: 'Coursera Project Network',
      date: 'Completed',
      description: 'Creating compelling data visualizations and professional presentations using PowerPoint to effectively communicate insights.'
    }
  ];

  return (
    <div className="certifications-page page-container">
      <div className="container">
        <h1 className="section-title">Certifications & Training</h1>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={index}
              certification={cert}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
