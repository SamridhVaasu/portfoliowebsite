import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RoyalLoadingScreen = ({ 
  loadingProgress = 0, 
  currentPhase = 'Initializing',
  isLoading = true,
  onLoadComplete 
}) => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev + 1) % 4);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  const dotString = '.'.repeat(dots);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1425 50%, #0f0a15 100%)',
        }}
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.8, ease: 'easeInOut' } 
        }}
      >
        {/* Subtle animated background gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(218, 165, 32, 0.05) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Main content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Logo/Name */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-[0.15em] mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#daa520] via-[#f4e4c1] to-[#daa520]">
                SAMRIDH SINGH
              </span>
            </h1>
          </motion.div>

          {/* Loading bar - simplified and modern */}
          <motion.div
            className="w-64 md:w-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Bar container */}
            <div className="relative h-0.5 bg-gray-700/30 rounded-full overflow-hidden">
              {/* Progress bar */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#9370db] via-[#daa520] to-[#9370db]"
                style={{
                  width: `${loadingProgress}%`,
                  boxShadow: '0 0 15px rgba(218, 165, 32, 0.5)',
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>

            {/* Percentage text */}
            <motion.div
              className="mt-6 text-center"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-sm text-gray-500 tracking-wider">
                {Math.round(loadingProgress)}
                <span className="text-gray-600">%</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Status text */}
          <motion.div
            className="text-center min-h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.p
              className="text-xs md:text-sm text-gray-400 tracking-[0.1em] uppercase font-light"
              key={currentPhase}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {currentPhase}
              <span className="inline-block w-4">{dotString}</span>
            </motion.p>
          </motion.div>

          {/* Minimal decorative line */}
          <motion.div
            className="flex items-center justify-center space-x-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#daa520]/50" />
            <div className="w-1 h-1 rounded-full bg-[#daa520]/60" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#daa520]/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RoyalLoadingScreen;