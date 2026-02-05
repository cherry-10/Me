import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const liveProjects = projects.filter(p => p.category === 'live');
  const analyticsProjects = projects.filter(p => p.category === 'analytics');
  const engineeringProjects = projects.filter(p => p.category === 'engineering');

  const getFilteredProjects = () => {
    if (filter === 'all') return projects;
    return projects.filter(p => p.category === filter);
  };

  return (
    <div className="projects-page page-container">
      <div className="container">
        <h1 className="section-title">Projects Portfolio</h1>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'live' ? 'active' : ''}`}
            onClick={() => setFilter('live')}
          >
            Live Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'analytics' ? 'active' : ''}`}
            onClick={() => setFilter('analytics')}
          >
            Data & BI
          </button>
          <button 
            className={`filter-btn ${filter === 'engineering' ? 'active' : ''}`}
            onClick={() => setFilter('engineering')}
          >
            Engineering
          </button>
        </div>

        {filter === 'all' && (
          <>
            <section className="projects-section">
              <h2 className="category-title">
                <span className="title-icon">🚀</span>
                Live Projects
              </h2>
              <div className="projects-grid">
                {liveProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            <section className="projects-section">
              <h2 className="category-title">
                <span className="title-icon">📊</span>
                Data Analytics & BI
              </h2>
              <div className="projects-grid">
                {analyticsProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            <section className="projects-section">
              <h2 className="category-title">
                <span className="title-icon">⚙️</span>
                Data Engineering & Advanced
              </h2>
              <div className="projects-grid">
                {engineeringProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          </>
        )}

        {filter !== 'all' && (
          <div className="projects-grid">
            {getFilteredProjects().map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="projects-footer">
          <p>
            More projects and contributions available on{' '}
            <a 
              href="https://github.com/cherry-10/"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
