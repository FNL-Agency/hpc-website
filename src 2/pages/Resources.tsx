// Auto-converted from HPC-Website-V2.9-Launch.html. Markup and copy are
// byte-identical to the approved design; only JSX-required attribute
// renaming was applied. Do not rewrite the copy.

import NewsletterForm from '../components/NewsletterForm';
import { Link } from '../router';
import { ExternalLink } from '../components/Links';
import { SITE_LINKS } from '../config/links';

export default function ResourcesPage() {
  return (
    <>
      <main id="page-resources" className="page active">
        <section className="resources-page-hero">
          <div className="container">
            <span className="eyebrow">Resources</span>
            <h1 className="resources-page-hero-headline">Free tools, guides, and a <em className="serif">monthly</em> webinar.</h1>
            <p className="resources-page-hero-sub">Everything we share publicly to help nonprofit leaders run better capital campaigns. The same material we share with our own members — most of it free, all of it written from real client work.</p>
          </div>
        </section>

        {/* NOTE (Dan): webinar currently hosted on Luma. Dan plans to move to Circle in ~3 months
             — re-point the "Reserve your seat" link then. */}
        <section className="featured-webinar-section">
          <div className="container">
            <div className="featured-webinar-card solo">
              <div className="featured-webinar-content">
                <span className="featured-webinar-tag">⊙ Live · monthly · free</span>
                <h2 className="featured-webinar-title">Capital Campaigns <em>Live.</em></h2>
                <p className="featured-webinar-sub">A monthly 90-minute webinar for nonprofit leaders. Dan plus a rotating guest from a real campaign. Real numbers, real questions from the room. People sign up two months out — for good reason.</p>
                <div className="featured-webinar-topic">
                  <span className="featured-webinar-topic-label">Next session</span>
                  <p className="featured-webinar-topic-title">"How small teams beat big consultancies on campaign close rates."</p>
                </div>
                <div className="featured-webinar-ctas">
                  <ExternalLink href={SITE_LINKS.WEBINAR_URL} className="btn btn-primary">Reserve your seat <span className="arrow">→</span></ExternalLink>
                  <span className="featured-webinar-host">Hosted on Luma · Free</span>
                </div>
              </div>
              {/* LAUNCH-HIDDEN START: the calendar block is hard-coded to Thursday, May 22 — a date
                   that has passed. Restore it (and drop .solo from the card above) once there is a
                   real next-session date to show. */}
              <div className="featured-webinar-visual launch-hidden">
                <div className="webinar-cal">
                  <div className="webinar-cal-month">May</div>
                  <div className="webinar-cal-day">22</div>
                  <div className="webinar-cal-weekday">Thursday</div>
                  <div className="webinar-cal-time">1:00 PM ET</div>
                </div>
              </div>
              {/* LAUNCH-HIDDEN END: webinar calendar */}
            </div>
          </div>
        </section>

        <section className="tools-section">
          <div className="container">
            <header className="res-section-header">
              <span className="eyebrow">Free tools</span>
              <h2 className="display-2">Use these <em className="serif">today.</em></h2>
              <p className="lede">Two tools that show you exactly where you stand. No email gate on either one.</p>
            </header>

            <div className="tools-grid">
              <Link to="/scorecard" className="tool-card">
                <div className="tool-card-icon">
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="5" width="26" height="30" rx="2" />
                    <path d="M13 13l3 3 7-7" strokeWidth="2.2" />
                    <path d="M13 22h5M13 30h5" />
                    <path d="M22 22h8M22 30h6" opacity="0.5" />
                  </svg>
                </div>
                <div className="tool-card-tag">Free · 8 minutes</div>
                <h3 className="tool-card-title">Capital Campaign Readiness Scorecard</h3>
                <p className="tool-card-desc">12 questions that tell you whether your organization is ready to launch a campaign — and where the gaps are. Your score appears right on the page.</p>
                <span className="tool-card-cta">Take the scorecard <span className="arrow">→</span></span>
              </Link>

              <Link to="/" className="tool-card">
                <div className="tool-card-icon">
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="5" width="30" height="30" rx="2" />
                    <path d="M14 26v-6M20 26v-12M26 26v-9" />
                    <line x1="5" y1="13" x2="35" y2="13" opacity="0.4" />
                  </svg>
                </div>
                <div className="tool-card-tag">Free · 1 minute</div>
                <h3 className="tool-card-title">Capital Campaign Cost Calculator</h3>
                <p className="tool-card-desc">Drop in what your mission needs. See the campaign cost folded into the goal — and why none of it has to come out of your operating budget.</p>
                <span className="tool-card-cta">Run the numbers <span className="arrow">→</span></span>
              </Link>
            </div>
          </div>
        </section>

        <section className="library-section">
          <div className="container">
            <header className="res-section-header">
              <span className="eyebrow">The library</span>
              <h2 className="display-2">Plain-English guides on <em className="serif">capital campaigns.</em></h2>
              <p className="lede">Written by Dan, drawn from real client work. New guides every few weeks. Share with your board, your team, or that volunteer who keeps asking what a campaign actually is.</p>
            </header>

            <div className="library-grid">
              <a href="#" className="resource-card"><div className="resource-tag">Pillar guide · 14 min</div><h3 className="resource-title">What is a capital campaign?</h3><p className="resource-desc">The plain-English explanation we wish someone had handed our clients before their boards started asking questions.</p><div className="resource-meta"><span>Free guide</span><span>→ Read</span></div></a>
              <a href="#" className="resource-card"><div className="resource-tag">Guide · 8 min</div><h3 className="resource-title">Are we campaign-ready?</h3><p className="resource-desc">The 12 questions we work through with every prospective Accelerator member — share with your board before the next meeting.</p><div className="resource-meta"><span>Free guide</span><span>→ Read</span></div></a>

              {/* LAUNCH-HIDDEN START: 7 unwritten "Coming soon" guide cards. Restore each card
                   (remove class="launch-hidden", change the div to an <a href="...">, drop the
                   .placeholder class) as the guide is published. */}
              <div className="resource-card placeholder launch-hidden"><div className="resource-tag">Coming soon</div><h3 className="resource-title">How to brief your board on a capital campaign.</h3><p className="resource-desc">A 15-minute script and slide-ready outline for the board update that gets your trustees on board before the work begins.</p><div className="resource-meta"><span>In writing</span></div></div>
              <div className="resource-card placeholder launch-hidden"><div className="resource-tag">Coming soon</div><h3 className="resource-title">The lead-gift conversation: what to say first.</h3><p className="resource-desc">A script for the meeting that decides whether your campaign launches strong or stalls — and what to do when you don't get the answer you wanted.</p><div className="resource-meta"><span>In writing</span></div></div>
              <div className="resource-card placeholder launch-hidden"><div className="resource-tag">Coming soon</div><h3 className="resource-title">Quiet phase vs. public phase — when to switch.</h3><p className="resource-desc">The single decision that determines whether your campaign feels like a launch or like a slow leak. We break it down with real examples.</p><div className="resource-meta"><span>In writing</span></div></div>
              <div className="resource-card placeholder launch-hidden"><div className="resource-tag">Coming soon</div><h3 className="resource-title">Working with a board chair who's new to fundraising.</h3><p className="resource-desc">How to bring a first-time campaign chair up to speed in three conversations — without making them feel like they're in over their head.</p><div className="resource-meta"><span>In writing</span></div></div>
              <div className="resource-card placeholder launch-hidden"><div className="resource-tag">Coming soon</div><h3 className="resource-title">The case for support, in 250 words or less.</h3><p className="resource-desc">Most case statements are too long. We'll show you how to write one that actually fits on a postcard — and still moves donors to write a check.</p><div className="resource-meta"><span>In writing</span></div></div>
              <div className="resource-card placeholder launch-hidden"><div className="resource-tag">Coming soon</div><h3 className="resource-title">Stewardship: keeping donors after the campaign ends.</h3><p className="resource-desc">The most expensive donor is the one you only thanked once. A simple framework for what to do in the year after the ribbon-cutting.</p><div className="resource-meta"><span>In writing</span></div></div>
              {/* LAUNCH-HIDDEN END: unwritten guide cards */}
            </div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-card">
              <span className="eyebrow">The Friday newsletter</span>
              <h2 className="newsletter-headline">A short letter on <em>real campaigns</em>, every Friday.</h2>
              <p className="newsletter-body">Each Friday: one observation from inside a real client campaign, one tactical move that worked that week, and one question for you to think about over the weekend. No fluff. No upsells.</p>
              <NewsletterForm />
            </div>
          </div>
        </section>

        <section className="pricing-final-cta">
          <div className="container">
            <span className="eyebrow">When you're ready</span>
            <h2 className="pricing-final-cta-headline">Past resources, into a <em>real</em> conversation.</h2>
            <p className="pricing-final-cta-sub">If the free tools and guides have taken you as far as they can, book a 30-minute call. We'll talk through where you are and what you actually need next.</p>
            <div className="pricing-final-cta-buttons">
              <a href="#" data-book="" className="btn btn-primary btn-large">Book a call <span className="arrow">→</span></a>
              <Link to="/scorecard" className="btn btn-ghost btn-large">Take the readiness scorecard</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
