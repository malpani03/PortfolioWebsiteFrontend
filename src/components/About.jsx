import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const About = () => {
  const technologies = [
    { icon: <FaReact className="text-blue-400" />, name: 'React' },
    { icon: <SiExpress className="text-green-500" />, name: 'Express' },
    { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
  ];

  const skills = [
    { icon: <FaCode />, name: 'Full-Stack Development' },
    { icon: <FaLaptopCode />, name: 'Responsive Design' },
    { icon: <FaDatabase />, name: 'Database Management' },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl leading-relaxed">
              I'm a passionate full-stack developer with expertise in the MERN stack, dedicated to crafting elegant and efficient web solutions.
            </p>
            <p className="text-xl leading-relaxed">
              With a blend of creativity and technical prowess, I transform ideas into seamless, user-centric applications that make a real impact.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Key Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2 bg-gray-700 bg-opacity-50 p-3 rounded-lg"
                  >
                    <span className="text-2xl text-blue-400">{skill.icon}</span>
                    <span className="text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl shadow-2xl backdrop-blur-sm"
          >
            <h3 className="text-3xl font-semibold mb-6 text-center">MERN Stack Expertise</h3>
            <div className="grid grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center space-y-2 bg-gray-700 bg-opacity-50 p-4 rounded-xl"
                >
                  <span className="text-5xl">{tech.icon}</span>
                  <span className="text-lg font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
