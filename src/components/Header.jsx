import React, { useEffect, useState } from 'react';
import './Header.css'; // Optional if you want to isolate header styles

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 10) {
            setVisible(true);
          } else if (window.scrollY > lastScrollY) {
            setVisible(false); // scrolling down
          } else {
            setVisible(true); // scrolling up
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header${visible ? ' show' : ' hide'}`}>
      <h1 className="logo">Asford Mwangi</h1>
      <p className="subtitle">Software Engineer · Backend Specialist · Culture-Driven Coder</p>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
