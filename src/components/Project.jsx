import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Real-Time Chat Application",
    description: "A real-time chat application built using MERN Stack and Socket.io for instant messaging. Features group chat, online status, and JWT authentication.",
    techStack: ["MERN", "Socket.io", "JWT", "Tailwind CSS"],
  },
  {
    title: "Inventory Management System",
    description: "A system for tracking stock levels, managing orders, and automating alerts. Features a REST API and role-based access control.",
    techStack: ["Node.js", "MongoDB", "Express.js", "Chart.js"],
  },
  {
    title: "Job Portal",
    description: "A job portal with role-based authentication, job postings, application tracking, and resume uploads using Multer.",
    techStack: ["MERN", "Multer", "Email Notifications"],
  },
  {
    title: "Shortify",
    description: "A modern and secure URL shortener built with React, Node.js, and MongoDB, featuring JWT authentication, link management, QR code generation, and a sleek, responsive UI.",
    techStack: ["MERN", "Tailwindcss","Email Notification"],
    github: "https://github.com/ParamDhama/shortify-frontend"
  }
];

const Project = () => {
  return (
    <section id="project" className="min-h-screen bg-gray-100 py-16 px-6 md:px-12 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Heading Animation */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-purple-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my major projects showcasing my skills in <span className="font-bold text-purple-600">Full-Stack Development</span>.
        </motion.p>

        {/* Projects Grid Animation */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-purple-600">{project.title}</h3>
              <p className="text-gray-700 mt-2 flex-1">{project.description}</p>
              
              {/* Tech Stack Badges */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <motion.span 
                    key={idx} 
                    className="px-3 py-1 bg-purple-200 text-purple-800 text-sm font-semibold rounded-md"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex justify-between">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-purple-600">
                  <FaGithub className="mr-2" /> GitHub
                </a>}
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-purple-600">
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
