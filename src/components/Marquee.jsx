import { motion } from "framer-motion";
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-3xl bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800">
      <div className='border-t border-b border-gray-700 flex overflow-hidden whitespace-nowrap'>
        
        <motion.h1 
          data-scroll
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, repeatType: "loop", duration: 30 }} 
          className="text-[12vw] md:text-[16vw] leading-none font-sans font-semibold pr-20 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-pink-400"> 
          Hackathon Winner | SIH Finalist | Black Belt | AI-ML Co-lead | IIoT & Robotics Enthusiast
        </motion.h1>
        
        <motion.h1 
          data-scroll
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, repeatType: "loop", duration: 30 }} 
          className="text-[12vw] md:text-[16vw] leading-none font-sans font-semibold pr-20 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-pink-400">
          Hackathon Winner | SIH Finalist | Black Belt | IIoT & Robotics Enthusiast
        </motion.h1>
        
      </div>
    </div>
  );
}

export default Marquee;
