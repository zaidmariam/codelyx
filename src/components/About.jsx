import { motion } from "framer-motion";
import { FaReact, FaLaravel, FaJs } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiVite } from "react-icons/si";

export default function About() {

  const container = {
    hidden:{
      opacity:0
    },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.15
      }
    }
  };


  const item = {
    hidden:{
      opacity:0,
      y:40
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:.6,
        type:"spring",
        stiffness:100
      }
    }
  };


  const techs = [
    { name:"React", icon:<FaReact className="text-cyan-400"/> },
    { name:"Laravel", icon:<FaLaravel className="text-red-500"/> },
    { name:"JavaScript", icon:<FaJs className="text-yellow-400"/> },
    { name:"MySQL", icon:<SiMysql className="text-blue-400"/> },
    { name:"Tailwind CSS", icon:<SiTailwindcss className="text-sky-400"/> },
    { name:"Vite", icon:<SiVite className="text-purple-400"/> },
  ];


  return (

<section
id="about"
className="
py-28 
bg-[#0F172A]/50 
text-white 
relative 
overflow-hidden
"
>


{/* Animated Background */}

<motion.div
animate={{
x:[0,50,-20,0],
y:[0,-30,20,0],
scale:[1,1.2,.9,1]
}}
transition={{
duration:15,
repeat:Infinity,
ease:"easeInOut"
}}
className="
absolute
w-[350px]
h-[350px]
bg-blue-500/10
rounded-full
blur-[100px]
-right-20
top-20
"
/>



<div
className="
max-w-7xl
mx-auto
px-6
grid
lg:grid-cols-2
gap-16
items-center
"
>


{/* LEFT */}


<motion.div
variants={container}
initial="hidden"
whileInView="show"
viewport={{once:true,margin:"-100px"}}
>


<motion.div
variants={item}
className="
inline-flex
px-4
py-1.5
rounded-full
bg-blue-500/10
border
border-blue-500/20
text-xs
tracking-[.2em]
text-blue-400
mb-6
"
>
ABOUT ME
</motion.div>




<motion.h2
variants={item}
className="
text-3xl
md:text-5xl
font-extrabold
leading-tight
mb-6
"
>

Crafting ideas into <br/>

<span
className="
bg-gradient-to-r
from-blue-400
to-sky-400
bg-clip-text
text-transparent
"
>
functional digital products.
</span>

</motion.h2>





<motion.p
variants={item}
className="
text-gray-300
text-lg
leading-relaxed
mb-6
"
>

Hi, I'm{" "}
<span className="text-white font-semibold">
Alex Rivera
</span>
, a Full Stack Developer and founder of{" "}
<span className="text-blue-400">
Codelyx
</span>
. I create modern web applications with clean code and beautiful experiences.

</motion.p>




<motion.p
variants={item}
className="
text-gray-400
leading-relaxed
mb-10
"
>

With years of experience blending front-end interaction with powerful back-end systems, I build websites that are fast, scalable and reliable.

</motion.p>






{/* TECH */}

<motion.div
variants={container}
className="
flex
flex-wrap
gap-3
"
>


{techs.map((tech,index)=>(


<motion.div

key={tech.name}

variants={item}

whileHover={{
scale:1.1,
y:-5
}}

whileTap={{
scale:.95
}}

className="
bg-[#1E293B]/40
border
border-white/10
px-4
py-2.5
rounded-xl
flex
items-center
gap-3
text-sm
text-gray-300
backdrop-blur-md
cursor-pointer
hover:border-blue-400/40
transition
"

>

{tech.icon}

<span>
{tech.name}
</span>


</motion.div>


))}


</motion.div>



</motion.div>





{/* RIGHT CARD */}


<motion.div

initial={{
opacity:0,
x:80,
scale:.9
}}

whileInView={{
opacity:1,
x:0,
scale:1
}}

transition={{
duration:.8,
type:"spring"
}}

viewport={{
once:true
}}

className="
flex
justify-center
"

>


<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
duration:5,
repeat:Infinity,
ease:"easeInOut"
}}

className="
relative
"


>


{/* Glow */}

<motion.div

animate={{
opacity:[.1,.4,.1]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
absolute
inset-0
bg-gradient-to-tr
from-blue-600
to-sky-400
rounded-3xl
blur-3xl
"

/>




<div
className="
relative
w-80
h-80
rounded-3xl
bg-[#0B1120]/90
border
border-white/10
p-6
flex
flex-col
justify-between
backdrop-blur-xl
overflow-hidden
shadow-2xl
"
>



<div
className="
absolute
inset-0
bg-grid-pattern
opacity-10
"
/>




<div className="
flex
justify-between
z-10
">

<div className="flex gap-2">

<span className="w-2.5 h-2.5 rounded-full bg-red-500"/>
<span className="w-2.5 h-2.5 rounded-full bg-yellow-500"/>
<span className="w-2.5 h-2.5 rounded-full bg-green-500"/>

</div>


<span className="
text-xs
font-mono
text-gray-500
">
codelyx.config
</span>


</div>





<div className="
flex
flex-col
items-center
z-10
"
>

<motion.img

animate={{
rotate:[0,3,-3,0]
}}

transition={{
duration:5,
repeat:Infinity
}}

src="/logo.jpeg"

className="
w-24
h-24
rounded-2xl
object-cover
border
border-white/10
shadow-xl
"

/>


<h3 className="
text-xl
font-bold
mt-4
">
Codelyx
</h3>


<p className="
text-blue-400
text-xs
font-mono
">
v2.0.26
</p>


</div>





<div className="
flex
justify-between
text-xs
text-gray-500
font-mono
z-10
">

<span>
LOC: 12,403
</span>

<span>
EST. 2026
</span>


</div>



</div>


</motion.div>


</motion.div>



</div>


</section>

  );
}