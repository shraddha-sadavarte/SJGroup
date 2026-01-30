import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#" },
    { name: "Projects", path: "#" },
    { name: "About", path: "#" },
    { name: "Contact", path: "#" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 shadow-lg bg-gradient-to-r from-slate-200 via-slate-500 to-slate-900 ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
              Get Quote
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-500 hover:text-orange-400 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md transition"
                >
                  {link.name}
                </a>
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
