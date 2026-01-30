import React from "react";
import {
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyle =
    "relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full hover:text-orange-500";

  return (
    <footer className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-charcoal text-gray-300">
      
      {/* TOP ORANGE ACCENT */}
      <div className="h-1 bg-orange-500" />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div>
            <img src={logo} alt="SJ Group" className="h-12 mb-4" />
            <p className="text-gray-400 leading-relaxed mb-6">
              Building excellence and innovation in construction since day one.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-orange-500 hover:text-white transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-orange-500 pl-3">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Commercial Building",
                "Residential Projects",
                "Infrastructure",
                "Renovations",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className={linkStyle}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-orange-500 pl-3">
              Company
            </h4>
            <ul className="space-y-3">
              {["About Us", "Projects", "Careers", "Contact"].map((item, i) => (
                <li key={i}>
                  <a href="#" className={linkStyle}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-orange-500 pl-3">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-orange-500 mt-1" />
                <span>
                  +91 9921332982 <br /> +91 7489099449
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-1" />
                <span>
                  Survey no. 125/1A, Yash Towers,
                  Ambedkar Chowk, Warje,
                  Pune.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} SJ GROUPS INDIA. All rights reserved.
          </p>

          <ul className="flex gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item, i) => (
              <li key={i}>
                <a href="#" className={linkStyle}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
