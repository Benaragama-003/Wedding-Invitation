import React, { useState, useRef, useEffect, useCallback } from 'react';
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

const MUSIC_SRC = '/Memory - Daywind Studio Musicians.mp3';
const MUSIC_VOLUME = 0.7;
// How many seconds before the end to start the crossfade restart
const CROSSFADE_WINDOW = 2;

function App() {
  const [phase, setPhase] = useState('landing'); // 'landing' | 'transition' | 'main'
  const audioRef = useRef(null);
  const fadingRef = useRef(false);

  // ── Preload the audio on mount so there's zero delay when we play ──
  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.preload = 'auto';
    audio.loop = false;       // we handle looping manually for gapless playback
    audio.volume = MUSIC_VOLUME;
    audioRef.current = audio;

    return () => {
      // Cleanup on unmount
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
    };
  }, []);

  // ── Seamless crossfade loop handler ──
  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || fadingRef.current) return;

    const remaining = audio.duration - audio.currentTime;
    if (remaining <= CROSSFADE_WINDOW && audio.duration > 0) {
      fadingRef.current = true;

      // Fade out over the remaining time, then restart instantly
      const fadeSteps = 30;
      const fadeInterval = (remaining * 1000) / fadeSteps;
      const volumeStep = audio.volume / fadeSteps;
      let step = 0;

      const fadeTimer = setInterval(() => {
        step++;
        audio.volume = Math.max(0, MUSIC_VOLUME - volumeStep * step);

        if (step >= fadeSteps) {
          clearInterval(fadeTimer);
          // Restart from the beginning instantly
          audio.currentTime = 0;
          audio.volume = MUSIC_VOLUME;
          fadingRef.current = false;
        }
      }, fadeInterval);
    }
  }, []);

  // Triggered by the "Open Invitation" button in LoadingScreen
  const handleOpen = () => {
    setPhase('transition');

    // Start background music as soon as the invitation opens
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = MUSIC_VOLUME;
      audio.addEventListener('timeupdate', handleTimeUpdate);
      // Also handle the 'ended' event as a safety net for gapless restart
      audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.volume = MUSIC_VOLUME;
        fadingRef.current = false;
        audio.play().catch(() => {});
      });
      audio.play().catch(() => {
        // Browsers may block autoplay; this is triggered by user click so it should work
      });
    }

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
