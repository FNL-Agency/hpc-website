import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/book')({
  head: () => ({
    meta: [
      { title: 'Book a Call — HPC' },
      { name: 'description', content: 'Book a 30-minute call with HPC to talk through your capital campaign.' },
      { property: 'og:title', content: 'Book a Call — HPC' },
      { property: 'og:description', content: 'Book a 30-minute call with HPC to talk through your capital campaign.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <main id="page-book" className="page active">
      <section className="wins-page-hero">
        <div className="container">
          <span className="eyebrow">Book a Call</span>
          <h1 className="wins-page-hero-headline">
            Let's talk about your <em className="serif">campaign</em>.
          </h1>
          <p className="wins-page-hero-sub">
            Schedule a 30-minute call with Dan to talk through your capital campaign and next steps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div
            className="calendar-embed"
            style={{
              width: '100%',
              minHeight: '680px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--color-border, rgba(0,0,0,0.1))',
            }}
          >
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Kaemut1ha57FzpIB-hF4flYv84U1Cldax3rkCEojRVL8F5JNTGaiXtSdcOIAY3ily6qcLm_iJ?gv=true"
              title="Book a call with HPC"
              width="100%"
              height="100%"
              style={{ minHeight: '680px', border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
