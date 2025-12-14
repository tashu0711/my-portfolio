import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="w-full bg-gradient-to-br from-white via-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I'm Ashu Tiwari, a passionate Full Stack Developer from IIT Tirupati with expertise in building modern, scalable web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With experience in technologies like React, Node.js, MongoDB, and more, I create
            seamless user experiences and robust backend systems. I'm always learning new
            technologies and improving my skills to deliver the best possible results.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
