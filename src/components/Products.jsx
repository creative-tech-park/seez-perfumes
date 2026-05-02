import React, { useState } from 'react';
import '../App.css';

const PRODUCTS = [
  { name: 'Beast', price: '৳ 1,100', old: '৳ 1,490', discount: '26% OFF', color: '#F3AC06', bg: '#4d3900', blob: '#6e5100', blobInner: '#8f6a00' },
  { name: 'Noir', price: '৳ 1,050', old: '৳ 1,400', discount: '25% OFF', color: '#555', bg: '#1a1a1a', blob: '#2a2a2a', blobInner: '#333' },
  { name: 'Bloom', price: '৳ 980', old: '৳ 1,300', discount: '25% OFF', color: '#ff4d7d', bg: '#4d001a', blob: '#6e0025', blobInner: '#8f0030' },
  { name: 'Beauty', price: '৳ 999', old: '৳ 1,490', discount: '33% OFF', color: '#b380ff', bg: '#2b1a4d', blob: '#3d256e', blobInner: '#52338f' },
  { name: 'Emerald', price: '৳ 1,150', old: '৳ 1,550', discount: '26% OFF', color: '#10b981', bg: '#064e3b', blob: '#065f46', blobInner: '#047857' },
  { name: 'Ocean', price: '৳ 1,200', old: '৳ 1,600', discount: '25% OFF', color: '#0ea5e9', bg: '#0c4a6e', blob: '#075985', blobInner: '#0369a1' },
  { name: 'Sunset', price: '৳ 1,080', old: '৳ 1,450', discount: '25% OFF', color: '#f97316', bg: '#7c2d12', blob: '#9a3412', blobInner: '#c2410c' },
];

