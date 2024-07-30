import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-white text-2xl font-bold">
            Portfolio
          </a>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300">
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300">
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300">
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300">
              Skills
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">
            About
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">
            Projects
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">
            Skills
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
