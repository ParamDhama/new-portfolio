import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A fully responsive personal portfolio crafted with the MERN stack, Tailwind CSS, and Framer Motion.",
    longDescription:
      "The Personal Portfolio project is a dynamic and responsive web application that showcases my skills, projects, and achievements. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), Tailwind CSS for modern styling, and Framer Motion for smooth animations, this portfolio is designed to make a strong impression. It highlights my full-stack development skills through an elegant, interactive interface that adapts to any device. The project also integrates version control via GitHub and a live demo link to demonstrate real-time progress and updates. This portfolio effectively reflects my technical expertise and dedication to building user-friendly applications.",
    techStack: ["MERN", "Tailwindcss", "Framer-Motion"],
    github: "https://github.com/ParamDhama/new-portfolio",
    live: "https://paramdhama.netlify.app/",
  },
  {
    title: "Street Surge Redesign",
    description:
      "A modern redesign of the Street Surge company website using React, Tailwind CSS, and Framer Motion.",
    longDescription:
      "The Street Surge Redesign project focuses on revamping the company website with a modern and visually appealing design. Built using React, Tailwind CSS, and Framer Motion, the website delivers smooth animations and a clean, responsive layout. The redesign enhances the overall user experience by improving navigation, aesthetics, and performance. Each section has been thoughtfully crafted to maintain a professional and dynamic feel, highlighting the brand's identity while leveraging cutting-edge frontend technologies.",
    techStack: ["React", "Tailwindcss", "Framer-Motion", "JavaScript"],
    github: "https://github.com/ParamDhama/streetsurge-redesign",
    live: "https://fake-street-surge.netlify.app/",
  },
  {
    title: "MetroNav",
    description:
      "An interactive metro navigation system to find the shortest path and fare between two stations.",
    longDescription:
      "MetroNav is an advanced metro navigation system built using Java and Java GUI. It efficiently calculates the shortest route between two metro stations, displaying the total travel time and fare charges. The system leverages Dijkstra's algorithm for optimal pathfinding and integrates data structures to manage station and route information. The interactive GUI makes it easy for users to select start and destination stations, view the metro map, and get instant results. MetroNav enhances user experience with a clear visual representation of routes and precise calculations.",
    techStack: ["Java", "Java GUI", "DSA", "Dijkstra's Algorithm"],
    github: "https://github.com/ParamDhama/metronav",
  },
  {
    title: "Shortify",
    description:
      "A modern and secure URL shortener built with React, Node.js, and MongoDB.",
    longDescription:
      "Shortify is a robust and efficient URL shortening platform designed to simplify link management and tracking. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it features JWT-based authentication for secure user sessions. The system also includes real-time QR code generation and email notifications for critical updates. The responsive interface ensures a smooth user experience across all devices. Additionally, users can manage their shortened links through an intuitive dashboard. Shortify is optimized for performance, leveraging MongoDB for data persistence and implementing comprehensive error handling for seamless operations.",
    techStack: ["MERN", "Tailwindcss", "Email Notification"],
    github: "https://github.com/ParamDhama/shortify-frontend",
  },
  {
    title: "Job Portal",
    description:
      "A dynamic job portal with role-based authentication, job postings, and resume uploads.",
    longDescription:
      "The Job Portal project is an end-to-end platform connecting job seekers with employers. Built on the MERN stack, it features robust authentication mechanisms using JWT and role-based access control. The system allows employers to post job openings while applicants can submit their resumes via Multer for seamless file uploads. Integrated email notifications keep users updated on their application status. The intuitive interface, powered by Tailwind CSS, offers a smooth user experience across devices. By simplifying the job application process, this portal enhances employment opportunities and recruitment efficiency.",
    techStack: ["MERN", "Multer", "Email Notifications"],
    github: "https://github.com/ParamDhama/TechBridge",
    live: "https://techbridgepage.netlify.app/"
  },
  {
    title: "StickyNotes",
    description:
      "A lightweight sticky notes application built with Electron.js and Node.js for Linux Ubuntu.",
    longDescription:
      "StickyNotes is a productivity-enhancing application designed to provide a simple and effective way to manage tasks and reminders on Linux Ubuntu systems. Unlike Windows, Linux does not have a built-in sticky notes app by default. StickyNotes fills this gap by offering a compact and efficient tool that consumes minimal memory and screen space. Data is stored locally, ensuring quick access and offline functionality. With an intuitive interface, users can create, edit, and delete notes effortlessly. The application is optimized to boost productivity without sacrificing system performance.",
    techStack: ["Electron.js", "Node.js", "Linux"],
  },
  
  {
    title: "Discord-Bot",
    description:
      "A custom Discord bot using Node.js that leverages the Google Gemini API.",
    longDescription:
      "This Discord Bot project is an interactive tool designed to enhance user engagement within Discord communities. Developed using Node.js and integrated with the Google Gemini API, the bot can respond to commands, manage server interactions, and deliver automated responses. Its real-time communication features promote vibrant and dynamic server environments. With robust error handling and API integration, the bot processes user inputs efficiently, providing accurate and prompt replies. The modular architecture allows for easy feature expansion, making it adaptable to evolving community needs and maintaining smooth operation across various server configurations.",
    techStack: ["Nodejs", "Google Gemini", "Javascript"],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A real-time chat application built using the MERN Stack and Socket.io.",
    longDescription:
      "The Real-Time Chat Application is a dynamic communication platform that supports group chats and individual messaging. Developed with the MERN stack and Socket.io, it features seamless live messaging with low latency. The application implements JWT-based authentication to ensure secure conversations. Online status indicators and user presence tracking enhance interactivity. Additionally, the chat UI is built with Tailwind CSS for a sleek and responsive design. The backend efficiently handles multiple connections while maintaining data integrity. This application is ideal for fostering real-time communication and collaboration among users.",
    techStack: ["MERN", "Socket.io", "JWT", "Tailwind CSS"],
  },
  {
    title: "Inventory Management System",
    description:
      "A comprehensive system for tracking stock levels, managing orders, and automating alerts.",
    longDescription:
      "The Inventory Management System is a robust solution for efficiently managing stock, orders, and inventory alerts. Built with Node.js, Express.js, MongoDB, and Chart.js, it provides real-time data visualization and insightful analytics. The application features role-based access control to maintain data security and streamline operations. Users can track inventory levels, generate reports, and set threshold alerts to mitigate stock issues. Its RESTful API ensures seamless integration with other business systems. This project is designed to optimize inventory management processes for medium to large-scale enterprises, enhancing operational efficiency.",
    techStack: ["Node.js", "MongoDB", "Express.js", "Chart.js"],
  },

];


