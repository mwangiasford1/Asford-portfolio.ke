import React from 'react';
import './Portfolio.css'; // Create a CSS file for styling
const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <span>AM</span>
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            
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
                <h2>🚀 All Projects</h2>
                <div className="project">
                    <h3>🎧 Vocal Sync</h3>
                    <p><strong>Real-Time Lyric Synchronization App</strong></p>
                    <p>A React-based app that syncs spoken or sung lyrics with preloaded Kikuyu text in real time using the Web Speech API.</p>
                    <ul>
                        <li><strong>Stack:</strong> React, Vite, Web Speech API, Tailwind, Node.js, Express, MongoDB</li>
                        <li><strong>Highlights:</strong>
                            <ul>
                                <li>Accuracy scoring and word-by-word matching</li>
                                <li>Custom lyric editor with live visualization</li>
                                <li>Gentle backend support for alignment via Docker</li>
                            </ul>
                        </li>
                        <li><strong>Impact:</strong> Preserves and promotes Kikuyu language through interactive tech</li>
                    </ul>
                    <p>🔗 <a href="#">Demo Link</a> · 📦 <a href="#">GitHub Repo</a></p>
                </div>
                
                <div className="project">
                    <h3>🧪 Accuracy Scorer API</h3>
                    <p><strong>A Scoring Microservice</strong></p>
                    <p>Backend API that evaluates how closely user speech aligns with loaded lyrics.</p>
                    <ul>
                        <li><strong>Stack:</strong> Node.js, Express.js</li>
                        <li><strong>Highlights:</strong>
                            <ul>
                                <li>Returns alignment scores with detailed feedback</li>
                                <li>Designed to plug into Vocal Sync or similar tools</li>
                            </ul>
                        </li>
                        <li><strong>Purpose:</strong> Provide feedback to enhance pronunciation and lyric mastery</li>
                    </ul>
                    <p>🔗 <a href="#">GitHub Repo</a> · 🧪 <a href="#">API Docs</a></p>
                </div>
                
                <div className="project">
                    <h3>✍️ Kikuyu Lyric Formatter</h3>
                    <p><strong>A Lightweight Preparation Tool</strong></p>
                    <p>CLI or web-based tool that converts Kikuyu lyrics into structured JSON chunks, prepped for real-time rendering and highlighting.</p>
                    <ul>
                        <li><strong>Stack:</strong> JavaScript / Python</li>
                        <li><strong>Features:</strong>
                            <ul>
                                <li>Verse segmentation, normalization</li>
                                <li>Supports tone markers and accent-sensitive parsing</li>
                            </ul>
                        </li>
                        <li><strong>Use case:</strong> Streamlined prep for apps like Vocal Sync</li>
                    </ul>
                    <p>🔗 <a href="#">GitHub Repo</a></p>
                </div>
                
                <div className="project">
                    <h3>🌐 Cultural Speech Visualizer (Concept Prototype)</h3>
                    <p><strong>Visual Feedback for Language Learning</strong></p>
                    <p>Prototype that visually represents Kikuyu vowel strength and pitch while speaking, inspired by spectrograms and karaoke visuals.</p>
                    <ul>
                        <li><strong>Stack:</strong> Web Audio API, React, Canvas</li>
                        <li><strong>Goal:</strong> Foster learning and engagement through culturally aware UI</li>
                        <li><strong>Status:</strong> In design phase</li>
                    </ul>
                    <p>💡 Looking to explore tone-specific speech recognition</p>
                </div>
            </section>
            
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