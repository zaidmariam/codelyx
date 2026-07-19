"use client";

import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrolling = useRef(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);



  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach(entry => {

          if(entry.isIntersecting && !scrolling.current){
            setActiveSection(entry.target.id);
          }

        });

      },
      {
        rootMargin:"-30% 0px -60% 0px"
      }

    );


    links.forEach(link => {

      const section = document.getElementById(link.id);

      if(section){
        observer.observe(section);
      }

    });


    return () => observer.disconnect();


  },[]);



  const scrollToSection = (e,id)=>{

    e.preventDefault();

    const section = document.getElementById(id);

    if(section){

      scrolling.current = true;

      setActiveSection(id);
      setOpen(false);


      window.scrollTo({

        top: section.offsetTop - 80,
        behavior:"smooth"

      });


      setTimeout(()=>{

        scrolling.current=false;

      },700);

    }

  };



  return (

<header
className={`
fixed
top-0
left-0
w-full
h-20
z-[99999]
transition-all
duration-300

${
scrolled || open
?
"bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10"
:
"bg-transparent"
}

`}
>


<div
className="
max-w-7xl
mx-auto
h-full
px-5
flex
items-center
justify-between
"
>


{/* LOGO */}

<a
href="#home"
onClick={(e)=>scrollToSection(e,"home")}
>

<img
src="/logoo.png"
alt="logo"
className="
w-16
sm:w-20
h-auto
object-contain
"
/>

</a>



{/* DESKTOP MENU */}

<nav
className="
hidden
lg:flex
items-center
gap-6
"
>

{
links.map(link=>(

<a
key={link.id}
href={link.href}
onClick={(e)=>scrollToSection(e,link.id)}
className={`
text-sm
font-medium

${
activeSection===link.id
?
"text-blue-400"
:
"text-gray-300 hover:text-white"
}

`}
>

{link.name}

</a>

))
}

</nav>





{/* MOBILE BUTTON */}

<button

onClick={()=>setOpen(!open)}

className="
lg:hidden
relative
z-[100001]
flex
items-center
justify-center
text-4xl
text-white
bg-[#111827]
border
border-white/10
p-3
rounded-xl
mr-1
"

>

{

open
?
<HiX/>
:
<HiMenu/>

}

</button>



</div>





{/* MOBILE MENU */}

<AnimatePresence>

{

open && (

<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-20
}}

className="
fixed
top-20
left-4
w-[calc(100%-2rem)]
min-h-screen
z-[99998]
bg-[#0B1120]/95
backdrop-blur-xl
rounded-xl
"

>


<div
className="
flex
flex-col
gap-4
p-6
"
>


{

links.map(link=>(

<a

key={link.id}

href={link.href}

onClick={(e)=>scrollToSection(e,link.id)}

className="
text-xl
text-gray-200
py-4
px-5
rounded-xl
hover:bg-white/10
"

>

{link.name}

</a>

))

}


</div>


</motion.div>

)

}

</AnimatePresence>



</header>

  );
}