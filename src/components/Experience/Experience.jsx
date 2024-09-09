import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLaptopCode,
  faFlask,
  faAtom,
  faMicroscope,
} from "@fortawesome/free-solid-svg-icons";
import { SiNano } from "react-icons/si";

const experiences = [
  {
    icon: faLaptopCode,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Aug 2023 - Present",
    description:
      "Providing web development services to clients globally, specializing in React and TypeScript. Responsible for design, development, and deployment of custom websites and applications.",
    color: "#61DAFB",
  },
  {
    icon: faBriefcase,
    title: "Junior Software Developer",
    company: "JaxTHRIVE",
    period: "August 2022 - July 2023",
    description:
      "Assisted with a project for a non-profit organization helping with the design and implementation of the web UI using Bootstrap, and integrating the back-end with C# and Microsoft Azure services.",
    color: "#61DAFB",
  },
  {
    icon: faFlask,
    title: "Laboratory Assistant",
    company: "BioCen Do Brasil",
    period: "July 2020 - October 2020",
    description:
      "Conducted physical, chemical and microbiological testing and quality control procedures; Collaborated with cross-functional teams to troubleshoot technical issues; Leveraged analytical thinking and attention to detail for process improvement.",
    color: "#4CAF50",
  },
  {
    icon: faMicroscope,
    title: "Laboratory Researcher",
    company: "LEB (Federal University of Rio Grande - Brazil)",
    period: "January 2019 - December 2019",
    description:
      "Developed a new nanoemulsion from algae’s biomolecules; Performed physical, chemical and microbiological analyses; Analyzed the nanotechnology potential of the nanoencapsulation.",
    color: "#4CAF50",
  },
  {
    icon: faAtom,
    title: "Laboratory Researcher",
    company: "LAFQAT (Federal University of Rio Grande - Brazil)",
    period: "January 2017 - August 2017",
    description:
      "Conducted the synthesis of a new chemical molecule; Performed computational analyses through ArgusLab program; Analyzed the molecular interaction between enzyme and molecule through computational algorithms.",
    color: "#4CAF50",
  },
];

const tumblingVariants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, -15, 15, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.33, 0.66, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          My Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg w-full">
              <motion.div
                variants={tumblingVariants}
                initial="initial"
                whileHover="hover"
                className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-700 rounded-full shadow-lg mb-4 md:mb-0 md:mr-6">
                <FontAwesomeIcon
                  icon={experience.icon}
                  className="text-3xl"
                  style={{ color: experience.color }}
                />
              </motion.div>
              <div className="flex-grow">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold mb-2">
                  {experience.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg font-medium mb-2">
                  {experience.company}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm text-gray-400 mb-2">
                  {experience.period}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-sm text-gray-300">
                  {experience.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
