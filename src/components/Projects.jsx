import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [

    {
      id: 1,
      title: 'Drone Soccer Analytics Platform',
      description: 'Real-time drone performance analytics and live scoreboard system with Socket.io integration, ESP32/Flight Controller telemetry, gyro sensor data processing, and tournament management',
      tech: ['MERN', 'Socket.io', 'ESP32', 'FastAPI'],
      demo: 'https://drone-arena-frontend.vercel.app/',
      code: 'https://github.com/tashu0711',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Drone+Analytics',
    },
    {
      id: 2,
      title: 'DroneNova India - Company Website',
      description: 'Official company website for DroneNova India showcasing drone technology, products, services, and innovations with modern responsive design and SEO optimization',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      demo: 'https://dronenovaindia.com/',
      code: 'https://github.com/tashu0711',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=DroneNova+India',
    },
    {
      id: 3,
      title: 'Dalit Film Circle Platform',
      description: 'Networking platform connecting film industry professionals (producers, writers, directors, actors) to create opportunities and foster collaboration in the Dalit community',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      demo: 'https://dalit-film-circle.vercel.app/',
      code: 'https://github.com/tashu0711',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Film+Circle',
    },
    {
      id: 4,
      title: 'STM32 Automated Medicine Factory',
      description: 'Modular factory automation system with AI/ML integrated in STM32 microcontroller for intelligent object detection and automated production',
      tech: ['STM32', 'Embedded C', 'AI/ML', 'Sensors'],
      demo: '#',
      code: '#',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=STM32+Factory',
    },
    {
      id: 5,
      title: 'Coaching LMS Platform',
      description: 'Learning Management System for coaching institutes with student-teacher login, real-time communication, assignment management, rating system, and progress tracking',
      tech: ['MERN', 'React', 'Node.js', 'MongoDB'],
      demo: 'https://internship-pr.vercel.app/',
      code: 'https://github.com/tashu0711',
      image: 'https://via.placeholder.com/400x250/EC4899/FFFFFF?text=LMS+Platform',
    },
  ];

  return (
    <div id="projects" className="w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-700 mt-4">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({ id, title, description, tech, demo, code, image }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((t, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={demo}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>
                  <a
                    href={code}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
