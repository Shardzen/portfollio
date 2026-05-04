import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const splitChars = (text, className) =>
  text.split('').map((ch, i) => (
    <span key={i} className={`char ${className || ''}`} style={{ display: 'inline-block' }}>
      {ch === ' ' ? ' ' : ch}
    </span>
  ));

const Hero = () => {
  const heroRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.6 });

      tl.fromTo('.hero-char',
        { y: 90, opacity: 0, rotateX: -20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.85, stagger: 0.028, ease: 'power3.out' }
      )
        .fromTo(subtitleRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.3')
        .fromTo(ctaRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
        .fromTo(statsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.2')
        .fromTo(terminalRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }, 0.8);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }} className="grid-bg">
      {/* Orbs */}
      <div style={{ position: 'absolute', top: -160, left: -160, width: 600, height: 600, borderRadius: '50%', background: 'rgba(0,212,255,0.04)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -100, right: -60, width: 500, height: 500, borderRadius: '50%', background: 'rgba(139,92,246,0.05)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '96px 24px 80px', width: '100%' }}>
        <div className="hero-grid">
          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, border: '1px solid rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.06)', marginBottom: 32 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d4ff', animation: 'pulse 2s ease-in-out infinite', display: 'inline-block' }} />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: '#00d4ff', letterSpacing: '0.12em' }}>FREELANCE · OPEN TO WORK</span>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: 24, overflow: 'hidden', fontSize: 'clamp(3.5rem, 9vw, 6.5rem)' }}>
              <div style={{ overflow: 'hidden', paddingBottom: 4, color: '#eef0f8' }}>
                {splitChars('ARTHUR', 'hero-char')}
              </div>
              <div style={{ overflow: 'hidden', paddingBottom: 4 }}>
                <span className="gradient-text" style={{ display: 'inline-block' }}>
                  {splitChars('PINEAU')}
                </span>
                <span className="hero-char" style={{ display: 'inline-block', color: '#00d4ff' }}>.</span>
              </div>
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} style={{ fontFamily: 'Inter', fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: '#8892a4', marginBottom: 36, maxWidth: 420, lineHeight: 1.7 }}>
              Développeur <span style={{ color: '#eef0f8' }}>Full Stack</span> &{' '}
              <span style={{ color: '#eef0f8' }}>Cybersécurité</span> — je conçois des expériences web performantes et des systèmes robustes.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Voir mes projets
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 6 }}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Me contacter
              </button>
            </div>
          </div>

          {/* Right: Terminal */}
          <div ref={terminalRef} className="hero-terminal">
            <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(9,12,24,0.8)', backdropFilter: 'blur(12px)', overflow: 'hidden', boxShadow: '0 32px 64px rgba(0,0,0,0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,95,87,0.7)', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,189,46,0.7)', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(39,201,63,0.7)', display: 'inline-block' }} />
                <span style={{ marginLeft: 8, fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#505870' }}>terminal — arthur@portfolio</span>
              </div>
              <div style={{ padding: '20px 20px 24px', fontFamily: 'JetBrains Mono', fontSize: '0.82rem', lineHeight: 1.8 }}>
                <Line prompt color="#8b5cf6" cmd="whoami" />
                <Line indent value="Arthur Pineau" />
                <Line prompt color="#8b5cf6" cmd="cat skills.txt" />
                <div style={{ paddingLeft: 16, marginBottom: 4 }}>
                  <div><span style={{ color: '#00d4ff' }}>dev</span><span style={{ color: '#505870' }}>:</span> React · Next.js · Node · TypeScript</div>
                  <div><span style={{ color: '#8b5cf6' }}>sec</span><span style={{ color: '#505870' }}>:</span> CTF · Pentest · Kali · OSINT</div>
                  <div><span style={{ color: '#8892a4' }}>ops</span><span style={{ color: '#505870' }}>:</span> Docker · Git · PostgreSQL</div>
                </div>
                <Line prompt color="#8b5cf6" cmd="echo $STATUS" />
                <div style={{ paddingLeft: 16, display: 'flex', alignItems: 'center', gap: 8, color: '#4ade80' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
                  Disponible pour missions
                </div>
                <div style={{ marginTop: 8 }}>
                  <span style={{ color: '#8b5cf6' }}>~</span>
                  <span style={{ color: '#505870' }}> $ </span>
                  <span style={{ display: 'inline-block', width: 7, height: 14, background: '#00d4ff', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} style={{ marginTop: 72, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', gap: '24px 64px', alignItems: 'center' }}>
          {[
            { v: '3+', l: "ans d'expérience" },
            { v: '15+', l: 'projets livrés' },
            { v: 'CTF', l: 'compétitions cyber' },
            { v: '24h', l: 'délai de réponse' },
          ].map((s) => (
            <div key={s.l}>
              <p style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.5rem', color: '#eef0f8' }}>{s.v}</p>
              <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#8892a4', marginTop: 2 }}>{s.l}</p>
            </div>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: '#505870' }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', letterSpacing: '0.15em' }}>SCROLL</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ animation: 'bounce 1.5s ease-in-out infinite' }}>
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(4px)} }
        .btn-primary { display:inline-flex; align-items:center; padding:12px 24px; background:#00d4ff; color:#05070f; font-family:'Space Grotesk'; font-weight:600; font-size:0.875rem; border:none; border-radius:10px; cursor:pointer; transition:background 0.2s,transform 0.15s; }
        .btn-primary:hover { background:rgba(0,212,255,0.85); transform:translateY(-1px); }
        .btn-secondary { display:inline-flex; align-items:center; padding:12px 24px; background:transparent; color:#8892a4; font-family:'Space Grotesk'; font-weight:500; font-size:0.875rem; border:1px solid rgba(255,255,255,0.1); border-radius:10px; cursor:pointer; transition:color 0.2s,border-color 0.2s; }
        .btn-secondary:hover { color:#eef0f8; border-color:rgba(255,255,255,0.2); }
        .hero-grid { display:grid; grid-template-columns:1fr; gap:48px; align-items:center; }
        .hero-terminal { display:none; }
        @media(min-width:1024px) {
          .hero-grid { grid-template-columns:1fr 1fr; }
          .hero-terminal { display:block; }
        }
      `}</style>
    </section>
  );
};

const Line = ({ prompt, color, cmd, indent, value }) => (
  <div style={{ paddingLeft: indent ? 16 : 0, color: indent ? '#eef0f8' : undefined, marginBottom: 2 }}>
    {prompt && <><span style={{ color }}> ~</span><span style={{ color: '#505870' }}> $ </span></>}
    {cmd && <span style={{ color: '#00d4ff' }}>{cmd}</span>}
    {value && <span>{value}</span>}
  </div>
);

export default Hero;
