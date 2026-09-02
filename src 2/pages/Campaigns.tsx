// Auto-converted from HPC-Website-V2.9-Launch.html. Markup and copy are
// byte-identical to the approved design; only JSX-required attribute
// renaming was applied. Do not rewrite the copy.

import { Link } from '../router';
import { BookLink } from '../components/Links';

export default function CampaignsPage() {
  return (
    <>
      <main id="page-campaigns" className="page active">
        <div className="breadcrumb container">
          <div className="breadcrumb-inner">
            <Link to="/">Home</Link><span className="sep">/</span><span>Capital Campaigns</span>
          </div>
        </div>

        <section className="cc-hero container">
          <div className="cc-hero-grid">
            <div>
              <span className="eyebrow">The HPC Capital Campaign Accelerator</span>
              <h1 className="display-1 cc-hero-headline">
                A capital campaign system for organizations that <em className="serif">don't have</em> a campaign team.
              </h1>
              <p className="cc-hero-sub">
                Most of our members don't have a director of development. Some don't have an ED. Almost none have run a capital campaign before. The Accelerator was designed for exactly that organization — not the hospital foundation with ten fundraisers on staff.
              </p>
              <div className="hero-ctas">
                <BookLink className="btn btn-primary btn-large">Apply &amp; book a call <span className="arrow">→</span></BookLink>
                <Link to="/scorecard" className="btn btn-ghost btn-large">Take the readiness scorecard</Link>
              </div>
            </div>

            <aside className="cc-fact-rows">
              <div className="cc-fact-row"><span className="cc-fact-key">Goal range</span><span className="cc-fact-val">$1M – $5M campaigns</span></div>
              <div className="cc-fact-row"><span className="cc-fact-key">Length</span><span className="cc-fact-val">3 months → 12 months</span></div>
              <div className="cc-fact-row"><span className="cc-fact-key">Cadence</span><span className="cc-fact-val">Weekly coaching</span></div>
              <div className="cc-fact-row"><span className="cc-fact-key">Starts</span><span className="cc-fact-val">$2,500 / month</span></div>
              <div className="cc-fact-row"><span className="cc-fact-key">Guarantee</span><span className="cc-fact-val">90-day, 100% refund</span></div>
              <div className="cc-fact-row"><span className="cc-fact-key">Built for</span><span className="cc-fact-val">First-time campaigners</span></div>
            </aside>
          </div>
        </section>

        {/* NOTE: source year/edition still to be verified with Dan before publication. */}
        <section className="cc-insight-band">
          <div className="cc-insight-inner">
            <span className="cc-insight-eyebrow">Numbers worth knowing</span>
            <div className="cc-insight-stats">
              <div className="cc-insight-stat-block">
                <p className="cc-insight-number">$3.4M</p>
                <p className="cc-insight-label">average capital campaign size for organizations raising under $1M annually.</p>
              </div>
              <div className="cc-insight-stat-block">
                <p className="cc-insight-number">$10M+</p>
                <p className="cc-insight-label">average capital campaign size for organizations raising over $1M annually.</p>
              </div>
            </div>
            <p className="cc-insight-text">Most leaders we talk to underestimate what their organization can raise. The data says: you can almost certainly do more than you think.</p>
            <p className="cc-insight-source">Source: Capital Campaign Pro</p>
          </div>
        </section>

        <section className="cc-what-section">
          <div className="container">
            <div className="cc-what-grid">
              <div className="cc-what-block">
                <span className="eyebrow">What it actually is</span>
                <h2 className="display-3">Part coaching. Part execution. <em className="serif">All</em> wrapped in community.</h2>
                <p>The Accelerator is a structured 14-week journey from <em>clarity to action</em>. Week 1 is the rapid assessment, the 90-day plan, the report, and the board video. Then 12 weeks of weekly coaching as you actually run the work — silent phase, lead gifts, board cabinet, all of it.</p>
                <p>If you decide to keep going past the first three months, that's when the funding-opportunity database, quarterly reviews, and longer cadence kick in.</p>
              </div>
              <div className="cc-what-block">
                <span className="eyebrow">Who it's actually for</span>
                <h2 className="display-3">Organizations <em className="serif">running point</em> on their own campaign.</h2>
                <p>An ED who's leading the campaign on top of the day job. A board chair without a development professional. A development director who's never carried a capital campaign before.</p>
                <p>If that's you, the Accelerator was built for your shape of organization — not adapted from a model designed for a hospital foundation. The plus-2 seat model means three people from your team can be in the room every week. Bring the ED, the board chair, and a junior staffer if you want.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cc-elements-section section">
          <div className="container">
            <div className="method-header">
              <div>
                <span className="eyebrow">The seven elements</span>
                <h2 className="display-2">What gets <em className="serif">built</em> in 14 weeks.</h2>
              </div>
              <p className="lede">Every element is a deliverable you'll have on file at the end of your assessment phase. We don't ship reports and walk away — these are the assets you'll use to actually run the work.</p>
            </div>

            <div className="method-grid">
              <div className="method-step"><div className="method-step-num">01</div><h3 className="method-step-title">Vision &amp; case for support</h3><p className="method-step-desc">A document your board can read, your donors can pass along, and your campaign cabinet can rally behind.</p></div>
              <div className="method-step"><div className="method-step-num">02</div><h3 className="method-step-title">Readiness assessment</h3><p className="method-step-desc">An honest read on your team, your board, and your prospect pipeline. Scored.</p></div>
              <div className="method-step"><div className="method-step-num">03</div><h3 className="method-step-title">Goal &amp; gift table</h3><p className="method-step-desc">A goal with the gift pyramid behind it. No round-number wishful thinking.</p></div>
              <div className="method-step"><div className="method-step-num">04</div><h3 className="method-step-title">Leadership structure</h3><p className="method-step-desc">The campaign chair, cabinet, and committee shape that fits your org.</p></div>
              <div className="method-step"><div className="method-step-num">05</div><h3 className="method-step-title">90-day plan + 12-month timeline</h3><p className="method-step-desc">A roadmap that lets you breathe — written down, not in someone's head.</p></div>
              <div className="method-step"><div className="method-step-num">06</div><h3 className="method-step-title">Solicitation playbook</h3><p className="method-step-desc">Scripts, ask amounts, donor strategy notes. Rehearsed before the meeting.</p></div>
              <div className="method-step"><div className="method-step-num">07</div><h3 className="method-step-title">Stewardship plan</h3><p className="method-step-desc">How donors get thanked, reported back to, and invited into the next ask.</p></div>
              <div className="method-step cta"><div className="method-step-num">→</div><h3 className="method-step-title">Plus a board retreat (optional add-on).</h3><p className="method-step-desc">Done-with-you, full-day, on-site or virtual.</p><BookLink className="method-cta-link">Learn about the retreat <svg width="12" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 5h12M9 1l4 4-4 4" /></svg></BookLink></div>
            </div>
          </div>
        </section>

        <section className="cc-fit-section">
          <div className="container">
            <header className="cc-fit-header">
              <span className="eyebrow">Honest fit-check</span>
              <h2 className="display-2">Who we work with <em className="serif">best</em> — and who we don't.</h2>
              <p className="lede">We say no to organizations all the time. The wrong fit costs both of us. Here's what tends to predict a good engagement.</p>
            </header>

            <div className="cc-fit-grid">
              <div className="cc-fit-card fit">
                <h3 className="cc-fit-title">Built for you if…</h3>
                <ul className="cc-fit-list">
                  <li>You're running (or about to run) a $1M–$5M capital campaign</li>
                  <li>You're a small-to-mid-sized organization with a lean team</li>
                  <li>You don't have an in-house director of development — or maybe even an ED</li>
                  <li>Your board has never been through a capital campaign before</li>
                  <li>You'd rather build the muscle in-house than pay someone to do it for you</li>
                  <li>You want a coach in your corner, not a 200-page report</li>
                </ul>
              </div>
              <div className="cc-fit-card no">
                <h3 className="cc-fit-title">Probably not for you if…</h3>
                <ul className="cc-fit-list">
                  <li>Your campaign goal is over $10M (we'll point you to the right partner)</li>
                  <li>You have a development team of 5+ already running point</li>
                  <li>You want a fully done-for-you campaign — that's a different model</li>
                  <li>You're not willing to put a few hours into the system each week</li>
                  <li>You're looking for a feasibility study and nothing else</li>
                  <li>You're not at the point of running a campaign yet — start with the scorecard</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="cc-faq-section section">
          <div className="container">
            <div className="cc-faq-grid">
              <aside className="cc-faq-side">
                <span className="eyebrow">Honest answers</span>
                <h2 className="display-2">Things people ask <em className="serif">before</em> they book.</h2>
                <p className="lede">If you can't find your question here, the team replies to every email. We mean it.</p>
              </aside>

              <div className="cc-faq-list">
                <div className="faq-item"><h3 className="faq-q">Is this a course, a coaching program, or a consultancy?</h3><p className="faq-a">It's all three. There's a structured curriculum, weekly live coaching with the HPC team, and the work is yours to keep. Closer to a coaching program than a traditional consultancy — you're running the campaign, we're in the room each week.</p></div>
                <div className="faq-item"><h3 className="faq-q">What's actually different about the Accelerator vs. a traditional consulting firm?</h3><p className="faq-a">Three things: (1) pricing — $2,500/mo, not $25K to start; (2) format — we coach you to run it, instead of running it for you; (3) the 90-day money-back guarantee, which most consultancies will not offer.</p></div>
                <div className="faq-item"><h3 className="faq-q">We don't even have an ED yet. Is this a problem?</h3><p className="faq-a">No — and you're in good company. Several of our most successful members started without one. The plus-2 seat model is built for exactly this: a board chair, a junior staffer, and an ED-when-you-have-one can all rotate through the same membership.</p></div>
                <div className="faq-item"><h3 className="faq-q">How does the 90-day money-back guarantee work?</h3><p className="faq-a">Show up to the calls, do the assessment, build your 90-day plan. If at any point in the first 90 days you don't think the program delivered the value you expected, email us and we refund every dollar. You keep everything you've downloaded and built.</p></div>
                <div className="faq-item"><h3 className="faq-q">What if our campaign is over $10M?</h3><p className="faq-a">The Accelerator is calibrated to $1M–$5M campaigns. For larger campaigns we'll point you to a planned-giving partner we're working closely with — different shape of work, different model. Book a call and we'll talk it through.</p></div>
                <div className="faq-item"><h3 className="faq-q">Can I see what's inside before I commit?</h3><p className="faq-a">Yes. Book a 30-minute call. We'll walk you through the curriculum, show you the assessment, and tell you honestly whether you're ready. No pitch.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="container final-cta-inner">
            <span className="eyebrow">If this sounds right</span>
            <h2 className="display-1">Let's get on a <em className="serif">call</em>.</h2>
            <p className="lede">30 minutes with our team. We'll audit where you are, tell you what's possible in 90 days, and decide together whether the Accelerator is your next step.</p>
            <div className="final-cta-buttons">
              <BookLink className="btn btn-primary btn-large">Apply &amp; book a call <span className="arrow">→</span></BookLink>
              <Link to="/scorecard" className="btn btn-ghost btn-large">Start with the scorecard</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
