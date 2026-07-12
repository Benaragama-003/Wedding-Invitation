import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ============================================
   SCROLL REVEAL — Cinematic Entrance Animations
   Slower, more dramatic transitions with
   blur-to-sharp and stagger support.
   ============================================ */

const variants = {
  'fade-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  'scale-in': {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  'reveal-up': {
    hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  'reveal-scale': {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(4px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
};

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 1.0,
  threshold = 0.15,
  className = '',
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const selectedVariant = variants[animation] || variants['fade-up'];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedVariant}
      transition={{
        duration: duration * 1.2, // Slightly longer for cinematic feel
        delay,
        type: 'spring',
        bounce: 0.15,
        stiffness: 80,
        damping: 20,
        restDelta: 0.001
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
