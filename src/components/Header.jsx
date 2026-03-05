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

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setNavOpen(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-center z-50
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          flex items-center justify-between
          ${
            isScrolled
              ? "mt-4 w-[94%] max-w-5xl h-[60px] px-5 rounded-2xl header-scrolled"
              : "w-full h-[76px] px-6 md:px-16 xl:px-24 bg-transparent"
          }`}
      >
        {/* Logo */}
        <a
          href="/"
          className="font-serif-display text-[17px] tracking-tight text-[hsl(var(--foreground))] hover:opacity-70 transition-opacity"
        >
          Leila Falcão
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex">
          <Navbar navOpen={true} />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/leila-f-270a4813a/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full grid place-items-center border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] hover:border-[hsl(var(--accent)/0.4)] transition-all"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.75 3C4.24 3 3 4.24 3 5.75V18.25C3 19.76 4.24 21 5.75 21H18.25C19.76 21 21 19.76 21 18.25V5.75C21 4.24 19.76 3 18.25 3H5.75ZM7.75 6.5C8.44 6.5 9 7.06 9 7.75C9 8.44 8.44 9 7.75 9C7.06 9 6.5 8.44 6.5 7.75C6.5 7.06 7.06 6.5 7.75 6.5ZM7 10H8.5V17.5H7V10ZM10.5 10H12V10.77C12.5 10.29 13.2 10 14 10C15.65 10 17 11.35 17 13V17.5H15.5V13.25C15.5 12.56 14.94 12 14.25 12C13.56 12 13 12.56 13 13.25V17.5H11.5V10.5C11.5 10.22 11.28 10 11 10H10.5V10Z" />
            </svg>
          </a>
          <a
            href="#contact"
            className="h-9 px-5 rounded-full inline-flex items-center
              bg-[hsl(var(--foreground))] text-[hsl(var(--background))]
              hover:opacity-80 transition-all text-sm font-medium"
          >
            Contato
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden w-9 h-9 rounded-xl border border-[hsl(var(--border))] bg-white grid place-items-center transition-all"
          aria-label="Menu"
        >
          <div className="w-4 flex flex-col gap-1">
            <span
              className={`block h-px bg-[hsl(var(--foreground))] transition-all duration-300 ${navOpen ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <span
              className={`block h-px bg-[hsl(var(--foreground))] transition-all duration-300 ${navOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-[hsl(var(--foreground))] transition-all duration-300 ${navOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav dropdown */}
      <div
        className={`absolute top-full left-4 right-4 mt-2 md:hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${navOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="bg-white/95 backdrop-blur-lg border border-[hsl(var(--border))] rounded-2xl shadow-xl p-4">
          <Navbar navOpen={navOpen} mobile onClose={() => setNavOpen(false)} />
          <div className="mt-4 pt-4 border-t border-[hsl(var(--border))]">
            <a
              href="#contact"
              onClick={() => setNavOpen(false)}
              className="w-full h-10 rounded-xl bg-[hsl(var(--foreground))] text-[hsl(var(--background))] 
                flex items-center justify-center text-sm font-medium"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
