import React from 'react';
import { motion } from 'framer-motion';

/* ============================================
   HERO SECTION — Full-Screen Editorial

   - Background image with soft overlay
   - Centered content
   - "We invite you to attend our wedding"
   - THE WEDDING OF
   - Couple names
   - Date
   ============================================ */
const BRIDE_NAME   = 'Nilushi Benaragama';
const GROOM_NAME   = 'Sangeeth Bandara';
const WEDDING_DATE = '16.10.2026';

export default function HeroSection() {
  const scrollDown = () => {
    document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col"
      style={{
        minHeight: '100vh',
        minHeight: '100dvh',
        overflow: 'hidden',
      }}
    >
      {/* ── Full-screen background photo ── */}
      <div className="absolute inset-0">
        <img
          src="/16.jpg"
          alt="Wedding couple"
          className="object-hero-responsive"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark gradient overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom,
                rgba(30,20,10,0.50) 0%,
                rgba(30,20,10,0.30) 35%,
                rgba(30,20,10,0.30) 55%,
                rgba(30,20,10,0.55) 100%
              )
            `,
          }}
        />
      </div>

      {/* ── Main content layout ── */}
      <div
        className="relative flex flex-col items-center justify-center flex-1 w-full px-4"
        style={{ zIndex: 10, paddingTop: 60, paddingBottom: 60 }}
      >
        <motion.div
          className="flex flex-col items-center text-center w-full max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {/* Top text */}
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

          {/* Names with leaf ornaments */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-10 w-full">
            {/* Left Leaf (hidden on very small screens to save space) */}
            <svg className="hidden md:block" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
              <path d="M12 22C12 22 4 16 4 10C4 5 8 2 12 2C16 2 20 5 20 10C20 16 12 22 12 22Z" fill="white" transform="rotate(-45 12 12) scale(0.6)" />
              <path d="M12 22C12 22 4 16 4 10C4 5 8 2 12 2C16 2 20 5 20 10C20 16 12 22 12 22Z" fill="white" transform="rotate(15 12 12) scale(0.4) translate(-10, 10)" />
            </svg>

            <h1
              className="font-script flex flex-col md:flex-row items-center justify-center"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: 1.1,
                textShadow: '0 4px 16px rgba(0,0,0,0.5)',
                padding: '0 10px',
              }}
            >
              <span>{BRIDE_NAME}</span>
              <span className="mx-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-script)' }}>&amp;</span>
              <span>{GROOM_NAME}</span>
            </h1>

            {/* Right Leaf */}
            <svg className="hidden md:block" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
              <path d="M12 22C12 22 4 16 4 10C4 5 8 2 12 2C16 2 20 5 20 10C20 16 12 22 12 22Z" fill="white" transform="rotate(45 12 12) scale(0.6)" />
              <path d="M12 22C12 22 4 16 4 10C4 5 8 2 12 2C16 2 20 5 20 10C20 16 12 22 12 22Z" fill="white" transform="rotate(-15 12 12) scale(0.4) translate(10, 10)" />
            </svg>
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

      {/* ── Scroll down chevron ── */}
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
            <path d="M4 4 L16 14 L28 4" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 0 L16 10 L28 0" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
