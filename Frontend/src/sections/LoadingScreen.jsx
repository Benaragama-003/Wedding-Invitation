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

          {/* ── Sage Green converging point (only during transition) ── */}
          <motion.div
            className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
            style={{ width: 6, height: 6, background: '#A1B199', boxShadow: '0 0 24px 8px rgba(161,177,153,0.6)', x: '-50%', y: '-50%', zIndex: 50 }}
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
                      background: '#A1B199',
                      boxShadow: '0 0 6px rgba(161,177,153,0.8)',
                    }}
                    initial={{ x: `calc(-50% + ${tx}px)`, y: `calc(-50% + ${ty}px)`, opacity: 0, scale: 0 }}
                    animate={{ x: '-50%', y: '-50%', opacity: [0, 0.8, 0], scale: [0, 1.2, 0] }}
                    transition={{ duration: 1.2, delay: Math.random() * 0.2, ease: [0.34, 0.1, 0.36, 1] }}
                  />
                );
              })}
            </div>
          )}

          {/* ── Main Content ── */}
          <div
            className="relative flex-1 flex flex-col items-center justify-center w-full px-4"
          >
            <motion.div
              className="text-center mb-4 mt-12"
              initial={{ opacity: 0, y: -20, scale: 1, filter: 'blur(0px)' }}
              animate={phase === 'transition' ? { scale: 0, filter: 'blur(12px)', opacity: 0 } : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              transition={phase === 'transition' ? { duration: 1.4, ease: [0.34, 0.05, 0.36, 1] } : { delay: 0.4, duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {/* 
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
              */}
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
              <CircularFrame brideName={BRIDE_NAME} groomName={GROOM_NAME} phase={phase} />
            </motion.div>
          </div>

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

function CircularFrame({ brideName, groomName, phase }) {
  const size = 'clamp(300px, 80vw, 450px)';
  const svgRef = React.useRef(null);
  const textRef = React.useRef(null);
  // Removed opticalOffset hack — names are now centered via width:100% + text-align:center

  // ── Luxury ornament palette — ultra-refined ivory/champagne ──
  const ornStroke = '#D4D0C8';        // warm ivory for primary strokes
  const ornStrokeLight = '#E0DCD4';   // lighter ivory for secondary filigree
  const ornDot = '#CBC7BF';           // champagne pearl dots
  const ornDiamond = '#D8D4CC';       // soft diamond accents

  return (
    <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }} ref={svgRef}>
      {/* Luxury Ornamental Monogram Frame - Dissolves to dust */}
      <motion.svg
        viewBox="0 0 400 400"
        style={{
          width: '100%', height: '100%', display: 'block',
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))',
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={
          phase === 'transition' 
            ? { scale: 1.15, filter: 'blur(8px)', opacity: 0 } 
            : { scale: [1, 1.015, 1], filter: 'blur(0px)', opacity: 1 }
        }
        transition={
          phase === 'transition'
            ? { duration: 1.2, ease: 'easeOut' }
            : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        {/* ═══ Primary elliptical ring — very subtle, barely there ═══ */}
        <ellipse
          cx="200" cy="200" rx="165" ry="175"
          stroke={ornStroke} strokeWidth="0.4" opacity="0.22"
        />

        {/* ═══ Inner guide ring — even more subtle ═══ */}
        <ellipse
          cx="200" cy="200" rx="148" ry="158"
          stroke={ornStrokeLight} strokeWidth="0.3" opacity="0.12"
        />

        {/* ═══════════════════════════════════════════════
            SCROLLWORK CARTOUCHES — at 2, 4, 8, 10 o'clock
            Each is a symmetrical ornamental flourish cluster
            ═══════════════════════════════════════════════ */}

        {/* ── 10 o'clock (upper-left) ── */}
        <g opacity="0.58">
          {/* Primary sweeping scroll */}
          <path
            d="M 95 95 C 75 80, 58 88, 55 105 C 52 122, 68 130, 82 118 C 90 112, 85 100, 78 102"
            stroke={ornStroke} strokeWidth="0.7" strokeLinecap="round"
          />
          {/* Secondary counter-scroll */}
          <path
            d="M 95 95 C 108 78, 100 60, 85 58 C 70 56, 62 68, 72 80 C 78 86, 88 82, 86 76"
            stroke={ornStroke} strokeWidth="0.7" strokeLinecap="round"
          />
          {/* Delicate filigree wisps */}
          <path
            d="M 55 105 C 48 115, 42 110, 45 100"
            stroke={ornStrokeLight} strokeWidth="0.45" strokeLinecap="round" opacity="0.7"
          />
          <path
            d="M 85 58 C 88 48, 82 42, 75 46"
            stroke={ornStrokeLight} strokeWidth="0.45" strokeLinecap="round" opacity="0.7"
          />
          {/* Outer graceful arc */}
          <path
            d="M 48 118 C 35 135, 38 148, 55 145"
            stroke={ornStrokeLight} strokeWidth="0.35" strokeLinecap="round" opacity="0.45"
          />
          <path
            d="M 72 48 C 60 35, 48 38, 50 55"
            stroke={ornStrokeLight} strokeWidth="0.35" strokeLinecap="round" opacity="0.45"
          />
          {/* Pearl dots */}
          <circle cx="45" cy="100" r="1.4" fill={ornDot} opacity="0.55" />
          <circle cx="75" cy="46" r="1.4" fill={ornDot} opacity="0.55" />
          <circle cx="78" cy="102" r="1.0" fill={ornDot} opacity="0.4" />
          <circle cx="86" cy="76" r="1.0" fill={ornDot} opacity="0.4" />
          {/* Diamond accent at the apex */}
          <path
            d="M 95 95 L 97.5 91 L 100 95 L 97.5 99 Z"
            fill={ornDiamond} opacity="0.45"
          />
        </g>

        {/* ── 2 o'clock (upper-right) — mirrored ── */}
        <g opacity="0.58" transform="translate(400, 0) scale(-1, 1)">
          <path
            d="M 95 95 C 75 80, 58 88, 55 105 C 52 122, 68 130, 82 118 C 90 112, 85 100, 78 102"
            stroke={ornStroke} strokeWidth="0.7" strokeLinecap="round"
          />
          <path
            d="M 95 95 C 108 78, 100 60, 85 58 C 70 56, 62 68, 72 80 C 78 86, 88 82, 86 76"
            stroke={ornStroke} strokeWidth="0.7" strokeLinecap="round"
          />
          <path
            d="M 55 105 C 48 115, 42 110, 45 100"
            stroke={ornStrokeLight} strokeWidth="0.45" strokeLinecap="round" opacity="0.7"
          />
          <path
            d="M 85 58 C 88 48, 82 42, 75 46"
            stroke={ornStrokeLight} strokeWidth="0.45" strokeLinecap="round" opacity="0.7"
          />
          <path
            d="M 48 118 C 35 135, 38 148, 55 145"
            stroke={ornStrokeLight} strokeWidth="0.35" strokeLinecap="round" opacity="0.45"
          />
          <path
            d="M 72 48 C 60 35, 48 38, 50 55"
            stroke={ornStrokeLight} strokeWidth="0.35" strokeLinecap="round" opacity="0.45"
          />
          <circle cx="45" cy="100" r="1.4" fill={ornDot} opacity="0.55" />
          <circle cx="75" cy="46" r="1.4" fill={ornDot} opacity="0.55" />
          <circle cx="78" cy="102" r="1.0" fill={ornDot} opacity="0.4" />
          <circle cx="86" cy="76" r="1.0" fill={ornDot} opacity="0.4" />
          <path
            d="M 95 95 L 97.5 91 L 100 95 L 97.5 99 Z"
            fill={ornDiamond} opacity="0.45"
          />
        </g>

        {/* ── 8 o'clock (lower-left) ── */}
        <g opacity="0.58">
          <path
            d="M 95 305 C 75 320, 58 312, 55 295 C 52 278, 68 270, 82 282 C 90 288, 85 300, 78 298"
            stroke={ornStroke} strokeWidth="0.7" strokeLinecap="round"
          />
          <path
            d="M 95 305 C 108 322, 100 340, 85 342 C 70 344, 62 332, 72 320 C 78 314, 88 318, 86 324"
            stroke={ornStroke} strokeWidth="0.7" strokeLinecap="round"
          />
          <path
            d="M 55 295 C 48 285, 42 290, 45 300"
            stroke={ornStrokeLight} strokeWidth="0.45" strokeLinecap="round" opacity="0.7"
          />
          <path
            d="M 85 342 C 88 352, 82 358, 75 354"
            stroke={ornStrokeLight} strokeWidth="0.45" strokeLinecap="round" opacity="0.7"
          />
          <path
            d="M 48 282 C 35 265, 38 252, 55 255"
            stroke={ornStrokeLight} strokeWidth="0.35" strokeLinecap="round" opacity="0.45"
          />
          <path
            d="M 72 352 C 60 365, 48 362, 50 345"
            stroke={ornStrokeLight} strokeWidth="0.35" strokeLinecap="round" opacity="0.45"
          />
          <circle cx="45" cy="300" r="1.4" fill={ornDot} opacity="0.55" />
          <circle cx="75" cy="354" r="1.4" fill={ornDot} opacity="0.55" />
          <circle cx="78" cy="298" r="1.0" fill={ornDot} opacity="0.4" />
          <circle cx="86" cy="324" r="1.0" fill={ornDot} opacity="0.4" />
          <path
            d="M 95 305 L 97.5 301 L 100 305 L 97.5 309 Z"
            fill={ornDiamond} opacity="0.45"
          />
        </g>

        {/* ── 4 o'clock (lower-right) — mirrored ── */}
        <g opacity="0.58" transform="translate(400, 0) scale(-1, 1)">
          <path
            d="M 95 305 C 75 320, 58 312, 55 295 C 52 278, 68 270, 82 282 C 90 288, 85 300, 78 298"
            stroke={ornStroke} strokeWidth="0.7" strokeLinecap="round"
          />
          <path
            d="M 95 305 C 108 322, 100 340, 85 342 C 70 344, 62 332, 72 320 C 78 314, 88 318, 86 324"
            stroke={ornStroke} strokeWidth="0.7" strokeLinecap="round"
          />
          <path
            d="M 55 295 C 48 285, 42 290, 45 300"
            stroke={ornStrokeLight} strokeWidth="0.45" strokeLinecap="round" opacity="0.7"
          />
          <path
            d="M 85 342 C 88 352, 82 358, 75 354"
            stroke={ornStrokeLight} strokeWidth="0.45" strokeLinecap="round" opacity="0.7"
          />
          <path
            d="M 48 282 C 35 265, 38 252, 55 255"
            stroke={ornStrokeLight} strokeWidth="0.35" strokeLinecap="round" opacity="0.45"
          />
          <path
            d="M 72 352 C 60 365, 48 362, 50 345"
            stroke={ornStrokeLight} strokeWidth="0.35" strokeLinecap="round" opacity="0.45"
          />
          <circle cx="45" cy="300" r="1.4" fill={ornDot} opacity="0.55" />
          <circle cx="75" cy="354" r="1.4" fill={ornDot} opacity="0.55" />
          <circle cx="78" cy="298" r="1.0" fill={ornDot} opacity="0.4" />
          <circle cx="86" cy="324" r="1.0" fill={ornDot} opacity="0.4" />
          <path
            d="M 95 305 L 97.5 301 L 100 305 L 97.5 309 Z"
            fill={ornDiamond} opacity="0.45"
          />
        </g>

        {/* ═══ Connecting arcs — graceful sweeps linking the cartouches ═══ */}

        {/* Top arc (breathing, lighter) */}
        <path
          d="M 120 52 C 150 32, 250 32, 280 52"
          stroke={ornStrokeLight} strokeWidth="0.4" strokeLinecap="round" opacity="0.25"
        />
        {/* Top inner arc */}
        <path
          d="M 130 62 C 155 46, 245 46, 270 62"
          stroke={ornStrokeLight} strokeWidth="0.3" strokeLinecap="round" opacity="0.18"
        />

        {/* Bottom arc (breathing, lighter) */}
        <path
          d="M 120 348 C 150 368, 250 368, 280 348"
          stroke={ornStrokeLight} strokeWidth="0.4" strokeLinecap="round" opacity="0.25"
        />
        {/* Bottom inner arc */}
        <path
          d="M 130 338 C 155 354, 245 354, 270 338"
          stroke={ornStrokeLight} strokeWidth="0.3" strokeLinecap="round" opacity="0.18"
        />

        {/* Left vertical connecting arc */}
        <path
          d="M 48 140 C 30 175, 30 225, 48 260"
          stroke={ornStroke} strokeWidth="0.4" strokeLinecap="round" opacity="0.28"
        />

        {/* Right vertical connecting arc */}
        <path
          d="M 352 140 C 370 175, 370 225, 352 260"
          stroke={ornStroke} strokeWidth="0.4" strokeLinecap="round" opacity="0.28"
        />

        {/* ═══ Cardinal point accent marks — delicate ticks ═══ */}

        {/* Top center — tiny ornamental terminal */}
        <g opacity="0.35">
          <line x1="200" y1="22" x2="200" y2="32" stroke={ornStroke} strokeWidth="0.4" strokeLinecap="round" />
          <circle cx="200" cy="20" r="1.2" fill={ornDot} />
          <circle cx="193" cy="28" r="0.8" fill={ornDot} opacity="0.5" />
          <circle cx="207" cy="28" r="0.8" fill={ornDot} opacity="0.5" />
        </g>

        {/* Bottom center — tiny ornamental terminal */}
        <g opacity="0.35">
          <line x1="200" y1="368" x2="200" y2="378" stroke={ornStroke} strokeWidth="0.4" strokeLinecap="round" />
          <circle cx="200" cy="380" r="1.2" fill={ornDot} />
          <circle cx="193" cy="372" r="0.8" fill={ornDot} opacity="0.5" />
          <circle cx="207" cy="372" r="0.8" fill={ornDot} opacity="0.5" />
        </g>

        {/* Left center — miniature diamond */}
        <g opacity="0.3">
          <path d="M 28 200 L 31 196.5 L 34 200 L 31 203.5 Z" fill={ornDiamond} />
          <circle cx="24" cy="200" r="0.8" fill={ornDot} />
          <circle cx="38" cy="200" r="0.8" fill={ornDot} />
        </g>

        {/* Right center — miniature diamond */}
        <g opacity="0.3">
          <path d="M 366 200 L 369 196.5 L 372 200 L 369 203.5 Z" fill={ornDiamond} />
          <circle cx="362" cy="200" r="0.8" fill={ornDot} />
          <circle cx="376" cy="200" r="0.8" fill={ornDot} />
        </g>

        {/* ═══ Subtle pearl dot stations along the ellipse ═══ */}
        {/* These are placed at 15° intervals to give a fine letterpress dotted feeling */}
        {[30, 60, 120, 150, 210, 240, 300, 330].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 200 + Math.cos(rad) * 157;
          const cy = 200 + Math.sin(rad) * 167;
          return (
            <circle
              key={`pearl-${deg}`}
              cx={cx} cy={cy} r="0.9"
              fill={ornDot} opacity="0.28"
            />
          );
        })}

        {/* ═══ Inner decorative hairline flourishes — left & right ═══ */}
        {/* These are tiny elegant S-curves near 3 and 9 o'clock, inside the ring */}

        {/* Left inner flourish */}
        <g opacity="0.3">
          <path
            d="M 62 185 C 56 190, 56 210, 62 215"
            stroke={ornStrokeLight} strokeWidth="0.35" strokeLinecap="round"
          />
          <path
            d="M 58 190 C 52 195, 52 205, 58 210"
            stroke={ornStrokeLight} strokeWidth="0.25" strokeLinecap="round"
          />
        </g>

        {/* Right inner flourish */}
        <g opacity="0.3">
          <path
            d="M 338 185 C 344 190, 344 210, 338 215"
            stroke={ornStrokeLight} strokeWidth="0.35" strokeLinecap="round"
          />
          <path
            d="M 342 190 C 348 195, 348 205, 342 210"
            stroke={ornStrokeLight} strokeWidth="0.25" strokeLinecap="round"
          />
        </g>

      </motion.svg>

      {/* Bursting Dust Particles (Triggers during transition) */}
      {phase === 'transition' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(35)].map((_, i) => {
            const angle = Math.random() * Math.PI * 2;
            const dist = 60 + Math.random() * 180; // scatter distance
            const tx = Math.cos(angle) * dist;
            const ty = Math.sin(angle) * dist;
            const size = 1 + Math.random() * 2.5;
            const colors = ['#C8C8C0', '#A8A8A0', '#D0D0C8', '#A1B199'];
            return (
              <motion.div
                key={`dust-${i}`}
                className="absolute top-1/2 left-1/2 rounded-full"
                style={{ 
                  width: size, height: size, 
                  background: colors[i % colors.length],
                  boxShadow: `0 0 4px ${colors[i % colors.length]}88`,
                  x: '-50%', y: '-50%' 
                }}
                animate={{
                  x: `calc(-50% + ${tx}px)`,
                  y: `calc(-50% + ${ty}px)`,
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{ duration: 1 + Math.random() * 0.4, ease: 'easeOut' }}
              />
            );
          })}
        </div>
      )}

      {/* Couple names perfectly centered (Pulls inward to black hole) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ padding: '0', width: '100%', height: '100%' }}
      >
        <motion.h1
          ref={textRef}
          className="font-script text-center"
          style={{
            color: '#FFFFFF',
            lineHeight: 1.1,
            textShadow: '0 4px 16px rgba(0,0,0,0.6)',
            width: '100%',
            maxWidth: '100%',
          }}
          initial={{ opacity: 0, y: 10, scale: 1, filter: 'blur(0px)' }}
          animate={
            phase === 'transition' 
              ? { scale: 0, filter: 'blur(12px)', opacity: 0 } 
              : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
          }
          transition={
            phase === 'transition' 
              ? { duration: 1.4, ease: [0.34, 0.05, 0.36, 1] } 
              : { delay: 0.6, duration: 1 }
          }
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