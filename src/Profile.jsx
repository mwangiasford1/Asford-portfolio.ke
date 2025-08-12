import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowLeft, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/518300583_4170082386582480_5398408323165624287_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE5m6HYVudqiRDvV7Dxhx22kR8cBdAOSHyRHxwF0A5IfLVmC2WDPeJhDkmpN1YwSKFsdsVqtNnZiTNJ0Og4Wopt&_nc_ohc=m7R4rUpIi-YQ7kNvwFkT0Ia&_nc_oc=AdniV61Q8C7lnJHbsn2p02AK2f2I5P8AXrcw2Hb4Az-cRpp9vTm7qKGDTnlMLkGysNs&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=HfHwD5PN9VYURWnn8Fj6GA&oh=00_AfUR2Muv6jBFys-bgNkWt8IIw7erfuQPr3IIGTGmnqdN-Q&oe=68A10EFB"
          alt="Asford Mwangi avatar"
          className="profile-img-large"
        />
        <h1 className="profile-name">Asford Mwangi</h1>
        <div className="profile-title">Backend Engineer</div>
        <div className="profile-divider"></div>
        <p className="profile-bio">
          Culture-Driven Coder. Passionate about real-time tech, APIs, and creative coding.<br/>
          Experienced in Node.js, Python, and cloud platforms. Loves building scalable systems and collaborating with creative teams.
        </p>
        <div className="profile-socials">
          <a href="https://github.com/mwangiasford1" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/asfordmwang" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
          <a href="https://www.facebook.com/Bro%20Richie%27s%20Richer" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
        </div>
        <div style={{ margin: '2rem 0 1rem 0', width: '100%' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 12 }}>Resume</h2>
          <a href="/Asford-Mwangi-Resume.pdf" download className="profile-resume-btn">
            <FaDownload style={{ marginRight: 8 }} /> Download Resume
          </a>
        </div>
        <Link to="/" className="profile-back">
          <FaArrowLeft style={{ marginRight: 6 }} /> Back to Portfolio
        </Link>
      </div>
    </div>
  );
} 