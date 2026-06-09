import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/animations/ScrollReveal';
import LuxuryDivider from '../components/ui/LuxuryDivider';

/* ============================================
   FINAL BLESSING SECTION

   Edit names and text below:
   ============================================ */
const BRIDE_NAME = 'Nilushi Benaragama';
const GROOM_NAME = 'Sangeeth Bandara';
const WEDDING_DATE = '16.10.2026';

export default function FinalBlessingSection() {
  return (
    <section id="blessing" className="section-pad relative overflow-visible"
      style={{ background: 'var(--color-bg)' }}>

      {/* ── Main content ── */}
      <div className="invitation-container relative" style={{ zIndex: 2 }}>
        <ScrollReveal animation="fade-in" duration={1.2}>
          <div className="text-center">
            {/* Decorative top flourish */}
            <div className="flex justify-center mb-7">
              <svg width="60" height="28" viewBox="0 0 60 28" fill="none" opacity="0.45">
                <path d="M 4 14 Q 12 4 30 14 Q 48 24 56 14" stroke="var(--color-accent)" strokeWidth="0.8" fill="none" />
                <circle cx="14" cy="10" r="2" fill="var(--color-floral-2)" />
                <circle cx="30" cy="14" r="3" fill="var(--color-floral-2)" />
                <circle cx="46" cy="18" r="2" fill="var(--color-floral-2)" />
                <circle cx="30" cy="14" r="1.2" fill="var(--color-accent)" />
              </svg>
            </div>

            <p
              className="font-serif italic leading-loose mb-9"
              style={{ color: 'var(--color-text)', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
            >
              "Thank you for being part of our love story.<br/>
              Your presence will make our day even more special."
            </p>

            <LuxuryDivider width="45%" />

            {/* Couple names */}
            <motion.div
              className="my-11"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h2
                className="font-script leading-tight text-glow"
                style={{
                  color: 'var(--color-text)',
                  fontSize: 'clamp(2.2rem, 7vw, 3.8rem)',
                  lineHeight: 1.15,
                }}
              >
                {BRIDE_NAME}
              </h2>

              <div
                className="my-3 flex items-center justify-center gap-4"
              >
                <div style={{ width: 36, height: '0.5px', background: 'var(--color-divider)' }} />
                <span
                  className="font-serif text-xl tracking-[0.2em]"
                  style={{ color: 'var(--color-accent)' }}
                >
                  &
                </span>
                <div style={{ width: 36, height: '0.5px', background: 'var(--color-divider)' }} />
              </div>

              <h2
                className="font-script leading-tight text-glow"
                style={{
                  color: 'var(--color-text)',
                  fontSize: 'clamp(2.2rem, 7vw, 3.8rem)',
                  lineHeight: 1.15,
                }}
              >
                {GROOM_NAME}
              </h2>
            </motion.div>

            {/* Date */}
            <motion.p
              className="font-serif tracking-[0.16em] mb-7"
              style={{ color: 'var(--color-text-secondary)', fontSize: 12.5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {WEDDING_DATE}
            </motion.p>

            <LuxuryDivider width="30%" variant="diamond" />

            {/* Pulsing heart */}
            <motion.div
              className="mt-12"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--color-pink)" opacity="0.65" className="mx-auto">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
