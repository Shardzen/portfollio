export const CONTENT = {
  name: 'Arthur Pineau',
  role: 'Full-stack × Cybersécurité',
  location: 'Rennes — Ynov',
  since: '2022',
  taglineFR: 'Je le construis. Puis j\'essaie de le casser.',

  bioFR: 'Étudiant à Ynov Rennes, je développe des applications web full-stack depuis plusieurs années. Ma passion : construire des produits qui fonctionnent bien — et qui sont sécurisés par conception.',
  bioFR2: 'En parallèle, je me forme activement en cybersécurité — pentest, OSINT, forensics — et je participe à des CTF pour aiguiser mes compétences offensives et défensives.',
  bioFR3: 'Cette double casquette me permet d\'aborder chaque projet avec un regard différent : non seulement « est-ce que ça marche ? », mais aussi « est-ce que ça peut être compromis ? »',

  services: [
    { n: '01', t: 'Développement full-stack', d: 'Applications web sur-mesure, du prototype au déploiement. React, Next.js, Node, TypeScript, Postgres.' },
    { n: '02', t: 'Sécurité applicative', d: 'Audits, pentest, threat modeling. Sécurité par conception, pas après-coup.' },
    { n: '03', t: 'OSINT & forensics', d: 'Investigation numérique, reconnaissance, analyse post-incident. Méthodologie rigoureuse.' },
    { n: '04', t: 'Conseil & formation', d: 'Accompagnement d\'équipes, ateliers CTF, sensibilisation aux bonnes pratiques.' },
  ],

  projects: [
    { id: 'infrarouge', n: '01', t: 'Infrarouge', sub: 'Site web moderne et responsive', client: 'Indépendant', year: '2025', tag: 'React · Tailwind', tone: 'warm', link: 'https://infrarouge.netlify.app/', github: '#' },
    { id: 'vault',     n: '02', t: 'Vault',      sub: 'Coffre-fort numérique · SaaS', client: 'Indépendant', year: '2025', tag: 'Full-stack · Sécurité', tone: 'paper', link: '#', github: '#' },
    { id: 'forge',     n: '03', t: 'Forge',      sub: 'Plateforme CTF interne pour équipe sec', client: 'Club Cyber Ynov', year: '2024', tag: 'Docker · Node', tone: 'ink', link: '#', github: '#' },
    { id: 'atlas',     n: '04', t: 'Atlas',      sub: 'Dashboard OSINT · agrégation multi-sources', client: 'NDA', year: '2025', tag: 'OSINT · Python', tone: 'sand', link: '#', github: '#' },
  ],

  testimonials: [
    { q: 'Arthur a livré ce qu\'aucun prestataire n\'avait su faire avant lui : un produit propre, rapide, et auditable. Ses retours sécurité ont changé notre roadmap.', who: 'Camille R.', role: 'CTO, Atelier Briand' },
    { q: 'Travail chirurgical. Il pense à des angles d\'attaque que je n\'imaginais pas — et il les corrige avant que je m\'en rende compte.', who: 'Léo M.', role: 'Lead Dev, NDA' },
    { q: 'Rare profil qui parle aux deux côtés du firewall. Précis, direct, fiable.', who: 'Sarah V.', role: 'Responsable Sécu, Club Ynov' },
  ],

  timeline: [
    { y: '2022', t: 'Début coding',     d: 'Premières lignes. Tout casser, tout réparer.' },
    { y: '2023', t: 'Premiers projets', d: 'Freelance web — clients locaux, exigence pro.' },
    { y: '2024', t: 'Compétitions CTF', d: 'Capture The Flag — offensif & défensif.' },
    { y: '2025', t: 'Double-stack',     d: 'Sec + Dev. Une seule discipline.' },
    { y: '2026', t: 'Ynov Rennes',      d: 'Approfondissement cyber. Mission : production-grade.' },
  ],

  skills: [
    { cat: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { cat: 'Backend',  items: ['Node.js', 'PostgreSQL', 'Python', 'Docker'] },
    { cat: 'Cybersec', items: ['Pentest', 'OSINT', 'Forensics', 'CTF'] },
    { cat: 'Outils',   items: ['Git', 'Linux', 'Burp Suite', 'Wireshark'] },
  ],

  email: 'arthurpineau44@gmail.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/Shardzen' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/arthur-pineau-00a107319/' },
    { label: 'TryHackMe', url: '#' },
  ],
};
