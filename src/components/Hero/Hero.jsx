import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThreeDModel from "../Three/Three";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-32 md:py-32 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-color:#ffffff text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Ligia Hirata,
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl mb-6">
              a Biochemical Engineer that got into Web Developing: Seeking a Web
              Development role to leverage my strong analytical and
              problem-solving skills in building robust and user-friendly
              applications.
            </motion.p>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center md:justify-start space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-md font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                Get in Touch
              </motion.a>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-md font-bold rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg">
                  View Projects
                </motion.button>
              </Link>
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
