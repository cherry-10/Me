import Card from '../Card/Card';
import './AchievementCard.css';

const AchievementCard = ({ achievement }) => {
  return (
    <Card className="achievement-card">
      <div className="achievement-icon-wrapper">
        {achievement.icon}
      </div>
      <h3>{achievement.title}</h3>
      <p className="achievement-description">{achievement.description}</p>
      <p className="achievement-details">{achievement.details}</p>
    </Card>
  );
};

export default AchievementCard;
