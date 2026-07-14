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
  const [opticalOffset, setOpticalOffset] = React.useState(0);

  React.useEffect(() => {
    // Measure actual rendered bounding boxes to root-cause and fix alignment
    if (svgRef.current && textRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();
      
      // Calculate true centers in viewport coordinates
      const svgCenter = svgRect.left + (svgRect.width / 2);
      const textCenter = textRect.left + (textRect.width / 2);
      
      // If the flex layout forced an offset due to max-content or constraints,
      // this difference will exactly correct the text back to the SVG's true center.
      const diff = svgCenter - textCenter;
      
      // Only apply if there's a meaningful sub-pixel/pixel difference on mobile widths
      if (window.innerWidth <= 430 && Math.abs(diff) > 0.5) {
        setOpticalOffset(diff);
      } else {
        setOpticalOffset(0);
      }
    }
  }, [brideName, groomName, size]);

  // Silver palette
  const branchColor = '#B8B8B0';      // warm silver for branches
  const leafLight  = '#C8C8C0';       // light silver leaf
  const leafMid    = '#A8A8A0';       // mid silver leaf
  const leafDark   = '#989890';       // darker silver leaf
  const flowerPetal = '#D0D0C8';      // silver-white petals
  const flowerCenter = '#C0B8A8';     // warm champagne center

  // Generate leaf along a bezier path
  // Left branch: starts at bottom-center, curves up-left to top
  // Right branch: starts at bottom-center, curves up-right to top
  const leftBranchLeaves = [];
  const rightBranchLeaves = [];

  for (let i = 0; i < 16; i++) {
    const t = i / 15;
    // Left branch path: cubic bezier from (200,375) to (60,50)
    const lx = (1-t)**3*200 + 3*(1-t)**2*t*100 + 3*(1-t)*t**2*40 + t**3*80;
    const ly = (1-t)**3*375 + 3*(1-t)**2*t*320 + 3*(1-t)*t**2*180 + t**3*45;
    // Tangent angle for leaf direction
    const dlx = -3*(1-t)**2*200 + 3*(3*(1-t)**2 - 6*(1-t)*t)*100/3*3 + 3*(6*(1-t)*t - 3*t**2)*40/3*3 + 3*t**2*80;
    const dly = -3*(1-t)**2*375 + 3*(1-t)**2*320 + (6*(1-t)*t - 3*t**2)*180*3 + 3*t**2*45;
    const angle = Math.atan2(dly, dlx) * 180 / Math.PI;
    const side = i % 2 === 0 ? -1 : 1;
    const leafScale = 0.6 + (1-t) * 0.5;
    const colors = [leafLight, leafMid, leafDark];

    leftBranchLeaves.push({
      x: lx + side * 8, y: ly + side * 4,
      angle: angle + side * 55,
      scale: leafScale,
      color: colors[i % 3],
    });

    // Right branch (mirrored)
    const rx = 400 - lx;
    rightBranchLeaves.push({
      x: rx - side * 8, y: ly + side * 4,
      angle: 180 - angle - side * 55,
      scale: leafScale,
      color: colors[(i+1) % 3],
    });
  }

  return (
    <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }} ref={svgRef}>
      {/* Silver SVG Foliage - Dissolves to dust */}
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
        {/* Main branch stems */}
        <path
          d="M 200 375 C 100 320, 40 180, 80 45"
          fill="none" stroke={branchColor} strokeWidth="1.2" strokeLinecap="round" opacity="0.9"
        />
        <path
          d="M 200 375 C 300 320, 360 180, 320 45"
          fill="none" stroke={branchColor} strokeWidth="1.2" strokeLinecap="round" opacity="0.9"
        />

        {/* Secondary thinner branches */}
        <path
          d="M 180 370 C 85 310, 30 190, 75 55"
          fill="none" stroke={branchColor} strokeWidth="0.6" strokeLinecap="round" opacity="0.5"
        />
        <path
          d="M 220 370 C 315 310, 370 190, 325 55"
          fill="none" stroke={branchColor} strokeWidth="0.6" strokeLinecap="round" opacity="0.5"
        />

        {/* Left branch leaves */}
        {leftBranchLeaves.map((leaf, i) => (
          <path
            key={`ll-${i}`}
            d="M 0 0 C 4 -8, 14 -8, 18 -2 C 14 4, 4 6, 0 0 Z"
            fill={leaf.color}
            opacity="0.85"
            transform={`translate(${leaf.x},${leaf.y}) rotate(${leaf.angle}) scale(${leaf.scale})`}
          />
        ))}

        {/* Right branch leaves */}
        {rightBranchLeaves.map((leaf, i) => (
          <path
            key={`rl-${i}`}
            d="M 0 0 C 4 -8, 14 -8, 18 -2 C 14 4, 4 6, 0 0 Z"
            fill={leaf.color}
            opacity="0.85"
            transform={`translate(${leaf.x},${leaf.y}) rotate(${leaf.angle}) scale(${leaf.scale})`}
          />
        ))}

        {/* Small berry/bud accents along left branch */}
        {[0.15, 0.35, 0.55, 0.75].map((t, i) => {
          const x = (1-t)**3*200 + 3*(1-t)**2*t*100 + 3*(1-t)*t**2*40 + t**3*80;
          const y = (1-t)**3*375 + 3*(1-t)**2*t*320 + 3*(1-t)*t**2*180 + t**3*45;
          const side = i % 2 === 0 ? -1 : 1;
          return (
            <g key={`lb-${i}`}>
              <line x1={x} y1={y} x2={x + side*14} y2={y - 10} stroke={branchColor} strokeWidth="0.5" opacity="0.6" />
              <circle cx={x + side*14} cy={y - 10} r="2" fill={leafMid} opacity="0.7" />
              <line x1={x} y1={y} x2={x + side*10} y2={y - 16} stroke={branchColor} strokeWidth="0.5" opacity="0.6" />
              <circle cx={x + side*10} cy={y - 16} r="1.5" fill={leafLight} opacity="0.6" />
            </g>
          );
        })}

        {/* Small berry/bud accents along right branch */}
        {[0.15, 0.35, 0.55, 0.75].map((t, i) => {
          const x = 400 - ((1-t)**3*200 + 3*(1-t)**2*t*100 + 3*(1-t)*t**2*40 + t**3*80);
          const y = (1-t)**3*375 + 3*(1-t)**2*t*320 + 3*(1-t)*t**2*180 + t**3*45;
          const side = i % 2 === 0 ? 1 : -1;
          return (
            <g key={`rb-${i}`}>
              <line x1={x} y1={y} x2={x + side*14} y2={y - 10} stroke={branchColor} strokeWidth="0.5" opacity="0.6" />
              <circle cx={x + side*14} cy={y - 10} r="2" fill={leafMid} opacity="0.7" />
              <line x1={x} y1={y} x2={x + side*10} y2={y - 16} stroke={branchColor} strokeWidth="0.5" opacity="0.6" />
              <circle cx={x + side*10} cy={y - 16} r="1.5" fill={leafLight} opacity="0.6" />
            </g>
          );
        })}

        {/* Rosette flowers — left side */}
        {[0.25, 0.5, 0.72].map((t, i) => {
          const x = (1-t)**3*200 + 3*(1-t)**2*t*100 + 3*(1-t)*t**2*40 + t**3*80;
          const y = (1-t)**3*375 + 3*(1-t)**2*t*320 + 3*(1-t)*t**2*180 + t**3*45;
          const side = i % 2 === 0 ? -1 : 1;
          const fx = x + side * 18;
          const fy = y - 4;
          return (
            <g key={`fl-${i}`} transform={`translate(${fx},${fy}) scale(${0.8 + i*0.15})`}>
              {[0, 60, 120, 180, 240, 300].map((a) => (
                <ellipse key={a} cx={Math.cos(a*Math.PI/180)*5} cy={Math.sin(a*Math.PI/180)*5} rx="4" ry="3" fill={flowerPetal} opacity="0.75" transform={`rotate(${a})`} />
              ))}
              <circle cx="0" cy="0" r="2.5" fill={flowerCenter} />
            </g>
          );
        })}

        {/* Rosette flowers — right side */}
        {[0.25, 0.5, 0.72].map((t, i) => {
          const x = 400 - ((1-t)**3*200 + 3*(1-t)**2*t*100 + 3*(1-t)*t**2*40 + t**3*80);
          const y = (1-t)**3*375 + 3*(1-t)**2*t*320 + 3*(1-t)*t**2*180 + t**3*45;
          const side = i % 2 === 0 ? 1 : -1;
          const fx = x + side * 18;
          const fy = y - 4;
          return (
            <g key={`fr-${i}`} transform={`translate(${fx},${fy}) scale(${0.8 + i*0.15})`}>
              {[0, 60, 120, 180, 240, 300].map((a) => (
                <ellipse key={a} cx={Math.cos(a*Math.PI/180)*5} cy={Math.sin(a*Math.PI/180)*5} rx="4" ry="3" fill={flowerPetal} opacity="0.75" transform={`rotate(${a})`} />
              ))}
              <circle cx="0" cy="0" r="2.5" fill={flowerCenter} />
            </g>
          );
        })}
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
            width: 'max-content',
            maxWidth: '100vw',
            transform: `translateX(${opticalOffset}px)`,
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