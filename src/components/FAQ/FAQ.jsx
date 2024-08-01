import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is your availability for work?",
    answer: "I am available for full-time positions starting immediately.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Node.js, Express, and MongoDB.",
  },
  {
    question: "Can you work remotely?",
    answer: "Yes, I am open to remote work opportunities.",
  },
  {
    question: "What is your availability for work?",
    answer: "I am available for full-time positions starting immediately.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Node.js, Express, and MongoDB.",
  },
  {
    question: "Can you work remotely?",
    answer: "Yes, I am open to remote work opportunities.",
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700">
              <button
                className="w-full text-left focus:outline-none group"
                onClick={() => handleToggle(index)}>
                <h3 className="text-2xl font-semibold flex justify-between items-center text-gray-100 group-hover:text-purple-400 transition-colors duration-300">
                  {faq.question}
                  <motion.span
                    animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400 text-3xl">
                    +
                  </motion.span>
                </h3>
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}>
                    <p className="text-lg mt-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
