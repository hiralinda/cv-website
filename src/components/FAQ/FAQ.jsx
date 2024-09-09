import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are your hobbies and interests outside of work?",
    answer:
      "I like reading books and challenge myself to read more books each year than the last. Photography is another hobby I enjoy, particularly taking portraits. I also value spending quality time with friends and family and make it a point to travel whenever possible.",
  },
  {
    question: "What’s your favorite book?",
    answer:
      "It is hard to pick a favorite. I would say the Harry Potter series for fictional and The Wild Truth by Carine McCandless for non-fictional.",
  },
  {
    question: "What’s the most interesting place you’ve traveled to?",
    answer:
      "My favorite destination so far has been the Amazon Rainforest in Brazil. I visited in 2023 and gained a deep appreciation for the world's largest forest, as well as a richer understanding of my own brazilian culture.",
  },
  {
    question: "Do you have any unique skills or talents?",
    answer:
      "I can solve the Rubik's Cube and have even taught kids how to do it. I believe that with dedication and practice, anyone can master it.",
  },
  {
    question:
      "Did you really make the Rubik's Cube that is displayed (larger screens only) on the Hero section?",
    answer: (
      <>
        Yes, I did using Blender Software and following{" "}
        <a
          href="https://www.youtube.com/watch?v=KIuH7zxHfPQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline">
          this tutorial
        </a>{" "}
        on YouTube.
      </>
    ),
  },
  {
    question: "What is your favorite AI model?",
    answer: "It was always ChatGPT until I heard about Claude.",
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
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
                <h4 className="text-xl font-semibold flex justify-between items-center text-gray-100 group-hover:text-purple-400 transition-colors duration-300">
                  {faq.question}
                  <motion.span
                    animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400 text-3xl">
                    +
                  </motion.span>
                </h4>
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
