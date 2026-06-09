import React from 'react';
import { motion } from 'framer-motion';

const BRIDE_NAME = 'Nilushi Benaragama';
const GROOM_NAME = 'Sangeeth Bandara';
const WEDDING_DATE = '16.10.2026';

export default function HeroSection() {
  const scrollDown = () => {
    document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Split names for two-line rendering
  const brideFirst = BRIDE_NAME.split(' ')[0];
  const brideLast  = BRIDE_NAME.split(' ').slice(1).join(' ');
  const groomFirst = GROOM_NAME.split(' ')[0];
  const groomLast  = GROOM_NAME.split(' ').slice(1).join(' ');

  return (
    <section
      id="hero"
      className="relative flex flex-col"
      style={{
        width: '100%',
        minHeight: '100dvh',
        overflow: 'hidden',
        left: 0,
      }}
    >
      {/* ── Full-screen background photo ── */}
      <div className="absolute inset-0 hero-bg-wrapper">
        {/*
          Single <img> handles both desktop and mobile via the
          CSS classes defined in globals.css:
            .hero-photo          → desktop styles
            .hero-photo-mobile   → applied only on ≤768 px
        */}
        <img
          src="/16.jpg"
          alt="Wedding couple"
          className="hero-photo"
        />

        {/* Dark gradient overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom,
                rgba(30,20,10,0.50) 0%,
                rgba(30,20,10,0.28) 35%,
                rgba(30,20,10,0.28) 58%,
                rgba(30,20,10,0.58) 100%
              )
            `,
          }}
        />
      </div>

      {/* ── Main content layout ── */}
        <div
        className="relative flex flex-col items-center justify-center flex-1 px-4"
        style={{ zIndex: 10, paddingTop: 60, paddingBottom: 60, width: '100%' }}
         >
        <motion.div
          className="flex flex-col items-center text-center"
          style={{
            width: '100%',
            maxWidth: '80rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            alignItems: 'center',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {/* Top invite text */}
          <div className="mb-10 flex flex-col items-center gap-2">
            <p
              className="font-body"
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                letterSpacing: '0.04em',
                fontWeight: 400,
                textShadow: '0 1px 4px rgba(0,0,0,0.5)',
              }}
            >
              We invite you to attend our wedding
            </p>
          </div>

          {/* THE WEDDING OF */}
          <h3
            className="font-body uppercase"
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              letterSpacing: '0.12em',
              fontWeight: 500,
              marginBottom: '2.5rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            THE WEDDING OF
          </h3>

          {/* Names block: 3-column layout on desktop, stacked on mobile */}
          <div
            className="names-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2.5rem',
              width: '100%',
              maxWidth: '1100px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            {/* Bride */}
            <h1
              className="font-script"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2.4rem, 3.8vw, 3.8rem)',
                lineHeight: 1.08,
                textShadow: '0 4px 16px rgba(0,0,0,0.5)',
                textAlign: 'center',
                flex: '1',
                maxWidth: '340px',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
              }}
            >
              {brideFirst}<br />{brideLast}
            </h1>

            {/* Ampersand */}
            <span
              className="font-script"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2.5rem, 3.8vw, 3.8rem)',
                textShadow: '0 4px 16px rgba(0,0,0,0.5)',
                flexShrink: 0,
                width: '70px',
                textAlign: 'center',
                alignSelf: 'center',
                lineHeight: 1,
                display: 'block',
              }}
            >
              &amp;
            </span>

            {/* Groom */}
            <h1
              className="font-script"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2.4rem, 3.8vw, 3.8rem)',
                lineHeight: 1.08,
                textShadow: '0 4px 16px rgba(0,0,0,0.5)',
                textAlign: 'center',
                flex: '1',
                maxWidth: '340px',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
              }}
            >
              {groomFirst}<br />{groomLast}
            </h1>
          </div>

          {/* Date */}
          <div
            className="flex items-center gap-4 mb-6"
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              letterSpacing: '0.15em',
              fontWeight: 400,
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            <span>•</span>
            <span className="font-body">{WEDDING_DATE}</span>
            <span>•</span>
          </div>

          <p
            className="font-serif italic"
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              letterSpacing: '0.04em',
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            With love and the blessings of our families
          </p>
        </motion.div>
      </div>

      {/* ── Scroll-down chevron ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        style={{ zIndex: 20 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        onClick={scrollDown}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
            <path
              d="M4 4 L16 14 L28 4"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 0 L16 10 L28 0"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}