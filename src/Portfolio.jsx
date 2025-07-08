import React from 'react';
import './styles/Portfolio.css'; // Create a CSS file for styling
import Activities from './components/Activities';
import Topbar from './components/Topbar';
const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <Topbar />
            
            <header>
                <h1>Asford Mwangi</h1>
                <h2>Where Code Meets Culture: Crafting Expressive, Intelligent Experiences</h2>
                <p>Backend engineer weaving real-time technology with the rhythm of expression—from APIs to Kikuyu lyrics.</p>
            </header>
            
            <section id="about">
                <h2>About Me</h2>
                <p>I'm a software engineering student with a deep passion for backend development and intelligent systems. Whether it's syncing lyrics to vocals in real-time or building scalable APIs, I strive to create tools that are not only functional—but expressive.</p>
                <ul>
                    <li>Specialized in <strong>Node.js</strong>, <strong>Express</strong>, and <strong>React</strong></li>
                    <li>Real-time speech recognition & lyric alignment</li>
                    <li>Fluent in translating creativity into code</li>
                    <li>Currently building <strong>Vocal Sync</strong>: a lyric matching app honoring Kikuyu culture 🎤</li>
                </ul>
            </section>
            
            <section id="skills">
                <h2>Skills</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Tools / Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Backend</td>
                            <td>Node.js, Express.js, API Design, MongoDB</td>
                        </tr>
                        <tr>
                            <td>Frontend</td>
                            <td>React.js, Vite, Tailwind CSS</td>
                        </tr>
                        <tr>
                            <td>Real-Time Tech</td>
                            <td>Web Speech API, Socket.IO, Lyric Synchronization</td>
                        </tr>
                        <tr>
                            <td>Dev Tools</td>
                            <td>Git, VS Code, Postman, Docker</td>
                        </tr>
                        <tr>
                            <td>Cultural Integration</td>
                            <td>Kikuyu lyrics, Swahili fluency, Localization strategies</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section id="projects">
                <h2>🚀 Projects</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  gap: '2.8rem',
                  marginTop: '2.5rem',
                }}>
                  <div style={{
                    background: '#fff',
                    borderRadius: '18px',
                    boxShadow: '0 4px 24px #6366f133',
                    padding: '2.8rem 2.2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.04)';
                    e.currentTarget.style.boxShadow = '0 12px 40px #6366f144';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '0 4px 24px #6366f133';
                  }}>
                    <h3 style={{ marginBottom: 12, fontSize: '1.45rem' }}>barber_app</h3>
                    <p style={{ color: '#555', marginBottom: 22, fontSize: '1.08rem' }}>Barbershop management system for appointments, user roles, and services.</p>
                    <a href="https://github.com/mwangiasford1/barber_app.git" target="_blank" rel="noopener noreferrer" style={{
                      background: '#232946', color: '#fff', borderRadius: 10, padding: '0.7rem 1.5rem', fontWeight: 600, textDecoration: 'none',
                      fontSize: '1.08rem', transition: 'background 0.18s',
                    }}>View on GitHub</a>
                  </div>
                  <div style={{
                    background: '#fff',
                    borderRadius: '14px',
                    boxShadow: '0 2px 12px #6366f122',
                    padding: '2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 32px #6366f133';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '0 2px 12px #6366f122';
                  }}>
                    <h3 style={{ marginBottom: 8 }}>livestock_management_project-ME</h3>
                    <p style={{ color: '#555', marginBottom: 18 }}>Livestock management platform for tracking and managing farm animals.</p>
                    <a href="https://github.com/mwangiasford1/livestock_management_project-ME.git" target="_blank" rel="noopener noreferrer" style={{
                      background: '#232946', color: '#fff', borderRadius: 8, padding: '0.5rem 1.1rem', fontWeight: 500, textDecoration: 'none',
                      transition: 'background 0.18s',
                    }}>View on GitHub</a>
                  </div>
                  <div style={{
                    background: '#fff',
                    borderRadius: '14px',
                    boxShadow: '0 2px 12px #6366f122',
                    padding: '2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 32px #6366f133';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '0 2px 12px #6366f122';
                  }}>
                    <h3 style={{ marginBottom: 8 }}>parental-assistant-app</h3>
                    <p style={{ color: '#555', marginBottom: 18 }}>Parental assistant app for managing family tasks and reminders.</p>
                    <a href="https://github.com/mwangiasford1/parental-assistant-app.git" target="_blank" rel="noopener noreferrer" style={{
                      background: '#232946', color: '#fff', borderRadius: 8, padding: '0.5rem 1.1rem', fontWeight: 500, textDecoration: 'none',
                      transition: 'background 0.18s',
                    }}>View on GitHub</a>
                </div>
                  <div style={{
                    background: '#fff',
                    borderRadius: '14px',
                    boxShadow: '0 2px 12px #6366f122',
                    padding: '2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 32px #6366f133';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '0 2px 12px #6366f122';
                  }}>
                    <h3 style={{ marginBottom: 8 }}>PESANTE-ENTERPRICES</h3>
                    <p style={{ color: '#555', marginBottom: 18 }}>Business management system for PESANTE ENTERPRICES.</p>
                    <a href="https://github.com/mwangiasford1/PESANTE-ENTERPRICES.git" target="_blank" rel="noopener noreferrer" style={{
                      background: '#232946', color: '#fff', borderRadius: 8, padding: '0.5rem 1.1rem', fontWeight: 500, textDecoration: 'none',
                      transition: 'background 0.18s',
                    }}>View on GitHub</a>
                </div>
                  <div style={{
                    background: '#fff',
                    borderRadius: '14px',
                    boxShadow: '0 2px 12px #6366f122',
                    padding: '2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 32px #6366f133';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '0 2px 12px #6366f122';
                  }}>
                    <h3 style={{ marginBottom: 8 }}>ai-climate-app</h3>
                    <p style={{ color: '#555', marginBottom: 18 }}>AI-powered climate forecasting and analytics application.</p>
                    <a href="https://github.com/mwangiasford1/ai-climate-app.git" target="_blank" rel="noopener noreferrer" style={{
                      background: '#232946', color: '#fff', borderRadius: 8, padding: '0.5rem 1.1rem', fontWeight: 500, textDecoration: 'none',
                      transition: 'background 0.18s',
                    }}>View on GitHub</a>
                </div>
                </div>
            </section>

            <Activities />
            
            <section id="blog">
                <h2>Blog or Insights</h2>
                <ul>
                    <li>How I Built a Lyric Sync App From Scratch with Web Speech API</li>
                    <li>Blending Tech and Tradition: Why Kikuyu Lyrics Belong in Code</li>
                    <li>APIs With a Soul: Building Backend Systems That Express</li>
                </ul>
            </section>
            
            <footer id="contact">
                <h2>Contact</h2>
                <p>Let's create something expressive. You can reach me at <a href="mailto:your-email@example.com">your-email@example.com</a> or connect on <a href="#">LinkedIn</a> / <a href="#">GitHub</a>.</p>
            </footer>
        </div>
    );
};

export default Portfolio;