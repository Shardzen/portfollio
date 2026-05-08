import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const links = [
  { label: 'À propos',    href: '#about'    },
  { label: 'Projets',     href: '#projects' },
  { label: 'Studio',      href: '#studio'   },
  { label: 'Contact',     href: '#contact'  },
];

export default function Navbar({ theme, onToggleTheme }) {
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
    <nav ref={navRef} style={{
      position:'fixed', top:0, left:0, right:0, zIndex:50,
      background: scrolled ? 'color-mix(in srgb, var(--paper) 85%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
      transition:'background .4s, border-color .4s, backdrop-filter .4s',
    }}>
      <div style={{ maxWidth:1152, margin:'0 auto', padding:'0 56px', height:64, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })} style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:10, padding:0 }}>
          <span style={{ width:28, height:28, borderRadius:14, background:'var(--accent)', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'#fff', fontFamily:'"Bricolage Grotesque"', fontSize:13, fontWeight:700 }}>A</span>
          <span className="cn-mono" style={{ color:'var(--ink)', fontSize:12 }}>Arthur Pineau</span>
        </button>

        {/* Desktop links */}
        <div className="nav-links">
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="nav-link" style={{ color:'var(--mute)' }}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          {onToggleTheme && (
            <button onClick={onToggleTheme} className="cn-pill" style={{ background:'transparent', cursor:'pointer', color:'var(--ink)', fontFamily:'inherit', border:'1px solid var(--rule)' }}>
              {theme === 'dark' ? '☀ jour' : '☾ nuit'}
            </button>
          )}
          <span className="cn-pill nav-badge" style={{ borderColor:'rgba(34,197,94,.3)' }}>
            <span className="cn-dot"/>
            <span style={{ fontFamily:'"Geist Mono"', fontSize:'0.7rem', color:'#4ade80', letterSpacing:'0.05em' }}>Disponible</span>
          </span>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="hamburger" aria-label="Menu">
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display:'block', width:22, height:1, background:'var(--mute)', borderRadius:1, transition:'transform .3s, opacity .3s',
              transform: open && i===0 ? 'rotate(45deg) translate(4px,4px)' : open && i===2 ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
              opacity: open && i===1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background:'color-mix(in srgb, var(--paper) 96%, transparent)', backdropFilter:'blur(20px)', borderBottom:'1px solid var(--rule)', padding:'16px 56px 20px', display:'flex', flexDirection:'column', gap:16 }}>
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'"Geist Mono"', fontSize:'0.875rem', color:'var(--mute)', textAlign:'left', padding:0, letterSpacing:'.08em', textTransform:'uppercase' }}>
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        .nav-links { display:flex; align-items:center; gap:28px; }
        .nav-link { background:none; border:none; cursor:pointer; font-family:"Geist Mono",monospace; font-size:11px; letter-spacing:.12em; text-transform:uppercase; padding:0; transition:color .2s; }
        .nav-link:hover { color:var(--ink) !important; }
        .nav-badge { display:flex; align-items:center; gap:6px; }
        .hamburger { background:none; border:none; cursor:pointer; display:none; flex-direction:column; gap:5px; padding:4px; }
        @media(max-width:767px) {
          .nav-links { display:none !important; }
          .nav-badge { display:none !important; }
          .hamburger { display:flex !important; }
        }
      `}</style>
    </nav>
  );
}
