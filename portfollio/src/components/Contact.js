import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Remplacez ces valeurs par vos propres clés EmailJS
      // Inscrivez-vous sur https://www.emailjs.com/ pour obtenir ces clés
      await emailjs.send(
        'YOUR_SERVICE_ID', // Remplacez par votre Service ID
        'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'arthur.pineau@ynov.com'
        },
        'YOUR_PUBLIC_KEY' // Remplacez par votre Public Key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            <span className="text-6xl">💬</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white"
              style={{ textShadow: '0 0 30px rgba(0, 223, 154, 0.3)' }}>
            Parlons ensemble
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une idée brillante ? Un projet ambitieux ?<br />
            <span className="text-primary font-semibold">Transformons-le en réalité.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulaire */}
          <motion.div
            className="backdrop-blur-xl bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-primary text-white transition-all duration-300 peer placeholder-transparent"
                  placeholder="Votre nom"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-6 -top-3 text-sm text-primary bg-gray-900 px-2 transition-all duration-300"
                >
                  Votre nom ✨
                </label>
                <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 pointer-events-none"></div>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-primary text-white transition-all duration-300 peer placeholder-transparent"
                  placeholder="Votre email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-6 -top-3 text-sm text-primary bg-gray-900 px-2 transition-all duration-300"
                >
                  Votre email 📧
                </label>
                <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 pointer-events-none"></div>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-primary text-white resize-none transition-all duration-300 peer placeholder-transparent"
                  placeholder="Votre message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-6 -top-3 text-sm text-primary bg-gray-900 px-2 transition-all duration-300"
                >
                  Votre message 💭
                </label>
                <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 pointer-events-none"></div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-5 bg-gradient-to-r from-primary to-green-400 text-dark font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full"
                      />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              {/* Message de statut */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-center"
                >
                  <span className="text-2xl mb-2 block">✅</span>
                  Message envoyé avec succès ! Je vous répondrai rapidement.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-400 text-center"
                >
                  <span className="text-2xl mb-2 block">❌</span>
                  Une erreur s'est produite. Contactez-moi directement par email.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-xl bg-gray-900/30 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🚀</span>
                Pourquoi me contacter ?
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span>Développement web sur mesure et performant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span>Design moderne et expérience utilisateur optimale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span>Expertise en React, Next.js et technologies modernes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span>Accompagnement de A à Z sur vos projets</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:arthur.pineau@ynov.com"
                className="flex items-center gap-4 p-5 backdrop-blur-xl bg-gray-900/30 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">📧</span>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white group-hover:text-primary transition-colors duration-300 font-medium">
                    arthur.pineau@ynov.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/arthur-pineau-00a107319/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 backdrop-blur-xl bg-gray-900/30 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">💼</span>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-white group-hover:text-primary transition-colors duration-300 font-medium">
                    Arthur Pineau
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/Shardzen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 backdrop-blur-xl bg-gray-900/30 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🐙</span>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-white group-hover:text-primary transition-colors duration-300 font-medium">
                    @Shardzen
                  </p>
                </div>
              </motion.a>
            </div>

            <motion.div
              className="backdrop-blur-xl bg-gradient-to-r from-primary/10 to-green-400/10 p-6 rounded-2xl border border-primary/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-center text-white font-medium">
                ⚡ Disponible pour des projets freelance
              </p>
              <p className="text-center text-gray-400 text-sm mt-2">
                Réponse sous 24h garantie
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;