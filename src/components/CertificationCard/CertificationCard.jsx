import Card from '../Card/Card';
import './CertificationCard.css';

const CertificationCard = ({ certification }) => {
  return (
    <Card className="certification-card">
      <div className="certification-header">
        <div className="certification-badge">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
        </div>
        <h3>{certification.title}</h3>
      </div>
      <div className="certification-meta">
        <span className="certification-issuer">{certification.issuer}</span>
        <span className="certification-date">{certification.date}</span>
      </div>
      <p className="certification-description">{certification.description}</p>
    </Card>
  );
};

export default CertificationCard;
