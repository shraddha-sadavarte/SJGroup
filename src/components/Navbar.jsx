import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Projects from "../pages/Projects";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "#" },
    { name: "Contact", path: "#" },
  ];

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
              alt="SJ Group Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={linkStyle}
              >
                {link.name}
              </Link>
            ))}
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
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-200 hover:text-orange-500 px-3 py-2 rounded-md transition"
                >
                  {link.name}
                </Link>
              ))}
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
