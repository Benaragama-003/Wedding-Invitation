import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BRIDE_NAME = 'Nilushi';
const GROOM_NAME = 'Sangeeth';

export default function LoadingScreen({ phase, onOpen }) {
  const searchParams = new URLSearchParams(window.location.search);
  const GUEST_NAME = searchParams.get('to') || '';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <AnimatePresence>
      {phase !== 'main' && (
        <motion.div
          className="fixed inset-0 flex flex-col w-full"
          style={{ zIndex: 100, height: '100dvh', overflow: 'hidden' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* ── Background Image ── */}
          <div className="absolute inset-0 bg-black">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: 'url(/7.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%',
                animation: phase === 'transition'
                  ? 'portalBackgroundZoom 2s forwards cubic-bezier(0.4, 0, 0.2, 1)'
                  : 'none',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom,
                  rgba(30,20,10,0.3) 0%,
                  rgba(30,20,10,0.15) 40%,
                  rgba(30,20,10,0.4) 75%,
                  rgba(0,0,0,0.72) 100%)`,
                animation: phase === 'transition'
                  ? 'radialDistortion 2s forwards cubic-bezier(0.4, 0, 0.2, 1)'
                  : 'none',
              }}
            />
          </div>

          {/* ── Main Content ── */}
          <div
            className="relative flex-1 flex flex-col items-center justify-center w-full px-4"
            style={{
              animation: phase === 'transition'
                ? 'portalVortexPull 2s forwards cubic-bezier(0.5, 0, 0.2, 1)'
                : 'none',
            }}
          >
            <motion.div
              className="text-center mb-4 mt-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {GUEST_NAME && (
                <p
                  className="font-body mb-2"
                  style={{
                    color: '#FFF',
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    fontWeight: 500,
                    textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                  }}
                >
                  Hello, {GUEST_NAME}
                </p>
              )}
              <p
                className="font-body"
                style={{
                  color: 'rgba(255,255,255,0.88)',
                  fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 300,
                }}
              >
                We invite you to attend our wedding
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <CircularFrame brideName={BRIDE_NAME} groomName={GROOM_NAME} />
            </motion.div>
          </div>

          {/* ── Bottom Button — never cropped ── */}
          <div
            className="relative w-full flex-shrink-0"
            style={{
              zIndex: 10,
              opacity: phase === 'transition' ? 0 : 1,
              transition: 'opacity 0.4s ease',
              paddingBottom: 'max(env(safe-area-inset-bottom, 0px) + 40px, 44px)',
              paddingTop: 0,
            }}
          >
            <motion.div
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {/* Animated chevron — floats with clear gap above button */}
              <motion.div
                className="cursor-pointer"
                style={{ marginBottom: 20 }}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                onClick={onOpen}
              >
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <path
                    d="M2 2 L11 9 L20 2"
                    stroke="rgba(255,255,255,0.32)" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                  <path
                    d="M2 7 L11 14 L20 7"
                    stroke="rgba(255,255,255,0.68)" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {/* Premium pill button */}
              <motion.button
                onClick={onOpen}
                className="cursor-pointer flex items-center justify-center rounded-full"
                style={{
                  padding: '13px 34px',
                  background: 'rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '0.5px solid rgba(255,255,255,0.38)',
                  color: 'rgba(255,255,255,0.92)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: '0.20em',
                  textTransform: 'uppercase',
                  minWidth: 220,
                  maxWidth: 280,
                  gap: 0,
                }}
                whileHover={{
                  scale: 1.02,
                  background: 'rgba(255,255,255,0.17)',
                  borderColor: 'rgba(255,255,255,0.60)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <svg
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ opacity: 0.68, marginRight: 9, flexShrink: 0 }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div style={{
                  width: 1, height: 12,
                  background: 'rgba(255,255,255,0.25)',
                  marginRight: 9, flexShrink: 0,
                }} />
                Open Invitation
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CircularFrame({ brideName, groomName }) {
  const size = 'clamp(300px, 80vw, 450px)';
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg
        viewBox="0 0 400 400"
        style={{
          width: '100%', height: '100%', display: 'block',
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))',
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="180" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="172" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

        {/* Top cluster */}
        <g transform="translate(200, 20)">
          <path d="M-30 0 Q-15 -15 0 0 Q-15 15 -30 0 Z" fill="rgba(255,255,255,0.9)" transform="rotate(-30)" />
          <path d="M30 0 Q15 -15 0 0 Q15 15 30 0 Z" fill="rgba(255,255,255,0.9)" transform="rotate(30)" />
          <path d="M-15 -20 Q0 -35 15 -20 Q0 -5 -15 -20 Z" fill="rgba(255,255,255,0.9)" />
        </g>

        {/* Bottom cluster */}
        <g transform="translate(200, 380) rotate(180)">
          <path d="M-30 0 Q-15 -15 0 0 Q-15 15 -30 0 Z" fill="rgba(255,255,255,0.9)" transform="rotate(-30)" />
          <path d="M30 0 Q15 -15 0 0 Q15 15 30 0 Z" fill="rgba(255,255,255,0.9)" transform="rotate(30)" />
          <path d="M-15 -20 Q0 -35 15 -20 Q0 -5 -15 -20 Z" fill="rgba(255,255,255,0.9)" />
        </g>

        {/* Scattered leaf accents */}
        {[...Array(8)].map((_, i) => {
          if (i === 2 || i === 6) return null;
          const angle = i * (360 / 8);
          const rad = (angle * Math.PI) / 180;
          const cx = 200 + 176 * Math.cos(rad);
          const cy = 200 + 176 * Math.sin(rad);
          return (
            <path
              key={i}
              d="M-8 0 Q0 -10 8 0 Q0 10 -8 0 Z"
              fill="rgba(255,255,255,0.8)"
              transform={`translate(${cx},${cy}) rotate(${angle + 90}) scale(1.2)`}
            />
          );
        })}
      </svg>

      {/* Couple names */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ padding: '15%' }}
      >
        <motion.h1
          className="font-script text-center"
          style={{
            color: '#FFFFFF',
            lineHeight: 1.1,
            textShadow: '0 4px 16px rgba(0,0,0,0.6)',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}>{groomName}</span>
            <span style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontFamily: 'var(--font-script)' }}>&amp;</span>
            <span style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}>{brideName}</span>
          </div>
        </motion.h1>
      </div>
    </div>
  );
}