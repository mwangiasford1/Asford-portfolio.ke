import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'AI Climate App',
    description: 'AI-powered climate forecasting application using Flask, TensorFlow, and ERA5 climate data. Provides API endpoints for predictions, data retrieval, and health checks.',
    tech: 'Flask, Gunicorn, TensorFlow, Scikit-Learn, Pandas, Chart.js, Render',
    link: 'https://github.com/mwangiasford1/ai-climate-app.git',
    details: 'This project integrates machine learning with real climate data to provide actionable insights. Finalist at PLP Hackathon 2024.'
  },
  {
    title: 'Barber App',
    description: 'Barbershop Management System for appointments, user roles, and services. Features role-based access, appointment booking, AI assistant, and dashboard.',
    tech: 'Flask, SQLAlchemy, Flask-Login, MySQL',
    link: 'https://github.com/mwangiasford1/barber_app.git',
    details: 'Built for local businesses to manage bookings and staff efficiently. Includes AI assistant for customer queries.'
  },
  {
    title: 'Crypto Chatbot (PLP AI Assignment)',
    description: 'A Python-based crypto chatbot developed as part of a software tools assignment. (See repo for details.)',
    tech: 'Python',
    link: 'https://github.com/mwangiasford1/plp-ai-software-tools-assignment-week1-crypto_chatbot-.py.git',
    details: 'Analyzes currency trends and sentiment. Presented in the PLP AI Tools Challenge.'
  },
  {
    title: 'React Assignment',
    description: 'A React-based project for assignment work. (See repo for details.)',
    tech: 'React',
    link: 'https://github.com/mwangiasford1/REACT-ASSIGNMENT.git',
    details: 'Demonstrates proficiency in React fundamentals and component-based design.'
  },
];

const Projects = () => {
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase()) ||
    p.tech.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects">
      <h2></h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <FaSearch style={{ marginRight: 8, color: '#888' }} />
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '0.5rem 1rem', borderRadius: 8, border: '1px solid #ccc', width: 220 }}
        />
      </div>
      <div className="projects-grid">
        <AnimatePresence>
          {filtered.map((project, idx) => (
            <motion.div
              className="project-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #1877f220' }}
            >
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">{project.tech}</div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                <button className="project-link project-link-btn" onClick={() => setModal(project)}>
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {modal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#0008', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ background: '#fff', color: '#222', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 420, boxShadow: '0 8px 32px #0003', position: 'relative' }}
              onClick={e => e.stopPropagation()}
            >
              <h3 style={{ marginTop: 0 }}>{modal.title}</h3>
              <p>{modal.details}</p>
              <a href={modal.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1877f2', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <FaGithub /> GitHub Repo
              </a>
              <button onClick={() => setModal(null)} style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }}>&times;</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
