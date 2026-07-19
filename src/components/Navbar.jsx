"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0B1120]/80 backdrop-blur-md border-white/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="group">
          <img
            src="/logoo.png"
            alt="Codelyx Logo"
            className="
              h-10 
              sm:h-12 
              md:h-16
              w-auto
              object-contain
              transition-transform duration-300
              group-hover:scale-110
            "
          />
        </a>


        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">

          <div className="
            flex items-center 
            gap-4 lg:gap-6
            bg-[#111827]/40
            border border-white/5
            px-4 lg:px-6
            py-2
            rounded-full
            backdrop-blur-sm
          ">
            {links.map((link) => {
              const active = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`
                    relative
                    text-xs lg:text-sm
                    font-medium
                    py-1
                    transition
                    ${
                      active
                        ? "text-blue-400"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {link.name}

                  {active && (
                    <motion.span
                      layoutId="nav"
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-[2px]
                        bg-blue-500
                        rounded-full
                      "
                    />
                  )}

                </a>
              );
            })}
          </div>


          <a
            href="#contact"
            className="
              bg-blue-600
              hover:bg-blue-500
              text-white
              text-sm
              font-semibold
              px-5
              py-2.5
              rounded-full
              transition
              hover:scale-105
            "
          >
            Let's Talk
          </a>

        </nav>



        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-2xl
            text-gray-300
            bg-[#111827]/70
            border
            border-white/10
            p-2
            rounded-xl
          "
          aria-label="menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </div>



      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{opacity:0,height:0}}
            animate={{opacity:1,height:"auto"}}
            exit={{opacity:0,height:0}}
            className="
              md:hidden
              bg-[#0B1120]/95
              backdrop-blur-xl
              border-t
              border-white/10
            "
          >

            <div className="px-5 py-5 flex flex-col gap-3">

              {links.map((link)=>(

                <a
                  key={link.name}
                  href={link.href}
                  onClick={()=>setOpen(false)}
                  className="
                    text-gray-300
                    hover:text-white
                    py-3
                    text-base
                    border-b
                    border-white/5
                  "
                >
                  {link.name}
                </a>

              ))}


              <a
                href="#contact"
                onClick={()=>setOpen(false)}
                className="
                  mt-3
                  text-center
                  bg-blue-600
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                "
              >
                Let's Talk
              </a>


            </div>

          </motion.div>

        )}

      </AnimatePresence>


    </header>
  );
}