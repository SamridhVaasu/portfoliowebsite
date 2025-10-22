import React from 'react';
import { motion } from 'framer-motion';

const ProfileSection = () => {
  return (
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

      {/* Profile Image */}
      <motion.img
        src="public/images/profilepicture.jpeg"
        alt="Samridh Singh"
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
  );
};

export default ProfileSection;
