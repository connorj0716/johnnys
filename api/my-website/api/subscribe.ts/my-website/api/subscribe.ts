import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbykaXwEpjBVgTCX9XjvAg645p1hou0eAMxRvLIwwJnJYdvgsQIplXJN7sN6wlAkhcUr/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }
    );

    // If the response is empty, default to {}
    const text = await response.text();
    const data = text ? JSON.parse(text) : { success: false, error: 'Empty response from Apps Script' };

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: err instanceof Error ? err.message : 'Unknown error' });
  }
}
