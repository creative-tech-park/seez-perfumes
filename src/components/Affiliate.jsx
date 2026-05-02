import React from 'react';

const PERKS = [
  {
    title: 'Exclusive Benefits',
    desc: 'Get special perks and early access to new products',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F3AC06" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    bg: 'linear-gradient(180deg, #2b1f00 0%, #000 100%)',
    border: '1.5px solid #F3AC06'
  },
  {
    title: 'Generous Commission',
    desc: 'Earn competitive rates on every sale you drive',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F3AC06" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    bg: 'linear-gradient(180deg, #2b1f00 0%, #000 100%)',
    border: '1.5px solid #F3AC06'
  },
  {
    title: 'Marketing Support',
    desc: 'Access professional content and promotional materials',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F3AC06" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
    ),
    bg: 'linear-gradient(180deg, #2b1f00 0%, #000 100%)',
    border: '1.5px solid #F3AC06'
  }
];

export default function Affiliate() {
  return (
    <section style={{ background: '#000', padding: '0 20px 40px 20px', textAlign: 'center' }}>
      <div style={{ position: 'relative', textAlign: 'center', marginBottom: 60 }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20
        }}>
          <span style={{ color: '#F3AC06' }}>✦</span>
          Join Our Affiliate Program
          <span style={{ color: '#F3AC06' }}>✦</span>
        </h2>
        <div style={{ width: 100, height: 2, background: 'linear-gradient(90deg, transparent, #F3AC06, transparent)', margin: '15px auto' }} />
        <p style={{
          maxWidth: 700,
          margin: '20px auto 0 auto',
          fontSize: 'clamp(15px, 1.8vw, 17px)',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.7)',
          fontWeight: 500
        }}>
          Are you an influencer who loves FlexFume? Partner with us and share the fragrance revolution with your audience!
        </p>
      </div>

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 30
      }}>
        {PERKS.map((perk, idx) => (
          <div key={idx} style={{
            background: perk.bg,
            borderRadius: 24,
            padding: '45px 30px',
            color: 'white',
            border: perk.border,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'all 0.4s ease',
            cursor: 'pointer',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }} onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.borderColor = '#F3AC06';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(243, 172, 6, 0.1)';
          }} onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(243, 172, 6, 0.2)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              width: 65, height: 65, borderRadius: '50%', background: 'rgba(243, 172, 6, 0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 25,
              border: '1px solid rgba(243, 172, 6, 0.2)'
            }}>
              {perk.icon}
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: '#F3AC06' }}>{perk.title}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              {perk.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
