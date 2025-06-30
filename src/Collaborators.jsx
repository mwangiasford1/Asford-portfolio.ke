import React from 'react';

const collaborators = [
  { name: 'Asford Mwangi', role: 'Backend Engineer', github: 'https://github.com/mwangiasford1', linkedin: 'https://www.linkedin.com/in/asfordmwang' },
  { name: 'Jane Doe', role: 'Frontend Developer', github: 'https://github.com/janedoe', linkedin: 'https://www.linkedin.com/in/janedoe' },
  { name: 'John Smith', role: 'UI/UX Designer', github: 'https://github.com/johnsmith', linkedin: 'https://www.linkedin.com/in/johnsmith' },
];

export default function Collaborators() {
  return (
    <div className="collaborators-page">
      <h2>Collaborators & Developers</h2>
      <ul className="collaborators-list">
        {collaborators.map((c, i) => (
          <li key={i} className="collaborator-item">
            <strong>{c.name}</strong> — {c.role}
            {c.github && (
              <a href={c.github} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 10 }}>GitHub</a>
            )}
            {c.linkedin && (
              <a href={c.linkedin} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 10 }}>LinkedIn</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
} 