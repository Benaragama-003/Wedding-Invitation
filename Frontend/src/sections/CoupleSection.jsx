import React from 'react';
import ScrollReveal from '../components/animations/ScrollReveal';

const BRIDE = {
  name: 'Nilushi Benaragama',
  subtitle: 'Beloved daughter of the Benaragama family',
};
const GROOM = {
  name: 'Sangeeth Bandara',
  subtitle: 'Beloved son of the Bandara family',
};

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

/* ── Single name block (text-only, no photo) ── */
function NameBlock({ person, delay = 0 }) {
  return (
    <ScrollReveal animation="fade-up" delay={delay}>
      <div style={{ textAlign: 'center', padding: '0 12px' }}>
        <h3
          className="font-script"
          style={{
            color: 'var(--color-text)',
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '0.01em',
            margin: '0 0 10px',
          }}
        >
          {person.name}
        </h3>

        <p
          className="font-serif italic"
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'clamp(0.88rem, 1.8vw, 1.05rem)',
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          {person.subtitle}
        </p>
      </div>
    </ScrollReveal>
  );
}

export default function CoupleSection() {
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

        {/* ── Elegant text-only card ── */}
        <ScrollReveal animation="fade-up" delay={0.15}>
          <div
            style={{
              background: 'var(--color-bg-alt)',
              border: '0.5px solid rgba(184, 115, 51, 0.20)',
              borderRadius: 24,
              boxShadow: '0 16px 48px rgba(107, 76, 122, 0.07)',
              padding: 'clamp(40px, 6vw, 64px) clamp(24px, 5vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Corner accents */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: 32, height: 32, borderTop: '0.5px solid rgba(184,115,51,0.35)', borderLeft: '0.5px solid rgba(184,115,51,0.35)', borderTopLeftRadius: 24 }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: 32, height: 32, borderTop: '0.5px solid rgba(184,115,51,0.35)', borderRight: '0.5px solid rgba(184,115,51,0.35)', borderTopRightRadius: 24 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: 32, height: 32, borderBottom: '0.5px solid rgba(184,115,51,0.35)', borderLeft: '0.5px solid rgba(184,115,51,0.35)', borderBottomLeftRadius: 24 }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 32, height: 32, borderBottom: '0.5px solid rgba(184,115,51,0.35)', borderRight: '0.5px solid rgba(184,115,51,0.35)', borderBottomRightRadius: 24 }} />

            {/* Bride name */}
            <NameBlock person={BRIDE} delay={0.2} />

            {/* Ornamental divider with heart */}
            <OrnamentalDivider />

            {/* Groom name */}
            <NameBlock person={GROOM} delay={0.3} />
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