const Project = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Toggle showing more projects
  const toggleShowMore = () => setShowMore(!showMore);

  // Handle opening the modal
  const openModal = (project) => setSelectedProject(project);

  // Handle closing the modal
  const closeModal = () => setSelectedProject(null);

  const displayedProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section id="project" className="  bg-gray-100 py-16 px-6 md:px-12 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-purple-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => openModal(project)}
            >
              <h3 className="text-xl font-semibold text-purple-600">{project.title}</h3>
              <p className="text-gray-700 text-justify mt-2">{project.description}</p>
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

        {/* Show More/Less Button */}
        <motion.button
          onClick={toggleShowMore}
          className="mt-8 px-6 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showMore ? "Show Less" : "Show More"}
        </motion.button>

        {/* Modal for Project Details */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-purple-500 z-[999]"
              onClick={closeModal}
            >
              <FaTimes size={30} />
            </button>

            <motion.div
              key={selectedProject.title}
              className="bg-white rounded-lg p-6 max-w-2xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-2xl font-semibold text-purple-600">{selectedProject.title}</h2>
              <p className="text-gray-700 text-justify mt-2">{selectedProject.longDescription}</p>

              {/* Tech Stack Badges */}
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, idx) => (
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
              <div className="mt-4 flex justify-start gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-purple-600"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-purple-600"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Project;
