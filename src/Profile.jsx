import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/500190982_4122371794686873_3495693403842944140_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHer_srndQuKwcYsDnq8MSB0a0-P1d4iU_RrT4_V3iJTyXiSa8Ge0R78gHf4zfSfpyaguZmyH5q1AW-ingI0sVH&_nc_ohc=VRUY0v8yuD8Q7kNvwFrJw3D&_nc_oc=AdkvotfR7E25lP44H_USWzu6LsQ3U5S5gJfhB_rv1e9HL_63jlTUz-xBBUaGnMboTp8&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=IMaHimqSIwHY8ZAR2opfDg&oh=00_AfOjQpv76Yob0SPxyZOa21gOuISWR4YL8njpAABlvj5lBQ&oe=68687268"
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
        <Link to="/" className="profile-back">
          <FaArrowLeft style={{ marginRight: 6 }} /> Back to Portfolio
        </Link>
        <div style={{ margin: '2rem 0', textAlign: 'center' }}>
          <iframe
            src="/src/assets/resume/Asford%20Mwangi%20Resume.pdf"
            title="Asford Mwangi Resume"
            width="100%"
            height="600px"
            style={{ border: '1px solid #eee', borderRadius: 8 }}
          />
          <a
            href="/src/assets/resume/Asford%20Mwangi%20Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 16,
              background: '#6366f1',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 18,
              textDecoration: 'none',
              boxShadow: '0 2px 8px #6366f133',
              transition: 'background 0.2s',
            }}
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
      <div className="profile-socials-bottom">
        <a href="https://github.com/mwangiasford1" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/asfordmwang" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://www.facebook.com/Bro%20Richie%27s%20Richer" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
      </div>
    </div>
  );
} 