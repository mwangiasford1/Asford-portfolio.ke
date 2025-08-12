import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const initialCollaborators = [
  { name: 'Asford Mwangi', role: 'Backend Engineer', github: 'https://github.com/mwangiasford1', linkedin: 'https://www.linkedin.com/in/asfordmwang' },
  { name: 'Jane Doe', role: 'Frontend Developer', github: 'https://github.com/janedoe', linkedin: 'https://www.linkedin.com/in/janedoe' },
  { name: 'John Smith', role: 'UI/UX Designer', github: 'https://github.com/johnsmith', linkedin: 'https://www.linkedin.com/in/johnsmith' },
];

// Removed admin login credentials

function getStoredCollaborators() {
  const stored = localStorage.getItem('collaborators');
  return stored ? JSON.parse(stored) : initialCollaborators;
}

export default function Admin() {
  // Removed login state
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

  // Add state for event projects
  const initialEventProjects = JSON.parse(localStorage.getItem('eventProjects') || '[]');
  const [eventProjects, setEventProjects] = useState(initialEventProjects);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', link: '' });
  const [editEventIdx, setEditEventIdx] = useState(null);
  const [editEvent, setEditEvent] = useState({ title: '', description: '', link: '' });

  // Add state for activities
  const initialActivities = JSON.parse(localStorage.getItem('activities') || '[]');
  const [activities, setActivities] = useState(initialActivities);
  const [newActivity, setNewActivity] = useState({ title: '', description: '' });
  const [editActivityIdx, setEditActivityIdx] = useState(null);
  const [editActivity, setEditActivity] = useState({ title: '', description: '' });

  // Add state for blog posts
  const initialBlogPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [newBlogPost, setNewBlogPost] = useState({ title: '', content: '', link: '' });
  const [editBlogIdx, setEditBlogIdx] = useState(null);
  const [editBlogPost, setEditBlogPost] = useState({ title: '', content: '', link: '' });

  // Add state for insights
  const initialInsights = JSON.parse(localStorage.getItem('insights') || '[]');
  const [insights, setInsights] = useState(initialInsights);
  const [newInsight, setNewInsight] = useState({ title: '', content: '', link: '' });
  const [editInsightIdx, setEditInsightIdx] = useState(null);
  const [editInsight, setEditInsight] = useState({ title: '', content: '', link: '' });

  useEffect(() => {
    localStorage.setItem('collaborators', JSON.stringify(collaborators));
  }, [collaborators]);

  // Persist event projects
  useEffect(() => {
    localStorage.setItem('eventProjects', JSON.stringify(eventProjects));
  }, [eventProjects]);

  // Persist activities
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  // Persist blog posts
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  // Persist insights
  useEffect(() => {
    localStorage.setItem('insights', JSON.stringify(insights));
  }, [insights]);

  useEffect(() => {
    setLoadingSubs(true);
    fetch('/api/contact-submissions')
      .then(res => res.json())
      .then(data => setSubmissions(data.reverse()))
      .catch(() => setSubmissions([]))
      .finally(() => setLoadingSubs(false));
  }, []);

  // Removed handleLogin

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

  // Removed handleLogout

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

  const handleAddEvent = e => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.description) return setError('Title and description required');
    setEventProjects([...eventProjects, newEvent]);
    setNewEvent({ title: '', description: '', link: '' });
    setSuccess('Event project added!');
    setError('');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleRemoveEvent = idx => {
    if (!window.confirm('Remove this event project?')) return;
    setEventProjects(eventProjects.filter((_, i) => i !== idx));
    setSuccess('Event project removed.');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleEditEvent = idx => {
    setEditEventIdx(idx);
    setEditEvent(eventProjects[idx]);
  };

  const handleEditEventSave = idx => {
    if (!editEvent.title || !editEvent.description) return setError('Title and description required');
    setEventProjects(eventProjects.map((e, i) => (i === idx ? editEvent : e)));
    setEditEventIdx(null);
    setSuccess('Event project updated!');
    setError('');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleAddActivity = e => {
    e.preventDefault();
    if (!newActivity.title || !newActivity.description) return setError('Title and description required');
    setActivities([...activities, newActivity]);
    setNewActivity({ title: '', description: '' });
    setSuccess('Activity added!');
    setError('');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleRemoveActivity = idx => {
    if (!window.confirm('Remove this activity?')) return;
    setActivities(activities.filter((_, i) => i !== idx));
    setSuccess('Activity removed.');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleEditActivity = idx => {
    setEditActivityIdx(idx);
    setEditActivity(activities[idx]);
  };

  const handleEditActivitySave = idx => {
    if (!editActivity.title || !editActivity.description) return setError('Title and description required');
    setActivities(activities.map((a, i) => (i === idx ? editActivity : a)));
    setEditActivityIdx(null);
    setSuccess('Activity updated!');
    setError('');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleAddBlogPost = e => {
    e.preventDefault();
    if (!newBlogPost.title || !newBlogPost.content) return setError('Title and content required');
    setBlogPosts([...blogPosts, newBlogPost]);
    setNewBlogPost({ title: '', content: '', link: '' });
    setSuccess('Blog post added!');
    setError('');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleRemoveBlogPost = idx => {
    if (!window.confirm('Remove this blog post?')) return;
    setBlogPosts(blogPosts.filter((_, i) => i !== idx));
    setSuccess('Blog post removed.');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleEditBlogPost = idx => {
    setEditBlogIdx(idx);
    setEditBlogPost(blogPosts[idx]);
  };

  const handleEditBlogPostSave = idx => {
    if (!editBlogPost.title || !editBlogPost.content) return setError('Title and content required');
    setBlogPosts(blogPosts.map((b, i) => (i === idx ? editBlogPost : b)));
    setEditBlogIdx(null);
    setSuccess('Blog post updated!');
    setError('');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleAddInsight = e => {
    e.preventDefault();
    if (!newInsight.title || !newInsight.content) return setError('Title and content required');
    setInsights([...insights, newInsight]);
    setNewInsight({ title: '', content: '', link: '' });
    setSuccess('Insight added!');
    setError('');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleRemoveInsight = idx => {
    if (!window.confirm('Remove this insight?')) return;
    setInsights(insights.filter((_, i) => i !== idx));
    setSuccess('Insight removed.');
    setTimeout(() => setSuccess(''), 1500);
  };

  const handleEditInsight = idx => {
    setEditInsightIdx(idx);
    setEditInsight(insights[idx]);
  };

  const handleEditInsightSave = idx => {
    if (!editInsight.title || !editInsight.content) return setError('Title and content required');
    setInsights(insights.map((b, i) => (i === idx ? editInsight : b)));
    setEditInsightIdx(null);
    setSuccess('Insight updated!');
    setError('');
    setTimeout(() => setSuccess(''), 1500);
  };

  // Removed login UI

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2.5rem 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #6366f133', padding: '2.5rem 2.2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <h2 style={{ fontSize: '2rem', color: '#6366f1' }}>Admin Portal</h2>
          <Link to="/" style={{ background: '#6366f1', color: '#fff', padding: '0.5rem 1rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Back to Home</Link>
        </div>
        <div style={{ marginBottom: 36 }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: 16 }}>Collaborators</h3>
          <form onSubmit={handleAdd} style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
            <input type="text" placeholder="Name" value={newCol.name} onChange={e => setNewCol({ ...newCol, name: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="text" placeholder="Role" value={newCol.role} onChange={e => setNewCol({ ...newCol, role: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="url" placeholder="GitHub" value={newCol.github} onChange={e => setNewCol({ ...newCol, github: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="url" placeholder="LinkedIn" value={newCol.linkedin} onChange={e => setNewCol({ ...newCol, linkedin: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <button type="submit" style={{ background: '#10b981', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 600, fontSize: 15, cursor: 'pointer', boxShadow: '0 2px 8px #10b98122' }}>Add</button>
          </form>
          {success && <div style={{ color: '#10b981', marginBottom: 10 }}>{success}</div>}
          {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {collaborators.map((c, i) => (
              <div key={i} style={{ background: '#f3f4f6', borderRadius: 10, padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: 6, boxShadow: '0 1px 4px #6366f111' }}>
                {editIdx === i ? (
                  <>
                    <input type="text" value={editCol.name} onChange={e => setEditCol({ ...editCol, name: e.target.value })} style={{ width: '100%', marginBottom: 4, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <input type="text" value={editCol.role} onChange={e => setEditCol({ ...editCol, role: e.target.value })} style={{ width: '100%', marginBottom: 4, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <input type="url" value={editCol.github} onChange={e => setEditCol({ ...editCol, github: e.target.value })} style={{ width: '100%', marginBottom: 4, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <input type="url" value={editCol.linkedin} onChange={e => setEditCol({ ...editCol, linkedin: e.target.value })} style={{ width: '100%', marginBottom: 8, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => handleEditSave(i)} style={{ color: '#fff', background: '#10b981', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Save</button>
                      <button onClick={() => setEditIdx(null)} style={{ color: '#fff', background: '#aaa', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <strong style={{ fontSize: '1.08rem' }}>{c.name}</strong>
                    <span style={{ color: '#6366f1', fontWeight: 500 }}>{c.role}</span>
                    <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                      {c.github && <a href={c.github} target="_blank" rel="noopener noreferrer" style={{ color: '#232946', fontWeight: 500, textDecoration: 'none' }}>GitHub</a>}
                      {c.linkedin && <a href={c.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'none' }}>LinkedIn</a>}
                    </div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                      <button onClick={() => handleEdit(i)} style={{ color: '#fff', background: '#6366f1', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => handleRemove(i)} style={{ color: '#fff', background: '#ef4444', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Remove</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 36 }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: 16 }}>Event Projects</h3>
          <form onSubmit={handleAddEvent} style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
            <input type="text" placeholder="Title" value={newEvent.title} onChange={e => setNewEvent({ ...newEvent, title: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="text" placeholder="Description" value={newEvent.description} onChange={e => setNewEvent({ ...newEvent, description: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="url" placeholder="Link (optional)" value={newEvent.link} onChange={e => setNewEvent({ ...newEvent, link: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <button type="submit" style={{ background: '#a21caf', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 600, fontSize: 15, cursor: 'pointer', boxShadow: '0 2px 8px #a21caf22' }}>Add</button>
          </form>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {eventProjects.map((e, i) => (
              <div key={i} style={{ background: '#f3f4f6', borderRadius: 10, padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: 6, boxShadow: '0 1px 4px #6366f111' }}>
                {editEventIdx === i ? (
                  <>
                    <input type="text" value={editEvent.title} onChange={ev => setEditEvent({ ...editEvent, title: ev.target.value })} style={{ width: '100%', marginBottom: 4, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <input type="text" value={editEvent.description} onChange={ev => setEditEvent({ ...editEvent, description: ev.target.value })} style={{ width: '100%', marginBottom: 4, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <input type="url" value={editEvent.link} onChange={ev => setEditEvent({ ...editEvent, link: ev.target.value })} style={{ width: '100%', marginBottom: 8, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => handleEditEventSave(i)} style={{ color: '#fff', background: '#a21caf', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Save</button>
                      <button onClick={() => setEditEventIdx(null)} style={{ color: '#fff', background: '#aaa', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <strong style={{ fontSize: '1.08rem' }}>{e.title}</strong>
                    <span style={{ color: '#a21caf', fontWeight: 500 }}>{e.description}</span>
                    {e.link && <a href={e.link} target="_blank" rel="noopener noreferrer" style={{ color: '#232946', fontWeight: 500, textDecoration: 'none' }}>Link</a>}
                    <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                      <button onClick={() => handleEditEvent(i)} style={{ color: '#fff', background: '#a21caf', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => handleRemoveEvent(i)} style={{ color: '#fff', background: '#ef4444', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Remove</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 36 }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: 16 }}>Activities</h3>
          <form onSubmit={handleAddActivity} style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
            <input type="text" placeholder="Title" value={newActivity.title} onChange={e => setNewActivity({ ...newActivity, title: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="text" placeholder="Description" value={newActivity.description} onChange={e => setNewActivity({ ...newActivity, description: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <button type="submit" style={{ background: '#34d399', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 600, fontSize: 15, cursor: 'pointer', boxShadow: '0 2px 8px #34d39922' }}>Add</button>
          </form>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {activities.map((a, i) => (
              <div key={i} style={{ background: '#f3f4f6', borderRadius: 10, padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: 6, boxShadow: '0 1px 4px #6366f111' }}>
                {editActivityIdx === i ? (
                  <>
                    <input type="text" value={editActivity.title} onChange={ev => setEditActivity({ ...editActivity, title: ev.target.value })} style={{ width: '100%', marginBottom: 4, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <input type="text" value={editActivity.description} onChange={ev => setEditActivity({ ...editActivity, description: ev.target.value })} style={{ width: '100%', marginBottom: 8, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => handleEditActivitySave(i)} style={{ color: '#fff', background: '#34d399', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Save</button>
                      <button onClick={() => setEditActivityIdx(null)} style={{ color: '#fff', background: '#aaa', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <strong style={{ fontSize: '1.08rem' }}>{a.title}</strong>
                    <span style={{ color: '#34d399', fontWeight: 500 }}>{a.description}</span>
                    <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                      <button onClick={() => handleEditActivity(i)} style={{ color: '#fff', background: '#34d399', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => handleRemoveActivity(i)} style={{ color: '#fff', background: '#ef4444', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Remove</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 36 }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: 16 }}>Blog Posts</h3>
          <form onSubmit={handleAddBlogPost} style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
            <input type="text" placeholder="Title" value={newBlogPost.title} onChange={e => setNewBlogPost({ ...newBlogPost, title: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="text" placeholder="Content" value={newBlogPost.content} onChange={e => setNewBlogPost({ ...newBlogPost, content: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="url" placeholder="Link (optional)" value={newBlogPost.link} onChange={e => setNewBlogPost({ ...newBlogPost, link: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <button type="submit" style={{ background: '#6366f1', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 600, fontSize: 15, cursor: 'pointer', boxShadow: '0 2px 8px #6366f122' }}>Add</button>
          </form>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {blogPosts.map((b, i) => (
              <div key={i} style={{ background: '#f3f4f6', borderRadius: 10, padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: 6, boxShadow: '0 1px 4px #6366f111' }}>
                {editBlogIdx === i ? (
                  <>
                    <input type="text" value={editBlogPost.title} onChange={ev => setEditBlogPost({ ...editBlogPost, title: ev.target.value })} style={{ width: '100%', marginBottom: 4, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <input type="text" value={editBlogPost.content} onChange={ev => setEditBlogPost({ ...editBlogPost, content: ev.target.value })} style={{ width: '100%', marginBottom: 4, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <input type="url" value={editBlogPost.link} onChange={ev => setEditBlogPost({ ...editBlogPost, link: ev.target.value })} style={{ width: '100%', marginBottom: 8, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => handleEditBlogPostSave(i)} style={{ color: '#fff', background: '#6366f1', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Save</button>
                      <button onClick={() => setEditBlogIdx(null)} style={{ color: '#fff', background: '#aaa', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <strong style={{ fontSize: '1.08rem' }}>{b.title}</strong>
                    <span style={{ color: '#6366f1', fontWeight: 500 }}>{b.content}</span>
                    {b.link && <a href={b.link} target="_blank" rel="noopener noreferrer" style={{ color: '#232946', fontWeight: 500, textDecoration: 'none' }}>Link</a>}
                    <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                      <button onClick={() => handleEditBlogPost(i)} style={{ color: '#fff', background: '#6366f1', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => handleRemoveBlogPost(i)} style={{ color: '#fff', background: '#ef4444', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Remove</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 36 }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: 16 }}>Insights</h3>
          <form onSubmit={handleAddInsight} style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
            <input type="text" placeholder="Title" value={newInsight.title} onChange={e => setNewInsight({ ...newInsight, title: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="text" placeholder="Content" value={newInsight.content} onChange={e => setNewInsight({ ...newInsight, content: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <input type="url" placeholder="Link (optional)" value={newInsight.link} onChange={e => setNewInsight({ ...newInsight, link: e.target.value })} style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 15 }} />
            <button type="submit" style={{ background: '#fbbf24', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 600, fontSize: 15, cursor: 'pointer', boxShadow: '0 2px 8px #fbbf2422' }}>Add</button>
          </form>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {insights.map((b, i) => (
              <div key={i} style={{ background: '#f3f4f6', borderRadius: 10, padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: 6, boxShadow: '0 1px 4px #6366f111' }}>
                {editInsightIdx === i ? (
                  <>
                    <input type="text" value={editInsight.title} onChange={ev => setEditInsight({ ...editInsight, title: ev.target.value })} style={{ width: '100%', marginBottom: 4, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <input type="text" value={editInsight.content} onChange={ev => setEditInsight({ ...editInsight, content: ev.target.value })} style={{ width: '100%', marginBottom: 4, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <input type="url" value={editInsight.link} onChange={ev => setEditInsight({ ...editInsight, link: ev.target.value })} style={{ width: '100%', marginBottom: 8, borderRadius: 6, border: '1px solid #ddd', padding: '0.3rem 0.7rem' }} />
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => handleEditInsightSave(i)} style={{ color: '#fff', background: '#fbbf24', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Save</button>
                      <button onClick={() => setEditInsightIdx(null)} style={{ color: '#fff', background: '#aaa', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <strong style={{ fontSize: '1.08rem' }}>{b.title}</strong>
                    <span style={{ color: '#fbbf24', fontWeight: 500 }}>{b.content}</span>
                    {b.link && <a href={b.link} target="_blank" rel="noopener noreferrer" style={{ color: '#232946', fontWeight: 500, textDecoration: 'none' }}>Link</a>}
                    <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                      <button onClick={() => handleEditInsight(i)} style={{ color: '#fff', background: '#fbbf24', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => handleRemoveInsight(i)} style={{ color: '#fff', background: '#ef4444', border: 'none', borderRadius: 6, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Remove</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: 16 }}>Contact Submissions</h3>
          {loadingSubs ? (
            <div>Loading...</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
              {submissions.map((s, i) => (
                <div key={i} style={{ background: '#f3f4f6', borderRadius: 10, padding: '1.2rem', boxShadow: '0 1px 4px #6366f111', marginBottom: 8 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6 }}>{s.name} <span style={{ color: '#6366f1', fontWeight: 400 }}>({s.email})</span></div>
                  <div style={{ marginBottom: 8 }}>{s.message}</div>
                  <div style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>{new Date(s.date).toLocaleString()}</div>
                  {replyIdx === i ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <textarea value={replyMsg} onChange={e => setReplyMsg(e.target.value)} rows={3} style={{ borderRadius: 6, border: '1px solid #ddd', padding: '0.5rem', fontSize: 15 }} placeholder="Type your reply..." />
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button onClick={() => sendReply(s.email, `Re: ${s.name}`)} disabled={replyLoading} style={{ background: '#10b981', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Send</button>
                        <button onClick={() => setReplyIdx(null)} style={{ background: '#aaa', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Cancel</button>
                      </div>
                      {replySuccess && <div style={{ color: '#10b981', marginTop: 6 }}>{replySuccess}</div>}
                      {replyError && <div style={{ color: '#ef4444', marginTop: 6 }}>{replyError}</div>}
                    </div>
                  ) : (
                    <button onClick={() => handleReply(i)} style={{ background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginTop: 6 }}>Reply</button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 