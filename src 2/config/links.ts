/* ============================================================================
   HPC — external links, in one place.

   >>> SET BOOKING_URL BEFORE PUBLISHING <<<
   Every "Book a call" / "Apply & book a call" / "Get started" / "Contact" CTA
   on the site reads BOOKING_URL — 20 of them. While it is an empty string those
   buttons render as inert (they still look right, they just do not navigate).
   Fill it in and they all wire up at once.
   ========================================================================== */
export const SITE_LINKS = {
  /** Dan's booking link. REQUIRED before launch. */
  BOOKING_URL: '',
  /** Luma event page for Capital Campaigns Live. Dan plans to move to Circle. */
  WEBINAR_URL: '',
  /** HPC company page on LinkedIn. */
  LINKEDIN_URL: '',
  /** Privacy policy — page does not exist yet. */
  PRIVACY_URL: '',
  /** Terms of service — page does not exist yet. */
  TERMS_URL: '',
} as const;

export const PAGE_TITLES: Record<string, string> = {
  '/': 'HPC — Capital campaigns, designed for the small nonprofit',
  '/campaigns': 'The Capital Campaign Accelerator — HPC',
  '/pricing': 'Pricing — HPC',
  '/wins': 'Member Wins — HPC',
  '/resources': 'Resources — HPC',
  '/about': 'About HPC',
  '/scorecard': 'Capital Campaign Readiness Scorecard — HPC',
};
