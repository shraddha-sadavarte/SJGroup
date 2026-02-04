import { motion } from "framer-motion";
import real1 from "../assets/images/services/realestate.jpg";
import real2 from "../assets/images/services/r1.jpg";
import real3 from "../assets/images/services/r2.jpg";

export default function RealEstateLayout() {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white">

      {/* ===== HERO ===== */}
      <section className="relative h-[75vh] flex items-center justify-center">
        <img
          src={real1}
          alt="Real Estate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-orange-500">
            Real Estate Development
          </h1>
          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
            Premium residential and commercial property solutions for modern investors.
          </p>
        </motion.div>
      </section>

      {/* ===== FEATURE SECTION ===== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[real1, real2, real3].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={img}
                alt=""
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Premium Property {i + 1}
                </h3>
                <p className="text-gray-300 text-sm">
                  Modern design, prime location & high ROI investment opportunity.
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ===== INVESTMENT STATS ===== */}
      <section className="py-20 bg-slate-800 px-6 text-center">
        <h2 className="text-4xl font-bold mb-14">
          Investment <span className="text-orange-500">Highlights</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { number: "120+", label: "Properties Delivered" },
            { number: "25%", label: "Average ROI" },
            { number: "10+", label: "Cities Covered" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900 p-10 rounded-2xl hover:scale-105 transition"
            >
              <h3 className="text-4xl font-bold text-orange-500">
                {item.number}
              </h3>
              <p className="text-gray-400 mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 text-center bg-orange-500">
        <h2 className="text-3xl font-bold mb-4">
          Invest in Your Future Today
        </h2>
        <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Sales Team
        </button>
      </section>

    </div>
  );
}
