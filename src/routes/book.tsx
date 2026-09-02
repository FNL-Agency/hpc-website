import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/book')({
  head: () => ({
    meta: [
      { title: 'Book a Call — HPC' },
      { name: 'description', content: 'Book a 30-minute call with HPC to talk through your capital campaign.' },
      { property: 'og:title', content: 'Book a Call — HPC' },
      { property: 'og:description', content: 'Book a 30-minute call with HPC to talk through your capital campaign.' },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
    };
    try {
      const res = await fetch('/api/public/book-call', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <main id="page-book" className="page active">
      <section className="wins-page-hero">
        <div className="container">
          <span className="eyebrow">Book a Call</span>
          <h1 className="wins-page-hero-headline">
            Let's talk about your <em className="serif">campaign</em>.
          </h1>
          <p className="wins-page-hero-sub">
            Tell us a little about yourself and we'll be in touch to schedule your 30-minute call.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: 560 }}>
          {status === 'sent' ? (
            <p>
              Thanks — we've received your request and will be in touch shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
              <label style={{ display: 'grid', gap: '0.375rem' }}>
                Name
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label style={{ display: 'grid', gap: '0.375rem' }}>
                Email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label style={{ display: 'grid', gap: '0.375rem' }}>
                Company
                <input name="company" type="text" required autoComplete="organization" />
              </label>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit'} <span className="arrow">→</span>
              </button>
              {status === 'error' && (
                <p role="alert">Something went wrong — please try again.</p>
              )}
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
