import SkillCategoryCard from '../../components/SkillCategoryCard/SkillCategoryCard';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming & Tools',
      icon: '💻',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 95 },
        { name: 'Excel', level: 85 },
        { name: 'VBA', level: 75 },
        { name: 'Git', level: 80 },
        { name: 'PostgreSQL', level: 85 }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: '📊',
      skills: [
        { name: 'Data Cleaning', level: 95 },
        { name: 'Data Modeling', level: 90 },
        { name: 'Statistical Analysis', level: 85 },
        { name: 'Data Visualization', level: 90 },
        { name: 'ETL Processes', level: 85 },
        { name: 'Predictive Analytics', level: 80 }
      ]
    },
    {
      category: 'BI & Workflow',
      icon: '📈',
      skills: [
        { name: 'Power BI', level: 95 },
        { name: 'Tableau', level: 85 },
        { name: 'DAX', level: 90 },
        { name: 'Power Query', level: 90 },
        { name: 'Workflow Automation', level: 85 },
        { name: 'Dashboard Development', level: 95 }
      ]
    },
    {
      category: 'Methodologies',
      icon: '⚙️',
      skills: [
        { name: 'Agile', level: 85 },
        { name: 'Scrum', level: 80 },
        { name: 'Requirements Gathering', level: 90 },
        { name: 'Stakeholder Management', level: 85 },
        { name: 'Process Improvement', level: 85 },
        { name: 'Business Analysis', level: 90 }
      ]
    },
    {
      category: 'Generative AI Tools',
      icon: '🤖',
      skills: [
        { name: 'ChatGPT', level: 95 },
        { name: 'Claude', level: 90 },
        { name: 'GitHub Copilot', level: 85 },
        { name: 'Gemini', level: 85 },
        { name: 'AI-Assisted Development', level: 90 },
        { name: 'Prompt Engineering', level: 95 }
      ]
    },
    {
      category: 'Soft Skills',
      icon: '🎯',
      skills: [
        { name: 'Leadership', level: 90 },
        { name: 'Team Collaboration', level: 95 },
        { name: 'Communication', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Critical Thinking', level: 90 },
        { name: 'Project Management', level: 85 }
      ]
    }
  ];

  return (
    <div className="skills-page page-container">
      <div className="container">
        <h1 className="section-title">Skills & Expertise</h1>
        <p className="section-subtitle">Hover over skills to see proficiency levels</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard 
              key={index}
              category={category.category}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
