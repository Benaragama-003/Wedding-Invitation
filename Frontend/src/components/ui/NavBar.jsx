import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';

/* ============================================
   NAV BAR — Transparent Hero-Only Header

   - Fully transparent glass over the hero image
   - Fades out once user scrolls past the hero
   - Mobile: hamburger menu
   ============================================ */

const NAV_LEFT = [
  { label: 'Our Story', href: '#couple' },
  { label: 'Timeline', href: '#timeline' },
];
const NAV_RIGHT = [
  { label: 'Venue', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <motion.nav
        className="absolute top-0 left-0 right-0"
        style={{ zIndex: 50 }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      >
          {/* Transparent bar with very subtle glass effect */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.12)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div
              className="flex items-center justify-between"
              style={{
                height: 58,
                maxWidth: 1200,
                margin: '0 auto',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
                position: 'relative',
              }}
            >
              {/* ── Left nav links (desktop) ── */}
              <div className="hidden md:flex items-center gap-8" style={{ flex: 1 }}>
                {NAV_LEFT.map((item) => (
                  <NavLink key={item.href} item={item} onClick={() => scrollTo(item.href)} />
                ))}
              </div>

              {/* ── Center monogram ── */}
              <button
                onClick={() => scrollTo('#hero')}
                className="font-serif font-semibold cursor-pointer"
                style={{
                  color: 'rgba(255,255,255,0.92)',
                  fontSize: 20,
                  letterSpacing: '0.12em',
                  background: 'none',
                  border: 'none',
                  padding: '0 1rem',
                  textShadow: '0 1px 6px rgba(0,0,0,0.30)',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                N &amp; S
              </button>

              {/* ── Right nav links (desktop) ── */}
              <div className="hidden md:flex items-center gap-8 justify-end" style={{ flex: 1 }}>
                {NAV_RIGHT.map((item) => (
                  <NavLink key={item.href} item={item} onClick={() => scrollTo(item.href)} />
                ))}
              </div>

              {/* ── Mobile hamburger ── */}
              <button
                className="md:hidden cursor-pointer"
                style={{ background: 'none', border: 'none', padding: 6 }}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <motion.span
                    style={{
                      height: 1.5,
                      background: 'rgba(255,255,255,0.88)',
                      borderRadius: 2,
                      display: 'block',
                    }}
                    animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                  />
                  <motion.span
                    style={{
                      height: 1.5,
                      background: 'rgba(255,255,255,0.88)',
                      borderRadius: 2,
                      display: 'block',
                    }}
                    animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.span
                    style={{
                      height: 1.5,
                      background: 'rgba(255,255,255,0.88)',
                      borderRadius: 2,
                      display: 'block',
                    }}
                    animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* ── Mobile dropdown ── */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  overflow: 'hidden',
                  background: 'rgba(0, 0, 0, 0.35)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', padding: '8px 24px 16px' }}>
                  {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollTo(item.href)}
                      style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        padding: '10px 0',
                        fontFamily: 'var(--font-body)',
                        fontSize: 11,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.78)',
                        cursor: 'pointer',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
    </AnimatePresence>
  );
}

function NavLink({ item, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 10.5,
        fontWeight: 500,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.78)',
        padding: '4px 0',
        position: 'relative',
        textShadow: '0 1px 4px rgba(0,0,0,0.25)',
      }}
      whileHover={{ color: 'rgba(255,255,255,1)' }}
    >
      {item.label}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'rgba(255,255,255,0.60)',
          scaleX: 0,
          transformOrigin: 'left',
        }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.22 }}
      />
    </motion.button>
  );
}
