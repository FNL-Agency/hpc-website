import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

async function saveEmail(email: string, source: string) {
  const { error } = await supabase
    .from('newsletter_signups')
    .insert({ email: email.trim().toLowerCase(), source });
  return error;
}

/** The full newsletter card form on the Resources page. */
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <>
      <form
        className={`newsletter-form${submitted ? ' submitted' : ''}`}
        id="newsletter-form"
        onSubmit={async (e) => {
          e.preventDefault();
          if (pending || submitted) return;
          setPending(true);
          setFailed(false);
          const error = await saveEmail(email, 'resources');
          setPending(false);
          if (error) {
            setFailed(true);
            return;
          }
          setSubmitted(true);
          setEmail('');
        }}
      >
        <input
          type="email"
          className="newsletter-form-input"
          placeholder="email@yourorganization.org"
          required
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Your email address"
        />
        <button type="submit" className="btn btn-primary newsletter-form-btn" disabled={pending}>
          {pending ? 'Sending…' : 'Subscribe'} <span className="arrow">→</span>
        </button>
      </form>
      <p className="newsletter-form-thanks" style={{ display: submitted ? 'block' : 'none' }}>
        Thanks — you're on the list.
      </p>
      {failed && (
        <p className="newsletter-form-thanks" style={{ display: 'block' }}>
          Something went wrong. Please try again.
        </p>
      )}
      <p className="newsletter-form-note">
        Free · weekly · unsubscribe anytime · we never share your email
      </p>
    </>
  );
}

/** The compact form in the footer. */
export function FooterNewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  return (
    <form
      className="footer-newsletter-form"
      id="footer-newsletter-form"
      onSubmit={async (e) => {
        e.preventDefault();
        if (pending || submitted) return;
        setPending(true);
        const error = await saveEmail(email, 'footer');
        setPending(false);
        if (error) return;
        setSubmitted(true);
        setEmail('');
      }}
    >
      <input
        type="email"
        placeholder="your@email.com"
        required
        maxLength={255}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Your email address"
      />
      <button type="submit" disabled={submitted || pending}>
        {submitted ? 'Thanks' : pending ? '…' : 'Subscribe'}
      </button>
    </form>
  );
}
