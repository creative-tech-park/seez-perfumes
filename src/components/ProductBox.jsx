import React from 'react';
import '../App.css';
function ProductBox({ side = 'left' }) {
  const isLeft = side === 'left'
  return (
    <div style={{
      width: 240,
      height: 380,
      position: 'relative',
      animation: isLeft ? 'float-box 3.5s ease-in-out infinite' : 'float-box-r 4s ease-in-out infinite',
      flexShrink: 0,
    }}>
      {/* Red glow behind box */}
      <div style={{
        position: 'absolute', inset: -20,
        background: 'radial-gradient(ellipse at center, rgba(243,172,6,0.35) 0%, transparent 70%)',
        borderRadius: 20,
        filter: 'blur(18px)',
      }} />
      {/* Main box */}
      <div style={{
        width: '100%', height: '100%',
        background: 'linear-gradient(160deg, #F3AC06 0%, #d69804 35%, #c48a00 65%, #8f6400 100%)',
        borderRadius: 14,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(243,172,6,0.6), inset 0 1px 0 rgba(255,255,255,0.12)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: 20,
      }}>
        {/* Inner decorative - knight/face silhouette area */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(ellipse 70% 80% at 50% 35%, rgba(243,172,6,0.4) 0%, transparent 70%)`,
        }} />
        {/* Large abstract human/knight shape */}
        <div style={{
          position: 'absolute',
          top: '8%', left: '15%',
          width: '70%', height: '65%',
          background: 'rgba(243,172,6,0.45)',
          borderRadius: '50% 50% 45% 45% / 40% 40% 60% 60%',
          filter: 'blur(2px)',
        }} />
        <div style={{
          position: 'absolute',
          top: '28%', left: '25%',
          width: '50%', height: '50%',
          background: 'rgba(243,172,6,0.3)',
          borderRadius: '50%',
          filter: 'blur(4px)',
        }} />
        {/* Flexfume logo top right */}
        <div style={{
          position: 'absolute', top: 14, right: 14,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
        }}>
          <svg width="18" height="18" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="35" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none" />
            <path d="M28 28 C28 20 40 16 40 28 C40 36 52 40 52 52 C52 60 40 64 40 52 C40 44 28 40 28 28Z" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M52 28 C52 20 40 16 40 28 C40 36 28 40 28 52 C28 60 40 64 40 52 C40 44 52 40 52 28Z" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.45)', letterSpacing: 1, fontFamily: 'Inter' }}>Flexfume</span>
        </div>
        {/* Bottom content */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ fontSize: 42, fontWeight: 900, color: 'white', letterSpacing: -1.5, textTransform: 'uppercase', fontFamily: 'Inter', lineHeight: 1 }}>BEAST</div>
          <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: 5, fontFamily: 'Inter' }}>SOLID PERFUME</div>
          <div style={{ width: 50, height: 2.5, background: 'white', borderRadius: 2, marginTop: 8 }} />
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', marginTop: 6, fontFamily: 'Inter' }}>60g</div>
        </div>
      </div>
    </div>
  )
}

export default ProductBox;
