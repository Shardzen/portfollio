import { Reveal } from './Reveal';
import { CONTENT } from '../content';

export default function Testimonials() {
  return (
    <section className="cn-section" style={{ padding:'140px 56px' }}>
      <Reveal>
        <div className="cn-mono" style={{ opacity:.5, marginBottom:12 }}>— 004 / on en dit</div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="cn-display" style={{ fontSize:'clamp(72px, 10vw, 148px)', margin:'0 0 72px' }}>
          What<br/><span className="cn-italic">they say.</span>
        </h2>
      </Reveal>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:24 }}>
        {CONTENT.testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 90}>
            <figure className="cn-card" style={{
              margin:0, padding:'28px 24px',
              background:'color-mix(in srgb, var(--ink) 4%, var(--paper))',
              border:'1px solid var(--rule)',
              display:'flex', flexDirection:'column', gap:20, minHeight:300,
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span className="cn-display" style={{ fontSize:44, lineHeight:.8, color:'var(--accent)' }}>0{i+1}</span>
                <span className="cn-mono" style={{ opacity:.5 }}>{t.role.split(',')[1]?.trim() || t.role}</span>
              </div>
              <blockquote className="cn-italic" style={{ margin:0, fontSize:'clamp(18px, 2vw, 24px)', lineHeight:1.25, flex:1 }}>
                «&nbsp;{t.q}&nbsp;»
              </blockquote>
              <figcaption style={{ borderTop:'1px solid var(--rule)', paddingTop:12 }}>
                <div className="cn-display" style={{ fontSize:18 }}>{t.who}</div>
                <div className="cn-mono" style={{ opacity:.5, marginTop:4 }}>{t.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
