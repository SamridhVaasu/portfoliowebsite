import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Link, Code } from 'lucide-react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Data Insights and Strategic Unit (DISU) for the Department of Posts",
      description: "Designed a real-time parcel tracking system to visualise parcel conditions across 250+ delivery routes, processing high-frequency data from a vast IoT sensor network. Alerting users to irregularities with 99.8% accuracy and an average notification time of <15 seconds, reducing damage incidents by 37% within the first test implementation.",
      githubLink: "https://github.com/SamridhVaasu/project-drishti-SIH",
      liveLink: "https://github.com/SamridhVaasu/project-drishti-SIH",
      tech: ["ESP32", "GPS", "Accelerometer", "Humidity & Smoke Sensors", "Blockchain", "RFID", "EDA"],
      highlight: "Featured Project",
      imageUrl: "./images/project-1.png",
      color: "purple"
    },
    {
      title: "SecureSync: Security Pipeline Builder with  Vulnerability Detection",
      description: "Created a hybrid vulnerability detector that identifies 97% of parallel synchronisation flaws and security hotspots in real-time. Reduced detection latency by 78% compared to previous solutions. Innovated an intuitive drag-and-drop interface for security workflow creation with various pre-built components and 12 industry-specific templates, decreasing workflow setup time by 65%.",
      githubLink: "https://github.com/SamridhVaasu/securesync",
      liveLink: "https://github.com/SamridhVaasu/securesync",
      tech: ["Generative AI", "Tailwind CSS", "DevOps Integration", "SonarQube", "Data Science", "Next.js", "React", "TypeScript"],
      highlight: "Runner Up Hackers Playground",
      imageUrl: "./images/project-2.png",
      color: "pink"
    },
    {
      title: "StackAlchemy: AI-Powered Code Knowledge Base",
      description: "Crafted an AI-powered platform that transforms GitHub repositories into interactive knowledge bases. Enabled developers to query code in natural language, receiving contextual answers with 95% accuracy and 40% faster code comprehension. Architected a scalable database schema using Prisma ORM with PostgreSQL.",
      githubLink: "https://github.com/SamridhVaasu/StackAlchemy",
      liveLink: "https://github.com/SamridhVaasu/StackAlchemy",
      tech: ["Vector Embeddings", "RAG", "Next.js", "React", "Tailwind CSS", "shadcn/ui", "tRPC", "Prisma ORM", "Clerk", "PostgreSQL"],
      highlight: "Prototype in Development",
      imageUrl: "./images/project-3.jpeg",
      color: "purple"
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

    return (
      <motion.div
        ref={cardRef}
        style={{ scale, opacity, y }}
        className="group relative"
        onMouseEnter={() => setActiveProject(index)}
        onMouseLeave={() => setActiveProject(null)}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur group-hover:opacity-30 transition duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
        <div className="relative bg-gray-900/90 rounded-2xl backdrop-blur-sm border border-purple-500/20">
          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-pink-500/30 rounded-tr-2xl" />
          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-purple-500/30 rounded-bl-2xl" />
          <div className="relative">
            <div className="overflow-hidden rounded-t-2xl" style={{ height: '300px' }}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
            </div>
            <div className="absolute -bottom-3 left-6 flex flex-wrap gap-2 max-w-[calc(100%-3rem)]">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full 
                    bg-gray-900/90 text-purple-300 border border-purple-500/30
                    shadow-lg backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.highlight && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500/90 to-pink-500/90 rounded-full px-4 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm">
                {project.highlight}
              </div>
            )}
          </div>
          <div className="p-8 pt-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              {project.title}
            </h3>
            <div className="flex gap-4">
              <motion.a
                href={project.githubLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 group/btn relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-50 transition-opacity duration-300 group-hover/btn:opacity-100" />
                <div className="relative h-12 bg-gray-900 rounded-xl border border-purple-500/30 flex items-center justify-center gap-2 text-white font-medium overflow-hidden">
                  <Code size={18} className="text-purple-400" />
                  <span>Source Code</span>
                </div>
              </motion.a>
              <motion.a
                href={project.liveLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 group/btn relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur-sm opacity-30 transition-opacity duration-300 group-hover/btn:opacity-70" />
                <div className="relative h-12 bg-gray-900 rounded-xl border border-pink-500/30 flex items-center justify-center gap-2 text-white font-medium overflow-hidden">
                  <Link size={18} className="text-pink-400" />
                  <span>Live Demo</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
              &lt; Portfolio /&gt;
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
                Creative Portfolio
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide mt-4"
          >
            Exploring the intersection of design, technology, and innovation through carefully crafted digital experiences
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
