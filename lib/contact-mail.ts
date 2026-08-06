import nodemailer from 'nodemailer';

export const CONTACT_TO = 'contact@12gig.com';
export const CONTACT_CC = 'redzuanhiew@gmail.com';

export type ContactPayload = {
  type?: 'general' | 'sme';
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  needs?: string;
  subject?: string;
  message?: string;
};

export type ContactMailResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function createTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, '');

  if (!user || !pass) {
    throw new Error('SMTP credentials are not configured.');
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
  });
}

export async function sendContactMail(
  payload: ContactPayload
): Promise<ContactMailResult> {
  const { type, name, company, email, phone, needs, subject, message } =
    payload;

  const isGeneral = type === 'general' || Boolean(subject || message);

  if (!name?.trim() || !email?.trim()) {
    return { ok: false, status: 400, error: 'Name and email are required.' };
  }

  let mailSubject: string;
  let html: string;
  const replyTo = email.trim();

  if (isGeneral) {
    if (!subject?.trim() || !message?.trim()) {
      return {
        ok: false,
        status: 400,
        error: 'Subject and message are required.',
      };
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
      return { ok: false, status: 400, error: 'All fields are required.' };
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
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"12gig Website" <${process.env.SMTP_USER}>`,
      to: CONTACT_TO,
      cc: CONTACT_CC,
      replyTo,
      subject: mailSubject,
      html,
    });
    return { ok: true };
  } catch (err) {
    console.error('Mail send error:', err);
    return {
      ok: false,
      status: 500,
      error: 'Failed to send email. Please try again.',
    };
  }
}
