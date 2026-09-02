import type { CSSProperties, ReactNode } from 'react';
import { SITE_LINKS } from '../config/links';

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Every booking CTA on the site. Reads BOOKING_URL from src/config/links.ts so
 * there is exactly one place to change it. While the URL is empty the link
 * renders inert rather than sending people to a broken "#".
 */
export function BookLink({ children, className, style }: Props) {
  const url = SITE_LINKS.BOOKING_URL;
  if (!url) {
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
    <a href={url} className={className} style={style} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
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
