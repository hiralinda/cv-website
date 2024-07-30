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
                  d="M100 50 L60 180 L140 180 Z"
                  className="animate-draw-loop glow"
                />

                {/* Eyes */}
                <g>
                  <circle
                    ref={leftEyeRef}
                    cx="80"
                    cy="90"
                    r="20"
                    className="animate-draw-loop glow"
                    fill="white"
                  />
                  <circle
                    ref={leftPupilRef}
                    cx="80"
                    cy="90"
                    r="5"
                    className="animate-pulse glow"
                    fill="currentColor"
                  />
                </g>
                <g>
                  <circle
                    ref={rightEyeRef}
                    cx="120"
                    cy="90"
                    r="20"
                    className="animate-draw-loop glow"
                    fill="white"
                  />
                  <circle
                    ref={rightPupilRef}
                    cx="120"
                    cy="90"
                    r="5"
                    className="animate-pulse glow"
                    fill="currentColor"
                  />
                </g>

                {/* Beak */}
                <path
                  d="M95 110 L100 120 L105 110"
                  className="animate-draw-loop glow"
                />

                {/* Wings */}
                <path
                  d="M60 100 L20 150 L60 180"
                  className="animate-draw-loop glow"
                />
                <path
                  d="M140 100 L180 150 L140 180"
                  className="animate-draw-loop glow"
                />

                {/* Geometric patterns */}
                <path d="M70 130 L130 130" className="animate-draw-loop glow" />
                <path d="M65 150 L135 150" className="animate-draw-loop glow" />
                <path d="M60 170 L140 170" className="animate-draw-loop glow" />

                {/* Ears / Horn-like feathers */}
                <path d="M85 50 L70 20" className="animate-draw-loop glow" />
                <path d="M115 50 L130 20" className="animate-draw-loop glow" />

                {/* Branch */}
                <path
                  d="M0 190 C50 180 150 180 200 190"
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
