// Auto-converted from HPC-Website-V2.9-Launch.html. Markup and copy are
// byte-identical to the approved design; only JSX-required attribute
// renaming was applied. Do not rewrite the copy.

import CostCalculator from '../components/CostCalculator';
import { HomeWinsGrid } from '../components/Wins';
import { Link } from '../router';
import { BookLink } from '../components/Links';

export default function HomePage() {
  return (
    <>
      <main id="page-home" className="page active">

        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-grid">
              <div>
                <span className="eyebrow">For small &amp; mid-sized nonprofits</span>
                <h1 className="display-1 hero-headline">
                  Capital campaigns,<br />
                  <em className="serif">designed</em> for the <span className="underline-mark">small&nbsp;nonprofit</span>.
                </h1>
                <p className="hero-sub">
                  We got tired of saying no to the small organizations capital campaign consulting was supposed to serve. So we changed the model. The Capital Campaign Accelerator is coaching, system, and community for nonprofits running $1M–$5M campaigns — without a six-figure feasibility study to start.
                </p>
                <div className="hero-ctas">
                  <Link to="/scorecard" className="btn btn-primary btn-large">Take the readiness scorecard <span className="arrow">→</span></Link>
                  <Link to="/campaigns" className="btn btn-ghost btn-large">See how the Accelerator works</Link>
                </div>
                <div className="hero-trust">
                  <span className="dot"></span>
                  <span><strong>90-day money-back guarantee.</strong>&nbsp;&nbsp;Pricing starts at $2,500/mo.</span>
                </div>
              </div>

              <aside className="hero-postcard">
                <div className="hero-postcard-stamp">
                  <span className="star">★ ★ ★ ★ ★</span>
                  Google review
                </div>
                <div className="hero-postcard-content">
                  <p className="hero-postcard-quote">Our first major fundraising campaign was a daunting task — but HPC instantly calmed our anxiety and set us on the right path. Our campaign exceeded its year-one projections.</p>
                  <p className="hero-postcard-attr">
                    <strong>Laura Hill</strong>
                    Development &amp; Communications Coordinator, The Sexual Assault Support Centre of Waterloo Region<br />
                    <span style={{ color: 'var(--blueprint)', fontWeight: '600' }}>First-time campaign · exceeded year-one goal</span>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="voices-section">
          <div className="container">
            <div className="voices-eyebrow-wrap">
              <span className="eyebrow">What we hear most</span>
            </div>
            <div className="voices-list">
              <p className="voices-quote">"We don't even know how much we're raising."</p>
              <p className="voices-quote">"We don't even have an Executive Director."</p>
              <p className="voices-quote">"They quoted us $20,000 just to start."</p>
            </div>
            <p className="voices-attribution">— the first conversations we have with most prospective members.</p>
          </div>
        </section>

        <section className="wing-section section">
          <div className="container">
            <header className="wing-header">
              <div className="brand-graphic bg-accent"><svg viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="34" cy="228" r="7" fill="rgb(199,61,26)" /><circle cx="48" cy="214" r="7" fill="rgb(203,73,27)" /><circle cx="63" cy="201" r="7" fill="rgb(208,85,29)" /><circle cx="77" cy="187" r="7" fill="rgb(212,97,31)" /><circle cx="91" cy="173" r="7" fill="rgb(217,109,32)" /><circle cx="106" cy="160" r="7" fill="rgb(221,121,34)" /><circle cx="120" cy="156" r="7" fill="rgb(226,133,36)" /><circle cx="134" cy="132" r="7" fill="rgb(231,145,37)" /><circle cx="149" cy="119" r="7" fill="rgb(235,157,39)" /><circle cx="163" cy="105" r="7" fill="rgb(240,169,41)" /><circle cx="177" cy="91" r="7" fill="rgb(244,181,42)" /><circle cx="192" cy="78" r="7" fill="rgb(249,193,44)" /><circle cx="206" cy="64" r="7" fill="rgb(254,206,46)" /><path d="M214 58 L214 88 M214 58 L184 58" stroke="#FECE2E" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <span className="eyebrow">Sound familiar?</span>
              <h2 className="display-2">From <em className="serif">winging it</em> <span className="wing-headline-arrow">→</span> to <em className="serif">running it</em>.</h2>
              <p className="lede">Most of the small-to-mid-sized organizations we work with don't know what they don't know about capital campaigns. Here's what changes when you have a system, coaches, and a community of campaigns running alongside yours.</p>
            </header>

            <div className="wing-grid">
              <div className="wing-col-header before">
                <span className="wing-icon x">✕</span>
                <span className="wing-col-label">Without a system</span>
              </div>
              <div className="wing-arrow-col"></div>
              <div className="wing-col-header after">
                <span className="wing-icon check">✓</span>
                <span className="wing-col-label">With the Accelerator</span>
              </div>

              <div className="wing-rows">
                <div className="wing-cell before">Stumbling into a campaign because your building got sold or you're staring down a 40-year-old portable</div>
                <div className="wing-arrow-cell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg></div>
                <div className="wing-cell after">A 90-day plan, board video, and rapid assessment that tells you what to do in the first month</div>

                <div className="wing-cell before">Quoted $20,000 just to start — and watching the conversation end there</div>
                <div className="wing-arrow-cell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg></div>
                <div className="wing-cell after">Pricing that makes sense for a $2M campaign, with a 90-day money-back guarantee</div>

                <div className="wing-cell before">Not sure what "campaign-ready" actually means</div>
                <div className="wing-arrow-cell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg></div>
                <div className="wing-cell after">A clear readiness assessment with a documented score and a path forward in writing</div>

                <div className="wing-cell before">A board that gives you blank stares when you bring up the campaign goal</div>
                <div className="wing-arrow-cell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg></div>
                <div className="wing-cell after">A board retreat and rollout deck that aligns your trustees</div>

                <div className="wing-cell before">Hoping the silent phase works out and bracing for the worst</div>
                <div className="wing-arrow-cell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg></div>
                <div className="wing-cell after">Weekly pipeline tracking and coaching to course-correct early</div>

                <div className="wing-cell before">Running point on a multi-million-dollar campaign with no peers who've done it before</div>
                <div className="wing-arrow-cell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg></div>
                <div className="wing-cell after">A community of nonprofit leaders running campaigns alongside yours, every week</div>

                <div className="wing-row-last">
                  <div className="wing-cell before">Reading articles and webinars, hoping it translates</div>
                  <div className="wing-arrow-cell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg></div>
                  <div className="wing-cell after">Coaching that catches mistakes <em>before</em> they cost you a major gift</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LAUNCH-HIDDEN START: Act 5 story. Restore when Act 5 grants permission and a photo exists.
             To restore: remove class="launch-hidden" from the <section> below and swap the
             .story-visual placeholder for the real image. */}
        <section className="story-section launch-hidden">
          <div className="story-grid">
            <div className="story-visual">
              <div className="story-visual-overlay">
                <span className="story-visual-tag">⚑ Photo pending</span>
                <span className="story-visual-caption">Act 5, Hamilton</span>
              </div>
            </div>
            <div className="story-content">
              <span className="story-permission-flag">Story pending Act 5's permission</span>
              <span className="story-eyebrow">A real story</span>
              <h2 className="story-title">John didn't plan to run a <em>capital campaign</em>.</h2>
              <p className="story-paragraph">His landlord said he wanted to sell the building. John called us the same day, asking: <em>do you think we could raise two million bucks?</em></p>
              <p className="story-paragraph">90 days later, Act 5 had the down payment in hand. They closed on the building. Today they're renovating it.</p>
              <div className="story-milestones">
                <span className="story-milestone"><strong>$1M</strong> raised in 90 days</span>
                <span className="story-milestone"><strong>Building</strong> secured</span>
                <span className="story-milestone"><strong>Renovation</strong> underway</span>
              </div>
              <p className="story-closer">This is what the Accelerator looks like in motion — a real deadline, a real organization, and a system that gets to work the moment you say go.</p>
              <span className="story-cta" style={{ opacity: '0.75', textTransform: 'uppercase' }}>Act 5 case study — coming soon</span>
            </div>
          </div>
        </section>
        {/* LAUNCH-HIDDEN END: Act 5 story */}

        <section className="which-section">
          <div className="container">
            <div className="which-header">
              <div>
                <span className="eyebrow">Find your starting point</span>
                <h2 className="display-2">Which one sounds <em className="serif">like you?</em></h2>
              </div>
              <p className="lede">Three honest paths in. None of them require you to commit to anything bigger than a 30-minute conversation.</p>
            </div>

            <div className="which-grid">
              <Link to="/scorecard" className="which-card">
                <span className="which-card-num">— 01</span>
                <h3 className="which-card-title">"We're thinking about a campaign and we're not sure if we're ready."</h3>
                <p className="which-card-desc">Start with the free Campaign Readiness Scorecard. 12 questions, instant report, honest read on whether now is the right moment — or what to fix first.</p>
                <span className="which-card-cta">
                  Take the scorecard
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 5h12M9 1l4 4-4 4" /></svg>
                </span>
              </Link>

              <Link to="/campaigns" className="which-card">
                <span className="which-tag">Most popular</span>
                <span className="which-card-num">— 02</span>
                <h3 className="which-card-title">"We're running a campaign and we need a system, coaches, and a community."</h3>
                <p className="which-card-desc">Join the Capital Campaign Accelerator. Assessment, 90-day plan, weekly coaching, the funding-opportunity database — and a 90-day money-back guarantee.</p>
                <span className="which-card-cta">
                  See how it works
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 5h12M9 1l4 4-4 4" /></svg>
                </span>
              </Link>

              <BookLink className="which-card">
                <span className="which-card-num">— 03</span>
                <h3 className="which-card-title">"I'm on a board and we don't have an Executive Director yet."</h3>
                <p className="which-card-desc">A lot of our best clients started this way — Track 3, St. Pat's, Cambridge Shelter Corp. We're built for boards leading the work themselves. Book a 30-minute call and we'll talk through what's possible.</p>
                <span className="which-card-cta">
                  Book a call
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 5h12M9 1l4 4-4 4" /></svg>
                </span>
              </BookLink>
            </div>
          </div>
        </section>

        <section className="method-section section">
          <div className="container">
            <div className="method-header">
              <div>
                <span className="eyebrow">The HPC method</span>
                <h2 className="display-2">The seven <em className="serif">keys</em> to a capital campaign.</h2>
              </div>
              <p className="lede">Built from 30 years of campaign work. Refined into a system you can actually run with a small team. We've cut everything that doesn't matter for organizations your size.</p>
            </div>

            <div className="method-grid">
              <div className="method-step key">
                <div className="method-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" /></svg></div>
                <h3 className="method-step-title">Transformational Vision</h3>
                <p className="method-step-desc">A vision donors can see themselves in — the reason your campaign is worth giving to.</p>
              </div>
              <div className="method-step key">
                <div className="method-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="5" r="2.4" /><circle cx="6" cy="18" r="2.4" /><circle cx="18" cy="18" r="2.4" /><path d="M12 7.4v3.2M10.5 12.6 7.4 15.8M13.5 12.6 16.6 15.8" strokeLinecap="round" /></svg></div>
                <h3 className="method-step-title">Campaign Leadership &amp; Infrastructure</h3>
                <p className="method-step-desc">The chair, cabinet, and systems that carry the campaign — built to fit a lean team.</p>
              </div>
              <div className="method-step key">
                <div className="method-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="4.5" /><path d="M8 12.4l2.6 2.6 5-5.6" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <h3 className="method-step-title">Track Record &amp; Authority</h3>
                <p className="method-step-desc">The proof and credibility that tells donors you can actually deliver.</p>
              </div>
              <div className="method-step key">
                <div className="method-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 4H4a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 16h3v3.2L11.5 16H20a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 20 4z" strokeLinejoin="round" /></svg></div>
                <h3 className="method-step-title">Story + Telling</h3>
                <p className="method-step-desc">The story of your work, told so it moves people to give.</p>
              </div>
              <div className="method-step key">
                <div className="method-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5 5" strokeLinecap="round" /></svg></div>
                <h3 className="method-step-title">Donor Identification &amp; Research</h3>
                <p className="method-step-desc">Finding the donors already in your orbit — and knowing what they can give.</p>
              </div>
              <div className="method-step key">
                <div className="method-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3.6" /><path d="M5.5 20a6.5 6.5 0 0 1 13 0" strokeLinecap="round" /></svg></div>
                <h3 className="method-step-title">Discovery Visits</h3>
                <p className="method-step-desc">The one-on-one conversations that turn prospects into lead gifts.</p>
              </div>
              <div className="method-step key">
                <div className="method-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 21V4" strokeLinecap="round" /><path d="M6 4.5h11l-2.6 3.6L17 11.7H6" strokeLinejoin="round" /></svg></div>
                <h3 className="method-step-title">Stewardship</h3>
                <p className="method-step-desc">Thanking, reporting, and recognizing — so donors come back for the next ask.</p>
              </div>
              <div className="method-step cta">
                <div className="method-step-num">→</div>
                <h3 className="method-step-title">Run the full method with us.</h3>
                <p className="method-step-desc">Three months. Coaching. A real system.</p>
                <Link to="/campaigns" className="method-cta-link">Explore the Accelerator <svg width="12" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 5h12M9 1l4 4-4 4" /></svg></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="wins-section">
          <div className="container">
            <header className="wins-header">
              <span className="eyebrow">Recent member wins</span>
              <h2 className="display-2">Our clients are the ones <em className="serif">winning.</em></h2>
              <p className="lede">We don't lead with what HPC has raised. We lead with what our clients have raised — most of them their first time at the wheel.</p>
            </header>

            <HomeWinsGrid />
            <div className="wins-footer">
              <p className="wins-footer-text">Real wins from members of the Capital Campaign Accelerator, added as clients give permission.</p>
              <Link to="/wins" className="btn btn-ghost">See all member wins <span className="arrow">→</span></Link>
            </div>
          </div>
        </section>

        <CostCalculator />
        <section className="pricing-section">
          <div className="container">
            <header className="pricing-header">
              <span className="eyebrow">Pricing</span>
              <h2 className="display-2">No hourly billing. No <em className="serif">six-figure</em> retainers.</h2>
              <p className="lede">Three ways to work with us. Every plan includes the assessment, the 90-day plan, weekly coaching, and access to our community.</p>
            </header>

            <div className="pricing-grid">
              <div className="price-card">
                <div className="price-card-name">Month-to-month</div>
                <div className="price-card-amount">
                  <span className="price-card-amount-num">$2,500</span><span className="price-card-amount-period">/ mo</span>
                </div>
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
                <div className="price-card-amount">
                  <span className="price-card-amount-num">$24,000</span><span className="price-card-amount-period">/ year</span>
                </div>
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
                <div className="price-card-amount">
                  <span className="price-card-amount-num">$13,500</span><span className="price-card-amount-period">/ 6 mo</span>
                </div>
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

            {/* LAUNCH-HIDDEN START: references the Standalone Readiness Assessment, which is
                 still pending Dan's ratification. Restore together with the Assessment section
                 on the Pricing page. */}
            <p className="pricing-note launch-hidden">
              <strong>Not sure yet?</strong> Start with the standalone Readiness Assessment ($2,500). If you decide to roll into the Accelerator within 90 days, we credit the full assessment cost toward your first payment. No friction, no double-charging.
            </p>
            {/* LAUNCH-HIDDEN END */}

            <div className="guarantee-strip">
              <div className="guarantee-seal">
                <span className="guarantee-seal-num">90</span>
                <span className="guarantee-seal-text">Day<br />Guarantee</span>
              </div>
              <div className="guarantee-copy">
                <div className="guarantee-copy-title">100% money back. No questions asked.</div>
                <p className="guarantee-copy-desc">If, in the first 90 days, the Accelerator isn't a fit — show up, do the work, and tell us. You get every dollar back. You keep everything you've downloaded and built.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="resources-section section">
          <div className="container">
            <div className="resources-header">
              <div>
                <span className="eyebrow">Resources &amp; learning</span>
                <h2 className="display-2">Where most of our <em className="serif">leads</em> learn first.</h2>
              </div>
              <p className="lede">A monthly capital campaigns webinar, a Friday newsletter for nonprofit leaders, and a small library of guides we wrote for our own clients.</p>
            </div>

            <div className="resources-grid">
              <Link to="/resources" className="resource-card resource-feat">
                <div className="resource-tag">Live · monthly · free</div>
                <h3 className="resource-title">Capital Campaigns Live: a monthly webinar for nonprofit leaders</h3>
                <p className="resource-desc">90 minutes with Dan and a guest each month. Real campaigns, real numbers, real questions from the room. People sign up two months out — for good reason.</p>
                {/* LAUNCH-HIDDEN START: the session date below is stale (May 22). Restore with a
                     real upcoming date and topic. */}
                <div className="webinar-date-block launch-hidden">
                  <strong>Next session: Thursday, May 22 · 1:00 PM ET</strong>
                  "How small teams beat big consultancies on campaign close rates."
                </div>
                {/* LAUNCH-HIDDEN END */}
                <div className="resource-meta">
                  <span>Hosted on Luma</span>
                  <span>→ Reserve your seat</span>
                </div>
              </Link>

              <Link to="/resources" className="resource-card">
                <div className="resource-tag">Pillar guide · 14 min</div>
                <h3 className="resource-title">What is a capital campaign?</h3>
                <p className="resource-desc">The plain-English explanation we wish someone had handed our clients before their boards started asking questions.</p>
                <div className="resource-meta">
                  <span>Free guide</span>
                  <span>→ Read</span>
                </div>
              </Link>

              <Link to="/resources" className="resource-card">
                <div className="resource-tag">Guide · 8 min</div>
                <h3 className="resource-title">Are we campaign-ready?</h3>
                <p className="resource-desc">The 12 questions we work through with every prospective Accelerator member — share with your board before the next meeting.</p>
                <div className="resource-meta">
                  <span>Free guide</span>
                  <span>→ Read</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="container final-cta-inner">
            <div className="brand-graphic bg-accent"><svg viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="8" y="224" width="70" height="24" rx="12" fill="#7ECEF3" /><rect x="30" y="198" width="70" height="24" rx="12" fill="#00629E" /><rect x="52" y="172" width="70" height="24" rx="12" fill="#7ECEF3" /><rect x="74" y="146" width="70" height="24" rx="12" fill="#00629E" /><rect x="96" y="120" width="70" height="24" rx="12" fill="#7ECEF3" /><rect x="118" y="94" width="70" height="24" rx="12" fill="#00629E" /><rect x="140" y="68" width="70" height="24" rx="12" fill="#7ECEF3" /><rect x="162" y="42" width="70" height="24" rx="12" fill="#00629E" /><rect x="184" y="16" width="70" height="24" rx="12" fill="#00629E" /></svg></div>
            <span className="eyebrow">Ready when you are</span>
            <h2 className="display-1">Let's see if we're <em className="serif">a fit</em>.</h2>
            <p className="lede">A 30-minute call with our team. No pitch. We'll audit where you are and tell you honestly whether the Accelerator is the right next step.</p>
            <div className="final-cta-buttons">
              <BookLink className="btn btn-primary btn-large">Book a call <span className="arrow">→</span></BookLink>
              <Link to="/scorecard" className="btn btn-ghost btn-large">Take the scorecard first</Link>
            </div>
            <p className="final-cta-tertiary">Or read <Link to="/resources">"What is a capital campaign?"</Link> if you're earlier in the journey.</p>
          </div>
        </section>

      </main>
    </>
  );
}
