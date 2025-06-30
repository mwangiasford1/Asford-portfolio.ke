import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const CONTACT_FILE = 'contactSubmissions.json';

// Load submissions from file on server start
let contactSubmissions = [];
if (fs.existsSync(CONTACT_FILE)) {
  try {
    const data = fs.readFileSync(CONTACT_FILE, 'utf-8');
    contactSubmissions = JSON.parse(data);
  } catch (err) {
    console.error('Failed to load contact submissions:', err);
    contactSubmissions = [];
  }
}

// Helper to save submissions to file
function saveSubmissions() {
  fs.writeFileSync(CONTACT_FILE, JSON.stringify(contactSubmissions, null, 2));
}

// POST route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  // Store the submission
  const submission = { name, email, message, date: new Date().toISOString() };
  contactSubmissions.push(submission);
  saveSubmissions();
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// Get all contact submissions
app.get('/api/contact-submissions', (req, res) => {
  res.json(contactSubmissions);
});

// Reply to a contact submission
app.post('/api/contact-reply', async (req, res) => {
  const { to, subject, message } = req.body;
  if (!to || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: message,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send reply.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});