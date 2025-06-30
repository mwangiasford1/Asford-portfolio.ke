import React, { useState, useEffect } from 'react';

const initialCollaborators = [
  { name: 'Asford Mwangi', role: 'Backend Engineer', github: 'https://github.com/mwangiasford1', linkedin: 'https://www.linkedin.com/in/asfordmwang' },
  { name: 'Jane Doe', role: 'Frontend Developer', github: 'https://github.com/janedoe', linkedin: 'https://www.linkedin.com/in/janedoe' },
  { name: 'John Smith', role: 'UI/UX Designer', github: 'https://github.com/johnsmith', linkedin: 'https://www.linkedin.com/in/johnsmith' },
];

const ADMIN_USER = 'mwangi';
const ADMIN_PASS = 'Asford254';

function getStoredCollaborators() {
  const stored = localStorage.getItem('collaborators');
  return stored ? JSON.parse(stored) : initialCollaborators;
}

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [collaborators, setCollaborators] = useState(getStoredCollaborators());
  const [newCol, setNewCol] = useState({ name: '', role: '', github: '', linkedin: '' });
  const [editIdx, setEditIdx] = useState(null);
  const [editCol, setEditCol] = useState({ name: '', role: '', github: '', linkedin: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [loadingSubs, setLoadingSubs] = useState(false);
  const [replyIdx, setReplyIdx] = useState(null);
  const [replyMsg, setReplyMsg] = useState('');
  const [replyLoading, setReplyLoading] = useState(false);
  const [replySuccess, setReplySuccess] = useState('');
  const [replyError, setReplyError] = useState('');

  useEffect(() => {
    localStorage.setItem('collaborators', JSON.stringify(collaborators));
  }, [collaborators]);

  useEffect(() => {
    if (loggedIn) {
      setLoadingSubs(true);
      fetch('/api/contact-submissions')
        .then(res => res.json())
        .then(data => setSubmissions(data.reverse()))
        .catch(() => setSubmissions([]))
        .finally(() => setLoadingSubs(false));
    }
  }, [loggedIn]);

  const handleLogin = e => {
    e.preventDefault();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleAdd = e => {
    e.preventDefault();
    if (!newCol.name || !newCol.role) return setError('Name and role required');
    setCollaborators([...collaborators, newCol]);
    setNewCol({ name: '', role: '', github: '', linkedin: '' });
    setSuccess('Collaborator added!');
    setError('');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleRemove = idx => {
    if (!window.confirm('Remove this collaborator?')) return;
    setCollaborators(collaborators.filter((_, i) => i !== idx));
    setSuccess('Collaborator removed.');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleEdit = idx => {
    setEditIdx(idx);
    setEditCol(collaborators[idx]);
  };

  const handleEditSave = idx => {
    if (!editCol.name || !editCol.role) return setError('Name and role required');
    setCollaborators(collaborators.map((c, i) => (i === idx ? editCol : c)));
    setEditIdx(null);
    setSuccess('Collaborator updated!');
    setError('');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser('');
    setPass('');
  };

  const handleReply = idx => {
    setReplyIdx(idx);
    setReplyMsg('');
    setReplySuccess('');
    setReplyError('');
  };

  const sendReply = async (to, subject) => {
    setReplyLoading(true);
    setReplySuccess('');
    setReplyError('');
    try {
      const res = await fetch('/api/contact-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, message: replyMsg }),
      });
      const data = await res.json();
      if (data.success) {
        setReplySuccess('Reply sent!');
        setReplyIdx(null);
      } else {
        setReplyError(data.error || 'Failed to send reply.');
      }
    } catch {
      setReplyError('Failed to send reply.');
    }
    setReplyLoading(false);
  };

  if (!loggedIn) {
    return (
      <div className="admin-login" style={{ maxWidth: 340, margin: '4rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #6366f122', padding: '2.5rem 2rem' }}>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input type="text" placeholder="Username" value={user} onChange={e => setUser(e.target.value)} required />
          <input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required />
          <button type="submit">Login</button>
          {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
        </form>
      </div>
    );
  }

  return (
    <div className="admin-dashboard" style={{ maxWidth: 700, margin: '3rem auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #6366f122', padding: '2.5rem 2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <h2>Collaborators Admin</h2>
        <button onClick={handleLogout} style={{ background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6, padding: '0.4rem 1.1rem', cursor: 'pointer' }}>Logout</button>
      </div>
      <form onSubmit={handleAdd} style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
        <input type="text" placeholder="Name" value={newCol.name} onChange={e => setNewCol({ ...newCol, name: e.target.value })} required />
        <input type="text" placeholder="Role" value={newCol.role} onChange={e => setNewCol({ ...newCol, role: e.target.value })} required />
        <input type="url" placeholder="GitHub" value={newCol.github} onChange={e => setNewCol({ ...newCol, github: e.target.value })} />
        <input type="url" placeholder="LinkedIn" value={newCol.linkedin} onChange={e => setNewCol({ ...newCol, linkedin: e.target.value })} />
        <button type="submit">Add</button>
      </form>
      {success && <div style={{ color: 'green', marginBottom: 10 }}>{success}</div>}
      {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {collaborators.map((c, i) => (
          <li key={i} style={{ marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
            {editIdx === i ? (
              <>
                <input type="text" value={editCol.name} onChange={e => setEditCol({ ...editCol, name: e.target.value })} style={{ width: 120 }} />
                <input type="text" value={editCol.role} onChange={e => setEditCol({ ...editCol, role: e.target.value })} style={{ width: 120 }} />
                <input type="url" value={editCol.github} onChange={e => setEditCol({ ...editCol, github: e.target.value })} style={{ width: 120 }} />
                <input type="url" value={editCol.linkedin} onChange={e => setEditCol({ ...editCol, linkedin: e.target.value })} style={{ width: 120 }} />
                <button onClick={() => handleEditSave(i)} style={{ color: '#fff', background: '#10b981', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Save</button>
                <button onClick={() => setEditIdx(null)} style={{ color: '#fff', background: '#aaa', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Cancel</button>
              </>
            ) : (
              <>
                <span><strong>{c.name}</strong> — {c.role}</span>
                {c.github && <a href={c.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                {c.linkedin && <a href={c.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                <button onClick={() => handleEdit(i)} style={{ color: '#fff', background: '#6366f1', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => handleRemove(i)} style={{ color: '#fff', background: '#e74c3c', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <h2 style={{ marginTop: 40 }}>Contact Submissions</h2>
      {loadingSubs ? <div>Loading...</div> : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 12 }}>
          <thead>
            <tr style={{ background: '#f3f4f6' }}>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Name</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Email</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Message</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Date</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Reply</th>
            </tr>
          </thead>
          <tbody>
            {submissions.length === 0 && (
              <tr><td colSpan={5} style={{ textAlign: 'center', padding: 16 }}>No submissions yet.</td></tr>
            )}
            {submissions.map((s, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8 }}>{s.name}</td>
                <td style={{ padding: 8 }}><a href={`mailto:${s.email}`}>{s.email}</a></td>
                <td style={{ padding: 8, maxWidth: 180, wordBreak: 'break-word' }}>{s.message}</td>
                <td style={{ padding: 8, fontSize: 13 }}>{new Date(s.date).toLocaleString()}</td>
                <td style={{ padding: 8 }}>
                  {replyIdx === i ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <input type="text" value={`Re: Portfolio Contact`} disabled style={{ fontSize: 13, marginBottom: 4 }} />
                      <textarea value={replyMsg} onChange={e => setReplyMsg(e.target.value)} placeholder="Your reply..." rows={2} style={{ fontSize: 13 }} />
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button onClick={() => sendReply(s.email, `Re: Portfolio Contact`)} disabled={replyLoading || !replyMsg} style={{ background: '#10b981', color: '#fff', border: 'none', borderRadius: 6, padding: '0.2rem 0.7rem', fontSize: 13 }}>Send</button>
                        <button onClick={() => setReplyIdx(null)} style={{ background: '#aaa', color: '#fff', border: 'none', borderRadius: 6, padding: '0.2rem 0.7rem', fontSize: 13 }}>Cancel</button>
                      </div>
                      {replySuccess && <div style={{ color: 'green', fontSize: 13 }}>{replySuccess}</div>}
                      {replyError && <div style={{ color: 'red', fontSize: 13 }}>{replyError}</div>}
                    </div>
                  ) : (
                    <button onClick={() => handleReply(i)} style={{ background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6, padding: '0.2rem 0.7rem', fontSize: 13 }}>Reply</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 