import { motion } from "framer-motion";
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-3xl bg-gradient-to-br from-navy-900 via-navy-900 to-navy-900">
      <div className='border-t border-b border-amber-100/20 flex overflow-hidden whitespace-nowrap'>
        
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, repeatType: "loop", duration: 15 }} 
          className="text-[12vw] md:text-[16vw] leading-none font-sans font-semibold pr-20 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200"> 
          WE ARE IIoT ENGINEERS
        </motion.h1>
        
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, repeatType: "loop", duration: 15 }} 
          className="text-[12vw] md:text-[16vw] leading-none font-sans font-semibold pr-20 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
          WE ARE IIoT ENGINEERS
        </motion.h1>
        
      </div>
    </div>
  );
}

export default Marquee;
