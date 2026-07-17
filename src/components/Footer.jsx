import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-white/5 py-12 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute w-[250px] h-[250px] bg-blue-500/[0.01] rounded-full blur-[80px] left-[10%] bottom-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <a href="#home" className="group overflow-visible">
  <img
    src="/logoo.png"
    alt="Codelyx Logo"
    className="h-12 md:h-14 w-auto object-contain scale-125 transition-all duration-300 group-hover:scale-[1.3]"
  />
</a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm md:order-2">
          &copy; 2026 Codelyx. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-gray-400 text-xl md:order-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 hover:scale-110 transform"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}