"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AchievementCard = ({ achievement, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const imagePaths = [
    "./images/cyberhackathon.JPG",
    "./images/sih.jpg",
    "./images/gdg-tech-lead.jpg",
  ];

  const linkedinLinks = [
    "https://www.linkedin.com/feed/update/urn:li:activity:7165026061586558976/",
    "https://www.linkedin.com/posts/samridhvaasu_sih2024-innovation-ai-activity-7270115511642796032-6Ssf?utm_source=share&utm_medium=member_desktop", 
    "https://www.linkedin.com/posts/samridhvaasu_gdg-leadership-ai-activity-7368632721318866946-3Zu8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY68QwBAuPULW9XA7kKaS0qWND1j4wgEOk"
  ];

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, y }}
      className="w-full h-full"
    >
      <div className="relative group h-full bg-gradient-to-br from-gray-800/70 via-gray-900/50 to-gray-800/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:shadow-amber-400/30 transition-shadow duration-500">
        <div className="relative overflow-hidden rounded-2xl mb-6">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 opacity-40"
            whileHover={{ opacity: 0.8 }}
          />
          <img
            src={imagePaths[index]}
            alt={achievement.title}
            className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-xl"
          />
        </div>
        <motion.h3
          className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 text-transparent bg-clip-text mb-3 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {achievement.title}
        </motion.h3>
        <motion.p
          className="text-gray-300 text-base leading-relaxed flex-grow mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {achievement.description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {achievement.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-amber-500/10 border border-white/10 text-gray-300 text-sm backdrop-blur-md hover:bg-opacity-70 transition-all"
            >
              {tag}
            </span>
          ))}
        </motion.div>
        <a 
          href={linkedinLinks[index]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 rounded-lg text-white text-base font-medium tracking-wide hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-500 w-full justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
};

export default function Achievements() {
  const achievements = [
    {
      title: "Delhi Police Hackathon Champion",
      description: "Led a team to victory in the Delhi Police Cybersecurity Hackathon, demonstrating innovative problem-solving skills.",
      tags: ["Cybersecurity", "Innovation", "Leadership"],
    },
    {
      title: "SIH 2024 National Finalist",
      description: "Reached the national finals of Smart India Hackathon 2024, showcasing exceptional technical and collaborative abilities.",
      tags: ["Problem Solving", "Team Lead", "Innovation"],
    },
    {
      title: "Google Developers Groups Technical Lead",
      description: "Spearheaded AI/ML, IOT, Web Development etc. initiatives and mentored students as Technical Lead of the Google Developers Club.",
      tags: ["AI/ML", "Community", "Mentorship"],
    },
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)] animate-pulse" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="inline-block"
        >
          <div className="text-purple-300 text-xl font-mono tracking-wider mb-6 px-6 py-2 rounded-full border border-purple-500/20 backdrop-blur-sm">
            &lt; Achievements /&gt;
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-amber-500/20 blur-3xl"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6 relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              Milestones
            </span>
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide mt-4"
        >
          Celebrating moments of triumph
        </motion.h2>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}