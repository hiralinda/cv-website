import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    organization: "CS50",
    date: "Aug 2024",
    credentials:
      "https://certificates.cs50.io/c35e7470-e383-4497-a4de-2f01d5a4cff9.pdf?size=letter",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/640px-Harvard_University_coat_of_arms.svg.png",
  },
  {
    title: "Web Programming with Python and JavaScript",
    organization: "CS50",
    date: "Aug 2024",
    credentials:
      "https://certificates.cs50.io/6c842a4f-b367-42a7-9273-c1476b2b7f87.pdf?size=letter",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/640px-Harvard_University_coat_of_arms.svg.png",
  },
  {
    title: "Introduction to Programming with Python",
    organization: "CS50",
    date: "Jul 2024",
    credentials:
      "https://certificates.cs50.io/4c18d491-c4a1-4dd5-8aa5-89393429dbf7.pdf?size=letter",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/640px-Harvard_University_coat_of_arms.svg.png",
  },
  {
    title: "Build a website with Wordpress",
    organization: "Coursera Project Network",
    date: "June 2024",
    credentials:
      "https://www.coursera.org/account/accomplishments/verify/2C8JPZCKF5TE",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-coursera-3628707-3029932.png",
  },
  {
    title: "Responsive Web Design",
    organization: "FreeCodeCamp",
    date: "April 2024",
    credentials:
      "https://www.freecodecamp.org/certification/hiralinda/responsive-web-design",
    icon: "https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg",
  },
  {
    title: "CS50x",
    organization: "CS50",
    date: "Apr 2024",
    credentials:
      "https://certificates.cs50.io/7797c75b-f01a-400b-909c-94217bb9d190.pdf?size=letter",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/640px-Harvard_University_coat_of_arms.svg.png",
  },
  {
    title: "Introduction to Computer Programming",
    organization: "University of London",
    date: "May 2022",
    credentials:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/4NF53LCTSWJD",
    icon: "https://upload.wikimedia.org/wikipedia/sco/thumb/3/3d/University_of_London.svg/1200px-University_of_London.svg.png",
  },
  {
    title: "Python for Everybody",
    organization: "University of Michigan",
    date: "Aug 2022",
    credentials:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/VUM26Y6BLECL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Michigan_Wolverines_logo.svg/1200px-Michigan_Wolverines_logo.svg.png",
  },
  {
    title: "Scientific Computing with Python",
    organization: "FreeCodeCamp",
    date: "Aug 2022",
    credentials:
      "https://www.freecodecamp.org/certification/hiralinda/scientific-computing-with-python-v7",
    icon: "https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg",
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
          className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
          Certifications
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-700 overflow-hidden relative group text-center h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mb-4 p-3 bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center z-10">
                {typeof cert.icon === "string" ? (
                  <img
                    src={cert.icon}
                    alt={cert.organization}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={cert.icon}
                    className="text-4xl text-blue-400"
                  />
                )}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300 z-10">
                {cert.title}
              </h3>
              <p className="text-md mb-1 text-gray-300 z-10">
                {cert.organization}
              </p>
              <p className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-full mb-4 z-10">
                {cert.date}
              </p>
              <div className="flex-grow"></div>
              <a
                href={cert.credentials}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-2 z-10">
                <FontAwesomeIcon icon={faLink} className="mr-1" />
                View Credentials
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certificates;
