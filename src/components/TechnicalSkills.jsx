"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Server, Code, Cpu, Award, Book, Terminal, Globe, ArrowRight } from 'lucide-react';

const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState('AI & Deep Learning');

  const skills = [
    {
      category: "AI & Deep Learning",
      icon: <Brain className="w-6 h-6" />,
      description: "Building intelligent systems with neural networks and computer vision",
      technologies: ["TensorFlow", "OpenCV", "Neural Networks", "CNN", "Keras", "Scikit-learn", "Jupyter Notebook", "Streamlit"],
      proficiency: 92,
      color: "from-violet-600 to-fuchsia-600"
    },
    {
      category: "Internet of Things",
      icon: <Cpu className="w-6 h-6" />,
      description: "Developing IoT solutions with embedded systems",
      technologies: ["Arduino", "Raspberry Pi", "NB-IoT", "LoRa", "LoRaWAN"],
      proficiency: 88,
      color: "from-emerald-600 to-teal-600"
    },
    {
      category: "Cloud Computing",
      icon: <Cloud className="w-6 h-6" />,
      description: "Cloud infrastructure and platform services",
      technologies: ["Google Cloud Platform", "Compute Engine", "Cloud Storage", "BigQuery", "AI & ML Tools"],
      proficiency: 85,
      color: "from-blue-600 to-cyan-600"
    },
    {
      category: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      description: "Building responsive web applications",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
      proficiency: 82,
      color: "from-amber-600 to-orange-600"
    }
  ];

  const certifications = [
    {
      title: "Google Cloud Study Jam",
      icon: <Cloud className="w-6 h-6" />,
      items: ["Training in GCP core services", "Hands-on practice with AI tools"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Technical Workshops",
      icon: <Terminal className="w-6 h-6" />,
      items: [
        "5G and Beyond Conference – IIT Delhi",
        "Arduino and Mobile Robotics Workshop – IIT Delhi",
        "IoT Workshop – Eigen Technologies Pvt Ltd",
        "Open Day Event – National Physical Laboratory (NPL)"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Professional Development",
      icon: <Book className="w-6 h-6" />,
      items: [
        "Enabling Massive IoT with LPWAN Technologies (IEEE)",
        "Maths for Programmers (Scaler)",
        "Internet of Things Business Impact",
        "Ethics in the Age of Generative AI",
        "Introduction to Artificial Intelligence"
      ],
      color: "from-green-600 to-emerald-600"
    }
  ];

  const SkillTab = ({ skill }) => {
    const isActive = activeCategory === skill.category;
    return (
      <motion.div
        onClick={() => setActiveCategory(skill.category)}
        className={`relative cursor-pointer p-4 ${isActive ? 'bg-white/10' : 'hover:bg-white/5'} rounded-lg transition-all duration-300`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {skill.icon}
          </motion.div>
          <span className="font-semibold text-lg text-white">{skill.category}</span>
        </div>
        {isActive && (
          <motion.div
            className="absolute inset-0 border-2 rounded-lg"
            layoutId="activeTab"
            style={{ borderImage: `linear-gradient(to right, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]}) 1` }}
          />
        )}
      </motion.div>
    );
  };

  const activeSkill = skills.find(skill => skill.category === activeCategory);

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
            &lt; Technical Skills /&gt;
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
              Skills & Expertise
            </span>
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide mt-4"
        >
          Showcasing my technical expertise
        </motion.h2>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="space-y-2">
            {skills.map((skill) => (
              <SkillTab key={skill.category} skill={skill} />
            ))}
          </div>

          <motion.div 
            className="lg:col-span-2 relative"
            layout
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl" />
            <motion.div
              key={activeSkill.category}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="relative bg-white/5 p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {activeSkill.category}
              </h3>
              
              <p className="text-gray-300 mb-8">{activeSkill.description}</p>

              <div className="mb-8">
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${activeSkill.proficiency}%` }}
                    transition={{ duration: 1 }}
                    className={`h-full bg-gradient-to-r ${activeSkill.color}`}
                  />
                </div>
                <div className="mt-2 text-right text-gray-400">
                  Proficiency: {activeSkill.proficiency}%
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeSkill.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${activeSkill.color} bg-opacity-10 text-white text-sm`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} mb-4 inline-block`}
              >
                {cert.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 text-white">{cert.title}</h3>
              
              <ul className="space-y-2">
                {cert.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-gray-200 flex items-start gap-2"
                  >
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalSkills;