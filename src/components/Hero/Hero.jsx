import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThreeDModel from "../Three/Three";
import "./Hero.css";

const Hero = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyes = [
        { eye: leftEyeRef.current, pupil: leftPupilRef.current },
        { eye: rightEyeRef.current, pupil: rightPupilRef.current },
      ];

      eyes.forEach(({ eye, pupil }) => {
        if (eye && pupil) {
          const eyeRect = eye.getBoundingClientRect();
          const eyeCenterX = eyeRect.left + eyeRect.width / 2;
          const eyeCenterY = eyeRect.top + eyeRect.height / 2;

          const angle = Math.atan2(
            event.clientY - eyeCenterY,
            event.clientX - eyeCenterX
          );
          const distance = Math.min(
            eyeRect.width / 4,
            Math.hypot(event.clientX - eyeCenterX, event.clientY - eyeCenterY) /
              2
          );

          const pupilX = Math.cos(angle) * distance;
          const pupilY = Math.sin(angle) * distance;

          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-4 py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
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
            className="md:w-1/2 flex justify-center items-center">
            <div className="w-full h-96 md:h-128">
              <ThreeDModel />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
