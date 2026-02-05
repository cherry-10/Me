import { useEffect, useRef, useState } from 'react';
import './GradientStats.css';

const GradientStats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    teams: 0,
    achievements: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { key: 'projects', label: 'Projects Completed', target: 17, suffix: '+' },
    { key: 'clients', label: 'Happy Clients', target: 5, suffix: '+' },
    { key: 'teams', label: 'Teams Served', target: 4, suffix: '' },
    { key: 'achievements', label: 'Achievements', target: 3, suffix: '' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach(stat => {
      let current = 0;
      const increment = stat.target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          setCounts(prev => ({ ...prev, [stat.key]: stat.target }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [stat.key]: Math.floor(current) }));
        }
      }, 30);
    });
  };

  return (
    <section ref={sectionRef} className="gradient-stats">
      <div className="stats-grid">
        {stats.map(stat => (
          <div key={stat.key} className="stat-card">
            <div className="stat-number">
              {counts[stat.key]}{stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GradientStats;
