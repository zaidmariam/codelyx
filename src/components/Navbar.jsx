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

  const isScrolling = useRef(false);



  // Scroll background
  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);




  // Active section
  useEffect(() => {


    const observer = new IntersectionObserver(
      (entries)=>{

        entries.forEach((entry)=>{

          if(entry.isIntersecting && !isScrolling.current){

            setActiveSection(entry.target.id);

          }

        });

      },
      {
        rootMargin:"-30% 0px -60% 0px",
        threshold:0
      }
    );



    links.forEach((link)=>{

      const section =
      document.getElementById(link.id);


      if(section){
        observer.observe(section);
      }

    });



    return ()=>observer.disconnect();


  }, []);




  // Smooth scroll function
  const handleScrollTo = (
    e,
    id
  )=>{

    e.preventDefault();


    const section =
    document.getElementById(id);


    if(section){

      isScrolling.current = true;

      setActiveSection(id);

      setOpen(false);


      const offset = 90;


      const position =
      section.getBoundingClientRect().top +
      window.scrollY -
      offset;



      window.scrollTo({

        top:position,

        behavior:"smooth"

      });



      setTimeout(()=>{

        isScrolling.current=false;

      },800);

    }

  };




  // Close menu on resize
  useEffect(()=>{

    const resize = ()=>{

      if(window.innerWidth >= 1024){

        setOpen(false);

      }

    };


    window.addEventListener(
      "resize",
      resize
    );


    return ()=>{

      window.removeEventListener(
        "resize",
        resize
      );

    };


  },[]);



  return (
    <header
      className={`
      fixed
      top-0
      left-0
      w-full
      z-[10000]
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
        px-4
        sm:px-6
        lg:px-8
        h-16
        sm:h-20
        flex
        items-center
        justify-between
        "
      >

        {/* LOGO */}

        <a
          href="#home"
          onClick={(e)=>handleScrollTo(e,"home")}
        >

          <img
            src="/logoo.png"
            alt="Logo"
            className="
            h-10
            sm:h-12
            lg:h-16
            w-auto
            object-contain
            hover:scale-105
            transition
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

          <div
            className="
            flex
            gap-6
            bg-[#111827]/50
            border
            border-white/10
            px-6
            py-2
            rounded-full
            backdrop-blur
            "
          >

            {
              links.map((link)=>{

                const active =
                activeSection === link.id;


                return (

                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e)=>handleScrollTo(e,link.id)}
                    className={`
                    relative
                    text-sm
                    font-medium
                    transition
                    ${
                      active
                      ?
                      "text-blue-400"
                      :
                      "text-gray-400 hover:text-white"
                    }
                    `}
                  >

                    {link.name}


                    {
                      active && (

                        <motion.span
                          layoutId="active"
                          className="
                          absolute
                          left-0
                          right-0
                          -bottom-1
                          h-[2px]
                          bg-blue-500
                          rounded-full
                          "
                        />

                      )
                    }


                  </a>

                );

              })
            }

          </div>



          <a
            href="#contact"
            onClick={(e)=>handleScrollTo(e,"contact")}
            className="
            bg-blue-600
            hover:bg-blue-500
            text-white
            px-6
            py-2.5
            rounded-full
            font-semibold
            text-sm
            transition
            "
          >
            Let's Talk
          </a>


        </nav>





        {/* MOBILE BUTTON */}

        <button
          onClick={()=>setOpen(!open)}
          className="
          lg:hidden
          text-3xl
          text-gray-300
          bg-[#111827]/70
          border
          border-white/10
          p-2
          rounded-xl
          cursor-pointer
          "
          aria-label="menu"
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

              transition={{
                duration:.25
              }}

              className="
              lg:hidden
              absolute
              top-full
              left-0
              w-full
              z-[9999]
              bg-[#0B1120]/95
              backdrop-blur-xl
              border-t
              border-white/10
              "

            >


              <div
                className="
                flex
                flex-col
                gap-2
                px-5
                py-6
                "
              >


                {
                  links.map((link)=>{


                    const active =
                    activeSection === link.id;



                    return (

                      <a
                        key={link.id}
                        href={link.href}
                        onClick={(e)=>handleScrollTo(e,link.id)}
                        className={`
                        block
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        text-base
                        transition
                        ${
                          active
                          ?
                          "text-blue-400 bg-blue-500/10"
                          :
                          "text-gray-300 hover:text-white hover:bg-white/5"
                        }
                        `}
                      >

                        {link.name}

                      </a>

                    );


                  })
                }



                <a
                  href="#contact"
                  onClick={(e)=>handleScrollTo(e,"contact")}
                  className="
                  mt-3
                  text-center
                  bg-blue-600
                  hover:bg-blue-500
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                  "
                >

                  Let's Talk

                </a>



              </div>


            </motion.div>

          )
        }


      </AnimatePresence>


    </header>

  );

}