import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectTimeline() {
  const steps = [
    "Planning",
    "Design",
    "Approval",
    "Construction",
    "Handover",
  ];

  const [active, setActive] = useState(0);

  return (
    <motion.div 
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="py-20 bg-slate-950 text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        Project <span className="text-orange-500">Timeline</span>
      </h2>

      <div className="relative max-w-6xl mx-auto">

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block relative">

          {/* Background Line */}
          <div className="absolute top-6 left-0 w-full h-1 bg-gray-700 rounded" />

          {/* Animated Line */}
          <motion.div
            className="absolute top-6 left-0 h-1 bg-orange-500 rounded"
            animate={{
              width: `${(active / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.4 }}
          />

          <div className="flex justify-between relative">
            {steps.map((step, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg border-4 transition-all duration-300
                  ${
                    index <= active
                      ? "bg-orange-500 border-orange-500 text-white"
                      : "bg-slate-800 border-gray-600 text-gray-400"
                  }`}
                >
                  {index + 1}
                </div>

                <p className="mt-4 text-sm text-center w-24 group-hover:text-orange-400 transition">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden relative flex flex-col items-center gap-16">

          {/* Background Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-700 rounded" />

          {/* Animated Line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-orange-500 rounded"
            animate={{
              height: `${(active / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.4 }}
          />

          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className="relative flex flex-col items-center text-center cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg border-4 transition-all duration-300
                ${
                  index <= active
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-slate-800 border-gray-600 text-gray-400"
                }`}
              >
                {index + 1}
              </div>

              <p className="mt-4 text-base font-medium max-w-[200px]">
                {step}
              </p>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
