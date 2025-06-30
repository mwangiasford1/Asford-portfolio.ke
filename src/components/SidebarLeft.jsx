import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const SidebarLeft = () => (
  <aside className="sidebar-left">
    <div className="sidebar-bio-card">
      <img
        src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/500190982_4122371794686873_3495693403842944140_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHer_srndQuKwcYsDnq8MSB0a0-P1d4iU_RrT4_V3iJTyXiSa8Ge0R78gHf4zfSfpyaguZmyH5q1AW-ingI0sVH&_nc_ohc=VRUY0v8yuD8Q7kNvwFrJw3D&_nc_oc=AdkvotfR7E25lP44H_USWzu6LsQ3U5S5gJfhB_rv1e9HL_63jlTUz-xBBUaGnMboTp8&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=IMaHimqSIwHY8ZAR2opfDg&oh=00_AfOjQpv76Yob0SPxyZOa21gOuISWR4YL8njpAABlvj5lBQ&oe=68687268"
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
      <a href="/resume.pdf" download className="sidebar-resume-btn">
        <FaDownload style={{ marginRight: 6 }} /> Download Resume
      </a>
      <Link to="/profile" className="sidebar-resume-btn" style={{marginTop: 8, background: '#232946'}}>
        View Full Profile
      </Link>
      <Link to="/collaborators" className="sidebar-resume-btn" style={{marginTop: 8, background: '#6366f1'}}>
        Collaborators
      </Link>
    </div>
  </aside>
);

export default SidebarLeft; 