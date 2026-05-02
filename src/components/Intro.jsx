import React from 'react';
import '../App.css';
function Intro() {
  return (
    <section id="about" style={{ background: 'transparent', padding: '90px 40px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        {/* Left: Big text */}
        <div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px,7vw,90px)',
            fontWeight: 700, lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: -1,
            backgroundImage: 'linear-gradient(to right, #F3AC06 0%, #F3AC06 20%, #ffffff 50%, #F3AC06 80%, #F3AC06 100%)',
            backgroundSize: '200% 100%', backgroundPosition: '0% 0%',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'shimmer-flip 5s ease-in-out infinite',
          }}>
            SOLID<br />
            <span style={{ fontStyle: 'italic' }}>PERFUMES</span><br />
            FOR<br />
            <span style={{ whiteSpace: 'nowrap' }}>
              <span style={{ fontStyle: 'italic' }}>MODERN</span> PEOPLE
            </span>
          </h2>
          <p style={{ color: 'white', fontSize: 16, lineHeight: 1.8, marginTop: 28, maxWidth: 600, whiteSpace: 'nowrap' }}>
            Flexfume was created to keep your smells alive wherever<br />
            life takes you, from the desk or date to every adventure.
          </p>
        </div>
        {/* Right: Scattered boxes */}
        {/* Right: Scattered boxes target area */}
        <div style={{ position: 'relative', height: 420 }}>
          {/* Target positions are now visually filled by GlobalCards arriving from Hero */}
        </div>
      </div>
    </section>
  )
}

export default Intro;
