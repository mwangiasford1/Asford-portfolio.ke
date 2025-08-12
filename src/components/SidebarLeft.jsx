import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const SidebarLeft = () => (
  <aside className="sidebar-left">
    <div className="sidebar-bio-card">
      <img
        src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/518300583_4170082386582480_5398408323165624287_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE5m6HYVudqiRDvV7Dxhx22kR8cBdAOSHyRHxwF0A5IfLVmC2WDPeJhDkmpN1YwSKFsdsVqtNnZiTNJ0Og4Wopt&_nc_ohc=m7R4rUpIi-YQ7kNvwFkT0Ia&_nc_oc=AdniV61Q8C7lnJHbsn2p02AK2f2I5P8AXrcw2Hb4Az-cRpp9vTm7qKGDTnlMLkGysNs&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=HfHwD5PN9VYURWnn8Fj6GA&oh=00_AfUR2Muv6jBFys-bgNkWt8IIw7erfuQPr3IIGTGmnqdN-Q&oe=68A10EFB"
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
      <a href="/Asford-Mwangi-Resume.pdf" download className="sidebar-resume-btn">
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
          href="/Asford-Mwangi-Resume.pdf"
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