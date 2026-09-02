import { Link } from '../router';
import { BookLink } from '../components/Links';
import { WinsGridSection } from '../components/Wins';

export default function WinsPage() {
  return (
    <main id="page-wins" className="page active">
      <section className="wins-page-hero">
        <div className="container">
          <span className="eyebrow">Member Wins</span>
          <h1 className="wins-page-hero-headline">
            Member wins, in <em className="serif">their own words</em>.
          </h1>
          <p className="wins-page-hero-sub">
            Google reviews, milestone moments, campaign updates — every one collected with explicit
            permission from our members. We update this page as wins land and as members give us the
            green light to share them.
          </p>
        </div>
      </section>

      {/* Cards, filter bar and the growth note all come from src/data/wins.ts.
          The filter bar only appears once more than one category is visible. */}
      <WinsGridSection />

      <section className="pricing-final-cta">
        <div className="container">
          <span className="eyebrow">Ready to add yours?</span>
          <h2 className="pricing-final-cta-headline">
            Become the <em>next</em> win.
          </h2>
          <p className="pricing-final-cta-sub">
            Book a 30-minute call. We'll talk through your campaign and figure out together whether
            the Accelerator is your next step.
          </p>
          <div className="pricing-final-cta-buttons">
            <BookLink className="btn btn-primary btn-large">
              Book a call <span className="arrow">→</span>
            </BookLink>
            <Link to="/scorecard" className="btn btn-ghost btn-large">
              Take the readiness scorecard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
