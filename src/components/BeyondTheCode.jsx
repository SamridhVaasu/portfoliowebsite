import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, 
  Languages,
  Code,
  Globe,
  Swords,
  MessageCircle,
  Heart
} from 'lucide-react';

const BeyondCode = () => {
  const languages = [
    {
      name: "English",
      proficiency: "Native",
      level: 100,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Hindi",
      proficiency: "Native",
      level: 100,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Japanese",
      proficiency: "Basic",
      level: 40,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const activities = [
    {
      category: "Position of Responsibility",
      icon: <Users className="w-6 h-6" />,
      items: [
        {
          title: "Technical Lead, Google Developers Groups USAR",
          description: "Artificial Intelegence and Machine Learning Leadership",
          achievements: [
            "Promoted innovation in computing",
            "Created collaborative learning environment",
            "Organized technical events and workshops"
          ]
        },
        {
          title: "Executive Member, IEEE USAR",
          description: "Organizing team member for technical workshops",
          achievements: [
            "Led workshops on IoT, embedded systems, and AI",
            "100+ student attendance per workshop",
            "Fostered technical knowledge sharing"
          ]
        },
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      category: "Technical Excellence",
      icon: <Code className="w-6 h-6" />,
      items: [
        {
          title: "Cyber Hackathon Winner",
          period: "2024",
          description: "Delhi Police Hackathon Achievement",
          achievements: [
            "Built spam SMS detection system with 97% accuracy",
            "Led cross-functional team to victory",
            "Implemented ML algorithms for cybersecurity"
          ]
        },
        {
          title: "Smart India Hackathon Nominee",
          period: "2024",
          description: "Innovative Healthcare Solution",
          achievements: [
            "Developed non-contact eye pressure measurement device",
            "Led multidisciplinary team through competition rounds",
            "Integrated IoT with image processing"
          ]
        }
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      category: "Martial Arts & Culture",
      icon: <Swords className="w-6 h-6" />,
      items: [
        {
          title: "Black Belt in Karate",
          period: "Present",
          description: "Advanced martial arts achievement",
          achievements: [
            "Won multiple regional and national medals",
            "Demonstrated exceptional discipline",
            "Developed leadership and perseverance"
          ]
        },
        {
          title: "Model United Nations",
          period: "Active Participant",
          description: "Global discourse and diplomacy",
          achievements: [
            "Participated in multiple conferences",
            "Enhanced public speaking skills",
            "Engaged in international policy discussions"
          ]
        }
      ],
      color: "from-amber-500 to-orange-500"
    }
  ];

  const LanguageCard = ({ language }) => {
    const cardRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

    return (
      <motion.div
        ref={cardRef}
        style={{ scale, y }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-amber-600/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
        <motion.div 
          className="relative backdrop-blur-xl bg-gray-900/50 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-500"
          whileHover={{ y: -5 }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`p-2 rounded-lg bg-gradient-to-r ${language.color} text-white`}
              >
                <Globe className="w-5 h-5" />
              </motion.div>
              <h3 className="text-xl font-bold text-white">{language.name}</h3>
            </div>
            <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${language.color} text-white`}>
              {language.proficiency}
            </span>
          </div>

          <div className="relative h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${language.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className={`absolute h-full rounded-full bg-gradient-to-r ${language.color}`}
            />
          </div>

          {language.certifications && (
            <div className="flex flex-wrap gap-2">
              {language.certifications.map((cert, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-colors duration-300"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  };

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
            &lt; Beyond The Code /&gt;
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
              Beyond The Code
            </span>
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide mt-4"
        >
          Where innovation meets impact through technology, leadership, and global engagement
        </motion.h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              <Languages className="w-6 h-6" />
            </motion.div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              Language Proficiency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <LanguageCard key={index} language={language} />
            ))}
          </div>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-amber-600/20 blur-xl transition-all duration-300" />
                <div className="relative backdrop-blur-xl bg-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-xl bg-gradient-to-r ${activity.color} text-white`}
                    >
                      {activity.icon}
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white">
                      {activity.category}
                    </h2>
                  </div>

                  <div className="space-y-8">
                    {activity.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * idx }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold text-purple-400">
                            {item.title}
                          </h3>
                          <span className="text-sm text-gray-400">{item.period}</span>
                        </div>
                        <p className="text-gray-100 mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, aIdx) => (
                            <motion.li
                              key={aIdx}
                              className="text-gray-300 flex items-center gap-2"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activity.color}`} />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Quote */}
        <motion.div          
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-amber-500/20 blur-3xl" />
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto p-8 backdrop-blur-xl bg-gray-900/50 rounded-2xl border border-white/10"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-6 text-purple-400" />
              <p className="text-2xl text-gray-300 italic mb-6">
                "In the intersection of technology and humanity lies the power to transform lives. Every line of code we write, every solution we build, carries the potential to make the world a little bit better."
              </p>
              <div className="flex items-center justify-center gap-4">
                <Heart className="w-5 h-5 text-pink-400" />
                <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                  Engineering with Purpose
                </span>
                <Heart className="w-5 h-5 text-pink-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BeyondCode;
