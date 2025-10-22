import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/samridhvaasu/",
      label: "LinkedIn",
      gradient: "from-violet-500 via-fuchsia-500 to-amber-400",
      delay: 0.2
    },
    {
      icon: FaGithub,
      href: "https://github.com/SamridhVaasu",
      label: "GitHub",
      gradient: "from-violet-500 via-fuchsia-500 to-amber-400", 
      delay: 0.3
    },
    {
      icon: FaEnvelope,
      href: "samridh@iiotengineers.com",
      label: "Email",
      gradient: "from-violet-500 via-fuchsia-500 to-amber-400",
      delay: 0.4
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center gap-6"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: link.delay
          }}
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.9 }}
          className="group relative"
        >
          {/* Animated Glow Effect */}
          <div className={`
            absolute -inset-1 rounded-xl bg-gradient-to-br ${link.gradient}
            opacity-70 group-hover:opacity-100 
            blur group-hover:blur-xl
            transition-all duration-500 animate-pulse
          `} />
          
          {/* Glass Icon Container */}
          <div className="relative flex items-center justify-center w-12 h-12
                        rounded-xl bg-black/40 backdrop-blur-xl
                        border border-white/20 group-hover:border-white/50
                        transition-all duration-300
                        shadow-lg shadow-purple-500/20">
            <link.icon className="text-xl text-white/90 group-hover:text-white
                                transition-all duration-300 transform group-hover:scale-110" />
            
            {/* Floating Label */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2
                           text-sm text-white/0 group-hover:text-white/90
                           transition-all duration-300 whitespace-nowrap
                           tracking-wider font-light">
              {link.label}
            </span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
