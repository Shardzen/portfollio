import React from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const About = () => {
  const getSkillLevel = (level) => {
    if (level <= 20) return "Débutant";
    if (level <= 50) return "Intermédiaire";
    if (level <= 80) return "Avancé";
    return "Expert";
  };

  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB", level: 30 },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 15 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 20 },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 40 },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 20 },
    { name: "Python", icon: FaPython, color: "#3776AB", level: 23 },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: 12 },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 0 },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 10 },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 5 },
    { name: "Docker", icon: FaDocker, color: "#2496ED", level: 10 },
    { name: "Git", icon: FaGitAlt, color: "#F05032", level: 90 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            <span className="text-6xl">👨‍💻</span>
          </motion.div>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white"
            style={{ textShadow: "0 0 30px rgba(0, 223, 154, 0.3)" }}
          >
            À propos de moi
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionné par le code et l'innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-green-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src="/Arthur-Pineau.jpg"
                alt="Arthur Pineau"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary">▹</span>
                Mon parcours
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Étudiant en informatique à{" "}
                <span className="text-primary font-semibold">Ynov Rennes</span>,
                je me spécialise dans le développement web moderne et les
                technologies full-stack.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Chaque ligne de code est une opportunité de créer quelque chose
                d'unique. Je ne me contente pas de "faire fonctionner" — je
                conçois des expériences numériques
                <span className="text-primary font-semibold">
                  {" "}
                  élégantes, performantes et mémorables
                </span>
                .
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Du concept initial au déploiement final, j'accompagne vos
                projets avec
                <span className="text-white font-semibold">
                  {" "}
                  rigueur, créativité et passion
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="backdrop-blur-xl bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-center"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0, 223, 154, 0.5)",
                }}
              >
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-primary mb-1">
                  Précision
                </div>
                <div className="text-sm text-gray-400">
                  Code propre et optimisé
                </div>
              </motion.div>
              <motion.div
                className="backdrop-blur-xl bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-center"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0, 223, 154, 0.5)",
                }}
              >
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-primary mb-1">
                  Performance
                </div>
                <div className="text-sm text-gray-400">Rapidité maximale</div>
              </motion.div>
              <motion.div
                className="backdrop-blur-xl bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-center"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0, 223, 154, 0.5)",
                }}
              >
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-2xl font-bold text-primary mb-1">
                  Design
                </div>
                <div className="text-sm text-gray-400">Interface moderne</div>
              </motion.div>
              <motion.div
                className="backdrop-blur-xl bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-center"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0, 223, 154, 0.5)",
                }}
              >
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-2xl font-bold text-primary mb-1">
                  Innovation
                </div>
                <div className="text-sm text-gray-400">Tech de pointe</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Technologies & <span className="text-primary">Compétences</span>
          </h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative backdrop-blur-xl bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent
                        className="text-5xl mb-3 transition-all duration-300"
                        style={{ color: skill.color }}
                      />
                    </motion.div>
                    <span className="text-sm font-semibold text-white mb-2">
                      {skill.name}
                    </span>

                    {/* Skill level text */}
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {getSkillLevel(skill.level)}
                    </span>
                  </div>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}22 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
