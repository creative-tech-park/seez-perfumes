import React from 'react';
import '../App.css';
function StickyButtons() {
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 22, zIndex: 999, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer" style={{
        width: 52, height: 52, borderRadius: '50%', background: '#25D366',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 24, boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        cursor: 'pointer', textDecoration: 'none', transition: 'transform .3s'
      }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
        💬
      </a>
      <div style={{
        width: 52, height: 52, borderRadius: '50%', background: '#F3AC06',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22, boxShadow: '0 4px 20px rgba(243,172,6,0.5)',
        cursor: 'pointer', transition: 'transform .3s'
      }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
        🛒
      </div>
    </div>
  )
}

export default StickyButtons;
