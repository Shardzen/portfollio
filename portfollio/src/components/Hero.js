import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="text-center relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.span
            className="inline-block text-7xl mb-4"
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            👋
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-white">Arthur</span>
          <span className="text-primary" style={{ textShadow: '0 0 40px rgba(0, 223, 154, 0.6)' }}>.</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Développeur Web <span className="text-primary font-semibold">Full Stack</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Je transforme vos <span className="text-primary font-semibold">idées</span> en expériences web
          <br className="hidden md:block" />
          <span className="text-white font-semibold">exceptionnelles</span> et <span className="text-primary font-semibold">performantes</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-10 py-5 bg-gradient-to-r from-primary to-green-400 text-dark font-bold text-lg rounded-full overflow-hidden"
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Démarrer un projet
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-primary"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="px-10 py-5 bg-transparent border-2 border-primary text-primary font-semibold text-lg rounded-full hover:bg-primary hover:text-dark transition-all duration-300"
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            En savoir plus
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-row items-center justify-center gap-0 max-w-xl mx-auto mt-20 backdrop-blur-xl bg-gray-900/30 border border-gray-800 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { value: '3+', label: "Années d'exp." },
            { value: '15+', label: 'Projets' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className={`flex-1 text-center py-6 px-4 ${i < 2 ? 'border-r border-gray-800' : ''}`}>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-primary mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.15, type: 'spring' }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
