import React from "react";
import { motion } from "framer-motion";
import {
  faLinkedin,
  faGithub,
  faFreeCodeCamp,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/yourprofile",
    icon: faLinkedin,
  },
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: faGithub,
  },
  {
    platform: "Frontend Mentor",
    url: "https://www.frontendmentor.io/profile/yourusername",
    icon: faLinkedin,
  },
  {
    platform: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/yourusername",
    icon: faFreeCodeCamp,
  },
];

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}>
                <FontAwesomeIcon icon={link.icon} size="2x" />
                <span>{link.platform}</span>
              </motion.a>
            ))}
          </div>
          <motion.div
            className="text-lg mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <p>your.email@example.com</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
