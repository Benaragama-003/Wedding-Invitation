import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ============================================
   FLORAL CORNERS — Premium Watercolor Style
   
   Soft, layered petal shapes with watercolor blur.
   Uses proper SVG paths for roses, leaves with veins,
   and bud clusters. Branches draw themselves in.
   ============================================ */
export default function FloralCorners({ className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* ═══════════════════════════════════════
          TOP-LEFT CORNER — Large primary floral
          ═══════════════════════════════════════ */}
      <motion.div
        className="absolute -top-6 -left-6"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ filter: 'blur(0.3px)' }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Branch — draws in */}
          <path
            d="M 8 8 Q 35 28 55 55 Q 70 80 78 115"
            stroke="var(--color-floral-3)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.35"
            strokeDasharray="250"
            strokeDashoffset={isInView ? 0 : 250}
            style={{ transition: 'stroke-dashoffset 2.5s ease-out' }}
          />
          <path
            d="M 4 28 Q 22 42 38 72"
            stroke="var(--color-floral-3)"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.25"
            strokeDasharray="120"
            strokeDashoffset={isInView ? 0 : 120}
            style={{ transition: 'stroke-dashoffset 2s ease-out 0.3s' }}
          />
          <path
            d="M 20 6 Q 38 18 52 40"
            stroke="var(--color-floral-3)"
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity="0.2"
            strokeDasharray="80"
            strokeDashoffset={isInView ? 0 : 80}
            style={{ transition: 'stroke-dashoffset 1.8s ease-out 0.5s' }}
          />

          {/* === ROSE 1 (main) — layered petals === */}
          {/* Outer petals — soft, translucent */}
          <path d="M 22 22 Q 10 14 18 6 Q 26 10 22 22" fill="var(--color-floral-1)" opacity="0.5" />
          <path d="M 22 22 Q 32 12 36 4 Q 28 8 22 22" fill="var(--color-floral-1)" opacity="0.45" />
          <path d="M 22 22 Q 34 24 38 16 Q 30 18 22 22" fill="var(--color-floral-2)" opacity="0.4" />
          <path d="M 22 22 Q 14 30 8 26 Q 12 22 22 22" fill="var(--color-floral-1)" opacity="0.4" />
          <path d="M 22 22 Q 20 32 12 34 Q 14 26 22 22" fill="var(--color-floral-2)" opacity="0.35" />
          {/* Inner petals */}
          <circle cx="22" cy="22" r="8" fill="var(--color-floral-2)" opacity="0.5" />
          <circle cx="22" cy="22" r="5" fill="var(--color-floral-1)" opacity="0.55" />
          {/* Center */}
          <circle cx="22" cy="22" r="2.5" fill="var(--color-accent)" opacity="0.5" />
          <circle cx="22" cy="22" r="1.2" fill="var(--color-floral-4)" opacity="0.4" />

          {/* === ROSE 2 (secondary) === */}
          <path d="M 52 45 Q 42 38 48 30 Q 54 36 52 45" fill="var(--color-floral-1)" opacity="0.4" />
          <path d="M 52 45 Q 60 38 62 30 Q 56 34 52 45" fill="var(--color-floral-2)" opacity="0.38" />
          <path d="M 52 45 Q 60 48 62 42 Q 56 44 52 45" fill="var(--color-floral-1)" opacity="0.35" />
          <path d="M 52 45 Q 46 52 40 48 Q 44 46 52 45" fill="var(--color-floral-2)" opacity="0.32" />
          <circle cx="52" cy="45" r="6" fill="var(--color-floral-2)" opacity="0.42" />
          <circle cx="52" cy="45" r="3.5" fill="var(--color-floral-1)" opacity="0.5" />
          <circle cx="52" cy="45" r="1.8" fill="var(--color-accent)" opacity="0.42" />

          {/* === Small bud cluster === */}
          <circle cx="14" cy="50" r="4.5" fill="var(--color-floral-1)" opacity="0.3" />
          <circle cx="14" cy="50" r="2.5" fill="var(--color-floral-2)" opacity="0.35" />
          <circle cx="14" cy="50" r="1" fill="var(--color-accent)" opacity="0.25" />

          <circle cx="68" cy="72" r="3.5" fill="var(--color-floral-1)" opacity="0.25" />
          <circle cx="68" cy="72" r="2" fill="var(--color-floral-2)" opacity="0.28" />

          <circle cx="42" cy="18" r="4" fill="var(--color-floral-2)" opacity="0.28" />
          <circle cx="42" cy="18" r="2" fill="var(--color-floral-1)" opacity="0.35" />

          <circle cx="30" cy="65" r="3" fill="var(--color-floral-1)" opacity="0.2" />

          {/* === LEAVES with vein detail === */}
          <ellipse cx="38" cy="35" rx="5" ry="13" transform="rotate(-45, 38, 35)" fill="var(--color-floral-3)" opacity="0.2" />
          <path d="M 34 31 L 42 39" stroke="var(--color-floral-4)" strokeWidth="0.3" opacity="0.15" />
          <path d="M 36 33 L 38 31" stroke="var(--color-floral-4)" strokeWidth="0.2" opacity="0.1" />
          <path d="M 39 36 L 41 34" stroke="var(--color-floral-4)" strokeWidth="0.2" opacity="0.1" />

          <ellipse cx="58" cy="28" rx="4" ry="10" transform="rotate(-30, 58, 28)" fill="var(--color-floral-3)" opacity="0.18" />
          <path d="M 55.5 24 L 60.5 32" stroke="var(--color-floral-4)" strokeWidth="0.25" opacity="0.12" />

          <ellipse cx="18" cy="38" rx="3.5" ry="9" transform="rotate(-60, 18, 38)" fill="var(--color-floral-3)" opacity="0.16" />
          <path d="M 15 34 L 21 42" stroke="var(--color-floral-4)" strokeWidth="0.25" opacity="0.1" />

          <ellipse cx="62" cy="60" rx="3" ry="8" transform="rotate(-40, 62, 60)" fill="var(--color-floral-3)" opacity="0.14" />

          {/* Tiny scattered dots (pollen) */}
          <circle cx="28" cy="14" r="1" fill="var(--color-accent)" opacity="0.15" />
          <circle cx="46" cy="32" r="0.8" fill="var(--color-accent)" opacity="0.12" />
          <circle cx="10" cy="40" r="0.7" fill="var(--color-floral-4)" opacity="0.1" />
          <circle cx="60" cy="50" r="0.9" fill="var(--color-accent)" opacity="0.1" />
        </svg>
      </motion.div>

      {/* ═══════════════════════════════════════
          TOP-RIGHT CORNER — Smaller mirrored floral
          ═══════════════════════════════════════ */}
      <motion.div
        className="absolute -top-4 -right-4"
        style={{ transform: 'scaleX(-1)' }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 0.75, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
      >
        <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'blur(0.4px)' }}>
          <path
            d="M 8 8 Q 30 25 48 50 Q 58 70 62 95"
            stroke="var(--color-floral-3)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.28"
            strokeDasharray="160"
            strokeDashoffset={isInView ? 0 : 160}
            style={{ transition: 'stroke-dashoffset 2s ease-out 0.4s' }}
          />

          {/* Small rose */}
          <path d="M 20 20 Q 12 14 16 8 Q 22 12 20 20" fill="var(--color-floral-1)" opacity="0.4" />
          <path d="M 20 20 Q 28 14 30 8 Q 24 10 20 20" fill="var(--color-floral-2)" opacity="0.38" />
          <path d="M 20 20 Q 26 22 28 18 Q 24 18 20 20" fill="var(--color-floral-1)" opacity="0.35" />
          <circle cx="20" cy="20" r="6" fill="var(--color-floral-2)" opacity="0.4" />
          <circle cx="20" cy="20" r="3.5" fill="var(--color-floral-1)" opacity="0.48" />
          <circle cx="20" cy="20" r="1.5" fill="var(--color-accent)" opacity="0.4" />

          {/* Bud */}
          <circle cx="42" cy="40" r="5" fill="var(--color-floral-2)" opacity="0.3" />
          <circle cx="42" cy="40" r="2.8" fill="var(--color-floral-1)" opacity="0.35" />

          {/* Leaf */}
          <ellipse cx="32" cy="28" rx="4" ry="10" transform="rotate(-40, 32, 28)" fill="var(--color-floral-3)" opacity="0.16" />
          <path d="M 29.5 24 L 34.5 32" stroke="var(--color-floral-4)" strokeWidth="0.25" opacity="0.1" />

          <circle cx="52" cy="55" r="3" fill="var(--color-floral-1)" opacity="0.2" />
        </svg>
      </motion.div>

      {/* ═══════════════════════════════════════
          BOTTOM-RIGHT CORNER — Rotated large floral
          ═══════════════════════════════════════ */}
      <motion.div
        className="absolute -bottom-5 -right-5"
        style={{ transform: 'rotate(180deg)' }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
      >
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'blur(0.3px)' }}>
          <path
            d="M 8 8 Q 35 28 55 55 Q 70 80 76 108"
            stroke="var(--color-floral-3)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.3"
            strokeDasharray="200"
            strokeDashoffset={isInView ? 0 : 200}
            style={{ transition: 'stroke-dashoffset 2.2s ease-out 0.5s' }}
          />
          <path
            d="M 5 25 Q 20 38 35 62"
            stroke="var(--color-floral-3)"
            strokeWidth="0.7"
            strokeLinecap="round"
            opacity="0.22"
          />

          {/* Rose */}
          <path d="M 22 22 Q 12 16 16 8 Q 24 14 22 22" fill="var(--color-floral-1)" opacity="0.48" />
          <path d="M 22 22 Q 30 14 34 8 Q 26 12 22 22" fill="var(--color-floral-2)" opacity="0.42" />
          <path d="M 22 22 Q 30 24 32 18 Q 26 20 22 22" fill="var(--color-floral-1)" opacity="0.38" />
          <path d="M 22 22 Q 16 30 10 28 Q 14 24 22 22" fill="var(--color-floral-2)" opacity="0.35" />
          <circle cx="22" cy="22" r="7" fill="var(--color-floral-2)" opacity="0.45" />
          <circle cx="22" cy="22" r="4" fill="var(--color-floral-1)" opacity="0.52" />
          <circle cx="22" cy="22" r="2" fill="var(--color-accent)" opacity="0.45" />

          {/* Secondary bud */}
          <circle cx="48" cy="44" r="5.5" fill="var(--color-floral-2)" opacity="0.32" />
          <circle cx="48" cy="44" r="3" fill="var(--color-floral-1)" opacity="0.38" />
          <circle cx="48" cy="44" r="1.3" fill="var(--color-accent)" opacity="0.3" />

          {/* Buds */}
          <circle cx="16" cy="48" r="4" fill="var(--color-floral-1)" opacity="0.25" />
          <circle cx="62" cy="65" r="3.5" fill="var(--color-floral-2)" opacity="0.22" />

          {/* Leaves */}
          <ellipse cx="36" cy="32" rx="4.5" ry="11" transform="rotate(-45, 36, 32)" fill="var(--color-floral-3)" opacity="0.18" />
          <path d="M 33 28 L 39 36" stroke="var(--color-floral-4)" strokeWidth="0.25" opacity="0.12" />
          <ellipse cx="55" cy="55" rx="3" ry="8" transform="rotate(-35, 55, 55)" fill="var(--color-floral-3)" opacity="0.14" />
        </svg>
      </motion.div>

      {/* ═══════════════════════════════════════
          BOTTOM-LEFT CORNER — Small accent
          ═══════════════════════════════════════ */}
      <motion.div
        className="absolute -bottom-3 -left-3"
        style={{ transform: 'scaleX(-1) rotate(180deg)' }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 0.65, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
      >
        <svg width="110" height="110" viewBox="0 0 200 200" fill="none" style={{ filter: 'blur(0.4px)' }}>
          <path
            d="M 12 12 Q 30 28 42 50"
            stroke="var(--color-floral-3)"
            strokeWidth="0.8"
            opacity="0.22"
          />

          {/* Small rose */}
          <path d="M 22 22 Q 14 16 18 10 Q 24 14 22 22" fill="var(--color-floral-1)" opacity="0.32" />
          <path d="M 22 22 Q 28 16 30 10 Q 24 12 22 22" fill="var(--color-floral-2)" opacity="0.28" />
          <circle cx="22" cy="22" r="5.5" fill="var(--color-floral-2)" opacity="0.3" />
          <circle cx="22" cy="22" r="3" fill="var(--color-floral-1)" opacity="0.35" />
          <circle cx="22" cy="22" r="1.3" fill="var(--color-accent)" opacity="0.28" />

          {/* Bud */}
          <circle cx="36" cy="38" r="3.5" fill="var(--color-floral-1)" opacity="0.22" />
          <circle cx="36" cy="38" r="2" fill="var(--color-floral-2)" opacity="0.2" />

          {/* Leaf */}
          <ellipse cx="30" cy="28" rx="3" ry="7" transform="rotate(-45, 30, 28)" fill="var(--color-floral-3)" opacity="0.14" />
        </svg>
      </motion.div>
    </div>
  );
}
