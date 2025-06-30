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
        <a href="/resume.pdf" download className="profile-resume-btn">
          Download Resume
        </a>
        <Link to="/" className="profile-back-btn">
          <FaArrowLeft style={{ marginRight: 6 }} /> Back to Portfolio
        </Link>
      </div>
      <div className="profile-socials-bottom">
        <a href="https://github.com/mwangiasford1" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/asfordmwang" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://www.facebook.com/Bro%20Richie%27s%20Richer" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
      </div>
    </div>
  );
} 