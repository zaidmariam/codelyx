import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-[#0F172A]/50 text-white relative overflow-hidden">
      {/* Decorative ambient background blobs */}
      <div className="absolute w-[450px] h-[450px] bg-blue-600/[0.02] rounded-full blur-[100px] -left-20 bottom-0 pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] bg-sky-500/[0.02] rounded-full blur-[80px] -right-20 top-0 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-wider text-blue-400 mb-4">
            CONTACT ME
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 leading-tight max-w-xl mx-auto">
            Let's Build Something <br />
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Amazing Together.
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-base max-w-md mx-auto">
            Have a project in mind, a job opportunity, or just want to connect? Send a message and let's get started.
          </p>
        </motion.div>

        {/* Contact Form Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#0B1120]/60 border border-white/5 p-8 sm:p-10 rounded-3xl backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-left max-w-xl mx-auto relative overflow-hidden"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <FaCheckCircle className="text-5xl text-emerald-400 mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                Thank you for reaching out. I'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-[#0B1120] border border-white/5 focus:border-blue-500/40 text-white placeholder-gray-600 rounded-xl px-5 py-4 outline-none transition-all duration-300 text-sm focus:ring-1 focus:ring-blue-500/30"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-[#0B1120] border border-white/5 focus:border-blue-500/40 text-white placeholder-gray-600 rounded-xl px-5 py-4 outline-none transition-all duration-300 text-sm focus:ring-1 focus:ring-blue-500/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project idea in detail..."
                  className="w-full bg-[#0B1120] border border-white/5 focus:border-blue-500/40 text-white placeholder-gray-600 rounded-xl px-5 py-4 outline-none transition-all duration-300 text-sm focus:ring-1 focus:ring-blue-500/30 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}