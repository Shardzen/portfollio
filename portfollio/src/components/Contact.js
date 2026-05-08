import { useState } from 'react';
import { Reveal } from './Reveal';
import { useMagnetic } from '../hooks';
import { CONTENT } from '../content';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ctaRef = useMagnetic(0.28);
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',{ from_name:form.name, from_email:form.email, message:form.message },'YOUR_PUBLIC_KEY');
      setStatus('success');
      setForm({ name:'', email:'', message:'' });
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="cn-section" style={{ padding:'180px 56px 80px', position:'relative', overflow:'hidden' }}>
      <Reveal>
        <div className="cn-mono" style={{ opacity:.5, marginBottom:20 }}>— 006 / on en parle</div>
      </Reveal>

      <Reveal delay={80} y={48}>
        <h2 className="cn-display" style={{ fontSize:'clamp(130px, 18vw, 300px)', margin:0, lineHeight:.84, letterSpacing:'-0.05em' }}>
          Let's<br/>
          <span className="cn-italic" style={{ color:'var(--accent)' }}>build</span><br/>
          something.
        </h2>
      </Reveal>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, marginTop:80, paddingTop:40, borderTop:'1px solid var(--rule)', alignItems:'start' }}>
        {/* Left — direct contact */}
        <Reveal>
          <div className="cn-mono" style={{ opacity:.5, marginBottom:12 }}>email · canal direct</div>
          <a href={`mailto:${CONTENT.email}`} className="cn-display cn-link" style={{ color:'inherit', fontSize:'clamp(24px, 3.2vw, 44px)', lineHeight:1, display:'inline-block', paddingBottom:6 }}>
            {CONTENT.email}
          </a>

          <div style={{ marginTop:28 }}>
            <a ref={ctaRef} href={`mailto:${CONTENT.email}`} className="cn-cta" style={{ display:'inline-flex' }}>
              démarrer un projet
              <svg className="cn-cta-arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </a>
          </div>

          <div style={{ marginTop:32, display:'flex', gap:10, flexWrap:'wrap' }}>
            <span className="cn-pill"><span className="cn-dot"/>réponse &lt; 24h</span>
            <span className="cn-pill">freelance · stage</span>
            <span className="cn-pill">disponible</span>
          </div>
        </Reveal>

        {/* Right — social links */}
        <Reveal delay={110}>
          <div className="cn-mono" style={{ opacity:.5, marginBottom:12 }}>ailleurs</div>
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {CONTENT.social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                className="cn-display"
                style={{ color:'inherit', textDecoration:'none', fontSize:'clamp(36px, 5vw, 60px)', lineHeight:1.1, display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid var(--rule)', padding:'10px 0', transition:'color .25s, padding-left .35s' }}
                onMouseEnter={(e)=>{ e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.paddingLeft='14px'; }}
                onMouseLeave={(e)=>{ e.currentTarget.style.color=''; e.currentTarget.style.paddingLeft='0'; }}
              >
                <span>{s.label}</span>
                <span className="cn-italic" style={{ color:'var(--accent)', fontSize:'.7em' }}>↗</span>
              </a>
            ))}
          </div>

          {/* Mini form */}
          <form onSubmit={handleSubmit} style={{ marginTop:40, display:'flex', flexDirection:'column', gap:12 }}>
            <div className="cn-mono" style={{ opacity:.5, marginBottom:4 }}>ou envoyez un message direct</div>
            {[
              { name:'name',    placeholder:'Votre nom',     type:'text'  },
              { name:'email',   placeholder:'Votre email',   type:'email' },
            ].map((f) => (
              <input key={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]}
                onChange={(e) => setForm(p => ({...p, [f.name]: e.target.value}))} required
                style={{ width:'100%', padding:'12px 16px', background:'color-mix(in srgb, var(--ink) 6%, var(--paper))', border:'1px solid var(--rule)', color:'var(--ink)', fontFamily:'Geist,sans-serif', fontSize:14, outline:'none', borderRadius:0, transition:'border-color .2s' }}
                onFocus={(e)=>e.target.style.borderColor='var(--accent)'}
                onBlur={(e)=>e.target.style.borderColor='var(--rule)'}
              />
            ))}
            <textarea placeholder="Votre message" value={form.message} onChange={(e)=>setForm(p=>({...p,message:e.target.value}))} rows={4} required
              style={{ width:'100%', padding:'12px 16px', background:'color-mix(in srgb, var(--ink) 6%, var(--paper))', border:'1px solid var(--rule)', color:'var(--ink)', fontFamily:'Geist,sans-serif', fontSize:14, outline:'none', borderRadius:0, resize:'vertical', transition:'border-color .2s' }}
              onFocus={(e)=>e.target.style.borderColor='var(--accent)'}
              onBlur={(e)=>e.target.style.borderColor='var(--rule)'}
            />
            <button type="submit" disabled={sending} className="cn-cta" style={{ width:'100%', justifyContent:'center', opacity:sending ? .6 : 1 }}>
              {sending ? 'Envoi…' : 'Envoyer →'}
            </button>
            {status === 'success' && <div className="cn-mono" style={{ color:'#22c55e', textAlign:'center' }}>Message envoyé ✓</div>}
            {status === 'error'   && <div className="cn-mono" style={{ color:'#ef4444', textAlign:'center' }}>Erreur — écrivez directement</div>}
          </form>
        </Reveal>
      </div>

      <hr className="cn-rule-line" style={{ margin:'72px 0 20px' }}/>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
        <span className="cn-mono" style={{ opacity:.5 }}>© 2026 — Arthur Pineau · Rennes / FR</span>
        <span className="cn-mono" style={{ opacity:.5 }}>conçu, codé, durci</span>
        <span className="cn-mono" style={{ opacity:.5, display:'flex', alignItems:'center', gap:8 }}><span className="cn-dot"/>v 03 · cinematic</span>
      </div>
    </section>
  );
}
