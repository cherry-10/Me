import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <h2>D. Charan Teja</h2>
          </div>

          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={closeMenu}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" onClick={closeMenu}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/achievements" onClick={closeMenu}>
                Achievements
              </NavLink>
            </li>
            <li>
              <NavLink to="/certifications" onClick={closeMenu}>
                Certifications
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
