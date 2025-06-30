import React from 'react';

const SidebarRight = () => (
  <aside className="sidebar-right">
    <div className="card">
      <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>Blog Posts</h3>
      <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
        <li>How I Built a Lyric Sync App</li>
        <li>Blending Tech and Tradition</li>
        <li>APIs With a Soul</li>
      </ul>
    </div>
    <div className="card">
      <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>Achievements</h3>
      <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
        <li><span className="badge">🏆</span> Top Backend Dev 2024</li>
        <li><span className="badge">🌟</span> Open Source Contributor</li>
      </ul>
    </div>
    <div className="card sidebar-widget">
      <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>GitHub Stats</h3>
      <div style={{ fontSize: 15, color: '#555', textAlign: 'center' }}>
        <span className="badge">⭐</span> 42 Repos<br />
        <span className="badge">🔗</span> 120+ Commits this year
      </div>
    </div>
  </aside>
);

export default SidebarRight; 