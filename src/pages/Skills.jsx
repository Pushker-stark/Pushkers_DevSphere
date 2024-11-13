import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGithub, FaPython, FaHtml5, FaCss3Alt, FaJava, FaDatabase } from 'react-icons/fa';
import { DiPostgresql, DiDjango, DiJavascript1, DiCss3, DiPython } from 'react-icons/di';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiTypescript } from 'react-icons/si';

const skills = {
  Languages: [
    { name: 'C++', icon: <FaJava /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <DiCss3 /> },
    { name: 'JavaScript', icon: <DiJavascript1 /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'SQL', icon: <FaDatabase /> },
  ],
  Libraries_Frameworks: [
    { name: 'NodeJS', icon: <FaNodeJs /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'ExpressJS', icon: <SiExpress /> },
    { name: 'NextJS', icon: <SiNextdotjs /> },
    { name: 'Django', icon: <DiDjango /> },
  ],
  Cloud_DevOps: [
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Domain Hosting', icon: <FaGithub /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'CI/CD', icon: <FaGithub /> },
    { name: 'Postman', icon: <FaGithub /> },
  ],
  Databases_Core_Concepts: [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <DiPostgresql /> },
    { name: 'SQLite', icon: <DiPostgresql /> },
    { name: 'Data Structures & Algorithms', icon: <FaDatabase /> },
    { name: 'OOP', icon: <FaDatabase /> },
    { name: 'OS', icon: <FaDatabase /> },
    { name: 'DBMS', icon: <FaDatabase /> },
  ],
};

const Skills = () => (
  <motion.div
    className="p-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-3xl font-bold text-center mb-8 text-teal-300">Skills</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, items]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-lg shadow-xl"
        >
          <h2 className="text-xl font-semibold mb-4 text-teal-400">{category.replace('_', ' & ')}</h2>
          <ul className="space-y-4">
            {items.map(({ name, icon }) => (
              <motion.li
                key={name}
                className="flex items-center space-x-2 text-lg text-gray-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl">{icon}</span>
                <span>{name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
