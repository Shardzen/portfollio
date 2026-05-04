import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.3, ease: 'power3.out' });
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(5,7,15,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.2rem', color: '#eef0f8', letterSpacing: '-0.02em' }}>
          AP<span style={{ color: '#00d4ff' }}>.</span>
        </button>

        <div className="nav-links">
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="nav-link">
              {l.label}
            </button>
          ))}
        </div>

        <div className="nav-badge">
          <span className="ping-wrapper">
            <span className="ping-anim" />
            <span className="ping-dot-static" />
          </span>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#4ade80', letterSpacing: '0.05em' }}>Disponible</span>
        </div>

        <button onClick={() => setOpen(!open)} className="hamburger">
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1, background: '#8892a4', borderRadius: 1, transition: 'transform 0.3s, opacity 0.3s',
              transform: open && i === 0 ? 'rotate(45deg) translate(4px, 4px)' : open && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(9,12,24,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontSize: '0.875rem', color: '#8892a4', textAlign: 'left', padding: 0 }}>
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes ping { 75%,100%{transform:scale(2.2);opacity:0} }
        .nav-links { display:flex; align-items:center; gap:32px; }
        .nav-link { background:none; border:none; cursor:pointer; font-family:Inter; font-size:0.875rem; color:#8892a4; padding:0; transition:color 0.2s; }
        .nav-link:hover { color:#eef0f8; }
        .nav-badge { display:flex; align-items:center; gap:8px; padding:6px 14px; border-radius:999px; border:1px solid rgba(34,197,94,0.2); background:rgba(34,197,94,0.06); }
        .ping-wrapper { position:relative; display:inline-flex; width:7px; height:7px; }
        .ping-anim { position:absolute; inset:0; border-radius:50%; background:#22c55e; opacity:0.7; animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite; }
        .ping-dot-static { position:relative; width:7px; height:7px; border-radius:50%; background:#22c55e; display:inline-block; }
        .hamburger { background:none; border:none; cursor:pointer; display:none; flex-direction:column; gap:5px; padding:4px; }
        @media(max-width:767px) {
          .nav-links { display:none!important; }
          .nav-badge { display:none!important; }
          .hamburger { display:flex!important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
