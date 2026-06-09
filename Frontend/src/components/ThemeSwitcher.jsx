import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
    >
      {/* Theme options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-14 right-0 glass-card rounded-2xl p-3 flex flex-col gap-2 min-w-[140px]"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {Object.entries(themes).map(([key, t]) => (
              <motion.button
                key={key}
                onClick={() => { setTheme(key); setIsOpen(false); }}
                className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 text-left font-body text-sm"
                style={{
                  backgroundColor: theme === key ? 'var(--color-accent-light)' : 'transparent',
                  color: 'var(--color-text)',
                }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
              >
                <span
                  className="w-5 h-5 rounded-full border-2 flex-shrink-0 shadow-sm"
                  style={{
                    backgroundColor: t.swatch,
                    borderColor: theme === key ? 'var(--color-text)' : 'transparent',
                  }}
                />
                <span className="font-medium">{t.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        style={{ border: '2px solid var(--color-accent)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change theme"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.95 16.95l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.95 7.05l1.42-1.42" />
          </svg>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
