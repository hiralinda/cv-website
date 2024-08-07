import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Certified React Developer",
    organization: "React Academy",
    date: "June 2023",
    icon: faCertificate,
  },
  {
    title: "JavaScript Specialist",
    organization: "JavaScript Institute",
    date: "April 2023",
    icon: faCertificate,
  },
  {
    title: "Full-Stack Developer",
    organization: "Web Dev University",
    date: "December 2022",
    icon: faCertificate,
  },
  {
    title: "Certified React Developer",
    organization: "React Academy",
    date: "June 2023",
    icon: faCertificate,
  },
  {
    title: "JavaScript Specialist",
    organization: "JavaScript Institute",
    date: "April 2023",
    icon: faCertificate,
  },
  {
    title: "Full-Stack Developer",
    organization: "Web Dev University",
    date: "December 2022",
    icon: faCertificate,
  },
];

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
          Certifications
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mb-6 p-4 bg-gray-700 rounded-full">
                <FontAwesomeIcon
                  icon={cert.icon}
                  className="text-5xl text-blue-400"
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-lg mb-2 text-gray-300">{cert.organization}</p>
              <p className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                {cert.date}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certificates;
