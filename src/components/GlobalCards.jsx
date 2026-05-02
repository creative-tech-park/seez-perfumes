import React, { useState, useEffect } from 'react';
import ProductBox from './ProductBox';
import '../App.css';
function GlobalCards({ scrollY }) {
  const [win, setWin] = useState({ w: typeof window !== 'undefined' ? window.innerWidth : 1200, h: typeof window !== 'undefined' ? window.innerHeight : 800 });
  
  useEffect(() => {
    const update = () => setWin({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const { w, h } = win;
  
  // Phase logic
  // Stretch the single 360-degree rotation across the entire 100vh scroll
  const landingEnd = h * 1.0; 
  
  // Progresses from 0 to 1 over the full section
  const orbitProgress = Math.min(scrollY / landingEnd, 1);
  
  // Landing transition starts midway, from 0.4h to 1.0h
  const landingStart = h * 0.4;
  const rawLandingRaw = (scrollY - landingStart) / (landingEnd - landingStart);
  const landingProgress = Math.min(Math.max(rawLandingRaw, 0), 1); // 0 to 1
  
  // Easing for smooth landing interpolation
  const easeLanding = landingProgress < 0.5 ? 2 * landingProgress * landingProgress : -1 + (4 - 2 * landingProgress) * landingProgress;

  // Intro Grid layout calculation
  const gridInnerWidth = Math.min(w - 80, 1200);
  const gridLeft = (w - gridInnerWidth) / 2;
  const rightColLeft = gridLeft + (gridInnerWidth - 80) / 2 + 80;
  const colWidth = (gridInnerWidth - 80) / 2;
  
  const introTopDocY = h; 
  
  const targets = [
    { w: 208, h: 329, top: 0, rawLeft: 0.35, rotate: -3 }, 
    { w: 192, h: 304, top: 60, rawLeft: 0.55, rotate: 10 },
    { w: 185, h: 292, top: 145, rawLeft: 0.15, rotate: -12 },
    { w: 176, h: 278, top: 30, rawLeft: 0.75, rotate: 20 },
  ];

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}>
      {[0, 1, 2, 3].map((i) => {
        const isMainCard = i < 2;
        
        if (!isMainCard && scrollY < 20) return null;
        
        // Exact single 360 rotation stretched across the entire scroll
        const baseAngles = [0, 180, 90, 270];
        const rotAngle = baseAngles[i] + (orbitProgress * 360);
        const rad = rotAngle * (Math.PI / 180);
        
        const oDepth = Math.sin(rad);
        const oScale = 0.9 + (oDepth + 1) * 0.15;
        const oZ = Math.round(oDepth * 10) + 10;
        
        const orbitRadiusX = (w * 0.42) - 120;
        const orbitRadiusY = h * 0.25;
        const oTx = Math.cos(rad) * orbitRadiusX;
        const oTy = Math.sin(rad) * orbitRadiusY + (i === 0 ? 19 * Math.max(0, 1 - orbitProgress * 5) : 0);
        
        const target = targets[i];
        const docCenterX = rightColLeft + (target.rawLeft * colWidth) + (target.w / 2);
        const docCenterY = introTopDocY + 90 + target.top + (target.h / 2); 
        
        const tTx = docCenterX - (w / 2);
        const tTy = docCenterY - scrollY - (h / 2); 
        const tScale = target.w / 240; 
        const tRotate = target.rotate;

        const currentTx = oTx + (tTx - oTx) * easeLanding;
        const currentTy = oTy + (tTy - oTy) * easeLanding;
        const currentScale = oScale + (tScale - oScale) * easeLanding;
        const currentRot = tRotate * easeLanding; 
        
        const zIndex = easeLanding < 0.8 ? oZ : (i === 1 ? 5 : i === 0 ? 4 : i === 3 ? 3 : 2);
        
        const opacity = isMainCard ? 1 : Math.min(1, Math.max(0, (orbitProgress - 0.1) * 5));

        return (
          <div key={i} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${currentTx}px, ${currentTy}px) scale(${currentScale}) rotate(${currentRot}deg)`,
            opacity: opacity,
            zIndex: zIndex,
            transition: 'opacity 0.2s',
            pointerEvents: 'auto',
          }}>
            <ProductBox side={i % 2 === 0 ? 'right' : 'left'} />
          </div>
        )
      })}
    </div>
  );
}

export default GlobalCards;
