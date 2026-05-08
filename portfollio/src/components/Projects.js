import { Reveal } from './Reveal';
import { useTilt } from '../hooks';
import { CONTENT } from '../content';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const PALETTES = {
  warm:  { bg:'#E8DDC9', stripe:'rgba(60,40,20,.06)', ink:'rgba(60,40,20,.55)' },
  ink:   { bg:'#1a1a1a', stripe:'rgba(255,240,220,.04)', ink:'rgba(255,240,220,.45)' },
  paper: { bg:'#EAE6DF', stripe:'rgba(20,20,20,.05)', ink:'rgba(20,20,20,.5)' },
  sand:  { bg:'#D8CDB6', stripe:'rgba(40,30,20,.07)', ink:'rgba(40,30,20,.6)' },
};

function ProjectPlaceholder({ label, tone = 'warm', height = 360 }) {
  const p = PALETTES[tone] || PALETTES.warm;
  return (
    <div style={{
      width:'100%', height,
      background:`repeating-linear-gradient(135deg, ${p.bg} 0 14px, ${p.stripe} 14px 15px, ${p.bg} 15px 30px)`,
      backgroundColor: p.bg,
      display:'flex', alignItems:'center', justifyContent:'center',
    }}>
      <div style={{ fontFamily:'"Geist Mono",monospace', fontSize:11, letterSpacing:'.16em', color:p.ink, textTransform:'uppercase', padding:'8px 14px', border:`1px solid ${p.ink}`, background:p.bg }}>
        {label}
      </div>
    </div>
  );
}

function ProjectRow({ p, i }) {
  const flip = i % 2 === 1;
  const tiltRef = useTilt(4);
  return (
    <Reveal as="article" style={{ padding:'40px 56px', borderTop:'1px solid var(--rule)' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }}>
        {/* Visual */}
        <div ref={tiltRef} style={{ order:flip ? 2 : 1, position:'relative', transformStyle:'preserve-3d' }}>
          <ProjectPlaceholder label={`${p.t.toUpperCase()} / APERÇU`} tone={p.tone} />
          <span className="cn-display" style={{
            position:'absolute', top:-28, [flip ? 'right' : 'left']:-10,
            fontSize:'clamp(100px, 14vw, 160px)', lineHeight:1,
            color:'var(--accent)', pointerEvents:'none', opacity:.7,
          }}>{p.n}</span>
        </div>

        {/* Text */}
        <div style={{ order:flip ? 1 : 2, paddingLeft:flip ? 0 : 24, paddingRight:flip ? 24 : 0 }}>
          <div style={{ display:'flex', gap:8, marginBottom:20, flexWrap:'wrap' }}>
            <span className="cn-pill">{p.year}</span>
            <span className="cn-pill">{p.tag}</span>
          </div>
          <h3 className="cn-display" style={{ fontSize:'clamp(52px, 7vw, 104px)', margin:'0 0 14px' }}>{p.t}.</h3>
          <p className="cn-italic" style={{ fontSize:'clamp(20px, 2.4vw, 28px)', margin:'0 0 20px', lineHeight:1.15, color:'var(--mute)' }}>{p.sub}</p>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--rule)', paddingTop:20 }}>
            <div className="cn-mono" style={{ opacity:.5 }}>Client · {p.client}</div>
            <div style={{ display:'flex', gap:12 }}>
              {p.link !== '#' && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="cn-pill" style={{ color:'inherit', textDecoration:'none' }}>
                  <FaExternalLinkAlt size={12}/> voir
                </a>
              )}
              <a href={p.github} className="cn-pill" style={{ color:'inherit', textDecoration:'none' }}>
                <FaGithub size={12}/> code
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="cn-section" style={{ padding:'80px 0 120px' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'0 56px 56px', flexWrap:'wrap', gap:24 }}>
        <Reveal>
          <div className="cn-mono" style={{ opacity:.5, marginBottom:12 }}>— 003 / index des travaux</div>
          <h2 className="cn-display" style={{ fontSize:'clamp(72px, 10vw, 148px)', margin:0 }}>
            Selected<br/><span className="cn-italic">work.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="cn-mono" style={{ textAlign:'right', opacity:.6 }}>
            {CONTENT.projects.length.toString().padStart(2,'0')} / {CONTENT.projects.length.toString().padStart(2,'0')}<br/>2024 — 2026
          </div>
        </Reveal>
      </div>

      {CONTENT.projects.map((p, i) => <ProjectRow key={p.id} p={p} i={i} />)}

      <div style={{ borderTop:'1px solid var(--rule)', padding:'48px 56px 0', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
        <span className="cn-mono" style={{ opacity:.5 }}>+ dossiers sous NDA — accès sur demande</span>
        <a href="#contact" onClick={e=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="cn-display" style={{ fontSize:'clamp(32px, 4vw, 52px)', color:'inherit', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:12 }}>
          travaillons ensemble <span className="cn-italic" style={{ color:'var(--accent)' }}>→</span>
        </a>
      </div>
    </section>
  );
}
