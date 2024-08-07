import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faPython,
  faGitAlt,
  faGithub,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiDjango,
  SiFlask,
  SiBootstrap,
  SiTailwindcss,
  SiBlender,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: faHtml5, name: "HTML5", color: "#E34F26" },
    { icon: faCss3Alt, name: "CSS3", color: "#1572B6" },
    { icon: faJsSquare, name: "JavaScript", color: "#F7DF1E" },
    { icon: faReact, name: "React", color: "#61DAFB" },
    { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
    { icon: faNodeJs, name: "Node.js", color: "#339933" },
    { icon: faPython, name: "Python", color: "#3776AB" },
    { icon: SiDjango, name: "Django", color: "#339933" },
    { icon: SiFlask, name: "Flask", color: "#ffffff" },
    { icon: faGitAlt, name: "Git", color: "#F05032" },
    { icon: faGithub, name: "GitHub", color: "#ffffff" },
    { icon: SiBlender, name: "Blender", color: "#F5792A" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          My Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full shadow-lg mb-4">
                {skill.icon && skill.icon.prefix ? (
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-5xl"
                    style={{ color: skill.color }}
                  />
                ) : (
                  <skill.icon
                    className="text-5xl"
                    style={{ color: skill.color }}
                  />
                )}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold">
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
