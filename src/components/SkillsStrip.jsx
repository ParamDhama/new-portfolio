import { motion } from "framer-motion";
import {
  SiJavascript, SiPython, SiC, SiReact, SiRedux, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiGithub, SiDocker, SiApachenetbeanside
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "Python", icon: <SiPython className="text-blue-300" /> },
  { name: "C", icon: <SiC className="text-gray-200" /> },
  { name: "React.js", icon: <SiReact className="text-blue-400" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-100" /> },
  { name: "REST APIs", icon: <SiApachenetbeanside className="text-orange-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-300" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-200" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
  { name: "Github", icon: <SiGithub className="text-white" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-300" /> },
];

const SkillsStrip = () => {
  return (
    <div className="overflow-hidden bg-purple-800 py-4 sm:py-2 pointer-events-none">
      <div className="flex w-max animate-marquee space-x-12">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="flex space-x-12 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {skills.map((skill, index) => (
              <div key={`${i}-${index}`} className="flex items-center space-x-2 w-auto">
                {skill.icon}
                <span className="text-sm font-medium text-gray-100 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsStrip;
