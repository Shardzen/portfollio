import { Reveal } from './Reveal';

export default function Quote() {
  return (
    <section className="cn-section" style={{ padding:'140px 56px', background:'var(--ink)', color:'var(--paper)' }}>
      <Reveal>
        <div className="cn-mono" style={{ opacity:.5, marginBottom:28 }}>— intermède</div>
      </Reveal>
      <Reveal delay={100}>
        <p className="cn-display" style={{ fontSize:'clamp(52px, 8vw, 112px)', margin:'0 0 72px', lineHeight:.9, maxWidth:1280 }}>
          «&nbsp;Un produit sécurisé n'est pas un produit avec une couche en plus. C'est un produit avec une <span className="cn-italic" style={{ color:'var(--accent)' }}>colonne vertébrale</span> différente.&nbsp;»
        </p>
      </Reveal>
      <Reveal delay={300}>
        <div style={{ display:'flex', justifyContent:'space-between', paddingTop:28, borderTop:'1px solid rgba(244,241,234,.18)', flexWrap:'wrap', gap:12 }}>
          <div className="cn-mono" style={{ opacity:.5 }}>— Arthur Pineau</div>
          <div className="cn-mono" style={{ opacity:.5 }}>Studio note · 002 / 014</div>
        </div>
      </Reveal>
    </section>
  );
}
