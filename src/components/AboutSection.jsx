import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpLong, FaGraduationCap } from 'react-icons/fa6';

function AboutSection() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 text-white">
      {/* Left Column - Profile Image */}
      <motion.div 
        className="lg:w-1/2 flex justify-center items-center p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          {/* Animated Background Elements */}
          <motion.div
            className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-amber-300/20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-lg"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Main Video Container */}
          <motion.div 
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-300 animate-spin-slow" />
            <video
              src="./images/about.MP4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-full object-cover border-4 border-black relative z-10"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Column - Content */}
      <div className="lg:w-1/2 space-y-10 p-8">
        {/* Header Section */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-300 text-xl font-mono tracking-wider"
          >
            &lt; Hello World /&gt;
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 drop-shadow-lg">
              Samridh Singh
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <div className="h-[2px] w-8 bg-gradient-to-r from-purple-400 to-transparent" />
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
              AI & IoT Developer
            </h2>
          </motion.div>
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-amber-300/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
          <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <p className="text-xl text-gray-200 leading-relaxed font-light">
              Pioneering the future of technology through innovative AI and IoT solutions. 
              As the <span className="text-purple-400 font-medium">Technical Lead for GDG</span> on Campus 
              and an <span className="text-pink-400 font-medium">SIH 2024 finalist</span>, I craft 
              cutting-edge industrial IoT applications that bridge the gap between imagination and reality. 
              My expertise lies in creating seamless integrations where technology meets human intuition.
            </p>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-amber-300/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
          <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-purple-400" />
              Education
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-xl font-medium text-purple-300">B.Tech in Industrial Internet of Things</h4>
                <p className="text-gray-300">Guru Gobind Singh Indraprastha University</p>
                <p className="text-gray-400">2023 - 2027</p>
              </li>
              <li>
                <h4 className="text-xl font-medium text-purple-300">Higher Secondary Education</h4>
                <p className="text-gray-300">Modern Convent School, Dwarka, New Delhi</p>
                <p className="text-gray-400">Graduated 2023, Class 12th - 93%, Class 10th - 95.6%</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://drive.google.com/file/d/1-L9g34oyzerwHydEai6VsIuLZuiHZR_P/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 rounded-xl overflow-hidden shadow-lg"
          >
            <span className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative z-10 text-white font-medium tracking-wide">
              Explore Resume
            </span>
            <FaArrowUpLong 
              className="relative z-10 w-5 h-5 text-white transform rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;

