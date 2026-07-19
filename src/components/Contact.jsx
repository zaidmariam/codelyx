import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_xdqliwh",
        "template_f4qfibe",
        formRef.current,
        "Plt4YIUVD6W_r0jTm"
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setToast({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setTimeout(() => {
        setToast(null);
      }, 4000);
    } catch (err) {
      console.log(err);

      setStatus("idle");

      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });

      setTimeout(() => {
        setToast(null);
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#0B1120] overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-[150px]" />
      <div className="absolute right-0 top-0 w-[450px] h-[450px] rounded-full bg-sky-500/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
            CONTACT
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind or looking for a developer?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111827]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-7">

                {/* Email */}
                <a
                  href="mailto:codelyx.dev@gmail.com"
                  className="flex items-center gap-5 hover:translate-x-1 transition group cursor-pointer"
                >
                  <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="font-semibold group-hover:text-blue-400 transition-colors duration-300">codelyx.dev@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+212718144877"
                  className="flex items-center gap-5 hover:translate-x-1 transition group cursor-pointer"
                >
                  <div className="h-14 w-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 transition-all duration-300">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="font-semibold group-hover:text-sky-400 transition-colors duration-300">+212 718-144877</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/zaidmariam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 hover:translate-x-1 transition group cursor-pointer"
                >
                  <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-all duration-300">
                    <FaGithub size={22} />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">GitHub</p>
                    <p className="font-semibold group-hover:text-white transition-colors duration-300">github.com/zaidmariam</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/codelyx.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 hover:translate-x-1 transition group cursor-pointer"
                >
                  <div className="h-14 w-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500/20 transition-all duration-300">
                    <FaInstagram size={22} />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Instagram</p>
                    <p className="font-semibold group-hover:text-[#E1306C] transition-colors duration-300">@codelyx.dev</p>
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111827]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                required
              />


              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none bg-[#0B1120] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 transition-all duration-300 rounded-xl py-4 font-semibold flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(59,130,246,0.25)]"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-emerald-400 text-xl" />

                    <div>
                      <h4 className="font-semibold text-emerald-400">
                        Message Sent Successfully
                      </h4>

                      <p className="text-sm text-gray-300">
                        Thank you! I'll get back to you as soon as possible.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className={`fixed bottom-6 right-6 px-6 py-4 rounded-2xl shadow-xl backdrop-blur-lg border z-50 ${toast.type === "success"
                ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300"
                : "bg-red-500/15 border-red-500/30 text-red-300"
              }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}