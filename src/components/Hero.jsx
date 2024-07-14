import React from 'react';
import { motion } from 'framer-motion';
import developerImage from '../assets/AI.jpg';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-8 px-4 overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-0">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left"
                >
                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Hi, I'm <span className="text-blue-400 decoration-2 decoration-blue-500">Rupesh Malpani</span>
                    </motion.h1>
                    <motion.p 
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 text-gray-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        MCA Graduate | Full-Stack Developer
                    </motion.p>
                    <motion.p 
                        className="text-base sm:text-lg mb-6 text-gray-400"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Passionate about crafting innovative solutions through full-stack development expertise. Specialized in React, Node.js, and MongoDB with 6 months of experience in building scalable web applications.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#3B82F6" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full text-base transition-all duration-300 flex items-center justify-center"
                            onClick={() => scrollToSection('projects')}
                        >
                            Explore My Work <FaArrowRight className="ml-2" />
                        </motion.button>
                        <motion.a
                            href="https://github.com/malpani03" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-700 text-white font-bold py-2 px-6 rounded-full text-base transition-all duration-300 flex items-center justify-center"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/rupeshmalpani03/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full text-base transition-all duration-300 flex items-center justify-center"
                        >
                            <FaLinkedin className="mr-2" /> LinkedIn
                        </motion.a>
                    </motion.div>
                    <motion.div
                        className="text-sm text-gray-400"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <p>✨ Latest Project: E-commerce platform with React and Node.js</p>
                        <p>🎓 MCA from MET IOE , Nashik , 2022-2024</p>
                    </motion.div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 mb-8 lg:mb-0 hidden lg:block"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        <motion.div
                            className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"
                            animate={{ 
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.3, 0.2]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        ></motion.div>
                        <img
                            src={developerImage}
                            alt="Rupesh Malpani"
                            className="w-full max-w-md mx-auto rounded-full border-4 border-blue-400 shadow-2xl relative z-10"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;