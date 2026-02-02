import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import skyAngle from "../assets/images/skysquare-angle.png";
import resAngle from "../assets/images/residency-angle.png";
import infraSite from "../assets/images/infra-site.png";

const projects = [
  {
    id: "skysquare",
    title: "SkySquare Commercial Hub",
    location: "Pune",
    cover: skyAngle,
  },
  {
    id: "residency",
    title: "Urban Residency",
    location: "Pune",
    cover: resAngle,
  },
  {
    id: "infrastructure",
    title: "Industrial Infrastructure",
    location: "MIDC Zone",
    cover: infraSite,
  },
];

export default function Projects() {
  return (
    <div className="bg-slate-950 text-white py-24 px-6 md:px-20">

      <h1 className="text-5xl font-bold text-center mb-24">
        Our <span className="text-orange-500">Projects</span>
      </h1>

      <div className="space-y-32">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="grid md:grid-cols-2 gap-14 items-center"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src={p.cover}
                alt={p.title}
                className="h-[420px] w-full object-cover hover:scale-110 transition duration-700"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                {p.title}
              </h2>
              <p className="text-gray-400 mt-3">{p.location}</p>

              <Link
                to={`/project/${p.id}`}
                className="inline-block mt-10 bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
