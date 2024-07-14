import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiMysql } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
        { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'Redux', icon: SiRedux, color: 'text-purple-600' },
        { name: 'Java', icon: FaJava, color: 'text-red-500' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="skills" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gray-800 p-4 rounded-full mb-3"
                            >
                                <skill.icon className={`text-4xl ${skill.color}`} />
                            </motion.div>
                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
