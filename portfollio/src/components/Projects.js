import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaReact } from 'react-icons/fa';
import {
  SiNextdotjs, SiSocketdotio, SiRedux, SiTypescript, SiChartdotjs
} from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Infrarouge',
      description: 'Site web moderne et responsive avec animations fluides et expérience utilisateur soignée.',
      link: 'https://infrarouge.netlify.app/',
      github: '#',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      color: '#00df9a',
      icon: <FaReact size={56} />,
      gradient: 'from-[#00df9a]/20 via-[#0a0a0a] to-[#00df9a]/5',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Plateforme de vente en ligne complète avec paiement Stripe intégré et gestion de stock.',
      link: '#',
      github: '#',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      color: '#3b82f6',
      icon: <SiNextdotjs size={56} />,
      gradient: 'from-[#3b82f6]/20 via-[#0a0a0a] to-[#3b82f6]/5',
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif pour la visualisation de données en temps réel.',
      link: '#',
      github: '#',
      tags: ['React', 'Chart.js', 'Firebase'],
      color: '#8b5cf6',
      icon: <SiChartdotjs size={56} />,
      gradient: 'from-[#8b5cf6]/20 via-[#0a0a0a] to-[#8b5cf6]/5',
    },
    {
      id: 4,
      title: 'Social Network',
      description: 'Réseau social avec messagerie instantanée en temps réel via WebSockets.',
      link: '#',
      github: '#',
      tags: ['React', 'Socket.io', 'Node.js'],
      color: '#ec4899',
      icon: <SiSocketdotio size={56} />,
      gradient: 'from-[#ec4899]/20 via-[#0a0a0a] to-[#ec4899]/5',
    },
    {
      id: 5,
      title: 'Portfolio Builder',
      description: 'Générateur de portfolio personnalisé avec éditeur visuel et export instantané.',
      link: '#',
      github: '#',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      color: '#f59e0b',
      icon: <SiTypescript size={56} />,
      gradient: 'from-[#f59e0b]/20 via-[#0a0a0a] to-[#f59e0b]/5',
    },
    {
      id: 6,
      title: 'Task Manager',
      description: 'Application de gestion de tâches collaborative avec synchronisation temps réel.',
      link: '#',
      github: '#',
      tags: ['React', 'Redux', 'PostgreSQL'],
      color: '#10b981',
      icon: <SiRedux size={56} />,
      gradient: 'from-[#10b981]/20 via-[#0a0a0a] to-[#10b981]/5',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/8 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Mes <span className="text-primary">Projets</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Chaque projet est une aventure. Voici quelques réalisations où code et design s'harmonisent.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-gray-600 transition-all duration-400 h-full flex flex-col"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project visual header */}
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(${project.color}44 1px, transparent 1px), linear-gradient(90deg, ${project.color}44 1px, transparent 1px)`,
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Center icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <motion.div
                      style={{ color: project.color }}
                      className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.icon}
                    </motion.div>
                    <span
                      className="text-xl font-bold tracking-tight"
                      style={{ color: project.color }}
                    >
                      {project.title}
                    </span>
                  </div>

                  {/* Hover overlay with links */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-full border-2 text-white hover:text-[#0a0a0a] transition-colors duration-300"
                      style={{ borderColor: project.color, backgroundColor: 'transparent' }}
                      whileHover={{ scale: 1.1, backgroundColor: project.color }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt size={16} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-full border-2 border-gray-500 text-white hover:border-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={16} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-800 text-gray-400 border border-gray-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom color accent */}
                <div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: project.color }}
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
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Vous avez un projet en tête ?</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-[#0a0a0a] font-bold rounded-full hover:bg-green-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Discutons-en ensemble
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
