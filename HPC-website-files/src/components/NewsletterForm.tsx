import { useState } from 'react';

/*
  NOT YET WIRED TO A BACKEND.

  Both forms below acknowledge locally and go nowhere. Before launch, replace
  the submit handler with a POST to whichever ESP HPC uses. Until then the copy
  ("check your inbox to confirm") is a promise the site cannot keep — worth
  fixing before the domain points here.
*/

/** The full newsletter card form on the Resources page. */
export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <form
        className={`newsletter-form${submitted ? ' submitted' : ''}`}
        id="newsletter-form"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <input
          type="email"
          className="newsletter-form-input"
          placeholder="email@yourorganization.org"
          required
          aria-label="Your email address"
        />
        <button type="submit" className="btn btn-primary newsletter-form-btn">
          Subscribe <span className="arrow">→</span>
        </button>
      </form>
      <p className="newsletter-form-thanks" style={{ display: submitted ? 'block' : 'none' }}>
        Thanks — check your inbox to confirm your subscription.
      </p>
      <p className="newsletter-form-note">
        Free · weekly · unsubscribe anytime · we never share your email
      </p>
    </>
  );
}

/** The compact form in the footer. */
export function FooterNewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="footer-newsletter-form"
      id="footer-newsletter-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input type="email" placeholder="your@email.com" aria-label="Your email address" />
      <button type="submit" disabled={submitted}>
        {submitted ? 'Thanks' : 'Subscribe'}
      </button>
    </form>
  );
}
