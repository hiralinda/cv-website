import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyes = [
        { eye: leftEyeRef.current, pupil: leftPupilRef.current },
        { eye: rightEyeRef.current, pupil: rightPupilRef.current },
      ];

      eyes.forEach(({ eye, pupil }) => {
        if (eye && pupil) {
          const eyeRect = eye.getBoundingClientRect();
          const eyeCenterX = eyeRect.left + eyeRect.width / 2;
          const eyeCenterY = eyeRect.top + eyeRect.height / 2;

          const angle = Math.atan2(
            event.clientY - eyeCenterY,
            event.clientX - eyeCenterX
          );
          const distance = Math.min(
            eyeRect.width / 4,
            Math.hypot(event.clientX - eyeCenterX, event.clientY - eyeCenterY) /
              2
          );

          const pupilX = Math.cos(angle) * distance;
          const pupilY = Math.sin(angle) * distance;

          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Hi, I'm [Hiralinda]
          </h1>
          <p className="text-lg md:text-xl mb-6">
            I'm a [self-taught developer] with a passion for []. I love creating
            [] and exploring new technologies.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Get in Touch
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition duration-300">
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative w-full h-64 md:h-full">
            {/* animation */}
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-64 h-64 md:w-full md:h-full transition-all duration-300 ease-in-out hover:scale-110"
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                {/* Body */}
                <path
                  d="M50 100 C50 50, 150 50, 150 100 S50 150, 50 100 Z"
                  className="animate-draw-loop glow"
                  fill="brown"
                />

                {/* Head */}
                <circle
                  cx="100"
                  cy="70"
                  r="30"
                  className="animate-draw-loop glow"
                  fill="brown"
                />

                {/* Eyes */}
                <g>
                  <circle
                    ref={leftEyeRef}
                    cx="85"
                    cy="65"
                    r="5"
                    className="animate-draw-loop glow"
                    fill="white"
                  />
                  <circle
                    ref={leftPupilRef}
                    cx="85"
                    cy="65"
                    r="2"
                    className="animate-pulse glow"
                    fill="black"
                  />
                </g>
                <g>
                  <circle
                    ref={rightEyeRef}
                    cx="115"
                    cy="65"
                    r="5"
                    className="animate-draw-loop glow"
                    fill="white"
                  />
                  <circle
                    ref={rightPupilRef}
                    cx="115"
                    cy="65"
                    r="2"
                    className="animate-pulse glow"
                    fill="black"
                  />
                </g>

                {/* Nose */}
                <circle
                  cx="100"
                  cy="80"
                  r="3"
                  className="animate-draw-loop glow"
                  fill="black"
                />

                {/* Legs */}
                <path d="M70 150 L70 180" className="animate-draw-loop glow" />
                <path d="M90 150 L90 180" className="animate-draw-loop glow" />
                <path
                  d="M110 150 L110 180"
                  className="animate-draw-loop glow"
                />
                <path
                  d="M130 150 L130 180"
                  className="animate-draw-loop glow"
                />

                {/* Tail */}
                <path
                  d="M150 100 Q160 110, 150 120"
                  className="animate-draw-loop glow"
                />

                {/* Ears */}
                <path
                  d="M85 40 Q80 30, 90 30"
                  className="animate-draw-loop glow"
                />
                <path
                  d="M115 40 Q110 30, 120 30"
                  className="animate-draw-loop glow"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
