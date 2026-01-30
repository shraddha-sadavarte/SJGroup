import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png"; 

export default function Home() {
   const projects = [
    {
      title: "Commercial Complex",
      desc: "Modern commercial building with advanced infrastructure planning.",
      image: project1,
        
    },
    {
      title: "Residential Township",
      desc: "Large-scale residential development with premium amenities.",
      image: project2,
    },
    {
      title: "Industrial Infrastructure",
      desc: "High-quality industrial construction with safety compliance.",
      image: project3,
    },
  ];
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center justify-center">

      {/* ===== Background Video ===== */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={video} type="video/mp4" />
      </video>

      {/* ===== Dark Overlay ===== */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-white via-gray-200 to-gray-400"
        >
          Building the Future with
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-orange-500"
        >
          Excellence & Innovation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl"
        >
          Premium Interior & Infrastructure Solutions by SJ Groups India
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
        >
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl">
            Explore Projects
          </button>
        </motion.div>

      </div>
    </section>

      {/* ================= COMPANY HIGHLIGHTS ================= */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

          {[
            { number: "15+", title: "Years of Experience" },
            { number: "200+", title: "Projects Completed" },
            { number: "100%", title: "Client Satisfaction" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
            >
              <h2 className="text-4xl font-bold text-orange-500">
                {item.number}
              </h2>
              <p className="mt-3 text-gray-300">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PROJECTS PREVIEW ================= */}
        <section className="py-20 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-orange-500">Featured Projects</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Delivering excellence across multiple industries.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {project.desc}
                  </p>
                  <button className="mt-4 inline-flex items-center text-orange-500 hover:text-orange-400 transition font-medium">
                    View Details <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-slate-800 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-orange-500">SJ Groups India?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-slate-900 p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-orange-500">
                Quality Assurance
              </h3>
              <p className="text-gray-400 mt-3">
                We follow strict quality control measures to ensure excellence
                in every project we deliver.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-orange-500">
                Timely Delivery
              </h3>
              <p className="text-gray-400 mt-3">
                Our experienced team ensures projects are completed on schedule
                without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20 px-6 text-center bg-orange-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Start Your Next Project?
        </h2>
        <p className="mt-4 text-gray-700">
          Partner with SJ Groups India for reliable and innovative solutions.
        </p>

        <button className="mt-8 bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get a Free Consultation
        </button>

      </section>
    </div>
  );
}
