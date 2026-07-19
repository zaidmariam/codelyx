import { motion } from "framer-motion";
import { Sparkles, Workflow, Database } from "lucide-react";

import {
  FaReact,
  FaLaravel,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import { SiTailwindcss, SiMysql, SiMongodb, SiPostman } from "react-icons/si";

const techs = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]",
    border: "group-hover:border-cyan-400/30",
  },
  {
    name: "Laravel",
    icon: <FaLaravel />,
    color: "text-red-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]",
    border: "group-hover:border-red-500/30",
  },
  {
    name: "PHP",
    icon: <FaPhp />,
    color: "text-indigo-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(129,140,248,0.25)]",
    border: "group-hover:border-indigo-400/30",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(250,204,21,0.25)]",
    border: "group-hover:border-yellow-400/30",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]",
    border: "group-hover:border-orange-500/30",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]",
    border: "group-hover:border-blue-400/30",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]",
    border: "group-hover:border-sky-400/30",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]",
    border: "group-hover:border-blue-400/30",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]",
    border: "group-hover:border-green-500/30",
  },
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative py-28 bg-[#0B1120] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20">
            TECH STACK
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
            I use modern technologies to build fast, scalable, and responsive
            web applications with clean architecture and excellent user
            experience.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -6,
              }}
              className={`group relative overflow-hidden rounded-2xl bg-[#111827]/60 backdrop-blur-md border border-white/10 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 ${tech.glow} ${tech.border}`}
            >
              {/* Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5" />

              {/* Icon */}
              <div
                className={`relative z-10 text-5xl ${tech.color} transition-transform duration-300 group-hover:scale-110`}
              >
                {tech.icon}
              </div>

              {/* Name */}
              <span className="relative z-10 text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white transition">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
