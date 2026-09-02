// Auto-converted from HPC-Website-V2.9-Launch.html. Markup and copy are
// byte-identical to the approved design; only JSX-required attribute
// renaming was applied. Do not rewrite the copy.

import { Link } from '../router';
import { BookLink } from '../components/Links';

export default function PricingPage() {
  return (
    <>
      <main id="page-pricing" className="page active">
        <section className="pricing-page-hero">
          <div className="container">
            <span className="eyebrow">Pricing</span>
            <h1 className="pricing-hero-headline">Pricing that <em className="serif">fits</em> the campaign you're actually running.</h1>
            <p className="pricing-hero-sub">We built HPC for organizations who got quoted six figures to start a $2M campaign and quietly walked away. Here's what it actually costs to do this with us — published, simple, the same for everyone.</p>
            <div className="pricing-hero-facts">
              <span className="pricing-hero-fact">Starts at $2,500 / month</span>
              <span className="pricing-hero-fact">90-day money-back guarantee</span>
              <span className="pricing-hero-fact">No hidden fees, ever</span>
            </div>
          </div>
        </section>

        <section className="roi-band">
          <div className="roi-inner">
            <span className="roi-eyebrow">Why the math works</span>
            <h2 className="roi-headline">Your campaign should <em>pay for itself</em> — and then some.</h2>
            <p className="roi-body">Traditional capital campaign consulting takes 5&ndash;10% of every dollar raised. On a $2M campaign, that's $100,000 to $200,000 in fees alone &mdash; money that should be going to your mission. HPC charges a flat rate. The same whether you raise $1M or $5M.</p>
            <div className="roi-math">
              <div className="roi-math-cell"><p className="roi-math-label">Your campaign goal</p><p className="roi-math-value">$2,000,000</p></div>
              <div className="roi-math-cell"><p className="roi-math-label">HPC annual cost</p><p className="roi-math-value highlight">$24,000</p><p className="roi-math-note">1.2% of campaign</p></div>
              <div className="roi-math-cell"><p className="roi-math-label">Stays with your mission</p><p className="roi-math-value">$1,976,000</p></div>
            </div>
          </div>
        </section>

        <section className="compare-section">
          <div className="container">
            <header className="compare-header">
              <span className="eyebrow">Side by side</span>
              <h2 className="display-2">Traditional consulting vs. <em className="serif">HPC.</em></h2>
              <p className="lede">Same campaign. Two very different price tags.</p>
            </header>

            <div className="compare-grid">
              <div className="compare-rows">
                <div className="compare-header-cell label">Feature</div>
                <div className="compare-header-cell traditional">Traditional</div>
                <div className="compare-header-cell hpc">HPC Accelerator</div>

                <div className="compare-cell label">Feasibility study</div>
                <div className="compare-cell traditional">$40,000 – $80,000 to start</div>
                <div className="compare-cell hpc"><strong>Included</strong> in the Accelerator</div>

                <div className="compare-cell label">Annual consulting fee</div>
                <div className="compare-cell traditional">$100,000 – $500,000 / year</div>
                <div className="compare-cell hpc"><strong>$24,000 / year</strong> · 12-month rate</div>

                <div className="compare-cell label">Percentage of campaign</div>
                <div className="compare-cell traditional">5 – 10% of total raised</div>
                <div className="compare-cell hpc"><strong>Flat fee.</strong> Doesn't scale with what you raise.</div>

                <div className="compare-cell label">Refund policy</div>
                <div className="compare-cell traditional">Rarely offered</div>
                <div className="compare-cell hpc"><strong>90-day, 100% money-back</strong> guarantee</div>

                <div className="compare-cell label">Engagement model</div>
                <div className="compare-cell traditional">They run it for you</div>
                <div className="compare-cell hpc"><strong>We coach you to run it.</strong> You keep the knowledge.</div>

                <div className="compare-row-last">
                  <div className="compare-cell label">Cost per $1 raised ($2M campaign)</div>
                  <div className="compare-cell traditional">$0.075 – $0.15</div>
                  <div className="compare-cell hpc"><strong>$0.012</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="container">
            <header className="pricing-header">
              <span className="eyebrow">Plans</span>
              <h2 className="display-2">Three ways to join <em className="serif">the Accelerator.</em></h2>
              <p className="lede">All three include the core Capital Campaign Accelerator. The longer the commitment, the more we can include — and the less it costs per month.</p>
            </header>

            <div className="pricing-grid">
              <div className="price-card">
                <div className="price-card-name">Month-to-month</div>
                <div className="price-card-amount"><span className="price-card-amount-num">$2,500</span><span className="price-card-amount-period">/ mo</span></div>
                <div className="price-card-savings empty">placeholder</div>
                <p className="price-card-tag">Test the system without a long commitment.</p>
                <ul className="price-card-features">
                  <li>Readiness assessment + 90-day plan</li>
                  <li>Weekly group coaching</li>
                  <li>Plus-2 model: 3 seats per org</li>
                  <li>90-day money-back guarantee</li>
                  <li>Community access</li>
                  <li className="muted">Funding-opportunity database</li>
                </ul>
                <BookLink className="btn btn-ghost price-card-cta">Get started</BookLink>
              </div>

              <div className="price-card featured">
                <div className="price-card-badge">Most chosen</div>
                <div className="price-card-name">12-month annual</div>
                <div className="price-card-amount"><span className="price-card-amount-num">$24,000</span><span className="price-card-amount-period">/ year</span></div>
                <div className="price-card-savings">Save ~2 months · ≈ $2,000/mo</div>
                <p className="price-card-tag">For organizations actually running a 12-month campaign — and the system that fits it.</p>
                <ul className="price-card-features">
                  <li>Everything in month-to-month</li>
                  <li>Funding-opportunity database (Notion)</li>
                  <li>Quarterly campaign reviews</li>
                  <li>Optional board retreat (add-on)</li>
                  <li>Priority on copy reviews</li>
                  <li>90-day money-back guarantee</li>
                </ul>
                <BookLink className="btn btn-primary price-card-cta">Apply &amp; book a call</BookLink>
              </div>

              <div className="price-card">
                <div className="price-card-name">6-month</div>
                <div className="price-card-amount"><span className="price-card-amount-num">$13,500</span><span className="price-card-amount-period">/ 6 mo</span></div>
                <div className="price-card-savings">Save ~1 month · ≈ $2,250/mo</div>
                <p className="price-card-tag">A middle ground for shorter campaigns or readiness work.</p>
                <ul className="price-card-features">
                  <li>Everything in month-to-month</li>
                  <li>Funding-opportunity database (Notion)</li>
                  <li>90-day money-back guarantee</li>
                  <li>Community access</li>
                </ul>
                <BookLink className="btn btn-ghost price-card-cta">Get started</BookLink>
              </div>
            </div>
          </div>
        </section>

        <section className="guarantee-deep">
          <div className="guarantee-deep-grid">
            <div className="guarantee-deep-seal">
              <span className="guarantee-deep-seal-num">90</span>
              <span className="guarantee-deep-seal-text">Day<br />Guarantee</span>
            </div>
            <div className="guarantee-deep-content">
              <span className="eyebrow guarantee-deep-eyebrow">The guarantee, in detail</span>
              <h2 className="guarantee-deep-headline">If it's not working, we <em>refund every dollar</em>.</h2>
              <p className="guarantee-deep-body">We offer a <strong>90-day, 100% money-back guarantee</strong> on the Accelerator — no questions asked. If at any point in your first 90 days you decide it isn't the right fit for your organization, we refund every dollar you've paid.</p>
              <p className="guarantee-deep-body">Most capital campaign consultancies require 6 to 12 month minimum commitments. They know you can't tell in 30 days whether the work is landing. The 90-day window we offer is intentionally generous because we want you to feel confident this is the right fit <em>before</em> you commit financially.</p>
              <p className="guarantee-deep-body">If you decide to leave within 90 days, we don't ask why. We don't try to talk you out of it. We process the refund. You keep everything you've downloaded, built, and learned.</p>
            </div>
          </div>
        </section>

        {/* LAUNCH-HIDDEN START: Standalone Readiness Assessment. Pending Dan's ratification.
             Restore this section AND the homepage .pricing-note AND the footer
             "Readiness Assessment" link together — they reference each other. */}
        <section className="assessment-section launch-hidden">
          <div className="container">
            <header className="compare-header">
              <span className="eyebrow">Not ready to commit?</span>
              <h2 className="display-2">Start with the <em className="serif">Readiness Assessment.</em></h2>
              <p className="lede">A two-week deep dive into your campaign — and a way to know whether the Accelerator is right for you before you commit.</p>
            </header>

            <div className="assessment-card">
              <span className="assessment-draft-flag">⚑ Pending Dan's ratification</span>
              <div className="assessment-header">
                <div>
                  <span className="eyebrow" style={{ color: 'var(--blueprint)' }}>The Standalone Readiness Assessment</span>
                  <h3 className="assessment-headline">Two weeks. <em>One report.</em> A clear next step.</h3>
                </div>
                <div className="assessment-price">
                  <div className="assessment-price-amount">$2,500</div>
                  <div className="assessment-price-label">One-time fee</div>
                </div>
              </div>

              <div className="assessment-body">
                <div>
                  <p className="assessment-includes-title">What's included</p>
                  <ul className="assessment-includes-list">
                    <li>A 90-minute diagnostic call to understand your campaign</li>
                    <li>A rapid assessment of your readiness: board, staff, donor base, case for support</li>
                    <li>A written report with a documented readiness score</li>
                    <li>A 90-day action plan tailored to your organization</li>
                    <li>A board video summarizing the findings</li>
                    <li>A 60-minute review call to walk through the report together</li>
                  </ul>
                </div>

                <div className="assessment-rollover">
                  <p className="assessment-rollover-title">The rollover credit.</p>
                  <p className="assessment-rollover-body">If you decide to roll into the Accelerator within 90 days of receiving your Assessment, the <strong>full $2,500 credits toward your first payment</strong>. No friction, no double-charging. You don't pay for the same work twice.</p>
                </div>
              </div>

              <div className="assessment-cta">
                <BookLink className="btn btn-primary btn-large">Book the Assessment <span className="arrow">→</span></BookLink>
              </div>
            </div>
          </div>
        </section>
        {/* LAUNCH-HIDDEN END: Standalone Readiness Assessment */}

        <section className="cc-faq-section section">
          <div className="container">
            <div className="cc-faq-grid">
              <div className="cc-faq-side">
                <span className="eyebrow">Pricing questions</span>
                <h2 className="display-2">What people <em className="serif">actually</em> ask.</h2>
                <p className="lede">If your question isn't here, book a 30-minute call. We'll talk through pricing, timing, and fit — no commitment required.</p>
              </div>

              <div className="cc-faq-list">
                <div className="faq-item"><h3 className="faq-q">Are there any hidden fees?</h3><p className="faq-a">No setup fees, no per-seat charges, no add-ons hidden in the contract. The price you see is the price you pay. The Plus-2 model — 3 seats per organization — is included at every tier.</p></div>
                <div className="faq-item"><h3 className="faq-q">How do month-to-month, 6-month, and 12-month actually differ?</h3><p className="faq-a">You get the same core Accelerator at every tier — weekly coaching, the system, the community, the readiness assessment, the 90-day plan, the board video. What changes: month-to-month is the most flexible but highest monthly rate; 6-month is the middle path with the funding-opportunity database included for the engagement; 12-month is featured — full year, the database, quarterly reviews, and the lowest effective monthly rate.</p></div>
                <div className="faq-item"><h3 className="faq-q">Why are longer commitments cheaper per month?</h3><p className="faq-a">Because we can do more for an organization we know will be in the program long enough for the work to land. The funding-opportunity database, deeper case-of-support work, quarterly check-ins — these only make sense if you're going to be there long enough to use them.</p></div>
                <div className="faq-item"><h3 className="faq-q">Has anyone actually used the 90-day money-back guarantee?</h3><p className="faq-a">Yes. A small number of members have invoked it. They got refunded, no questions asked, no follow-up calls. If knowing the exact percentage matters to you, ask on the call.</p></div>
                <div className="faq-item"><h3 className="faq-q">What happens after 12 months if I want to keep going?</h3><p className="faq-a">You can renew. Most capital campaigns run 18 to 24 months, so a good number of members extend beyond the initial year. The renewal rate matches the original 12-month rate.</p></div>
                <div className="faq-item"><h3 className="faq-q">What if my campaign goal changes or stalls mid-engagement?</h3><p className="faq-a">Most campaigns shift mid-flight — that's normal. The Accelerator is built to flex with you. We don't lock you into a single goal or timeline. If something dramatic changes — board pauses, leadership transitions, public phase delays — we figure out the right next step on a call.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-final-cta">
          <div className="container">
            <span className="eyebrow">Ready to talk?</span>
            <h2 className="pricing-final-cta-headline">Come find out if we're a <em>fit</em>.</h2>
            <p className="pricing-final-cta-sub">Book a 30-minute call. We'll talk through your campaign, the tiers, and what makes sense for where you are. No commitment.</p>
            <div className="pricing-final-cta-buttons">
              <BookLink className="btn btn-primary btn-large">Book a call <span className="arrow">→</span></BookLink>
              <Link to="/scorecard" className="btn btn-ghost btn-large">Take the readiness scorecard</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
