import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const devSkills = [
  { name: 'React', level: 82 },
  { name: 'JavaScript', level: 80 },
  { name: 'Tailwind CSS', level: 78 },
  { name: 'Git', level: 76 },
  { name: 'Next.js', level: 65 },
  { name: 'Node.js', level: 62 },
  { name: 'TypeScript', level: 58 },
  { name: 'Python', level: 55 },
  { name: 'MongoDB', level: 50 },
  { name: 'Docker', level: 45 },
];

const cyberSkills = [
  { name: 'Kali Linux', emoji: '🐉' },
  { name: 'Burp Suite', emoji: '🕷' },
  { name: 'Nmap', emoji: '🔍' },
  { name: 'Wireshark', emoji: '🦈' },
  { name: 'OSINT', emoji: '🌐' },
  { name: 'CTF', emoji: '🚩' },
  { name: 'Metasploit', emoji: '⚔️' },
  { name: 'SQLMap', emoji: '💉' },
  { name: 'Bash', emoji: '💻' },
  { name: 'Forensics', emoji: '🔬' },
  { name: 'Reverse Eng.', emoji: '⚙️' },
  { name: 'Network Sec.', emoji: '🔒' },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-reveal',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.65, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      );
      gsap.fromTo('.skill-bar-fill',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.1, stagger: 0.06, ease: 'power2.inOut', transformOrigin: 'left center', scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" style={{ padding: '128px 24px', position: 'relative', background: 'rgba(9,12,24,0.4)' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4 }} />

      <div style={{ maxWidth: 1152, margin: '0 auto', position: 'relative' }}>
        <div className="skill-reveal section-label">
          <span>02 / COMPÉTENCES</span>
        </div>

        <div className="skills-grid">
          {/* Dev */}
          <div>
            <div className="skill-reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round">
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '1rem', color: '#eef0f8' }}>Développement</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {devSkills.map((skill) => (
                <div key={skill.name} className="skill-reveal">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: '#8892a4' }}>{skill.name}</span>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: '#505870' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cyber */}
          <div>
            <div className="skill-reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '1rem', color: '#eef0f8' }}>Cybersécurité</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
              {cyberSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-reveal cyber-card"
                >
                  <span style={{ fontSize: '1rem' }}>{skill.emoji}</span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: '#8892a4' }}>{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="skill-reveal" style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(0,212,255,0.15)', background: 'rgba(0,212,255,0.05)', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: '1.4rem' }}>🚩</span>
              <div>
                <p style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: '0.875rem', color: '#eef0f8' }}>Compétitions CTF</p>
                <p style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#8892a4', marginTop: 2 }}>Web · Pwn · Reverse · Forensics · OSINT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-grid { display:grid; grid-template-columns:1fr; gap:48px; }
        @media(min-width:1024px) { .skills-grid { grid-template-columns:1fr 1fr; gap:80px; } }
        .cyber-card { display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:10px; border:1px solid rgba(255,255,255,0.05); background:rgba(5,7,15,0.5); transition:border-color 0.2s, background 0.2s; cursor:default; }
        .cyber-card:hover { border-color:rgba(139,92,246,0.2); background:rgba(139,92,246,0.06); }
        .cyber-card:hover span:last-child { color:#eef0f8; }
      `}</style>
    </section>
  );
};

export default Skills;
