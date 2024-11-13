import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiTypescript, SiNextdotjs, SiJavascript } from 'react-icons/si';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  // Fetch GitHub repositories
  useEffect(() => {
    fetch('https://api.github.com/users/Pushker-stark/repos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log data to inspect language field
        const webDevProjects = data.filter((repo) => {
          const languages = repo.language ? repo.language.toLowerCase() : ''; // Handle case where language is null
          return ['javascript', 'typescript', 'html', 'css', 'react', 'node', 'express', 'next.js', 'mongodb', 'tailwindcss']
            .some((tech) => languages.includes(tech));
        });
        setRepos(webDevProjects);
      })
      .catch((error) => console.error('Error fetching repos:', error));
  }, []);

  // Tech stack icons map
  const techIcons = {
    React: <FaReact />,
    Node: <FaNodeJs />,
    Express: <SiExpress />,
    MongoDB: <SiMongodb />,
    AWS: <FaAws />,
    NextJS: <SiNextdotjs />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    TailwindCSS: <SiTailwindcss />,
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-300">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repos.map((repo) => {
          // Extract tech stack based on the language used
          const techStack = Object.keys(techIcons).filter((tech) =>
            repo.language && repo.language.toLowerCase().includes(tech.toLowerCase())
          );

          return (
            <motion.div
              key={repo.id}
              className="p-4 bg-gray-800 text-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-bold">{repo.name}</h2>
              <p className="mt-2">{repo.description || "No description available."}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center bg-teal-400 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {techIcons[tech]}
                    <span className="ml-2">{tech}</span>
                  </span>
                ))}
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 mt-4 block"
              >
                View on GitHub
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
