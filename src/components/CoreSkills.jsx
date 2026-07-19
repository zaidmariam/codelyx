import { motion } from "framer-motion";
import { Workflow, Database, Sparkles } from "lucide-react";

const skills = [
  {
    title: "API Development",
    description:
      "Building secure and scalable REST APIs with Laravel, authentication, CRUD operations, and seamless frontend integration.",
    icon: <Workflow size={42} />,
    color: "text-emerald-400",
    border: "hover:border-emerald-400/30",
    glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.20)]",
  },
  {
    title: "Database Design",
    description:
      "Designing efficient relational databases, optimizing queries, and creating scalable data structures using MySQL and MongoDB.",
    icon: <Database size={42} />,
    color: "text-blue-400",
    border: "hover:border-blue-400/30",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]",
  },
  {
    title: "Clean Code",
    description:
      "Writing clean, reusable and maintainable code following best practices, ensuring readability, scalability and long-term reliability.",
    icon: <Sparkles size={42} />,
    color: "text-yellow-300",
    border: "hover:border-yellow-300/30",
    glow: "hover:shadow-[0_0_30px_rgba(253,224,71,0.20)]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

export default function CoreSkills() {
  return (
    <section
      id="core-skills"
      className="relative py-28 bg-[#0F172A] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[180px] left-1/2 -translate-x-1/2 top-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
            CORE SKILLS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            What I Bring to Every Project
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            Beyond technologies, I focus on building scalable systems,
            writing maintainable code, and delivering reliable solutions
            with performance and quality in mind.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-300 ${skill.border} ${skill.glow}`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5" />

              <div
                className={`relative z-10 ${skill.color} mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                {skill.icon}
              </div>

              <h3 className="relative z-10 text-2xl font-bold mb-4">
                {skill.title}
              </h3>

              <p className="relative z-10 text-gray-400 leading-7">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}