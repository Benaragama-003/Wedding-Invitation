import React from 'react';
import ScrollReveal from '../components/animations/ScrollReveal';

/* ============================================
   WEDDING DETAILS SECTION

   Edit DETAILS array items to customize.
   Icons use sage green; cards use ivory.
   ============================================ */

/* SVG icons in sage green */
const calendarIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#9CAF88" strokeWidth="1.5" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="#9CAF88" strokeWidth="1.5" />
    <line x1="8"  y1="2" x2="8"  y2="6" stroke="#9CAF88" strokeWidth="1.5" />
    <line x1="3"  y1="10" x2="21" y2="10" stroke="#9CAF88" strokeWidth="1.5" />
  </svg>
);
const clockIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" stroke="#9CAF88" strokeWidth="1.5" />
    <polyline points="12 6 12 12 16 14" stroke="#9CAF88" strokeWidth="1.5" />
  </svg>
);
const locationIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#9CAF88" strokeWidth="1.5" />
    <circle cx="12" cy="10" r="3" stroke="#9CAF88" strokeWidth="1.5" />
  </svg>
);
const homeIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#9CAF88" strokeWidth="1.5" />
    <polyline points="9 22 9 12 15 12 15 22" stroke="#9CAF88" strokeWidth="1.5" />
  </svg>
);
const heartIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      stroke="#B76E79" strokeWidth="1.5" />
  </svg>
);

const DETAILS = [
  { icon: calendarIcon, label: 'Date',      value: 'Wedding Date'       },
  { icon: clockIcon,    label: 'Time',      value: 'Wedding Time'       },
  { icon: locationIcon, label: 'Venue',     value: 'Venue Name'         },
  { icon: homeIcon,     label: 'Address',   value: 'Venue Address'      },
  { icon: heartIcon,    label: 'Dress Code',value: 'Formal / Semi-formal'},
];

export default function WeddingDetails() {
  return (
    <section id="wedding-details" className="section-pad relative">
      <div className="container-details relative z-10">
        {/* ── Heading ── */}
        <ScrollReveal animation="fade-in" duration={1}>
          <h2
            className="font-serif text-center mb-4"
            style={{ color: 'var(--color-text)', fontSize: 26, fontWeight: 500, letterSpacing: '0.04em' }}
          >
            Wedding Details
          </h2>
          {/* Small ornament matching Timeline and Location */}
          <div className="flex justify-center mb-10">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M0 6 L16 6 L20 2 L24 6 L40 6" stroke="rgba(183,110,121,0.5)" strokeWidth="0.8" fill="none" />
              <circle cx="20" cy="6" r="1.5" fill="rgba(183,110,121,0.7)" />
            </svg>
          </div>
        </ScrollReveal>

        {/* ── Detail cards ── */}
        <div className="mx-auto" style={{ maxWidth: 640 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {DETAILS.map((detail, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 0.09}>
                <div
                  className="flex items-center gap-6 rounded-xl"
                  style={{
                    padding: '20px 24px',
                    background: 'rgba(255,253,248,0.95)',
                    border: '1px solid rgba(183,110,121,0.15)',
                    boxShadow: '-4px 6px 20px rgba(183,110,121,0.06), 0 1px 3px rgba(0,0,0,0.02)',
                  }}
                >
                  {/* Icon circle — sage bg */}
                  <div
                    className="flex-shrink-0 rounded-full flex items-center justify-center"
                    style={{
                      width: 48, height: 48,
                      background: 'rgba(156,175,136,0.15)',
                      border: '1px solid rgba(156,175,136,0.4)',
                    }}
                  >
                    {detail.icon}
                  </div>

                  <div>
                    <p
                      className="font-body tracking-[0.2em] uppercase mb-1"
                      style={{ color: 'rgba(95,122,90,0.8)', fontSize: 10, fontWeight: 500 }}
                    >
                      {detail.label}
                    </p>
                    <p
                      className="font-serif"
                      style={{ color: 'var(--color-text)', fontSize: 18 }}
                    >
                      {detail.value}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
