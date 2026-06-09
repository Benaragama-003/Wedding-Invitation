import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/animations/ScrollReveal';

const VENUE_NAME = 'Hotel Kashyapa';
const VENUE_ADDRESS = 'Avissawella';
const GOOGLE_MAPS_URL = 'https://goo.gl/maps/placeholder';
const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7485345777145!2d80.22027737437723!3d6.9206363184222255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a9427f1a7ce3%3A0xa5e6a5944d8182de!2sHotel%20Kashyapa!5e0!3m2!1sen!2slk!4v1780977144361!5m2!1sen!2slk';

export default function LocationSection() {
  return (
    <section
      id="location"
      className="section-pad relative flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg)', minHeight: '100dvh' }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
          background: 'var(--color-bg-alt)',
          border: '0.5px solid rgba(184, 115, 51, 0.20)',
          borderRadius: 24,
          boxShadow: '0 16px 48px rgba(107, 76, 122, 0.07)',
          padding: '44px 32px',
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

        {/* ── Title block ── */}
        <ScrollReveal animation="fade-in">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>

            {/* Ornamental label */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 18 }}>
              <div style={{ height: '0.5px', width: 32, background: 'var(--color-accent)', opacity: 0.5 }} />
              <p
                className="font-body uppercase"
                style={{ color: 'var(--color-text-muted)', fontSize: 10, fontWeight: 500, letterSpacing: '0.28em', margin: 0 }}
              >
                Venue &amp; Location
              </p>
              <div style={{ height: '0.5px', width: 32, background: 'var(--color-accent)', opacity: 0.5 }} />
            </div>

            <h2
              className="font-serif"
              style={{
                color: 'var(--color-text)',
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 500,
                letterSpacing: '0.02em',
                margin: '0 0 8px',
              }}
            >
              {VENUE_NAME}
            </h2>

            <p
              className="font-serif italic"
              style={{ color: 'var(--color-text-muted)', fontSize: '1rem', letterSpacing: '0.06em', margin: '0 0 6px' }}
            >
              16 · 10 · 2026
            </p>

            <p
              className="font-body"
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 400,
                margin: 0,
              }}
            >
              {VENUE_ADDRESS}
            </p>
          </div>
        </ScrollReveal>

        {/* ── Map + button ── */}
        <ScrollReveal animation="fade-in" delay={0.25}>
          {/* Wrapper gives space below for the overlapping pill */}
          <div style={{ paddingBottom: 24 }}>
            <div style={{ position: 'relative' }}>
              {/* Map frame */}
              <div
                style={{
                  width: '100%',
                  height: 340,
                  borderRadius: 20,
                  overflow: 'hidden',
                  border: '0.5px solid rgba(184, 115, 51, 0.20)',
                  boxShadow: '0 16px 48px rgba(107, 76, 122, 0.08)',
                }}
              >
                {GOOGLE_MAPS_EMBED ? (
                  <iframe
                    src={GOOGLE_MAPS_EMBED}
                    width="100%" height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Venue location"
                  />
                ) : (
                  <div
                    style={{
                      width: '100%', height: '100%',
                      background: 'var(--color-bg-alt)',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                      stroke="var(--color-accent)" strokeWidth="1.5"
                      style={{ marginBottom: 8, opacity: 0.6 }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="font-body" style={{ color: 'var(--color-text-muted)', fontSize: 13, margin: 0 }}>
                      Map Preview
                    </p>
                  </div>
                )}
              </div>

              {/* Pill button — sits below map, not overlapping it */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <motion.a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0,
                    padding: '12px 28px',
                    borderRadius: 50,
                    background: 'var(--color-accent)',
                    color: '#FFFFF0',
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    fontWeight: 400,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    border: '0.5px solid rgba(255,255,240,0.20)',
                    boxShadow: '0 6px 20px rgba(184,115,51,0.28)',
                  }}
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(184,115,51,0.42)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    style={{ marginRight: 8, opacity: 0.85, flexShrink: 0 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div style={{ width: 1, height: 11, background: 'rgba(255,255,240,0.28)', marginRight: 8, flexShrink: 0 }} />
                  Open in Google Maps
                </motion.a>
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