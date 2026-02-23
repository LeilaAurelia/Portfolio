import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detecta direção
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Detecta se saiu do topo
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-center z-50
      transition-all duration-300 ease-in-out
      ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div
        className={`
        transition-all duration-300 ease-in-out
        flex items-center justify-between
        px-6
        ${isScrolled
          ? "mt-4 w-[95%] max-w-5xl h-16 rounded-xl backdrop-blur-md bg-white/70 shadow-lg"
          : "w-full h-20 bg-transparent"}
        `}
      >
        {/* Logo */}
        <h2 className="text-lg font-semibold">
          Leila Falcão
        </h2>

        {/* Navbar desktop */}
        <div className="hidden md:flex">
          <Navbar navOpen={true} />
        </div>

        {/* Botão contato desktop */}
        <div className="hidden md:block">
          <a
            href="#contato"
            className="h-9 px-5 rounded-md inline-flex items-center justify-center 
            bg-primary text-primary-foreground 
            hover:bg-primary/90 transition text-sm font-medium"
          >
            Contato
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? "✕" : "☰"}
          </button>
          {navOpen && <Navbar navOpen={navOpen} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
