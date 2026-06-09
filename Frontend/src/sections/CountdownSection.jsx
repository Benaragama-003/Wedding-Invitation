import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/animations/ScrollReveal';
import LuxuryDivider from '../components/ui/LuxuryDivider';

/* ============================================
   COUNTDOWN SECTION

   Edit WEDDING_DATE_TARGET to set the countdown
   Format: 'YYYY-MM-DDTHH:MM:SS'
   ============================================ */
const WEDDING_DATE_TARGET = '2026-10-16T10:00:00'; // ← Edit this

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
          width: 72,
          height: 72,
          background: 'var(--color-card)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 4px 20px var(--color-shadow)',
        }}
        animate={{
          boxShadow: [
            '0 4px 20px var(--color-shadow)',
            '0 4px 24px var(--color-accent-glow)',
            '0 4px 20px var(--color-shadow)',
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
            style={{ color: 'var(--color-text)', fontSize: 26 }}
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
        className="font-body tracking-[0.2em] uppercase"
        style={{ color: 'var(--color-text-secondary)', fontSize: 9 }}
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
    <section id="countdown" className="section-pad relative">
      {/* Soft floral accent bottom-left — baby pink + sage */}
      <div className="absolute bottom-0 left-0 pointer-events-none overflow-hidden" style={{ width: 120, height: 120 }}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.14">
          <circle cx="20" cy="100" r="22" fill="#E8CFC8" />
          <circle cx="35" cy="85" r="16" fill="#C9918A" />
          <circle cx="15" cy="78" r="10" fill="#9CAF88" />
        </svg>
      </div>

      <div className="container-details relative z-10">
        <ScrollReveal animation="fade-in" duration={1}>
          {/* Small floral accent above title */}
          <div className="flex justify-center mb-3">
            <svg width="48" height="20" viewBox="0 0 48 20" fill="none" opacity="0.5">
              <circle cx="24" cy="10" r="3.5" fill="var(--color-floral-2)" />
              <circle cx="24" cy="10" r="1.8" fill="var(--color-accent)" opacity="0.6" />
              <path d="M 4 10 Q 10 4 18 8 Q 20 9 22 7" stroke="var(--color-floral-3)" strokeWidth="0.7" fill="none" />
              <path d="M 44 10 Q 38 4 30 8 Q 28 9 26 7" stroke="var(--color-floral-3)" strokeWidth="0.7" fill="none" />
              <circle cx="8" cy="9" r="1.5" fill="var(--color-floral-1)" opacity="0.6" />
              <circle cx="40" cy="9" r="1.5" fill="var(--color-floral-1)" opacity="0.6" />
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

        {/* Decorative ornament below */}
        <div className="flex justify-center mt-10">
          <svg width="100" height="24" viewBox="0 0 100 24" fill="none" opacity="0.35">
            <path d="M 5 12 Q 20 2 50 12 Q 80 22 95 12" stroke="var(--color-accent)" strokeWidth="0.8" fill="none" />
            <circle cx="25" cy="8" r="2" fill="var(--color-floral-2)" />
            <circle cx="50" cy="12" r="2.5" fill="var(--color-accent)" />
            <circle cx="75" cy="16" r="2" fill="var(--color-floral-2)" />
            <circle cx="25" cy="8" r="0.8" fill="var(--color-accent)" />
            <circle cx="75" cy="16" r="0.8" fill="var(--color-accent)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
