import React from "react";
import { motion } from "framer-motion";
import ThreeDModel from "../Three/Three";
import "./Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-32 md:py-32 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            {/* Image div */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center md:justify-start mb-8">
              <img
                src={`${process.env.PUBLIC_URL}/me.png`}
                alt="Ligia Hirata"
                className="w-64 h-64 rounded-full object-cover p-1 bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg"
              />
            </motion.div>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Ligia Hirata
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl mb-6">
              Junior Software Developer with 1 year of experience, adept at
              delivering high-quality solutions and committed to innovation and
              effective collaboration.
            </motion.p>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center md:justify-start space-x-6">
              <motion.a
                href="https://github.com/hiralinda"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ligiahirata/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:ligiahirata@proton.me"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">
                <FaEnvelope />
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6">
              <motion.a
                href={`${process.env.PUBLIC_URL}/ligiahirata_cv.pdf`}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                <FaFileDownload className="mr-2" />
                View CV
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:block md:w-1/2 absolute right-0 top-0 bottom-0">
            <div className="w-full h-full">
              <ThreeDModel />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
