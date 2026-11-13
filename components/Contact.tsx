'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappNumber = rawWhatsapp ? rawWhatsapp.replace(/\D/g, '') : '';

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, honeypot }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setHoneypot('');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Could not connect to the server. Please try again or email directly.');
    }
  };

  return (
    <section className="sec" id="contact" style={{ paddingTop: '80px' }}>
      <div className="ct">
        <div>
          <h2>
            Let&apos;s <mark>Work</mark>
            <br />
            Together
          </h2>
          <p style={{ fontSize: '14px', maxWidth: '340px' }}>
            Tell me about your idea. I usually reply to project messages quickly.
          </p>
          <div className="ls2">
            <a href="mailto:developerhurerah@gmail.com">
              developerhurerah@gmail.com <span>↗</span>
            </a>
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <span>↗</span>
              </a>
            )}
            <a href="https://github.com/Hurerah41" target="_blank" rel="noopener">
              GitHub <span>↗</span>
            </a>
            <a href="https://www.linkedin.com/in/abu-hurerah-27585a343/" target="_blank" rel="noopener">
              LinkedIn <span>↗</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Honeypot field for spam prevention */}
          <input
            type="text"
            name="company_hp"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: 'none', position: 'absolute', left: '-9999px' }}
            aria-hidden="true"
          />

          <input
            id="n"
            placeholder="Your name"
            aria-label="Your name"
            required
            value={name}
            disabled={status === 'sending'}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="e"
            type="email"
            placeholder="Your email"
            aria-label="Your email"
            required
            value={email}
            disabled={status === 'sending'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            id="m"
            rows={6}
            placeholder="Tell me about your project"
            aria-label="Message"
            required
            maxLength={2000}
            value={message}
            disabled={status === 'sending'}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {status === 'success' && (
            <div className="contact-alert success" role="alert">
              Thanks! I&apos;ll reply soon.
            </div>
          )}

          {status === 'error' && (
            <div className="contact-alert error" role="alert">
              {errorMessage || 'Failed to send message.'}{' '}
              <a href="mailto:developerhurerah@gmail.com">Email me directly</a>.
            </div>
          )}

          <button
            className="btn b"
            type="submit"
            disabled={status === 'sending'}
            style={{ justifySelf: 'start' }}
          >
            <span className="ic">↗</span>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
