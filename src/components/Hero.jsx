import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="w-full bg-gradient-to-br from-blue-100 via-blue-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-blue-600">Ashu Tiwari</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
              Founding Engineer @ DroneNova
            </h2>
            <h3 className="text-xl md:text-2xl text-blue-600 mb-6">
              Full Stack, AI/ML & IoT Specialist
            </h3>
            <p className="text-gray-700 text-lg mb-4 max-w-lg">
              Building cutting-edge drone software solutions, integrating AI/ML with embedded systems,
              and creating full-stack applications.
            </p>
            <p className="text-gray-600 text-md mb-8 max-w-lg">
              🎓 B.Tech from IIT Tirupati
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8 justify-center md:justify-start">
              <a href="https://github.com/tashu0711" target="_blank" rel="noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all">
                <FaGithub size={24} className="text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/ashu-tiwari-868812288" target="_blank" rel="noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all">
                <FaLinkedin size={24} className="text-blue-600" />
              </a>
              <a href="mailto:tashu0711@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all">
                <HiMail size={24} className="text-red-500" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 shadow-md hover:shadow-lg transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-2 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/profile.jpeg"
                  alt="Ashu Tiwari - Founding Engineer @ DroneNova"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