export default function Products() {
  const [idx, setIdx] = useState(0);
  const [isSpinningFast, setIsSpinningFast] = useState(false);

  const triggerChange = (newIdx) => {
    setIsSpinningFast(true);
    // Short delay before updating content to sync with fast spin
    setTimeout(() => {
      setIdx(newIdx);
    }, 150);
    // Reset spin speed after a full rotation burst
    setTimeout(() => {
      setIsSpinningFast(false);
    }, 800);
  };

  const nextProduct = () => {
    triggerChange((idx + 1) % PRODUCTS.length);
  };

  const prevProduct = () => {
    triggerChange((idx - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const current = PRODUCTS[idx];

  return (
    <section id="products" style={{ background: current.bg, padding: '40px 20px 20px', position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', transition: 'background 0.8s ease' }}>
      
      <style>{`
        @keyframes spin-3d {
          from { transform: perspective(1500px) rotateX(0deg) rotateY(0deg); }
          to { transform: perspective(1500px) rotateX(0deg) rotateY(360deg); }
        }
        @keyframes spin-blob {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-blob-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
      `}</style>

      <h2 style={{
        fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px,5vw,60px)',
        fontWeight: 700, color: 'white', textAlign: 'center', marginBottom: 20, zIndex: 10, position: 'relative'
      }}>Choose your Perfume</h2>

      <div style={{ position: 'relative', width: '100%', maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        {/* Outer Wavy Blob */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1165 1166" style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          height: '140%', minHeight: 700, pointerEvents: 'none', zIndex: 0,
          animation: 'spin-blob 35s linear infinite',
          transition: 'fill 0.8s ease'
        }}>
          <path fill={current.blob} d="M1133.5 619c-5 76.2-84.8 126.7-113.5 183.3-28.7 56.6-20.8 149-74 195.6-53 46.6-143.6 26.9-203.4 48-59.9 21.2-120.2 93.8-196.5 88.9-76.2-5-126.6-86.2-183.2-113.5-56.6-28.7-149-20.8-195.6-74-46.7-53-26.9-143.6-46.7-203.4-19.8-59.7-93.7-121.5-88.8-196.4 4.8-74.8 84.8-128 113.6-184.6 28.7-56.6 19.4-149 72.5-195.7 53.1-46.7 143.7-26.9 203.4-46.7C481 100.8 543 26.8 619.1 31.8c76.2 5 126.7 84.7 183.3 113.5 56.6 28.7 149 19.4 195.7 72.5 46.6 53.1 26.8 143.7 48 203.5 19.8 59.7 92.3 121.5 87.4 197.7z" opacity="1" style={{ transition: 'fill 0.8s ease' }}></path>
        </svg>

        {/* Inner Wavy Blob */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1165 1166" style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          height: '110%', minHeight: 500, pointerEvents: 'none', zIndex: 0,
          animation: 'spin-blob-reverse 25s linear infinite',
          transition: 'fill 0.8s ease'
        }}>
          <path fill={current.blobInner} d="M827.9 672.6c-12.4 34-55.3 46.3-75.9 68.2-20.5 22-29.2 64.9-59.5 79-30.3 14.2-68.8-6.8-98.7-5.1-30 1.6-67 26.6-101 14.2-33.9-12.3-46-55.9-68-75.8-22-20.5-65-29.2-79-59.5-14.1-30.3 6.9-68.8 5.8-98.6-1-29.7-26.4-67.6-14.2-101 12.1-33.3 55.5-46.9 76-68.8 20.6-21.8 28.6-65 59-79.2 30.2-14.1 68.7 6.9 98.4 5.8 29.8-1 67.7-26.4 101.6-14 34 12.3 46.2 55.2 68.1 75.8 21.9 20.5 65 28.6 79.2 58.9 14.1 30.3-6.9 68.8-5.2 98.8 1 29.7 25.7 67.4 13.4 101.3z" opacity="1" style={{ transition: 'fill 0.8s ease' }}></path>
        </svg>

        <div style={{ width: '100%', zIndex: 2, padding: '10px 0', position: 'relative' }}>
          
          {/* SINGLE 3D ROTATING BOX */}
          <div style={{
            width: 220, height: 380,
            position: 'relative',
            transformStyle: 'preserve-3d',
            animation: `spin-3d ${isSpinningFast ? '0.3s' : '12s'} linear infinite`,
            margin: '0 auto',
            transition: 'animation-duration 0.2s ease'
          }}>
            {/* Front Face */}
            <div style={{
              position: 'absolute', top: 0, left: '50%', marginLeft: -110,
              width: 220, height: 380,
              background: `linear-gradient(180deg, ${current.color} 0%, rgba(0,0,0,0.2) 100%)`,
              backgroundColor: current.color,
              transform: 'translateZ(30px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
              padding: 15, border: '1px solid rgba(255,255,255,0.1)',
              transition: 'background 0.8s ease, background-color 0.8s ease'
            }}>
              <div style={{ position: 'absolute', top: 20, width: 80, height: 80, background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', top: '15%', left: 0, width: '100%', height: '40%', background: 'rgba(0,0,0,0.05)', borderRadius: '50%' }} />
              
              <div style={{ position: 'absolute', top: 25, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="35" stroke="rgba(255,255,255,0.6)" strokeWidth="4" fill="none" />
                  <path d="M28 28 C28 20 40 16 40 28 C40 36 52 40 52 52 C52 60 40 64 40 52 C40 44 28 40 28 28Z" stroke="rgba(255,255,255,0.6)" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M52 28 C52 20 40 16 40 28 C40 36 28 40 28 52 C28 60 40 64 40 52 C40 44 52 40 52 28Z" stroke="rgba(255,255,255,0.6)" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
                <span style={{ fontSize: 9, color: 'white', marginTop: 5, fontWeight: 700, letterSpacing: 1.5 }}>FLEXFUME</span>
              </div>

              <div style={{
                width: 40, height: 40, borderRadius: '50%', border: '2.5px solid white',
                background: 'rgba(255,255,255,0.2)', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <div style={{ width: 18, height: 18, background: 'white', borderRadius: '50%' }} />
              </div>
              <div style={{ fontSize: 9, color: 'white', fontWeight: 600, letterSpacing: 2, marginBottom: 20 }}>CERTIFIED</div>
            </div>

            {/* Back Face */}
            <div style={{
              position: 'absolute', top: 0, left: '50%', marginLeft: -110,
              width: 220, height: 380,
              background: current.color,
              transform: 'rotateY(180deg) translateZ(30px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
              padding: 15, border: '1px solid rgba(255,255,255,0.1)',
              transition: 'background 0.8s ease'
            }}>
              <div style={{ fontSize: 10, color: 'white', fontWeight: 600, letterSpacing: 2.5, marginTop: 25 }}>SOLID PERFUME</div>
            </div>

            {/* Right Side Face */}
            <div style={{
              position: 'absolute', top: 0, left: '50%', marginLeft: -30,
              width: 60, height: 380,
              background: current.color,
              filter: 'brightness(0.8)',
              transform: 'rotateY(90deg) translateZ(110px)',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.5)',
              transition: 'background 0.8s ease'
            }}></div>

            {/* Left Side Face */}
            <div style={{
              position: 'absolute', top: 0, left: '50%', marginLeft: -30,
              width: 60, height: 380,
              background: current.color,
              filter: 'brightness(0.8)',
              transform: 'rotateY(-90deg) translateZ(110px)',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.5)',
              transition: 'background 0.8s ease'
            }}></div>

            {/* Top Face */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', marginLeft: -110, marginTop: -30,
              width: 220, height: 60,
              background: current.color,
              filter: 'brightness(1.1)',
              transform: 'rotateX(90deg) translateZ(190px)',
              transition: 'background 0.8s ease'
            }}></div>

            {/* Bottom Face */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', marginLeft: -110, marginTop: -30,
              width: 220, height: 60,
              background: current.color,
              filter: 'brightness(0.6)',
              transform: 'rotateX(-90deg) translateZ(190px)',
              transition: 'background 0.8s ease'
            }}></div>
          </div>
          
          {/* Navigation Arrows */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', maxWidth: 700, transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'space-between', zIndex: 10, pointerEvents: 'none', padding: '0 20px' }}>
             <button onClick={prevProduct} style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.8)', color: 'white',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'auto', transition: 'all 0.3s',
             }} onMouseEnter={e => {
               e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
               e.currentTarget.style.borderColor = 'white';
             }} onMouseLeave={e => {
               e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
               e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
             }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
             </button>
             <button onClick={nextProduct} style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.8)', color: 'white',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'auto', transition: 'all 0.3s',
             }} onMouseEnter={e => {
               e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
               e.currentTarget.style.borderColor = 'white';
             }} onMouseLeave={e => {
               e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
               e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
             }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
             </button>
          </div>
        </div>

        {/* Text and buttons at the bottom */}
        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', marginTop: 20 }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 48, fontWeight: 700, color: 'white', marginBottom: 10 }}>
            {current.name}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 15, marginBottom: 20 }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: 'white' }}>{current.price}</span>
            <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}>{current.old}</span>
            <span style={{ background: 'white', color: 'black', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 50 }}>{current.discount}</span>
          </div>
          
          <div style={{ display: 'flex', gap: 15, justifyContent: 'center', marginTop: 15 }}>
            <button style={{
              padding: '12px 30px', borderRadius: 50, border: 'none',
              background: 'white', color: 'black', fontSize: 15, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'Inter', transition: 'all .3s'
            }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>View Details</button>
            <button style={{
              padding: '12px 30px', borderRadius: 50, border: '1px solid white',
              background: 'transparent', color: 'white', fontSize: 15, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'Inter', transition: 'all .3s'
            }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>Buy now</button>
          </div>
        </div>

      </div>
    </section>
  );
}
