import React, { useEffect } from "react";
import { motion } from "framer-motion";

const moreProjects = [
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
      "An application that displays every song Taylor has performed on the Acoustic Set on Eras Tour as a sortable table.",
    sourceCode: "https://github.com/hiralinda/eras-tour-acoustic-set",
    liveSite: "https://eras-tour-acoustic-set.vercel.app/",
    course: "Personal Project",
    comments:
      "I created this project after losing track of all the surprise songs that has being performed on the Acoustic Set on Eras Tour.",
    image: "../img/img6.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
  },
  {
    title: "Retro Rock Paper Scissors Lizard Spock",
    description:
      'This project is a retro-styled implementation of the game "Rock Paper Scissors Lizard Spock".',
    sourceCode:
      "https://github.com/hiralinda/odin-rock-paper-scissor-lizard-spock",
    liveSite:
      "https://hiralinda.github.io/odin-rock-paper-scissor-lizard-spock/",
    course: "The Odin Project",
    comments:
      "It was a simple JavaScript implementation that I decided to complicate a bit by using The Big Bang Theory version of the game.",
    image: "../img/img7.png",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Social Network",
    description:
      "A social network application that allows users to make posts, follow other users, and like posts.",
    sourceCode: "https://github.com/hiralinda/social-network",
    liveSite: "https://youtu.be/SPhftAeJhBU",
    course: "CS50 Web Programming with Python and JavaScript",
    comments:
      "In addition to the expected implementation, I also added a settings feature that allows users to customize the background color of the entire page according to their preferences.",
    image: "../img/img2.png",
    tags: ["Django", "Bootstrap 5", "SQLite3"],
  },
  {
    title: "Email Client",
    description:
      "This project is a simple email client built using Django for the backend and JavaScript for the frontend",
    sourceCode: "https://github.com/hiralinda/email-client",
    liveSite: "https://youtu.be/7ci0fyAInos",
    course: "CS50 Web Programming with Python and JavaScript",
    comments:
      "Since the Backend was already implemented by the course's staff, I explored the Frontend part.",
    image: "../img/img1.png",
    tags: ["Django", "Bootstrap 5", "SQLite3"],
  },
  {
    title: "Photo Portifolio Webpage",
    description:
      "An interface designed to showcase dynamic photography portfolios.",
    sourceCode:
      "https://github.com/hiralinda/Photo-Portfolio-CS50s-Final-Project?tab=readme-ov-file#photo-portifolio-webpage",
    liveSite: "https://youtu.be/LJGeUmB_FXk",
    course: "CS50’s Introduction to Computer Science Final Project",
    comments: "This project introduced me to the Backend implementation.",
    image: "../img/img3.png",
    tags: ["Flask", "SASS", "Dark Mode", "SQLite3"],
  },
  {
    title: "Wiki Encyclopedia",
    description:
      "This project is a simple Wiki Encyclopedia built using Django.",
    sourceCode: "https://github.com/hiralinda/wiki-encyclopedia",
    liveSite: "https://youtu.be/o1lEu2gQYtY",
    course: "CS50 Web Programming with Python and JavaScript",
    comments: "No comments on this project.",
    image: "../img/img4.png",
    tags: ["Django", "Bootstrap 5", "SQLite3"],
  },
  {
    title: "Bootstrap 5 Personal Homepage",
    description: "This is a mock personal homepage created with Bootstrap 5",
    sourceCode: "https://github.com/hiralinda/bootstrap-5-homepage",
    liveSite: "https://hiralinda.github.io/bootstrap-5-homepage/",
    course: "CS50's Introduction to Computer Science Problem Set 8",
    comments: "I learned a lot about Bootstrap 5 classes and how to use it.",
    image: "../img/img5.png",
    tags: ["Bootstrap 5", "HTML", "CSS"],
  },
];

const MoreProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          All Projects
        </motion.h2>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {moreProjects.map((project, index) => (
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
      </div>
    </motion.div>
  );
};

export default MoreProjects;
