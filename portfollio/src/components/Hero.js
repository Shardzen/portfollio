import React from 'react';
import { useReveal, SplitWords } from './Reveal';
import { useScrollY } from '../hooks';

export default function Hero() {
  const [titleRef, titleVis] = useReveal({ threshold: 0.1 });
  const y = useScrollY();
  const parallax = Math.min(y * 0.35, 180);

  return (
    <section id="top" className="cn-section" style={{ minHeight:'100vh', padding:'160px 56px 80px', position:'relative', overflow:'hidden' }}>
      {/* Radial gradient bg */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(62% 80% at 78% 28%, color-mix(in srgb, var(--accent) 20%, transparent), transparent 60%), radial-gradient(42% 60% at 12% 82%, color-mix(in srgb, #4060B8 16%, transparent), transparent 60%)',
        transform:`translateY(${-parallax * 0.4}px)`,
        transition:'transform .1s linear',
      }}/>

      <div style={{ position:'relative', display:'flex', flexDirection:'column', minHeight:'calc(100vh - 240px)' }}>
        {/* Eyebrow */}
        <div className="cn-mono" style={{ marginBottom:36, color:'var(--accent)', display:'flex', alignItems:'center', gap:14, opacity: titleVis ? 1 : 0, transition:'opacity .8s 200ms' }}>
          <span style={{ width:32, height:1, background:'var(--accent)', display:'inline-block' }}/>
          001 — un développeur, deux disciplines, zéro compromis
        </div>

        {/* Name */}
        <h1 ref={titleRef} className="cn-display" style={{ fontSize:'clamp(96px, 16vw, 260px)', margin:0 }}>
          <div><SplitWords visible={titleVis} stagger={80}>Arthur</SplitWords></div>
          <div>
            <SplitWords visible={titleVis} delay={180} stagger={80}>Pineau</SplitWords>
            <sup className="cn-italic" style={{ fontSize:'.28em', color:'var(--accent)', verticalAlign:'super', marginLeft:10, opacity:titleVis ? 1 : 0, transition:'opacity .8s 1300ms' }}>★</sup>
          </div>
        </h1>

        {/* Bottom row */}
        <div style={{ marginTop:'auto', display:'grid', gridTemplateColumns:'1.4fr auto', gap:64, alignItems:'flex-end', paddingTop:80 }}>
          <div style={{ transform:titleVis ? 'translateY(0)' : 'translateY(28px)', opacity:titleVis ? 1 : 0, transition:'transform 1s cubic-bezier(.2,.7,.2,1) 500ms, opacity .8s 500ms' }}>
            <p className="cn-italic" style={{ margin:0, fontSize:'clamp(26px, 3.2vw, 48px)', lineHeight:1.1, maxWidth:720 }}>
              Je conçois des produits web qui tiennent — parce que je sais aussi comment <span style={{ color:'var(--accent)' }}>les faire tomber.</span>
            </p>
          </div>
          <div style={{ textAlign:'right', transform:titleVis ? 'translateY(0)' : 'translateY(28px)', opacity:titleVis ? 1 : 0, transition:'transform 1s cubic-bezier(.2,.7,.2,1) 700ms, opacity .8s 700ms' }}>
            <div className="cn-mono" style={{ opacity:.5, marginBottom:6 }}>scroll ↓</div>
            <div className="cn-mono" style={{ fontSize:12, opacity:.6 }}>06 chapitres · 8 min</div>
          </div>
        </div>
      </div>
    </section>
  );
}
