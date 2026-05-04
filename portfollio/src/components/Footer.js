const Footer = () => (
  <footer style={{ padding: '40px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <div style={{ maxWidth: 1152, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
      <div>
        <p style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.1rem', color: '#eef0f8' }}>
          AP<span style={{ color: '#00d4ff' }}>.</span>
        </p>
        <p style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#505870', marginTop: 4 }}>Développeur Web · Cybersécurité</p>
      </div>

      <div style={{ display: 'flex', gap: 24 }}>
        {[
          { label: 'GitHub', href: 'https://github.com/Shardzen' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arthur-pineau-00a107319/' },
          { label: 'Email', href: 'mailto:arthur.pineau@ynov.com' },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{ fontFamily: 'Inter', fontSize: '0.825rem', color: '#505870', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#eef0f8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#505870')}
          >
            {l.label}
          </a>
        ))}
      </div>

      <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#505870' }}>
        © 2025 Arthur Pineau
      </p>
    </div>
  </footer>
);

export default Footer;
