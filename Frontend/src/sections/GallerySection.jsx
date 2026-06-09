import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/animations/ScrollReveal';

/* ============================================
   GALLERY SECTION — "A Peek Into Us"
   Fanned carousel with pink arrow navigation.

   Replace GALLERY_ITEMS[].src with real photo paths.
   ============================================ */
const GALLERY_ITEMS = [
  { id: 1, src: '/Gallery/10.2.jpg', alt: 'Memories together 1' },
  { id: 2, src: '/Gallery/4.jpg', alt: 'Memories together 2' },
  { id: 3, src: '/Gallery/5.jpg', alt: 'Memories together 3' },
  { id: 4, src: '/Gallery/6.jpg', alt: 'Memories together 4' },
  { id: 5, src: '/Gallery/9.jpg', alt: 'Memories together 5' },
  { id: 6, src: '/Gallery/10.jpg', alt: 'Memories together 6' },
  { id: 7, src: '/Gallery/25.jpg', alt: 'Memories together 7' },
  { id: 8, src: '/Gallery/11.jpg', alt: 'Memories together 8' },
  { id: 9, src: '/Gallery/12.jpg', alt: 'Memories together 9' },
  { id: 10, src: '/Gallery/15.jpg', alt: 'Memories together 10' },
  { id: 11, src: '/Gallery/16.jpg', alt: 'Memories together 11' },
  { id: 12, src: '/Gallery/20.jpg', alt: 'Memories together 12' },
  { id: 13, src: '/Gallery/23.jpg', alt: 'Memories together 13' },
  { id: 14, src: '/Gallery/1.jpg', alt: 'Memories together 14' },
];

/* Which photo appears in which slot: [-1=left, 0=center, +1=right] */
function getSlotIndex(activeIdx, itemIdx, total) {
  const diff = ((itemIdx - activeIdx) % total + total) % total;
  if (diff === 0) return 0;
  if (diff === 1) return 1;
  if (diff === total - 1) return -1;
  return null; // not visible
}

const SLOT_STYLES = {
  '-1': {
    rotate: -12,
    x: '-58%',
    scale: 0.75,
    zIndex: 1,
    opacity: 0.72,
    filter: 'brightness(0.85)',
  },
  '0': {
    rotate: 0,
    x: '0%',
    scale: 1,
    zIndex: 10,
    opacity: 1,
    filter: 'brightness(1)',
  },
  '1': {
    rotate: 12,
    x: '58%',
    scale: 0.75,
    zIndex: 1,
    opacity: 0.72,
    filter: 'brightness(0.85)',
  },
};

export default function GallerySection() {
  const [active, setActive] = useState(0);
  const total = GALLERY_ITEMS.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  // Compute which items appear in the fan
  const visibleItems = GALLERY_ITEMS.map((item, i) => {
    const slot = getSlotIndex(active, i, total);
    return { ...item, slot };
  }).filter((item) => item.slot !== null);

  return (
    <section id="gallery" style={{ background: 'var(--color-bg)' }}>
      {/* Pink top rule */}
      <div style={{ height: 1.5, background: 'linear-gradient(90deg, transparent, var(--color-accent) 20%, var(--color-accent) 80%, transparent)' }} />

      <div className="section-pad">
        {/* ── Heading ── */}
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-14">
            <h2
              className="heading-editorial"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: 0 }}
            >
              A PEEK
              <br />
              INTO US
            </h2>
          </div>
        </ScrollReveal>

        {/* ── Fanned photo carousel ── */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'clamp(320px, 55vh, 520px)',
            marginBottom: 48,
          }}
        >
          {/* Photos */}
          {visibleItems.map((item) => {
            const slot = item.slot;
            const styles = SLOT_STYLES[String(slot)];
            const isSide = slot !== 0;

            return (
              <motion.div
                key={item.id}
                style={{
                  position: 'absolute',
                  top: 0, bottom: 0,
                  width: slot === 0 ? 'clamp(200px, 28vw, 310px)' : 'clamp(150px, 20vw, 230px)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  cursor: isSide ? 'pointer' : 'default',
                  boxShadow: slot === 0
                    ? '0 16px 60px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12)'
                    : '0 8px 30px rgba(0,0,0,0.14)',
                  border: '6px solid #fff',
                  background: '#f0ebe4',
                }}
                animate={{
                  rotate: styles.rotate,
                  x: styles.x,
                  scale: styles.scale,
                  opacity: styles.opacity,
                  filter: styles.filter,
                  zIndex: styles.zIndex,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                onClick={isSide ? (slot === -1 ? prev : next) : undefined}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                {/* Side arrows overlay */}
                {isSide && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{ background: 'rgba(232,207,200,0.12)' }}
                  >
                    <div
                      style={{
                        width: 44, height: 44,
                        borderRadius: '50%',
                        background: 'rgba(184,115,51,0.88)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
                      }}
                    >
                      {slot === -1 ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="white" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="white" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}

          {/* External prev/next arrow buttons (always visible) */}
          <button
            onClick={prev}
            style={{
              position: 'absolute',
              left: 0, top: '50%', transform: 'translateY(-50%)',
              zIndex: 20,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(184,115,51,0.80)',
              border: '2px solid rgba(184,115,51,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            style={{
              position: 'absolute',
              right: 0, top: '50%', transform: 'translateY(-50%)',
              zIndex: 20,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(184,115,51,0.80)',
              border: '2px solid rgba(184,115,51,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* ── Caption ── */}
        <ScrollReveal animation="fade-in" delay={0.15}>
          <p
            className="text-center font-body"
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              lineHeight: 1.8,
              maxWidth: 520,
              margin: '0 auto',
            }}
          >
            From goofy selfies to quiet sunsets,
            <br />
            here are a few moments that mean the world to us
          </p>
        </ScrollReveal>

        {/* ── Dot indicators ── */}
        <div
          style={{
            display: 'flex', justifyContent: 'center',
            gap: 8, marginTop: 24,
          }}
        >
          {GALLERY_ITEMS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 20 : 7,
                height: 7,
                borderRadius: 4,
                background: i === active ? 'var(--color-accent)' : 'rgba(184,115,51,0.25)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              animate={{ width: i === active ? 20 : 7 }}
              transition={{ duration: 0.25 }}
            />
          ))}
        </div>
      </div>

      {/* Pink bottom rule */}
      <div style={{ height: 1.5, background: 'linear-gradient(90deg, transparent, var(--color-accent) 20%, var(--color-accent) 80%, transparent)' }} />
    </section>
  );
}
