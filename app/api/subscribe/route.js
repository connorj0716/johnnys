import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // Safely parse body – skip if no content
    let body = {};
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      try {
        body = await request.json();
      } catch (jsonErr) {
        console.error('JSON parse failed:', jsonErr.message);
        return NextResponse.json({ status: 'error', message: 'Invalid JSON body' }, { status: 400 });
      }
    }

    const { email } = body;

    if (!email || typeof email !== 'string' || !email.trim() || !email.includes('@')) {
      return NextResponse.json({ status: 'error', message: 'Valid email required' }, { status: 400 });
    }

    const scriptUrl = 'https://script.google.com/macros/s/AKfycby7O_UQy3mqaO5Aw1_68JYpS6967TGJ9ojirndBFvEkLddDSFMX8wjj73S3V0gjWJQ/exec';

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
      redirect: 'follow',
      cache: 'no-store', // Prevent any caching issues
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('Apps Script failed:', response.status, errorText);
      return NextResponse.json({ status: 'error', message: 'Failed to add to sheet' }, { status: response.status });
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('API route error:', error.message, error.stack);
    return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'API route is live! Use POST from the form to subscribe.' });
}
