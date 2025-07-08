import React from 'react';

const Activities = () => (
  <section id="activities" className="section-fade" style={{
    background: 'linear-gradient(90deg, #e0e7ff 0%, #f3f4f6 100%)',
    border: '2px solid #6366f1',
    borderRadius: '12px',
    margin: '2.5rem 0',
    padding: '2.5rem 1.5rem',
    boxShadow: '0 4px 24px #6366f133',
  }}>
    <h2 style={{ fontSize: '2.2rem', color: '#3730a3', marginBottom: '1.5rem', textAlign: 'center' }}>Activities & Achievements</h2>
    <ul style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
      <li>
        <strong>💡 PLP Hackathon (2025)</strong> — Collaborated on an AI-powered climate forecasting app using Flask, TensorFlow, and ERA5 datasets. Finalist team.
      </li>
      <li>
        <strong>🧠 AI Tools Challenge</strong> — Built a crypto chatbot that analyzed currency trends and sentiment. Presented as part of a PLP AI module.
      </li>
      <li>
        <strong>🎤 FlutterFest Culture Edition (2025)</strong> — Showcased <em>Vocal Sync</em> as a cultural-tech showcase. Highlighted real-time lyric synchronization in Kikuyu.
      </li>
      <li>
        <strong>👥 GitHub Open Source Contributor</strong> — Participated in collaborative debugging for open real-time visualization tools. Merged localization PRs.
      </li>
      <li>
        <strong>📚 Student Mentor</strong> — Supported junior peers in setting up their first full-stack portfolio deployments with React + Node.js.
      </li>
    </ul>
  </section>
);

export default Activities; 