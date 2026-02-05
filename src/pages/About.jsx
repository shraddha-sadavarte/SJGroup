import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {

  // ================= Animated Counter =================
  const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(counter);
    }, [end]);

    return <span>{count}{suffix}</span>;
  };

  // ================= Progress Animation State =================
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    setAnimateBars(true); // runs only once on mount
  }, []);

  return (
    <div className="relative w-full bg-slate-950 text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <motion.section className="py-28 px-6 text-center "  
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}>
        <h1
          className="text-5xl md:text-6xl font-extrabold"
        >
          About <span className="text-orange-500">SJ Group India</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Delivering excellence in infrastructure & interior solutions for over 15 years.
        </p>
      </motion.section>

      {/* ================= VISION & MISSION ================= */}
        <motion.section
        className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
        <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-orange-500">Vision & Mission</span>
            </h2>

            <p className="text-gray-400 mb-16">
            Trust | Affinity | Strength
            </p>

            <div className="grid md:grid-cols-3 gap-10">

            {[
                {
                title: "Trust",
                desc: "We believe in approachability and open communication with our clients and partners."
                },
                {
                title: "Affinity",
                desc: "We develop relationships, not just projects — building long-term partnerships."
                },
                {
                title: "Strength",
                desc: "Capacity to bring dreams into reality with expertise, dedication, and execution power."
                }
            ].map((item, index) => (
                <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group relative p-8 rounded-2xl 
                backdrop-blur-lg bg-white/5 
                border border-white/10 
                shadow-xl overflow-hidden transition-all duration-500"
                >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-500"></div>

                <h3 className="text-2xl font-bold text-orange-500 relative z-10">
                    {item.title}
                </h3>

                <p className="mt-4 text-gray-300 relative z-10">
                    {item.desc}
                </p>
                </motion.div>
            ))}

            </div>
        </div>
        </motion.section>


      {/* ================= STATS ================= */}
      <motion.section className="py-20 px-6" initial={{opacity:0, y:-40}} whileInView={{opacity:1, y:0}} transition={{ duration:1}} viewport={{once:true, amount:0.3}} >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

          {[
            { end: 15, suffix: "+", label: "Years Experience" },
            { end: 1500, suffix: "+", label: "Successful Projects" },
            { end: 100, suffix: "+", label: "Professional Experts" },
            { end: 300, suffix: "+", label: "Happy Customers" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative p-8 text-center rounded-2xl 
              bg-gradient-to-br from-slate-800 to-slate-900 
              border border-slate-700 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-500"></div>

              <h2 className="text-4xl font-bold text-orange-500 relative z-10">
                <Counter end={item.end} suffix={item.suffix} />
              </h2>
              <p className="text-gray-400 mt-2 relative z-10">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= COMPANY JOURNEY TIMELINE ================= */}
      <motion.section className="py-28 px-6 bg-slate-900 relative" initial={{opacity:0, y:-40}} whileInView={{opacity:1, y:0}} transition={{ duration:1}} viewport={{once:true, amount:0.3}}>
        <h2 className="text-center text-4xl font-bold mb-16">
          Our <span className="text-orange-500">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-transparent -translate-x-1/2"></div>

          {[
            { year: "2009", text: "Company Founded with a Vision of Excellence" },
            { year: "2015", text: "Expanded to Commercial Infrastructure" },
            { year: "2020", text: "Crossed 100+ Successful Projects" },
            { year: "2024", text: "Recognized Industry Leader in Innovation" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{once:true, amount:0.3}}
              className={`relative mb-16 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-1/2 px-6">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg hover:shadow-orange-500/20 transition duration-500">
                  <h3 className="text-orange-500 font-bold">{item.year}</h3>
                  <p className="text-gray-400 mt-2">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* ================= EXPERIENCE PROGRESS BARS ================= */}
      <motion.section className="py-28 px-6" initial={{opacity:0, y:-40}} whileInView={{opacity:1, y:0}} transition={{ duration:1}} viewport={{once:true, amount:0.3}}>
        <h2 className="text-center text-4xl font-bold mb-16">
          Our <span className="text-orange-500">Expertise Level</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">

          {[
            { skill: "Interior Design", value: 95 },
            { skill: "Infrastructure Development", value: 97 },
            { skill: "Project Management", value: 99 },
            { skill: "Quality Assurance", value: 98 },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{item.skill}</span>
                <span className="text-orange-500">{item.value}%</span>
              </div>

              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: animateBars ? `${item.value}%` : 0 }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                  viewport={{once:true, amount:0.3}}
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full shadow-lg"
                ></motion.div>
              </div>
            </div>
          ))}

        </div>
      </motion.section>

    </div>
  );
}
