// Auto-converted from HPC-Website-V2.9-Launch.html. Markup and copy are
// byte-identical to the approved design; only JSX-required attribute
// renaming was applied. Do not rewrite the copy.

import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { BookLink } from '../components/Links';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About HPC' },
      { name: 'description', content: 'Thirty years of capital campaign work for Canadian nonprofits, rebuilt into a model the small-to-mid-sized organization can afford to run.' },
      { property: 'og:title', content: 'About HPC' },
      { property: 'og:description', content: 'Thirty years of capital campaign work for Canadian nonprofits, rebuilt into a model the small-to-mid-sized organization can afford to run.' },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <main id="page-about" className="page active">
        <div className="breadcrumb container">
          <div className="breadcrumb-inner">
            <Link to="/">Home</Link><span className="sep">/</span><span>About</span>
          </div>
        </div>

        <section className="about-hero container">
          <div className="about-hero-grid">
            <div>
              <span className="eyebrow">About HPC</span>
              <h1 className="display-1 about-hero-headline">
                Thirty years of <em className="serif">standing</em> with the small organization.
              </h1>
            </div>
            <aside className="about-hero-side">
              <p className="lede">HPC has done capital campaign work for Canadian nonprofits since 1995. Today, Dan Hussey leads the firm with a single focus: build a capital campaign system the small-to-mid-sized organization can actually afford to run.</p>
            </aside>
          </div>
        </section>

        <section className="about-proof-section">
          <div className="container">
            <header className="about-proof-header">
              <span className="eyebrow">By the numbers, since 1995</span>
              <h2 className="display-2">Thirty years of <em className="serif">campaigns,</em> learnings, and quiet wins.</h2>
              <p className="lede">We don't lead with these on the homepage anymore — but if you're trying to figure out whether we know what we're doing, here's the body of work.</p>
            </header>

            <div className="proof-stats">
              <div className="proof-stat"><div className="proof-stat-num">$<em>4B+</em></div><div className="proof-stat-label">raised across all client campaigns since 1995</div></div>
              <div className="proof-stat"><div className="proof-stat-num"><em>1,000+</em></div><div className="proof-stat-label">nonprofit clients served across Canada and the US</div></div>
              <div className="proof-stat"><div className="proof-stat-num"><em>30</em></div><div className="proof-stat-label">years of operating experience as a firm</div></div>
              <div className="proof-stat"><div className="proof-stat-num">$<em>80M</em></div><div className="proof-stat-label">campaign Dan currently leads as principal consultant</div></div>
            </div>

            <div className="marquee-gifts">
              <div className="marquee-gifts-label">Marquee gifts secured by HPC clients</div>
              <div className="marquee-gifts-grid">
                <div className="marquee-gift"><div className="marquee-gift-amount">$430M</div><div className="marquee-gift-detail">The Thomson family gift to the Art Gallery of Ontario<span>The largest single charitable gift in Canadian history</span></div></div>
                <div className="marquee-gift"><div className="marquee-gift-amount">$13M</div><div className="marquee-gift-detail">The DeGroote family gift to Hillfield Strathallan College<span>HPC was consultant of record</span></div></div>
                <div className="marquee-gift"><div className="marquee-gift-amount">$13M</div><div className="marquee-gift-detail">The Crook / Greenberg gift to The Queensway<span>HPC was consultant of record</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-dan-section">
          <div className="container">
            <div className="about-dan-grid">
              <div className="about-dan-portrait"></div>
              <div className="about-dan-content">
                <span className="eyebrow">Principal &amp; CEO</span>
                <h2 className="display-2">Dan <em className="serif">Hussey</em></h2>
                <p>Dan grew up in the firm — capital campaigns were dinner-table conversation from his teenage years on. He stepped into operating leadership in 2020 and has been quietly rebuilding HPC into the model that's serving small organizations today.</p>
                <p>He's the lead consultant on a current $80M capital campaign that has raised over $55M in less than four years. He runs the Capital Campaign Accelerator. And — most relevant to anyone reading this page — <strong>he's actually run a capital campaign himself, not just advised on one.</strong> That's rarer in this field than it should be.</p>

                <div className="about-dan-credentials">
                  <div className="credential"><div className="credential-num">$80M</div><div className="credential-text">Active campaign Dan currently leads as principal consultant</div></div>
                  <div className="credential"><div className="credential-num">SVP</div><div className="credential-text">Senior Vice President at the University of Waterloo Foundation</div></div>
                  <div className="credential"><div className="credential-num">CFRE</div><div className="credential-text">Certified Fund Raising Executive · advisor to multiple Canadian nonprofit boards</div></div>
                  <div className="credential"><div className="credential-num">Built</div><div className="credential-text">The Capital Campaign Accelerator · HPC's program for small-to-mid-sized organizations</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-team-section">
          <div className="container">
            <header className="about-team-header">
              <span className="eyebrow">The team</span>
              <h2 className="display-2">A small group of <em className="serif">campaign-runners</em>, coaches, and specialists.</h2>
            </header>

            <div className="team-grid">
              <div className="team-card"><div className="team-avatar">RD</div><div className="team-name">Roxanne D.</div><div className="team-role">Senior Coach</div></div>
              <div className="team-card"><div className="team-avatar">LW</div><div className="team-name">Leanne W.</div><div className="team-role">Coach &amp; Member Success</div></div>
              <div className="team-card"><div className="team-avatar">CB</div><div className="team-name">Connor B.</div><div className="team-role">Case Studies &amp; Content</div></div>
              <div className="team-card"><div className="team-avatar">+</div><div className="team-name">Specialist partners</div><div className="team-role">Major gifts · planned giving · capital projects</div></div>
            </div>
          </div>
        </section>

        <section className="about-pivot-section">
          <div className="container about-pivot-inner">
            <span className="eyebrow about-pivot-eyebrow">Why we changed the model</span>
            <h2 className="about-pivot-title">Thirty years of saying <em>no</em> to the little guy.</h2>
            <p className="about-pivot-text">For thirty years, we said yes to the capital campaigns the field expected — six-figure, institutional, designed for hospital foundations and large universities. And for thirty years, we said no to the organizations who needed help most: the boards staring down a 40-year-old portable, the EDs whose landlords had just sold the building, the small charities being quoted feasibility studies that cost more than their annual fundraising.</p>
            <p className="about-pivot-text">The work we said no to wasn't smaller in stakes. A small organization losing its home is just as catastrophic as a hospital missing a wing. The campaigns weren't smaller either — most of these organizations could have raised three, four, five million dollars if they'd had the right system. What was smaller was the budget for help. So we kept saying no.</p>
            <p className="about-pivot-closer">Until we got tired of it. <span className="accent">So we changed the model.</span></p>
          </div>
        </section>

        <section className="about-belief-section">
          <div className="container about-belief-inner">
            <div className="brand-graphic bg-accent wide"><svg viewBox="0 0 280 132" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="102" width="60" height="26" rx="13" fill="#7ECEF3" /><rect x="76" y="102" width="60" height="26" rx="13" fill="#00629E" /><rect x="144" y="102" width="60" height="26" rx="13" fill="#7ECEF3" /><rect x="212" y="102" width="60" height="26" rx="13" fill="#00629E" />
      <rect x="42" y="70" width="60" height="26" rx="13" fill="#00629E" /><rect x="110" y="70" width="60" height="26" rx="13" fill="#7ECEF3" /><rect x="178" y="70" width="60" height="26" rx="13" fill="#00629E" />
      <rect x="76" y="38" width="60" height="26" rx="13" fill="#7ECEF3" /><rect x="144" y="38" width="60" height="26" rx="13" fill="#00629E" />
      <rect x="110" y="6" width="60" height="26" rx="13" fill="#7ECEF3" /></svg></div>
            <span className="eyebrow">What we believe</span>
            <p className="about-belief-statement">
              Capital campaigns shouldn't be <em className="serif">gate-kept</em> by a few exclusive consultancies that charge hundreds of thousands of dollars to start. Most of the organizations that need to run a campaign are small, lean, and led by someone doing it for the first time. Those organizations deserve a real system, real coaches, and a real community — at a price that fits the campaign they're actually running.
            </p>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="container final-cta-inner">
            <span className="eyebrow">If you've read this far</span>
            <h2 className="display-1">Come work with <em className="serif">us</em>.</h2>
            <p className="lede">Book a 30-minute call with our team. We'll figure out together whether HPC is your next step.</p>
            <div className="final-cta-buttons">
              <BookLink className="btn btn-primary btn-large">Book a call <span className="arrow">→</span></BookLink>
              <Link to="/scorecard" className="btn btn-ghost btn-large">Take the readiness scorecard</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
