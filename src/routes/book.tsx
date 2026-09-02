import { createFileRoute } from '@tanstack/react-router';
import { BookLink } from '../components/Links';

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
          <BookLink className="btn btn-primary">
            Book your call <span className="arrow">→</span>
          </BookLink>
        </div>
      </section>
    </main>
  );
}
