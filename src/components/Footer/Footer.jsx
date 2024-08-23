import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.h2
              className="text-xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              Hire Ligia
            </motion.h2>

            <motion.a
              href="https://github.com/hiralinda/cv-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span className="flex items-center">
                <FaCode className="mr-2" />
                View Source Code
              </span>
            </motion.a>
          </div>
          <div className="mb-4 md:mb-0">
            <motion.a
              href="https://hiralinda.github.io/hireligia-brutalist-version/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span className="flex items-center">
                Hire Ligia Brutalist Version
              </span>
            </motion.a>
          </div>
          <div className="mb-4 md:mb-0">
            <motion.a
              href="https://hiralinda.github.io/hireligia-2000s-version/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span className="flex items-center">
                Hire Ligia 2000s Version
              </span>
            </motion.a>
          </div>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <motion.a
              href="https://www.linkedin.com/in/ligiahirata/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/hiralinda"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="mailto:ligiahirata@proton.me"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <p>&copy; {currentYear} Hire Ligia's Website. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
