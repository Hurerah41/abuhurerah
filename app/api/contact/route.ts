import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // Honeypot check - if filled, silently reject or flag
    if (honeypot && String(honeypot).trim() !== '') {
      return NextResponse.json({ ok: false, error: 'Spam detected' }, { status: 400 });
    }

    // Validate name
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ ok: false, error: 'Please enter your name.' }, { status: 400 });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ ok: false, error: 'Please enter a message.' }, { status: 400 });
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { ok: false, error: 'Message must be under 2000 characters.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    if (!apiKey) {
      // In development mode, allow testing the form UI smoothly and log to terminal
      if (process.env.NODE_ENV === 'development') {
        console.log('\n--- [DEV MODE] Contact Form Submission ---');
        console.log(`From:    ${name.trim()} <${email.trim()}>`);
        console.log(`Message: ${message.trim()}`);
        console.log('Tip: Add your RESEND_API_KEY to .env.local to send live emails to developerhurerah@gmail.com.');
        console.log('-------------------------------------------\n');
        return NextResponse.json({ ok: true });
      }

      return NextResponse.json(
        { ok: false, error: 'Email service is not configured (RESEND_API_KEY missing in .env.local).' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: 'developerhurerah@gmail.com',
      replyTo: email.trim(),
      subject: `New Portfolio Message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
    return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
  }
}
