import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BRIDE_NAME = 'Nilushi';
const GROOM_NAME = 'Sangeeth';

export default function LoadingScreen({ phase, onOpen }) {
  const searchParams = new URLSearchParams(window.location.search);
  const GUEST_NAME = searchParams.get('guest') || '';

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
          {/* ── Background Image (Darkens and scales on transition) ── */}
          <div className="absolute inset-0 bg-black">
            <motion.img
              src="/cover photo.png"
              alt="Background"
              className="absolute inset-0 w-full h-full hero-photo"
              initial={{ scale: 1, filter: 'brightness(1) blur(0px)' }}
              animate={phase === 'transition' ? { scale: 1.08, filter: 'brightness(0.4) blur(6px)' } : { scale: 1, filter: 'brightness(1) blur(0px)' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom,
                  rgba(30,20,10,0.4) 0%,
                  rgba(30,20,10,0.2) 40%,
                  rgba(30,20,10,0.5) 75%,
                  rgba(0,0,0,0.85) 100%)`,
              }}
              initial={{ opacity: 1 }}
              animate={phase === 'transition' ? { opacity: 0.8 } : { opacity: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </div>

          {/* ── Golden converging point (only during transition) ── */}
          <motion.div
            className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
            style={{ width: 6, height: 6, background: '#E9D7B5', boxShadow: '0 0 24px 8px rgba(212,180,131,0.6)', x: '-50%', y: '-50%', zIndex: 50 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={phase === 'transition' ? { scale: [0, 2, 0], opacity: [0, 1, 0] } : { scale: 0, opacity: 0 }}
            transition={{ duration: 1.4, times: [0, 0.8, 1], ease: 'easeInOut' }}
          />

          {/* ── Gold Particles Drifting Inward ── */}
          {phase === 'transition' && (
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 40 }}>
              {[...Array(18)].map((_, i) => {
                const angle = (i * 20) * (Math.PI / 180);
                const dist = 300 + Math.random() * 300;
                const tx = Math.cos(angle) * dist;
                const ty = Math.sin(angle) * dist;
                return (
                  <motion.div
                    key={`inward-particle-${i}`}
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                      width: 2.5, height: 2.5,
                      background: '#E9D7B5',
                      boxShadow: '0 0 6px rgba(212,180,131,0.8)',
                    }}
                    initial={{ x: `calc(-50% + ${tx}px)`, y: `calc(-50% + ${ty}px)`, opacity: 0, scale: 0 }}
                    animate={{ x: '-50%', y: '-50%', opacity: [0, 0.8, 0], scale: [0, 1.2, 0] }}
                    transition={{ duration: 1.2, delay: Math.random() * 0.2, ease: [0.34, 0.1, 0.36, 1] }}
                  />
                );
              })}
            </div>
          )}

          {/* ── Main Content (Pulls inward to black hole) ── */}
          <motion.div
            className="relative flex-1 flex flex-col items-center justify-center w-full px-4"
            initial={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            animate={phase === 'transition' ? { scale: 0, filter: 'blur(12px)', opacity: [1, 0.8, 0] } : { scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.34, 0.05, 0.36, 1] }} // smooth, non-aggressive pull
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
          </motion.div>

          {/* ── Bottom Button (Fades out) ── */}
          <div
            className="relative w-full flex-shrink-0"
            style={{
              zIndex: 10,
              paddingBottom: 'max(env(safe-area-inset-bottom, 0px) + 40px, 44px)',
              paddingTop: 0,
            }}
          >
            <motion.div
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={phase === 'transition' ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {/* Animated chevron */}
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
                whileTap={{ scale: 0.95 }}
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
  
  // Helpers to generate leaves
  const getLeafColor = (i) => ['#8C9A86', '#A1B199', '#7A8B76'][i % 3];
  
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <motion.svg
        viewBox="0 0 400 400"
        style={{
          width: '100%', height: '100%', display: 'block',
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))',
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Main branch paths */}
        <path d="M 200 380 C 70 380, 20 250, 60 90" fill="none" stroke="#7A8B76" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <path d="M 200 380 C 330 380, 380 250, 340 90" fill="none" stroke="#7A8B76" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

        {/* Left branch pointed leaves */}
        {[...Array(12)].map((_, i) => {
          const progress = i / 11;
          const angle = 90 + progress * 130; 
          const rad = angle * (Math.PI / 180);
          const cx = 200 + 175 * Math.cos(rad);
          const cy = 190 + 185 * Math.sin(rad);
          const isOut = i % 2 === 0;
          const leafAngle = angle + (isOut ? 45 : -25);
          return (
            <path key={`ll-${i}`} d="M 0 0 C 12 -12, 24 -8, 28 0 C 24 8, 12 12, 0 0 Z" fill={getLeafColor(i)} transform={`translate(${cx},${cy}) rotate(${leafAngle}) scale(${0.65 + (1-progress)*0.4})`} />
          );
        })}

        {/* Right branch pointed leaves */}
        {[...Array(12)].map((_, i) => {
          const progress = i / 11;
          const angle = 90 - progress * 130; 
          const rad = angle * (Math.PI / 180);
          const cx = 200 + 175 * Math.cos(rad);
          const cy = 190 + 185 * Math.sin(rad);
          const isOut = i % 2 === 0;
          const leafAngle = angle + (isOut ? -45 : 25);
          return (
            <path key={`rl-${i}`} d="M 0 0 C 12 -12, 24 -8, 28 0 C 24 8, 12 12, 0 0 Z" fill={getLeafColor(i+1)} transform={`translate(${cx},${cy}) rotate(${leafAngle}) scale(${0.65 + (1-progress)*0.4})`} />
          );
        })}

        {/* Left eucalyptus round leaves */}
        {[...Array(8)].map((_, i) => {
          const progress = i / 7;
          const angle = 90 + progress * 140; 
          const rad = angle * (Math.PI / 180);
          const cx = 200 + 175 * Math.cos(rad);
          const cy = 190 + 185 * Math.sin(rad);
          return <circle key={`el-${i}`} cx={cx} cy={cy} r="10" fill="#A1B199" transform={`translate(${Math.cos(rad)*14}, ${Math.sin(rad)*14})`} opacity="0.85" />;
        })}

        {/* Right eucalyptus round leaves */}
        {[...Array(8)].map((_, i) => {
          const progress = i / 7;
          const angle = 90 - progress * 140; 
          const rad = angle * (Math.PI / 180);
          const cx = 200 + 175 * Math.cos(rad);
          const cy = 190 + 185 * Math.sin(rad);
          return <circle key={`er-${i}`} cx={cx} cy={cy} r="10" fill="#A1B199" transform={`translate(${Math.cos(rad)*14}, ${Math.sin(rad)*14})`} opacity="0.85" />;
        })}

        {/* White delicate flowers at bottom center */}
        {[80, 90, 100].map((angle, i) => {
          const rad = angle * (Math.PI / 180);
          const cx = 200 + 175 * Math.cos(rad);
          const cy = 190 + 185 * Math.sin(rad);
          return (
            <g key={`flower-${i}`} transform={`translate(${cx},${cy}) scale(1.2)`}>
              <path d="M 0 0 C 6 -12, 12 -12, 0 0 Z" fill="#F9F8F6" />
              <path d="M 0 0 C -12 -6, -12 6, 0 0 Z" fill="#F9F8F6" />
              <path d="M 0 0 C 6 12, 12 6, 0 0 Z" fill="#F9F8F6" />
              <circle cx="2" cy="0" r="2.5" fill="#D4B483" />
            </g>
          );
        })}
      </motion.svg>

      {/* Couple names perfectly centered */}
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: 'clamp(3.5rem, 12vw, 6rem)' }}>{groomName}</span>
            <span style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontFamily: 'var(--font-script)', opacity: 0.7, transform: 'rotate(-5deg)' }}>&amp;</span>
            <span style={{ fontSize: 'clamp(3.5rem, 12vw, 6rem)' }}>{brideName}</span>
          </div>
        </motion.h1>
      </div>
    </div>
  );
}