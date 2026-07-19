import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="projects"
      className="py-28 bg-[#0F172A]/50 text-white relative overflow-hidden"
    >
      {/* Accent blur blob */}
      <div className="absolute w-[450px] h-[450px] bg-sky-500/[0.015] rounded-full blur-[120px] right-10 top-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-wider text-blue-400 mb-4">
            PORTFOLIO
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 leading-tight">
            Featured Projects <br />
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              designed for scale, speed, and aesthetics.
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group overflow-hidden rounded-3xl bg-[#0B1120]/60 border border-white/5 backdrop-blur-md hover:border-blue-500/20 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col justify-between"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Source Code Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1E293B]/50 border border-white/5 hover:border-blue-500/30 hover:bg-[#1E293B] text-gray-300 hover:text-white transition-all duration-300 font-semibold text-sm"
                >
                  <FaGithub className="text-lg" />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}