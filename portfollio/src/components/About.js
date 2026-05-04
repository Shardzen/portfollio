import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-item',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" style={{ padding: '128px 24px', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.03), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        <div className="about-item section-label">
          <span>01 / À PROPOS</span>
        </div>

        <div className="about-grid">
          {/* Photo + links */}
          <div className="about-item">
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: 24 }}>
              <div style={{ width: 192, height: 192, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
                <img
                  src="/Arthur-Pineau.jpg"
                  alt="Arthur Pineau"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.parentNode.innerHTML = '<div style="width:100%;height:100%;background:#0e1225;display:flex;align-items:center;justify-content:center;font-family:Space Grotesk;font-weight:700;font-size:2.5rem;color:#00d4ff">AP</div>';
                  }}
                />
              </div>
              <div style={{ position: 'absolute', inset: 0, borderRadius: 16, background: 'rgba(0,212,255,0.08)', filter: 'blur(24px)', zIndex: -1, transform: 'scale(1.1)' }} />
            </div>

            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.75rem', color: '#eef0f8', marginBottom: 4 }}>Arthur Pineau</h2>
            <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: '#00d4ff', marginBottom: 20 }}>Développeur · Cybersécurité · Ynov Rennes</p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/Shardzen', icon: <GithubIcon /> },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arthur-pineau-00a107319/', icon: <LinkedinIcon /> },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', color: '#8892a4', fontFamily: 'Inter', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#eef0f8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#8892a4'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="about-item">
            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#eef0f8', marginBottom: 20, lineHeight: 1.2 }}>
              À l'intersection du code<br />
              <span className="gradient-text">et de la sécurité.</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'Inter', fontSize: '0.95rem', color: '#8892a4', lineHeight: 1.75 }}>
              <p>
                Étudiant à <span style={{ color: '#eef0f8' }}>Ynov Rennes</span>, je développe des applications web full stack depuis plusieurs années. Ma passion : construire des produits qui fonctionnent bien, et qui sont <span style={{ color: '#eef0f8' }}>sécurisés par conception</span>.
              </p>
              <p>
                En parallèle, je me forme activement en cybersécurité — pentest, OSINT, forensics — et je participe à des <span style={{ color: '#00d4ff' }}>CTF (Capture The Flag)</span> pour aiguiser mes compétences offensives et défensives.
              </p>
              <p>
                Cette double casquette me permet d'aborder chaque projet avec un regard différent : non seulement "est-ce que ça marche ?", mais aussi "est-ce que ça peut être compromis ?"
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 28 }}>
              {[
                { v: '2022', l: 'Début coding' },
                { v: 'CTF', l: 'Compétitions' },
                { v: 'Sec+Dev', l: 'Double stack' },
              ].map((s) => (
                <div key={s.l} style={{ padding: '16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(9,12,24,0.5)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'JetBrains Mono', fontWeight: 600, fontSize: '1.1rem', color: '#00d4ff' }}>{s.v}</p>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#8892a4', marginTop: 4 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid { display:grid; grid-template-columns:1fr; gap:40px; align-items:start; }
        @media(min-width:1024px) { .about-grid { grid-template-columns:1fr 1.4fr; gap:80px; } }
      `}</style>
    </section>
  );
};

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default About;
