import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiFlask, SiDjango, SiFastapi, SiArduino, SiTensorflow, SiOpencv, SiSocketdotio } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Full Stack",
      skills: [
        { id: 1, name: 'React', icon: <FaReact size={40} />, color: 'text-blue-500' },
        { id: 2, name: 'Node.js', icon: <FaNodeJs size={40} />, color: 'text-green-600' },
        { id: 3, name: 'MongoDB', icon: <SiMongodb size={40} />, color: 'text-green-500' },
        { id: 4, name: 'JavaScript', icon: <FaJs size={40} />, color: 'text-yellow-500' },
      ]
    },
    {
      title: "AI/ML & Backend",
      skills: [
        { id: 5, name: 'Python', icon: <FaPython size={40} />, color: 'text-blue-600' },
        { id: 6, name: 'Flask', icon: <SiFlask size={40} />, color: 'text-gray-700' },
        { id: 7, name: 'FastAPI', icon: <SiFastapi size={40} />, color: 'text-teal-600' },
        { id: 8, name: 'Django', icon: <SiDjango size={40} />, color: 'text-green-700' },
      ]
    },
    {
      title: "IoT & Embedded",
      skills: [
        { id: 9, name: 'ESP32', icon: <SiArduino size={40} />, color: 'text-teal-500' },
        { id: 10, name: 'STM32', icon: <SiArduino size={40} />, color: 'text-blue-700' },
        { id: 11, name: 'Arduino', icon: <SiArduino size={40} />, color: 'text-cyan-600' },
        { id: 12, name: 'Socket.io', icon: <SiSocketdotio size={40} />, color: 'text-gray-800' },
      ]
    },
    {
      title: "AI/ML & Tools",
      skills: [
        { id: 13, name: 'TensorFlow', icon: <SiTensorflow size={40} />, color: 'text-orange-600' },
        { id: 14, name: 'OpenCV', icon: <SiOpencv size={40} />, color: 'text-red-600' },
        { id: 15, name: 'Git', icon: <FaGitAlt size={40} />, color: 'text-orange-600' },
        { id: 16, name: 'SQL', icon: <FaDatabase size={40} />, color: 'text-blue-600' },
      ]
    },
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

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {category.skills.map(({ id, name, icon, color }) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (id % 4) * 0.1 }}
                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center hover:scale-105"
                  >
                    <div className={color}>{icon}</div>
                    <p className="mt-3 text-gray-700 font-semibold text-sm">{name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
