import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const certifications = [
  {
    title: "Certified React Developer",
    organization: "React Academy",
    date: "June 2023",
    icon: faCertificate,
  },
  {
    title: "JavaScript Specialist",
    organization: "JavaScript Institute",
    date: "April 2023",
    icon: faCertificate,
  },
  {
    title: "Full-Stack Developer",
    organization: "Web Dev University",
    date: "December 2022",
    icon: faCertificate,
  },
  {
    title: "Certified React Developer",
    organization: "React Academy",
    date: "June 2023",
    icon: faCertificate,
  },
  {
    title: "JavaScript Specialist",
    organization: "JavaScript Institute",
    date: "April 2023",
    icon: faCertificate,
  },
  {
    title: "Full-Stack Developer",
    organization: "Web Dev University",
    date: "December 2022",
    icon: faCertificate,
  },
];

const Certificates = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={cert.icon}
                className="text-6xl mb-4 text-blue-500"
              />
              <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-lg mb-1">{cert.organization}</p>
              <p className="text-sm text-gray-400">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
