import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Beyond Code", href: "#beyond" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <motion.div
      className={`fixed z-[900] w-full px-6 md:px-20 py-4 flex justify-between items-center transition-all duration-500
        ${show ? 'top-0' : '-top-24'}
        ${isScrolled 
          ? 'bg-gradient-to-r from-navy-900/95 via-navy-800/95 to-navy-900/95 backdrop-blur-md'
          : 'bg-transparent'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="logo cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src="./images/iiotengineers_logo.png"
          alt="IIoT Engineers Logo"
          className="h-10 w-auto object-contain"
        />
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((item, index) => (
          <motion.a
            key={index}
            className={`relative text-base font-medium transition-colors duration-300 
              ${isScrolled ? 'text-gray-300' : 'text-white'}
              hover:text-purple-400
              after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] 
              after:bg-gradient-to-r after:from-purple-400 after:via-pink-400 after:to-amber-300 
              after:transition-all after:duration-300 hover:after:w-full`}
            href={item.href}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`md:hidden focus:outline-none
          ${isScrolled ? 'text-gray-300' : 'text-white'}
          hover:text-purple-400`}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-col justify-between w-6 h-6">
          <span
            className={`block h-0.5 bg-current transition-transform ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-current transition-opacity ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-current transition-transform ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </div>
      </motion.button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-full left-0 w-full bg-gradient-to-br from-navy-900/95 to-navy-900/95 backdrop-blur-lg md:hidden rounded-b-lg shadow-lg border-t border-purple-500/20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((item, index) => (
            <motion.a
              key={index}
              className="block px-6 py-4 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              href={item.href}
              onClick={() => setMenuOpen(false)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default Navbar;