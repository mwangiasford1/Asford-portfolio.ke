import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} Asford Mwangi. All rights reserved.</span>
      <span className="footer-contact">
        <a href="tel:+254740953975" title="Call Asford Mwangi">+254740953975</a> |
        <a href="mailto:mwangiasford12@gmail.com" title="Email Asford Mwangi">mwangiasford12@gmail.com</a>
      </span>
      <span className="footer-socials">
        <a href="https://github.com/mwangiasford1" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/asfordmwang" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://www.facebook.com/Bro%20Richie%27s%20Richer" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
      </span>
    </div>
  </footer>
);

export default Footer; 