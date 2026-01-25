import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (jsonErr) {
      console.error('JSON parse error:', jsonErr.message);
      return NextResponse.json({ status: 'error', message: 'Invalid request body' }, { status: 400 });
    }

    const { email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ status: 'error', message: 'Valid email required' }, { status: 400 });
    }

    const scriptUrl = 'https://script.google.com/macros/s/AKfycby7O_UQy3mqaO5Aw1_68JYpS6967TGJ9ojirndBFvEkLddDSFMX8wjj73S3V0gjWJQ/exec';

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
      redirect: 'follow',
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'No response text');
      console.error('Apps Script response failed:', response.status, errorText);
      return NextResponse.json({ status: 'error', message: 'Failed to subscribe to sheet' }, { status: response.status });
    }

    const result = await response.json().catch(() => ({ status: 'unknown' }));
    console.log('Apps Script success:', result);

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Proxy handler error:', error.message, error.stack);
    return NextResponse.json({ status: 'error', message: 'Internal server error - check Vercel logs' }, { status: 500 });
  }
}

// Optional: Handle GET for testing (visit /api/subscribe in browser)
export async function GET() {
  return NextResponse.json({ message: 'API route is live - use POST for subscriptions' });
}
