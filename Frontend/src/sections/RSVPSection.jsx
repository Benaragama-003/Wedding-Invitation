import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/animations/ScrollReveal';
import LuxuryDivider from '../components/ui/LuxuryDivider';

/* ============================================
   RSVP SECTION — Google Sheets Integration

   Reads guest name from ?guest= URL parameter.
   Submits response to Google Apps Script Web App.
   ============================================ */

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyMEpZNZEKVTmzj-xfuNWpY_r_yLPBjtsaxTpHIdIoP5_DhKvjo0mOxFw-EllBvB2HW/exec';

const RESPONSE_OPTIONS = [
  { value: '', label: 'Select your response' },
  { value: 'Accept with Pleasure', label: 'Accept with Pleasure' },
  { value: 'Regretfully Decline', label: 'Regretfully Decline' },
];

const GUEST_COUNT_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function RSVPSection() {
  const searchParams = new URLSearchParams(window.location.search);
  const guestParam = searchParams.get('guest');
  const guestName = guestParam ? decodeURIComponent(guestParam) : 'Our Dear Guest';

  const [response, setResponse] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!response) return;

    setStatus('submitting');

    const payload = {
      timestamp: new Date().toISOString(),
      guestName,
      response,
      number_of_guests_attending: guestCount,
      browser: navigator.userAgent,
      deviceType: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      // no-cors returns opaque response, so we assume success
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="rsvp"
      className="section-pad relative flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg)', minHeight: '80dvh' }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 560,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(16px, 4vw, 48px)',
          paddingRight: 'clamp(16px, 4vw, 48px)',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Heading ── */}
        <ScrollReveal animation="fade-in" duration={1}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{ height: '0.5px', width: 40, background: 'var(--color-accent)', opacity: 0.5 }} />
              <p
                className="font-body uppercase"
                style={{ color: 'var(--color-text-muted)', fontSize: 10, fontWeight: 500, letterSpacing: '0.28em', margin: 0 }}
              >
                Kindly Respond
              </p>
              <div style={{ height: '0.5px', width: 40, background: 'var(--color-accent)', opacity: 0.5 }} />
            </div>

            <h2
              className="font-script"
              style={{
                color: 'var(--color-text)',
                fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              RSVP
            </h2>

            <p
              className="font-serif italic"
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                marginTop: 8,
              }}
            >
              We would be honoured by your presence
            </p>

            <div style={{ marginTop: 16 }}>
              <LuxuryDivider width="40%" />
            </div>
          </div>
        </ScrollReveal>

        {/* ── RSVP Card ── */}
        <ScrollReveal animation="fade-up" delay={0.15}>
          <div
            style={{
              background: 'var(--color-bg-alt)',
              border: '1px solid var(--color-glass-border)',
              borderRadius: 24,
              boxShadow: '0 12px 32px var(--color-shadow), 0 2px 4px var(--color-shadow)',
              padding: 'clamp(36px, 6vw, 56px) clamp(24px, 5vw, 40px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Corner accents */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: 32, height: 32, borderTop: '1px solid var(--color-accent)', borderLeft: '1px solid var(--color-accent)', borderTopLeftRadius: 24, opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: 32, height: 32, borderTop: '1px solid var(--color-accent)', borderRight: '1px solid var(--color-accent)', borderTopRightRadius: 24, opacity: 0.5 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: 32, height: 32, borderBottom: '1px solid var(--color-accent)', borderLeft: '1px solid var(--color-accent)', borderBottomLeftRadius: 24, opacity: 0.5 }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 32, height: 32, borderBottom: '1px solid var(--color-accent)', borderRight: '1px solid var(--color-accent)', borderBottomRightRadius: 24, opacity: 0.5 }} />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* ── Success State ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  style={{ textAlign: 'center', padding: '24px 0' }}
                >
                  {/* Animated checkmark */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    style={{ marginBottom: 24 }}
                  >
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ margin: '0 auto', display: 'block' }}>
                      <circle cx="28" cy="28" r="26" stroke="var(--color-accent)" strokeWidth="1.5" fill="rgba(212,180,131,0.08)" />
                      <motion.path
                        d="M 17 28 L 24 35 L 39 20"
                        stroke="var(--color-accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                      />
                    </svg>
                  </motion.div>

                  <h3
                    className="font-script"
                    style={{ color: 'var(--color-accent)', fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', marginBottom: 12 }}
                  >
                    Thank You!
                  </h3>
                  <p
                    className="font-serif italic"
                    style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.8 }}
                  >
                    Your response has been recorded.
                    <br />
                    We look forward to celebrating with you.
                  </p>
                </motion.div>
              ) : status === 'error' ? (
                /* ── Error State ── */
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ textAlign: 'center', padding: '24px 0' }}
                >
                  <p className="font-serif" style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: 16 }}>
                    Something went wrong. Please try again.
                  </p>
                  <motion.button
                    onClick={() => setStatus('idle')}
                    className="cursor-pointer"
                    style={{
                      padding: '10px 28px',
                      borderRadius: 50,
                      background: 'var(--color-accent)',
                      color: '#FFFFF0',
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      fontWeight: 400,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      border: 'none',
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Try Again
                  </motion.button>
                </motion.div>
              ) : (
                /* ── Form State ── */
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
                >
                  {/* Guest Name (read-only) */}
                  <div>
                    <label
                      className="font-body uppercase"
                      style={{
                        display: 'block',
                        color: 'var(--color-text-muted)',
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: '0.2em',
                        marginBottom: 8,
                      }}
                    >
                      Guest Name
                    </label>
                    <div
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: 12,
                        background: 'rgba(212,180,131,0.06)',
                        border: '1px solid var(--color-glass-border)',
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                        color: 'var(--color-text)',
                        letterSpacing: '0.02em',
                        boxSizing: 'border-box',
                      }}
                    >
                      {guestName}
                    </div>
                  </div>

                  {/* Response Dropdown */}
                  <div>
                    <label
                      className="font-body uppercase"
                      htmlFor="rsvp-response"
                      style={{
                        display: 'block',
                        color: 'var(--color-text-muted)',
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: '0.2em',
                        marginBottom: 8,
                      }}
                    >
                      Your Response
                    </label>
                    <select
                      id="rsvp-response"
                      value={response}
                      onChange={(e) => setResponse(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: 12,
                        background: 'var(--color-bg-alt)',
                        border: '1px solid var(--color-input-border)',
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                        color: response ? 'var(--color-text)' : 'var(--color-text-muted)',
                        letterSpacing: '0.02em',
                        cursor: 'pointer',
                        outline: 'none',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23D4B483' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        paddingRight: 44,
                        boxSizing: 'border-box',
                      }}
                    >
                      {RESPONSE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={!opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Number of Guests (only shown if accepting) */}
                  <AnimatePresence>
                    {response === 'Accept with Pleasure' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <label
                          className="font-body uppercase"
                          htmlFor="rsvp-guest-count"
                          style={{
                            display: 'block',
                            color: 'var(--color-text-muted)',
                            fontSize: 10,
                            fontWeight: 500,
                            letterSpacing: '0.2em',
                            marginBottom: 8,
                          }}
                        >
                          Number of Guests Attending
                        </label>
                        <select
                          id="rsvp-guest-count"
                          value={guestCount}
                          onChange={(e) => setGuestCount(Number(e.target.value))}
                          style={{
                            width: '100%',
                            padding: '14px 18px',
                            borderRadius: 12,
                            background: 'var(--color-bg-alt)',
                            border: '1px solid var(--color-input-border)',
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                            color: 'var(--color-text)',
                            letterSpacing: '0.02em',
                            cursor: 'pointer',
                            outline: 'none',
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23D4B483' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 16px center',
                            paddingRight: 44,
                            boxSizing: 'border-box',
                          }}
                        >
                          {GUEST_COUNT_OPTIONS.map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={!response || status === 'submitting'}
                    className="cursor-pointer"
                    style={{
                      width: '100%',
                      padding: '15px 24px',
                      borderRadius: 50,
                      background: response ? 'var(--color-accent)' : 'rgba(212,180,131,0.35)',
                      color: '#FFFFF0',
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      border: '0.5px solid rgba(255,255,240,0.20)',
                      boxShadow: response ? '0 4px 16px rgba(184,115,51,0.25)' : 'none',
                      cursor: response && status !== 'submitting' ? 'pointer' : 'default',
                      transition: 'background 0.3s ease, box-shadow 0.3s ease',
                      marginTop: 8,
                    }}
                    whileHover={response ? { scale: 1.02, boxShadow: '0 6px 20px rgba(184,115,51,0.35)' } : {}}
                    whileTap={response ? { scale: 0.97 } : {}}
                  >
                    {status === 'submitting' ? (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          style={{ display: 'inline-block', width: 14, height: 14 }}
                        >
                          ◌
                        </motion.span>
                        Sending...
                      </span>
                    ) : (
                      'Send Response'
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(184,115,51,0.28), transparent)' }}
      />
    </section>
  );
}
