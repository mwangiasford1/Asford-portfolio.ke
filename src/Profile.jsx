import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowLeft, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-1/500190982_4122371794686873_3495693403842944140_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHer_srndQuKwcYsDnq8MSB0a0-P1d4iU_RrT4_V3iJTyXiSa8Ge0R78gHf4zfSfpyaguZmyH5q1AW-ingI0sVH&_nc_ohc=wC1XXDflguAQ7kNvwEsaKEz&_nc_oc=AdlBqAD3CW70M5IQnwEwesWQimbGosNtWPq_lgom9XS3BuhwcYBn9KHPWSqlPx7xvGA&_nc_zt=24&_nc_ht=scontent-mba2-1.xx&_nc_gid=rH-KR977-5gMLTdbw4sEtw&oh=00_AfQv212EsFh37K9H7YgwChnzFrEWyAAZVYqfce1ccub9Nw&oe=687327A6"
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
          <a href="/src/assets/resume/Asford%20Mwangi%20Resume.pdf" download className="profile-resume-btn">
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