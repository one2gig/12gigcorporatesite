import express from 'express';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config({ path: '.env.local' });

const app = express();
app.use(express.json());

const PORT = process.env.API_PORT ?? 3001;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, company, email, phone, needs } = req.body as {
    name: string;
    company: string;
    email: string;
    phone: string;
    needs: string;
  };

  if (!name || !company || !email || !phone || !needs) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const html = `
    <h2 style="margin-bottom:0">New SME Consultation Request</h2>
    <p style="color:#6b7280;margin-top:4px">Submitted via 12gig.com contact form</p>
    <table style="border-collapse:collapse;width:100%;margin-top:16px">
      <tr><td style="padding:8px 0;font-weight:600;width:140px">Name</td><td style="padding:8px 0">${name}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600">Company</td><td style="padding:8px 0">${company}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px 0;font-weight:600">Phone</td><td style="padding:8px 0">${phone}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;vertical-align:top">Business Needs</td><td style="padding:8px 0;white-space:pre-wrap">${needs}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"12gig Website" <${process.env.SMTP_USER}>`,
      to: 'contact@12gig.com',
      cc: 'redzuanhiew@gmail.com',
      replyTo: email,
      subject: `New Consultation Request — ${name} (${company})`,
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
