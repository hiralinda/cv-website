import React from "react";
import { motion } from "framer-motion";
import {
  faLinkedin,
  faGithub,
  faFreeCodeCamp,
  faCodepen,
  faProjectOdin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/yourprofile",
    icon: faLinkedin,
    isCustomIcon: false,
  },
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: faGithub,
    isCustomIcon: false,
  },
  {
    platform: "Frontend Mentor",
    url: "https://www.frontendmentor.io/profile/yourusername",
    icon: "https://seeklogo.com/images/F/frontend-mentor-logo-DD85EFE0E9-seeklogo.com.png",
    isCustomIcon: true,
  },
  {
    platform: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/yourusername",
    icon: faFreeCodeCamp,
    isCustomIcon: false,
  },
  {
    platform: "The Project Odin",
    url: "https://www.theprojectodin.com/",
    icon: "https://odin-signupform-sv.netlify.app/assets/images/odin.png",
    isCustomIcon: true,
  },
  {
    platform: "LeetCode",
    url: "https://www.leetcode.com/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png",
    isCustomIcon: true,
  },
];

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Connect With Me
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}>
              {link.isCustomIcon ? (
                <img
                  src={link.icon}
                  alt={link.platform}
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <FontAwesomeIcon
                  icon={link.icon}
                  size="2x"
                  className="text-blue-400"
                />
              )}
              <span className="text-lg font-semibold">{link.platform}</span>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="text-xl mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <p className="font-light">Get in touch via email:</p>
          <p className="font-semibold mt-2 text-blue-400">
            your.email@example.com
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
