import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-100 py-16 px-6 md:px-12 flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between cursor-default">
        
        {/* Left - About Text Animation */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a <span className="font-semibold">Passionate Software Developer</span> with expertise in 
            <span className="font-semibold"> JavaScript, Python, and the MERN stack.</span>  
            Experienced in building scalable web applications, automation tools, and AI-powered solutions.
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            I have a strong background in <span className="font-semibold">backend development, API integrations,</span>  
            and authentication systems. Committed to delivering <span className="font-semibold">efficient, secure, and 
            user-centric applications.</span>
          </p>
        </motion.div>

        {/* Right - Skills Animation */}
        <motion.div 
          className="lg:w-1/2 mt-8 lg:mt-0 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[{
            icon: <FaCode size={40} className="text-purple-600 mb-2" />,
            title: "Frontend",
            description: "React.js, Tailwind CSS, JavaScript"
          }, {
            icon: <FaServer size={40} className="text-purple-600 mb-2" />,
            title: "Backend",
            description: "Node.js, Express.js, JWT"
          }, {
            icon: <FaDatabase size={40} className="text-purple-600 mb-2" />,
            title: "Database",
            description: "MongoDB, SQL"
          }, {
            icon: <FaTools size={40} className="text-purple-600 mb-2" />,
            title: "Tools",
            description: "Git, GitHub, REST APIs"
          }].map((skill, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="text-gray-600 text-center">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
