export default function MarqueeSection() {
  const items = ['Full-stack','×','Cybersécurité','★','Pentest','×','OSINT','★','Forensics','×','Secure-by-design','★','CTF','×','Rennes','★','Freelance','×','Disponible'];
  return (
    <div className="cn-section" style={{ borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)', padding:'36px 0', overflow:'hidden' }}>
      <div className="cn-marquee">
        {[0,1].map((k) => (
          items.map((s,i) => (
            <span key={`${k}-${i}`} className="cn-display" style={{
              fontSize:'clamp(56px, 8vw, 88px)',
              whiteSpace:'nowrap',
              color:(s==='×'||s==='★') ? 'var(--accent)' : 'inherit',
              fontStyle: s==='×' ? 'italic' : 'normal',
            }}>{s}</span>
          ))
        ))}
      </div>
    </div>
  );
}
