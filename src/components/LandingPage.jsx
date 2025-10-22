import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileSection from "./ProfileSection";
import SocialLinks from "./SocialLinks";

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen text-white bg-navy-950">
      {/* Container */}
      <div className="container mx-auto flex flex-col items-center justify-center h-full px-6 md:px-12 relative z-10 pt-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400">
              Samridh Singh
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-3xl font-medium text-gray-200 mb-16 leading-relaxed"
          >
            Building the Future with <span className="text-purple-400">AI</span>, <span className="text-pink-400">ML</span>, and <span className="text-amber-300">IoT</span>
          </motion.p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-12"
        >
          <ProfileSection />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <SocialLinks />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
