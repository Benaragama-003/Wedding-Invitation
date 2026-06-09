import React from 'react';

/* ============================================
   GLASSMORPHISM CARD
   Semi-transparent card with backdrop blur
   ============================================ */
export default function GlassmorphismCard({ children, className = '', style = {} }) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 theme-transition ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
