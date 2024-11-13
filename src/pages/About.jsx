import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="p-8 max-w-3xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-6 text-teal-400"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      {/* Intro Section */}
      <motion.p
        className="text-lg leading-relaxed mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Hi, I'm Pushker Naresh, a software developer with a passion for full-stack development, problem-solving, 
        and creating efficient, scalable web applications. I’m currently experienced in React, Node.js, 
        Express, MongoDB, and AWS, with hands-on skills in both frontend and backend development.
      </motion.p>

      {/* Education Section */}
      <motion.div
        className="bg-gray-700 p-6 rounded-lg shadow-md mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-teal-300 mb-4">Education</h2>
        <p className="text-lg">
          <strong>Dual Degree (B.Tech + M.Tech), Engineering Physics</strong> <br />
          IIT (B.H.U.) Varanasi, GPA: 8.48/10.00 <br />
          <span className="text-gray-400">2019 — 2024</span>
        </p>
      </motion.div>

      {/* Career Summary Section */}
      <motion.div
        className="bg-gray-700 p-6 rounded-lg shadow-md mb-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-teal-300 mb-4">Career Summary</h2>
        <p className="text-lg leading-relaxed">
          I have experience working as a full-stack developer, building responsive and user-friendly web applications 
          and services for both client and personal projects. My work has included JWT-based authentication, payment 
          systems, API integrations, and deploying applications using AWS and other modern technologies. 
        </p>
      </motion.div>

      {/* Skills Overview Section */}
      <motion.div
        className="bg-gray-700 p-6 rounded-lg shadow-md mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-teal-300 mb-4">Core Skills</h2>
        <ul className="text-lg space-y-2 list-disc list-inside">
          <li>Proficient in full-stack development using React, Node.js, Express, MongoDB, and TailwindCSS.</li>
          <li>Skilled in cloud and DevOps tools, including AWS, Docker, and GitHub CI/CD.</li>
          <li>Strong foundation in data structures, algorithms, and object-oriented programming (OOP).</li>
        </ul>
      </motion.div>

      {/* LinkedIn and GitHub Links */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <p className="text-lg mb-4">Connect with me on LinkedIn and GitHub:</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/pushker-naresh-9420351ab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Pushker-stark"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 underline"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
