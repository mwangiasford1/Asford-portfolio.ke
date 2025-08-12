import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaFacebook, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'activities', label: 'Activities' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Topbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
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
      {/* Hamburger for mobile */}
      <button
        className="hamburger-btn"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: 28,
          cursor: 'pointer',
          position: 'absolute',
          left: 18,
          top: 18,
          zIndex: 1200,
        }}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>
      {/* Overlay menu */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 32,
              position: 'absolute',
              top: 24,
              right: 28,
              cursor: 'pointer',
            }}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <Link to="/profile" onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontSize: 24, margin: 18, display: 'flex', alignItems: 'center', gap: 10 }}>Profile</Link>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={e => {
                e.preventDefault();
                setMenuOpen(false);
                handleNavClick(section.id);
              }}
              style={{ color: '#fff', fontSize: 22, margin: 14 }}
            >
              {section.label}
            </a>
          ))}
          <Link to="/collaborators" onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontSize: 22, margin: 14 }}>Collaborators</Link>
        </div>
      )}
      {/* Desktop nav */}
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
        <Link to="/profile" className="nav-link-profile">Profile</Link>
        <Link to="/collaborators" className="nav-link-collaborators">Collaborators</Link>
      </div>
      <div className="topbar-divider"></div>
      <div className="topbar-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, minWidth: 250 }}>
        <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} className="animated-logo">
          {"Asford Mwangi".split("").map((char, idx) => (
            <span key={idx} className="logo-letter" style={{ animationDelay: `${0.4 + idx * 0.12}s` }}>{char === ' ' ? '\u00A0' : char}</span>
          ))}
          <span className="logo-cursor">|</span>
        </span>
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