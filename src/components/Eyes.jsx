'use client';

import React, { useEffect, useState } from 'react';
import { motion, stagger } from 'framer-motion';

export default function Experience() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    let animationFrameId;
    const animate = () => {
      if (windowSize.width <= 768) { // Changed breakpoint to 768px for mobile
        const time = Date.now() * 0.002;
        const x = Math.sin(time * 0.5) * 20 + Math.sin(time * 0.2) * 15; // Increased animation range
        const y = Math.cos(time * 0.4) * 15 + Math.sin(time * 0.3) * 12;

        setRotate({
          x: y * 1.2, // Increased rotation effect
          y: x * 1.2,
        });

        setEyePosition({
          x: x,
          y: y,
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      if (windowSize.width > 768) {
        const eyes = document.querySelectorAll('.eye');

        eyes.forEach((eye) => {
          const rect = eye.getBoundingClientRect();
          const eyeCenterX = rect.left + rect.width / 2;
          const eyeCenterY = rect.top + rect.height / 2;

          const deltaX = e.clientX - eyeCenterX;
          const deltaY = e.clientY - eyeCenterY;
          const angle = Math.atan2(deltaY, deltaX);

          const maxRotation = 25; // Increased max rotation
          const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), rect.width);
          const rotationScale = distance / rect.width;

          const rotateY = Math.cos(angle) * maxRotation * rotationScale;
          const rotateX = -Math.sin(angle) * maxRotation * rotationScale;

          const maxPupilOffset = rect.width / 4; // Increased pupil movement range
          const pupilX = Math.cos(angle) * Math.min(distance / 2, maxPupilOffset);
          const pupilY = Math.sin(angle) * Math.min(distance / 2, maxPupilOffset);

          setRotate({ x: rotateX, y: rotateY });
          setEyePosition({ x: pupilX, y: pupilY });
        });
      }
    };

    // Touch event handler for mobile
    const handleTouch = (e) => {
      if (windowSize.width <= 768) {
        const touch = e.touches[0];
        handleMouseMove(touch);
      }
    };

    if (windowSize.width <= 768) {
      animate();
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener('touchmove', handleTouch);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  // Rest of your experiences data...
  const experiences = [
    {
      title: 'AI-ML Co-lead',
      company: 'Google Developer Group - Campus Chapter',
      date: 'Jan 2023 - Present',
      description:
        'Organized hands-on workshops, led technical projects, and fostered innovation in AI and ML at the university level.',
      icon: '🤖',
      gradient: "from-violet-400 via-fuchsia-400 to-amber-300",
      skills: ['Machine Learning', 'Workshop Leadership', 'Project Management']
    },
    {
      title: 'Image Processing Intern',
      company: 'Institution of Electronics and Telecommunication Engineers',
      date: 'Aug 2024 - Sep 2024',
      description:
        'Developed real-time object detection models using OpenCV, focusing on image processing optimization and efficiency.',
      icon: '📷',
      gradient: "from-purple-400 via-pink-400 to-amber-300",
      skills: ['OpenCV', 'Computer Vision', 'Python']
    },
    {
      title: 'IoT Intern',
      company: 'Pantechelearning',
      date: 'Jun 2024 - Jul 2024',
      description:
        'Built IoT systems utilizing Arduino and microcontrollers, integrating sensor data for real-time applications.',
      icon: '🔌',
      gradient: "from-pink-400 via-fuchsia-400 to-purple-400",
      skills: ['Arduino', 'IoT', 'Sensor Integration']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen text-white py-10 md:py-20 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('/grid.svg')]"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-violet-300 text-lg md:text-xl font-mono tracking-wider"
          >
            &lt; Experience /&gt;
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 drop-shadow-lg">
              Journey
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 justify-center mt-4"
          >
            <div className="h-[2px] w-8 bg-gradient-to-r from-violet-400 to-transparent" />
            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light tracking-wide">
              Path to excellence
            </h2>
            <div className="h-[2px] w-8 bg-gradient-to-l from-violet-400 to-transparent" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
          {/* Eyes Section - Responsive sizing */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="flex items-center justify-center lg:sticky lg:top-20 mb-10 lg:mb-0"
          >
            <motion.div 
              className="relative flex flex-col items-center perspective-[1000px]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex gap-4 md:gap-8 mb-4"
                variants={itemVariants}
              >
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={`brow-${i}`}
                    className="w-[25vw] md:w-[14vw] h-[4vw] md:h-[2vw] bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 rounded-full"
                    animate={{
                      rotateZ: rotate.y * 0.2,
                      translateY: rotate.x * 0.2,
                    }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  />
                ))}
              </motion.div>
              <motion.div 
                className="flex gap-4 md:gap-8"
                variants={itemVariants}
              >
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="eye flex items-center justify-center w-[22vw] md:w-[12vw] h-[22vw] md:h-[12vw] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400"
                    animate={{
                      rotateX: rotate.x,
                      rotateY: rotate.y,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="relative w-2/3 h-2/3 rounded-full bg-white shadow-inner overflow-hidden">
                      <motion.div
                        className="absolute w-8 md:w-8 h-8 md:h-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400"
                        animate={{
                          x: eyePosition.x,
                          y: eyePosition.y,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          mass: 0.5,
                        }}
                        style={{
                          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="w-[8vw] md:w-[4vw] h-[10vw] md:h-[6vw] bg-gradient-to-r from-purple-500/70 via-pink-500/70 to-amber-400/70 rounded-b-full mt-4"
                animate={{
                  rotateX: rotate.x * 0.2,
                  rotateY: rotate.y * 0.2,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                variants={itemVariants}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Timeline Experience - Mobile responsive */}
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Animated timeline line */}
            <motion.div 
              className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-500 via-pink-500 to-amber-400"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <motion.div 
                className="absolute inset-0 blur-sm bg-gradient-to-b from-violet-500 via-pink-500 to-amber-400"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <div className="space-y-10 md:space-y-20">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative pl-12"
                >
                  {/* Timeline node with pulsing effect */}
                  <motion.div 
                    className="absolute left-2 top-8 w-4 h-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 blur-sm" />
                  </motion.div>
                  
                  <motion.div 
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }} // Added touch feedback
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5`}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="text-3xl md:text-4xl"
                          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                          whileTap={{ scale: 0.9 }} // Added touch feedback
                          transition={{ duration: 0.5 }}
                        >
                          {exp.icon}
                        </motion.div>
                        <div>
                          <motion.h3 
                            className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${exp.gradient} text-transparent bg-clip-text`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <motion.p 
                            className="text-base md:text-lg text-gray-300 font-medium"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                          >
                            {exp.company}
                          </motion.p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <motion.p 
                          className="text-xs md:text-sm text-gray-400 font-light"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          {exp.date}
                        </motion.p>
                        <motion.p 
                          className="text-sm md:text-base text-gray-300 leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                        >
                          {exp.description}
                        </motion.p>
                        
                        <motion.div 
                          className="flex flex-wrap gap-2 mt-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 }}
                        >
                          {exp.skills.map((skill, i) => (
                            <motion.span 
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }} // Added touch feedback
                              viewport={{ once: true }}
                              transition={{ delay: 0.7 + (i * 0.1) }}
                              className={`px-3 py-1 text-xs md:text-sm rounded-full bg-gradient-to-r ${exp.gradient} bg-opacity-10 border border-white/10`}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
