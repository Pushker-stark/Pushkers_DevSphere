import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Development Lead (Part-Time)',
    company: 'Freelance Web Development',
    date: 'Feb 2024 — Mar 2024',
    description: 'Led the design and development of a portfolio website for a US County Commissioner, achieving over 800 clicks and 1,800 impressions within the first three months.'
  },
  {
    role: 'Full Stack Developer (Intern)',
    company: 'Team CUC - One Stop Career Website',
    date: 'Feb 2023 — July 2023',
    description: 'Enhanced the website with 350+ descriptive projects from 11 different areas, engaging 700+ unique users per month.'
  }
];

const Experience = () => (
  <motion.div
    className="bg-gray-900 text-white py-16 px-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-extrabold text-center text-teal-300 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Experience
      </motion.h1>
      
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.role}
          className="bg-gray-800 p-6 rounded-lg shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-teal-300">{exp.role}</h2>
          <p className="text-gray-400">{exp.company}</p>
          <p className="text-gray-500 text-sm mt-1">{exp.date}</p>
          <p className="text-gray-300 mt-4">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Experience;
