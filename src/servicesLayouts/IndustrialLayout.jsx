import { motion } from "framer-motion";
import industrial1 from "../assets/images/services/industrial.jpg";
import industrial2 from "../assets/images/services/i1.jpg";
import industrial3 from "../assets/images/services/i2.jpg";

export default function IndustrialLayout() {
  return (
    <div className="bg-slate-950 text-white">

      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src={industrial1}
          alt="Industrial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-5xl md:text-6xl font-bold text-orange-500 text-center"
        >
          Industrial Plant Development
        </motion.h1>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Heavy Industrial Infrastructure
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We design and execute large-scale industrial plants including
              manufacturing units, warehouses, and energy facilities with
              advanced engineering precision and compliance standards.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Factory Setup",
                "Power Plants",
                "Steel Structures",
                "Warehouse Projects",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-800 p-4 rounded-xl text-center hover:bg-orange-500 hover:text-white transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.img
            src={industrial2}
            alt="Plant"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="py-20 bg-slate-900 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14">
            Our <span className="text-orange-500">Process</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Planning & Design",
                desc: "Detailed engineering planning & feasibility studies.",
              },
              {
                title: "Execution",
                desc: "Precision construction with safety compliance.",
              },
              {
                title: "Quality Testing",
                desc: "Final inspection and operational readiness.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMAGE GALLERY ===== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[industrial1, industrial2, industrial3].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt=""
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 text-center bg-orange-500">
        <h2 className="text-3xl font-bold mb-4">
          Build Your Industrial Future With Us
        </h2>
        <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Industrial Quote
        </button>
      </section>

    </div>
  );
}
