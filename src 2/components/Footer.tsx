// Auto-converted from HPC-Website-V2.9-Launch.html. Markup and copy are
// byte-identical to the approved design; only JSX-required attribute
// renaming was applied. Do not rewrite the copy.

import { FooterNewsletterForm } from './NewsletterForm';
import { Link } from '../router';
import { BookLink, ExternalLink } from './Links';
import { SITE_LINKS } from '../config/links';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="brand-graphic footer-graphic"><svg viewBox="0 0 480 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 150 L58 138 L92 150 L128 116 L162 128 L204 90 L236 104 L290 56 L320 78 L366 26 L402 66 L432 52 L464 150" stroke="#00629E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 172 C110 176 116 150 186 150 C252 150 244 176 300 166 C348 158 356 116 366 42" stroke="#00629E" strokeWidth="6.5" strokeLinecap="round" strokeDasharray="13 15" /></svg></div>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <span className="hpc-symbol" aria-hidden="true">
                  <svg width="36" height="32" viewBox="0 0 36 32" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="0" width="14" height="9" rx="4.5" fill="#FECE2E" />
                    <rect x="3" y="11" width="14" height="9" rx="4.5" fill="#00629E" transform="rotate(-8 10 15.5)" />
                    <rect x="19" y="13" width="14" height="9" rx="4.5" fill="#00629E" />
                    <rect x="6" y="22" width="14" height="9" rx="4.5" fill="#F04B24" />
                  </svg>
                </span>
                <span className="logo-mark-text">hpc</span>
                <span className="logo-sub">Hussey<br />Philanthropic</span>
              </div>
              <p className="footer-tagline">Capital campaigns, designed for the small to mid-sized nonprofit.</p>
              <div className="footer-newsletter">
                <span className="footer-newsletter-label">Friday Field Notes</span>
                <FooterNewsletterForm />
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Work with us</div>
              <ul>
                <li><Link to="/campaigns">The Accelerator</Link></li>
                {/* LAUNCH-HIDDEN START: links to the Assessment section, hidden pending ratification. */}
                <li className="launch-hidden"><Link to="/pricing">Readiness Assessment</Link></li>
                {/* LAUNCH-HIDDEN END */}
                <li><Link to="/pricing">Pricing</Link></li>
                <li><BookLink>Book a call</BookLink></li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Learn</div>
              <ul>
                <li><Link to="/resources">Monthly webinar</Link></li>
                <li><Link to="/wins">Member wins</Link></li>
                <li><Link to="/resources">Pillar guides</Link></li>
                <li><Link to="/resources">Friday newsletter</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Firm</div>
              <ul>
                <li><Link to="/about">About HPC</Link></li>
                <li><Link to="/about">Dan Hussey</Link></li>
                <li><BookLink>Contact</BookLink></li>
              </ul>
            </div>
          </div>
          <div className="footer-base">
            {/* OPEN QUESTION (carried over from V2.8): the registered entity is
                 Hussey Philanthropic Consulting Inc. Confirm with Dan whether this fine-print
                 line should carry the full legal name rather than "HPC". */}
            <span>© 2026 HPC. All rights reserved.</span>
            <div className="footer-base-links">
              <ExternalLink href={SITE_LINKS.PRIVACY_URL}>Privacy</ExternalLink>
              <ExternalLink href={SITE_LINKS.TERMS_URL}>Terms</ExternalLink>
              <ExternalLink href={SITE_LINKS.LINKEDIN_URL}>LinkedIn</ExternalLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
