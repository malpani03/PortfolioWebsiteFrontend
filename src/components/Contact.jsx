import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BASE_URL } from './helper';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/rupeshmalpani03/', name: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/malpani03', name: 'GitHub' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/malpani_03?igsh=b3MzZGU5dDZ6czBz', name: 'Instagtam' },
    { icon: <FaTwitter />, url: 'https://x.com/malpani_03?s=09', name: 'Twitter' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await fetch(`${BASE_URL}/api/responses`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          setSuccessMessage('Thank you for contacting us. We will get back to you soon.');
          setErrorMessage('');
          setFormData({ name: '', email: '', message: '' });
          
          // Set a timeout to clear the success message after 7 seconds
          setTimeout(() => {
            setSuccessMessage('');
          }, 7000);
        } else {
          setErrorMessage('Failed to send message. Please try again later.');
          setSuccessMessage('');
        }
      } catch (error) {
        setErrorMessage('An error occurred. Please try again later.');
        setSuccessMessage('');
      }
    };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          Contact Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl mb-6">
              I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-2xl text-blue-400 mr-4" />
              <a href="mailto:rupeshmalpani03@gmail.com" className="text-xl hover:text-blue-400 transition-colors duration-300">
                rupeshmalpani03@gmail.com
              </a>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl shadow-2xl backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                Send Message
              </button>
            </form>
            {successMessage && <p className="mt-4 text-green-400">{successMessage}</p>}
            {errorMessage && <p className="mt-4 text-red-400">{errorMessage}</p>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
