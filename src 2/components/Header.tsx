import { useEffect, useState } from 'react';
import { Link, useLocation } from '../router';
import { BookLink } from './Links';

const NAV = [
  { to: '/campaigns', label: 'Capital Campaigns' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/wins', label: 'Member Wins' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
];

/**
 * The HPC brand mark. This is a placeholder recreation built from the same
 * rounded-pill motif as the real logo — swap it for the real asset when it
 * lands, keeping the same dimensions.
 */
export function HpcMark() {
  return (
    <span className="hpc-symbol" aria-hidden="true">
      <svg width="36" height="32" viewBox="0 0 36 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="0" width="14" height="9" rx="4.5" fill="#FECE2E" />
        <rect x="3" y="11" width="14" height="9" rx="4.5" fill="#00629E" transform="rotate(-8 10 15.5)" />
        <rect x="19" y="13" width="14" height="9" rx="4.5" fill="#00629E" />
        <rect x="6" y="22" width="14" height="9" rx="4.5" fill="#F04B24" />
      </svg>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile nav whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header${open ? ' open' : ''}`} id="site-header">
      <div className="site-header-inner">
        <Link to="/" className="logo">
          <HpcMark />
          <span className="logo-mark-text">hpc</span>
          {/* Hidden by CSS — the client dropped this wordmark. Kept in the markup. */}
          <span className="logo-sub">
            Hussey<br />Philanthropic
          </span>
        </Link>

        <button
          className="nav-toggle"
          id="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className="nav-primary" id="nav-primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={pathname === item.to ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-ctas">
          <Link to="/scorecard" className="btn btn-ghost">
            Take the Scorecard
          </Link>
          <BookLink className="btn btn-primary">
            Book a call <span className="arrow">→</span>
          </BookLink>
        </div>
      </div>
    </header>
  );
}
