import React from 'react';
import { useNavigate } from 'react-router-dom';

const collaborators = [
  { name: 'Asford Mwangi', role: 'Backend Engineer', github: 'https://github.com/mwangiasford1', linkedin: 'https://www.linkedin.com/in/asfordmwang' },
  { name: 'Jane Doe', role: 'Frontend Developer', github: 'https://github.com/janedoe', linkedin: 'https://www.linkedin.com/in/janedoe' },
  { name: 'John Smith', role: 'UI/UX Designer', github: 'https://github.com/johnsmith', linkedin: 'https://www.linkedin.com/in/johnsmith' },
];

export default function Collaborators() {
  const navigate = useNavigate();
  return (
    <div className="collaborators-page">
      <button
        className="profile-back-btn"
        style={{ marginBottom: '1.5rem' }}
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Collaborators & Developers</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
        {collaborators.map((c, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #6366f122', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
            <strong style={{ fontSize: '1.15rem', marginBottom: 4 }}>{c.name}</strong>
            <span style={{ color: '#6366f1', fontWeight: 500, marginBottom: 8 }}>{c.role}</span>
            <div style={{ display: 'flex', gap: 12 }}>
              {c.github && (
                <a href={c.github} target="_blank" rel="noopener noreferrer" style={{ color: '#232946', fontWeight: 500, textDecoration: 'none' }}>GitHub</a>
              )}
              {c.linkedin && (
                <a href={c.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'none' }}>LinkedIn</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 