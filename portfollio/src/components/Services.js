import { Reveal } from './Reveal';
import { CONTENT } from '../content';

export default function Services() {
  return (
    <section id="about" className="cn-section" style={{ padding:'140px 56px 100px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'200px 1fr', gap:64, marginBottom:80 }}>
        <Reveal><div className="cn-mono" style={{ opacity:.55, paddingTop:8 }}>— 002<br/>doctrine</div></Reveal>
        <Reveal delay={120}>
          <h2 className="cn-display" style={{ fontSize:'clamp(72px, 10vw, 148px)', margin:0, maxWidth:1100 }}>
            Construire<br/>comme un<br/><span className="cn-italic" style={{ color:'var(--accent)' }}>attaquant.</span>
          </h2>
        </Reveal>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:20 }}>
        {CONTENT.services.map((s, i) => (
          <Reveal key={i} delay={i * 90}>
            <article className="cn-card" style={{
              padding:'32px 24px',
              borderTop:'2px solid var(--ink)',
              minHeight:260,
              position:'relative',
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
                <span className="cn-display" style={{ fontSize:56, lineHeight:.8, color:'var(--accent)' }}>{s.n}</span>
                <span className="cn-pill"><span className="cn-dot"/>actif</span>
              </div>
              <h3 className="cn-display" style={{ fontSize:28, margin:'0 0 12px' }}>{s.t}</h3>
              <p style={{ margin:0, fontSize:14, lineHeight:1.6, color:'var(--mute)' }}>{s.d}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
