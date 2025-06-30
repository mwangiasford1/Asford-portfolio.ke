import React from 'react';
import { FaUser, FaTools, FaFolderOpen, FaAward, FaEnvelope } from 'react-icons/fa';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Activities from './Activities';
import Contact from './Contact';
import Collaborators from '../Collaborators';

const MainFeed = () => (
  <main className="main-feed">
    <div className="card">
      <h2 className="card-title"><FaUser style={{ marginRight: 10, color: '#6366f1' }} />About Me</h2>
      <hr className="card-divider" />
      <About />
    </div>
    <div className="card">
      <h2 className="card-title"><FaTools style={{ marginRight: 10, color: '#fbbf24' }} />Skills</h2>
      <hr className="card-divider" />
      <Skills />
    </div>
    <div className="card">
      <h2 className="card-title"><FaFolderOpen style={{ marginRight: 10, color: '#34d399' }} />Projects</h2>
      <hr className="card-divider" />
      <Projects />
    </div>
    <div className="card">
      <h2 className="card-title"><FaAward style={{ marginRight: 10, color: '#f472b6' }} />Events & Achievements</h2>
      <hr className="card-divider" />
      <Activities />
    </div>
    <div className="card">
      <h2 className="card-title"><FaEnvelope style={{ marginRight: 10, color: '#60a5fa' }} />Contact</h2>
      <hr className="card-divider" />
      <Contact />
    </div>
    <div className="card">
      <h2 className="card-title">Collaborators & Developers</h2>
      <hr className="card-divider" />
      <Collaborators />
    </div>
  </main>
);

export default MainFeed; 