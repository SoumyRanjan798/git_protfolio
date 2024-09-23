import React, { useState } from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded-full object-cover mb-8 md:mb-0 shadow-lg border-4 border-blue-500"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I’m a passionate software developer, driven by the goal of reshaping the digital world through the creation
              of cutting-edge applications. As a full-stack developer, I thrive on building robust features for both
              frontend and backend systems. I have a talent for organizing REST APIs and optimizing database structures.
              On the frontend, I love bringing web designs to life with engaging animations and immersive 3D components.
              My strength lies in creating mobile-responsive designs that are both user-friendly and functional.
            </p>
            <p className="text-lg mb-8">
              I have a deep interest in automation, leveraging tools like web scrapers, APIs, and AI to build systems that
              streamline complex workflows into a single efficient action. I’m always pushing the limits when testing
              systems for performance and memory efficiency, constantly fine-tuning my code to achieve peak performance.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3.5+
                </h3>
                <p className="text-lg">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  15+
                </h3>
                <p className="text-lg">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p className="text-lg">Happy Clients</p>
              </div>
              <div>
                <h3
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer"
                  onClick={toggleModal}
                >
                  3
                </h3>
                <p className="text-lg">Organizations Worked With</p>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-white">Organizations</h3>
              <ul className="list-disc list-inside text-white">
                <li>Infosys (2022 - 2024)</li>
                <li>INDUS Net Tech (2024 - Present)</li>
              </ul>
              <button
                className="mt-6 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded text-white"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
