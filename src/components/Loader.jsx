import { motion } from "framer-motion";

export default function Loader() {

  return (
    <div className="
      fixed 
      inset-0 
      bg-[#0B1120]
      flex 
      items-center 
      justify-center
      z-[9999]
      overflow-hidden
    ">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale:[1,1.4,1],
          opacity:[0.2,0.5,0.2]
        }}
        transition={{
          duration:3,
          repeat:Infinity
        }}
        className="
          absolute
          w-[300px]
          h-[300px]
          bg-blue-500
          rounded-full
          blur-[120px]
        "
      />


      <div className="relative flex flex-col items-center">


        {/* Logo */}
        <motion.div

          initial={{
            opacity:0,
            scale:.5,
            rotate:-20
          }}

          animate={{
            opacity:1,
            scale:1,
            rotate:0
          }}

          transition={{
            duration:.8,
            type:"spring"
          }}

          className="
            w-28
            h-28
            rounded-3xl
            overflow-hidden
            border
            border-blue-400/30
            shadow-[0_0_40px_rgba(59,130,246,.5)]
          "
        >

          <img
            src="/logo.jpeg"
            alt="Codelyx"
            className="
              w-full
              h-full
              object-cover
            "
          />

        </motion.div>



        {/* Name */}

        <motion.h1

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:.4,
            duration:.6
          }}

          className="
            mt-6
            text-5xl
            font-extrabold
            tracking-[0.25em]
            text-transparent
            bg-gradient-to-r
            from-blue-400
            via-sky-400
            to-indigo-500
            bg-clip-text
          "
        >
          CODELYX

        </motion.h1>



        {/* Loading bar */}

        <div className="
          mt-8
          w-64
          h-1.5
          bg-white/10
          rounded-full
          overflow-hidden
        ">

          <motion.div

            initial={{
              x:"-100%"
            }}

            animate={{
              x:"100%"
            }}

            transition={{
              duration:1.5,
              repeat:Infinity,
              ease:"easeInOut"
            }}

            className="
              h-full
              w-full
              bg-gradient-to-r
              from-blue-400
              to-indigo-500
            "

          />

        </div>



        <motion.p

          animate={{
            opacity:[.3,1,.3]
          }}

          transition={{
            duration:1.5,
            repeat:Infinity
          }}

          className="
            mt-5
            text-gray-400
            text-sm
            font-mono
          "
        >

          Building digital experiences...

        </motion.p>


      </div>

    </div>
  );
}