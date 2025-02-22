/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll position
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all z-[9999] ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className={`text-3xl font-bold tracking-wide transition-all ${
          isScrolled ? "text-purple-600" : "text-white"
        }`}>
          Param Dhama
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Project", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`relative text-lg font-medium after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full transition-all ${
                isScrolled ? "text-purple-600" : "text-white"
              }`}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Social Media Icons (Desktop) */}
        <div className={`hidden md:flex space-x-4 transition-all ${
          isScrolled ? "text-purple-600" : "text-white"
        }`}>
       
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-yellow-400 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-yellow-400 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-yellow-400 transition-colors" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-all ${
            isScrolled ? "text-purple-600" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[4rem] left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4"
          >
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 text-lg font-medium hover:text-purple-600 w-full text-center py-2"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}

            {/* Social Media Icons (Mobile) */}
            <div className="flex space-x-4 mt-4 text-gray-800">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="hover:text-purple-600" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="hover:text-purple-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} className="hover:text-purple-600" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
