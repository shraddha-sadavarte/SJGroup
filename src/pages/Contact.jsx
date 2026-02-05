import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Cursor Glow
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) return toast.error("Full Name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!isValidEmail(formData.email))
      return toast.error("Enter valid email");
    if (!formData.subject.trim()) return toast.error("Subject is required");
    if (!formData.message.trim())
      return toast.error("Message cannot be empty");

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast.success("Message sent successfully 🚀");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(to_right,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed z-0 h-72 w-72 rounded-full blur-3xl bg-orange-500/20"
        style={{ left: pos.x - 150, top: pos.y - 150 }}
      />

      <div className="relative z-10 grid md:grid-cols-2 gap-10 px-6 md:px-20 py-28">

        {/* ===== LEFT SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold leading-tight">
            Let’s <span className="text-orange-500">Connect</span>
          </h1>

          <p className="text-gray-400 mt-8 max-w-md">
            Have a project in mind? Reach out to SJ Group India.
          </p>

          <div className="mt-12 space-y-6 text-lg">
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
              Survey no. 125/1A, Yash Towers, Ambedkar Chowk, Warje, Pune.
            </div>
          </div>

          {/* ===== MAP (AS IT IS) ===== */}
          <div className="mt-16 rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="SJ Group India Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9835795914955!2d73.80625097371939!3d18.484402970280968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfda2f49639d%3A0x8a5cbd4298614fd7!2sYash%20Towers!5e0!3m2!1sen!2sin!4v1770274479995!5m2!1sen!2sin"
              className="w-full h-64 md:h-80"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* ===== RIGHT FORM ===== */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <h2 className="text-4xl font-semibold">Send a Message</h2>

          {["name", "email", "subject"].map((field, i) => (
            <input
              key={i}
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-orange-500 transition"
            />
          ))}

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-orange-500 transition"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 px-10 py-4 rounded-lg font-semibold shadow-xl hover:bg-orange-600 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

      </div>
    </div>
  );
}
