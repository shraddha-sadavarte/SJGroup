import { motion } from "framer-motion";
import construction1 from "../assets/images/services/construction.jpg";
import construction2 from "../assets/images/services/c1.jpg";
import construction3 from "../assets/images/services/c2.jpg";

export default function ConstructionLayout() {
  return (
    <div className="bg-slate-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src={construction1}
          alt="Construction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-5xl md:text-6xl font-bold text-orange-500"
        >
          Construction Services
        </motion.h1>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center cursor-pointer">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={construction2}
              alt="Site Work"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Residential & Commercial Construction
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We specialize in turnkey construction projects including villas,
              apartments, commercial complexes and structural works with
              precision engineering.
            </p>

            <ul className="space-y-3">
              {[
                "Turnkey Civil Contracts",
                "Structural Engineering",
                "Quality & Safety Compliance",
                "On-time Delivery",
              ].map((item, i) => (
                <li
                  key={i}
                  className="bg-slate-800 p-4 rounded-lg hover:bg-orange-500 hover:text-white transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ================= PROJECT GALLERY ================= */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto cursor-pointer">
          <h2 className="text-center text-4xl font-bold mb-14">
            Recent <span className="text-orange-500">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[construction1, construction2, construction3].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { number: "250+", label: "Projects Completed" },
            { number: "15+", label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-800 p-10 rounded-2xl hover:scale-105 cursor-pointer transition"
            >
              <h3 className="text-4xl font-bold text-orange-500">
                {item.number}
              </h3>
              <p className="text-gray-400 mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center bg-orange-500">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Your Dream Project
        </h2>
        <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition" onClick={() => window.location.href = '/contact'}>
          Request Consultation
        </button>
      </section>

    </div>
  );
}
