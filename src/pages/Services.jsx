import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import construction from "../assets/images/services/construction.jpg";
import industrial from "../assets/images/services/industrial.jpg";
import realestate from "../assets/images/services/realestate.jpg";

export default function Services() {
  const services = [
    {
      title: "Construction",
      image: construction,
      path: "/services/construction",
      desc: "Residential & Commercial turnkey building solutions.",
    },
    {
      title: "Industrial Plant",
      image: industrial,
      path: "/services/industrial-plant",
      desc: "Heavy industrial infrastructure & plant development.",
    },
    {
      title: "Real Estate",
      image: realestate,
      path: "/services/real-estate",
      desc: "Premium property development & investment solutions.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-orange-500">Services</span>
        </h1>
        <p className="text-gray-400 mb-16">
          Delivering excellence across multiple industries.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
            <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="group bg-slate-900 rounded-2xl overflow-hidden shadow-xl flex flex-col min-h-[430px]"
            >
            <div className="overflow-hidden">
                <img
                src={service.image}
                alt=""
                className="h-60 md:h-64 lg:h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">
                {service.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-grow">
                {service.desc}
                </p>

                <Link
                to={service.path}
                className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition"
                >
                View Details
                </Link>
            </div>
            </motion.div>
        ))}
        </div>
      </div>
    </div>
  );
}
