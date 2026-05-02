import React from 'react';

export default function CTASection() {
  return (
    <section style={{ background: '#000', padding: '40px 20px 60px 20px', textAlign: 'center' }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        background: 'linear-gradient(135deg, #F3AC06 0%, #ffc133 100%)',
        borderRadius: 32,
        padding: '40px 40px',
        boxShadow: '0 20px 50px rgba(243, 172, 6, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            color: 'black',
            marginBottom: 20
          }}>
            Join Our Fragrance Journey
          </h2>
          <p style={{
            maxWidth: 700,
            margin: '0 auto 40px auto',
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: 1.6,
            color: 'rgba(0,0,0,0.8)',
            fontWeight: 600
          }}>
            Discover authentic solid perfumes that enhance your style and confidence.
            Experience the difference of premium quality and exceptional service.
          </p>
          <button style={{
            background: 'black',
            color: '#F3AC06',
            border: 'none',
            padding: '16px 40px',
            borderRadius: 50,
            fontSize: 18,
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
          }} onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
          }} onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
          }}>
            View All Collections
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
