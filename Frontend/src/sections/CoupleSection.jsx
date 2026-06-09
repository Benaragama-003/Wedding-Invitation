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

function PersonCard({ person, delay = 0, bgImage }) {
  return (
    <ScrollReveal animation="fade-up" delay={delay}>
      <div
        className="relative overflow-visible group"
        style={{
          borderRadius: 20,
          background: 'var(--color-bg-alt)',
          border: '0.5px solid rgba(184, 115, 51, 0.22)',
          boxShadow: '0 16px 48px rgba(107, 76, 122, 0.10)',
          // No fixed height — let content define height
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Photo area — fixed height */}
        <div
          style={{
            height: 400,
            borderRadius: '20px 20px 0 0',
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <div
            className="transition-transform duration-1000 group-hover:scale-105"
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          />
          {/* Gradient fade into card bottom */}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(
                to bottom,
                transparent 45%,
                rgba(248, 246, 240, 0.55) 80%,
                rgba(248, 246, 240, 0.95) 100%
              )`,
            }}
          />
        </div>

        {/* Text area — always fully visible, never clipped */}
        <div
          style={{
            padding: '16px 28px 28px',
            background: 'var(--color-bg-alt)',
            borderRadius: '0 0 20px 20px',
            position: 'relative',
          }}
        >
          {/* Copper accent bar */}
          <div style={{ width: 32, height: 1, background: 'var(--color-accent)', marginBottom: 10 }} />

          <h3
            className="font-serif"
            style={{
              color: 'var(--color-text)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '0.01em',
              margin: '0 0 6px',
            }}
          >
            {person.name}
          </h3>

          <p
            className="font-serif italic"
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'clamp(0.88rem, 1.8vw, 1rem)',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {person.subtitle}
          </p>
        </div>

        {/* Copper corner accent — top right of photo */}
        <div
          style={{
            position: 'absolute', top: 0, right: 0,
            width: 44, height: 44,
            borderTop: '0.5px solid rgba(184, 115, 51, 0.35)',
            borderRight: '0.5px solid rgba(184, 115, 51, 0.35)',
            borderTopRightRadius: 20,
            pointerEvents: 'none',
          }}
        />
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
          maxWidth: 920,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(16px, 4vw, 48px)',
          paddingRight: 'clamp(16px, 4vw, 48px)',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Heading ── */}
        <ScrollReveal animation="fade-in" duration={1}>
          <div style={{ textAlign: 'center', marginBottom: 48, marginLeft: 'auto', marginRight: 'auto', maxWidth: 640 }}>

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

        {/* ── Cards ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            alignItems: 'start', // prevent cards stretching taller than content
          }}
        >
          <PersonCard person={BRIDE} delay={0.1} bgImage="/3.jpg" />
          <PersonCard person={GROOM} delay={0.2} bgImage="/8.jpg" />
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(184,115,51,0.28), transparent)' }}
      />
    </section>
  );
}