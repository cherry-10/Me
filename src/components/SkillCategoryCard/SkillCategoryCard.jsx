import Card from '../Card/Card';
import SkillItem from '../SkillItem/SkillItem';
import './SkillCategoryCard.css';

const SkillCategoryCard = ({ category, icon, skills }) => {
  return (
    <Card className="skill-category-card">
      <div className="category-header">
        <span className="category-icon">{icon}</span>
        <h3 className="category-title">{category}</h3>
      </div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillItem 
            key={index} 
            skill={skill.name} 
            level={skill.level}
            delay={index * 0.05}
          />
        ))}
      </div>
    </Card>
  );
};

export default SkillCategoryCard;
