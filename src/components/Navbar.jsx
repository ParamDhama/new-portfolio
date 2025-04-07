import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { PopupButton } from "react-calendly";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ["Home", "About", "Project", "Achievement", "Testimonials", "Contact"];
  const socialLinks = [
    { href: "https://github.com/ParamDhama", icon: <FaGithub size={24} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/paramdhama/", icon: <FaLinkedin size={24} />, label: "LinkedIn" },
    { href: "https://x.com/dhama_param", icon: <FaTwitter size={24} />, label: "Twitter" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-all z-[1] ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            aria-label="Home"
            className={`text-xl md:text-3xl font-bold tracking-wide transition-all cursor-pointer ${
              isScrolled ? "text-purple-600" : "text-white"
            }`}
          >
            PD
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className={`relative text-lg font-medium after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full transition-all ${
                      isScrolled ? "text-purple-600" : "text-white"
                    }`}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons and Schedule Call Button (Desktop) */}
          <div className="hidden md:flex space-x-4 items-center transition-all">
            {socialLinks.map(({ href, icon, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`${isScrolled ? "text-purple-600" : "text-white"}`}
              >
                {icon}
              </a>
            ))}

            {/* Schedule Call Button using PopupButton */}
            <PopupButton
              url="https://calendly.com/dhamaparam/30min" // Replace with your Calendly URL
              rootElement={document.getElementById("root")}
              text="Schedule Call"
              className="ml-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-all"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[4rem] left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4"
            >
              <ul className="flex flex-col items-center space-y-4 w-full">
                {navLinks.map((item, index) => (
                  <li key={index} className="w-full text-center">
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-800 text-lg font-medium hover:text-purple-600 w-full py-2 block"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>

              {/* Social Media Icons (Mobile) */}
              <div className="flex space-x-4 mt-4 text-gray-800" aria-label="Social links">
                {socialLinks.map(({ href, icon, label }, index) => (
                  <a key={index} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    {icon}
                  </a>
                ))}
              </div>

              {/* Schedule Call Button (Mobile) */}
              <PopupButton
                url="https://calendly.com/dhamaparam/30min" // Replace with your Calendly URL
                rootElement={document.getElementById("root")}
                text="Schedule Call"
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-all"
              />
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
