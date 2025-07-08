import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const SidebarLeft = () => (
  <aside className="sidebar-left">
    <div className="sidebar-bio-card">
      <img
        src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-1/500190982_4122371794686873_3495693403842944140_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHer_srndQuKwcYsDnq8MSB0a0-P1d4iU_RrT4_V3iJTyXiSa8Ge0R78gHf4zfSfpyaguZmyH5q1AW-ingI0sVH&_nc_ohc=wC1XXDflguAQ7kNvwEsaKEz&_nc_oc=AdlBqAD3CW70M5IQnwEwesWQimbGosNtWPq_lgom9XS3BuhwcYBn9KHPWSqlPx7xvGA&_nc_zt=24&_nc_ht=scontent-mba2-1.xx&_nc_gid=rH-KR977-5gMLTdbw4sEtw&oh=00_AfQv212EsFh37K9H7YgwChnzFrEWyAAZVYqfce1ccub9Nw&oe=687327A6"
        alt="Asford Mwangi avatar"
        className="sidebar-profile-img"
      />
      <h3 className="sidebar-profile-name">Asford Mwangi</h3>
      <div className="sidebar-profile-title">Backend Engineer</div>
      <div className="sidebar-profile-divider"></div>
      <p className="sidebar-profile-bio">
        Culture-Driven Coder. Passionate about real-time tech, APIs, and creative coding.
      </p>
      <div className="sidebar-socials">
        <a href="https://github.com/mwangiasford1" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/asfordmwang" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://www.facebook.com/Bro%20Richie%27s%20Richer" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
      </div>
      <a href="/src/assets/resume/Asford%20Mwangi%20Resume.pdf" download className="sidebar-resume-btn">
        <FaDownload style={{ marginRight: 6 }} /> Download Resume
      </a>
      <Link to="/profile" className="sidebar-resume-btn" style={{marginTop: 8, background: '#232946'}}>
        View Full Profile
      </Link>
      <Link to="/collaborators" className="sidebar-resume-btn" style={{marginTop: 8, background: '#6366f1'}}>
        Collaborators
      </Link>
      <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
        <a
          href="/src/assets/resume/Asford%20Mwangi%20Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#6366f1',
            color: '#fff',
            padding: '0.6rem 1.5rem',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 16,
            textDecoration: 'none',
            boxShadow: '0 2px 8px #6366f133',
            transition: 'background 0.2s',
          }}
        >
          Download Resume
        </a>
      </div>
    </div>
  </aside>
);

export default SidebarLeft; 