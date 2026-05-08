import { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeSection from './components/MarqueeSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Quote from './components/Quote';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Cursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <MarqueeSection />
        <Services />
        <Projects />
        <Quote />
        <Testimonials />
        <About />
        <Contact />
      </main>
    </>
  );
}
