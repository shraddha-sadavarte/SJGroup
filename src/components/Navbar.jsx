import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Projects  from "../pages/Projects";
import { AnimatePresence } from "framer-motion";
import {motion} from "framer-motion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkStyle =
    "relative text-gray-200 font-medium transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full hover:text-orange-500";

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-charcoal shadow-lg">
      
      {/* Top Accent Line */}
      <div className="h-1 bg-orange-500" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-15 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkStyle}>Home</Link>

            {/*Services deropdown */}
            <div className="relative group" onMouseEnter={() => setServiceOpen(true)} onMouseLeave={() => setServiceOpen(false)}>
  
              {/* Clickable Services Link */}
              <Link 
                to="/services" 
                className={`flex items-center gap-1 ${linkStyle}`}
              >
                Services
                <ChevronDown size={16} className="mt-[2px]" />
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {serviceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-10 left-0 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden"
                  >
                    {[
                      "construction",
                      "industrial-plant",
                      "real-estate",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        to={`/services/${item}`}
                        className="block px-5 py-3 text-gray-300 hover:bg-orange-500 hover:text-white transition"
                      >
                        {item.replace("-", " ").toUpperCase()}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
                <Link to="/about" className={linkStyle}>About</Link>
                <Link to="/projects" className={linkStyle}>Projects</Link>
                <Link to="/contact" className={linkStyle}>Contact</Link>

          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition shadow-md hover:shadow-orange-500/30">
              Get Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-500 hover:text-orange-400 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-6">

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-gray-200 hover:text-orange-500 px-3 py-2 rounded-md transition"
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <div className="flex justify-between items-center">
                  
                  {/* Clickable main link */}
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-200 hover:text-orange-500 px-3 py-2 rounded-md transition"
                  >
                    Services
                  </Link>

                  <button
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="px-3"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {serviceOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {[
                      "construction",
                      "industrial-plant",
                      "real-estate",
                      "hospitality",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        to={`/services/${item}`}
                        onClick={() => {
                          setIsOpen(false);
                          setServiceOpen(false);
                        }}
                        className="block text-gray-300 hover:text-orange-500 transition"
                      >
                        {item.replace("-", " ").toUpperCase()}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block text-gray-200 hover:text-orange-500 px-3 py-2 rounded-md transition"
              >
                About
              </Link>

              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="block text-gray-200 hover:text-orange-500 px-3 py-2 rounded-md transition"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-gray-200 hover:text-orange-500 px-3 py-2 rounded-md transition"
              >
                Contact
              </Link>

              <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition">
                Get Quote
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
