import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './components/ui/NavBar';
import FloatingParticles from './components/animations/FloatingParticles';
import LoadingScreen from './sections/LoadingScreen';
import HeroSection from './sections/HeroSection';
import CoupleSection from './sections/CoupleSection';
import TimelineSection from './sections/TimelineSection';
import LocationSection from './sections/LocationSection';
import GallerySection from './sections/GallerySection';
import CountdownSection from './sections/CountdownSection';
import FinalBlessingSection from './sections/FinalBlessingSection';

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
    }, 2000); // 2 second cinematic transition duration
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* ── Transparent NavBar (hero-only) ── */}
          <NavBar />

          {/* ── Ambient background layers (over all sections) ── */}
          <FloatingParticles petalCount={12} wheatCount={0} glowCount={0} dustCount={0} />

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
            <LocationSection />
            <GallerySection />
            <CountdownSection />
            <FinalBlessingSection />
          </main>
        </motion.div>
      )}
    </>
  );
}

export default App;
