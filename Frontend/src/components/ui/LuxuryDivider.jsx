import React from 'react';

/* ============================================
   LUXURY DIVIDER — Premium Ornamental
   Hairline thin with ornate center flourish,
   gold shimmer animation on the line.
   Variants: 'ornate' (default) | 'simple' | 'diamond'
   ============================================ */
export default function LuxuryDivider({ className = '', variant = 'ornate', width = '60%' }) {
  return (
    <div
      className={`flex items-center justify-center my-6 ${className}`}
      style={{ width, margin: '1.5rem auto' }}
    >
      {/* Left line — hairline with gold shimmer */}
      <div
        className="flex-1"
        style={{
          height: '0.5px',
          background: `linear-gradient(90deg, transparent 0%, var(--color-divider) 20%, var(--color-accent) 50%, var(--color-divider) 80%, transparent 100%)`,
          backgroundSize: '300% 100%',
          animation: 'goldShimmer 6s ease-in-out infinite',
        }}
      />

      {/* Center ornament */}
      <div className="mx-3 flex-shrink-0">
        {variant === 'ornate' && (
          <svg width="36" height="16" viewBox="0 0 36 16" fill="none">
            {/* Left tendril */}
            <path
              d="M 0 8 Q 4 3 8 6 Q 10 7 12 5 Q 14 3 16 6"
              stroke="var(--color-accent)"
              strokeWidth="0.6"
              fill="none"
              opacity="0.5"
            />
            {/* Right tendril */}
            <path
              d="M 36 8 Q 32 3 28 6 Q 26 7 24 5 Q 22 3 20 6"
              stroke="var(--color-accent)"
              strokeWidth="0.6"
              fill="none"
              opacity="0.5"
            />
            {/* Center diamond */}
            <path
              d="M 18 2 L 22 8 L 18 14 L 14 8 Z"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="0.6"
              opacity="0.55"
            />
            {/* Inner diamond */}
            <path
              d="M 18 4.5 L 20 8 L 18 11.5 L 16 8 Z"
              fill="var(--color-accent)"
              opacity="0.2"
            />
            {/* Center dot */}
            <circle cx="18" cy="8" r="1.2" fill="var(--color-accent)" opacity="0.45" />
          </svg>
        )}

        {variant === 'simple' && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="2" fill="var(--color-accent)" opacity="0.35" />
            <circle cx="6" cy="6" r="1" fill="var(--color-accent)" opacity="0.5" />
          </svg>
        )}

        {variant === 'diamond' && (
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path
              d="M 10 1 L 14 7 L 10 13 L 6 7 Z"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="0.7"
              opacity="0.5"
            />
            <circle cx="10" cy="7" r="1.5" fill="var(--color-accent)" opacity="0.3" />
          </svg>
        )}
      </div>

      {/* Right line — hairline with gold shimmer */}
      <div
        className="flex-1"
        style={{
          height: '0.5px',
          background: `linear-gradient(90deg, transparent 0%, var(--color-divider) 20%, var(--color-accent) 50%, var(--color-divider) 80%, transparent 100%)`,
          backgroundSize: '300% 100%',
          animation: 'goldShimmer 6s ease-in-out infinite',
          animationDelay: '-3s',
        }}
      />
    </div>
  );
}
