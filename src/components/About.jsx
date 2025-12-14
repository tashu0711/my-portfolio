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
            I'm Ashu Tiwari, a <span className="font-semibold text-blue-600">Founding Engineer at DroneNova India</span>, where I lead
            software and robotics development. As a <span className="font-semibold">B.Tech graduate from IIT Tirupati</span>,
            I specialize in Full Stack Development (MERN, React Native), AI/ML with Edge Computing, and IoT/Embedded Systems.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Currently building advanced drone analytics software, integrating <span className="font-semibold">ESP32/Flight Controllers</span> with
            gyro sensors for real-time data processing using <span className="font-semibold">Socket.io</span>. Generating
            performance insights and analytics for Drone Soccer competitions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Previously worked at <span className="font-semibold">Leumas Pvt Ltd</span> on <span className="font-semibold">STM32</span>-based
            automated medicine factory systems, integrating AI/ML in microcontrollers for intelligent
            detection and automation, collaborating with mechanical and electrical engineers.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
