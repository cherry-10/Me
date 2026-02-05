import Card from '../Card/Card';
import './AboutCard.css';

const AboutCard = () => {
  return (
    <Card className="about-card">
      <h3>About Me</h3>
      <p>
        I am a results-driven Data Analyst with hands-on experience in transforming raw data into meaningful 
        insights that support strategic business decisions. My expertise includes data cleaning, exploratory 
        data analysis, data modeling, dashboard development, and automated reporting.
      </p>
      <p>
        I have collaborated with stakeholders to gather requirements, translate business problems into 
        analytical solutions, and deliver client-ready dashboards and reports. I also bring strong leadership 
        experience, having led international internship teams and development teams across analytics and web projects.
      </p>
      <p>
        I am passionate about data storytelling, building intuitive dashboards, and creating scalable analytics 
        solutions. I actively share analytics knowledge through LinkedIn and continuously upskill to stay aligned 
        with industry trends.
      </p>
    </Card>
  );
};

export default AboutCard;
