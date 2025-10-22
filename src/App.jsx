import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import Portfolio from './components/Portfolio';
import Eyes from './components/Eyes';
import Contacts from './components/Contacts';
import LoadingScreen from './components/LoadingScreen';
import useAssetLoader from './hooks/useAssetLoader';

import LocomotiveScroll from 'locomotive-scroll';
import AboutSection from './components/AboutSection';
import SpaceBackground2 from './components/SpaceBackground2';
import Achievements from './components/Achivements';
import TechnicalSkills from './components/TechnicalSkills';
import BeyondTheCode from './components/BeyondTheCode';



function App() {
  const { 
    isLoading, 
    loadingProgress, 
    loadedAssets, 
    totalAssets, 
    currentPhase 
  } = useAssetLoader();

  // Initialize LocomotiveScroll only after loading is complete
  React.useEffect(() => {
    if (!isLoading) {
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });
      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            loadingProgress={loadingProgress}
            currentPhase={currentPhase}
            loadedAssets={loadedAssets}
            totalAssets={totalAssets}
            isLoading={isLoading}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div data-scroll-container className='w-full min-h-screen text-black bg-black relative'>
          <SpaceBackground2 />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 to-black opacity-40 pointer-events-none" />
          <div className="relative z-10">
            <Navbar />
            <div id="home">
              <LandingPage />
            </div>
            <Marquee />
            <div id="about">
              <AboutSection />
            </div>
            <div id="experience">
              <Eyes />
            </div>
            <div id="achievements">
              <Achievements />
            </div>
            <div id="portfolio">
              <Portfolio />
            </div>
            <div id="skills">
              <TechnicalSkills />
            </div>
            <div id="beyond">
              <BeyondTheCode />
            </div>
            <div id="contact">
              <Contacts />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
