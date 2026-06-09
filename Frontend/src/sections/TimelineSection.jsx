import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/animations/ScrollReveal';

const calendarIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="var(--color-accent)" strokeWidth="1.5" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="var(--color-accent)" strokeWidth="1.5" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="var(--color-accent)" strokeWidth="1.5" />
  </svg>
);
const clockIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" stroke="var(--color-accent)" strokeWidth="1.5" />
    <polyline points="12 6 12 12 16 14" stroke="var(--color-accent)" strokeWidth="1.5" />
  </svg>
);
const locationIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="var(--color-accent)" strokeWidth="1.5" />
    <circle cx="12" cy="10" r="3" stroke="var(--color-accent)" strokeWidth="1.5" />
  </svg>
);

const BRIEF_DETAILS = [
  {
    icon: calendarIcon,
    title: 'Friday, 16th October',
    subtitle: 'The Year Two Thousand Twenty Six',
  },
  {
    icon: clockIcon,
    title: '09:30 AM Onwards',
    subtitle: 'Poruwa Ceremony at 09:50 AM',
  },
  {
    icon: locationIcon,
    title: 'Hotel Kashyapa',
    subtitle: 'Avissawella',
    link: 'https://goo.gl/maps/placeholder',
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="section-pad relative flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg)', minHeight: '100dvh' }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 800,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(16px, 4vw, 48px)',
          paddingRight: 'clamp(16px, 4vw, 48px)',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Title ── */}
        <ScrollReveal animation="fade-in" duration={1}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{ height: '0.5px', width: 32, background: 'var(--color-accent)', opacity: 0.5 }} />
              <p
                className="font-body uppercase"
                style={{ color: 'var(--color-text-muted)', fontSize: 10, fontWeight: 500, letterSpacing: '0.28em', margin: 0 }}
              >
                The Sacred Union
              </p>
              <div style={{ height: '0.5px', width: 32, background: 'var(--color-accent)', opacity: 0.5 }} />
            </div>

            <h2
              className="font-script leading-tight"
              style={{ color: 'var(--color-text)', fontSize: 'clamp(2.8rem, 6vw, 4rem)', margin: 0 }}
            >
              A Celebration of
              <br />
              <span
                className="font-serif italic"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
              >
                Tradition &amp; Love
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* ── Details Card ── */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          {/* Outer centering shell */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: 520,
                background: 'var(--color-bg-alt)',
                border: '0.5px solid rgba(184, 115, 51, 0.20)',
                borderRadius: 24,
                boxShadow: '0 16px 48px rgba(107, 76, 122, 0.07)',
                padding: '44px 32px 40px',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Copper corner accents */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: 28, height: 28, borderTop: '0.5px solid rgba(184,115,51,0.35)', borderLeft: '0.5px solid rgba(184,115,51,0.35)', borderTopLeftRadius: 24 }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: 28, height: 28, borderTop: '0.5px solid rgba(184,115,51,0.35)', borderRight: '0.5px solid rgba(184,115,51,0.35)', borderTopRightRadius: 24 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 28, height: 28, borderBottom: '0.5px solid rgba(184,115,51,0.35)', borderLeft: '0.5px solid rgba(184,115,51,0.35)', borderBottomLeftRadius: 24 }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 28, height: 28, borderBottom: '0.5px solid rgba(184,115,51,0.35)', borderRight: '0.5px solid rgba(184,115,51,0.35)', borderBottomRightRadius: 24 }} />

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                {BRIEF_DETAILS.map((detail, i) => (
                  <React.Fragment key={i}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', paddingTop: 20, paddingBottom: 20 }}>
                      {/* Icon ring */}
                      <div style={{
                        width: 42, height: 42, borderRadius: '50%',
                        background: 'rgba(184, 115, 51, 0.08)',
                        border: '0.5px solid rgba(184, 115, 51, 0.30)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: 14, flexShrink: 0,
                      }}>
                        {detail.icon}
                      </div>

                      <h3
                        className="font-serif"
                        style={{
                          color: 'var(--color-text)',
                          fontSize: 'clamp(1.15rem, 3vw, 1.5rem)',
                          fontWeight: 400,
                          letterSpacing: '0.01em',
                          margin: '0 0 5px',
                        }}
                      >
                        {detail.title}
                      </h3>

                      <p
                        className="font-body"
                        style={{
                          color: 'var(--color-text-muted)',
                          fontSize: 11,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          fontWeight: 500,
                          margin: 0,
                        }}
                      >
                        {detail.subtitle}
                      </p>

                      {detail.link && (
                        <motion.a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            marginTop: 14,
                            padding: '8px 20px',
                            borderRadius: 50,
                            background: 'var(--color-accent)',
                            color: '#FFFFF0',
                            fontFamily: 'var(--font-body)',
                            fontSize: 10,
                            fontWeight: 400,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            border: '0.5px solid rgba(255,255,240,0.20)',
                            boxShadow: '0 4px 12px rgba(184,115,51,0.20)',
                          }}
                          whileHover={{ scale: 1.03, boxShadow: '0 6px 16px rgba(184,115,51,0.30)' }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2"
                            style={{ marginRight: 6, opacity: 0.85, flexShrink: 0 }}>
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          View Map
                        </motion.a>
                      )}
                    </div>

                    {/* Connector line */}
                    {i < BRIEF_DETAILS.length - 1 && (
                      <div style={{
                        width: 1, height: 22,
                        background: 'linear-gradient(to bottom, rgba(184,115,51,0.35), rgba(184,115,51,0.08))',
                      }} />
                    )}
                  </React.Fragment>
                ))}

                {/* Divider */}
                <div style={{
                  width: '65%', height: '0.5px',
                  background: 'rgba(184, 115, 51, 0.20)',
                  margin: '16px 0 20px',
                }} />

                {/* Footer quote — enough padding so it's never clipped */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: 12, textAlign: 'center', paddingBottom: 4,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="var(--color-accent)" strokeWidth="1.5" style={{ flexShrink: 0, opacity: 0.7 }}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>

                  <p
                    className="font-serif italic"
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                      lineHeight: 1.6,
                      margin: 0,
                      maxWidth: 300,
                    }}
                  >
                    We joyfully invite you to celebrate the beginning of our forever together.
                  </p>

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="var(--color-accent)" strokeWidth="1.5" style={{ flexShrink: 0, opacity: 0.7 }}>
                    <path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z" />
                  </svg>
                </div>
              </div>
            </div>
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