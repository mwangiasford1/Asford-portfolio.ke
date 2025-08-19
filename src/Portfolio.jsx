import React from 'react';
import './styles/Portfolio.css'; // Create a CSS file for styling
import Activities from './components/Activities';
import Contact from './components/Contact';
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* Project Card Example */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <h3 className="mb-3 text-xl font-semibold">barber_app</h3>
            <p className="text-gray-700 mb-5 text-base">Barbershop management system for appointments, user roles, and services.</p>
            <a href="https://github.com/mwangiasford1/barber_app.git" target="_blank" rel="noopener noreferrer"
                className="bg-gray-900 text-white rounded-lg px-4 py-2 font-semibold text-base hover:bg-gray-700 transition">
                View on GitHub
            </a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <h3 className="mb-3 text-xl font-semibold">livestock_management_project-ME</h3>
            <p className="text-gray-700 mb-5 text-base">Livestock management platform for tracking and managing farm animals.</p>
            <a href="https://github.com/mwangiasford1/livestock_management_project-ME.git" target="_blank" rel="noopener noreferrer"
                className="bg-gray-900 text-white rounded-lg px-4 py-2 font-semibold text-base hover:bg-gray-700 transition">
                View on GitHub
            </a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <h3 className="mb-3 text-xl font-semibold">parental-assistant-app</h3>
            <p className="text-gray-700 mb-5 text-base">Parental assistant app for managing family tasks and reminders.</p>
            <a href="https://github.com/mwangiasford1/parental-assistant-app.git" target="_blank" rel="noopener noreferrer"
                className="bg-gray-900 text-white rounded-lg px-4 py-2 font-semibold text-base hover:bg-gray-700 transition">
                View on GitHub
            </a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <h3 className="mb-3 text-xl font-semibold">PESANTE-ENTERPRICES</h3>
            <p className="text-gray-700 mb-5 text-base">Business management system for PESANTE ENTERPRICES.</p>
            <div className="flex gap-2 flex-wrap">
                <a href="https://pesante-enterprices-main-1.onrender.com/" target="_blank" rel="noopener noreferrer"
                    className="bg-green-600 text-white rounded-lg px-4 py-2 font-semibold text-base hover:bg-green-500 transition">
                    Live Demo
                </a>
                <a href="https://github.com/mwangiasford1/PESANTE-ENTERPRICES.git" target="_blank" rel="noopener noreferrer"
                    className="bg-gray-900 text-white rounded-lg px-4 py-2 font-semibold text-base hover:bg-gray-700 transition">
                    View on GitHub
                </a>
            </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <h3 className="mb-3 text-xl font-semibold">ai-climate-app</h3>
            <p className="text-gray-700 mb-5 text-base">AI-powered climate forecasting and analytics application.</p>
            <a href="https://github.com/mwangiasford1/ai-climate-app.git" target="_blank" rel="noopener noreferrer"
                className="bg-gray-900 text-white rounded-lg px-4 py-2 font-semibold text-base hover:bg-gray-700 transition">
                View on GitHub
            </a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <h3 className="mb-3 text-xl font-semibold">Smart File Manager</h3>
            <p className="text-gray-700 mb-5 text-base">Automated file organization tool for managing and sorting files efficiently.</p>
            <div className="flex gap-2 flex-wrap">
                <a href="https://smart-file-manager-6tqp.onrender.com" target="_blank" rel="noopener noreferrer"
                    className="bg-green-600 text-white rounded-lg px-4 py-2 font-semibold text-base hover:bg-green-500 transition">
                    Live Demo
                </a>
                <a href="https://github.com/mwangiasford1/file_manager.git" target="_blank" rel="noopener noreferrer"
                    className="bg-gray-900 text-white rounded-lg px-4 py-2 font-semibold text-base hover:bg-gray-700 transition">
                    View on GitHub
                </a>
            </div>
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
            
            <Contact />
            
            <footer>
    <h2>Let's Connect</h2>
    <p>Let's create something expressive together!</p>
    <div className="flex flex-col gap-4 items-center mt-8">
        <p><strong>Email:</strong> <a href="mailto:asfordmwangi@gmail.com">asfordmwangi@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+254740953975">+254 740 953 975</a></p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
        <div className="flex gap-8 mt-4 flex-wrap justify-center">
            <a href="https://github.com/mwangiasford1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/asfordmwang" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/Bro%20Richie%27s%20Richer" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
    </div>
</footer>
        </div>
    );
};

export default Portfolio;