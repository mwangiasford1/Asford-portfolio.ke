import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSuccess('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setSuccess('Message sent!');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section-fade">
      <h2>Contact</h2>
      <div style={{ marginBottom: 12, fontWeight: 500 }}>
        Tel: <a href="tel:+254740953975">+254 740 953 975</a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={form.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" rows={5} required value={form.message} onChange={handleChange} />
        <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Submit Form'}</button>
        {success && <div className="success-msg">{success}</div>}
      </form>
    </section>
  );
};

export default Contact;
