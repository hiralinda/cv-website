import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Skills", "Certificates", "Projects", "FAQ", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.a
            href="/hireligia"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Hire Ligia
          </motion.a>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1, color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}>
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block py-3 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300">
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer">
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
