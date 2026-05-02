import React, { useState, useEffect } from 'react';
import Particles from './components/Particles';
import StickyButtons from './components/StickyButtons';
import ProductBox from './components/ProductBox';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Intro from './components/Intro';
import Products from './components/Products';
import GlobalCards from './components/GlobalCards';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Affiliate from './components/Affiliate';
import AffiliateForm from './components/AffiliateForm';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <GlobalCards scrollY={scrollY} />
      <StickyButtons />
      
      {/* Top 2 Sections Wrapper - Connects the animated background cleanly */}
      <div style={{ position: 'relative' }}>
        {/* Sticky Background for Hero & Intro ONLY */}
        <div style={{
          position: 'sticky', top: 0, height: '100vh', zIndex: 0, pointerEvents: 'none', overflow: 'hidden',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(0,30,120,0.2) 0%, transparent 70%)',
          boxShadow: 'inset 0 120px 120px -60px rgba(0,30,120,0.4)',
        }}>
          <Particles />
        </div>
        
        {/* The sections sit above the sticky background */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: '-100vh' }}>
          <Hero scrollProgress={Math.min(scrollY / 700, 1)} />
          <Intro />
        </div>
      </div>

      <Products />
      <Testimonials />
      <CTASection />
      <Affiliate />
      <AffiliateForm />
      <Footer />
    </>
  )
}