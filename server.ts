import express from 'express';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config({ path: '.env.local' });

const app = express();
app.use(express.json());

const PORT = process.env.API_PORT ?? 3001;
const CONTACT_TO = 'contact@12gig.com';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

app.post('/api/contact', async (req, res) => {
  const {
    type,
    name,
    company,
    email,
    phone,
    needs,
    subject,
    message,
  } = req.body as {
    type?: 'general' | 'sme';
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    needs?: string;
    subject?: string;
    message?: string;
  };

  const isGeneral = type === 'general' || Boolean(subject || message);

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  let mailSubject: string;
  let html: string;
  let replyTo = email.trim();

  if (isGeneral) {
    if (!subject?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'Subject and message are required.' });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim());

    mailSubject = `Website enquiry — ${subject.trim()} (${name.trim()})`;
    html = `
      <h2 style="margin-bottom:0">New Website Enquiry</h2>
      <p style="color:#6b7280;margin-top:4px">Submitted via the 12gig contact page</p>
      <table style="border-collapse:collapse;width:100%;margin-top:16px">
        <tr><td style="padding:8px 0;font-weight:600;width:140px">Name</td><td style="padding:8px 0">${safeName}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:600">Subject</td><td style="padding:8px 0">${safeSubject}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600;vertical-align:top">Message</td><td style="padding:8px 0;white-space:pre-wrap">${safeMessage}</td></tr>
      </table>
    `;
  } else {
    if (!company?.trim() || !phone?.trim() || !needs?.trim()) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const safeName = escapeHtml(name.trim());
    const safeCompany = escapeHtml(company.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone.trim());
    const safeNeeds = escapeHtml(needs.trim());

    mailSubject = `New Consultation Request — ${name.trim()} (${company.trim()})`;
    html = `
      <h2 style="margin-bottom:0">New SME Consultation Request</h2>
      <p style="color:#6b7280;margin-top:4px">Submitted via 12gig.com contact form</p>
      <table style="border-collapse:collapse;width:100%;margin-top:16px">
        <tr><td style="padding:8px 0;font-weight:600;width:140px">Name</td><td style="padding:8px 0">${safeName}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600">Company</td><td style="padding:8px 0">${safeCompany}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:600">Phone</td><td style="padding:8px 0">${safePhone}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600;vertical-align:top">Business Needs</td><td style="padding:8px 0;white-space:pre-wrap">${safeNeeds}</td></tr>
      </table>
    `;
  }

  try {
    await transporter.sendMail({
      from: `"12gig Website" <${process.env.SMTP_USER}>`,
      to: CONTACT_TO,
      cc: 'redzuanhiew@gmail.com',
      replyTo,
      subject: mailSubject,
      html,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Mail send error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
