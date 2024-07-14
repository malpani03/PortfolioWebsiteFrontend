import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { BASE_URL } from './helper';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/projects`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 text-center"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12 text-gray-300"
        >
          Here are some of my recent works
        </motion.p>
        {loading ? (
          <div className="text-center">
            <div className="" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id || index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.name}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <a 
                      href={project.githubLink} 
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
