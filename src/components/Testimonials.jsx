import React, { useState } from 'react';

const REVIEWS = [
  {
    id: 1,
    name: 'Rafayet Rakib',
    role: 'Entrepreneur | Content creator',
    org: 'Founder, Digital Dropouts',
    text: '“Smells are good & it last longer also will rate avg 8/10.”',
    img: 'https://i.pravatar.cc/150?u=rafayet',
  },
  {
    id: 2,
    name: 'Sazzad Ahsan',
    role: 'Entrepreneur | Marketing expert',
    org: 'CEO, Brandmark Consultancy Ltd.',
    text: '“No complain about perfumes also it will sustain longer.”',
    img: 'https://i.pravatar.cc/150?u=sazzad',
  },
  {
    id: 3,
    name: 'Ayman Sadiq',
    role: 'Educator | Entrepreneur | Public speaker',
    org: 'Founder, 10 Minute School',
    text: '“This is not a regular perfume , this is a new thing.”',
    img: 'https://i.pravatar.cc/150?u=ayman',
  },
  {
    id: 4,
    name: 'Khalid Farhan',
    role: 'Entrepreneur | Digital marketer',
    org: 'Founder, Passive Journal',
    text: '“The scent is average 7.5/10 & performance are good.”',
    img: 'https://i.pravatar.cc/150?u=khalid',
  },
  {
    id: 5,
    name: 'Tahsan Khan',
    role: 'Singer | Actor | Educator',
    org: 'Brand Ambassador',
    text: '“Unique solid perfumes with a very distinct and refreshing aura.”',
    img: 'https://i.pravatar.cc/150?u=tahsan',
  },
  {
    id: 6,
    name: 'Enayet Chowdhury',
    role: 'Content Creator | Educator',
    org: 'Co-founder, Tritiyo Matra',
    text: '“The portability is a game changer for me. Smells premium.”',
    img: 'https://i.pravatar.cc/150?u=enayet',
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(1); // Start with second card active for better initial balance

  const next = () => setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section style={{ 
      background: '#000', 
      padding: '60px 20px', 
      position: 'relative', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      perspective: '1500px'
    }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '100%', height: '100%', pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 50%, rgba(243, 172, 6, 0.05) 0%, transparent 70%)'
      }} />

      <div style={{ position: 'relative', textAlign: 'center', marginBottom: 30, zIndex: 2 }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 6vw, 52px)',
          fontWeight: 700,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          textShadow: '0 0 20px rgba(243, 172, 6, 0.2)'
        }}>
          <span style={{ color: '#F3AC06' }}>✦</span>
          What Our Customers Say
          <span style={{ color: '#F3AC06' }}>✦</span>
        </h2>
        <div style={{ width: 100, height: 2, background: 'linear-gradient(90deg, transparent, #F3AC06, transparent)', margin: '15px auto' }} />
      </div>

      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: 1600, 
        height: 480,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        {/* Left Arrow */}
        <button onClick={prev} style={{
          width: 54, height: 54, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.8)',
          background: 'rgba(255,255,255,0.05)', color: 'white', cursor: 'pointer', zIndex: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s',
          position: 'absolute', left: 40, top: '50%', transform: 'translateY(-50%)'
        }} onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
          e.currentTarget.style.borderColor = '#fff';
        }} onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        {/* Carousel Container */}
        <div style={{ 
          display: 'flex', 
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          transformStyle: 'preserve-3d'
        }}>
          {REVIEWS.map((review, i) => {
            // Calculate distance from active index with wrapping
            let diff = i - activeIdx;
            if (diff > REVIEWS.length / 2) diff -= REVIEWS.length;
            if (diff < -REVIEWS.length / 2) diff += REVIEWS.length;

            const isActive = diff === 0;
            const isVisible = Math.abs(diff) <= 1.5; // Show current, prev, and next

            // Animation properties
            const translateX = diff * 320;
            const rotateY = diff * -20;
            const scale = isActive ? 1.1 : 0.85;
            const zIndex = 10 - Math.abs(diff);
            const opacity = isActive ? 1 : (Math.abs(diff) <= 1 ? 0.35 : 0);

            return (
              <div key={review.id} style={{
                width: 350,
                height: 380,
                background: '#0a0005',
                borderRadius: 32,
                padding: '30px 25px',
                border: isActive ? '1px solid #F3AC06' : '1px solid rgba(255,255,255,0.05)',
                position: 'absolute',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                opacity: opacity,
                zIndex: zIndex,
                boxShadow: isActive ? '0 30px 80px rgba(243, 172, 6, 0.15)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                pointerEvents: isActive ? 'auto' : 'none'
              }}>
                {/* Quote Icon */}
                <div style={{
                  position: 'absolute', top: 25, right: 25, fontSize: 80,
                  fontFamily: 'serif', color: 'rgba(243, 172, 6, 0.08)', fontWeight: 900,
                  lineHeight: 1, pointerEvents: 'none'
                }}>”</div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ width: 65, height: 65, borderRadius: '50%', padding: 2, border: '2px solid #F3AC06' }}>
                      <img src={review.img} alt={review.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                    </div>
                    <div style={{
                      position: 'absolute', bottom: 2, right: 2, width: 20, height: 20,
                      background: '#F3AC06', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1.5px solid #000'
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="6"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 2 }}>{review.name}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 500 }}>{review.role}</p>
                    <div style={{ 
                      background: '#F3AC06', color: '#000', fontSize: 9, fontWeight: 800, 
                      padding: '4px 10px', borderRadius: 6, marginTop: 6, display: 'inline-block'
                    }}>
                      {review.org}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 4, marginBottom: 15 }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#F3AC06', fontSize: 16 }}>★</span>
                  ))}
                </div>

                <p style={{ 
                  color: 'white', fontSize: 15, lineHeight: 1.5, fontWeight: 600, 
                  fontStyle: 'normal', marginBottom: 'auto', textAlign: 'left'
                }}>
                  {review.text}
                </p>

                <div style={{
                  alignSelf: 'center', display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: '#F3AC06', padding: '6px 18px', borderRadius: 50, 
                  fontSize: 11, fontWeight: 700, border: '1px solid rgba(243, 172, 6, 0.3)',
                  marginTop: 15, background: 'rgba(243, 172, 6, 0.05)'
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Verified Review
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button onClick={next} style={{
          width: 54, height: 54, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.8)',
          background: 'rgba(255,255,255,0.05)', color: 'white', cursor: 'pointer', zIndex: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s',
          position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)'
        }} onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
          e.currentTarget.style.borderColor = '#fff';
        }} onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div style={{ display: 'flex', gap: 15, marginTop: 40 }}>
        {REVIEWS.map((_, idx) => (
          <div key={idx} onClick={() => setActiveIdx(idx)} style={{
            width: idx === activeIdx ? 40 : 12,
            height: 12,
            borderRadius: 6,
            background: idx === activeIdx ? '#F3AC06' : 'rgba(255,255,255,0.2)',
            cursor: 'pointer',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }} />
        ))}
      </div>
    </section>
  );
}
