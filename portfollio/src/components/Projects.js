import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    idx: '01',
    name: 'Infrarouge',
    description: 'Site vitrine moderne avec animations avancées et expérience utilisateur premium.',
    tags: ['React', 'Tailwind', 'GSAP'],
    accent: '#00d4ff',
    github: 'https://github.com/Shardzen',
  },
  {
    idx: '02',
    name: 'E-Commerce Platform',
    description: 'Système complet avec panier, paiement Stripe et gestion des commandes en temps réel.',
    tags: ['Next.js', 'MongoDB', 'Stripe'],
    accent: '#8b5cf6',
    github: 'https://github.com/Shardzen',
  },
  {
    idx: '03',
    name: 'Dashboard Analytics',
    description: 'Visualisation de données temps réel avec graphiques interactifs et exports.',
    tags: ['React', 'Chart.js', 'WebSocket'],
    accent: '#00d4ff',
    github: 'https://github.com/Shardzen',
  },
  {
    idx: '04',
    name: 'Social Network',
    description: 'Réseau social avec messagerie instantanée et notifications via WebSockets.',
    tags: ['Node.js', 'Socket.io', 'PostgreSQL'],
    accent: '#8b5cf6',
    github: 'https://github.com/Shardzen',
  },
  {
    idx: '05',
    name: 'Portfolio Builder',
    description: 'Générateur de portfolio avec éditeur visuel drag-and-drop et export dynamique.',
    tags: ['React', 'Firebase', 'DnD'],
    accent: '#00d4ff',
    github: 'https://github.com/Shardzen',
  },
  {
    idx: '06',
    name: 'Task Manager',
    description: 'Gestionnaire collaboratif avec synchronisation temps réel et gestion d\'état Redux.',
    tags: ['React', 'Redux', 'PostgreSQL'],
    accent: '#8b5cf6',
    github: 'https://github.com/Shardzen',
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" style={{ padding: '128px 24px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, borderRadius: '50%', background: 'rgba(0,212,255,0.04)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        <div className="section-label">
          <span>03 / PROJETS</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 12 }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: '#eef0f8', lineHeight: 1.2 }}>
            Ce que j'ai construit
          </h2>
          <a
            href="https://github.com/Shardzen"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Inter', fontSize: '0.85rem', color: '#8892a4', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4ff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#8892a4')}
          >
            Voir sur GitHub
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
          {projects.map((p) => (
            <div key={p.name} className="project-card" style={{ position: 'relative', padding: '24px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(9,12,24,0.5)', transition: 'border-color 0.25s, background 0.25s', cursor: 'default' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${p.accent}30`;
                e.currentTarget.style.background = `${p.accent}08`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.background = 'rgba(9,12,24,0.5)';
              }}
            >
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#505870', display: 'block', marginBottom: 12 }}>{p.idx}</span>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '1.1rem', color: '#eef0f8', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = p.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#eef0f8')}
              >
                {p.name}
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#8892a4', lineHeight: 1.65, marginBottom: 18 }}>{p.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                {p.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', padding: '3px 10px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)', color: '#505870' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Inter', fontSize: '0.78rem', color: '#505870', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#eef0f8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#505870')}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Code source
              </a>
              {/* Bottom accent */}
              <div style={{ position: 'absolute', bottom: 0, left: 24, right: 24, height: 1, background: `linear-gradient(90deg, ${p.accent}, transparent)`, transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.35s ease' }}
                className="card-accent-line"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover .card-accent-line { transform: scaleX(1) !important; }
      `}</style>
    </section>
  );
};

export default Projects;
