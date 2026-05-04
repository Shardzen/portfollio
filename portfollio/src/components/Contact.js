import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { from_name: form.name, from_email: form.email, message: form.message, to_email: 'arthur.pineau@ynov.com' }, 'YOUR_PUBLIC_KEY');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section ref={sectionRef} id="contact" style={{ padding: '128px 24px', position: 'relative', background: 'rgba(9,12,24,0.3)' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} className="grid-bg" />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 500, height: 400, borderRadius: '50%', background: 'rgba(139,92,246,0.04)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1152, margin: '0 auto', position: 'relative' }}>
        <div className="contact-item section-label">
          <span>04 / CONTACT</span>
        </div>

        <div className="contact-grid">
          {/* Left info */}
          <div>
            <div className="contact-item">
              <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#eef0f8', lineHeight: 1.15, marginBottom: 16 }}>
                Travaillons<br /><span className="gradient-text">ensemble.</span>
              </h2>
              <p style={{ fontFamily: 'Inter', fontSize: '0.925rem', color: '#8892a4', lineHeight: 1.7, maxWidth: 300 }}>
                Un projet web, une mission freelance, ou simplement envie d'échanger ? Je réponds sous 24h.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 28 }}>
              {[
                { label: 'Email', value: 'arthur.pineau@ynov.com', href: 'mailto:arthur.pineau@ynov.com', icon: <MailIcon /> },
                { label: 'GitHub', value: '@Shardzen', href: 'https://github.com/Shardzen', icon: <GithubIcon /> },
                { label: 'LinkedIn', value: 'Arthur Pineau', href: 'https://www.linkedin.com/in/arthur-pineau-00a107319/', icon: <LinkedinIcon /> },
              ].map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-item contact-link">
                  <div style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8892a4', transition: 'color 0.2s, background 0.2s, border-color 0.2s' }} className="contact-icon">
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: '#505870', letterSpacing: '0.05em' }}>{c.label.toUpperCase()}</p>
                    <p style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#eef0f8', marginTop: 2 }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 24, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(34,197,94,0.15)', background: 'rgba(34,197,94,0.05)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite', flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: '#4ade80' }}>Disponible pour missions freelance</p>
                <p style={{ fontFamily: 'Inter', fontSize: '0.72rem', color: '#505870', marginTop: 2 }}>Réponse sous 24h garantie</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-item">
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <Field label="NOM" type="text" name="name" value={form.name} onChange={onChange} placeholder="Votre nom" />
                <Field label="EMAIL" type="email" name="email" value={form.email} onChange={onChange} placeholder="votre@email.com" />
              </div>
              <Field label="MESSAGE" type="textarea" name="message" value={form.message} onChange={onChange} placeholder="Décrivez votre projet ou besoin..." rows={6} />

              <button
                type="submit"
                disabled={sending}
                style={{
                  alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 24px', background: '#00d4ff', color: '#05070f',
                  fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.875rem',
                  border: 'none', borderRadius: 10, cursor: sending ? 'not-allowed' : 'pointer',
                  opacity: sending ? 0.6 : 1, transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => !sending && (e.currentTarget.style.background = 'rgba(0,212,255,0.85)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#00d4ff')}
              >
                {sending ? 'Envoi en cours...' : (
                  <>
                    Envoyer le message
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div style={{ padding: '12px 16px', borderRadius: 10, border: '1px solid rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.06)', fontFamily: 'Inter', fontSize: '0.85rem', color: '#4ade80' }}>
                  Message envoyé ! Je vous répondrai rapidement.
                </div>
              )}
              {status === 'error' && (
                <div style={{ padding: '12px 16px', borderRadius: 10, border: '1px solid rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.06)', fontFamily: 'Inter', fontSize: '0.85rem', color: '#f87171' }}>
                  Erreur lors de l'envoi. Contactez-moi directement par email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .contact-grid { display:grid; grid-template-columns:1fr; gap:48px; }
        @media(min-width:1024px) { .contact-grid { grid-template-columns:2fr 3fr; gap:80px; } }
        .contact-link { display:flex; align-items:center; gap:12px; padding:12px 14px; border-radius:12px; border:1px solid rgba(255,255,255,0.05); background:rgba(5,7,15,0.5); text-decoration:none; transition:border-color 0.2s, background 0.2s; }
        .contact-link:hover { border-color:rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); }
        .contact-link:hover .contact-icon { color:#00d4ff!important; background:rgba(0,212,255,0.08)!important; border-color:rgba(0,212,255,0.2)!important; }
        .form-row { grid-template-columns:1fr 1fr; }
        @media(max-width:640px) { .form-row { grid-template-columns:1fr; } }
      `}</style>
    </section>
  );
};

const Field = ({ label, type, name, value, onChange, placeholder, rows }) => {
  const shared = {
    width: '100%', padding: '12px 14px', background: 'rgba(9,12,24,0.8)',
    border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10,
    color: '#eef0f8', fontFamily: 'Inter', fontSize: '0.875rem',
    transition: 'border-color 0.2s, box-shadow 0.2s', outline: 'none',
    boxSizing: 'border-box',
  };
  return (
    <div>
      <label style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: '#505870', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>{label}</label>
      {type === 'textarea' ? (
        <textarea name={name} value={value} onChange={onChange} required placeholder={placeholder} rows={rows} style={{ ...shared, resize: 'none' }} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} required placeholder={placeholder} style={shared} />
      )}
    </div>
  );
};

const MailIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const GithubIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>;
const LinkedinIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;

export default Contact;
