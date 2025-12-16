import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Infrarouge',
      description: 'Site web moderne et responsive avec animations fluides',
      image: 'https://placehold.co/800x600/1a1a1a/00df9a?text=Infrarouge',
      link: 'https://infrarouge.netlify.app/',
      github: '#',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      color: '#00df9a'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Plateforme de vente en ligne complète avec paiement intégré',
      image: 'https://placehold.co/800x600/1a1a1a/3b82f6?text=E-Commerce',
      link: '#',
      github: '#',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      color: '#3b82f6'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif pour visualisation de données',
      image: 'https://placehold.co/800x600/1a1a1a/8b5cf6?text=Dashboard',
      link: '#',
      github: '#',
      tags: ['React', 'Chart.js', 'Firebase'],
      color: '#8b5cf6'
    },
    {
      id: 4,
      title: 'Social Network',
      description: 'Réseau social avec messagerie en temps réel',
      image: 'https://placehold.co/800x600/1a1a1a/ec4899?text=Social+Network',
      link: '#',
      github: '#',
      tags: ['React', 'Socket.io', 'Node.js'],
      color: '#ec4899'
    },
    {
      id: 5,
      title: 'Portfolio Builder',
      description: 'Générateur de portfolio personnalisé et moderne',
      image: 'https://placehold.co/800x600/1a1a1a/f59e0b?text=Portfolio+Builder',
      link: '#',
      github: '#',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      color: '#f59e0b'
    },
    {
      id: 6,
      title: 'Task Manager',
      description: 'Application de gestion de tâches collaborative',
      image: 'https://placehold.co/800x600/1a1a1a/10b981?text=Task+Manager',
      link: '#',
      github: '#',
      tags: ['React', 'Redux', 'PostgreSQL'],
      color: '#10b981'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            <span className="text-6xl">💼</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white"
              style={{ textShadow: '0 0 30px rgba(0, 223, 154, 0.3)' }}>
            Mes Projets
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Chaque projet raconte une histoire.<br />
            <span className="text-primary font-semibold">Découvrez mes créations</span> où code et design s'harmonisent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gray-900/30 border border-gray-800 hover:border-primary/50 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Hover overlay with links */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-primary rounded-full text-dark hover:bg-white transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-800 rounded-full text-white hover:bg-white hover:text-dark transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-primary/30 transition-colors duration-300"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'rgba(0, 223, 154, 0.1)',
                          color: '#00df9a'
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${project.color}15 0%, transparent 70%)`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-400 mb-8">
            Vous avez un projet en tête ?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-primary to-green-400 text-dark font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex items-center gap-2">
              Discutons-en ensemble
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;