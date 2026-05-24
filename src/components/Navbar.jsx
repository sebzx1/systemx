import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo } from "../assets";
import CTAButton from "./CTAButton";
import { WHATSAPP_URL_PROJECT } from "../constants/whatsapp";
import "./Navbar.scss";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#services" },
  { label: "Negocios", href: "#business" },
  { label: "Stack", href: "#tech" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-30 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
            setMenuOpen(false);
          }}
        >
          <img src={logo} alt="SystemX logo" className="w-9 h-9 object-contain logo" />
          <span className="text-white text-[18px] font-bold">SystemX</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-secondary hover:text-white text-[15px] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CTAButton href={WHATSAPP_URL_PROJECT} className="!py-2 !px-5 !text-sm">
            Hablemos
          </CTAButton>
        </div>

        <button
          type="button"
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary/98 backdrop-blur-md border-t border-white/5 py-6 px-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-secondary hover:text-white text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <CTAButton href={WHATSAPP_URL_PROJECT} className="w-full">
                Hablemos de tu proyecto
              </CTAButton>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
