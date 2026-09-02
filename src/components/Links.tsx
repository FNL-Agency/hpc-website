import type { CSSProperties, ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { SITE_LINKS } from '../config/links';

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Every booking CTA on the site. Always routes to the in-site /book page,
 * which embeds the scheduler, so visitors never leave the site.
 */
export function BookLink({ children, className, style }: Props) {
  return (
    <Link to="/book" className={className} style={style}>
      {children}
    </Link>
  );
}

/** An outbound link whose URL may not be set yet (webinar, LinkedIn, legal). */
export function ExternalLink({ href, children, className, style }: Props & { href: string }) {
  if (!href) {
    return (
      <a
        href="#"
        className={className}
        style={style}
        aria-disabled="true"
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={className} style={style} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
