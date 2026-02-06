import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 120, suffix: "+", label: "Skilled Workers" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div 
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
    className="bg-slate-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        Our Achievements
      </h2>

      <div
        ref={ref}
        className="grid md:grid-cols-4 gap-10 text-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition"
          >
            <h2 className="text-5xl font-bold text-orange-500">
              {inView && (
                <CountUp
                  end={stat.value}
                  duration={2}
                />
              )}
              {stat.suffix}
            </h2>
            <p className="mt-4 text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
