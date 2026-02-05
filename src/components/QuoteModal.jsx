import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ===== VALIDATION =====
  const validate = () => {
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!nameRegex.test(form.name)) {
      toast.error("Enter valid name (letters only)");
      return false;
    }
    if (!emailRegex.test(form.email)) {
      toast.error("Enter valid email format");
      return false;
    }
    if (!phoneRegex.test(form.phone)) {
      toast.error("Enter valid 10-digit phone number");
      return false;
    }
    return true;
  };

  // ===== SUBMIT =====
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

  emailjs.send(
  import.meta.env.VITE_SERVICE_ID,
  import.meta.env.VITE_QUOTA_TEMPLATE_ID,
  form,
  import.meta.env.VITE_PUBLIC_KEY
)

      .then(() => {
        toast.success("Quotation request sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
        onClose();
      })
      .catch(() => {
        toast.error("Failed to send. Try again.");
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.7, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.7, y: 100 }}
            className="bg-slate-900 p-10 rounded-2xl w-[90%] md:w-[500px] text-white relative"
          >
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Request Quotation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800 outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800 outline-none"
              />

              <textarea
                name="message"
                placeholder="Project Details"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Submit Request
              </button>
            </form>

            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-400"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
