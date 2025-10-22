'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa6';

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/samridhvaasu/", label: "LinkedIn", hoverColor: "hover:text-pink-400" },
  { icon: FaGithub, href: "https://github.com/SamridhVaasu", label: "GitHub", hoverColor: "hover:text-purple-400" },
];

function Contacts() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row text-white relative bg-navy-950">
      {/* Left side content */}
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 animate-text-glow">
          Let's Connect
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Reach out via email or social platforms.
        </p>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center mb-6"
        >
          <FaEnvelope className="text-purple-400 mr-2 hover:text-amber-300 transition-all duration-300" />
          <a
            href="mailto:samridh@iiotengineers.com"
            className="text-purple-400 hover:text-amber-300 transition-all duration-300 underline"
          >
            samridh@iiotengineers.com
          </a>
        </motion.div>
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className={`text-3xl text-gray-300 transition-all duration-300 ${link.hoverColor}`}
              aria-label={link.label}
            >
              <link.icon />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Right side profile section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="relative w-64 h-64 md:w-80 md:h-80 mb-8 flex items-center justify-center"
          >
            {/* Rotating Gradient Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-300 opacity-40"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Logo Image */}
            <motion.img
              src="./images/iiotengineers_logo.png"
              alt="IIoT Engineers Logo"
              className="rounded-full shadow-lg object-cover w-full h-full z-10 border-4 border-purple-400"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Glowing Outline */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent"
              animate={{
                boxShadow: [
                  "0px 0px 15px 3px rgba(168, 85, 247, 0.3)",
                  "0px 0px 25px 5px rgba(168, 85, 247, 0.5)", 
                  "0px 0px 15px 3px rgba(168, 85, 247, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contacts;
