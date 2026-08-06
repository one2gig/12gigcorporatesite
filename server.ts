import express from 'express';
import { config } from 'dotenv';
import { sendContactMail, type ContactPayload } from './lib/contact-mail';

config({ path: '.env.local' });

const app = express();
app.use(express.json());

const PORT = process.env.API_PORT ?? 3001;

app.post('/api/contact', async (req, res) => {
  const result = await sendContactMail(req.body as ContactPayload);

  if (result.ok === false) {
    return res.status(result.status).json({ error: result.error });
  }

  return res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
