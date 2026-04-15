import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'À propos', id: 'about' },
    { label: 'Projets', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#0a0a0a]/85 border-b border-gray-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white">Arthur</span>
          <span className="text-primary">.</span>
        </motion.button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide relative group"
              whileHover={{ y: -1 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollTo('contact')}
            className="px-5 py-2 bg-primary text-[#0a0a0a] font-semibold text-sm rounded-full hover:bg-green-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
        >
          <motion.span
            className="w-5 h-0.5 bg-white block rounded-full"
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-white block rounded-full"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-white block rounded-full"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden backdrop-blur-xl bg-[#0a0a0a]/95 border-t border-gray-800/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-left py-3 border-b border-gray-800/50 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="mt-3 px-5 py-3 bg-primary text-[#0a0a0a] font-semibold rounded-full"
              >
                Me contacter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
