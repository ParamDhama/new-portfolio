import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import person from '/person.png';

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col justify-center min-h-screen bg-gradient-to-b from-purple-500 to-purple-800 text-white relative pt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Content with Animation */}
        <motion.main 
          className="text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cursor-default">
            Hi, I&apos;m <span className="text-yellow-400">Param Dhama</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6 cursor-default">
            A passionate <span className="font-semibold">Full-Stack Developer</span> who loves creating 
            meaningful solutions, writing clean code, and solving complex problems.
            Constantly learning new technologies and improving my skills. 🚀
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="https://github.com/ParamDhama" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/paramdhama/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400"><FaLinkedin /></a>
            <a href="https://x.com/dhama_param" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400"><FaTwitter /></a>
          </div>
          <a href="/Param Dhama Resume.pdf" download={"Param Dhama Resume.pdf"}>
          <motion.button 
            className="mt-6 px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
          </a>
        </motion.main>

        {/* Right Image with Floating & Glow Effect */}
        <motion.aside 
          className="mt-8 lg:mt-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.img 
            src={person} 
            alt="Profile" 
            className="w-72 md:w-96 rounded-full shadow-lg"
            loading="lazy"
            decoding="async"
            animate={{ y: [0, -10, 0] }} // Floating effect
            transition={{  duration: 1, ease: "easeInOut" }}
            whileHover={{
              scale: 1.05, 
              rotate: 5,
              boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.6)"
            }}
          />
        </motion.aside>
      </div>
    </section>
  );
};

export default HeroSection;
