import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const projects = [
  {
    title: "Personal Portifolio Website",
    description:
      "A space I created to show my previous projects and use it to apply for jobs.",
    sourceCode: "https://github.com/hiralinda/cv-website",
    liveSite: "", //update
    course: "Personal Project",
    comments:
      "It was my first time digging into Blender and 3D objects displayed on webpages",
    image: "../img/img0.png",
    tags: ["React", "Tailwind CSS", "Three.js", "Blender"],
  },
  {
    title: "Teacher-Student Django Platform",
    description:
      "A Web application designed to facilitate the interaction between teachers and students.",
    sourceCode:
      "https://github.com/hiralinda/djangoproject_schoolwebpage?tab=readme-ov-file#teacher-student-django-platform",
    liveSite: "https://youtu.be/Qk2ap_J89tg",
    course: "CS50's Web Programming with Python and JavaScript Final Project",
    comments:
      "To challenge myself, I implemented Goggle Calendar API to generate Google Meets Link according to the scheduled class information on the platform.",
    image: "../img/img8.png",
    tags: ["Google API", "Django", "Tailwind CSS", "SQLite3", "SASS"],
  },
  {
    title: "Eras Tour Acoustic Set",
    description:
      "An application that displays every song Taylor Swift has performed on the Acoustic Set on Eras Tour as a sortable table.",
    sourceCode: "https://github.com/hiralinda/eras-tour-acoustic-set",
    liveSite: "https://eras-tour-acoustic-set.vercel.app/",
    course: "Personal Project",
    comments:
      "I created this project after losing track of all the surprise songs that has being performed on the Acoustic Set on Eras Tour.",
    image: "../img/img6.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          My Projects
        </motion.h2>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg glow-on-hover">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                Source Code
              </a>
              <br />
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                {project.liveSite.includes("youtu")
                  ? "Video Demo"
                  : "Live Website"}
              </a>
              <p className="text-sm text-gray-400 mt-2">
                {project.course !== "Personal Project" && "Course: "}
                {project.course}
              </p>

              <p className="text-sm text-gray-300 mt-2">{project.comments}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-gray-300 text-xs font-semibold px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              View More Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
