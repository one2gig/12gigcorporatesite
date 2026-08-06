import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendContactMail, type ContactPayload } from '../lib/contact-mail';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const payload = (req.body ?? {}) as ContactPayload;
  const result = await sendContactMail(payload);

  if (result.ok === false) {
    return res.status(result.status).json({ error: result.error });
  }

  return res.status(200).json({ success: true });
}
