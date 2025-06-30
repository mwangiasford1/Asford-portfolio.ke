import React from 'react';

const Layout = ({ children, RightSidebar }) => (
  <div className="fb-root">
    {/* Top Navigation Bar */}
    <nav className="fb-navbar">
      <div className="fb-navbar-logo">Asford Mwangi</div>
      <ul className="fb-navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    {/* Main Layout */}
    <div className="fb-layout">
      {/* Left Sidebar */}
      <aside className="fb-sidebar-left">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </aside>
      {/* Center Content */}
      <main className="fb-main-content">
        {children}
      </main>
      {/* Right Sidebar */}
      <aside className="fb-sidebar-right">
        {RightSidebar ? <RightSidebar /> : null}
      </aside>
    </div>
  </div>
);

export default Layout; 