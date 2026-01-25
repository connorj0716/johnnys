export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string' || !email.trim() || !email.includes('@')) {
    return res.status(400).json({ status: 'error', message: 'Valid email required' });
  }

  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycby7O_UQy3mqaO5Aw1_68JYpS6967TGJ9ojirndBFvEkLddDSFMX8wjj73S3V0gjWJQ/exec';

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
      redirect: 'follow',
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown');
      console.error('Apps Script error:', errorText);
      return res.status(500).json({ status: 'error', message: 'Failed to subscribe' });
    }

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).json({ status: 'error', message: 'Server issue' });
  }
}
