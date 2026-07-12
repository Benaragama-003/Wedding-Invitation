import React from 'react';
import ScrollReveal from '../components/animations/ScrollReveal';

// Removed BRIDE and GROOM constants as they are hardcoded in the new layout.

/* ── Decorative ampersand / heart divider ── */
function OrnamentalDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, margin: '36px 0' }}>
      <div style={{ height: '0.5px', width: 60, background: 'linear-gradient(90deg, transparent, var(--color-accent))' }} />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      <div style={{ height: '0.5px', width: 60, background: 'linear-gradient(90deg, var(--color-accent), transparent)' }} />
    </div>
  );
}

// NameBlock is no longer used, removed.

export default function CoupleSection() {
  const searchParams = new URLSearchParams(window.location.search);
  const guestParam = searchParams.get('guest');
  const guestName = guestParam ? decodeURIComponent(guestParam) : 'Our Dear Guest';

  return (
    <section
      id="couple"
      className="section-pad relative flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg)', minHeight: '100dvh' }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 720,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(16px, 4vw, 48px)',
          paddingRight: 'clamp(16px, 4vw, 48px)',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Heading ── */}
        <ScrollReveal animation="fade-in" duration={1}>
          <div style={{ textAlign: 'center', marginBottom: 20, marginLeft: 'auto', marginRight: 'auto', maxWidth: 640 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{ height: '0.5px', width: 40, background: 'var(--color-accent)', opacity: 0.5 }} />
              <p
                className="font-body uppercase"
                style={{ color: 'var(--color-text-muted)', fontSize: 10, fontWeight: 500, letterSpacing: '0.28em', margin: 0 }}
              >
                The Bride &amp; Groom
              </p>
              <div style={{ height: '0.5px', width: 40, background: 'var(--color-accent)', opacity: 0.5 }} />
            </div>

            <p
              className="font-serif italic leading-relaxed"
              style={{ fontSize: 'clamp(1.1rem, 2.6vw, 1.5rem)', color: 'var(--color-text)', margin: 0 }}
            >
              "Together with love in our hearts and the blessings of our families,
              we invite you to share in the joy of our wedding celebration."
            </p>
          </div>
        </ScrollReveal>

        {/* ── Invitation Card Text Layout ── */}
        <ScrollReveal animation="fade-up" delay={0.15}>
          <div
            style={{
              background: 'var(--color-bg-alt)',
              border: '1px solid var(--color-glass-border)',
              borderRadius: 24,
              boxShadow: '0 12px 32px var(--color-shadow), 0 2px 4px var(--color-shadow)',
              padding: 'clamp(48px, 8vw, 80px) clamp(24px, 5vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            {/* Corner accents */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: 40, height: 40, borderTop: '1px solid var(--color-accent)', borderLeft: '1px solid var(--color-accent)', borderTopLeftRadius: 24, opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: 40, height: 40, borderTop: '1px solid var(--color-accent)', borderRight: '1px solid var(--color-accent)', borderTopRightRadius: 24, opacity: 0.5 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: 40, height: 40, borderBottom: '1px solid var(--color-accent)', borderLeft: '1px solid var(--color-accent)', borderBottomLeftRadius: 24, opacity: 0.5 }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 40, height: 40, borderBottom: '1px solid var(--color-accent)', borderRight: '1px solid var(--color-accent)', borderBottomRightRadius: 24, opacity: 0.5 }} />

            {/* Couple Names */}
            <h1
              className="font-script"
              style={{
                color: 'var(--color-accent)', /* Gold color for names */
                fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                lineHeight: 1.1,
                marginBottom: '2rem',
                textShadow: '0 2px 12px rgba(184,115,51,0.15)',
              }}
            >
              Nilushi &amp; Sangeeth
            </h1>

            {/* Parents block */}
            <div
              className="font-body"
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                letterSpacing: '0.18em',
                lineHeight: 2,
                textTransform: 'uppercase',
                marginBottom: '2.5rem',
              }}
            >
              <p style={{ marginBottom: 8, fontWeight: 500 }}>Together with their parents</p>
              <p style={{ color: 'var(--color-text)', fontWeight: 600 }}>Mr. &amp; Mrs. Benaragama</p>
              <p style={{ margin: '4px 0', fontSize: '0.65rem' }}>and</p>
              <p style={{ color: 'var(--color-text)', fontWeight: 600 }}>Mr. &amp; Mrs. Bandara</p>
            </div>

            <p
              className="font-body uppercase"
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                letterSpacing: '0.2em',
                marginBottom: '1.5rem',
              }}
            >
              Take pleasure in inviting
            </p>

            {/* ── Guest Invitation Focal Block ── */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: '28px 0',
              }}
            >
              {/* Top Gold Divider */}
              <div style={{ width: 100, height: 1, background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)', marginBottom: 28 }} />

              {/* Guest Name */}
              <h2
                className="font-script"
                style={{
                  color: 'var(--color-accent)',
                  fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                  lineHeight: 1.2,
                  margin: 0,
                  textShadow: '0 2px 8px rgba(184,115,51,0.1)',
                  textAlign: 'center',
                }}
              >
                {guestName}
              </h2>

              {/* Bottom Gold Divider */}
              <div style={{ width: 100, height: 1, background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)', marginTop: 28 }} />
            </div>

            <p
              className="font-body uppercase"
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                letterSpacing: '0.2em',
                marginTop: '1.5rem',
                marginBottom: 0,
              }}
            >
              To celebrate their marriage
            </p>
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