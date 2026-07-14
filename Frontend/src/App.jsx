import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './components/ui/NavBar';
import FloatingParticles from './components/animations/FloatingParticles';
import LoadingScreen from './sections/LoadingScreen';
import HeroSection from './sections/HeroSection';
import CoupleSection from './sections/CoupleSection';
import TimelineSection from './sections/TimelineSection';
import GallerySection from './sections/GallerySection';
import CountdownSection from './sections/CountdownSection';
import RSVPSection from './sections/RSVPSection';

/* ============================================
   MAIN APP — Premium Cinematic Wedding Invitation

   Flow:
   1. Landing page (LoadingScreen) — full-screen
   2. On open → Cinematic black-hole transition
   3. Main Invitation reveal

   Sections:
   1. Hero
   2. Couple / Story
   3. Event Timeline
   4. Venue & Location
   5. Gallery
   6. RSVP
   7. Closing
   ============================================ */
function App() {
  const [phase, setPhase] = useState('landing'); // 'landing' | 'transition' | 'main'

  // Triggered by the "Open Invitation" button in LoadingScreen
  const handleOpen = () => {
    setPhase('transition');
    // The transition animation runs inside LoadingScreen.
    // We wait for it to complete before revealing the main app.
    setTimeout(() => {
      setPhase('main');
    }, 1400); // match the 1.4s Framer Motion transition exactly
  };

  return (
    <>
      {/* ── Landing Page & Transition ── */}
      <AnimatePresence>
        {(phase === 'landing' || phase === 'transition') && (
          <LoadingScreen phase={phase} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {/* ── Main Invitation (visible after transition) ── */}
      {phase === 'main' && (
        <motion.div
          className="relative"
          style={{ backgroundColor: 'var(--color-bg)' }}
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ── Transparent NavBar (hero-only) ── */}
          <NavBar />



          {/* ── Soft ambient shimmer ── */}
          <motion.div
            className="fixed inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse at 20% 15%, rgba(183,110,121,0.07) 0%, transparent 52%),
                radial-gradient(ellipse at 78% 85%, rgba(156,175,136,0.06) 0%, transparent 52%)
              `,
              zIndex: 1,
            }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* ── Invitation sections ── */}
          <main className="relative" style={{ zIndex: 10 }}>
            <HeroSection />
            <CoupleSection />
            <TimelineSection />
            <RSVPSection />
            <GallerySection />
            <CountdownSection />
          </main>
        </motion.div>
      )}
      
      {/* ── Ambient background layers (over all sections) ── */}
      {phase === 'main' && (
        <FloatingParticles petalCount={16} wheatCount={0} glowCount={0} dustCount={0} />
      )}
    </>
  );
}

export default App;
