import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ status: 'error', message: 'Valid email required' }, { status: 400 })
    }

    const scriptUrl = 'https://script.google.com/macros/s/AKfycby7O_UQy3mqaO5Aw1_68JYpS6967TGJ9ojirndBFvEkLddDSFMX8wjj73S3V0gjWJQ/exec'

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })

    if (!response.ok) {
      return NextResponse.json({ status: 'error', message: 'Failed to subscribe' }, { status: 500 })
    }

    return NextResponse.json({ status: 'success' })
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Server issue' }, { status: 500 })
  }
}
