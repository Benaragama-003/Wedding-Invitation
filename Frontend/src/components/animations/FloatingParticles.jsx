import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/* ============================================
   FLOATING PARTICLES — Rose Petals, Wheat,
   Sage Glow Orbs, Gold Dust.

   Color palette:
   - Petals: rose gold #B76E79, blush #E8CFC8,
             sage rgba(156,175,136,...)
   - Glow:   sage rgba(156,175,136,...) + rose-gold
   - Dust:   champagne gold #C9A97A
   ============================================ */

/* ── Rose Petal ── */
function Petal({ delay, duration, startX, size, colorIdx }) {
  const colors = [
    'rgba(183,110,121,0.55)',   // rose gold
    'rgba(232,207,200,0.60)',   // soft blush
    'rgba(156,175,136,0.38)',   // sage tint
    'rgba(201,145,138,0.50)',   // mid rose
  ];
  const color = colors[colorIdx % colors.length];
  const initRotate = (startX * 3.7) % 360;
  const driftX1 =  (startX % 2 === 0 ? 1 : -1) * (20 + (size * 2));
  const driftX2 = -driftX1 * 0.6;
  const driftX3 =  driftX1 * 0.35;

  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        left: `${startX}%`,
        top: '-3%',
        width: size,
        height: size * 1.45,
        background: color,
        borderRadius: '50% 12% 50% 48%',
        zIndex: 3,
        willChange: 'transform, opacity',
      }}
      animate={{
        y: ['0vh', '112vh'],
        x: [0, driftX1, driftX2, driftX3],
        rotate: [initRotate, initRotate + 360 + (startX % 2 === 0 ? 120 : -90)],
        opacity: [0, 0.8, 0.75, 0.7, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        times: [0, 0.08, 0.5, 0.85, 1],
      }}
    />
  );
}

/* ── Wheat Grain ── */
function WheatGrain({ delay, duration, startX }) {
  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{ left: `${startX}%`, top: '-3%', zIndex: 3 }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, 14, -9, 7, 0],
        rotate: [0, 35, -22, 45, 12],
        opacity: [0, 0.5, 0.5, 0],
      }}
      transition={{
        duration, delay, repeat: Infinity,
        ease: 'linear', times: [0, 0.1, 0.9, 1],
      }}
    >
      <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
        <ellipse cx="5" cy="7" rx="3" ry="6" fill="#C9A97A" opacity="0.7" />
        <ellipse cx="3" cy="5" rx="1.5" ry="3.5" fill="#9CAF88" opacity="0.55" transform="rotate(-15, 3, 5)" />
        <ellipse cx="7" cy="5" rx="1.5" ry="3.5" fill="#9CAF88" opacity="0.55" transform="rotate(15, 7, 5)" />
        <line x1="5" y1="13" x2="5" y2="20" stroke="#C9A97A" strokeWidth="0.8" opacity="0.45" />
      </svg>
    </motion.div>
  );
}

/* ── Glow Orb — sage + rose-gold ── */
function GlowParticle({ delay, duration, x, y, size, colorIdx }) {
  const gradients = [
    'radial-gradient(circle, rgba(156,175,136,0.40) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(183,110,121,0.28) 0%, transparent 70%)',
    'radial-gradient(circle, rgba(201,169,122,0.25) 0%, transparent 70%)',
  ];
  return (
    <motion.div
      className="fixed pointer-events-none rounded-full"
      style={{
        left: `${x}%`, top: `${y}%`,
        width: size, height: size,
        background: gradients[colorIdx % gradients.length],
        zIndex: 2,
      }}
      animate={{
        opacity: [0.08, 0.38, 0.08],
        scale:   [0.8, 1.22, 0.8],
        x: [0, (colorIdx % 2 === 0 ? 1 : -1) * 18, 0],
        y: [0, (colorIdx % 3 === 0 ? 1 : -1) * 14, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

/* ── Gold Dust Mote ── */
function DustMote({ delay, x, y }) {
  const size = 2 + (x % 3) * 0.7;
  const colors = ['#C9A97A', '#B76E79', '#9CAF88'];
  const color  = colors[Math.floor(y) % 3];
  return (
    <motion.div
      className="fixed pointer-events-none rounded-full"
      style={{
        left: `${x}%`, top: `${y}%`,
        width: size, height: size,
        background: color,
        zIndex: 4,
        boxShadow: `0 0 5px ${color}55`,
      }}
      animate={{
        y: [0, -75],
        opacity: [0, 0.65, 0.5, 0],
        scale: [0.5, 1, 0.7, 0.3],
      }}
      transition={{
        duration: 7 + (x % 7),
        delay,
        repeat: Infinity,
        ease: 'easeOut',
        times: [0, 0.18, 0.72, 1],
      }}
    />
  );
}

/* ── Main Export ── */
export default function FloatingParticles({
  petalCount = 14,
  wheatCount = 3,
  glowCount  = 8,
  dustCount  = 10,
}) {
  const petals = useMemo(() =>
    Array.from({ length: petalCount }, (_, i) => ({
      id: `petal-${i}`,
      delay:    i * 3.2 + (i * 7 % 5),
      duration: 16 + (i * 3 % 14),
      startX:   (i * 7.3 + 3) % 97,
      size:     6  + (i * 3 % 9),
      colorIdx: i,
    })),
  [petalCount]);

  const wheats = useMemo(() =>
    Array.from({ length: wheatCount }, (_, i) => ({
      id: `wheat-${i}`,
      delay:    i * 8 + (i * 5 % 7),
      duration: 22 + (i * 4 % 12),
      startX:   (i * 33 + 15) % 90,
    })),
  [wheatCount]);

  const glows = useMemo(() =>
    Array.from({ length: glowCount }, (_, i) => ({
      id: `glow-${i}`,
      delay:    i * 1.8 + (i % 3),
      duration: 7 + (i * 2 % 7),
      x:        (i * 12.5 + 5) % 95,
      y:        (i * 13.7 + 8) % 90,
      size:     28 + (i * 11 % 44),
      colorIdx: i,
    })),
  [glowCount]);

  const dusts = useMemo(() =>
    Array.from({ length: dustCount }, (_, i) => ({
      id: `dust-${i}`,
      delay: i * 1.1 + (i % 4),
      x:     (i * 10.3 + 2) % 96,
      y:     28 + (i * 7.1 % 58),
    })),
  [dustCount]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }}>
      {petals.map((p) => <Petal      key={p.id} {...p} />)}
      {wheats.map((w) => <WheatGrain key={w.id} {...w} />)}
      {glows.map ((g) => <GlowParticle key={g.id} {...g} />)}
      {dusts.map ((d) => <DustMote   key={d.id} {...d} />)}
    </div>
  );
}
