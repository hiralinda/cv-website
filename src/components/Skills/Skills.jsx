import React from "react";
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

const Skills = () => {
  const skills = [
    { icon: faReact, name: "React" },
    { icon: faNodeJs, name: "Node.js" },
    { icon: faHtml5, name: "HTML5" },
    { icon: faCss3Alt, name: "CSS3" },
    { icon: faJsSquare, name: "JavaScript" },
    { icon: faPython, name: "Python" },
    { icon: faGitAlt, name: "Git" },
    { icon: faGithub, name: "GitHub" },
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-6xl mb-4 hover:text-blue-500 transition duration-300"
              />
              <p className="text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
