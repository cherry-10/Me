import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './PillNavbar.css';

const PillNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/certifications', label: 'Certifications' }
  ];

  return (
    <nav className="pill-navbar">
      <div className="pill-container">
        <button 
          className="pill-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {isOpen && (
          <div 
            className="menu-overlay" 
            onClick={() => setIsOpen(false)}
          />
        )}

        <div className={`pill-nav-items ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `pill-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="nav-label">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PillNavbar;
