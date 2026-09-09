import { useEffect, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { BookLink } from './Links';
import hpcLogoAsset from '../assets/HPC-Logo-TriBlue.webp.asset.json';

const NAV = [
  { to: '/campaigns', label: 'Capital Campaigns' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/wins', label: 'Member Wins' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
];

export function HpcMark() {
  return (
    <img className="hpc-logo-image" src={hpcLogoAsset.url} alt="HPC" />
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close the mobile nav whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header${open ? ' open' : ''}`} id="site-header">
      <div className="site-header-inner">
        <Link to="/" className="logo">
          <HpcMark />
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
            <Link key={item.to} to={item.to} activeProps={{ 'aria-current': 'page' }}>
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
