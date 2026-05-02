import React from 'react';
import '../App.css';
function Hero({ scrollProgress }) {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'transparent',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Top Logo - Fixed at top center without header background */}
      <div style={{
        position: 'absolute',
        top: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}>
        <img src="/logo.png" alt="SEEZ Logo" style={{ height: 100, objectFit: 'contain' }} />
      </div>
      
      {/* Note: Background particles and blue edge vignette are now handled by the Wrapper in App */}
      {/* Content Wrapper to keep boxes close to text */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1300px',
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}>
        {/* The Product Boxes are now handled entirely by the Orbital Card Layer above -> NO DUPLICATES HERE */}

        {/* Center Text content - zIndex 3 to be on top of boxes if they overlap */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          padding: '80px 20px 0',
        }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 0.9,
            marginBottom: 28,
          }}>
            {/* MORE - Red-White Flip (40/60 ratio) */}
            <div style={{
              fontSize: 'clamp(60px, 11.5vw, 120px)',
              letterSpacing: -3,
              backgroundImage: 'linear-gradient(to right, #F3AC06 0%, #F3AC06 20%, #ffffff 50%, #F3AC06 80%, #F3AC06 100%)',
              backgroundSize: '200% 100%',
              backgroundPosition: '0% 0%',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              lineHeight: 0.93,
              filter: 'drop-shadow(0 0 15px rgba(243,172,6,0.4))',
              animation: 'shimmer-flip 5s ease-in-out infinite',
            }}>MORE</div>
            {/* THAN - Red-White Flip (40/60 ratio) */}
            <div style={{
              fontSize: 'clamp(24px, 4vw, 50px)',
              fontWeight: 700,
              letterSpacing: 12,
              backgroundImage: 'linear-gradient(to right, #F3AC06 0%, #F3AC06 20%, #ffffff 50%, #F3AC06 80%, #F3AC06 100%)',
              backgroundSize: '200% 100%',
              backgroundPosition: '0% 0%',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              lineHeight: 1.15,
              marginTop: 30,
              animation: 'shimmer-flip 5s ease-in-out infinite',
            }}>THAN</div>
            {/* PERFUME - Red-White Flip (40/60 ratio) */}
            <div style={{
              fontSize: 'clamp(45px, 9vw, 95px)',
              letterSpacing: -1,
              backgroundImage: 'linear-gradient(to right, #F3AC06 0%, #F3AC06 20%, #ffffff 50%, #F3AC06 80%, #F3AC06 100%)',
              backgroundSize: '200% 100%',
              backgroundPosition: '0% 0%',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              lineHeight: 0.92,
              marginTop: 30,
              filter: 'drop-shadow(0 0 15px rgba(243,172,6,0.4))',
              animation: 'shimmer-flip 5s ease-in-out infinite',
            }}>PERFUME</div>
          </div>

          <div style={{ fontWeight: 800, fontSize: 16, color: 'white', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8, fontFamily: 'Inter' }}>
            Reinvented Perfume
          </div>
          <p style={{
            color: 'white',
            fontSize: 16,
            lineHeight: 1.6,
            maxWidth: 550,
            margin: '0 auto 40px',
            fontFamily: 'Inter',
            fontWeight: 400,
          }}>
            Solid Perfumes designed for your Modern lifestyle, from desk to date!
          </p>

          <a href="#products" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #F3AC06 0%, #c48a00 100%)',
            color: 'white', fontSize: 16, fontWeight: 700,
            padding: '15px 60px', borderRadius: 50, border: 'none',
            cursor: 'pointer', textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(243,172,6,0.7)',
            transition: 'all .3s ease',
            fontFamily: 'Inter',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
