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
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">About Me – Full Stack Developer</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am <span className="font-semibold">Param Dhama</span> a <span className="font-semibold">Full Stack Software Developer</span> with extensive experience in 
            <span className="font-semibold"> JavaScript, Python, and the MERN stack</span>, specializing in the development of scalable web applications, automation tools, and AI-driven solutions.
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            My journey as a <span className="font-semibold">web developer</span> started with a deep interest in how applications work behind the scenes. Over the years, I’ve mastered both <span className="font-semibold">frontend and backend development</span> to deliver high-quality, efficient solutions.
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            I take pride in my <span className="font-semibold">problem-solving skills</span> and my ability to write clean, maintainable code. Whether I&apos;m developing <span className="font-semibold">RESTful APIs</span> or building modern, responsive user interfaces, I focus on delivering <span className="font-semibold">exceptional user experiences</span>.
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            My goal is to grow as a proficient <span className="font-semibold">Software Engineer</span> and contribute to innovative projects that make a significant impact. I am passionate about staying ahead of the curve by learning new technologies and continuously improving my development skills.
          </p>
        </motion.div>

        {/* Right - Skills Animation */}
        <motion.div 
          className="lg:w-2/3 mt-8 lg:mt-0 grid grid-cols-1 md:flex md:flex-wrap justify-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[{
            icon: <FaCode size={40} className="text-purple-600 mb-2" />,
            title: "Frontend Development",
            description: "React.js, Next.js, Tailwind CSS, JavaScript"
          }, {
            icon: <FaServer size={40} className="text-purple-600 mb-2" />,
            title: "Backend Development",
            description: "Node.js, Express.js, JWT, Redis"
          }, {
            icon: <FaDatabase size={40} className="text-purple-600 mb-2" />,
            title: "Database Management",
            description: "MongoDB, SQL, PostgreSQL"
          }, {
            icon: <FaTools size={40} className="text-purple-600 mb-2" />,
            title: "Development Tools & Technologies",
            description: "Git, GitHub, Docker, REST APIs, WebSockets"
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
