import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { id: 1, name: 'React', icon: <FaReact size={50} />, color: 'text-blue-500' },
    { id: 2, name: 'Node.js', icon: <FaNodeJs size={50} />, color: 'text-green-600' },
    { id: 3, name: 'MongoDB', icon: <SiMongodb size={50} />, color: 'text-green-500' },
    { id: 4, name: 'JavaScript', icon: <FaJs size={50} />, color: 'text-yellow-500' },
    { id: 5, name: 'Python', icon: <FaPython size={50} />, color: 'text-blue-600' },
    { id: 6, name: 'Tailwind', icon: <SiTailwindcss size={50} />, color: 'text-cyan-500' },
    { id: 7, name: 'Git', icon: <FaGitAlt size={50} />, color: 'text-orange-600' },
    { id: 8, name: 'SQL', icon: <FaDatabase size={50} />, color: 'text-gray-600' },
  ];

  return (
    <div id="skills" className="w-full bg-gradient-to-br from-blue-100 via-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-700 mt-4">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map(({ id, name, icon, color }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: id * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center hover:scale-105"
            >
              <div className={color}>{icon}</div>
              <p className="mt-4 text-gray-700 font-semibold">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
