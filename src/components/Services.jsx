import { motion } from "framer-motion";
import {
  FaCode,
  FaShoppingCart,
  FaCogs,
  FaCloudDownloadAlt,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-3xl text-blue-400" />,
    title: "Full Stack Development",
    description:
      "End-to-end development of robust web applications. Seamless integrations between fast frontend interfaces and secure backend architectures.",
  },
  {
    icon: <FaShoppingCart className="text-3xl text-sky-400" />,
    title: "E-Commerce Solutions",
    description:
      "Fully customized online storefronts with secure payment gateway integrations, automated order processing, and custom admin management panels.",
  },
  {
    icon: <FaCogs className="text-3xl text-indigo-400" />,
    title: "Custom Web Applications",
    description:
      "Tailor-made software solutions designed to solve your unique business bottlenecks and automate operations with high performance.",
  },
  {
  icon: <FaCloudDownloadAlt className="text-3xl text-cyan-400" />,
  title: "REST API Development",
  description:
    "Design and development of secure, scalable REST APIs for web applications, admin dashboards, and third-party service integrations.",
},
 {
  icon: <FaTools className="text-3xl text-blue-500" />,
  title: "Website Maintenance",
  description:
    "Ongoing website maintenance including bug fixes, performance optimization, security updates, database management, and feature enhancements.",
},
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="services" className="py-28 bg-[#0B1120] text-white relative">
      {/* Background ambient light */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px] left-10 top-1/4 pointer-events-none" />

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
            SERVICES
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 leading-tight">
            Modern web solutions <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
              built for performance, scalability, and business growth.
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "rgba(59, 130, 246, 0.25)",
                boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.15)",
              }}
              className="bg-[#0F172A]/40 border border-white/5 p-8 rounded-2xl backdrop-blur-md relative group overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Inner ambient card hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-blue-500/20 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent glow bar */}
              <div className="h-[2px] w-0 bg-gradient-to-r from-blue-500 to-sky-400 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}