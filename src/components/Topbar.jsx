import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'activities', label: 'Events' },
  { id: 'contact', label: 'Contact' },
];

const Topbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = useState('about');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      let current = 'about';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="topbar">
      <div className="topbar-links nav-main">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={active === section.id ? 'active' : ''}
            onClick={e => {
              e.preventDefault();
              handleNavClick(section.id);
            }}
          >
            {section.label}
          </a>
        ))}
        <Link to="/collaborators" className="nav-link-collaborators">Collaborators</Link>
      </div>
      <div className="topbar-divider"></div>
      <div className="topbar-logo" style={{ display: 'flex', alignItems: 'center', gap: 18, minWidth: 250 }}>
        <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: 1 }}>Asford Mwangi</span>
      </div>
      {location.pathname !== '/profile' && (
        <div className="topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 22,
              cursor: 'pointer',
              color: theme === 'dark' ? '#ffe066' : '#222',
              transition: 'color 0.2s',
            }}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <a href="https://github.com/mwangiasford1" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: '#222', fontSize: 20 }}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/asfordmwang" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: '#2563eb', fontSize: 20 }}><FaLinkedin /></a>
          <a href="https://www.facebook.com/Bro%20Richie%27s%20Richer" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ color: '#1877f2', fontSize: 20 }}><FaFacebook /></a>
        </div>
      )}
    </nav>
  );
};

export default Topbar; 