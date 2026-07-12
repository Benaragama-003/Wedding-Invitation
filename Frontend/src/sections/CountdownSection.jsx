import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/animations/ScrollReveal';
import LuxuryDivider from '../components/ui/LuxuryDivider';

/* ============================================
   COUNTDOWN SECTION

   Edit WEDDING_DATE_TARGET to set the countdown
   Format: 'YYYY-MM-DDTHH:MM:SS'
   ============================================ */
const WEDDING_DATE_TARGET = '2026-09-16T10:00:00'; // ← Edit this

function getTimeRemaining(target) {
  const total = new Date(target) - new Date();
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

function CountdownCard({ value, label }) {
  return (
    <div className="text-center">
      {/* Card with shimmer border animation */}
      <motion.div
        className="relative rounded-2xl flex items-center justify-center mb-2.5 overflow-hidden"
        style={{
          width: 80,
          height: 80,
          background: 'var(--color-card)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 8px 32px var(--color-shadow)',
        }}
        animate={{
          boxShadow: [
            '0 8px 32px var(--color-shadow)',
            '0 8px 48px var(--color-accent-glow)',
            '0 8px 32px var(--color-shadow)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Shimmer border */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, transparent 30%, var(--color-gold-shimmer) 50%, transparent 70%)`,
            backgroundSize: '300% 300%',
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Border ring */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{ border: '1px solid var(--color-glass-border)' }}
        />
        {/* Number flip */}
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            className="font-display font-semibold relative z-10"
            style={{ color: 'var(--color-text)', fontSize: 32 }}
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <p
        className="font-body tracking-[0.2em] uppercase mt-2"
        style={{ color: 'var(--color-text-secondary)', fontSize: 10, fontWeight: 500 }}
      >
        {label}
      </p>

    </div>

  );
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeRemaining(WEDDING_DATE_TARGET));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining(WEDDING_DATE_TARGET));
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  return (
    <section id="countdown" className="section-pad relative"
      style={{ overflow: 'hidden' }}
    >
      {/* Soft copper accent bottom-left */}
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: 120, height: 120, overflow: 'visible' }}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.10">
          <circle cx="20" cy="100" r="22" fill="var(--color-accent)" />
          <circle cx="35" cy="85" r="16" fill="var(--color-accent)" />
          <circle cx="15" cy="78" r="10" fill="var(--color-accent)" />
        </svg>
      </div>

      <div className="container-details relative" style={{ zIndex: 2 }}>
        <ScrollReveal animation="fade-in" duration={1}>
          {/* Small accent above title */}
          <div className="flex justify-center mb-3">
            <svg width="48" height="20" viewBox="0 0 48 20" fill="none" opacity="0.6">
              <circle cx="24" cy="10" r="3.5" fill="var(--color-bg-alt)" stroke="var(--color-accent)" strokeWidth="0.5" />
              <circle cx="24" cy="10" r="1.5" fill="var(--color-accent)" />
              <path d="M 4 10 Q 10 4 18 8 Q 20 9 22 7" stroke="var(--color-accent)" strokeWidth="0.5" fill="none" />
              <path d="M 44 10 Q 38 4 30 8 Q 28 9 26 7" stroke="var(--color-accent)" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          <h2
            className="font-display text-center tracking-[0.1em] mb-1"
            style={{ color: 'var(--color-text)', fontSize: 22, fontWeight: 500 }}
          >
            Counting Down
          </h2>
          <p
            className="font-serif text-center italic mb-2"
            style={{ color: 'var(--color-text-secondary)', fontSize: 13 }}
          >
            to our special day
          </p>
          <LuxuryDivider width="35%" />
        </ScrollReveal>

        <ScrollReveal animation="reveal-scale" delay={0.2}>
          <div className="flex justify-center gap-5 mt-10">
            <CountdownCard value={time.days} label="Days" />
            <CountdownCard value={time.hours} label="Hours" />
            <CountdownCard value={time.minutes} label="Minutes" />
            <CountdownCard value={time.seconds} label="Seconds" />
          </div>
        </ScrollReveal>

        {/* Decorative ornament below countdown */}
        <div className="flex justify-center mt-10 mb-12">
          <svg width="100" height="24" viewBox="0 0 100 24" fill="none" opacity="0.4">
            <path d="M 5 12 Q 20 2 50 12 Q 80 22 95 12" stroke="var(--color-accent)" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="12" r="2.5" fill="var(--color-accent)" />
          </svg>
        </div>

        {/* ── Final Blessing ── */}
        <ScrollReveal animation="fade-up" delay={0.3}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '48px 0',
            }}
          >
            <p
              className="font-serif italic text-glow"
              style={{
                color: 'var(--color-text)',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                lineHeight: 2,
                maxWidth: 480,
                letterSpacing: '0.04em',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              "Thank you for being part of our love story.<br/><br/>
              Your presence will make our day even more special."
            </p>

            <div className="flex justify-center mt-8 mb-4">
              <LuxuryDivider width="45%" />
            </div>

            <motion.p
              className="font-serif tracking-[0.16em] mt-6"
              style={{ color: 'var(--color-text-secondary)', fontSize: 11 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              16.09.2026
            </motion.p>

            {/* Pulsing heart accent */}
            <motion.div
              className="flex justify-center mt-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.svg
                width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent)"
                opacity="0.6"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </motion.svg>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
