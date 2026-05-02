import React from 'react';
import '../App.css';
const PARTICLE_COUNT = 85
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const size = 4 + Math.random() * 14
  const duration = 6 + Math.random() * 4
  const delay = -Math.random() * duration
  const left = Math.random() * 100
  const rotate = Math.random() * 360
  const opacity = 0.4 + Math.random() * 0.4
  return { id: i, size, duration, delay, left, rotate, opacity }
})

function Particles() {
  return (
    <>
      {PARTICLES.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          width: p.size, height: p.size,
          top: '105%', // Start below screen
          left: `${p.left}%`,
          background: '#F3AC06',
          opacity: p.opacity,
          borderRadius: 4,
          animation: `particle-drift ${p.duration}s ${p.delay}s linear infinite`,
          '--r': `${p.rotate}deg`,
          pointerEvents: 'none',
          zIndex: 1,
        }} />
      ))}
    </>
  )
}

export default Particles;
