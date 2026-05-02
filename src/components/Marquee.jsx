import React from 'react';
import '../App.css';
const MARQUEE_ITEMS = ['SOLID PERFUME ✦', 'LONG LASTING ✦', 'TRAVEL FRIENDLY ✦', 'MADE IN BANGLADESH ✦', 'ALCOHOL FREE ✦', 'LUXURY FRAGRANCE ✦']
function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div style={{
      background: '#000', borderTop: '1px solid rgba(139,0,48,.35)', borderBottom: '1px solid rgba(139,0,48,.35)',
      padding: '14px 0', overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 18s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'Inter', fontSize: 13, fontWeight: 700, letterSpacing: 3,
            textTransform: 'uppercase', color: i % 2 === 0 ? 'rgba(255,255,255,0.13)' : 'rgba(192,0,70,.5)',
            padding: '0 36px', whiteSpace: 'nowrap',
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee;
