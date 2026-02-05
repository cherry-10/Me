import Card from '../Card/Card';
import './ExperienceCard.css';

const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`timeline-item ${isEven ? 'left' : 'right'}`}>
      <div className="timeline-dot"></div>
      <Card className="experience-card" hover={true}>
        <div className="experience-header">
          <h3>{experience.role}</h3>
          <span className="experience-period">{experience.period}</span>
        </div>
        <h4 className="experience-org">{experience.organization}</h4>
        <p className="experience-description">{experience.description}</p>
        <ul className="experience-highlights">
          {experience.highlights.map((highlight, idx) => (
            <li key={idx}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 11 12 14 22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              {highlight}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default ExperienceCard;
