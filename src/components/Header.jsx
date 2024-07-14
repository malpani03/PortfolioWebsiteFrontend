import { motion } from 'framer-motion';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed w-full z-50 p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl md:text-3xl font-bold"
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-blue-400">&lt;</span>
          {/* <span className="text-white">AB</span> */}
          <span className="text-blue-400">/&gt;</span>
        </motion.button>
        <nav className="flex items-center space-x-2 md:space-x-6">
          {['about', 'projects', 'contact'].map((section) => (
            <motion.button
              key={section}
              whileHover={{ scale: 1.1, color: '#60A5FA' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(section)}
              className="text-sm md:text-lg font-medium px-2 py-1 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;