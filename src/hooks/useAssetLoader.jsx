import { useState, useEffect } from 'react';

const useAssetLoader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAssets, setLoadedAssets] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('Initializing');

  useEffect(() => {
    const loadAssets = async () => {
      // Define all assets to preload
      const imageAssets = [
        '/images/profile_picture.png',
        '/images/profilepicture.jpeg',
        '/images/project-1.png',
        '/images/project-2.jpeg',
        '/images/cyberguardians.jpeg',
        '/images/cyberhackathon.JPG',
        '/images/extracurricular.JPG',
        '/images/gdg-tech-lead.jpg',
        '/images/hackathons.JPG',
        '/images/iiotengineers_logo.png',
        '/images/sih.jpg',
        '/images/FullSizeRender.jpg',
      ];

      const videoAssets = [
        '/images/about.MP4',
      ];

      const fontAssets = [
        // Add custom fonts if any
      ];

      const allAssets = [...imageAssets, ...videoAssets, ...fontAssets];
      setTotalAssets(allAssets.length);

      // Phase 1: Initialize
      setCurrentPhase('Initializing Core');
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoadingProgress(10);

      // Phase 2: Load Images
      setCurrentPhase('Loading Images');
      const imagePromises = imageAssets.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setLoadedAssets(prev => {
              const newCount = prev + 1;
              const progress = Math.floor((newCount / allAssets.length) * 60) + 10;
              setLoadingProgress(progress);
              return newCount;
            });
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${src}`);
            setLoadedAssets(prev => prev + 1);
            resolve(); // Continue even if some images fail
          };
          img.src = src;
        });
      });

      await Promise.all(imagePromises);
      setLoadingProgress(70);

      // Phase 3: Load Videos
      setCurrentPhase('Loading Media');
      const videoPromises = videoAssets.map((src) => {
        return new Promise((resolve, reject) => {
          const video = document.createElement('video');
          video.onloadeddata = () => {
            setLoadedAssets(prev => {
              const newCount = prev + 1;
              const progress = Math.floor((newCount / allAssets.length) * 15) + 70;
              setLoadingProgress(progress);
              return newCount;
            });
            resolve();
          };
          video.onerror = () => {
            console.warn(`Failed to load video: ${src}`);
            setLoadedAssets(prev => prev + 1);
            resolve(); // Continue even if some videos fail
          };
          video.src = src;
          video.preload = 'auto';
        });
      });

      await Promise.all(videoPromises);
      setLoadingProgress(85);

      // Phase 4: Load Fonts
      setCurrentPhase('Optimizing Performance');
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      setLoadingProgress(95);

      // Phase 5: Finalize
      setCurrentPhase('Finalizing...');
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoadingProgress(100);

      // Hold at 100% briefly before completing
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsLoading(false);
    };

    loadAssets();
  }, []);

  return {
    isLoading,
    loadingProgress,
    loadedAssets,
    totalAssets,
    currentPhase,
  };
};

export default useAssetLoader;
