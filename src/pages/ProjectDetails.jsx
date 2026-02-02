import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ===== Images =====
import skyLobby from "../assets/images/skysquare-lobby.png";
import skyGarden from "../assets/images/skysquare-garden.png";
import skyMap from "../assets/images/playing.png";

import resGarden from "../assets/images/residency-angle.png";
import infraSite from "../assets/images/infra-site.png";

// ===== Project Data =====
const projectDetails = {
  skysquare: {
    title: "SkySquare Commercial Hub",
    location: "Pune",
    main: skyLobby,
    thumbs: [skyLobby, skyGarden, skyMap],
    area: "1,20,000 sq.ft",
    floors: "12 Floors",
    year: "2023",
    overview:
      "A landmark commercial project designed with modern architectural planning and efficient space utilization.",
  },

  residency: {
    title: "Urban Residency",
    location: "Pune",
    main: resGarden,
    thumbs: [resGarden],
    area: "2,00,000 sq.ft",
    floors: "18 Floors",
    year: "2022",
    overview:
      "Premium residential township with lifestyle-focused infrastructure and modern amenities.",
  },

  infrastructure: {
    title: "Industrial Infrastructure",
    location: "MIDC Zone",
    main: infraSite,
    thumbs: [infraSite],
    area: "3,50,000 sq.ft",
    floors: "8 Units",
    year: "2021",
    overview:
      "Industrial construction with world-class safety and operational standards.",
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const data = projectDetails[id];

  // safety
  if (!data) return null;

  const [main, setMain] = useState(data.main);

  // scroll to top on load / refresh
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration:1}} viewport={{once:true, amount:0.3}}
      className="relative bg-slate-950 text-white px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 blur-3xl pointer-events-none" />

      {/* ===== TITLE ===== */}
      <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration:1}} viewport={{once:true, amount:0.3}} >
        <h1 className="text-5xl font-bold text-orange-500 tracking-wide">
          {data.title}
        </h1>
        <p className="text-gray-400 mt-2">{data.location}</p>
      </motion.div>

      {/* ===== MAIN IMAGE ===== */}
      <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration:1}} viewport={{once:true, amount:0.3}}
        className="mt-14 flex justify-center"
        whileHover={{ scale: 1.02 }}
      >
        <div className="w-full md:w-[70%] aspect-[16/9] bg-slate-900 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
          <motion.img
            src={main}
            alt="project"
            className="max-h-full max-w-full object-contain"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>

      {/* ===== THUMBNAILS ===== */}
      <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration:1}} viewport={{once:true, amount:0.3}}
        className="flex gap-6 mt-8 justify-center flex-wrap"
      >
        {data.thumbs.map((img, i) => (
          <motion.div
            key={i}
            onClick={() => setMain(img)}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`aspect-[4/3] w-36 bg-slate-900 rounded-lg p-2 cursor-pointer border-2 
            ${main === img ? "border-orange-500" : "border-transparent"}`}
          >
            <img
              src={img}
              alt="thumb"
              className="h-full w-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ===== INFO CARDS ===== */}
      <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration:1}} viewport={{once:true, amount:0.3}}
        className="grid md:grid-cols-3 gap-10 mt-24 text-center"
      >
        {[
          { value: data.area, label: "Total Area" },
          { value: data.floors, label: "Floors" },
          { value: data.year, label: "Completed" },
        ].map((info, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12 }}
            className="bg-slate-900 p-10 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
          >
            <h2 className="text-3xl text-orange-500 font-bold">
              {info.value}
            </h2>
            <p className="text-gray-400 mt-3">{info.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== OVERVIEW ===== */}
      <motion.div
      initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration:1}} viewport={{once:true, amount:0.3}}
        className="mt-20 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold mb-6">Project Overview</h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          {data.overview}
        </p>
      </motion.div>
    </motion.div>
  );
}
