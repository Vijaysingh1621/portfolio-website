// components/Projects.js
import projectimg from "../../public/project2.jpg"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  { 
    id: 1, 
    title: "Project 1", 
    description: "This project showcases skills in front-end development and responsive design. It includes modern UI components, animations, and a dynamic data-driven structure.",
    fullDescription: "This project showcases skills in front-end development, using responsive design, animations, and a data-driven structure. It integrates advanced features and modular components, ensuring a smooth user experience across various devices.",
    image: projectimg,
    liveLink: "#", 
    githubLink: "#"
  },
  { 
    id: 2, 
    title: "Project 2", 
    description: "A full-stack project with a beautiful UI and intuitive features that solve real-world problems.",
    fullDescription: "A full-stack project designed with a beautiful UI and intuitive features that solve real-world problems. This project integrates back-end and front-end development, with API connectivity and real-time data features.",
    image: projectimg,
    liveLink: "#", 
    githubLink: "#"
  },
  { 
    id: 3, 
    title: "Project 3", 
    description: "This project showcases skills in front-end development and responsive design. It includes modern UI components, animations, and a dynamic data-driven structure.",
    fullDescription: "This project showcases skills in front-end development, using responsive design, animations, and a data-driven structure. It integrates advanced features and modular components, ensuring a smooth user experience across various devices.",
    image: projectimg,
    liveLink: "#", 
    githubLink: "#"
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleViewMore = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="p-10 pt-[100px] lg:px-[150px] bg-gradient-to-b from-gray-100 to-gray-300">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
            
            <p className="text-gray-600 mb-4">
              {expandedProject === project.id ? project.fullDescription : project.description}
            </p>

            <button 
              onClick={() => handleViewMore(project.id)}
              className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-200"
            >
              {expandedProject === project.id ? "Show Less" : "View More"}
            </button>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-600 hover:text-green-800 transition duration-200"
              >
                <FaExternalLinkAlt className="mr-2" /> Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 hover:text-gray-900 transition duration-200"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
