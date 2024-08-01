import React from "react";

const moreProjects = [
  {
    title: "Blog Platform",
    description:
      "A blog platform with user authentication and CRUD operations.",
    sourceCode: "https://github.com/yourusername/blog-platform",
    liveSite: "https://yourblogplatform.com",
    course: "Web Development Bootcamp",
    comments: "Learned about user authentication and advanced routing.",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    sourceCode: "https://github.com/yourusername/portfolio-website",
    liveSite: "https://yourportfolio.com",
    course: "Personal Project",
    comments: "This was a great way to learn Tailwind CSS and React!",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "E-commerce Store",
    description: "An online store built with React and Node.js.",
    sourceCode: "https://github.com/yourusername/ecommerce-store",
    liveSite: "https://yourecommerce.com",
    course: "Full-Stack Development Course",
    comments: "I learned a lot about state management and API integration.",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Chat Application",
    description: "A real-time chat application using WebSocket.",
    sourceCode: "https://github.com/yourusername/chat-app",
    liveSite: "https://yourchatapp.com",
    course: "Advanced JavaScript Course",
    comments:
      "This project helped me understand WebSocket and real-time communication.",
    image: "https://via.placeholder.com/300",
    tags: ["WebSocket", "JavaScript", "Node.js"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    sourceCode: "https://github.com/yourusername/portfolio-website",
    liveSite: "https://yourportfolio.com",
    course: "Personal Project",
    comments: "This was a great way to learn Tailwind CSS and React!",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "E-commerce Store",
    description: "An online store built with React and Node.js.",
    sourceCode: "https://github.com/yourusername/ecommerce-store",
    liveSite: "https://yourecommerce.com",
    course: "Full-Stack Development Course",
    comments: "I learned a lot about state management and API integration.",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Chat Application",
    description: "A real-time chat application using WebSocket.",
    sourceCode: "https://github.com/yourusername/chat-app",
    liveSite: "https://yourchatapp.com",
    course: "Advanced JavaScript Course",
    comments:
      "This project helped me understand WebSocket and real-time communication.",
    image: "https://via.placeholder.com/300",
    tags: ["WebSocket", "JavaScript", "Node.js"],
  },
];

const MoreProjects = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">All Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {moreProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-lg shadow-lg glow-on-hover">
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
                Live Website
              </a>
              <p className="text-sm text-gray-400 mt-2">
                Course: {project.course}
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
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
