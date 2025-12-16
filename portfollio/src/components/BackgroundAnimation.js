import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const stars = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 1920, // Using a fixed width
    y: Math.random() * 1080, // Using a fixed height
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
  })), []); // Empty dependency array means this will only be calculated once

  const particles = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    id: i,
    startX: Math.random() * 1920,
    startY: Math.random() * 1080,
    endX: Math.random() * 1920,
    endY: Math.random() * 1080,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  })), []); // Empty dependency array means this will only be calculated once

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Moving particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `linear-gradient(45deg, #00df9a, #6366f1)`,
            boxShadow: '0 0 10px rgba(0, 223, 154, 0.5)',
          }}
          initial={{
            x: `${particle.startX}vw`,
            y: `${particle.startY}vh`,
            opacity: 0,
          }}
          animate={{
            x: `${particle.endX}vw`,
            y: `${particle.endY}vh`,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
