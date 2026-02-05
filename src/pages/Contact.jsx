import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Cursor glow tracking
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ===== Animated Grid Background ===== */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(to_right,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ===== Cursor Glow Effect ===== */}
      <div
        className="pointer-events-none fixed z-0 h-72 w-72 rounded-full blur-3xl bg-orange-500/20"
        style={{ left: pos.x - 150, top: pos.y - 150 }}
      />

      {/* ===== Parallax Light Blob ===== */}
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 grid md:grid-cols-2 gap-10 px-6 md:px-20 py-28">

        {/* ===== LEFT INFO SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold leading-tight">
            Let’s <span className="text-orange-500">Connect</span>
          </h1>

          <p className="text-gray-400 mt-8 max-w-md">
            Have a project in mind? Reach out to SJ Group India and let’s
            build something remarkable together.
          </p>

          <div className="mt-16 space-y-8 text-lg">
            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" />
              +91 9921332982
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" />
              sales@sjgroupindia.in
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" />
              Warje, Pune, Maharashtra
            </div>
          </div>

          {/* ===== Map ===== */}
          <div className="mt-16 rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9835795914955!2d73.80625097371939!3d18.484402970280968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfda2f49639d%3A0x8a5cbd4298614fd7!2sYash%20Towers!5e0!3m2!1sen!2sin!4v1770274479995!5m2!1sen!2sin" 
              className="w-full h-64 md:h-80"
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </motion.div>

        {/* ===== RIGHT FORM SECTION ===== */}
        <motion.form
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-semibold">Send a Message</h2>

          {/* Floating Inputs */}
          {["Full Name", "Email Address", "Subject"].map((label, i) => (
            <div key={i} className="relative">
              <input
                required
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-orange-500 transition"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-500
                peer-focus:-top-3
                peer-focus:text-sm
                peer-focus:text-orange-500">
                {label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              rows="4"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-orange-500 transition"
            />
            <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-500
              peer-focus:-top-3
              peer-focus:text-sm
              peer-focus:text-orange-500">
              Your Message
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 px-10 py-4 rounded-lg font-semibold shadow-xl hover:bg-orange-600 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
