import React from 'react';
import Topbar from './components/Topbar';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff' }}>
      <Topbar />
      <section style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        minHeight: '80vh', textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em', animation: 'fadeInUp 1s' }}>
          Welcome to Asford Mwangi's Portfolio
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: 32, maxWidth: 600, opacity: 0.95, animation: 'fadeInUp 1.5s' }}>
          Where code meets culture. Explore my work in backend engineering, real-time tech, and creative projects blending tradition and technology.
        </h2>
        <Link to="/profile" style={{
          background: '#fff', color: '#6366f1', fontWeight: 700, fontSize: '1.2rem',
          padding: '0.9rem 2.2rem', borderRadius: 12, textDecoration: 'none',
          boxShadow: '0 4px 24px #6366f133', transition: 'background 0.2s, color 0.2s',
        }}
        >
          View My Profile
        </Link>
      </section>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
