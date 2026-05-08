import { Reveal } from './Reveal';
import { CONTENT } from '../content';

export default function About() {
  return (
    <section id="studio" className="cn-section" style={{ padding:'140px 56px', borderTop:'1px solid var(--rule)' }}>
      <Reveal>
        <div className="cn-mono" style={{ opacity:.5, marginBottom:12 }}>— 005 / le studio</div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="cn-display" style={{ fontSize:'clamp(72px, 10vw, 148px)', margin:'0 0 72px' }}>
          Studio of<br/><span className="cn-italic">one.</span>
        </h2>
      </Reveal>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'start' }}>
        {/* Profile photo */}
        <Reveal>
          <div style={{ position:'relative' }}>
            <img src="/Arthur-Pineau.jpg" alt="Arthur Pineau" style={{ width:'100%', display:'block', filter:'grayscale(20%)' }}/>
            <div style={{
              position:'absolute', bottom:0, left:0, right:0, height:'40%',
              background:'linear-gradient(to top, var(--paper), transparent)',
              pointerEvents:'none',
            }}/>
          </div>
        </Reveal>

        {/* Bio + timeline */}
        <Reveal delay={130}>
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            <p className="cn-italic" style={{ margin:0, fontSize:'clamp(22px, 2.6vw, 32px)', lineHeight:1.2 }}>{CONTENT.bioFR}</p>
            <p style={{ margin:0, fontSize:16, lineHeight:1.6, color:'var(--mute)' }}>{CONTENT.bioFR2}</p>
            <p style={{ margin:0, fontSize:16, lineHeight:1.6, color:'var(--accent)', fontWeight:500 }}>{CONTENT.bioFR3}</p>

            <hr className="cn-rule-line" style={{ margin:'16px 0 4px' }}/>
            <div className="cn-mono" style={{ opacity:.5, marginBottom:4 }}>chronologie</div>

            <div style={{ display:'flex', flexDirection:'column' }}>
              {CONTENT.timeline.map((e, i) => (
                <div key={i} style={{ display:'grid', gridTemplateColumns:'auto 1fr auto', gap:20, padding:'16px 0', borderBottom:'1px solid var(--rule)', alignItems:'center' }}>
                  <span className="cn-display" style={{ fontSize:32, color:'var(--accent)' }}>{e.y}</span>
                  <div>
                    <div className="cn-display" style={{ fontSize:20 }}>{e.t}</div>
                    <div className="cn-mono" style={{ opacity:.5, marginTop:3 }}>{e.d}</div>
                  </div>
                  <span className="cn-pill">étape</span>
                </div>
              ))}
            </div>

            {/* Skills grid */}
            <div style={{ marginTop:24 }}>
              <div className="cn-mono" style={{ opacity:.5, marginBottom:16 }}>compétences</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16 }}>
                {CONTENT.skills.map((cat, i) => (
                  <div key={i}>
                    <div className="cn-mono" style={{ color:'var(--accent)', marginBottom:8 }}>{cat.cat}</div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                      {cat.items.map((sk, j) => (
                        <span key={j} className="cn-pill" style={{ fontSize:11 }}>{sk}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
