import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaArrowRight } from "react-icons/fa";

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const floatAnimation = {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const iconAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
  };


  return (
    <section
      id="home"
      className="
      min-h-screen 
      flex 
      items-center 
      justify-center 
      relative 
      overflow-hidden 
      bg-[#0B1120] 
      pt-24 
      pb-16 
      bg-grid-pattern
      "
    >

      {/* Glow 1 */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, .95, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute 
        w-[350px] 
        h-[350px] 
        bg-blue-600/20 
        rounded-full 
        blur-[100px]
        top-[10%]
        left-[5%]
        "
      />


      {/* Glow 2 */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -50, 0],
          scale: [1, .9, 1.1, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute 
        w-[400px]
        h-[400px]
        bg-sky-500/10
        rounded-full
        blur-[120px]
        bottom-[10%]
        right-[5%]
        "
      />


      <div className="
      absolute 
      inset-0 
      bg-gradient-to-t 
      from-[#0B1120] 
      via-transparent 
      to-[#0B1120]/60
      "/>



      <div className="
      max-w-7xl 
      mx-auto 
      px-6 
      text-center 
      relative 
      z-10
      ">


        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >


          {/* Badge */}
          <motion.div
            variants={itemVariants}
            animate={{
              boxShadow: [
                "0 0 0px #3b82f6",
                "0 0 25px #3b82f6",
                "0 0 0px #3b82f6"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            className="
            inline-flex 
            items-center 
            gap-2 
            px-4 
            py-1.5 
            rounded-full 
            bg-blue-500/10 
            border 
            border-blue-500/20 
            text-xs 
            font-semibold 
            uppercase 
            tracking-[0.2em] 
            text-blue-400 
            mb-8
            "
          >

            <span className="
            w-2 
            h-2 
            rounded-full 
            bg-blue-400 
            animate-pulse
            "/>

            Available for Freelance Projects

          </motion.div>




          {/* Title */}
          <motion.h1
            variants={itemVariants}
            animate={floatAnimation}
            className="
            text-5xl 
            md:text-8xl 
            font-extrabold 
            tracking-tight 
            leading-[1.1] 
            mb-6 
            max-w-4xl
            "
          >

            Building Modern{" "}

            <span
              className="
            bg-gradient-to-r 
            from-blue-400 
            via-sky-400 
            to-indigo-500 
            bg-clip-text 
            text-transparent
            text-glow
            "
            >
              Web Experiences
            </span>

          </motion.h1>




          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="
            text-gray-400 
            max-w-2xl 
            text-lg 
            md:text-xl 
            leading-relaxed 
            mb-10
            "
          >

            I build fast, scalable, and modern web applications using{" "}

            <span className="text-white font-semibold">
              React
            </span>
            ,{" "}

            <span className="text-white font-semibold">
              Laravel
            </span>
            , and{" "}

            <span className="text-white font-semibold">
              MySQL
            </span>

            .

          </motion.p>





          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="
            flex 
            flex-col 
            sm:flex-row 
            gap-5
            "
          >

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 35px #2563eb"
              }}
              whileTap={{
                scale: .95
              }}
              className="
              bg-blue-600 
              hover:bg-blue-500 
              text-white 
              font-semibold 
              px-8 
              py-4 
              rounded-xl 
              flex 
              items-center 
              gap-2
              "
            >

              View Projects

              <FaArrowRight />

            </motion.a>



            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05
              }}
              className="
              px-8 
              py-4 
              rounded-xl 
              font-semibold 
              bg-[#1E293B]/50 
              text-gray-200 
              border 
              border-white/10
              "
            >

              Contact Me

            </motion.a>


          </motion.div>





          {/* Social */}
          <motion.div
            variants={containerVariants}
            className="
            flex 
            gap-8 
            mt-16 
            text-gray-400 
            text-2xl
            "
          >

            <motion.a
              variants={iconAnimation}
              href="https://github.com/zaidmariam"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-white transition-colors duration-300"
              whileHover={{
                y: -8,
                scale: 1.2
              }}
            >
              <FaGithub />
            </motion.a>



            <motion.a
              variants={iconAnimation}
              href="https://instagram.com/codelyx.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-[#E1306C] transition-colors duration-300"
              whileHover={{
                y: -8,
                scale: 1.2
              }}
            >
              <FaInstagram />
            </motion.a>

          </motion.div>



        </motion.div>

      </div>


    </section>
  );
}